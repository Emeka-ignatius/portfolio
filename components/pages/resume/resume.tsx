'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { Award, Briefcase, Download, Expand, FileText, ZoomIn, ZoomOut } from 'lucide-react'
import { useState } from 'react'
import { pdfjs } from 'react-pdf'

// Set up the worker for react-pdf
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


export default function ResumeComp() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)

 

  const zoomIn = () => setScale(scale + 0.1)
  const zoomOut = () => setScale(scale - 0.1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-lavender-50">
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h1 className="text-4xl font-bold mb-2">Ignatius Emeka J.</h1>
              <p className="text-xl mb-4">Experienced Frontend Developer with expertise in React and Next.js</p>
              <ul className="list-disc list-inside">
                <li>3+ years of professional experience</li>
                <li>Proficient in modern JavaScript frameworks</li>
                <li>Strong focus on responsive and accessible design</li>
              </ul>
            </div>
            <motion.img
              src="/me.jpg"
              alt="Ignatius Emeka J."
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-teal-800">Resume Preview</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={zoomOut}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={zoomIn}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Expand className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
              <div className="border rounded-lg overflow-hidden h-[500px]">
              <iframe
          src="/Ignatius_Emeka_Joshua.pdf"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
          </div>
              </div>
              {numPages && (
                <p className="text-center mt-4">
                  Page {pageNumber} of {numPages}
                </p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-teal-600 text-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Download Resume</h2>
                <Button
                  className="w-full bg-white text-teal-600 hover:bg-teal-100 transition-colors duration-300"
                  asChild
                >
                  <a href="/Ignatius_Emeka_Joshua.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-800">Additional Documents</h2>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/Ignatius_Emeka_Joshua.pdf" download>
                      <FileText className="mr-2 h-4 w-4" /> Portfolio
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/certifications.pdf" download>
                      <Award className="mr-2 h-4 w-4" /> Certifications
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-800">Key Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-center">
                          <Briefcase className="h-8 w-8 mx-auto text-teal-600 mb-2" />
                          <div className="text-2xl font-bold text-teal-800">3+</div>
                          <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className='text-teal-700'>
                        <p>Over 3 years of professional experience in frontend development</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-center">
                          <FileText className="h-8 w-8 mx-auto text-teal-600 mb-2" />
                          <div className="text-2xl font-bold text-teal-800">6+</div>
                          <div className="text-sm text-gray-600">Projects Completed</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className='text-teal-700'>
                        <p>Successfully delivered over 6 major projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}