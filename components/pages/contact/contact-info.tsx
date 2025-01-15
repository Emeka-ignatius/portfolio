import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'


export default function ContactInfo() {
  return (
    <div>
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="space-y-8"
  >
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl md:text-start text-center  font-semibold mb-4 text-teal-800">Contact Information</h2>
        <div className="space-y-4 md:px-0  px-3  ">
          <div className="flex items-center">
            <Mail className="text-teal-600 mr-3" size={20} />
            <a href="mailto:emekaignatius5@gmail.com" className="text-teal-700 hover:underline">emekaignatius5@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="text-teal-600 mr-3" size={20} />
            <a href="tel:+2349079568910" className="text-teal-700 hover:underline">+234 907 956 8910</a>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-teal-800 md:text-left text-center">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <TooltipProvider>
            {[
              { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/emeka-ignatius" },
              { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/Emeka-ignatius" },
              { icon: <Instagram size={24} />, label: "Instagram", href: "https://www.instagram.com/fusco_josh" },
            ].map((social, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={social.href}
                    className="text-teal-600 hover:text-teal-800 transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent className='bg-white text-teal-700'>
                  <p>Visit my {social.label} profile</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6 grid justify-center">
        <Image
        width={150}
        height={150}
        alt='Contact QR Code'
        src='/my-qrCode.png'
        />
        <p className='text-center text-teal-600 font-bold'>Scan Me!</p>
      </CardContent>
    </Card>
  </motion.div></div>
  )
}
