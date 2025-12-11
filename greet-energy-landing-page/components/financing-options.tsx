"use client"

export default function FinancingOptions() {
  const options = [
    {
      title: "Full EPC (Propio)",
      description:
        "Inviertes una sola vez y el sistema es 100% tuyo. Recuperación en menos de 4 años. El ahorro no tiene límite.",
    },
    {
      title: "EPC Financiado",
      description: "Financiación con Bancóldex y bancos aliados. Cero inversión inicial, pagos flexibles.",
    },
    {
      title: "PPA",
      description: "Greet instala y mantiene. Tú pagas solo por la energía consumida — hasta 25% menos por kWh.",
    },
  ]

  return (
    <section id="servicios" className="w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center mb-12 sm:mb-16 text-balance">
          Tú eliges cómo producir tu energía
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm transition-smooth hover:shadow-2xl hover:border-[#27AE60]/50 hover:-translate-y-2 text-center flex flex-col group"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 group-hover:text-[#27AE60] transition-colors">
                {option.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow font-light">
                {option.description}
              </p>
              <a
                href="#contacto"
                className="inline-block w-full bg-[#27AE60] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold transition-smooth hover:bg-[#1E8449] hover:shadow-lg hover:scale-105 text-sm sm:text-base lg:text-lg"
              >
                Conocer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
