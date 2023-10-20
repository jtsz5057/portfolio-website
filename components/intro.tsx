"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}>
               <Image 
                src="/profilepic.jpg" 
                alt="Jonathan Tan" 
                width={192} 
                height={192} 
                quality={95}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
            </motion.div>
        </div>
        <motion.p 
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity:0, y:100 }}
          animate={{ opacity:1, y:0 }}>
          <span className="font-bold">Hello, My name is Jonathan Tan.</span> I am a{" "}
          <span className="font-bold">self taught developer</span> with{" "}
          <span className="font-bold">2 years</span> of experience. I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
              Contact Me Here <BsArrowRight />
          </Link>

          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Download CV <HiDownload/></a>
          
          <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            <BsLinkedin/>
          </a>

          <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            <FaGithubSquare/>
          </a>
        </motion.div>
    </section>
  )
}
