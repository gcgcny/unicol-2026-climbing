"use client";

import { useState } from "react";
import { Book, BookOpen, BookOpenText, Leaf, ListChecks, Users, HelpCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const quotes = [
  {
    text: 'Where we worship can have a profound impact on the quality of our worship. The naturalist seeks to leave the formal architecture and the padded pews to enter an entirely new \u201ccathedral\u201d, a place that God himself has built: the out-of-doors.',
    ref: "(36)",
  },
  {
    text: '\u2026the Bible is meant to be read outside\u2026The phrase \u201criver of life\u201d seems quaint when the words are projected up on a wall; but its power is nearly overwhelming when you stand by a swiftly flowing river.',
    ref: null,
  },
  {
    text: "God is made known to us 'by the creation, preservation, and government of the universe; which is before our eyes as a most elegant book, wherein all creatures great and small, are as so many characters leading us to see clearly the invisible things of God.",
    ref: "(40, from the Reformed tradition's Belgic Confession)",
  },
  {
    text: "…the mending and binding so necessary to heal our stress filled lives may flow through creation. For the spiritually oppressed or the socially injured, a pleasing or quiet natural environment can help provide a spiritual release. Resting by a clear, free-running river or sitting on a sunny slope in blooming desert grassland can bring peace and joy into very clouded souls.",
    ref: "(42, from Susan Power Bratton)",
  },
  {
    text: "Earth's crammed with heaven and every common bush afire with God. But only he who sees takes off his shoes and the rest sit around it and pick blackberries.",
    ref: "(44, from Elizabeth Barrett Browning)",
  },
];

const activities = [
  "Take your Bible outside and read it; meditate while feasting your eyes and spirit on natural beauty",
  "Rest",
  "Worship as the dawn breaks",
  "Go for a walk",
];

const notableNaturalists = [
  {
    name: "St. Francis of Assisi",
    subtitle: "Italian friar & patron saint of ecology",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Philip_Fruytiers_-_St._Francis_of_Assisi.jpg/1280px-Philip_Fruytiers_-_St._Francis_of_Assisi.jpg",
  },
  {
    name: "Jonathan Edwards",
    subtitle: "American Puritan theologian & revivalist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvNaLzkNelA7QEVLsj94qEmvmeiKRC2vsC_SdxOux-IgKxcaP5wkCXJGhToahDCd-GF0XGPa9IbQhfBJGftTub9MXtlKRuFOptrCqzw&s=10",
  },
  {
    name: "Antoni Gaudí",
    subtitle: "Catalan architect & Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhEHgj1ouIFpQ71p-7c8aXW8B5ExyIqisNwcR7qQGweAxZY_il3PAggnKVGUDT3EPWM-8rGe45c0fx0DjKJRDcEwrT2_MR4Bkbgrk1Q&s=10",
  },
  {
    name: "Charles Haddon Spurgeon",
    subtitle: 'Victorian preacher, "Prince of Preachers"',
    image: "https://www.princeofpreachers.org/uploads/4/8/6/5/48652749/spurgeon-portrait_orig.jpg",
  },
  {
    name: "Susan Power Bratton",
    subtitle: "Environmental theologian & ecologist",
    image: "https://environmentalscience.artsandsciences.baylor.edu/sites/g/files/ecbvkj1066/files/styles/xl/public/2022-12/susan_bratton.jpeg?itok=dMjcxL4H",
  },
  {
    name: "Pamela Reeve",
    subtitle: "Author of nature parables & devotionals",
    image: "https://m.media-amazon.com/images/I/51F6RNMZ5GL._AC_UF1000,1000_QL80_.jpg",
  },
];

const scriptures = [
  {
    ref: "Psalm 29",
    verses: [
      { v: 1, text: "Ascribe to the LORD, you heavenly beings, ascribe to the LORD glory and strength." },
      { v: 2, text: "Ascribe to the LORD the glory due his name; worship the LORD in the splendor of his holiness." },
      { v: 3, text: "The voice of the LORD is over the waters; the God of glory thunders, the LORD thunders over the mighty waters." },
      { v: 4, text: "The voice of the LORD is powerful; the voice of the LORD is majestic." },
      { v: 5, text: "The voice of the LORD breaks the cedars; the LORD breaks in pieces the cedars of Lebanon." },
      { v: 6, text: "He makes Lebanon leap like a calf, Sirion like a young wild ox." },
      { v: 7, text: "The voice of the LORD strikes with flashes of lightning." },
      { v: 8, text: "The voice of the LORD shakes the desert; the LORD shakes the Desert of Kadesh." },
      { v: 9, text: "The voice of the LORD twists the oaks and strips the forests bare. And in his temple all cry, 'Glory!'" },
      { v: 10, text: "The LORD sits enthroned over the flood; the LORD is enthroned as King forever." },
      { v: 11, text: "The LORD gives strength to his people; the LORD blesses his people with peace." },
    ],
  },
  {
    ref: "Psalm 23",
    verses: [
      { v: 1, text: "The LORD is my shepherd, I lack nothing." },
      { v: 2, text: "He makes me lie down in green pastures, he leads me beside quiet waters," },
      { v: 3, text: "he refreshes my soul. He guides me along the right paths for his name's sake." },
      { v: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
      { v: 5, text: "You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows." },
      { v: 6, text: "Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever." },
    ],
  },
  {
    ref: "Psalm 84",
    verses: [
      { v: 1, text: "How lovely is your dwelling place, LORD Almighty!" },
      { v: 2, text: "My soul yearns, even faints, for the courts of the LORD; my heart and my flesh cry out for the living God." },
      { v: 3, text: "Even the sparrow has found a home, and the swallow a nest for herself, where she may have her young—a place near your altar, LORD Almighty, my King and my God." },
      { v: 4, text: "Blessed are those who dwell in your house; they are ever praising you." },
      { v: 5, text: "Blessed are those whose strength is in you, whose hearts are set on pilgrimage." },
      { v: 6, text: "As they pass through the Valley of Baka, they make it a place of springs; the autumn rains also cover it with pools." },
      { v: 7, text: "They go from strength to strength, till each appears before God in Zion." },
      { v: 8, text: "Hear my prayer, LORD God Almighty; listen to me, God of Jacob." },
      { v: 9, text: "Look on our shield, O God; look with favor on your anointed one." },
      { v: 10, text: "Better is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked." },
      { v: 11, text: "For the LORD God is a sun and shield; the LORD bestows favor and honor; no good thing does he withhold from those whose walk is blameless." },
      { v: 12, text: "LORD Almighty, blessed is the one who trusts in you." },
    ],
  },
  {
    ref: "Isaiah 41:17–19",
    verses: [
      { v: 17, text: "The poor and needy search for water, but there is none; their tongues are parched with thirst. But I the LORD will answer them; I, the God of Israel, will not forsake them." },
      { v: 18, text: "I will make rivers flow on barren heights, and springs within the valleys. I will turn the desert into pools of water, and the parched ground into springs." },
      { v: 19, text: "I will put in the desert the cedar and the acacia, the myrtle and the olive. I will set junipers in the wasteland, the fir and the cypress together." },
    ],
  },
  {
    ref: "Mark 6:31–32",
    verses: [
      { v: 31, text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
      { v: 32, text: "So they went away by themselves in a boat to a solitary place." },
    ],
  },
  {
    ref: "John 4:35",
    verses: [
      { v: 35, text: "Don't you have a saying, 'It's still four months until harvest'? I tell you, open your eyes and look at the fields! They are ripe for harvest." },
    ],
  },
];

const reflectionQuestions = [
  "Where and when do you feel closest to God?",
  "How is worship different for you when you are inside listening to speakers, etc. and outside enjoying nature?",
  "What could you do (where could you go) that would help you worship more deeply on a regular basis?",
  "How do you balance the need for natural beauty and quiet with the command to be in community? What kinds of community activities are satisfying to you spiritually and emotionally?",
];

const resources = [
  'Edwards, Jonathan. "The Language and Lessons of Nature"',
  "Muench, David, Marc Muench, Francis of Assisi. Canticle of the Earth: The Words of Francis of Assisi Celebrated in the Photography of David Muench. (2002). Sorin Books. ISBN: 1893732452",
  "St. Francis of Assisi, Frank Missant Shambhala. Cantile of the Sun. 2002. ISBN: 1570629803",
  "Heaven on Earth: The Inspirational Writings of Saint Francis of Assisi. (1973). ISBN: 0875293220",
  "Song of Creation. (2003). Laughing Elephant. ISBN: 1883211344",
  "Dr. Pamela Reeve, Parables of the Forest; Parables of the Sea",
];

export default function Naturalists() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Naturalists</h1>
        <p className="text-lg text-muted-foreground italic">Loving God Out Of Doors</p>
      </section>

      {/* Description / Quotes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Description</h2>
        </div>
        <div className="space-y-5">
          {quotes.map((q, i) => (
            <div key={i}>
              <p className="text-base leading-relaxed text-muted-foreground italic">&ldquo;{q.text}&rdquo;</p>
              {q.ref && (
                <p className="text-xs text-muted-foreground/70 mt-1">{q.ref}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Source:{" "}
          <a
            href="https://garythomas.com/wp-content/uploads/2013/03/sacred_pathways_sample_chapter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Sacred Pathways by Gary Thomas
          </a>
        </p>
        <hr className="border-border" />
      </section>

      {/* Suggested Activities */}
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
          <div className="rounded-xl border overflow-hidden min-h-[180px]">
            <img
              src="https://images.unsplash.com/photo-1765150520317-ed24016ea160?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nature"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Scriptures to Reflect On */}
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

      {/* Reflection Questions */}
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

      {/* Well Known Naturalists */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Well Known Naturalists</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {notableNaturalists.map((person) => (
            <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
              <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                {person.image ? (
                  <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <Leaf className="h-7 w-7 text-muted-foreground/40" />
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

      {/* Resources + Source */}
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
        <p className="text-sm text-muted-foreground">
          Source:{" "}
          <a
            href="https://www.garythomas.com/wp-content/uploads/2013/02/sacredpathways.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Study Guide by Adalee Lewis
          </a>
        </p>
      </section>

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
