const FIELD =
  "w-full rounded-xl border border-stone bg-white px-4 py-3.5 text-base text-body placeholder:text-muted/55 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25";

const LABEL = "block text-sm font-semibold text-ink";

/**
 * Netlify Forms. The `data-netlify` attributes are picked up from the
 * statically exported HTML at deploy time — no runtime needed. The honeypot
 * field is hidden from people and irresistible to bots.
 */
export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="company-website"
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="company-website" tabIndex={-1} />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${FIELD} mt-2`}
            placeholder="Robert Barber"
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className={`${FIELD} mt-2`}
            placeholder="(573) 555-0142"
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${FIELD} mt-2`}
          placeholder="you@example.com"
        />
      </div>

      <fieldset>
        <legend className={LABEL}>Project type</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            { value: "Residential", hint: "House, addition, re-skin" },
            { value: "Commercial", hint: "Storefront, office, multi-family" },
            { value: "Not sure", hint: "Talk it through with us" },
          ].map((opt, i) => (
            <label
              key={opt.value}
              className="group flex cursor-pointer flex-col gap-1 rounded-xl border border-stone bg-white p-4 transition-colors hover:border-teal has-[:checked]:border-teal has-[:checked]:bg-teal/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal/40"
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="project-type"
                  value={opt.value}
                  defaultChecked={i === 0}
                  className="h-4 w-4 accent-[#0B6E74]"
                />
                <span className="font-semibold text-ink">{opt.value}</span>
              </span>
              <span className="pl-7 text-xs text-muted">{opt.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={LABEL} htmlFor="message">
          What are we looking at?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${FIELD} mt-2 resize-y`}
          placeholder="Address or area, what's on the wall now, whether it's new construction or a repair, and roughly when you'd like it done."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-teal-deep px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_-14px_rgba(11,110,116,.85)] transition-all hover:-translate-y-0.5 hover:bg-teal-mid sm:w-auto"
      >
        Send it over
      </button>

      <p className="text-sm text-muted">
        Prefer to talk? Calling is faster — we answer from the truck.
      </p>
    </form>
  );
}
