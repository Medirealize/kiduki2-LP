import { MessageCircleHeart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2" aria-label="ほんね。ホーム">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <MessageCircleHeart className="size-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">ほんね。</span>
        </a>
        <Button
          render={<a href="https://insight.medirealize.jp/ja" />}
          nativeButton={false}
          className="h-10 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm [a]:hover:bg-primary/90"
        >
          無料で始める
        </Button>
      </div>
    </header>
  )
}
