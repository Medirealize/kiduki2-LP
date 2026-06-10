import { MessageCircleHeart } from "lucide-react"

const links = [
  { label: "プライバシーポリシー", href: "#" },
  { label: "利用規約", href: "#" },
  { label: "特定商取引法に基づく表記", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 pt-10 md:px-8">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          本アプリは気持ちの言語化を助けるコミュニケーション支援ツールです。専門的なサポートが必要な場合は、医療機関や相談窓口をご利用ください。
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <MessageCircleHeart className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold text-foreground">ほんね。</span>
        </div>

        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Medirealize All rights reserved.
        </p>
      </div>
    </footer>
  )
}
