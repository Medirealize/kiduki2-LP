import { Clock3, Heart, PenLine, Sparkles, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const types = [
  {
    icon: Clock3,
    label: "タイプ A",
    title: "自分のペースで考えたい",
    description: "理由や根拠がわかると安心。納得してから動きたいタイプ。",
  },
  {
    icon: Heart,
    label: "タイプ B",
    title: "まず気持ちをわかってほしい",
    description: "家族や周りへの気遣いが強く、共感してもらえると楽になるタイプ。",
  },
  {
    icon: Users,
    label: "タイプ C",
    title: "仕事や生活への影響が気になる",
    description: "見通しや計画が立つと動きやすく、役割を果たしたいタイプ。",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <Badge className="mb-4 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          使い方は3ステップ
        </Badge>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          かんたんな問いに答えるだけで、本音が言葉になる。
        </h2>
      </div>

      {/* Step 1 */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-center gap-3 text-center md:justify-start md:text-left">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
            1
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">🪞</span>
            <h3 className="text-xl font-bold text-foreground">タイプを選ぶ</h3>
          </div>
        </div>
        <p className="mb-6 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
          今のあなたに一番近いものを選んでください。選んだタイプに合わせて、質問の内容が変わります。
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {types.map((type) => {
            const Icon = type.icon
            return (
              <Card
                key={type.label}
                className="group cursor-pointer rounded-3xl border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:ring-2 hover:ring-primary/30"
              >
                <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mb-1 text-xs font-bold tracking-wide text-primary">{type.label}</p>
                <h4 className="mb-2 text-lg font-bold leading-snug text-foreground">{type.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{type.description}</p>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Steps 2 & 3 */}
      <div className="grid gap-5 md:grid-cols-2">
        <Card className="flex items-start gap-4 rounded-3xl border-border/60 bg-secondary/30 p-6 shadow-sm">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-lg font-bold text-secondary-foreground">
            2
          </span>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">💬</span>
              <h3 className="text-lg font-bold text-foreground">気持ちを書く</h3>
              <PenLine className="size-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              言葉にできなくても大丈夫。思ったままでOK。
            </p>
          </div>
        </Card>

        <Card className="flex items-start gap-4 rounded-3xl border-border/60 bg-accent/40 p-6 shadow-sm">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-accent-foreground">
            3
          </span>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">✨</span>
              <h3 className="text-lg font-bold text-foreground">本音が言葉になる</h3>
              <Sparkles className="size-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              3つの問いに答えると、あなたの本音が見えてきます。
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
