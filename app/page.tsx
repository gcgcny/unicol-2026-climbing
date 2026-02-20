import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Mountain,
  Users,
  Heart,
  Clock,
  MapPin,
  Sparkles,
  MessageCircle,
  Dumbbell,
  Armchair,
  Link,
} from 'lucide-react';

const aboutPoints = [
  { icon: Users, text: 'Build real community through a fun activity' },
  { icon: Heart, text: 'Grow closer to God through accountability' },
  { icon: Mountain, text: 'Learn the Christian walk through climbing, strengthening, and resting' },
];

const gymActivities = [
  { icon: Mountain, label: 'Boulder' },
  { icon: Link, label: 'Auto-belay' },
  { icon: Dumbbell, label: 'Workout / condition' },
  { icon: Armchair, label: 'Rest & chill' },
];

const schedule = [
  { time: '7:30 pm', label: 'Warm-up together' },
  { time: '7:45–9:00 pm', label: 'Pods around the gym' },
  { time: '9:00 pm', label: 'Cool-down + devos' },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-4 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Climbing Ministry
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          A community for university & college students to climb, connect, rest, and grow together.
        </p>
        <p className="text-sm text-muted-foreground italic">
          No climbing experience needed, this ministry isn&apos;t just for climbers!
        </p>
      </section>

      {/* Why We Exist */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">About Us</h2>
        </div>
        <Card>
          <CardContent>
            <ul className="space-y-2">
              {aboutPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <Icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* What a Night Looks Like */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Mountain className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">What a Night Looks Like</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">

          {/* Where */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Where</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="font-semibold">Hub Markham</p>
              <p className="text-muted-foreground">
                Close to church — convenient if you need rides or have siblings in other ministries.
              </p>
              <div className="overflow-hidden rounded-lg border">
                <iframe
                  title="Hub Markham location"
                  src="https://maps.google.com/maps?q=165+McIntosh+Dr,+Markham,+ON+L3R+0N6&output=embed"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/maps?q=165+McIntosh+Dr,+Markham,+ON+L3R+0N6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <MapPin className="h-3 w-3" />
                165 McIntosh Dr, Markham, ON L3R 0N6
              </a>
            </CardContent>
          </Card>

          {/* Gym activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">At the gym you can</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {gymActivities.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm">
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Move freely between areas — just stay connected with your Unicol pod.
              </p>
              <div className="mt-4 rounded-lg bg-muted px-4 py-3 text-sm">
                <span className="font-semibold">Pods</span>
                <span className="text-muted-foreground"> — small groups with a leader where you build friendships, look out for each other, and reach out to others.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When + Schedule */}
      <section className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">When</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p className="font-semibold">Fridays · May – August</p>
            <p className="text-muted-foreground">1st &amp; 3rd Fridays of each month</p>
            <p className="font-semibold mt-2">7:30 – 9:30 pm</p>
            <p className="text-muted-foreground text-xs">Feel free to arrive early or stay later!</p>

            <div className="border-t my-4" />

            <p className="font-semibold text-base mb-3">Schedule</p>
            <ol className="space-y-3">
              {schedule.map(({ time, label }) => (
                <li key={time} className="flex gap-3 text-sm">
                  <span className="font-semibold text-primary whitespace-nowrap">{time}</span>
                  <span className="text-muted-foreground">{label}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Who Can Join + New Here */}
      <section className="grid gap-4 sm:grid-cols-2">
        <Card className="bg-muted/40">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Who Can Join?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <p>University &amp; college-aged students.</p>
            <p>Any skill level. Beginners welcome.</p>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">New Here?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>You don&apos;t need to be a climber to belong. Come as you are — climb, rest, or just hang out.</p>
            <p>Have questions? Reach out anytime — we&apos;d love to meet you!</p>
          </CardContent>
        </Card>
      </section>

    </main>
  );
}
