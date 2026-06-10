import { HeartHandshake, ShieldCheck, MessageSquareText } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: MessageSquareText,
    title: "タイプに合わせて質問が変わる",
    description: "今のあなたに近いタイプを選ぶだけ。質問の内容がそれに合わせて変わるから、自然と気持ちを言葉にできます。",
  },
  {
    icon: ShieldCheck,
    title: "AIのオン・オフを選べる",
    description: "オンにすると、最後にAIが表現をやさしく整えます。オフなら端末内の結果だけでその場に表示。プライバシーも安心です。",
  },
  {
    icon: HeartHandshake,
    title: "否定されない、安心の場所",
    description: "気持ちの言語化を助けるコミュニケーション支援ツール。ジャッジされることなく、ありのままの気持ちを言葉にできます。",
  },
]

export function Features() {
  return (
    <section className="bg-secondary/20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            安心して使える、3つの理由。
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            あなたの心にそっと寄り添うために、「ほんね。」はこんなことを大切にしています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-border/60 bg-card p-7 text-center shadow-sm"
              >
                <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-bold leading-snug text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
