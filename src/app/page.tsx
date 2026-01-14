import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StarBorder from "@/components/ui/star-border";
import BlurText from "@/components/ui/blur-text";
import GradientText from "@/components/ui/gradient-text";
import { Sparkles, Zap, Palette, PartyPopper } from "lucide-react";

import Iridescence from "@/components/ui/iridescence";
import { ServiceCard } from "@/components/service-card";
import { ClientLogo } from "@/components/ui/client-logo";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
          {/* Iridescence Background - Purple */}
          <div className="absolute inset-0 z-0 opacity-70">
            <Iridescence
              color={[0.5, 0.1, 0.9]} // Deeper, more vibrant purple
              mouseReact={true}
              amplitude={0.15}
              speed={1.5}
            />
          </div>

          {/* Fallback gradient for layering */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none z-0" />

          <Container className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-purple-200 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Expertos en Ambientes Inolvidables</span>
            </div>

            <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold tracking-tight text-white sm:text-7xl">
              <BlurText
                text="Transformamos Espacios en"
                delay={270}
                animateBy="words"
                direction="top"
                className="inline"
              />{' '}
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="inline-flex"
              >
                Experiencias Mágicas
              </GradientText>
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-slate-400">
              Visual Group Chile es una empresa dedicada a la decoración y efectos especiales a lo largo de todo Chile,
              ofreciendo nuestra experiencia y diseño para todo tipo de eventos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" prefetch={true}>
                <Button size="lg" variant="primary">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link href="/gallery" prefetch={true}>
                <Button size="lg" variant="outline">
                  Ver Galería
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Trusted By Section */}
        <ScrollReveal>
          <section className="relative border-y border-white/5 bg-slate-900/50 py-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />

            <Container className="relative z-10">
              <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-purple-200/70">
                Empresas que confían en nosotros
              </p>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <ClientLogo
                  src="/images/clients/lider.png"
                  alt="Lider"
                  width={150}
                  height={60}
                />
                <ClientLogo
                  src="/images/clients/unimarc.png"
                  alt="Unimarc"
                  width={150}
                  height={60}
                />
                <ClientLogo
                  src="/images/clients/santa-isabel.png"
                  alt="Santa Isabel"
                  width={150}
                  height={60}
                />
              </div>
            </Container>
          </section>
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal>
          <section className="py-24 bg-slate-950/30 brightness-110">
            <Container>
              <div className="mb-16 text-center">
                <GradientText
                  colors={["#994bb8ff", "#b870e2ff", "#40ffaa", "#4079ff", "#af46afff"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="mb-4 font-serif text-3xl font-bold md:text-5xl"
                >
                  Nuestros Servicios
                </GradientText>
                <p className="text-slate-400">Diseño y tecnología al servicio de tu evento.</p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <ServiceCard
                  icon={<Palette className="h-8 w-8 text-purple-400" />}
                  title="Decoración Temática"
                  description="Diseños personalizados que capturan la esencia de tu visión, desde bodas elegantes hasta fiestas corporativas."
                />
                <ServiceCard
                  icon={<Zap className="h-8 w-8 text-blue-400" />}
                  title="Efectos Especiales"
                  description="Iluminación robótica, humo bajo, chispas frías y más para momentos de alto impacto."
                />
                <ServiceCard
                  icon={<PartyPopper className="h-8 w-8 text-pink-400" />}
                  title="Producción de Eventos"
                  description="Gestión integral de la atmósfera visual para asegurar que cada detalle sea perfecto."
                />
              </div>
            </Container>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}


