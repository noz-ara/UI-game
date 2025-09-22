import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Elena Stormweaver",
    avatar: "/female-fantasy-character-portrait-with-magical-sta.jpg",
    role: "Guild Master",
    rating: 5,
    quote:
      "The most immersive fantasy experience I've ever had. The guild system brings players together like never before!",
  },
  {
    name: "Marcus Ironforge",
    avatar: "/male-dwarf-warrior-character-portrait-with-hammer.jpg",
    role: "Legendary Warrior",
    rating: 5,
    quote: "Combat feels incredibly satisfying. Every battle is strategic and the magic system is pure genius!",
  },
  {
    name: "Aria Moonwhisper",
    avatar: "/female-elf-archer-character-portrait-with-bow.jpg",
    role: "Master Archer",
    rating: 5,
    quote: "The world is breathtakingly beautiful. I've spent hundreds of hours exploring and still find new secrets!",
  },
]

export function CommunitySection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Join Our Legendary Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from the heroes who have already begun their epic journeys
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1.2M+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500K+</div>
              <div className="text-muted-foreground">Guilds Formed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50M+</div>
              <div className="text-muted-foreground">Quests Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Player Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-12 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  )
}
