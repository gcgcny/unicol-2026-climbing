"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Book, BookOpen, BookOpenText, Flame, HelpCircle, ListChecks, Users, X } from "lucide-react";
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
    text: "Excitement and mystery in worship is the spiritual lifeblood of enthusiasts. …enthusiasts are inspired by joyful celebration… cheerleaders for God and the Christian life. Let them clap their hands, shout 'Amen!' and dance in their excitement, that's all they ask. …They don't want to just know concepts, but to experience them, to feel them, and to be moved by them.",
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
    text: "In the midst of a celebration it's easy to forget how fearful and awesome God is. Without reverence, however, celebration degenerates into shallow triviality.",
    ref: "(165)",
  },
  {
    text: "Just because we feel good during a time of worship doesn't mean we have offered up our will in an appropriate manner…just because we feel down or 'flat' doesn't mean we aren't effectively worshiping God.",
    ref: "(170)",
  },
  {
    text: "Enthusiasts by temperament are particularly fed by such experience (and) long to preserve the mystery of faith. Accepting the mystery of faith has both its strengths and its dangers, for while there is much mystery and supernatural activity in Scripture, there are also strong warnings against improper manifestations of what is popularly called 'spirituality'.",
    ref: "(154)",
  },
];

const notableEnthusiasts = [
  { name: "Ann Kiemel Anderson", subtitle: "Author & speaker", image: "https://upload.wikimedia.org/wikipedia/en/4/43/Ann_Kiemel_Anderson_in_1979.jpg" },
  { name: "King David", subtitle: "Psalmist & King of Israel", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/King_David%2C_the_King_of_Israel.jpg/1920px-King_David%2C_the_King_of_Israel.jpg" },
  { name: "Graham Kendrick", subtitle: "Worship songwriter & leader", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Graham_Kendrick.jpg" },
  { name: "Charles Swindoll", subtitle: "Pastor, author & radio host", image: "https://cdn.iflmedia.com/images/webp/chuck-swindoll.webp" },
];

const scriptures = [
  {
    ref: "1 Chron. 13:8",
    verses: [
      { v: 8, text: "David and all the Israelites were celebrating with all their might before God, with songs and with harps, lyres, timbrels, cymbals and trumpets." },
    ],
  },
  {
    ref: "1 Chron. 15:16",
    verses: [
      { v: 16, text: "David told the leaders of the Levites to appoint their fellow Levites as musicians to make a joyful sound with musical instruments: lyres, harps and cymbals." },
    ],
  },
  {
    ref: "1 Chron. 16",
    verses: [
      { v: 1, text: "They brought the ark of God and set it inside the tent that David had pitched for it, and they presented burnt offerings and fellowship offerings before God." },
      { v: 2, text: "After David had finished sacrificing the burnt offerings and fellowship offerings, he blessed the people in the name of the Lord." },
      { v: 3, text: "Then he gave a loaf of bread, a cake of dates and a cake of raisins to each Israelite man and woman." },
      { v: 4, text: "He appointed some of the Levites to minister before the ark of the Lord, to extol, thank, and praise the Lord, the God of Israel:" },
      { v: 5, text: "Asaph was the chief, and next to him in rank were Zechariah, then Jaaziel, Shemiramoth, Jehiel, Mattithiah, Eliab, Benaiah, Obed-Edom and Jeiel. They were to play the lyres and harps, Asaph was to sound the cymbals," },
      { v: 6, text: "and Benaiah and Jahaziel the priests were to blow the trumpets regularly before the ark of the covenant of God." },
      { v: 7, text: "That day David first appointed Asaph and his associates to give praise to the Lord in this manner:" },
      { v: 8, text: "Give praise to the Lord, proclaim his name; make known among the nations what he has done." },
      { v: 9, text: "Sing to him, sing praise to him; tell of all his wonderful acts." },
      { v: 10, text: "Glory in his holy name; let the hearts of those who seek the Lord rejoice." },
      { v: 11, text: "Look to the Lord and his strength; seek his face always." },
      { v: 12, text: "Remember the wonders he has done, his miracles, and the judgments he pronounced," },
      { v: 13, text: "you his servants, the descendants of Israel, his chosen ones, the children of Jacob." },
      { v: 14, text: "He is the Lord our God; his judgments are in all the earth." },
      { v: 15, text: "He remembers his covenant forever, the promise he made, for a thousand generations," },
      { v: 16, text: "the covenant he made with Abraham, the oath he swore to Isaac." },
      { v: 17, text: "He confirmed it to Jacob as a decree, to Israel as an everlasting covenant:" },
      { v: 18, text: "\"To you I will give the land of Canaan as the portion you will inherit.\"" },
      { v: 19, text: "When they were but few in number, few indeed, and strangers in it," },
      { v: 20, text: "they wandered from nation to nation, from one kingdom to another." },
      { v: 21, text: "He allowed no one to oppress them; for their sake he rebuked kings:" },
      { v: 22, text: "\"Do not touch my anointed ones; do my prophets no harm.\"" },
      { v: 23, text: "Sing to the Lord, all the earth; proclaim his salvation day after day." },
      { v: 24, text: "Declare his glory among the nations, his marvelous deeds among all peoples." },
      { v: 25, text: "For great is the Lord and most worthy of praise; he is to be feared above all gods." },
      { v: 26, text: "For all the gods of the nations are idols, but the Lord made the heavens." },
      { v: 27, text: "Splendor and majesty are before him; strength and joy are in his dwelling place." },
      { v: 28, text: "Ascribe to the Lord, all you families of nations, ascribe to the Lord glory and strength." },
      { v: 29, text: "Ascribe to the Lord the glory due his name; bring an offering and come before him. Worship the Lord in the splendor of his holiness." },
      { v: 30, text: "Tremble before him, all the earth! The world is firmly established; it cannot be moved." },
      { v: 31, text: "Let the heavens rejoice, let the earth be glad; let them say among the nations, \"The Lord reigns!\"" },
      { v: 32, text: "Let the sea resound, and all that is in it; let the fields be jubilant, and everything in them!" },
      { v: 33, text: "Let the trees of the forest sing, let them sing for joy before the Lord, for he comes to judge the earth." },
      { v: 34, text: "Give thanks to the Lord, for he is good; his love endures forever." },
      { v: 35, text: "Cry out, \"Save us, God our Savior; gather us and deliver us from the nations, that we may give thanks to your holy name, and glory in your praise.\"" },
      { v: 36, text: "Praise be to the Lord, the God of Israel, from everlasting to everlasting. Then all the people said \"Amen\" and \"Praise the Lord.\"" },
      { v: 37, text: "David left Asaph and his associates before the ark of the covenant of the Lord to minister there regularly, according to each day's requirements." },
      { v: 38, text: "He also left Obed-Edom and his sixty-eight associates to minister with them. Obed-Edom son of Jeduthun, and also Hosah, were gatekeepers." },
      { v: 39, text: "David left Zadok the priest and his fellow priests before the tabernacle of the Lord at the high place in Gibeon" },
      { v: 40, text: "to present burnt offerings to the Lord on the altar of burnt offering regularly, morning and evening, in accordance with everything written in the Law of the Lord, which he had given Israel." },
      { v: 41, text: "With them were Heman and Jeduthun and the rest of those chosen and designated by name to give thanks to the Lord, \"for his love endures forever.\"" },
      { v: 42, text: "Heman and Jeduthun were responsible for the sounding of the trumpets and cymbals and for the playing of the other instruments for sacred song. The sons of Jeduthun were stationed at the gate." },
      { v: 43, text: "Then all the people left, each for their own home, and David returned home to bless his family." },
    ],
  },
  {
    ref: "2 Chron. 29:26",
    verses: [
      { v: 26, text: "So the Levites stood ready with David's instruments, and the priests with their trumpets." },
    ],
  },
  {
    ref: "Luke 19:37–40",
    verses: [
      { v: 37, text: "When he came near the place where the road goes down the Mount of Olives, the whole crowd of disciples began joyfully to praise God in loud voices for all the miracles they had seen:" },
      { v: 38, text: "\"Blessed is the king who comes in the name of the Lord!\" \"Peace in heaven and glory in the highest!\"" },
      { v: 39, text: "Some of the Pharisees in the crowd said to Jesus, \"Teacher, rebuke your disciples!\"" },
      { v: 40, text: "\"I tell you,\" he replied, \"if they keep quiet, the stones will cry out.\"" },
    ],
  },
  {
    ref: "Acts 16:25",
    verses: [
      { v: 25, text: "About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them." },
    ],
  },
  {
    ref: "Eph. 5:18–19",
    verses: [
      { v: 18, text: "Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit," },
      { v: 19, text: "speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord," },
    ],
  },
  {
    ref: "Acts 3:7",
    verses: [
      { v: 7, text: "Taking him by the right hand, he helped him up, and instantly the man's feet and ankles became strong." },
    ],
  },
  {
    ref: "1 Cor. 14:40",
    verses: [
      { v: 40, text: "But everything should be done in a fitting and orderly way." },
    ],
  },
  {
    ref: "Acts 8:9–24",
    verses: [
      { v: 9, text: "Now for some time a man named Simon had practiced sorcery in the city and amazed all the people of Samaria. He boasted that he was someone great," },
      { v: 10, text: "and all the people, both high and low, gave him their attention and exclaimed, \"This man is rightly called the Great Power of God.\"" },
      { v: 11, text: "They followed him because he had amazed them for a long time with his sorcery." },
      { v: 12, text: "But when they believed Philip as he proclaimed the good news of the kingdom of God and the name of Jesus Christ, they were baptized, both men and women." },
      { v: 13, text: "Simon himself believed and was baptized. And he followed Philip everywhere, astonished by the great signs and miracles he saw." },
      { v: 14, text: "When the apostles in Jerusalem heard that Samaria had accepted the word of God, they sent Peter and John to Samaria." },
      { v: 15, text: "When they arrived, they prayed for the new believers there that they might receive the Holy Spirit," },
      { v: 16, text: "because the Holy Spirit had not yet come on any of them; they had simply been baptized in the name of the Lord Jesus." },
      { v: 17, text: "Then Peter and John placed their hands on them, and they received the Holy Spirit." },
      { v: 18, text: "When Simon saw that the Spirit was given at the laying on of the apostles' hands, he offered them money" },
      { v: 19, text: "and said, \"Give me also this ability so that everyone on whom I lay my hands may receive the Holy Spirit.\"" },
      { v: 20, text: "Peter answered: \"May your money perish with you, because you thought you could buy the gift of God with money!" },
      { v: 21, text: "You have no part or share in this ministry, because your heart is not right before God." },
      { v: 22, text: "Repent of this wickedness and pray to the Lord in the hope that he may forgive you for having such a thought in your heart." },
      { v: 23, text: "For I see that you are full of bitterness and captive to sin.\"" },
      { v: 24, text: "Then Simon answered, \"Pray to the Lord for me so that nothing you have said may happen to me.\"" },
    ],
  },
];

const activities = [
  "Keep track of your dreams. Write down any that seem significant. The meanings should be fairly obvious to you. Talk with someone about them.",
  "Spend time just listening to God. Write down what you hear Him saying.",
  "Cultivate the mystery of expectancy: ask God to bring someone in your path to whom you can minister; start a conversation with a stranger.",
  "Spend time with children: lead music at children's church; act out Bible stories for them.",
  "Use your imagination to put yourself into the scene when you are reading Bible passages. Try to understand how the participants were feeling, thinking, acting.",
  "Use your imagination to consider how you might act on the teaching of the Scriptures, e.g., the Beatitudes; teachings about forgiveness; tithing.",
  "Be part of a strong church that holds its members accountable. Ask for a prayer partner or a mentor.",
  "Take a course; learn an evangelistic method to give you a witness structure.",
];

const reflectionQuestions = [
  "Think about unanswered prayer in your life. To what do you attribute this? How do you respond when God says, 'Wait.'",
  "What are you expecting/wanting from God right now? Talk with Him about it. What does He tell you?",
  "In what ways does God speak to you in your daily life? What forms does it take? What does He say? How do you react?",
  "How do you most like to celebrate God? What are some other ways you might like to experiment with?",
  "How do you feel when others around you don't sing at all or sing softly throughout a song service, don't raise their hands or move at all during worship?",
  "What changes would you like to see in the worship services at your church that would make worship a more satisfying experience for you?",
];

const resources = [
  "Carothers, Merlin R. Answers to Praise: Letters to the Author of Prison to Praise. (1972). Bridge-Logos Publishers. ISBN: 0882700154",
  "Carothers, Merlin R. Power in Praise: Sequel to Prison to Praise. (1993). Bridge-Logos Publishers. ISBN: 0912106263.",
  "Carothers, Merlin R. Prison to Praise. ISBN: 157748343X.",
  "Kiemel, Ann. I Love the Word Impossible. (1976). Tyndale House Publishers. ISBN: 0842315756.",
  "Kiemel, Ann. It's Incredible. (1980). Tyndale House Publishers. ISBN: 0842318186.",
];

export default function Enthusiasts() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
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
                src="https://images.unsplash.com/photo-1546521343-d8721c7e5bf6?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Worship celebration"
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
