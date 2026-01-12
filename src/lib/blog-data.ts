export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content: string;
  externalLink?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "El-futuro-del-diseño-con-inteligencia-artificial",
    title: "Creatividad aumentada: diseño impulsado por inteligencia artificial",
    excerpt: "Descubre cómo la IA está transformando el mundo del diseño.",
    date: "10 Ene, 2026",
    image: "/images/blog/decor-trends.jpg",
    category: "Decoración",
    content: `  
      <p>La inteligencia artificial está revolucionando el mundo del diseño, abriendo un horizonte donde creatividad y tecnología se fusionan.</p>
      <h2>Iluminación Inmersiva con IA</h2>
      <p>Ya no basta con iluminar un espacio; la luz debe contar una historia. Gracias a la inteligencia artificial, los mapeos de proyección y las luces cinéticas pueden adaptarse en tiempo real al entorno y a las emociones del público, creando atmósferas dinámicas que envuelven a cada persona en experiencias únicas y personalizadas.</p>
      <h2>Texturas Naturales con IA</h2>
      <p>A pesar de la tecnología, lo orgánico sigue presente. La IA ayuda a integrar paredes verdes, flores preservadas y maderas nobles en diseños que equilibran lo digital con lo natural. Los algoritmos pueden sugerir combinaciones armónicas entre texturas y efectos visuales, aportando calidez y sostenibilidad sin perder innovación.</p> 
      <h2>Personalización en el Diseño</h2>
      <p>La IA puede analizar datos demográficos y comportamentales para ofrecer sugerencias de colores y estilos que se ajusten a las preferencias de cada audiencia. Por ejemplo, puede sugerir paletas de colores que reflejen las tendencias culturales actuales o que se alineen con los colores corporativos de una marca.</p>
      <h2>Inteligencia Artificial en la Planificación</h2>
      <p>La IA puede ayudar a optimizar el flujo de eventos, sugerir la mejor hora para la ceremonia basada en el clima y la disponibilidad de los invitados, y planificar la logística de manera eficiente.</p>
    `,
    externalLink: "https://www.signify.com/global/lighting-academy/browser/webinar/the-future-of-lighting-design"
  },
  {
    slug: "efectos-especiales-boda-inolvidable",
    title: "Efectos Especiales para una Boda Inolvidable",
    excerpt: "Desde humo bajo para el primer baile hasta pirotecnia fría, eleva tu celebración al siguiente nivel.",
    date: "26 Ene, 2026",
    image: "/images/blog/boda-efectos.png",
    category: "Efectos",
    content: `
      <p>Tu boda merece ser única y deslumbrante. Con los efectos especiales adecuados, cada instante puede convertirse en una experiencia mágica que quedará grabada para siempre en la memoria de todos.</p>
      <h2>El Baile en las Nubes</h2>
      <p>El efecto de humo bajo (dry ice) crea una atmósfera de ensueño, haciendo que la pareja parezca flotar sobre una nube. Es el toque perfecto para convertir el primer baile en una experiencia mágica y romántica.</p>
      <h2>Entrada Triunfal</h2>
      <p>La pirotecnia fría ilumina el camino de los novios sin riesgos, creando un momento impactante y lleno de emoción. Ideal para la entrada al salón o el corte de la torta.</p>
      <h2>Final de Impacto</h2> 
      <p>Un cierre con chispas, confeti o cañones de CO₂ convierte el último baile en un espectáculo inolvidable, dejando a los invitados con la sensación de haber vivido algo único.</p>
      <h2>Iluminación en el Baile</h2>
      <p>Las luces LED pueden crear un ambiente de ensueño, con colores que cambian en función de la música y las emociones del público. Las luces pueden también crear un efecto de bañador, haciendo que la pareja parezca flotar sobre una nube.</p>
    `,
    externalLink: "https://mazzivapro.cl/efectos-fx"
  },
  {
    slug: "iluminacion-corporativa-impacto",
    title: "Cómo la Iluminación Transforma Eventos Corporativos",
    excerpt: "La iluminación en eventos corporativos es una herramienta estratégica que comunica identidad y emocione.",
    date: "26 Ene, 2026",
    image: "/images/blog/iluminacion-corporativa.png",
    category: "Corporativo",
    content: `
      <p>En el mundo corporativo, cada detalle comunica. La iluminación con bañadores LED en los colores institucionales no solo refuerza el branding, sino que transforma el ambiente en un escenario inmersivo donde la empresa transmite confianza, innovación y personalidad. Además, el uso de tecnologías inteligentes permite sincronizar luces con música, presentaciones o momentos clave, generando experiencias memorables que impactan tanto a clientes como a colaboradores.</p>
      <p>La combinación de diseño visual y tecnología convierte la iluminación en un recurso narrativo: puede guiar la atención hacia un producto, resaltar a los protagonistas de la noche o crear atmósferas que refuercen mensajes corporativos. Así, cada evento se convierte en una oportunidad para fortalecer la conexión emocional con la audiencia y dejar una huella duradera.</p>
    `,
    externalLink: "https://capital-meetings.com/"
  }
];
