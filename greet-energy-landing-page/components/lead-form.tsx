"use client"

export default function LeadForm() {
  return (
    <section id="contacto" className="w-full py-12 sm:py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-lg border border-border p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-2 text-balance">
            Solicita tu Evaluación Gratuita
          </h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm">
            Sin compromiso • Respuesta en menos de 24 horas
          </p>

          <form action="https://formspree.io/f/xrbnkqna" method="POST" className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Nombre Completo *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Correo Electrónico *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                placeholder="tu@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Teléfono</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                placeholder="+57 (1) 000-0000"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Mensaje *</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm"
                placeholder="Cuéntanos sobre tu negocio y necesidades energéticas"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 sm:mt-6 bg-accent text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-smooth hover:bg-[#1E8449] hover:shadow-lg active:scale-95"
            >
              Solicitar Cotización Gratis →
            </button>
          </form>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              🔒 Respuesta en menos de 24 horas • Sin compromiso • Confidencialidad garantizada
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
