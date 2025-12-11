"use client"

export default function SocialProof() {
  const partners = [
    { name: "OGE Legal Services", logo: "🏛️" },
    { name: "BID", logo: "🌐" },
    { name: "Legal Group OGE", logo: "⚖️" },
    { name: "Saving the Amazon", logo: "🌳" },
    { name: "Bancoldex", logo: "🏦" },
  ]

  const testimonials = [
    {
      text: "Gracias a Greet Energy hemos reducido nuestros costos energéticos significativamente. La inversión se pagó en menos de 4 años y ahora generamos nuestra propia energía limpia de manera sostenible.",
      author: "Carlos Javier Chavarro",
      position: "Gerente",
      company: "Parque Agroindustrial Occidente",
    },
    {
      text: "El equipo de Greet fue extraordinariamente profesional. Desde el diagnóstico hasta la instalación, todo fue transparente y eficiente. Los beneficios tributarios fueron determinantes en nuestra decisión.",
      author: "Carlos Flores",
      position: "Gerente de Impuestos",
      company: "Cae Group",
    },
    {
      text: "La solución de Greet nos permitió optimizar nuestros costos operacionales sin comprometer la calidad. Excelente acompañamiento desde inicio hasta la implementación y mantenimiento del sistema.",
      author: "Hernando Bernal",
      position: "Gerente General",
      company: "INTECI",
    },
  ]

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12 text-balance">
          Nuestros Aliados Estratégicos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 items-center">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="h-16 sm:h-20 bg-background rounded-lg border border-border flex flex-col items-center justify-center text-center transition-smooth hover:border-primary/30 hover:shadow-md p-3 sm:p-4"
            >
              <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{partner.logo}</span>
              <p className="text-xs font-medium text-muted-foreground line-clamp-2">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-sm p-5 sm:p-6 border border-border hover:shadow-md transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 text-xs sm:text-sm italic">"{testimonial.text}"</p>
              <p className="font-semibold text-foreground text-xs sm:text-sm">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{testimonial.position}</p>
              <p className="text-xs text-primary font-medium mt-2">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
