"use client"

import { PortalShell } from "@/components/portal/portal-shell"
import { PageHeader } from "@/components/shared/page-header"
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
import { Plus, Truck } from "lucide-react"
import { fleet } from "@/lib/data"
import { useI18n } from "@/lib/i18n/locale-provider"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  active: "bg-success/10 text-success",
  idle: "bg-muted text-muted-foreground",
  maintenance: "bg-warning/10 text-warning",
}

export default function ProviderFleetPage() {
  const { t } = useI18n()

  return (
    <PortalShell portal="provider" titleKey="nav.fleet">
      <div className="flex flex-col gap-5">
        <PageHeader titleKey="prov.fleet" subtitleKey="prov.fleetSub">
          <Button>
            <Plus className="size-4" />
            {t("prov.addVehicle")}
          </Button>
        </PageHeader>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="ps-6">{t("prov.vehicle")}</TableHead>
                    <TableHead>{t("prov.plate")}</TableHead>
                    <TableHead>{t("cap.transportType")}</TableHead>
                    <TableHead>{t("prov.capacityTons")}</TableHead>
                    <TableHead>{t("prov.driver")}</TableHead>
                    <TableHead className="pe-6">{t("prov.statusLabel")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fleet.map((v) => (
                    <TableRow key={v.id}>
                      <TableCell className="ps-6">
                        <span className="inline-flex items-center gap-2 font-medium">
                          <Truck className="size-4 text-muted-foreground" />
                          {v.name}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{v.plate}</TableCell>
                      <TableCell className="text-muted-foreground">{v.type}</TableCell>
                      <TableCell>{v.capacity} Tons</TableCell>
                      <TableCell className="text-muted-foreground">{v.driver}</TableCell>
                      <TableCell className="pe-6">
                        <Badge variant="secondary" className={cn(statusStyles[v.status])}>
                          {t(`prov.${v.status}` as never)}
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
