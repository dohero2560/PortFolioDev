"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, Phone, MapPin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    alert("ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">ติดต่อฉัน</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            สนใจร่วมงานหรือมีคำถามเพิ่มเติม? ติดต่อฉันได้ตามช่องทางด้านล่างหรือส่งข้อความถึงฉันโดยตรง
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-900/30">
            <h3 className="text-2xl font-bold mb-6 text-white">ส่งข้อความ</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  ชื่อ
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  อีเมล
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  ข้อความ
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                ส่งข้อความ <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-900/30">
            <h3 className="text-2xl font-bold mb-6 text-white">ข้อมูลติดต่อ</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">อีเมล</h4>
                  <p className="text-gray-300">tammai488@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">โทรศัพท์</h4>
                  <p className="text-gray-300">+66 xx xxx xxxx</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">ที่อยู่</h4>
                  <p className="text-gray-300">กรุงเทพมหานคร, ประเทศไทย</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-lg font-medium text-white mb-4">โซเชียลมีเดีย</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dohero2560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://tiktok.com/@tiktok.do.i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                      <path d="M15 8v8a4 4 0 0 1-4 4" />
                      <line x1="15" y1="4" x2="15" y2="12" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.com/users/paraibaboss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <circle cx="9" cy="12" r="1" />
                      <circle cx="15" cy="12" r="1" />
                      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                      <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
