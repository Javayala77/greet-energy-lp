import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import SolarSystems from "@/components/solar-systems"
import SocialProof from "@/components/social-proof"
import FinancingOptions from "@/components/financing-options"
import LeadForm from "@/components/lead-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Benefits />
      <SolarSystems />
      <SocialProof />
      <FinancingOptions />
      <LeadForm />
      <Footer />
    </main>
  )
}
