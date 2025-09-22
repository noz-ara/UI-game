import { Button } from "@/components/ui/button"
import { Sparkles, Sword, Crown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/epic-fantasy-landscape-with-magical-castle--mystic.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 text-accent w-8 h-8 animate-pulse" />
        <Crown className="absolute top-32 right-32 text-primary w-10 h-10 animate-bounce" />
        <Sword className="absolute bottom-40 left-40 text-secondary w-12 h-12 animate-pulse" />
        <Sparkles className="absolute bottom-20 right-20 text-accent w-6 h-6 animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance">
          Join the Epic
          <span className="block text-primary">Adventure!</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Embark on a legendary quest through mystical realms, forge powerful alliances, and become the hero of your own
          fantasy saga.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Sword className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            Watch Trailer
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1M+</div>
            <div className="text-sm">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">50+</div>
            <div className="text-sm">Epic Quests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">∞</div>
            <div className="text-sm">Adventures</div>
          </div>
        </div>
      </div>
    </section>
  )
}
