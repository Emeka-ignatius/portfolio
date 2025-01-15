'use client'

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Book, Brain, Code, Globe, Lightbulb, Users } from 'lucide-react'

export function  AboutMe() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <MaxWidthWrapper>
    <div className="min-h-screen py-0  md:py-28  text-gray-800">
      <motion.header 
        className="bg-teal-700 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-12">
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Bio</h2>
          <p className="md:text-lg text-sm text-gray-700">
            {`I'm an experienced Frontend Developer with over 3 years of expertise in building highly responsive and user-centric web applications. My passion lies in creating innovative solutions using modern frameworks such as React.js, Next.js, and Tailwind CSS. I have a proven track record of improving load times by 25% and enhancing user satisfaction. My ability to lead cross-functional teams and deliver high-quality software solutions sets me apart in the field.`}
          </p>
        </motion.section>

        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Skills Visualization</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              { skill: "React", level: 90 },
              { skill: "Next.js", level: 85 },
              { skill: "TypeScript", level: 80 },
              { skill: "Tailwind CSS", level: 85 },
              { skill: "Jest", level: 75 },
              { skill: "Git", level: 80 },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-md"
                variants={fadeInUp}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-teal-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Professional Journey</h2>
          <motion.div 
            className="space-y-6"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              {
                year: "2021 - Present",
                role: "Front-end Developer",
                company: "ISCE Digital Concept",
                achievements: [
                  "Collaborated with UX/UI designers to translate wireframes into functional interfaces",
                  "Built responsive web and mobile applications",
                  "Ensured cross-browser compatibility",
                  "Integrated NFC technology into user interfaces"
                ]
              },
              {
                year: "2024",
                role: "Lead Front-end Developer",
                company: "PalmTechnIQ - ISCE Digital Concept",
                achievements: [
                  "Spearheaded development of e-learning platform",
                  "Implemented full-stack features using Next.js server actions",
                  "Optimized application performance, reducing load times by 25%",
                  "Developed role-based access control and payment systems"
                ]
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-l-4 border-l-teal-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="md:text-xl text-md font-bold text-teal-700">{item.role}</h3>
                      <Badge variant="secondary" className="text-teal-700">{item.year}</Badge>
                    </div>
                    <p className="text-gray-600 md:text-xl text-sm mb-2">{item.company}</p>
                    <ul className="list-disc md:text-xl text-sm list-inside text-gray-700">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Certifications</h2>
          <ul className="space-y-2 md:text-xl text-sm text-gray-700">
            <li>Certificate Of Proficiency In Information Systems Management (CPISM) - APTECH Mumbai, India</li>
            <li>Diploma In Ms Office - MICHO SKYINE SYSTEMS</li>
            <li>Fundamental In Digital Marketing - Google Digital Workshop</li>
            <li>Diploma In Information System Management (DISM) - APTECH Mumbai, India</li>
            <li>Advanced Diploma In Software Engineering (ADSE) - APTECH Computer Education, Lagos, Nigeria</li>
          </ul>
        </motion.section>

        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Languages & Interests</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 mr-2 text-teal-600" />
                    <h3 className="text-xl font-bold text-teal-700">Languages</h3>
                  </div>
                  <ul className="list-disc md:text-xl text-sm list-inside text-gray-700">
                    <li>English - Fluent</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Book className="h-6 w-6 mr-2 text-teal-600" />
                    <h3 className="text-xl font-bold text-teal-700">Interests</h3>
                  </div>
                  <ul className="list-disc md:text-xl text-sm list-inside text-gray-700">
                    <li>Staying updated with the latest web technologies</li>
                    <li>Contributing to open-source projects</li>
                    <li>Attending tech meetups and conferences</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section variants={staggerChildren} initial="initial" animate="animate">
          <h2 className="text-2xl font-bold mb-4 text-teal-700">Personal Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="h-8 w-8" />, value: "Continuous Learning", description: "Always seeking to expand my knowledge and skills" },
              { icon: <Code className="h-8 w-8" />, value: "Clean Code", description: "Writing maintainable, efficient, and well-documented code" },
              { icon: <Users className="h-8 w-8" />, value: "Collaboration", description: "Thriving in cross-functional team environments" },
              { icon: <Lightbulb className="h-8 w-8" />, value: "Innovation", description: "Constantly exploring new technologies and methodologies" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 text-teal-600">{item.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-teal-700">{item.value}</h3>
                    <p className="text-gray-600 md:text-xl text-sm line-clamp-2">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
    </MaxWidthWrapper>
  )
}