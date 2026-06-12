"use client"

import { Route, Boxes, CalendarClock, TrendingDown } from "lucide-react"
import { PortalShell } from "@/components/portal/portal-shell"
import { MatchCard } from "@/components/smartmatch/match-card"
import { RouteMap } from "@/components/shared/route-map"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/shared/page-header"
import { matchProviders, requests } from "@/lib/data"
import { useI18n } from "@/lib/i18n/locale-provider"

export default function ProviderMatchesPage() {
  const { t } = useI18n()
  const request = requests[0]

  const reasons = [
    { icon: Route, title: t("smart.routeCompat"), desc: t("smart.routeCompatDesc") },
    { icon: Boxes, title: t("smart.capacityFit"), desc: t("smart.capacityFitDesc") },
    { icon: CalendarClock, title: t("smart.availabilityTitle"), desc: t("smart.availabilityDesc") },
    { icon: TrendingDown, title: t("smart.priceAdvantage"), desc: t("smart.priceAdvantageDesc") },
  ]

  return (
    <PortalShell portal="provider" titleKey="nav.matches">
      <div className="flex flex-col gap-5">
        <PageHeader titleKey="smart.title" subtitleKey="prov.requestsSub" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_minmax(320px,42%)]">
          <div className="flex flex-col gap-3">
            {matchProviders.map((p) => (
              <MatchCard key={p.id} provider={p} />
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <Card className="overflow-hidden p-0">
              <RouteMap origin={request.origin} destination={request.destination} className="aspect-[4/3] w-full" />
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t("smart.whyTitle")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <r.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{r.title}</p>
                      <p className="text-xs text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalShell>
  )
}
