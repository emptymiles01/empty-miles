"use client"

import { Logo } from "@/components/brand/logo"
import { useLocale } from "@/lib/i18n/locale-provider"

export function LandingFooter() {
  const { t } = useLocale()
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Empty Miles. {t("landing.footer.rights")}
        </p>
      </div>
    </footer>
  )
}
