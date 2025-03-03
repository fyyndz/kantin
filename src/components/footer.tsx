import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ShopEasy</h3>
            <p className="text-muted-foreground text-sm">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Deals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">Follow us on social media for updates and promotions.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
