import { LucideIcon } from "lucide-react"

export interface HeaderLink {
  href: string
  label: string
  icon?: LucideIcon
  description?: string
}

export interface HeaderConfig {
  brand: {
    title: string
    icon: string
  }
  navigationLinks: HeaderLink[]
}

export const headerConfig: HeaderConfig = {
  brand: {
    title: "ACM RVCE",
    icon: "/logos/acm-rvce-logo.png"
  },
  navigationLinks: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]
}