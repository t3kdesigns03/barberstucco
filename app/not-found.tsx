import Button from "@/components/Button";
import { LogoMark } from "@/components/Logo";
import { BUSINESS } from "@/src/data/business";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <LogoMark className="h-12 w-12" />
      <h1 className="mt-8 font-display text-[2.4rem] leading-tight tracking-tightest sm:text-5xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The old site had a few pages that never had anything on them. This
        one doesn&rsquo;t.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to the front</Button>
        <Button href={BUSINESS.phoneHref} variant="secondary">
          Call {BUSINESS.phoneDisplay}
        </Button>
      </div>
    </section>
  );
}
