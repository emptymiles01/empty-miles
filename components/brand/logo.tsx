import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "default",
}: {
  className?: string
  variant?: "default" | "light"
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "relative flex size-7 items-center justify-center rounded-full",
          variant === "light" ? "bg-primary-foreground/10" : "bg-primary/10",
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "size-3.5 rounded-full border-[3px]",
            variant === "light" ? "border-primary-foreground" : "border-primary",
          )}
          style={{ borderRightColor: "transparent" }}
        />
      </span>
      <span
        className={cn(
          "font-heading text-sm font-extrabold tracking-tight",
          variant === "light" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        EMPTY MILES
      </span>
    </div>
  )
}
