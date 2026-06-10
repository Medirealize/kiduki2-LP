import { ArrowRight, MessageCircleHeart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center shadow-md md:px-12 md:py-20">
        <div className="pointer-events-none absolute -top-16 -left-12 size-56 rounded-full bg-primary-foreground/10 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-56 rounded-full bg-primary-foreground/10 blur-2xl" aria-hidden="true" />

        <span className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
          <MessageCircleHeart className="size-7" aria-hidden="true" />
        </span>
        <h2 className="mx-auto max-w-xl text-balance text-2xl font-bold leading-snug text-primary-foreground md:text-3xl md:leading-snug">
          誰かに言えない気持ちを、言葉にするお手伝いをします。
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/90">
          さっそく始めてみましょう。登録は無料、いつでもあなたのペースで。
        </p>
        <Button
          render={<a href="#" />}
          nativeButton={false}
          className="group mx-auto mt-8 h-14 rounded-full bg-card px-8 text-base font-bold text-primary shadow-md [a]:hover:bg-card/90"
        >
          無料で試してみる
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
