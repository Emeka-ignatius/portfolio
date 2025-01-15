'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { formSchema } from '@/schema/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import ContactInfo from "./contact-info"



export default function Contact() {
  const [formProgress, setFormProgress] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the form data to your backend
  }

  const updateProgress = () => {
    const fields = ['name', 'email', 'subject', 'message']
    const filledFields = fields.filter(field => form.getValues(field as keyof z.infer<typeof formSchema>))
    setFormProgress((filledFields.length / fields.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-lavender-100">
      <div className="container mx-auto md:py-12 px-4">
      <header className="bg-teal-700 text-white md:mb-12 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2">{`Send me a message, let's talk business`}😁</p>
        </div>  
      </header>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="relative">
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-teal-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${formProgress}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                                className="pl-10 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                onChange={(e) => {
                                  field.onChange(e)
                                  updateProgress()
                                }}
                              />
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Enter your email address" 
                                {...field} 
                                className="pl-10 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                onChange={(e) => {
                                  field.onChange(e)
                                  updateProgress()
                                }}
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={(value) => {
                            field.onChange(value)
                            updateProgress()
                          }}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="project">Project Proposal</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea 
                                placeholder="Type your message here" 
                                className="min-h-[100px] pl-10 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e)
                                  updateProgress()
                                }}
                              />
                              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                              <div className="absolute right-3 bottom-3 text-sm text-gray-400">
                                {field.value.length}/500
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full rounded-full bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-2" size={18} />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          <ContactInfo/>
        </div>
      </div>
    </div>
  )
}