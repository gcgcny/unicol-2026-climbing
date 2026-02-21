import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Users,
  Clock,
  MapPin,
  BookOpen,
  Mountain,
  Sparkles,
} from "lucide-react";

const terms = [
  {
    label: "Winter Term",
    title: "Sacred Pathways",
    description:
      "Discover the unique ways people connect with God and grow closer to Him. This series helps you understand how God has shaped you to experience Him personally.",
    href: "/sacred-pathways",
  },
  {
    label: "Summer Term",
    title: "Spiritual Disciplines",
    description:
      "During the summer we focus on practical rhythms that help us live out Sacred Pathways in everyday life and deepen our relationship with God.",
    href: "/spiritual-disciplines",
  },
];

export default function AboutUnicolPage() {
  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-4 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Unicol Student Ministry
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          A space for university and college-aged students to grow in faith, build deep friendships, and walk through life together.
        </p>
        <p className="text-sm text-muted-foreground italic">
          Whether you are new to faith or have been following God for years, you are welcome here!
        </p>
      </section>

      {/* When We Meet */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">When We Meet</h2>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="font-semibold text-base">Fridays | 7:30–9:30 PM</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Grace Chinese Gospel Church</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our Friday nights are simple and intentional. We gather as students, read Scripture, share our thoughts, and encourage one another in our faith journeys.
            </p>
            <div className="overflow-hidden rounded-lg border">
              <iframe
                title="Grace Chinese Gospel Church location"
                src="https://maps.google.com/maps?q=201+Tempo+Ave,+North+York,+ON&output=embed"
                width="100%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=201+Tempo+Ave,+North+York,+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <MapPin className="h-3 w-3" />
              201 Tempo Avenue, North York, ON
            </a>
          </CardContent>
        </Card>
      </section>

      {/* What We're Learning */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">What We&apos;re Learning</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {terms.map(({ label, title, description, href }) => (
            <Link key={label} href={href} className="group block h-full">
              <div className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm flex flex-col h-full transition-all duration-300 lg:hover:shadow-[0_0px_24px_-5px_rgb(0_0_0_/_0.1),_0_8px_10px_-6px_rgb(0_0_0_/_0.1)] lg:dark:hover:border-ring cursor-pointer">
                <div className="flex flex-col gap-1.5 px-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</p>
                  <div className="font-semibold text-base">{title}</div>
                </div>
                <div className="px-6 flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
                  <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-200">
                    <span className="flex items-center justify-center w-full h-9 rounded-md bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2 pointer-events-none">Learn More</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Summer Climbing Ministry */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Mountain className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Summer Climbing Ministry</h2>
        </div>
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              From May to August, Unicol will host a <Link href="/" className="font-semibold text-foreground underline hover:text-primary transition-colors">Climbing Ministry</Link> on the <span className="font-semibold text-foreground">1st and 3rd Fridays</span> of each month. It is an active way to build friendships, practice faith, and grow together as a community.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Who It's For */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Who It&apos;s For</h2>
        </div>
        <Card className="bg-muted/40">
          <CardContent>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unicol is for university and college-aged students who want meaningful community, honest conversations, and space to grow spiritually. Come as you are and walk the journey together with us.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

    </main>
  );
}
