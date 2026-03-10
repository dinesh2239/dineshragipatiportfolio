"use client"

import React, { useState } from "react"
import { Mail, Linkedin, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}

interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[]
  children: React.ReactNode
}

const ShareButton = ({
  className,
  links,
  children,
  ...props
}: ShareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={cn(
          "inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-200",
          className
        )}
        {...props}
      >
        {children}
      </button>

      <div
        className={cn(
          "flex items-center overflow-hidden transition-all duration-300 ease-in-out",
          isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
        )}
      >
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={link.onClick}
              aria-label={link.label}
              className="inline-flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export { ShareButton }
export type { ShareLink, ShareButtonProps }
