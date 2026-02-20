import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// February 20, 2026, 12:30am EST (UTC-5) = 05:30 UTC
const SITE_START = new Date("2026-02-20T04:00:00.000Z");

export default function UnderConstruction() {
  const hours = Math.round(
    (Date.now() - SITE_START.getTime()) / (1000 * 60 * 60)
  );

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Under Construction</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Someone started making this site {hours} hours ago in a fit of
          inspiration. Sorry we&apos;re not done yet, please bear with us.
        </p>
      </CardContent>
    </Card>
  );
}
