import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Stay Updated on Your Adventure</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest news, updates, and exclusive content delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Game</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  System Requirements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Game Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Patch Notes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reddit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bug Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Account
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">© 2025 Epic Fantasy Adventures. All rights reserved.</div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
