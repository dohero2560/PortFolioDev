"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [

  {
    title: "DooDevScriptShop",
    description: "ร้านค้าสคริปต์ FiveM ที่พัฒนาด้วย JavaScript สำหรับผู้ที่ต้องการซื้อสคริปต์คุณภาพสูง",
    tags: ["JavaScript", "Web Development", "E-commerce"],
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/dohero2560/DooDevScriptShop",
    demo: "#",
  },
  {
    title: "ListWorking",
    description: "เครื่องมือจัดการรายการงานที่พัฒนาด้วย JavaScript เพื่อช่วยในการจัดการโปรเจกต์",
    tags: ["JavaScript", "Productivity", "Web App"],
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/dohero2560/ListWorking",
    demo: "#",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeProject, setActiveProject] = useState<number | null>(null)

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">ผลงานของฉัน</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            นี่คือตัวอย่างผลงานที่ผมได้พัฒนา ทั้งสคริปต์ FiveM, เว็บแอปพลิเคชัน, และโปรเจกต์อื่นๆ
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 border border-purple-900/30 hover:border-purple-500/50 group"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-black/50 border-purple-500 text-white hover:bg-purple-900"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-black/50 border-purple-500 text-white hover:bg-purple-900"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
