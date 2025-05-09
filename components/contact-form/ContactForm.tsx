'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button/Button"
import { SectionTitle } from "../SectionTitle"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animations"

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            await axios.post('/api/contact', data)
            toast.success('Sua mensagem está a caminho! Obrigado por entrar em contato')
            reset()
        } catch (error) {
            toast.error('Algo deu errado. Por favor, verifique os dados e tente novamente.')
        }
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950/50">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle subtitle="contato" title="Vamos trabalhar juntos? Entre em contato" className="items-center text-center" />

                <motion.form {...fadeUpAnimation} onSubmit={handleSubmit(onSubmit)} className="mt-12 w-full flex flex-col gap-4" action="">
                    <input {...register('name')} placeholder="Nome" className="w-full h-13 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600" />
                    <input {...register('email')} type="email" placeholder="E-mail" className="w-full h-13 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600" />
                    <textarea {...register('message')} maxLength={500} placeholder="Mensagem" className="resize-none  w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600" />

                    <Button className="w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </motion.form>
            </div>
        </section>
    )
}