"use client"
import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 animate-pulse" />
      <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
        <Image
          src="https://sjc.microlink.io/bx8ZecMLFAcP3t9_IIuLLw2Y1Yqen0uJWR05UDPMiftyPxgIEcmPx1shkOafjqIhYbvjwrSIbnnkfKF336xkpA.jpeg"
          alt="Thanakrit Sittisorn"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  )
}
