"use client";

import { Container } from "@/components/container";
import Iridescence from "@/components/ui/iridescence";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { Check, Loader2, Send } from "lucide-react";
import StarBorder from "@/components/ui/star-border";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "Cotización",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", phone: "", reason: "Cotización", message: "" });
            } else {
                const data = await response.json();
                console.error('Failed to send message:', data.error);
                alert(`Error: ${data.error || 'Hubo un error al enviar el mensaje.'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen pt-20 overflow-hidden bg-slate-950">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Iridescence
                    color={[0.5, 0.1, 0.9]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={1.0}
                />
            </div>

            <Container className="relative z-10 py-12 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl"
                >
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                        <h1 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl text-center">
                            Envíanos tu mensaje
                        </h1>
                        <p className="mb-8 text-center text-slate-400">
                            Te responderemos pronto. Cuéntanos cómo podemos ayudarte.
                        </p>

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                        <Check className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">¡Gracias! Tu mensaje fue enviado.</h3>
                                    <p className="text-slate-400">
                                        Nos pondremos en contacto contigo en breve.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-sm font-medium text-purple-400 hover:text-purple-300 hover:underline"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                                Nombre completo
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                                Correo electrónico
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                                                Teléfono <span className="text-slate-500">(Opcional)</span>
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                                placeholder="+56 9 ..."
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="reason" className="text-sm font-medium text-slate-300">
                                                Motivo de contacto
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="reason"
                                                    value={formData.reason}
                                                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                                    className="w-full appearance-none rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-white transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                                >
                                                    <option value="Cotización">Cotización</option>
                                                    <option value="Información">Información</option>
                                                    <option value="Soporte">Soporte</option>
                                                    <option value="Otros">Otros</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-300">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                    </div>

                                    <StarBorder
                                        as="button"
                                        type="submit"
                                        disabled={isSubmitting}
                                        speed="4s"
                                        thickness={5}
                                        className="w-full text-lg font-bold"
                                        color="#9333ea"
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin" />
                                                    <span>Enviando...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Enviar mensaje</span>
                                                    <Send className="h-4 w-4" />
                                                </>
                                            )}
                                        </div>
                                    </StarBorder>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <StarBorder color="#a855f7" speed="4s" thickness={5}>
                            Volver al Dashboard principal
                        </StarBorder>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
