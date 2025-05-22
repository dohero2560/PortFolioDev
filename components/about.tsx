"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ProfileImage from "./profile-image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-black/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">เกี่ยวกับฉัน</h2>
            <p className="text-lg mb-4 text-gray-300">
              สวัสดีครับ! ผมชื่อ <span className="text-purple-400">ธนกฤต สิทธิศร</span> หรือที่เรียกกันว่า{" "}
              <span className="text-purple-400">DoDo</span>{" "}
              ผมเป็นนักพัฒนาที่มีความหลงใหลในการสร้างสรรค์โซลูชั่นดิจิทัลที่มีประสิทธิภาพและสวยงาม
            </p>
            <p className="text-lg mb-4 text-gray-300">
              ด้วยประสบการณ์ในการพัฒนา FiveM scripts ด้วย Lua, C++, C# และการสร้างเว็บแอปพลิเคชันด้วย React, Next.js, Node.js และ
              MongoDB ผมสามารถสร้างแอปพลิเคชันที่ครอบคลุมตั้งแต่ frontend ไปจนถึง backend
            </p>
            <p className="text-lg text-gray-300">
              ปัจจุบันผมกำลังเรียนรู้ด้วยตนเองผ่าน Google และ GitHub และกำลังมองหาโอกาสในการร่วมงานกับผู้อื่น
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <ProfileImage />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
