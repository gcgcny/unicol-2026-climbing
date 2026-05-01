"use client";

import { useEffect, useRef, useState } from "react";
import { Book, BookOpen, BookOpenText, Flame, HelpCircle, ListChecks, TriangleAlert, Users, X } from "lucide-react";
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
    text: "Activists serve a God of justice, …their favorite Scripture is often the account of Jesus cleansing the temple. They define worship as standing against evil and calling sinners to repentance. Activists may adopt either social or evangelistic causes, but they find their home in the rough-and-tumble world of confrontation. They are energized more by interaction with others, even in conflict, than by being alone or in small groups.",
    ref: "(26, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Activists…are spiritually nourished through the battle.",
    ref: "(121)",
  },
  {
    text: "The true activist lives for God and for His love alone.",
    ref: "(124)",
  },
];

const cautions = [
  {
    text: "Activists tend to see the world and its issues in ‘black and white.’",
    ref: null,
  },
  {
    text: "There is only one kind of person who can fight the Lord’s battles in anywhere near a proper way, and that is the person who by nature is unbelligerent; at least it looks that way. The world must observe that, when we must differ with each other as true Christians, we do it not because we love the smell of the bullfight, but because we must for Christ’s sake.",
    ref: "(121)",
  },
  {
    text: "The church has frequently had an uneasy relationship with activists and prophets. We fondly remember those who have died, but often loathe those who are still living.",
    ref: "(132)",
  },
  {
    text: "The ‘shadow-side’ to this temperament shows itself in acerbic tactlessness, running roughshod over others, not waiting for God or seeking discernment.",
    ref: null,
  },
];

const suggestions = [
  "Consider God’s faithfulness in the light of so much undone in the world. Consider His great patience. He is working even when we see no evidence of it. Don’t give up.",
  "Ponder John 4:34",
  "Seek to develop tact, gentleness, persuasiveness, true love for others. Seek a mentor.",
  "Invest energy in: producing and transmitting literature; social reform; “marches”; prayer walks; food pantries; crisis pregnancy center. Be creative.",
  "Thoroughly research any activity before joining it. Ask God for wisdom first. Seek counsel, confirmation and accountability.",
  "Be careful that intervention doesn’t become accusation. Understand the difference between, “That’s wrong!” and “I don’t like that.”",
  "Remember that everything you say must be truth. But you don’t have to say it just because it is true.",
  "Consider carefully the outcomes you desire from your efforts.",
  "Develop your ability for self-examination and contemplation of God.",
];

const notableActivists = [
  {
    name: "William Wilberforce",
    subtitle: "British abolitionist & Member of Parliament",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/William_wilberforce.jpg",
  },
  {
    name: "Martin Luther King Jr.",
    subtitle: "American civil rights leader & Baptist minister",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  },
  {
    name: "John Wesley",
    subtitle: "Founder of Methodism & social reformer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/John_Wesley_by_George_Romney.jpg/1280px-John_Wesley_by_George_Romney.jpg",
  },
  {
    name: "Elizabeth Fry",
    subtitle: "Quaker prison reformer & philanthropist",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Elizabeth_Fry_-_Project_Gutenberg_etext_13103.jpg",
  },
  {
    name: "Charles Colson",
    subtitle: "Founder of Prison Fellowship",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Chuck_Colson.jpg",
  },
  {
    name: "Francis Schaeffer",
    subtitle: "Christian philosopher & cultural critic",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Dr._Francis_Schaeffer%2C_L%27Abri_Conference%2C_Urbana%2C_1981_%28cropped%29.jpg",
  },
];

const proverbs = {
  ref: "Proverbs 24:11–12",
  verses: [
    { v: 11, text: "Rescue those being led away to death; hold back those staggering toward slaughter." },
    { v: 12, text: "If you say, “But we knew nothing about this,” does not he who weighs the heart perceive it? Does not he who guards your life know it? Will he not repay everyone according to what they have done?" },
  ],
  studyQuestions: [
    {
      question: "What action does God call us to?",
      points: [
        "Rescue those being led away to death (v. 11)",
        "Hold back those staggering toward slaughter (v. 11)",
      ],
    },
    {
      question: "What excuse does God reject?",
      points: [
        "“But we knew nothing about this” (v. 12)",
        "God, who weighs the heart, knows what we perceived",
      ],
    },
    {
      question: "What is God’s posture toward injustice?",
      points: [
        "He weighs the heart (v. 12)",
        "He guards our life (v. 12)",
        "He will repay everyone according to what they have done (v. 12)",
      ],
    },
  ],
};

const scriptures = [
  {
    ref: "Psalm 7",
    verses: [
      { v: 1, text: "Lord my God, I take refuge in you; save and deliver me from all who pursue me," },
      { v: 6, text: "Arise, Lord, in your anger; rise up against the rage of my enemies. Awake, my God; decree justice." },
      { v: 8, text: "Let the Lord judge the peoples. Vindicate me, Lord, according to my righteousness, according to my integrity, O Most High." },
      { v: 9, text: "Bring to an end the violence of the wicked and make the righteous secure—you, the righteous God who probes minds and hearts." },
      { v: 11, text: "God is a righteous judge, a God who displays his wrath every day." },
      { v: 17, text: "I will give thanks to the Lord because of his righteousness; I will sing the praises of the name of the Lord Most High." },
    ],
  },
  {
    ref: "Psalm 68",
    verses: [
      { v: 1, text: "May God arise, may his enemies be scattered; may his foes flee before him." },
      { v: 3, text: "But may the righteous be glad and rejoice before God; may they be happy and joyful." },
      { v: 5, text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
      { v: 6, text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land." },
      { v: 19, text: "Praise be to the Lord, to God our Savior, who daily bears our burdens." },
      { v: 35, text: "You, God, are awesome in your sanctuary; the God of Israel gives power and strength to his people. Praise be to God!" },
    ],
  },
  {
    ref: "Psalm 10",
    verses: [
      { v: 1, text: "Why, Lord, do you stand far off? Why do you hide yourself in times of trouble?" },
      { v: 2, text: "In his arrogance the wicked man hunts down the weak, who are caught in the schemes he devises." },
      { v: 12, text: "Arise, Lord! Lift up your hand, O God. Do not forget the helpless." },
      { v: 14, text: "But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you; you are the helper of the fatherless." },
      { v: 17, text: "You, Lord, hear the desire of the afflicted; you encourage them, and you listen to their cry," },
      { v: 18, text: "defending the fatherless and the oppressed, so that mere earthly mortals will never again strike terror." },
    ],
  },
  {
    ref: "Ezekiel 33:1–20",
    verses: [
      { v: 1, text: "The word of the Lord came to me:" },
      { v: 2, text: "Son of man, speak to your people and say to them: When I bring the sword against a land, and the people of the land choose one of their men and make him their watchman," },
      { v: 3, text: "and he sees the sword coming against the land and blows the trumpet to warn the people," },
      { v: 4, text: "then if anyone hears the trumpet but does not heed the warning and the sword comes and takes their life, their blood will be on their own head." },
      { v: 5, text: "Since they heard the sound of the trumpet but did not heed the warning, their blood will be on their own head. If they had heeded the warning, they would have saved themselves." },
      { v: 6, text: "But if the watchman sees the sword coming and does not blow the trumpet to warn the people and the sword comes and takes someone’s life, that person’s life will be taken because of their sin, but I will hold the watchman accountable for their blood." },
      { v: 7, text: "Son of man, I have made you a watchman for the people of Israel; so hear the word I speak and give them warning from me." },
      { v: 8, text: "When I say to the wicked, ‘You wicked person, you will surely die,’ and you do not speak out to dissuade them from their ways, that wicked person will die for their sin, and I will hold you accountable for their blood." },
      { v: 9, text: "But if you do warn the wicked person to turn from their ways and they do not do so, they will die for their sin, though you yourself will be saved." },
      { v: 10, text: "Son of man, say to the Israelites, ‘This is what you are saying: \"Our offenses and sins weigh us down, and we are wasting away because of them. How then can we live?\"’" },
      { v: 11, text: "Say to them, ‘As surely as I live, declares the Sovereign Lord, I take no pleasure in the death of the wicked, but rather that they turn from their ways and live. Turn! Turn from your evil ways! Why will you die, people of Israel?’" },
      { v: 12, text: "Therefore, son of man, say to your people, ‘If someone who is righteous disobeys, that person’s former righteousness will count for nothing. And if someone who is wicked repents, that person’s former wickedness will not bring them down. The righteous person who sins will not be allowed to live even though they were formerly righteous.’" },
      { v: 13, text: "If I tell a righteous person that they will surely live, but then they trust in their righteousness and do evil, none of the righteous things that person has done will be remembered; they will die for the evil they have done." },
      { v: 14, text: "And if I say to a wicked person, ‘You will surely die,’ but they then turn away from their sin and do what is just and right—" },
      { v: 15, text: "if they give back what they took in pledge, return what they have stolen, follow the decrees that give life, and do no evil—that person will surely live; they will not die." },
      { v: 16, text: "None of the sins they have committed will be remembered against them. They have done what is just and right; they will surely live." },
      { v: 17, text: "Yet your people say, ‘The way of the Lord is not just.’ But it is their way that is not just." },
      { v: 18, text: "If a righteous person turns from their righteousness and does evil, they will die for it." },
      { v: 19, text: "And if a wicked person turns away from their wickedness and does what is just and right, they will live by doing so." },
      { v: 20, text: "Yet you Israelites say, ‘The way of the Lord is not just.’ But I will judge each of you according to your own ways." },
    ],
  },
];

const reflectionQuestions = [
  "What issues make God angry?",
  "Think of the last social or Christian cause you were involved in. Did it draw you closer to God? In what ways? Was there anything about it that pulled you or others away from God? Explain.",
  "How do your activities fit into your worship of God?",
  "How do you feel when you are working for a cause and other Christians don’t seem interested in it, or, even when they are interested, don’t do anything to help? Are you able to resolve these feelings? How do you do this? What other things might you do?",
  "Is your current church involvement one in which you can use your activism? What would you like to see different? What would you like to try?",
  "How does your desire to motivate and change affect your relationships with other people? Are there changes you would like to see in your interpersonal interactions, your approachability? What might these look like?",
];

const resources = [
  "Merton, Thomas. Contemplation in a World of Action. (1999). Univ of Notre Dame Press.",
  "Schaeffer, Francis. The Mark of the Christian; Bad News for Modern Man.",
  "Schaeffer, Franky, Francis A. Schaeffer. A Time for Anger: The Myth of Neutrality. (1982). Good News Pub. ISBN: 0891072632.",
  "Schaeffer, Franky. Bad News for Modern Man. (1984). Thomas Nelson. ISBN: 0840799047.",
  "Is Capitalism Christian? Toward a Christian Perspective on Economics. Good News Pub. (1985) ISBN: 0891073620",
  "The Matthew Video – “Jesus and the Religious Leaders – the woes,” Mt. 23",
];

export default function Activists() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Activists</h1>
        <p className="text-lg text-muted-foreground italic">Loving God Through Confrontation</p>
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
            <TriangleAlert className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Cautions</h2>
          </div>
          <Card>
            <CardContent>
              <ul className="space-y-5">
                {cautions.map((c, i) => (
                  <li key={i} className="space-y-1">
                    <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{c.text}&rdquo;</p>
                    {c.ref && (
                      <p className="text-xs text-muted-foreground/70">{c.ref}</p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
                  {suggestions.map((s, i) => (
                    <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="text-primary shrink-0">&bull;</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="rounded-xl border overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1547357814-f2eeb6661d54?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Activism"
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
              <p className="font-semibold text-sm">{proverbs.ref}</p>
              <div className="space-y-3">
                {proverbs.verses.map(({ v, text }) => (
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
                  {proverbs.studyQuestions.map((sq, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-sm font-medium text-foreground leading-snug">{sq.question}</p>
                      <ul className="space-y-0.5 pl-3">
                        {sq.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary shrink-0">&ndash;</span>
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
                  God holds his people responsible to act against injustice. Ignorance is not a valid excuse when the need is visible &mdash; the one who weighs the heart already knows what we perceived. Activists are people who take this calling seriously: they are energized to stand in the gap, speak out, and work for change because they know God himself is a God of justice.
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

      {/* Well Known Activists */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Activists</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableActivists.map((person) => (
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
