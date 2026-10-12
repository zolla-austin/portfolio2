import { motion } from 'framer-motion'

export default function ProjectCard({ project, index, inView }) {
  const { title, description, tags, highlights } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:border-accent/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col"
    >
      <div className="p-6 flex flex-col flex-1">
        <h3 className="heading-card text-lg tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body text-sm mb-5">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-caption px-2.5 py-1 rounded-lg bg-accent/8 border border-accent/15 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {highlights?.length > 0 && (
          <ul className="mt-5 space-y-2 text-body text-sm list-disc pl-5">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
