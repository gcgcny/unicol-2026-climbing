import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, DotIcon, InfoIcon, StarIcon } from "lucide-react";

export default function PricingPlans() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10">Pricing Plans</h1>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* One Time Pass */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-center">One Time Pass</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl sm:text-5xl font-bold text-center mb-6">
              <span className="text-xl sm:text-3xl align-super">$</span>14.27
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Purchase one pass at a time</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Available for up to 8 passes per participant during the season.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Great if you prefer flexibility or are unsure how many sessions you&apos;ll attend.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 8 Punch Pass */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-center">8 Punch Pass</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl sm:text-5xl font-bold text-center mb-6">
              <span className="text-xl sm:text-3xl align-super">$</span>114.16
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Prepay for the full season at the subsidized rate.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Equivalent to $14.27 per pass.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Simplest option — no payments needed during the season.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 shrink-0 size-4" />Passes are still distributed one at a time as you attend.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Using Passes info card */}
      <Card>
        <CardContent>
          <div className="flex items-start gap-3">
            <InfoIcon className="mt-0.5 shrink-0" size={22} />
            <div>
              <h2 className="text-xl font-bold mb-3">Using Passes</h2>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><DotIcon className="mt-0.5 shrink-0 size-4" />Passes must be used with the leader who holds the pass because we are purchasing in bulk.</li>
                <li className="flex items-start gap-2"><DotIcon className="mt-0.5 shrink-0 size-4" />Up to 8 passes per participant at subsidized pricing.</li>
                <li className="flex items-start gap-2"><DotIcon className="mt-0.5 shrink-0 size-4" />Total subsidy of $50 per person.</li>
                <li className="flex items-start gap-2"><DotIcon className="mt-0.5 shrink-0 size-4" />Fair, consistent pricing whether you choose single passes or the punch.</li>
                <li className="flex items-start gap-2"><StarIcon className="mt-0.5 shrink-0 size-4" />You do not have to use the passes and subsidized pricing if you prefer to use your own pass or membership.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
