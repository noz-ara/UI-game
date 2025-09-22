import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
