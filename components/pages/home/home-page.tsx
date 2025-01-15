'use client'

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Code, Laptop, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function HomePageComponent() {
  return (
    <MaxWidthWrapper>
    <div className="min-h-screen py-20  text-gray-800 flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/me.jpg"
              alt="Fusco - Frontend Devel oper"
              width={400}
              height={400}
              className="rounded-full border-4 border-teal-600"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-teal-700">{`Hi, I'm Fusco`}</h2>
            <p className="text-xl mb-6 text-gray-600">
              {`A Frontend Developer specializing in crafting responsive and user-centric web applications`}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button 
                asChild
                className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-teal-700">Key Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Jest", "Git"].map((skill) => (
              <div key={skill} className="bg-white rounded-full py-2 px-4 text-center text-teal-600 font-semibold shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-teal-700">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code className="h-6 w-6 text-teal-600" />, title: "Modern Tech Stack", description: "Expertise in React.js, Next.js, TypeScript, and Tailwind CSS" },
              { icon: <Zap className="h-6 w-6 text-teal-600" />, title: "Performance Boost", description: "Reduced load times by 25%, enhancing user satisfaction" },
              { icon: <Laptop className="h-6 w-6 text-teal-600" />, title: "Scalable Platforms", description: "Developed e-learning platform serving thousands of users" },
            ].map((achievement, index) => (
              <Card key={index} className="transition-all hover:shadow-lg bg-white border-teal-100">
                <CardContent className="flex flex-col items-center p-6">
                  {achievement.icon}
                  <h4 className="text-lg font-bold mt-4 text-teal-700">{achievement.title}</h4>
                  <p className="text-center text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-teal-700">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "PalmTechnIQ", description: "An educational platform offering a wide range of courses.", link: "https://www.palmtechniq.com/" },
              { title: "Ariaria", description: "An e-commerce website for discovering and buying various products.", link: "https://www.ariariang.com/" },
            ].map((project, index) => (
              <Card key={index} className="transition-all hover:shadow-lg bg-white border-teal-100">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-teal-700">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button asChild variant="default" className="w-full text-teal-700 hover:text-black">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-lavender-100 py-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-teal-700">Ready to bring your ideas to life?</h3>
          <Button 
            asChild
            className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/contact" className="inline-flex items-center">
              {`Let's Connect`} <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>

      
    </div>
    </MaxWidthWrapper>
  )
}