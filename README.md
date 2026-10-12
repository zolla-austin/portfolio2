# Zolla Austine — Portfolio

Full-stack developer portfolio showcasing projects, skills, and services.

## About
Built by Zolla Austine, a Software Engineer and Full-Stack Developer based in
Lagos, Nigeria, specializing in end-to-end web applications — from database
and API design to polished, user-focused frontends.

## Tech Stack
**Frontend:** React, Next.js, React Native, Tailwind CSS, TypeScript
**Backend:** Node.js, Express, PostgreSQL, PHP/Laravel, Supabase
**Tools:** Git, GitHub, Netlify

## Featured Projects
- **EasyShop** — Full-stack e-commerce platform with Paystack integration,
  admin dashboard, and a React Native rider delivery app with live GPS tracking.
- **Emperor** — Luxury product catalog site (perfumes, suits, T-shirts) with
  WhatsApp-based ordering.

## Built with AI assistance
This portfolio was updated with help from Claude (Anthropic) to reposition
it from a frontend-only focus to full-stack, with code changes and deployment
handled via Cursor.

## Contact
Email: austinezolla@gmail.com
GitHub: github.com/zolla-austin

## API

The Tech Stack section loads its tools from a small REST API. The API runs through Netlify Functions. `netlify dev` is required to test it locally. Plain `npm run dev` does not serve `/api`.

| Method | Path | Result |
| --- | --- | --- |
| GET | `/api/tools` | `{ "data": [ ...all tools ] }` |
| GET | `/api/tools?category=Frontend` | Tools in that category. The match is case-insensitive. |
| GET | `/api/tools/:id` | `{ "data": { ...tool } }`, or `404` with `{ "error": "Tool not found" }` |
| other | any | `405` with `{ "error": "Method not allowed" }` |
| GET | any other path | `404` with `{ "error": "Route not found" }` |

Example:

```json
{
  "data": {
    "id": "html",
    "name": "HTML5",
    "category": "Frontend",
    "logo": "/logos/html.svg"
  }
}
```

Start the site and the API together:

```bash
npx netlify dev
```
