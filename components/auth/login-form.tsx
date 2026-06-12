"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { SocialButtons } from "@/components/auth/social-buttons"
import { useLocale } from "@/lib/i18n/locale-provider"

export function LoginForm() {
  const { t } = useLocale()
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("ahmed@company.com")
  const [password, setPassword] = useState("password123")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/client/dashboard")
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
      <div className="text-center">
        <h1 className="font-heading text-2xl font-bold">{t("auth.welcomeBack")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("auth.signInSubtitle")}</p>
      </div>

      <form onSubmit={onSubmit} className="mt-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">{t("auth.email")}</FieldLabel>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">{t("auth.password")}</FieldLabel>
              <Link href="#" className="text-xs font-medium text-primary hover:underline">
                {t("auth.forgotPassword")}
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pe-10"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute inset-y-0 end-0 flex items-center pe-3 text-muted-foreground"
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </Field>
          <Button type="submit" className="h-10 w-full">
            {t("auth.signIn")}
          </Button>
        </FieldGroup>
      </form>

      <div className="my-5 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">{t("auth.continueWith")}</span>
        <Separator className="flex-1" />
      </div>

      <SocialButtons />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {t("auth.noAccount")}{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          {t("auth.signUp")}
        </Link>
      </p>
    </div>
  )
}
