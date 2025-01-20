"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { me } from "@/data";
import { AnimatedBackground } from "./AnimatedBackground";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center dark:bg-slate-900"
    >
      <AnimatedBackground />
      <div className="z-10 text-center flex flex-col items-center p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <Image
            src={me.photo}
            alt={me.name}
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-500 dark:border-blue-400"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 text-blue-600 flex dark:text-blue-400"
        >
          <p className="text-slate-500" >{"<"}</p>
          {me.name.split(" ").join('')}
          <p className="text-slate-500 ml-4">{"/>"}</p>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8 text-gray-700 dark:text-gray-300"
        >
          {me.role}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex space-x-4 justify-center"
        >
          <SocialButton href={me.socials.linkedin} icon={<FaLinkedin />} />
          <SocialButton href={me.socials.github} icon={<FaGithub />} />
        </motion.div>
      </div>
    </section>
  );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
