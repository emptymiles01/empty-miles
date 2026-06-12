"use client"

import { useState } from "react"
import { Building2, Truck, Calendar, ChevronDown, BadgeCheck, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n/locale-provider"
import type { MatchProvider } from "@/lib/data"

function scoreTone(score: number) {
  if (score >= 90) return "bg-success/12 text-success border-success/20"
  if (score >= 80) return "bg-info/10 text-info border-info/20"
  return "bg-warning/15 text-warning-foreground border-warning/30"
}

export function MatchCard({ provider }: { provider: MatchProvider }) {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)

  return (
    <Card className="gap-0 p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Building2 className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate font-semibold">{provider.name}</p>
            {provider.verified && <BadgeCheck className="size-4 shrink-0 text-primary" />}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Truck className="size-3.5" />
              {provider.transportType} · {provider.capacity} {t("common.tons")}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" />
              {t("smart.available")} {provider.availableDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5 fill-warning text-warning" />
              {provider.rating}
            </span>
          </div>
        </div>
        <Badge variant="outline" className={cn("rounded-full font-semibold", scoreTone(provider.matchScore))}>
          {provider.matchScore}% {t("smart.match")}
        </Badge>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3 border-t border-border pt-3">
        <div>
          <p className="text-xs text-muted-foreground">{t("smart.estimatedPrice")}</p>
          <p className="font-heading text-lg font-bold">OMR {provider.price}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            {t("smart.viewProfile")}
          </Button>
          <Button size="sm">{t("smart.accept")}</Button>
        </div>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
      >
        {t("smart.whyMatch")}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="mt-2 flex flex-col gap-1.5 text-xs text-muted-foreground">
          <li>• {t("smart.routeCompatDesc")}</li>
          <li>• {t("smart.capacityFitDesc")}</li>
          <li>• {t("smart.priceAdvantageDesc")}</li>
        </ul>
      )}
    </Card>
  )
}
