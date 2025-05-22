"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Globe, Terminal } from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-8 w-8 text-purple-400" />,
    items: ["C++", "C#", "JavaScript", "TypeScript", "Lua"],
  },
  {
    category: "Frontend",
    icon: <Globe className="h-8 w-8 text-purple-400" />,
    items: ["HTML", "CSS", "React", "Vite", "Next.js"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-purple-400" />,
    items: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
  },
  {
    category: "FiveM & Gaming",
    icon: <Terminal className="h-8 w-8 text-purple-400" />,
    items: ["Lua", "FiveM Scripting", "GTA V Natives", "Game Development"],
  },
  {
    category: "Tools & Platforms",
    icon: <Database className="h-8 w-8 text-purple-400" />,
    items: ["Git", "GitHub", "MongoDB", "VS Code"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">ทักษะและความเชี่ยวชาญ</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            ด้วยประสบการณ์หลากหลายด้าน ผมสามารถพัฒนาโซลูชั่นที่ครอบคลุมตั้งแต่ frontend ไปจนถึง backend และการพัฒนาสคริปต์สำหรับ FiveM
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 border border-purple-900/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
