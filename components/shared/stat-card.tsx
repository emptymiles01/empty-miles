import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({
  label,
  value,
  icon: Icon,
  hint,
  hintTone = "muted",
  className,
}: {
  label: string
  value: string
  icon: LucideIcon
  hint?: string
  hintTone?: "muted" | "success" | "primary"
  className?: string
}) {
  return (
    <Card className={cn("gap-0 py-0", className)}>
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
        </div>
        <p className="font-heading text-2xl font-bold tracking-tight">{value}</p>
        {hint && (
          <p
            className={cn(
              "text-xs font-medium",
              hintTone === "success" && "text-success",
              hintTone === "primary" && "text-primary",
              hintTone === "muted" && "text-muted-foreground",
            )}
          >
            {hint}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
