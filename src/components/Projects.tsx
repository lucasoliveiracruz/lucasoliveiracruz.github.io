'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HighlightedSubtitle } from './ui/highlight-text'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'Uma plataforma de comércio eletrônico completa',
      image: '/placeholder.svg',
    },
    {
      title: 'Task Manager',
      description: 'Aplicativo de gerenciamento de tarefas com React e Firebase',
      image: '/placeholder.svg',
    },
    {
      title: 'Portfolio Website',
      description: 'Site de portfólio responsivo usando Next.js e Tailwind CSS',
      image: '/placeholder.svg',
    },
    {
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com geolocalização',
      image: '/placeholder.svg',
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog com sistema de gerenciamento de conteúdo',
      image: '/placeholder.svg',
    },
    {
      title: 'Fitness Tracker',
      description: 'Aplicativo para rastrear atividades físicas e nutrição',
      image: '/placeholder.svg',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <HighlightedSubtitle>Projetos Pessoais</HighlightedSubtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

