"use client"

import Link from "next/link"
import { ArrowLeft, Route, Boxes, CalendarClock, TrendingDown } from "lucide-react"
import { PortalShell } from "@/components/portal/portal-shell"
import { MatchCard } from "@/components/smartmatch/match-card"
import { RouteMap } from "@/components/shared/route-map"
import { RouteLabel } from "@/components/shared/route-label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { portalConfigs } from "@/lib/nav-config"
import { matchProviders, requests } from "@/lib/data"
import { useLocale } from "@/lib/i18n/locale-provider"
import { toast } from "sonner"

export default function ClientMatchesPage() {
  const { t } = useLocale()
  const request = requests[0]

  const reasons = [
    { icon: Route, title: t("smart.routeCompat"), desc: t("smart.routeCompatDesc") },
    { icon: Boxes, title: t("smart.capacityFit"), desc: t("smart.capacityFitDesc") },
    { icon: CalendarClock, title: t("smart.availabilityTitle"), desc: t("smart.availabilityDesc") },
    { icon: TrendingDown, title: t("smart.priceAdvantage"), desc: t("smart.priceAdvantageDesc") },
  ]

  return (
    <PortalShell config={portalConfigs.client} title={t("smart.title")}>
      <div className="flex flex-col gap-5">
        {/* Header bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" render={<Link href="/client/requests" />}>
              <ArrowLeft className="size-4" />
              {t("smart.backToRequests")}
            </Button>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-sm text-muted-foreground">{t("smart.bestMatches")}</span>
              <RouteLabel origin={request.origin} destination={request.destination} className="text-sm font-semibold" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {t("smart.requestId")}: {request.id}
            </span>
            <Button variant="outline" size="sm" render={<Link href="/client/requests/new" />}>
              {t("smart.changeRequest")}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_minmax(320px,42%)]">
          {/* Match list */}
          <div className="flex flex-col gap-3">
            {matchProviders.map((p) => (
              <MatchCard key={p.id} provider={p} />
            ))}
            <Button variant="outline" className="mt-1 w-full" onClick={() => toast.info(t("common.loading"))}>
              {t("common.loadMore")}
            </Button>
          </div>

          {/* Map + reasons */}
          <div className="flex flex-col gap-5">
            <Card className="overflow-hidden p-0">
              <RouteMap
                origin={request.origin}
                destination={request.destination}
                className="aspect-[4/3] w-full"
              />
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
