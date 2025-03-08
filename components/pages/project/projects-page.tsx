'use client'

import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Search, Star } from 'lucide-react'
import Image from 'next/image'
import { SetStateAction, useEffect, useState } from 'react'

const projects = [
  {
    id: 1,
    title: "PalmTechnIQ",
    description: "An educational platform offering a wide range of courses in technology, business, arts, and more. Provides accessible and high-quality education to learners worldwide.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://www.palmtechniq.com/",
    githubLink: "#",
    image: "/projects/palmtechniq.jpg",
    category: "Educational",
    date: "2023-05-15",
    complexity: 4,
    testimonial: "PalmTechnIQ has revolutionized our online learning experience. The platform is intuitive and the course content is top-notch!"
  },
  {
    id: 2,
    title: "Ariaria",
    description: "An e-commerce website where users can discover, explore, and buy almost anything they desire. A one-stop online shopping destination.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://www.ariariang.com/",
    githubLink: "#",
    image: "/projects/ariaria.jpg",
    category: "E-commerce",
    date: "2022-11-30",
    complexity: 3,
    testimonial: "Ariaria has made online shopping a breeze. The user interface is clean and the product range is impressive!"
  },
  {
    id: 3,
    title: "Purple Pack",
    description: "An online food ordering website that allows users to browse through dishes and place orders easily.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    liveLink: "https://www.purplepack.co.uk/",
    githubLink: "#",
    image: "/projects/purple_pack.jpg",
    category: "Food & Beverage",
    date: "2023-02-20",
    complexity: 2,
    testimonial: "Purple Pack has streamlined our food ordering process. It's fast, efficient, and user-friendly!"
  },
  {
    id: 4,
    title: "Obikels Creations",
    description: "An e-commerce platform for exquisite, handmade crochet apparel.",
    technologies: ["React", "Shopify", "GraphQL"],
    liveLink: "https://www.obikelscreations.co.uk/",
    githubLink: "#",
    image: "/projects/obikels_creations.jpg",
    category: "E-commerce",
    date: "2023-08-05",
    complexity: 3,
    testimonial: "Obikels Creations' website perfectly showcases their beautiful products. The shopping experience is smooth and enjoyable."
  },
  {
    id: 5,
    title: "Transpay",
    description: "A tax revenue system that simplifies levy collection for commercial vehicles in Anambra State.",
    technologies: ["React", "Next.js", "NFC Technology", "Node.js"],
    liveLink: "https://www.transpaytms.com/",
    githubLink: "#",
    image: "/projects/transpay.jpg",
    category: "Government",
    date: "2023-06-10",
    complexity: 5,
    testimonial: "Transpay has revolutionized our tax collection process. It's efficient, transparent, and has significantly improved our revenue collection."
  },
  {
    id: 6,
    title: "PennyPlan",
    description: "Pennyplan is a smart automated budget & expense management platform that helps user to effortlessly track expenses, create smart budgets, and achieve thier financial goals.",
    technologies: ["React", "Next.js", "NFC Technology", "Node.js"],
    liveLink: "https://www.pennyplan.com.ng/",
    githubLink: "#",
    image: "/projects/pennyplan.jpg",
    category: "Finance",
    date: "2025-03-01",
    complexity: 5,
    testimonial: "As a freelancer, Penny Plan has made expense tracking a breeze. I couldn't imagine working without it now."
  },
]

const categories = ["All", "Educational", "E-commerce", "Food & Beverage", "Government", "Finance"]
const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "complexity-desc", label: "Most Complex" },
  { value: "complexity-asc", label: "Least Complex" }
]

export function ProjectsPageComponent() {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("date-desc")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 6

  const filteredAndSearchedProjects = projects
    .filter(project => (filter === "All" || project.category === filter))
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getDate() - new Date(a.date).getDate()
        case "date-asc":
          return new Date(a.date).getDate() - new Date(b.date).getDate()
        case "complexity-desc":
          return b.complexity - a.complexity
        case "complexity-asc":
          return a.complexity - b.complexity
        default:
          return 0
      }
    })

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredAndSearchedProjects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber)

  useEffect(() => {
    setCurrentPage(1)
  }, [filter, searchTerm, sortBy])

  return (
    <MaxWidthWrapper>
    <div className="min-h-screen md:py-28 py-0  to-lavender-50">
      <header className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-2">Showcasing my work and contributions</p>
        </div>  
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex  flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className="transition-all text-teal-700 duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex  items-center gap-2">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {currentProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={500}
                      height={500}
                      quality={100}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="default" className='bg-[#0d9488]'>{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-4 flex justify-between">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          Live Site
                        </a>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                            <Search className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4" />
                              <span>Complexity: {project.complexity}/5</span>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                  <Badge key={tech} variant="default" className='bg-[#0d9488]'>{tech}</Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Testimonial:</h4>
                              <p className="italic text-gray-600">{project.testimonial}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(filteredAndSearchedProjects.length / projectsPerPage) }, (_, i) => (
              <Button
                key={i}
                className='bg-[#0d9488]'
                onClick={() => paginate(i + 1)}
                variant={currentPage === i + 1 ? "default" : "outline"}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </section>
      </main>
    </div>
    </MaxWidthWrapper>
  )
}