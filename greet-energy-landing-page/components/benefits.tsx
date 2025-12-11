"use client"

export default function Benefits() {
  const benefits = [
    {
      icon: "✓",
      title: "Legalización ante el operador de red",
      description: "Nos encargamos de todos los trámites",
    },
    {
      icon: "✓",
      title: "Trámites ante el Ministerio de Minas",
      description: "Gestión completa incluida",
    },
    {
      icon: "✓",
      title: "Descuento 50% en retención + exención IVA",
      description: "Beneficios tributarios garantizados",
    },
    {
      icon: "✓",
      title: "Monitoreo inteligente incluido",
      description: "Control 24/7 de tu sistema",
    },
  ]

  return (
    <section
      id="beneficios"
      className="w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center mb-4 sm:mb-6 lg:mb-8 text-balance">
          Más que paneles, ofrecemos soluciones solares completas
        </h2>
        <p className="text-center text-gray-600 mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto text-base sm:text-lg font-light px-2">
          Desde la ingeniería hasta la legalización, gestionamos cada etapa de tu proyecto para que empieces a ahorrar
          sin preocuparte por trámites ni mantenimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-sm transition-smooth hover:shadow-2xl hover:border-[#27AE60]/50 hover:-translate-y-2 group"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 inline-block p-2 sm:p-3 bg-gradient-to-br from-[#27AE60]/10 to-[#F7A500]/10 rounded-xl text-[#27AE60] font-black group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
