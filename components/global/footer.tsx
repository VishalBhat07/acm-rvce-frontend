import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FooterConfig } from "@/lib/config/footer";
import * as Icons from "lucide-react";

interface FooterProps {
  className?: string;
  config: FooterConfig;
}

// Helper to get icon component from string name
const IconComponent = ({ name }: { name: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={16} className="mr-2 flex-shrink-0" />;
};

const Footer = ({ className, config }: FooterProps) => {
  return (
    <footer
      className={cn("w-full border-t border-border bg-background", className)}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {config.brand.logoSrc && (
                <Image
                  src={config.brand.logoSrc}
                  alt={`${config.brand.title} Logo`}
                  width={40}
                  height={40}
                  className="h-10 w-auto rounded-lg"
                />
              )}
              <span className="text-lg font-semibold">
                {config.brand.title}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {config.brand.description}
            </p>
            {/* Social Links Section */}
            {config.socialLinks && config.socialLinks.length > 0 && (
              <div className="flex space-x-4 pt-2">
                {" "}
                {/* Added container for social links */}
                {config.socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label} // Accessibility
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security
                  >
                    {link.icon && <IconComponent name={link.icon} />}{" "}
                    {/* Use existing IconComponent */}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Links sections - Adjusted grid layout */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-2">
            {config.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                      >
                        {link.icon && <IconComponent name={link.icon} />}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground xl:text-center">
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
