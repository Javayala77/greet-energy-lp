"use client"

export default function Hero() {
  return (
    <section className="relative w-full py-20 sm:py-32 md:py-44 lg:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/solar-panels-installation-colombian-industrial-bui.jpg"
          alt="Solar installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 leading-tight text-balance tracking-tight">
            Energía Inteligente para tu Empresa
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto text-balance leading-relaxed font-light px-2">
            Transforma tu consumo energético en ahorro y sostenibilidad con soluciones solares diseñadas a la medida
          </p>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <a
              href="#contacto"
              className="inline-block bg-gradient-to-r from-[#27AE60] to-[#1E8449] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl text-sm sm:text-base md:text-lg font-bold transition-smooth hover:shadow-2xl hover:scale-105 shadow-xl border border-[#27AE60]/30"
            >
              Solicita un diagnóstico energético gratuito →
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 lg:pt-12 border-t border-white/30">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#F7A500]">✓</div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-100">
                Cero inversión inicial
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#F7A500]">✓</div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-100">
                Beneficios tributarios
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#F7A500]">✓</div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-100">Retorno asegurado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
