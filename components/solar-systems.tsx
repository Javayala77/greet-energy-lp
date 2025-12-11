"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function SolarSystems() {
  const sectors = [
    "Industrias manufactureras y de producción continua",
    "Centros logísticos y bodegas de almacenamiento",
    "Plantas de refrigeración, alimentos y bebidas",
    "Hoteles y centros turísticos",
    "Instituciones educativas y hospitales",
    "Comercios, supermercados y centros comerciales",
  ]

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6 lg:mb-8 text-balance">
            ¿Qué es más costoso para tu empresa?
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#27AE60] text-balance px-2">
            ¿Pausar tu operación o seguir produciendo con energía inteligente?
          </p>
        </div>

        {/* Solar Systems Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-24">
          {/* On Grid */}
          <Card className="border-2 border-[#27AE60]/20 overflow-hidden hover:border-[#27AE60]/60 transition-all hover:shadow-2xl hover:-translate-y-2 bg-white">
            <div className="bg-gradient-to-r from-[#27AE60]/10 via-[#27AE60]/5 to-white p-6 sm:p-8 lg:p-10 border-b border-[#27AE60]/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#27AE60]">
                Sistema sin baterías (On Grid)
              </h3>
            </div>
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <p className="text-sm sm:text-base lg:text-lg text-foreground mb-6 sm:mb-8 font-medium leading-relaxed">
                Ideal para empresas conectadas a la red eléctrica que buscan reducir su factura mensual y generar
                excedentes de energía.
              </p>
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    Reducción inmediata en factura eléctrica
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    Venta de excedentes de energía
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#27AE60] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">Mantenimiento mínimo</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Off Grid / Hybrid */}
          <Card className="border-2 border-[#F7A500]/20 overflow-hidden hover:border-[#F7A500]/60 transition-all hover:shadow-2xl hover:-translate-y-2 bg-white">
            <div className="bg-gradient-to-r from-[#F7A500]/10 via-[#F7A500]/5 to-white p-6 sm:p-8 lg:p-10 border-b border-[#F7A500]/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F7A500]">
                Sistema con baterías (Off Grid o híbrido)
              </h3>
            </div>
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <p className="text-sm sm:text-base lg:text-lg text-foreground mb-6 sm:mb-8 font-medium leading-relaxed">
                Perfecto para operaciones que no pueden detenerse. Permite seguir funcionando incluso durante cortes de
                energía, manteniendo tu producción activa sin interrupciones.
              </p>
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7A500] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    Continuidad operativa garantizada
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7A500] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    Sin interrupciones por cortes de energía
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7A500] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">Máximo ahorro de energía</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-sm border border-gray-200 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
            Nuestra experiencia abarca sectores que consumen grandes volúmenes de energía:
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">📦</span>
                <p className="text-sm sm:text-base lg:text-lg text-foreground font-medium leading-relaxed">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-[#27AE60]/8 to-[#F7A500]/8 border-2 border-[#27AE60]/20 rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-balance">
            Cambiar a energía solar con Greet es fácil:
          </h3>
          <p className="text-base sm:text-lg lg:text-lg text-foreground mb-8 sm:mb-12 leading-relaxed font-light">
            Evaluamos tu consumo, diseñamos el sistema, gestionamos los trámites, instalamos y certificamos, y te
            acompañamos con monitoreo y mantenimiento constante.
          </p>

          <div className="bg-white border-l-4 border-[#27AE60] p-6 sm:p-8 lg:p-10 rounded-lg shadow-sm">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              Empieza a ahorrar hoy con energía solar inteligente.
            </h4>
            <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 leading-relaxed font-light">
              Sin inversión inicial, con beneficios tributarios y acompañamiento total.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#27AE60]">
              Solicita tu evaluación energética gratuita.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
