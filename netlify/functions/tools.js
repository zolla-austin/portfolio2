import tools from "./data/tools.json" with { type: "json" };

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

function respond(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

function routeParts(event) {
  const rawPath = (event.path || "").split("?")[0];
  let rest = rawPath;

  const apiIndex = rest.indexOf("/api/");
  const functionIndex = rest.indexOf("/.netlify/functions/");

  if (apiIndex !== -1) {
    rest = rest.slice(apiIndex + "/api/".length);
  } else if (functionIndex !== -1) {
    rest = rest.slice(functionIndex + "/.netlify/functions/".length);
  } else {
    rest = rest.replace(/^\/+/, "");
  }

  return rest.split("/").filter(Boolean);
}

export async function handler(event) {
  try {
    if (event.httpMethod !== "GET") {
      return respond(405, { error: "Method not allowed" });
    }

    const parts = routeParts(event);

    if (parts[0] !== "tools" || parts.length > 2) {
      return respond(404, { error: "Route not found" });
    }

    if (parts.length === 2) {
      const tool = tools.find((item) => item.id === parts[1]);
      if (!tool) {
        return respond(404, { error: "Tool not found" });
      }
      return respond(200, { data: tool });
    }

    const category = event.queryStringParameters?.category;
    const data = category
      ? tools.filter((item) => item.category.toLowerCase() === category.toLowerCase())
      : tools;

    return respond(200, { data });
  } catch {
    return respond(500, { error: "Something went wrong" });
  }
}
