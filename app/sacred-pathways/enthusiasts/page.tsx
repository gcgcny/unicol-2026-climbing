"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, BookOpen, Flame, HelpCircle, ListChecks, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function FadeIn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const quotes = [
  {
    text: "Excitement and mystery in worship is the spiritual lifeblood of enthusiasts. …enthusiasts are inspired by joyful celebration… cheerleaders for God and the Christian life. Let them clap their hands, shout ‘Amen!’ and dance in their excitement, that’s all they ask. …They don’t want to just know concepts, but to experience them, to feel them, and to be moved by them.",
    ref: "(28)",
  },
  {
    text: "Enthusiasts enjoy a celebratory form of worship as well as many of the more supernatural forms of faith. …like to let go and experience God on the precipice of excitement and awe.",
    ref: "(152)",
  },
];

const cautions = [
  {
    text: "The necessity of maturity will probably lead virtually every enthusiast through (the) canyon of unanswered prayer, where expectancy runs dry and the only mystery seems to be where God is hiding.",
    ref: "(162)",
  },
  {
    text: "In the midst of a celebration it’s easy to forget how fearful and awesome God is. Without reverence, however, celebration degenerates into shallow triviality.",
    ref: "(165)",
  },
  {
    text: "Just because we feel good during a time of worship doesn’t mean we have offered up our will in an appropriate manner…just because we feel down or ‘flat’ doesn’t mean we aren’t effectively worshiping God.",
    ref: "(170)",
  },
  {
    text: "Enthusiasts by temperament are particularly fed by such experience (and) long to preserve the mystery of faith. Accepting the mystery of faith has both its strengths and its dangers, for while there is much mystery and supernatural activity in Scripture, there are also strong warnings against improper manifestations of what is popularly called ‘spirituality’.",
    ref: "(154)",
  },
];

const notableEnthusiasts = [
  { name: "Ann Kiemel Anderson", subtitle: "Author & speaker", image: null },
  { name: "King David", subtitle: "Psalmist & King of Israel", image: null },
  { name: "Graham Kendrick", subtitle: "Worship songwriter & leader", image: null },
  { name: "Zig Ziglar", subtitle: "Motivational speaker & author", image: null },
  { name: "Barbara Johnson", subtitle: "Christian humorist & author", image: null },
  { name: "James Robertson", subtitle: "Well known enthusiast", image: null },
  { name: "Charles Swindoll", subtitle: "Pastor, author & radio host", image: null },
  { name: "Jack Hayford", subtitle: "Pastor & worship leader", image: null },
];

const scriptures = [
  "1 Chron. 13:8",
  "1 Chron. 15:16",
  "1 Chron. 16",
  "2 Chron. 29:26",
  "Luke 19:37–40",
  "Acts 16:25",
  "Eph. 5:18–19",
  "Acts 3:7",
  "1 Cor. 14:40",
  "Acts 8:9–24",
];

const activities = [
  "Keep track of your dreams. Write down any that seem significant. The meanings should be fairly obvious to you. Talk with someone about them.",
  "Spend time just listening to God. Write down what you hear Him saying.",
  "Cultivate the mystery of expectancy: ask God to bring someone in your path to whom you can minister; start a conversation with a stranger.",
  "Spend time with children: lead music at children’s church; act out Bible stories for them.",
  "Use your imagination to put yourself into the scene when you are reading Bible passages. Try to understand how the participants were feeling, thinking, acting.",
  "Use your imagination to consider how you might act on the teaching of the Scriptures, e.g., the Beatitudes; teachings about forgiveness; tithing.",
  "Be part of a strong church that holds its members accountable. Ask for a prayer partner or a mentor.",
  "Take a course; learn an evangelistic method to give you a witness structure.",
];

const reflectionQuestions = [
  "Think about unanswered prayer in your life. To what do you attribute this? How do you respond when God says, “Wait.”",
  "What are you expecting/wanting from God right now? Talk with Him about it. What does He tell you?",
  "In what ways does God speak to you in your daily life? What forms does it take? What does He say? How do you react?",
  "How do you most like to celebrate God? What are some other ways you might like to experiment with?",
  "How do you feel when others around you don’t sing at all or sing softly throughout a song service, don’t raise their hands or move at all during worship?",
  "What changes would you like to see in the worship services at your church that would make worship a more satisfying experience for you?",
];

const resources = [
  "Carothers, Merlin R. Answers to Praise: Letters to the Author of Prison to Praise. (1972). Bridge-Logos Publishers. ISBN: 0882700154",
  "Carothers, Merlin R. Power in Praise: Sequel to Prison to Praise. (1993). Bridge-Logos Publishers. ISBN: 0912106263.",
  "Carothers, Merlin R. Prison to Praise. ISBN: 157748343X.",
  "Kiemel, Ann. I Love the Word Impossible. (1976). Tyndale House Publishers. ISBN: 0842315756.",
  "Kiemel, Ann. It’s Incredible. (1980). Tyndale House Publishers. ISBN: 0842318186.",
];

export default function Enthusiasts() {
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Enthusiasts</h1>
        <p className="text-lg text-muted-foreground italic">Loving God with Mystery and Celebration</p>
      </section>

      {/* Description / Quotes */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Description</h2>
          </div>
          <div className="space-y-5">
            {(showAllQuotes ? quotes : quotes.slice(0, 1)).map((q, i) => (
              <div key={i}>
                <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{q.text}&rdquo;</p>
                {q.ref && (
                  <p className="text-xs text-muted-foreground/70 mt-1">{q.ref}</p>
                )}
              </div>
            ))}
            {!showAllQuotes && (
              <div className="flex justify-center">
                <Button variant="ghost" size="sm" onClick={() => setShowAllQuotes(true)} className="text-muted-foreground">
                  Read More
                </Button>
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* Cautions */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Cautions</h2>
          </div>
          <Card>
            <CardContent className="space-y-5">
              {cautions.map((c, i) => (
                <div key={i}>
                  <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{c.text}&rdquo;</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{c.ref}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </FadeIn>

      {/* Well Known Enthusiasts */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Enthusiasts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableEnthusiasts.map((person) => (
              <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
                <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Flame className="h-7 w-7 text-muted-foreground/40" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Scriptures to Ponder */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Scriptures to Ponder</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {scriptures.map((s) => (
              <span key={s} className="inline-flex items-center rounded-lg border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
                {s}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Suggested Activities */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Suggested Activities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <ul className="space-y-3">
                  {activities.map((activity, i) => (
                    <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="text-primary shrink-0">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="rounded-xl border overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1546521343-d8721c7e5bf6?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Worship celebration"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Reflection Questions */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Reflection Questions</h2>
          </div>
          <Card>
            <CardContent>
              <ol className="space-y-4">
                {reflectionQuestions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary shrink-0">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>
      </FadeIn>

      {/* Resources + Source */}
      <FadeIn>
        <section className="border-t pt-6 pb-4 space-y-3">
          <p className="text-sm text-muted-foreground font-medium">Resources</p>
          <ul className="space-y-2">
            {resources.map((r, i) => (
              <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
          <hr className="border-border" />
          <p className="text-sm text-muted-foreground font-medium">Sources</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground leading-relaxed">
              <a
                href="https://www.garythomas.com/wp-content/uploads/2013/02/sacredpathways.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Study Guide by Adalee Lewis
              </a>
            </li>
            <li className="text-sm text-muted-foreground leading-relaxed">
              <a
                href="https://garythomas.com/wp-content/uploads/2013/03/sacred_pathways_sample_chapter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Sacred Pathways by Gary Thomas
              </a>
            </li>
          </ul>
        </section>
      </FadeIn>

    </main>
  );
}
