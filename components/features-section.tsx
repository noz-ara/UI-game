import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Shield, Map, Gamepad2, Trophy } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Multiplayer Guilds",
    description: "Join forces with players worldwide to conquer the most challenging dungeons and raids.",
    image: "/fantasy-guild-hall-with-multiple-characters-around.jpg",
  },
  {
    icon: Zap,
    title: "Magical Combat",
    description: "Master elemental spells and legendary weapons in fast-paced, strategic battles.",
    image: "/wizard-casting-lightning-spell-in-epic-magical-com.jpg",
  },
  {
    icon: Shield,
    title: "Character Classes",
    description: "Choose from 12 unique classes, each with distinct abilities and playstyles.",
    image: "/diverse-fantasy-character-classes-including-warrio.jpg",
  },
  {
    icon: Map,
    title: "Vast Open World",
    description: "Explore 7 mystical realms filled with secrets, treasures, and ancient mysteries.",
    image: "/expansive-fantasy-world-map-with-different-magical.jpg",
  },
  {
    icon: Gamepad2,
    title: "Cross-Platform",
    description: "Play seamlessly across PC, mobile, and console with synchronized progress.",
    image: "/gaming-devices-showing-same-fantasy-game-across-pc.jpg",
  },
  {
    icon: Trophy,
    title: "Epic Rewards",
    description: "Earn legendary gear, rare mounts, and exclusive titles through challenging achievements.",
    image: "/treasure-chest-overflowing-with-magical-weapons--a.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Legendary Features Await</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the magical elements that make our fantasy world truly extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
