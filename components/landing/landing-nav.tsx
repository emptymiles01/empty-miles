"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { LocaleSwitcher } from "@/components/shared/locale-switcher"
import { useLocale } from "@/lib/i18n/locale-provider"

export function LandingNav() {
  const { t } = useLocale()
  const links: { key: string; dropdown?: boolean }[] = [
    { key: "landing.nav.home" },
    { key: "landing.nav.solutions", dropdown: true },
    { key: "landing.nav.forProviders" },
    { key: "landing.nav.company", dropdown: true },
    { key: "landing.nav.resources", dropdown: true },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo variant="light" />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <button
              key={l.key}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t(l.key as never)}
              {l.dropdown && <ChevronDown className="size-3.5" />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LocaleSwitcher compact />
          </div>
          <Button render={<Link href="/login" />}>{t("landing.nav.getStarted")}</Button>
        </div>
      </nav>
    </header>
  )
}
