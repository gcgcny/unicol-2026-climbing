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
    text: "Contemplatives refer to God as their lover, and images of a loving Father and Bridegroom predominate their view of God. …The focus is not necessarily on serving God, doing His will, accomplishing great things in His name, or even obeying God. Rather, these Christians seek to love God with the purest, deepest, and brightest love imaginable.",
    ref: "(28)",
  },
  {
    text: "…holding hands with God. …we gaze lovingly at our heavenly Father and have our heart's delight satisfied. …(Contemplatives) want nothing more than some privacy and quiet to gaze upon the face of their heavenly Lover and give all of themselves to God.",
    ref: "(181)",
  },
];

const cautions = [
  {
    text: "Healthy contemplatives will understand that rich human relationships are a way to enjoy God's love, just as is solitary and intimate prayer. …God can reveal Himself to us just as much in a conversation with a fellow believer as He can when we are on our knees in prayer.",
    ref: "(189)",
  },
  {
    text: "Some forms of contemplation wander from the folds of orthodox Christianity… we should beware of any meditation that calls our ego to somehow be absorbed into God rather than talking about relating to God.",
    ref: "(189)",
  },
  {
    text: "Contemplatives must move beyond mere meditation…to an alignment of our will and obedience into conformity with Christ.",
    ref: "(190)",
  },
];

const activities = [
  "Make use of the Jesus prayer (\"Lord Jesus Christ, Son of God, have mercy on me, a sinner\") or another short prayer — to practice the presence of God, reminding yourself that Jesus is Lord, you are a sinner, you need His mercy.",
  "Practice secret acts of devotion – something you do for someone else without letting anyone else know about it.",
  "Carry a pocket piece – something tactile to remind you Who you serve, such as a small cross.",
  "Dancing Prayer – allowing God to lead and follow Him wherever He takes you; let Him speak and place requests before you.",
  "Centering Prayer – choose a word and focus on it (Jesus, God, peace…) repeating it until it becomes a part of you. This is a way to close oneself in with God, away from distractions — resting in His presence.",
  "Prayer of the Heart – focuses on emotional attachment to, or adoration of, God. Its aim is to love God, to have our hearts enlarged so that God owns more and more of us.",
  "Meditative Prayer – prayerful reflection of a biblical text or theme using what you can see, taste, touch, hear, or smell (Lectio Divina; placing yourself in the passage).",
];

const notableContemplatives = [
  {
    name: "Mary of Bethany",
    subtitle: "Biblical model of sitting at Jesus' feet",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Johannes_%28Jan%29_Vermeer_-_Christ_in_the_House_of_Martha_and_Mary_-_Google_Art_Project_%28cropped%29.jpg",
  },
  {
    name: "St. Teresa of Ávila",
    subtitle: "Spanish mystic & Doctor of the Church",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Santa_Teresa_de_Jes%C3%BAs_%28Museo_del_Prado%29.jpg/1920px-Santa_Teresa_de_Jes%C3%BAs_%28Museo_del_Prado%29.jpg",
  },
  {
    name: "Thomas Aquinas",
    subtitle: "Philosopher, theologian & Doctor of the Church",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/St-thomas-aquinasFXD.jpg/1280px-St-thomas-aquinasFXD.jpg",
  },
  {
    name: "Augustine of Hippo",
    subtitle: "Bishop, theologian & Church Father",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/1920px-Saint_Augustine_by_Philippe_de_Champaigne.jpg",
  },
  {
    name: "King David",
    subtitle: "Psalmist & King of Israel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/King_David%2C_the_King_of_Israel.jpg/1920px-King_David%2C_the_King_of_Israel.jpg",
  },
  {
    name: "Dr. James Houston",
    subtitle: "Professor at Regent College, Vancouver",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/JamesMHouston.JPG",
  },
];

const scriptures = [
  {
    ref: "Psalm 63:1–8",
    verses: [
      { v: 1, text: "You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water." },
      { v: 2, text: "I have seen you in the sanctuary and beheld your power and your glory." },
      { v: 3, text: "Because your love is better than life, my lips will glorify you." },
      { v: 4, text: "I will praise you as long as I live, and in your name I will lift up my hands." },
      { v: 5, text: "I will be fully satisfied as with the richest of foods; with singing lips my mouth will praise you." },
      { v: 6, text: "On my bed I remember you; I think of you through the watches of the night." },
      { v: 7, text: "Because you are my help, I sing in the shadow of your wings." },
      { v: 8, text: "I cling to you; your right hand upholds me." },
    ],
  },
  {
    ref: "Psalm 116:1–7",
    verses: [
      { v: 1, text: "I love the LORD, for he heard my voice; he heard my cry for mercy." },
      { v: 2, text: "Because he turned his ear to me, I will call on him as long as I live." },
      { v: 3, text: "The cords of death entangled me, the anguish of the grave came over me; I was overcome by distress and sorrow." },
      { v: 4, text: "Then I called on the name of the LORD: \"LORD, save me!\"" },
      { v: 5, text: "The LORD is gracious and righteous; our God is full of compassion." },
      { v: 6, text: "The LORD protects the unwary; when I was brought low, he saved me." },
      { v: 7, text: "Return to your rest, my soul, for the LORD has been good to you." },
    ],
  },
  {
    ref: "Psalm 73:25–28",
    verses: [
      { v: 25, text: "Whom have I in heaven but you? And earth has nothing I desire besides you." },
      { v: 26, text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
      { v: 27, text: "Those who are far from you will perish; you destroy all who are unfaithful to you." },
      { v: 28, text: "But as for me, it is good to be near God. I have made the Sovereign LORD my refuge; I will tell of all your deeds." },
    ],
  },
  {
    ref: "Song of Songs 2:16; 8:6–7",
    verses: [
      { v: "2:16", text: "My beloved is mine and I am his; he browses among the lilies." },
      { v: "8:6", text: "Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame." },
      { v: "8:7", text: "Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one's house for love, it would be utterly scorned." },
    ],
  },
  {
    ref: "Jeremiah 2:2",
    verses: [
      { v: 2, text: "\"Go and proclaim in the hearing of Jerusalem: 'This is what the LORD says: \"I remember the devotion of your youth, how as a bride you loved me and followed me through the wilderness, through a land not sown.\"'\"" },
    ],
  },
  {
    ref: "Matthew 26:6–13",
    verses: [
      { v: 6, text: "While Jesus was in Bethany in the home of Simon the Leper," },
      { v: 7, text: "a woman came to him with an alabaster jar of very expensive perfume, which she poured on his head as he was reclining at the table." },
      { v: 8, text: "When the disciples saw this, they were indignant. \"Why this waste?\" they asked." },
      { v: 9, text: "\"This perfume could have been sold at a high price and the money given to the poor.\"" },
      { v: 10, text: "Aware of this, Jesus said to them, \"Why are you bothering this woman? She has done a beautiful thing to me." },
      { v: 11, text: "The poor you will always have with you, but you will not always have me." },
      { v: 12, text: "When she poured this perfume on my body, she did it to prepare me for burial." },
      { v: 13, text: "Truly I tell you, wherever this gospel is preached throughout the world, what she has done will also be told, in memory of her.\"" },
    ],
  },
  {
    ref: "Luke 10:38–42",
    verses: [
      { v: 38, text: "As Jesus and his disciples were on their way, he came to a village where a woman named Martha opened her home to him." },
      { v: 39, text: "She had a sister called Mary, who sat at the Lord's feet listening to what he said." },
      { v: 40, text: "But Martha was distracted by all the preparations that had to be made. She came to him and asked, \"Lord, don't you care that my sister has left me to do the work by myself? Tell her to help me!\"" },
      { v: 41, text: "\"Martha, Martha,\" the Lord answered, \"you are worried and upset about many things," },
      { v: 42, text: "but few things are needed—or indeed only one. Mary has chosen what is better, and it will not be taken away from her.\"" },
    ],
  },
  {
    ref: "John 14:21, 23",
    verses: [
      { v: 21, text: "Whoever has my commands and keeps them is the one who loves me. The one who loves me will be loved by my Father, and I too will love them and show myself to them." },
      { v: 23, text: "Jesus replied, \"Anyone who loves me will obey my teaching. My Father will love them, and we will come to them and make our home with them.\"" },
    ],
  },
];

const reflectionQuestions = [
  "When do you feel most loved by God? In what tangible ways does He show His love to you?",
  "What is most important to you in your relationship with God?",
  "Do you ever lose the sense of God's presence? What happens to you then — in your emotions? In your spirit? What do you do to restore that sense?",
  "What is your favorite way to picture God? Are there any images of God that you find difficult to contemplate? Why do you think that is? Ask God to show you something about that.",
  "What words come to mind when you think of God? Make a list of all the words and phrases you can think of to express your praise to Him.",
  "How do you usually approach God? Do you ever feel fear? What might that be about? Talk with the Father about it and write down His response.",
  "In what ways is it difficult for you to share your experiences with God with other people?",
];

const resources = [
  "Butler, Dom Cuthbert (1922). Western Mysticism: The Teaching of Augustine, Gregory and Bernard on Contemplation and the Contemplative Life. London: Constable.",
  "Curtis, Brent and John Eldredge (1997). The Sacred Romance. Nashville: Thomas Nelson Publishers.",
  "Merton, Thomas. Contemplative Prayer. Bantam Dell Pub Group. ISBN: 0385092199.",
  "Merton, Thomas (1973). Contemplation in a World of Action. Garden City, NY: Image Books.",
  "Montaldo, Jonathan, Thomas Merton. Dialogues With Silence: Prayers & Drawings. (2001). Harpercollins. ISBN: 0060656026.",
  "Pennington, M. Basil (1977). Daily We Touch Him. Garden City, NY: Doubleday.",
  "Thomas, Gary (1999). Seeking the Face of God. Eugene, OR: Harvest House.",
  "Underhill, Evelyn (1936). Worship. New York: Harper and Row.",
  "Winkler, Dr. Gabriele (1978). Prayer Attitude in the Eastern Church. Minneapolis: Life and Life.",
];

export default function Contemplatives() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Contemplatives</h1>
        <p className="text-lg text-muted-foreground italic">Loving God Through Adoration</p>
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
            {showAllQuotes && (
              <div className="pt-2">
                <Card>
                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Cautions</h3>
                    </div>
                    {cautions.map((c, i) => (
                      <div key={i}>
                        <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{c.text}&rdquo;</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">{c.ref}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
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
            <div className="rounded-xl border overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1474367658825-e5858839e99d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contemplative prayer"
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

      {/* Well Known Contemplatives */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Contemplatives</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableContemplatives.map((person) => (
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
