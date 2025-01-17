'use client'

import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { motion } from 'framer-motion'
import { experiences } from '@/data'

export default function Career() {
 
  const techIcons: { [key: string]: React.ReactElement } = {
    React: <FaReact />,
    'Node.js': <FaNodeJs />,
    TypeScript: <SiTypescript />,
    JavaScript: <SiJavascript />,
    Python: <FaPython />,
  }

  return (
    <section id="career" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Minha Carreira</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 flex"
            >
              <div className="flex-shrink-0 w-10 h-10 z-10 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm flex items-center"
                    >
                      {techIcons[tech] && <span className="mr-1 dark:text-blue-50">{techIcons[tech]}</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-blue-300 dark:bg-blue-700" />
        </div>
      </div>
    </section>
  )
}

