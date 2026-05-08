"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Book, BookOpen, BookOpenText, ListChecks, Users, HelpCircle, X } from "lucide-react";
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
    text: "Intellectuals…are likely to be studying…doctrines like Calvinism, infant baptism, ordination of women, and predestination. These Christians live in the world of concepts. When intellectuals’ minds are awakened, when they understand something new about God or His ways with His children, then their adoration is unleashed. They may feel closest to God when they first understand something new about Him.",
    ref: "(20, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "…an intellectual can spend long seasons contemplating a challenging verse or concept.",
    ref: "(194)",
  },
  {
    text: "Intellectuals remind us of the high calling of loving God with our mind. …The Bible is emphatic that our mind is one of the key elements that we can use to love God.",
    ref: "(194)",
  },
  {
    text: "The Levites were released from other duties so they could function in the one duty of studying and teaching – loving God with the mind.",
    ref: "(196)",
  },
  {
    text: "The sermon…does not follow or precede worship – it is worship.",
    ref: "(196)",
  },
  {
    text: "Scripture tells us our first search, our primary calling, is to get wisdom and understanding.",
    ref: "(197)",
  },
  {
    text: "There comes a point when we stop teaching and start arguing. It’s a fine line, but we need to make sure we don’t cross it.",
    ref: "(209)",
  },
];

const activities = [
  "Study the basic disciplines of theological training",
  "Invest in biblical study: reading through Scripture; meticulous study of portions of Scripture",
  "Read books that help understand what Scripture says — books on theology; books on church history",
  "Do a year-long in-depth study of one topic",
  "Listen to theology lectures or podcasts while driving",
  "Study the seven basic topics in systematic theology: God, humankind, Jesus, the Holy Spirit, the Church, eschatology, and revelation",
  "Study Christian ethics",
  "Gain understanding of both internal and external apologetics",
  "Study the creeds",
];

const notableIntellectuals = [
  {
    name: "C. S. Lewis",
    subtitle: "British author & Christian apologist",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/CS_Lewis_photo_on_dust_jacket.jpg",
  },
  {
    name: "J. R. R. Tolkien",
    subtitle: "English author & Catholic intellectual",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg",
  },
  {
    name: "Dietrich Bonhoeffer",
    subtitle: "German theologian & martyr",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bundesarchiv_Bild_146-1987-074-16%2C_Dietrich_Bonhoeffer.jpg",
  },
  {
    name: "Dorothy L. Sayers",
    subtitle: "English author & Christian apologist",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Sayers-whose-body-image.png",
  },
  {
    name: "John Calvin",
    subtitle: "French-Swiss theologian & reformer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png/500px-John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png",
  },
  {
    name: "J. I. Packer",
    subtitle: "British theologian & author",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6d/J._L._Packer_%281%29.png",
  },
];

const scriptures = [
  {
    ref: "Deuteronomy 33:10",
    verses: [
      { v: 10, text: "He teaches your precepts to Jacob and your law to Israel. He offers incense before you and whole burnt offerings on your altar." },
    ],
  },
  {
    ref: "1 Kings 4:29–34",
    verses: [
      { v: 29, text: "God gave Solomon wisdom and very great insight, and a breadth of understanding as measureless as the sand on the seashore." },
      { v: 30, text: "Solomon's wisdom was greater than the wisdom of all the people of the East, and greater than all the wisdom of Egypt." },
      { v: 31, text: "He was wiser than anyone else, including Ethan the Ezrahite—wiser than Heman, Kalkol and Darda, the sons of Mahol. And his fame spread to all the surrounding nations." },
      { v: 32, text: "He spoke three thousand proverbs and his songs numbered a thousand and five." },
      { v: 33, text: "He spoke about plant life, from the cedar of Lebanon to the hyssop that grows out of walls. He also spoke about animals and birds, reptiles and fish." },
      { v: 34, text: "From all nations people came to listen to Solomon's wisdom, sent by all the kings of the world, who had heard of his wisdom." },
    ],
  },
  {
    ref: "Psalm 49:1–4",
    verses: [
      { v: 1, text: "Hear this, all you peoples; listen, all who live in this world," },
      { v: 2, text: "both low and high, rich and poor alike:" },
      { v: 3, text: "My mouth will speak words of wisdom; the meditation of my heart will give you understanding." },
      { v: 4, text: "I will turn my ear to a proverb; with the harp I will expound my riddle:" },
    ],
  },
  {
    ref: "Proverbs 1:5–7",
    verses: [
      { v: 5, text: "let the wise listen and add to their learning, and let the discerning get guidance—" },
      { v: 6, text: "for understanding proverbs and parables, the sayings and riddles of the wise." },
      { v: 7, text: "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction." },
    ],
  },
  {
    ref: "Proverbs 2:3–4",
    verses: [
      { v: 3, text: "indeed, if you call out for insight and cry aloud for understanding," },
      { v: 4, text: "and if you look for it as for silver and search for it as for hidden treasure," },
    ],
  },
  {
    ref: "Proverbs 4:7",
    verses: [
      { v: 7, text: "The beginning of wisdom is this: Get wisdom, and whatever you get, get insight." },
    ],
  },
  {
    ref: "Matthew 22:37",
    verses: [
      { v: 37, text: "Jesus replied: \"'Love the Lord your God with all your heart and with all your soul and with all your mind.'\"" },
    ],
  },
  {
    ref: "1 Corinthians 13:2–3",
    verses: [
      { v: 2, text: "If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing." },
      { v: 3, text: "If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing." },
    ],
  },
  {
    ref: "1 Timothy 1:3–7",
    verses: [
      { v: 3, text: "As I urged you when I went into Macedonia, stay there in Ephesus so that you may command certain people not to teach false doctrines any longer" },
      { v: 4, text: "or to devote themselves to myths and endless genealogies. Such things promote controversial speculations rather than advancing God's work—which is by faith." },
      { v: 5, text: "The goal of this command is love, which comes from a pure heart and a good conscience and a sincere faith." },
      { v: 6, text: "Some have departed from these and have turned to meaningless talk." },
      { v: 7, text: "They want to be teachers of the law, but they do not know what they are talking about or what they so confidently affirm." },
    ],
  },
  {
    ref: "1 Timothy 6:4–5",
    verses: [
      { v: 4, text: "they are conceited and understand nothing. They have an unhealthy interest in controversies and quarrels about words that result in envy, strife, malicious talk, evil suspicions" },
      { v: 5, text: "and constant friction between people of corrupt mind, who have been robbed of the truth and who think that godliness is a means to financial gain." },
    ],
  },
  {
    ref: "2 Timothy 2:23–25",
    verses: [
      { v: 23, text: "Don't have anything to do with foolish and stupid arguments, because you know they produce quarrels." },
      { v: 24, text: "And the Lord's servant must not be quarrelsome but must be kind to everyone, able to teach, not resentful." },
      { v: 25, text: "Opponents must be gently instructed, in the hope that God will grant them repentance leading them to a knowledge of the truth," },
    ],
  },
  {
    ref: "Titus 3:9–11",
    verses: [
      { v: 9, text: "But avoid foolish controversies and genealogies and arguments and quarrels about the law, because these are unprofitable and useless." },
      { v: 10, text: "Warn a divisive person once, and then warn them a second time. After that, have nothing to do with them." },
      { v: 11, text: "You may be sure that such people are warped and sinful; they are self-condemned." },
    ],
  },
  {
    ref: "Luke 2:46–47, 52",
    verses: [
      { v: 46, text: "After three days they found him in the temple courts, sitting among the teachers, listening to them and asking them questions." },
      { v: 47, text: "Everyone who heard him was amazed at his understanding and his answers." },
      { v: 52, text: "And Jesus grew in wisdom and stature, and in favor with God and man." },
    ],
  },
  {
    ref: "James 3:1",
    verses: [
      { v: 1, text: "Not many of you should become teachers, my fellow believers, because you know that we who teach will be judged more strictly." },
    ],
  },
];

const matthew = {
  ref: "Matthew 22:34–40",
  verses: [
    { v: 34, text: "Hearing that Jesus had silenced the Sadducees, the Pharisees got together." },
    { v: 35, text: "One of them, an expert in the law, tested him with this question:" },
    { v: 36, text: '"Teacher, which is the greatest commandment in the Law?"' },
    { v: 37, text: "Jesus replied: \"'Love the Lord your God with all your heart and with all your soul and with all your mind.'\"" },
    { v: 38, text: "This is the first and greatest commandment." },
    { v: 39, text: "And the second is like it: 'Love your neighbor as yourself.'" },
    { v: 40, text: "All the Law and the Prophets hang on these two commandments." },
  ],
  studyQuestions: [
    {
      question: "What three faculties does Jesus name as ways to love God?",
      points: [
        "Heart, soul, and mind (v. 37)",
      ],
    },
    {
      question: "What does it mean that this is the 'first and greatest' commandment?",
      points: [
        "It takes priority above all other commandments (v. 38)",
        "All other commands flow from this foundational love",
      ],
    },
    {
      question: "How does Jesus connect love of God with love of neighbor?",
      points: [
        "The second command is 'like' the first, they are inseparably linked (v. 39)",
        "Head knowledge alone is never the final destination",
      ],
    },
    {
      question: "What does it look like to love God 'with your mind'?",
      points: [
        "Studying Scripture and theology rigorously",
        "Seeking to understand God's nature, purposes, and ways",
        "Bringing our full intellectual capacity into worship and obedience",
      ],
    },
  ],
};

const reflectionQuestions = [
  "How thankful are you for your intellectual capacity? How do you express this and to whom?",
  "In what ways have you applied your intellectual understanding of the Gospel to the service of others? In what other ways could you do so?",
  "What are some of the most exciting discoveries you have made about God recently? How have they influenced your worship?",
  "What most annoys you about other styles of worship? Ask God for His perspective on this. What does He say to you?",
  "How do you react to the statement, \"Worship is God revealing Himself to you, not you discovering God\"?",
];

const resources = [
  "Clouse, Robert, Richard V. Pierard, and Edwin M. Yamauchi (1993). Two Kingdoms: The Church and Culture Through the Ages. Chicago: Moody Press.",
  "Latourette, Kenneth Scott (1975). History of Christianity. San Francisco: Harper.",
  "Lewis, C. S. Mere Christianity. (1978). MacMillan Publishing Company.",
  "McDowell, Josh. Evidence that Demands a Verdict.",
  "Packer, J. I. Knowing and Doing the Will of God.",
];

export default function Intellectuals() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Intellectuals</h1>
        <p className="text-lg text-muted-foreground italic">Loving God with the Mind</p>
      </section>

      {/* Description / Quotes */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
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
            <div className="rounded-xl border overflow-hidden relative min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2048&auto=format&fit=crop"
                alt="Books and study"
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
                  The greatest commandment includes the mind explicitly. For the intellectual, loving God with the mind is a calling — not a temptation. The goal of all study is deeper love: for God and for neighbor. Knowledge for its own sake falls short; knowledge that fuels adoration and service fulfills the commandment.
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

      {/* Well Known Intellectuals */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Intellectuals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableIntellectuals.map((person) => (
              <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
                <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Brain className="h-7 w-7 text-muted-foreground/40" />
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
