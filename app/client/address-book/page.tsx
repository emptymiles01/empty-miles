"use client"

import { PortalShell } from "@/components/portal/portal-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { addresses } from "@/lib/data"
import { useI18n } from "@/lib/i18n/locale-provider"
import { MapPin, Pencil, Phone, Plus, Trash2, User } from "lucide-react"

export default function AddressBookPage() {
  const { t } = useI18n()

  const typeLabel = (type: string) =>
    type === "pickup" ? t("address.pickup") : type === "delivery" ? t("address.delivery") : `${t("address.pickup")} / ${t("address.delivery")}`

  return (
    <PortalShell portal="client" titleKey="nav.addressBook">
      <PageHeader titleKey="address.title" subtitleKey="address.subtitle">
        <Button>
          <Plus data-icon="inline-start" />
          {t("address.add")}
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {addresses.map((a) => (
          <Card key={a.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{a.label}</CardTitle>
                <Badge variant="secondary">{typeLabel(a.type)}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>
                  {a.line}, {a.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="size-4 shrink-0 text-primary" />
                <span>{a.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span dir="ltr">{a.phone}</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">
                <Pencil data-icon="inline-start" />
                {t("common.edit")}
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 data-icon="inline-start" />
                {t("common.delete")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PortalShell>
  )
}
