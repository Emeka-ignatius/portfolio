import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Fusco. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/Emeka-ignatius" className="hover:text-teal-300 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/emeka-ignatius" className="hover:text-teal-300 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/OfficialFusco" className="hover:text-teal-300 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
