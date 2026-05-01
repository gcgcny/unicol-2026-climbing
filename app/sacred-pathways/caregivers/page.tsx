"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Book, BookOpen, BookOpenText, Heart, HelpCircle, ListChecks, Users, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

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
    text: "Caregivers serve God by serving others. They often claim to see Christ in the poor and needy, and their faith is built up by interacting with other people. Such Christians may consider the devotional lives of contemplatives and enthusiasts to be selfish. …caring for others…recharges a caregiver's batteries.",
    ref: "(27, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Mother Teresa …looked behind the eyes of the poor, the sick, and the needy, and said she saw the image of God. She learned to love God by loving others.",
    ref: "(135)",
  },
  {
    text: "For caregivers, giving care isn't a chore but a form of worship. Martyrs need not apply.",
    ref: "(135)",
  },
  {
    text: "Some Christians will have a particular gift and calling for caregiving. These acts of mercy are a very practical way for them to show their love for God, but also to grow in their love for God. Caregivers may hear God more clearly when they change an adult's diaper than when they sit quietly in prayer.",
    ref: "(149)",
  },
  {
    text: "Caregiving is not a license to judge others who serve God in different ways…all Christians are called to care for others…there are different ways this obligation can be fulfilled… it is not for us to judge the validity of someone else's worship.",
    ref: "(146)",
  },
];

const cautions = [
  {
    text: "Caregiving as a temperament means we express our love to God by reaching out to others; it's the picture of a heart overflowing with love and spilling out onto those around us. Caregiving as a disease is actually an act of taking; it's an act of deception, loving others so that they will love or need us in return.",
    ref: "(147)",
  },
  {
    text: "Activists and caregivers may have more in common than you might think… both can work together – one to help solve the underlying problem, the other to give comfort until the problem is addressed.",
    ref: "(147)",
  },
];

const activities = [
  '"Adopt" someone – a prisoner, neighborhood child or elderly person; open your home to students or neighborhood kids',
  "Help a friend through a crisis; counsel at a crisis pregnancy center",
  "Work in the inner city, e.g. Mission Year (Bart Campolo)",
  "Help someone battling substance abuse",
  "Volunteer on a rescue squad; work in a soup kitchen",
];

const notableCaregivers = [
  {
    name: "Mother Teresa",
    subtitle: "Missionary & founder of Missionaries of Charity",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/1920px-Mother_Teresa_1.jpg",
  },
  {
    name: "Henri Nouwen",
    subtitle: "Dutch Catholic priest, professor & spiritual writer",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HenriNouwen.JPG",
  },
  {
    name: "Mordecai",
    subtitle: "Biblical figure, guardian & advocate of Esther",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Abraham_van_den_Hecken_%28II%29_%28Attributed_to%29_-_The_Triumph_of_Mordecai_%28cropped%29.jpg",
  },
];

const matthew = {
  ref: "Matthew 25:35–40",
  verses: [
    { v: 35, text: "For I was hungry and you gave me food, I was thirsty and you gave me something to drink, I was a stranger and you invited me in," },
    { v: 36, text: "I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me." },
    { v: 37, text: "Then the righteous will answer him, 'Lord, when did we see you hungry and feed you, or thirsty and give you something to drink?" },
    { v: 38, text: "When did we see you a stranger and invite you in, or needing clothes and clothe you?" },
    { v: 39, text: "When did we see you sick or in prison and go to visit you?'" },
    { v: 40, text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'" },
  ],
  studyQuestions: [
    {
      question: "What acts does Jesus count as serving him?",
      points: [
        "Feeding the hungry and giving water to the thirsty (v. 35)",
        "Welcoming strangers and clothing the naked (v. 35–36)",
        "Caring for the sick and visiting those in prison (v. 36)",
      ],
    },
    {
      question: "Why were the righteous surprised?",
      points: [
        "They had not recognized Jesus in those they served (v. 37–39)",
        "Their service felt ordinary to them, not like worship",
      ],
    },
    {
      question: 'What does "the least of these" reveal about God\'s heart?',
      points: [
        "God identifies personally with those who are marginalized, suffering, or forgotten",
        "Service to them is service to God himself",
      ],
    },
    {
      question: "How does this passage challenge the way you see everyday acts of service?",
      points: [
        "Ordinary compassion carries eternal weight",
        "Loving God and loving others cannot be fully separated",
      ],
    },
  ],
};

const scriptures = [
  {
    ref: "Esther 2:11",
    verses: [
      { v: 11, text: "Every day he walked back and forth near the courtyard of the harem to find out how Esther was and what was happening to her." },
    ],
  },
  {
    ref: "Esther 4:1",
    verses: [
      { v: 1, text: "When Mordecai learned of all that had been done, he tore his clothes, put on sackcloth and ashes, and went out into the city, wailing loudly and bitterly." },
    ],
  },
  {
    ref: "Esther 4:13–14",
    verses: [
      { v: 13, text: "he sent back this answer: 'Do not think that because you are in the king's house you alone of all the Jews will escape." },
      { v: 14, text: "'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father's family will perish. And who knows but that you have come to your royal position for such a time as this?'" },
    ],
  },
  {
    ref: "Esther 8:7–8",
    verses: [
      { v: 7, text: "King Xerxes replied to Queen Esther and to Mordecai the Jew, 'Because Haman attacked the Jews, I have given his estate to Esther, and they have impaled him on the pole he set up." },
      { v: 8, text: "'Now write another decree in the king's name in behalf of the Jews as seems best to you, and seal it with the king's signet ring—for no decree written in the king's name and sealed with his signet ring can be revoked.'" },
    ],
  },
  {
    ref: "Ezekiel 16:49",
    verses: [
      { v: 49, text: "Now this was the sin of your sister Sodom: She and her daughters were arrogant, overfed and unconcerned; they did not help the poor and needy." },
    ],
  },
  {
    ref: "Good Samaritan (Luke 10:30–35)",
    verses: [
      { v: 30, text: "In reply Jesus said: 'A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead." },
      { v: 31, text: "'A priest happened to be going down the same road, and when he saw the man, he passed by on the other side." },
      { v: 32, text: "'So too, a Levite, when he came to the place and saw him, passed by on the other side." },
      { v: 33, text: "'But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him." },
      { v: 34, text: "'He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him." },
      { v: 35, text: "'The next day he took out two denarii and gave them to the innkeeper. “Look after him,” he said, “and when I return, I will reimburse you for any extra expense you may have.”'" },
    ],
  },
  {
    ref: "1 John 3:14, 17",
    verses: [
      { v: 14, text: "We know that we have passed from death to life, because we love each other. Anyone who does not love remains in death." },
      { v: 17, text: "If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person?" },
    ],
  },
  {
    ref: "Philippians 2:4",
    verses: [
      { v: 4, text: "not looking to your own interests but each of you to the interests of the others." },
    ],
  },
  {
    ref: "Hebrews 6:10",
    verses: [
      { v: 10, text: "God is not unjust; he will not forget your work and the love you have shown him as you have helped his people and continue to help them." },
    ],
  },
  {
    ref: "James 1:27",
    verses: [
      { v: 27, text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world." },
    ],
  },
  {
    ref: "1 Peter 4:9–10",
    verses: [
      { v: 9, text: "Offer hospitality to one another without grumbling." },
      { v: 10, text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." },
    ],
  },
  {
    ref: "Matthew 25:35–36",
    verses: [
      { v: 35, text: "For I was hungry and you gave me food, I was thirsty and you gave me something to drink, I was a stranger and you invited me in," },
      { v: 36, text: "I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me." },
    ],
  },
];

const reflectionQuestions = [
  "What are some of the ways in which you have served others? What motivated you to help them?",
  "What \"return\" (positive or negative) do you receive when you help others? These can be spiritual, emotional, etc.",
  "How do you feel about people who are not actively ministering to the poor, sick, etc.?",
  "Do you ever minister to others out of your own need? Or because you feel you have to? Or don't know how to say, \"No\"? Contrast that with a time when you freely helped someone out of a genuine desire to serve.",
  "Think about your relationships. Do you have relationships with people who do not \"need\" you? If not, how might you begin to develop friendships outside your circle of ministry?",
];

const resources = [
  "Mother Teresa, Becky Benenate, Joseph Durepos. No Greater Love. (2003). Group West. ISBN: 1577312015",
  "Nouwen, Henri J. M. Can You Drink the Cup? (1996). Ave Maria Press. ISBN: 0877935815",
  "Sjogren, Steve (1993). Conspiracy of Kindness. Ann Arbor: Servant.",
  "Wuthnow, Robert (1991). Acts of Compassion. Princeton: Princeton University Press.",
];

export default function Caregivers() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Caregivers</h1>
        <p className="text-lg text-muted-foreground italic">Loving God by Loving Others</p>
      </section>

      {/* Description / Quotes */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
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
          <div className="space-y-5">
            {cautions.map((c, i) => (
              <div key={i}>
                <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{c.text}&rdquo;</p>
                {c.ref && (
                  <p className="text-xs text-muted-foreground/70 mt-1">{c.ref}</p>
                )}
              </div>
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
                src="https://plus.unsplash.com/premium_photo-1681195079023-4f4e39e93382?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Caregiving"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Scriptures to Reflect On */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Scriptures to Reflect On</h2>
          </div>
          <Card>
            <CardContent className="space-y-4">
              <p className="font-semibold text-sm">{matthew.ref}</p>
              <div className="space-y-3">
                {matthew.verses.map(({ v, text }) => (
                  <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary mr-2">{v}</span>
                    {text}
                  </p>
                ))}
                <p className="text-xs text-muted-foreground/60 pt-2">NIV — New International Version</p>
              </div>
              <div className="space-y-4 pt-2 border-t">
                <p className="font-semibold text-sm text-foreground">Study Questions</p>
                <ol className="space-y-4">
                  {matthew.studyQuestions.map((sq, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-sm font-medium text-foreground leading-snug">{sq.question}</p>
                      <ul className="space-y-0.5 pl-3">
                        {sq.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary shrink-0">–</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl bg-accent px-6 py-5">
                <p className="text-sm leading-relaxed text-accent-foreground">
                  <span className="font-semibold">Takeaway:</span>{" "}
                  For the caregiver, loving others is not separate from loving God — it is one of their primary ways of encountering him. When they serve the hungry, the sick, and the lonely, they are not merely doing good deeds; they are meeting Jesus himself in those they care for.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-4">
            {scriptures.map((s) => (
              <Button
                key={s.ref}
                variant="secondary"
                onClick={() => setSelectedScripture(s)}
                className="group"
              >
                <Book className="h-4 w-4 shrink-0 group-hover:hidden" />
                <BookOpenText className="h-4 w-4 shrink-0 hidden group-hover:block" />
                {s.ref}
              </Button>
            ))}
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

      {/* Well Known Caregivers */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Caregivers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableCaregivers.map((person) => (
              <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
                <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Heart className="h-7 w-7 text-muted-foreground/40" />
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

      {/* Scripture Drawer */}
      <Drawer
        direction="right"
        open={!!selectedScripture}
        onOpenChange={(open: boolean) => { if (!open) setSelectedScripture(null); }}
      >
        <DrawerContent className="fixed inset-y-0 right-0 left-auto w-full sm:w-[400px] rounded-none rounded-l-[10px] mt-0 flex flex-col">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <DrawerTitle>{selectedScripture?.ref}</DrawerTitle>
            <button
              onClick={() => setSelectedScripture(null)}
              className="sm:hidden rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4 pb-4 space-y-4">
            {selectedScripture?.verses.map(({ v, text }) => (
              <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary mr-2">{v}</span>
                {text}
              </p>
            ))}
            <p className="text-xs text-muted-foreground/60 pt-4 border-t">NIV — New International Version</p>
          </div>
        </DrawerContent>
      </Drawer>

    </main>
  );
}
