'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {  Terminal, Server, Database, Gitlab } from 'lucide-react'
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

const SkillCard = ({ icon, name, description, proficiency }: any) => (
  <Card className="h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{name}</h3>
      </div>
      <p className="text-gray-600 md:text-xl text-sm mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between">
        <Badge variant="default" className="bg-[#0d9488]">Proficiency: {proficiency}%</Badge>
        <div className="w-16 h-16 relative">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4FD1C5"
              strokeWidth="2"
              strokeDasharray={`${proficiency}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
            {proficiency}%
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const skillCategories = [
  {
    name: "Frontend",
    color: "bg-secondary",
    skills: [
      { icon: <FaHtml5 className="w-6 h-6 text-blue-600" />, name: "HTML5", description: "Semantic markup and accessibility", proficiency: 95 },
      { icon: <FaCss3 className="w-6 h-6 text-blue-600" />, name: "CSS3", description: "Responsive design and animations", proficiency: 90 },
      { icon: <DiJavascript className="w-6 h-6 text-blue-600" />, name: "JavaScript", description: "ES6+, async programming", proficiency: 85 },
      { icon: <FaReact className="w-6 h-6 text-blue-600" />, name: "React", description: "Component-based UI development", proficiency: 90 },
    ]
  },
  {
    name: "Backend",
    color: "bg-secondary",
    skills: [
      { icon: <Database className="w-6 h-6 text-green-600" />, name: "Node.js", description: "Server-side JavaScript", proficiency: 75 },
      { icon: <Database className="w-6 h-6 text-green-600" />, name: "Postgres", description: "Relational database management", proficiency: 70 },
    ]
  },
  {
    name: "Tools & Others",
    color: "bg-secondary",
    skills: [
      { icon: <Gitlab className="w-6 h-6 text-purple-600" />, name: "Git", description: "Version control and collaboration", proficiency: 85 },
      { icon: <Terminal className="w-6 h-6 text-purple-600" />, name: "Command Line", description: "Efficient system navigation", proficiency: 80 },
      { icon: <Server className="w-6 h-6 text-purple-600" />, name: "RESTful APIs", description: "Designing and consuming APIs", proficiency: 85 },
    ]
  }
]

export function SkillsPageComponent() {
  return (
    <MaxWidthWrapper>
    <div className="min-h-screen md:py-28 to-gray-100">
      <header className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">My Skills</h1>
          <p className="mt-2">A comprehensive overview of my technical expertise</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {skillCategories.map((category, index) => (
          <motion.section
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:px-0 px-3 font-bold mb-6 text-teal-700">{category.name}</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${category.color} p-6 rounded-lg`}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-teal-700">Continuous Learning</h2>
          <p className="text-gray-700 mb-4">
           {` As a passionate developer, I'm always expanding my skill set. Currently, I'm focusing on:`}
          </p>
          <ul className="list-disc md:text-xl text-sm list-inside text-gray-700">
            <li>Advanced state management techniques in React</li>
            <li>GraphQL for more efficient API queries</li>
            <li>Serverless architecture and cloud computing</li>
          </ul>
        </section>
      </main>
    </div>
    </MaxWidthWrapper>
  )
}