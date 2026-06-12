"use client"

import { PortalShell } from "@/components/portal/portal-shell"
import { PageHeader } from "@/components/shared/page-header"
import { RouteLabel } from "@/components/shared/route-label"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus } from "lucide-react"
import { capacities } from "@/lib/data"
import { useI18n } from "@/lib/i18n/locale-provider"

export default function ProviderCapacityPage() {
  const { t } = useI18n()

  return (
    <PortalShell portal="provider" titleKey="nav.myCapacity">
      <div className="flex flex-col gap-5">
        <PageHeader titleKey="nav.myCapacity" subtitleKey="prov.capacitySub">
          <Button>
            <Plus className="size-4" />
            {t("cap.addCapacity")}
          </Button>
        </PageHeader>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="ps-6">{t("common.route")}</TableHead>
                    <TableHead>{t("cap.transportType")}</TableHead>
                    <TableHead>{t("cap.capacity")}</TableHead>
                    <TableHead>{t("cap.availableFrom")}</TableHead>
                    <TableHead>{t("cap.rate")}</TableHead>
                    <TableHead className="pe-6">{t("prov.statusLabel")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {capacities.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="ps-6">
                        <RouteLabel origin={c.origin} destination={c.destination} />
                      </TableCell>
                      <TableCell className="text-muted-foreground">{c.transportType}</TableCell>
                      <TableCell>{c.capacity} Tons</TableCell>
                      <TableCell className="text-muted-foreground">{c.availableFrom}</TableCell>
                      <TableCell>{c.rate.toLocaleString()}</TableCell>
                      <TableCell className="pe-6">
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          {t("cap.available")}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalShell>
  )
}
