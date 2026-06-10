import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-32 -left-24 size-72 rounded-full bg-secondary/40 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-6 text-center lg:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground lg:mx-0">
            <Sparkles className="size-4" aria-hidden="true" />
            性格統計学 × AI
          </span>
          <h1 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl lg:leading-tight">
            気づいて！私のきもち。
            <br />
            <span className="text-primary">言いたいのに言えない</span>
            <br className="hidden md:block" />
            ——そんな気持ちを、
            <br className="md:hidden" />
            言葉にしてみませんか。
          </h1>
          <p className="mx-auto max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            性格統計学とAIが、あなたの奥底にある「ほんね」を優しく引き出すお手伝いをします。
          </p>
          <div className="mx-auto flex flex-col items-center gap-3 sm:flex-row lg:mx-0">
            <Button
              render={<a href="#how-it-works" />}
              nativeButton={false}
              className="group h-12 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-md [a]:hover:bg-primary/90"
            >
              今の自分のタイプを選ぶ
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-md ring-1 ring-border/60">
            <Image
              src="/hero-warmth.png"
              alt="寄り添う二人と、優しく浮かぶ吹き出しとハートのイラスト"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
