"use client";

import { useEffect, useRef, useState } from "react";
import { Book, BookOpen, BookOpenText, Flame, ListChecks, Users, HelpCircle, X } from "lucide-react";
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
    text: "Ascetics want nothing more than to be left alone in prayer. Take away the liturgy, the trappings of religion, the noise of the outside world. Let there be nothing to distract them – no pictures, no loud music – and leave them alone to pray in silence and simplicity. Ascetics live a fundamentally internal existence. Even when they are part of a group of people, they might seem to be isolated from the others. …uncomfortable in an environment that keeps them from 'listening to the quiet.'",
    ref: "(25, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "It is in these dark, intense, lonely times that ascetics’ souls awaken.",
    ref: "(97)",
  },
  {
    text: "Ascetics live strict lives of self-denial so that they would be free to contemplate God.",
    ref: "(102)",
  },
  {
    text: "True ascetics are strict with themselves but treat others with supernatural gentleness.",
    ref: "(103)",
  },
  {
    text: "…modern ascetics…don’t have time to find a desert to express our faith; inner detachment allows us to find a lonely desert in the midst of the busiest city.",
    ref: "(100)",
  },
  {
    text: "He (St. Francis) devoured fasting as a man devours food. He plunged after poverty as men have dug madly for gold.",
    ref: "(100)",
  },
];

const activities = [
  "Worship in the quiet of the night; rise in the early morning for prayer and worship",
  "Practice silence – attend a silent retreat, participate in a silent meal",
  "Fast; do physical labor as an act of worship",
  "Practice obedience – ask God to reveal any rebellious attitudes",
  "Simplify your life – clean a closet, have a yard sale, cull your books and papers",
  "Look for ways and places to include others in your life",
  "Make it a point to worship regularly in a fellowship of believers",
];

const notableAscetics = [
  {
    name: "John the Baptist",
    subtitle: "Prophet & forerunner of Jesus Christ",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Accademia_-_St_John_the_Baptist_by_Titian_Cat314.jpg",
  },
  {
    name: "St. Francis of Assisi",
    subtitle: "Italian friar & mystic of radical simplicity",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Philip_Fruytiers_-_St._Francis_of_Assisi.jpg/1280px-Philip_Fruytiers_-_St._Francis_of_Assisi.jpg",
  },
];

const featuredScripture = {
  passages: [
    {
      ref: "Mark 3:13–20",
      verses: [
        { v: 13, text: "Jesus went up on a mountainside and called to him those he wanted, and they came to him." },
        { v: 14, text: "He appointed twelve that they might be with him and that he might send them out to preach" },
        { v: 15, text: "and to have authority to drive out demons." },
        { v: 16, text: "These are the twelve he appointed: Simon (to whom he gave the name Peter)," },
        { v: 17, text: "James son of Zebedee and his brother John (to them he gave the name Boanerges, which means \"sons of thunder\")," },
        { v: 18, text: "Andrew, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot" },
        { v: 19, text: "and Judas Iscariot, who betrayed him." },
        { v: 20, text: "Then Jesus entered a house, and again a crowd gathered, so that he and his disciples were not even able to eat." },
      ],
    },
    {
      ref: "Luke 5:15–16",
      verses: [
        { v: 15, text: "Yet the news about him spread all the more, so that crowds of people came to hear him and to be healed of their sicknesses." },
        { v: 16, text: "But Jesus often withdrew to lonely places and prayed." },
      ],
    },
  ],
  studyQuestions: [
    {
      question: "How do you spend alone time with God? Make a list.",
      points: [
        "Prayer, walking, gardening, worshiping",
        "Reading the Bible, devotionals, prayer walks",
        "Quiet moments before sleep or at the dinner table",
      ],
    },
    {
      question: "How do you decide when those moments end?",
      points: [
        "When I finish the reading plan; when I fall asleep; when I feel like it",
        "External cues: when it rains, when dinner starts, when you arrive home",
        "What truly determines how long you linger with God?",
      ],
    },
    {
      question: "What can we learn from how Jesus spent time alone with God? (Matthew 4:1–4)",
      points: [
        "Led by the Spirit — solitude can be Spirit-initiated, not just self-imposed",
        "Fasted forty days — physical self-denial created space for spiritual focus",
        "Resisted temptation with Scripture: ‘Man shall not live on bread alone’",
      ],
    },
    {
      question: "What does privacy with God make possible?",
      points: [
        "The hard parts of your life naturally surface in solitude",
        "Physical needs like hunger can point us to deeper spiritual ones",
        "Even difficult moments of solitude can build faith",
      ],
    },
  ],
  aside: {
    label: "This is how Jesus spent time alone with God:",
    ref: "Matthew 4:1–4",
    verses: [
      { v: 1, text: "Then Jesus was led by the Spirit into the wilderness to be tempted by the devil." },
      { v: 2, text: "After fasting forty days and forty nights, he was hungry." },
      { v: 3, text: "The tempter came to him and said, \"If you are the Son of God, tell these stones to become bread.\"" },
      { v: 4, text: "Jesus answered, \"It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’\"" },
    ],
  },
  warning: "Sometimes being alone can draw out weaknesses in us — which can make us more easily fall into temptation. These weaknesses can be sinful, but they can also be good, human limits: losing sleep to pray, craving attention, becoming too hungry to make good choices. Even non-sinful limits can make us susceptible to sin. But Jesus protected himself by knowing the Bible and staying true to it.",
  takeaway: "A sacred pathway is a love language. Ascetics love to love God in simplicity and solitude. To try an ascetic style of worship, keep things simple in a moment alone with God — Jesus just prayed and reflected on Scripture. And sometimes he simply withdrew to pray, without any agenda beyond being with the Father.",
};

const scriptures = [
  {
    ref: "Num. 6",
    verses: [
      { v: 1, text: "The LORD said to Moses," },
      { v: 2, text: "\"Speak to the Israelites and say to them: ‘If a man or woman wants to make a special vow, a vow of dedication to the LORD as a Nazirite," },
      { v: 3, text: "they must abstain from wine and other fermented drink and must not drink vinegar made from wine or other fermented drink. They must not drink grape juice or eat grapes or raisins." },
      { v: 4, text: "As long as they remain under their Nazirite vow, they must not eat anything that comes from the grapevine, not even the seeds or skins." },
      { v: 5, text: "During the entire period of their Nazirite vow, no razor may be used on their head. They must be holy until the period of their dedication to the LORD is over; they must let their hair grow long." },
      { v: 6, text: "Throughout the period of their dedication to the LORD, the Nazirite must not go near a dead body." },
      { v: 7, text: "Even if their own father or mother or brother or sister dies, they must not make themselves ceremonially unclean on account of them, because the symbol of their dedication to God is on their head." },
      { v: 8, text: "Throughout the period of their dedication, they are consecrated to the LORD." },
    ],
  },
  {
    ref: "Isa. 64:6",
    verses: [
      { v: 6, text: "All of us have become like one who is unclean, and all our righteous acts are like filthy rags; we all shrivel up like a leaf, and like the wind our sins sweep us away." },
    ],
  },
  {
    ref: "Dan. 9:3",
    verses: [
      { v: 3, text: "So I turned to the Lord God and pleaded with him in prayer and petition, in fasting, and in sackcloth and ashes." },
    ],
  },
  {
    ref: "Joel 1:13–14",
    verses: [
      { v: 13, text: "Put on sackcloth, you priests, and mourn; wail, you who minister before the altar. Come, spend the night in sackcloth, you who minister before my God; for the grain offerings and drink offerings are withheld from the house of your God." },
      { v: 14, text: "Declare a holy fast; call a sacred assembly. Summon the elders and all who live in the land to the house of the LORD your God, and cry out to the LORD." },
    ],
  },
  {
    ref: "Joel 2:12",
    verses: [
      { v: 12, text: "\"Even now,\" declares the LORD, \"return to me with all your heart, with fasting and weeping and mourning.\"" },
    ],
  },
  {
    ref: "Zech. 7:1–10",
    verses: [
      { v: 1, text: "In the fourth year of King Darius, the word of the LORD came to Zechariah on the fourth day of the ninth month, the month of Kislev." },
      { v: 2, text: "The people of Bethel had sent Sharezer and Regem-Melek, together with their men, to seek the LORD’s favor" },
      { v: 3, text: "and to ask the priests of the house of the LORD Almighty and the prophets, \"Should I mourn and fast in the fifth month, as I have done for so many years?\"" },
      { v: 4, text: "Then the word of the LORD Almighty came to me:" },
      { v: 5, text: "\"Ask all the people of the land and the priests, ‘When you fasted and mourned in the fifth and seventh months for the past seventy years, was it really for me that you fasted?" },
      { v: 6, text: "And when you were eating and drinking, were you not just feasting for yourselves?" },
      { v: 7, text: "Are these not the words the LORD proclaimed through the earlier prophets when Jerusalem and its surrounding towns were at rest and prosperous, and the Negev and the western foothills were settled?’" },
      { v: 8, text: "And the word of the LORD came again to Zechariah:" },
      { v: 9, text: "\"This is what the LORD Almighty said: ‘Administer true justice; show mercy and compassion to one another." },
      { v: 10, text: "Do not oppress the widow or the fatherless, the foreigner or the poor. Do not plot evil against each other.’" },
    ],
  },
  {
    ref: "Mt. 4:1",
    verses: [
      { v: 1, text: "Then Jesus was led by the Spirit into the wilderness to be tempted by the devil." },
    ],
  },
  {
    ref: "Mt. 6:5–6, 16–17",
    verses: [
      { v: 5, text: "And when you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others. Truly I tell you, they have received their reward in full." },
      { v: 6, text: "But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you." },
      { v: 16, text: "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full." },
      { v: 17, text: "But when you fast, put oil on your head and wash your face," },
    ],
  },
  {
    ref: "Mt. 14:13, 22–23",
    verses: [
      { v: 13, text: "When Jesus heard what had happened, he withdrew by boat privately to a solitary place. Hearing of this, the crowds followed him on foot from the towns." },
      { v: 22, text: "Immediately Jesus made the disciples get into the boat and go on ahead of him to the other side, while he dismissed the crowd." },
      { v: 23, text: "After he had dismissed them, he went up on a mountainside by himself to pray. Later that evening he was there alone." },
    ],
  },
  {
    ref: "Mt. 26:36–39",
    verses: [
      { v: 36, text: "Then Jesus went with his disciples to a place called Gethsemane, and he said to them, ‘Sit here while I go over there and pray.’" },
      { v: 37, text: "He took Peter and the two sons of Zebedee along with him, and he began to be sorrowful and troubled." },
      { v: 38, text: "Then he said to them, ‘My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.’" },
      { v: 39, text: "Going a little farther, he fell with his face to the ground and prayed, ‘My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will.’" },
    ],
  },
  {
    ref: "Mk. 1:35",
    verses: [
      { v: 35, text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
    ],
  },
  {
    ref: "Mk. 6:30–32",
    verses: [
      { v: 30, text: "The apostles gathered around Jesus and reported to him all they had done and taught." },
      { v: 31, text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, ‘Come with me by yourselves to a quiet place and get some rest.’" },
      { v: 32, text: "So they went away by themselves in a boat to a solitary place." },
    ],
  },
  {
    ref: "Mk. 14:32–36",
    verses: [
      { v: 32, text: "They went to a place called Gethsemane, and Jesus said to his disciples, ‘Sit here while I pray.’" },
      { v: 33, text: "He took Peter, James and John along with him, and he began to be deeply distressed and troubled." },
      { v: 34, text: "’My soul is overwhelmed with sorrow to the point of death,’ he said to them. ‘Stay here and keep watch.’" },
      { v: 35, text: "Going a little farther, he fell to the ground and prayed that if possible the hour might pass from him." },
      { v: 36, text: "’Abba, Father,’ he said, ‘everything is possible for you. Take this cup from me. Yet not what I will, but what you will.’" },
    ],
  },
  {
    ref: "Lk. 22:39–46",
    verses: [
      { v: 39, text: "Jesus went out as usual to the Mount of Olives, and his disciples followed him." },
      { v: 40, text: "On reaching the place, he said to them, ‘Pray that you will not fall into temptation.’" },
      { v: 41, text: "He withdrew about a stone’s throw beyond them, knelt down and prayed," },
      { v: 42, text: "’Father, if you are willing, take this cup from me; yet not my will, but yours be done.’" },
      { v: 43, text: "An angel from heaven appeared to him and strengthened him." },
      { v: 44, text: "And being in anguish, he prayed more earnestly, and his sweat was like drops of blood falling to the ground." },
      { v: 45, text: "When he rose from prayer and went back to the disciples, he found them asleep, exhausted from sorrow." },
      { v: 46, text: "’Why are you sleeping?’ he asked them. ‘Get up and pray so that you will not fall into temptation.’" },
    ],
  },
  {
    ref: "Jn. 17",
    verses: [
      { v: 1, text: "After Jesus said this, he looked toward heaven and prayed: ‘Father, the hour has come. Glorify your Son, that your Son may glorify you.’" },
      { v: 2, text: "For you granted him authority over all people that he might give eternal life to all those you have given him." },
      { v: 3, text: "Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent." },
      { v: 4, text: "I have brought you glory on earth by finishing the work you gave me to do." },
      { v: 5, text: "And now, Father, glorify me in your presence with the glory I had with you before the world began." },
      { v: 14, text: "I have given them your word and the world has hated them, for they are not of the world any more than I am of the world." },
      { v: 15, text: "My prayer is not that you take them out of the world but that you protect them from the evil one." },
      { v: 16, text: "They are not of the world, even as I am not of it." },
      { v: 17, text: "Sanctify them by the truth; your word is truth." },
    ],
  },
];

const reflectionQuestions = [
  "What does “solitude” mean to you? Can you find this even when you are with a group of people? Explain how you do that.",
  "What does “austerity” mean to you? How do you incorporate it into your life?",
  "What does “discipline” look like in your life? In what ways does it satisfy you? Where would you like to experience more of it?",
  "What are ways you connect with those around you? How satisfying are those connections? Would you like to improve/increase them? Why or why not? How might you change your interactions to make them more satisfactory?",
];

const resources = [
  "Brother Lawrence. Practicing the Presence of God.",
  "Duffey, Felix (1950). Psychiatry and Asceticism. London: B. Herder.",
  "Foster, Richard. Freedom of Simplicity; Celebration of Discipline.",
  "Merton, Thomas. Basic Principles of Monastic Spirituality. ISBN: 087243222x",
  "Nouwen, Henri J. M. The Way of the Heart: Desert Spirituality and Contemporary Ministry. Harper SanFrancisco. (1991). ISBN: 0060663308",
  "Pennington, M. Basil (1983). A Place Apart: Monastic Prayer and Practice for Everyone. New York: Doubleday.",
  "Rousseau, Philip (1978). Ascetics, Authority, and the Church: In the Age of Jerome and Cassian. London: Oxford University Press.",
];

export default function Ascetics() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Ascetics</h1>
        <p className="text-lg text-muted-foreground italic">Loving God in Solitude and Simplicity</p>
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
            {showAllQuotes && (
              <div className="rounded-xl bg-accent px-6 py-5">
                <p className="text-sm leading-relaxed text-accent-foreground">
                  <span className="font-semibold">A caution:</span>{" "}
                  An ascetic will need to be intentional in seeking out other Christians with whom to fellowship. We need feedback from our brothers and sisters to be able to see ourselves clearly.
                </p>
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
                      <span className="text-primary shrink-0">&bull;</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="rounded-xl border overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1700659393845-9992129df4ba?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Desert solitude"
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
              {featuredScripture.passages.map((passage, i) => (
                <div key={passage.ref} className="space-y-3">
                  {i > 0 && <hr className="border-border" />}
                  <p className="font-semibold text-sm">{passage.ref}</p>
                  {passage.verses.map(({ v, text }) => (
                    <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-primary mr-2">{v}</span>
                      {text}
                    </p>
                  ))}
                </div>
              ))}
              <p className="text-xs text-muted-foreground/60">NIV &mdash; New International Version</p>
              <div className="space-y-4 pt-2 border-t">
                <p className="font-semibold text-sm text-foreground">Study Questions</p>
                <ol className="space-y-4">
                  {featuredScripture.studyQuestions.slice(0, 2).map((sq, i) => (
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
                <div className="rounded-xl border px-4 py-4 space-y-3">
                  <p className="text-xs text-muted-foreground">{featuredScripture.aside.label}</p>
                  <p className="font-semibold text-sm">{featuredScripture.aside.ref}</p>
                  {featuredScripture.aside.verses.map(({ v, text }) => (
                    <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-primary mr-2">{v}</span>
                      {text}
                    </p>
                  ))}
                </div>
                <ol className="space-y-4" start={3}>
                  {featuredScripture.studyQuestions.slice(2).map((sq, i) => (
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
                  <span className="font-semibold">Warning:</span>{" "}
                  {featuredScripture.warning}
                </p>
              </div>
              <div className="rounded-xl bg-accent px-6 py-5">
                <p className="text-sm leading-relaxed text-accent-foreground">
                  <span className="font-semibold">Remember:</span>{" "}
                  {featuredScripture.takeaway}
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

      {/* Well Known Ascetics */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Ascetics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableAscetics.map((person) => (
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
            <p className="text-xs text-muted-foreground/60 pt-4 border-t">NIV &mdash; New International Version</p>
          </div>
        </DrawerContent>
      </Drawer>

    </main>
  );
}
