'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src="/placeholder.svg"
            alt="Sua foto"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 md:pl-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Sobre Mim</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficientes. Com experiência em diversas tecnologias web e mobile,
            estou sempre em busca de novos desafios e oportunidades para
            aprender e crescer.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Quando não estou codando, gosto de [seus hobbies ou interesses].
            Acredito que a combinação de criatividade e habilidades técnicas é
            essencial para desenvolver produtos excepcionais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

