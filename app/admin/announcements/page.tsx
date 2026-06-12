"use client"

import { PortalShell } from "@/components/portal/portal-shell"
import { PageHeader } from "@/components/shared/page-header"
import { useI18n } from "@/lib/i18n/locale-provider"
import { announcements } from "@/lib/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Megaphone, Plus, Users } from "lucide-react"

export default function AdminAnnouncementsPage() {
  const { t } = useI18n()

  return (
    <PortalShell portal="admin" titleKey="adm.announcements" subtitleKey="adm.announcementsSub">
      <div className="flex flex-col gap-6">
        <PageHeader titleKey="adm.announcements" subtitleKey="adm.announcementsSub">
          <Button>
            <Plus data-icon="inline-start" />
            {t("adm.newAnnouncement")}
          </Button>
        </PageHeader>

        <div className="flex flex-col gap-4">
          {announcements.map((a) => (
            <Card key={a.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Megaphone className="size-5" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base">{a.title}</CardTitle>
                      <CardDescription>{a.body}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={a.status === "published" ? "default" : "secondary"}>
                    {a.status === "published" ? t("adm.publish") : t("status.draft")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-3.5" />
                  {a.audience}
                </span>
                <span>{a.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalShell>
  )
}
