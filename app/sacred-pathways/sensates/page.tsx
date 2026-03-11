"use client";

import { useEffect, useRef, useState } from "react";
import { Book, BookOpen, BookOpenText, Sparkles, ListChecks, Users, HelpCircle, X } from "lucide-react";
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
    text: "Sensate Christians want to be lost in the awe, beauty, and splendor of God. They are drawn particularly to the liturgical, the majestic, the grand. When these Christians worship, they want to be filled with sights, sounds, and smells that overwhelm them. Incense, intricate architecture, classical music, and formal language send their hearts soaring.” These Christians delight in sensuous onslaught. “The five senses are God’s most effective inroad to their hearts.",
    ref: "(23, 24, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Using our bodies to glorify God is much better response than denying the role of the body in worship.",
    ref: "(67, from Vogt)",
  },
  {
    text: "A sensate needs to use discernment when listening to beautiful music, looking at beautiful art, participating in sensually fulfilling worship. Not all that is beautiful is of God. Don't deprive yourself of corporate worship just because the building or music or form of the service isn't beautiful to you.",
    ref: null,
  },
];

const activities = [
  "Listen to worship-producing music",
  "Absorb worship-producing art",
  "Sing scripture",
  "Create a worship space for yourself: light a candle, set out meaningful articles, e.g., a cross.",
  "Use a \"pocket piece\" to remind yourself to reflect on and worship God throughout the day.",
  "Enter into a scripture passage. Be one of the characters. Experience the passage.",
  "Vary prayer posture: stand, sit, kneel, lie prostrate",
];

const notableSensates = [
  {
    name: "Madeleine L'Engle",
    subtitle: "Author & Christian thinker",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c9/Madeleine_lengle.jpg",
  },
  {
    name: "Wolfgang Amadeus Mozart",
    subtitle: "Composer",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/The_Mozart_Family_-_Wolfgang_Amadeus_Mozart_headshot.jpg",
  },
  {
    name: "George Frideric Handel",
    subtitle: "Composer",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg",
  },
];

const scriptures = [
  {
    ref: "Rev. 8:2-4",
    verses: [
      { v: 2, text: "And I saw the seven angels who stand before God, and seven trumpets were given to them." },
      { v: 3, text: "Another angel, who had a golden censer, came and stood at the altar. He was given much incense to offer, with the prayers of all God's people, on the golden altar in front of the throne." },
      { v: 4, text: "The smoke of the incense, together with the prayers of God's people, went up before God from the angel's hand." },
    ],
  },
  {
    ref: "Deut. 6:5",
    verses: [
      { v: 5, text: "Love the Lord your God with all your heart and with all your soul and with all your strength." },
    ],
  },
  {
    ref: "Ezra 1:1-3",
    verses: [
      { v: 1, text: "In the first year of Cyrus king of Persia, in order to fulfill the word of the Lord spoken by Jeremiah, the Lord moved the heart of Cyrus king of Persia to make a proclamation throughout his realm and also to put it in writing:" },
      { v: 2, text: "\"This is what Cyrus king of Persia says: 'The Lord, the God of heaven, has given me all the kingdoms of the earth and he has appointed me to build a temple for him at Jerusalem in Judah." },
      { v: 3, text: "Any of his people among you may go up to Jerusalem in Judah and build the temple of the Lord, the God of Israel, the God who is in Jerusalem, and may their God be with them.'" },
    ],
  },
  {
    ref: "Gen. 1:26-27",
    verses: [
      { v: 26, text: "Then God said, \"Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground.\"" },
      { v: 27, text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
    ],
  },
  {
    ref: "Ezra 3:12-13",
    verses: [
      { v: 12, text: "But many of the older priests and Levites and family heads, who had seen the former temple, wept aloud when they saw the foundation of this temple being laid, while many others shouted for joy." },
      { v: 13, text: "No one could distinguish the sound of the shouts of joy from the sound of weeping, because the people made so much noise. And the sound was heard far away." },
    ],
  },
  {
    ref: "Ezek. 43:3",
    verses: [
      { v: 3, text: "The vision I saw was like the vision I had seen when he came to destroy the city and like the visions I had seen by the Kebar River, and I fell facedown." },
    ],
  },
  {
    ref: "Ps. 45:1",
    verses: [
      { v: 1, text: "My heart is stirred by a noble theme as I recite my verses for the king; my tongue is the pen of a skillful writer." },
    ],
  },
  {
    ref: "Mal. 1:11",
    verses: [
      { v: 11, text: "My name will be great among the nations, from where the sun rises to where it sets. In every place incense and pure offerings will be brought to me, because my name will be great among the nations,\u201d says the Lord Almighty." },
    ],
  },
  {
    ref: "Luke 7:36-38",
    verses: [
      { v: 36, text: "When one of the Pharisees invited Jesus to have dinner with him, he went to the Pharisee's house and reclined at the table." },
      { v: 37, text: "A woman in that town who lived a sinful life learned that Jesus was eating at the Pharisee's house, so she came there with an alabaster jar of perfume." },
      { v: 38, text: "As she stood behind him at his feet weeping, she began to wet his feet with her tears. Then she wiped them with her hair, kissed them and poured perfume on them." },
    ],
  },
  {
    ref: "Rev. 1:10, 13-17",
    verses: [
      { v: 10, text: "On the Lord's Day I was in the Spirit, and I heard behind me a loud voice like a trumpet," },
      { v: 13, text: "and among the lampstands was someone like a son of man, dressed in a robe reaching down to his feet and with a golden sash around his chest." },
      { v: 14, text: "The hair on his head was white like wool, as white as snow, and his eyes were like blazing fire." },
      { v: 15, text: "His feet were like bronze glowing in a furnace, and his voice was like the sound of rushing waters." },
      { v: 16, text: "In his right hand he held seven stars, and coming out of his mouth was a sharp, double-edged sword. His face was like the sun shining in all its brilliance." },
      { v: 17, text: "When I saw him, I fell at his feet as though dead. Then he placed his right hand on me and said: \"Do not be afraid. I am the First and the Last.\"" },
    ],
  },
  {
    ref: "Rev. 4",
    verses: [
      { v: 1, text: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, \"Come up here, and I will show you what must take place after this.\"" },
      { v: 2, text: "At once I was in the Spirit, and there before me was a throne in heaven with someone sitting on it." },
      { v: 3, text: "And the one who sat there had the appearance of jasper and ruby. A rainbow that shone like an emerald encircled the throne." },
      { v: 4, text: "Surrounding the throne were twenty-four other thrones, and seated on them were twenty-four elders. They were dressed in white and had crowns of gold on their heads." },
      { v: 5, text: "From the throne came flashes of lightning, rumblings and peals of thunder. In front of the throne, seven lamps were blazing. These are the seven spirits of God." },
      { v: 6, text: "Also in front of the throne there was what looked like a sea of glass, clear as crystal. In the center, around the throne, were four living creatures, and they were covered with eyes, in front and in back." },
      { v: 7, text: "The first living creature was like a lion, the second was like an ox, the third had a face like a man, the fourth was like a flying eagle." },
      { v: 8, text: "Each of the four living creatures had six wings and was covered with eyes all around, even under its wings. Day and night they never stop saying: \"'Holy, holy, holy is the Lord God Almighty,' who was, and is, and is to come.\"" },
      { v: 9, text: "Whenever the living creatures give glory, honor and thanks to him who sits on the throne and who lives for ever and ever," },
      { v: 10, text: "the twenty-four elders fall down before him who sits on the throne and worship him who lives for ever and ever. They lay their crowns before the throne and say:" },
      { v: 11, text: "\"You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.\"" },
    ],
  },
  // Taste
  {
    ref: "Ps. 34:8",
    verses: [
      { v: 8, text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him." },
    ],
  },
  {
    ref: "1 Pet. 2:3",
    verses: [
      { v: 3, text: "now that you have tasted that the Lord is good." },
    ],
  },
  // Touch
  {
    ref: "1 Sam. 10:26",
    verses: [
      { v: 26, text: "Saul also went to his home in Gibeah, accompanied by valiant men whose hearts God had touched." },
    ],
  },
  {
    ref: "Matt. 14:36",
    verses: [
      { v: 36, text: "and begged him to let the sick just touch the edge of his cloak, and all who touched it were healed." },
    ],
  },
  {
    ref: "Luke 5:12-13",
    verses: [
      { v: 12, text: "While Jesus was in one of the towns, a man came along who was covered with leprosy. When he saw Jesus, he fell with his face to the ground and begged him, \"Lord, if you are willing, you can make me clean.\"" },
      { v: 13, text: "Jesus reached out his hand and touched the man. \"I am willing,\" he said. \"Be clean!\" And immediately the leprosy left him." },
    ],
  },
  {
    ref: "Luke 24:39",
    verses: [
      { v: 39, text: "Look at my hands and my feet. It is I myself! Touch me and see; a ghost does not have flesh and bones, as you see I have." },
    ],
  },
  // Look
  {
    ref: "John 1:36",
    verses: [
      { v: 36, text: "When he saw Jesus passing by, he said, \"Look, the Lamb of God!\"" },
    ],
  },
  {
    ref: "John 4:35",
    verses: [
      { v: 35, text: "Don't you have a saying, 'It's still four months until harvest'? I tell you, open your eyes and look at the fields! They are ripe for harvest." },
    ],
  },
  {
    ref: "John 19:37",
    verses: [
      { v: 37, text: "and, as another scripture says, \"They will look on the one they have pierced.\"" },
    ],
  },
  {
    ref: "Rev. 5:6",
    verses: [
      { v: 6, text: "Then I saw a Lamb, looking as if it had been slain, standing at the center of the throne, encircled by the four living creatures and the elders. The Lamb had seven horns and seven eyes, which are the seven spirits of God sent out into all the earth." },
    ],
  },
  {
    ref: "1 Sam. 16:7",
    verses: [
      { v: 7, text: "But the Lord said to Samuel, \"Do not consider his appearance or his height, for I have rejected him. The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.\"" },
    ],
  },
  // Hear
  {
    ref: "Deut. 30:20",
    verses: [
      { v: 20, text: "and that you may love the Lord your God, listen to his voice, and hold fast to him. For the Lord is your life, and he will give you many years in the land he swore to give to your fathers, Abraham, Isaac and Jacob." },
    ],
  },
  {
    ref: "Ps. 96",
    verses: [
      { v: 1, text: "Sing to the Lord a new song; sing to the Lord, all the earth." },
      { v: 2, text: "Sing to the Lord, praise his name; proclaim his salvation day after day." },
      { v: 3, text: "Declare his glory among the nations, his marvelous deeds among all peoples." },
      { v: 4, text: "For great is the Lord and most worthy of praise; he is to be feared above all gods." },
      { v: 5, text: "For all the gods of the nations are idols, but the Lord made the heavens." },
      { v: 6, text: "Splendor and majesty are before him; strength and glory are in his sanctuary." },
      { v: 7, text: "Ascribe to the Lord, all you families of nations, ascribe to the Lord glory and strength." },
      { v: 8, text: "Ascribe to the Lord the glory due his name; bring an offering and come into his courts." },
      { v: 9, text: "Worship the Lord in the splendor of his holiness; tremble before him, all the earth." },
      { v: 10, text: "Say among the nations, \"The Lord reigns.\" The world is firmly established, it cannot be moved; he will judge the peoples with equity." },
      { v: 11, text: "Let the heavens rejoice, let the earth be glad; let the sea resound, and all that is in it." },
      { v: 12, text: "Let the fields be jubilant, and everything in them; let all the trees of the forest sing for joy." },
      { v: 13, text: "Let all creation rejoice before the Lord, for he comes, he comes to judge the earth. He will judge the world in righteousness and the peoples in his faithfulness." },
    ],
  },
  {
    ref: "Ps. 140",
    verses: [
      { v: 1, text: "Rescue me, Lord, from evildoers; protect me from the violent," },
      { v: 2, text: "who devise evil plans in their hearts and stir up war every day." },
      { v: 3, text: "They make their tongues as sharp as a serpent's; the poison of vipers is on their lips." },
      { v: 4, text: "Keep me safe, Lord, from the hands of the wicked; protect me from the violent, who devise ways to trip my feet." },
      { v: 5, text: "The arrogant have hidden a snare for me; they have spread out the cords of their net and have set traps for me along my path." },
      { v: 6, text: "I say to the Lord, \"You are my God.\" Hear, Lord, my cry for mercy." },
      { v: 7, text: "Sovereign Lord, my strong deliverer, you shield my head in the day of battle." },
      { v: 8, text: "Do not grant the wicked their desires, Lord; do not let their plans succeed." },
      { v: 9, text: "Those who surround me proudly rear their heads; may the mischief of their lips engulf them." },
      { v: 10, text: "May burning coals fall on them; may they be thrown into the fire, into miry pits, never to rise." },
      { v: 11, text: "May slanderers not be established in the land; may disaster hunt down the violent." },
      { v: 12, text: "I know that the Lord secures justice for the poor and upholds the cause of the needy." },
      { v: 13, text: "Surely the righteous will praise your name, and the upright will live in your presence." },
    ],
  },
  {
    ref: "Ps. 147",
    verses: [
      { v: 1, text: "Praise the Lord. How good it is to sing praises to our God, how pleasant and fitting to praise him!" },
      { v: 2, text: "The Lord builds up Jerusalem; he gathers the exiles of Israel." },
      { v: 3, text: "He heals the brokenhearted and binds up their wounds." },
      { v: 4, text: "He determines the number of the stars and calls them each by name." },
      { v: 5, text: "Great is our Lord and mighty in power; his understanding has no limit." },
      { v: 6, text: "The Lord sustains the humble but casts the wicked to the ground." },
      { v: 7, text: "Sing to the Lord with grateful praise; make music to our God on the harp." },
      { v: 8, text: "He covers the sky with clouds; he supplies the earth with rain and makes grass grow on the hills." },
      { v: 9, text: "He provides food for the cattle and for the young ravens when they call." },
      { v: 10, text: "His pleasure is not in the strength of the horse, nor his delight in the legs of the warrior;" },
      { v: 11, text: "the Lord delights in those who fear him, who put their hope in his unfailing love." },
      { v: 12, text: "Extol the Lord, Jerusalem; praise your God, Zion." },
      { v: 13, text: "He strengthens the bars of your gates and blesses your people within you." },
      { v: 14, text: "He grants peace to your borders and satisfies you with the finest of wheat." },
      { v: 15, text: "He sends his command to the earth; his word runs swiftly." },
      { v: 16, text: "He spreads the snow like wool and scatters the frost like ashes." },
      { v: 17, text: "He hurls down his hail like pebbles. Who can withstand his icy blast?" },
      { v: 18, text: "He sends his word and melts them; he stirs up his breezes, and the waters flow." },
      { v: 19, text: "He has revealed his word to Jacob, his laws and decrees to Israel." },
      { v: 20, text: "He has done this for no other nation; they do not know his laws. Praise the Lord." },
    ],
  },
  {
    ref: "Ps. 150",
    verses: [
      { v: 1, text: "Praise the Lord. Praise God in his sanctuary; praise him in his mighty heavens." },
      { v: 2, text: "Praise him for his acts of power; praise him for his surpassing greatness." },
      { v: 3, text: "Praise him with the sounding of the trumpet, praise him with the harp and lyre," },
      { v: 4, text: "praise him with timbrel and dancing, praise him with the strings and pipe," },
      { v: 5, text: "praise him with the clash of cymbals, praise him with resounding cymbals." },
      { v: 6, text: "Let everything that has breath praise the Lord. Praise the Lord." },
    ],
  },
  {
    ref: "Isa. 30:9",
    verses: [
      { v: 9, text: "For these are rebellious people, deceitful children, children unwilling to listen to the Lord's instruction." },
    ],
  },
  {
    ref: "John 10:27",
    verses: [
      { v: 27, text: "My sheep listen to my voice; I know them, and they follow me." },
    ],
  },
  {
    ref: "Jas. 1:19",
    verses: [
      { v: 19, text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry," },
    ],
  },
  // Smell
  {
    ref: "Ps. 141:2",
    verses: [
      { v: 2, text: "May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice." },
    ],
  },
  {
    ref: "2 Cor. 2:16",
    verses: [
      { v: 16, text: "To the one we are an aroma that brings death; to the other, an aroma that brings life. And who is equal to such a task?" },
    ],
  },
  {
    ref: "Eph. 5:2",
    verses: [
      { v: 2, text: "and walk in the way of love, just as Christ loved us and gave himself up for us as a fragrant offering and sacrifice to God." },
    ],
  },
  // Speak
  {
    ref: "Ps. 34:1",
    verses: [
      { v: 1, text: "I will extol the Lord at all times; his praise will always be on my lips." },
    ],
  },
  {
    ref: "Ps. 119:171",
    verses: [
      { v: 171, text: "May my lips overflow with praise, for you teach me your decrees." },
    ],
  },
  {
    ref: "Isa. 6:5",
    verses: [
      { v: 5, text: "\"Woe to me!\" I cried. \"I am ruined! For I am a man of unclean lips, and I live among a people of unclean lips, and my eyes have seen the King, the Lord Almighty.\"" },
    ],
  },
];

const romans = {
  ref: "Luke 21:1-4",
  verses: [
    { v: 1, text: "As Jesus looked up, he saw the rich putting their gifts into the temple treasury." },
    { v: 2, text: "He also saw a poor widow put in two very small copper coins." },
    { v: 3, text: "\"Truly I tell you,\" he said, \"this poor widow has put in more than all the others." },
    { v: 4, text: "All these people gave their gifts out of their wealth; but she out of her poverty put in all she had to live on.\"" },
  ],
  studyQuestions: [
    {
      question: "How did Jesus notice what was happening around him?",
      points: [
        "He observed the widow, even though she was poor and gave a small amount.",
        "Perhaps he heard the coins clinking and noted the sound of her offering which may have been different to the sound of a more average offering amount",
      ],
    },
    {
      question: "How did the disciples gain spiritual insight from Jesus?",
      points: [
        "Jesus talked. He shared his insights.",
        "He shared insight thats inaccessible to the disciples. Only he knew the heart and circumstances of the widow.",
      ],
    },
    {
      question: "What did the disciples do?",
      points: [
        "They followed Jesus into the temple (implied in context)",
        "They listened to Jesus when he talked",
      ],
    },
    {
      question: "How might God give insight through our senses today?",
      points: [
        "God can speak to us in Scripture, through sending other Christians to give meaning like Jesus gave meaning to the disciples, through putting ideas in our mind when we pray, etc.",
      ],
    },
  ],
};

const reflectionQuestions = [
  "How do you feel when you are worshipping in a plain, unadorned church? How does it affect your ability to focus on God?",
  "Have you been in a service that incorporated incense? an orchestra or pipe organ? ritual dance? signing? processions of banners or crosses? other? How is your worship experience enhanced or hindered by these sensory additions to the worship service?",
  "Have you yourself participated in dance or some other physical expression during a worship service? How did it affect your whole worship experience?",
  "How does having something to touch, smell, look at or listen to affect your personal worship time?",
  "How do you react to the statement, \"we must take care that our worship of God doesn't become worship of the worship experience alone\"?",
];

const resources = [
  "Whitfield and Stoddart, Hearing, Taste and Smell. Pathways of Perception. Nouwen, Henri J., Return of the Prodigal Son.",
  
];

const generalPassages = scriptures.slice(0, 11);
const scriptureByRef = Object.fromEntries(scriptures.map(s => [s.ref, s]));

const categoryGroups = [
  { label: "Taste",  refs: ["Ps. 34:8", "1 Pet. 2:3"] },
  { label: "Touch",  refs: ["1 Sam. 10:26", "Matt. 14:36", "Luke 5:12-13", "Luke 24:39"] },
  { label: "Look",   refs: ["Luke 24:39", "John 1:36", "John 4:35", "John 19:37", "Rev. 5:6", "1 Sam. 16:7"] },
  { label: "Hear",   refs: ["Deut. 30:20", "Ps. 96", "Ps. 140", "Ps. 147", "Ps. 150", "Isa. 30:9", "John 10:27", "Jas. 1:19"] },
  { label: "Smell",  refs: ["Ps. 141:2", "2 Cor. 2:16", "Eph. 5:2"] },
  { label: "Speak",  refs: ["Ps. 34:1", "Ps. 119:171", "Isa. 6:5"] },
];

export default function Sensates() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showGeneralPassages, setShowGeneralPassages] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<typeof categoryGroups[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  function closeDrawer() {
    setSelectedScripture(null);
    setShowGeneralPassages(false);
    setSelectedGroup(null);
  }

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Sensates</h1>
        <p className="text-lg text-muted-foreground italic">Loving God with the Senses</p>
      </section>

      {/* Description / Quotes */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
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
            <div className="rounded-xl border overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1461337164761-2124f78ecc21?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sensate worship"
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
              <p className="font-semibold text-sm">{romans.ref}</p>
              <div className="space-y-3">
                {romans.verses.map(({ v, text }) => (
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
                  {romans.studyQuestions.map((sq, i) => (
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
                  God speaks to us, but we must be attentive through our senses. Though sight is our dominant sense, we have many more that God can speak through. Sensates love to love God through their senses because they enjoy paying attention to God through their senses.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="secondary"
              onClick={() => setShowGeneralPassages(true)}
              className="group"
            >
              <Book className="h-4 w-4 shrink-0 group-hover:hidden" />
              <BookOpenText className="h-4 w-4 shrink-0 hidden group-hover:block" />
              General Passages
            </Button>
            {categoryGroups.map((group) => (
              <Button
                key={group.label}
                variant="secondary"
                onClick={() => setSelectedGroup(group)}
                className="group"
              >
                <Book className="h-4 w-4 shrink-0 group-hover:hidden" />
                <BookOpenText className="h-4 w-4 shrink-0 hidden group-hover:block" />
                {group.label}
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

      {/* Well Known Sensates */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Sensates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableSensates.map((person) => (
              <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
                <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Sparkles className="h-7 w-7 text-muted-foreground/40" />
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
        open={!!selectedScripture || showGeneralPassages || !!selectedGroup}
        onOpenChange={(open: boolean) => { if (!open) closeDrawer(); }}
      >
        <DrawerContent className="fixed inset-y-0 right-0 left-auto w-full sm:w-[400px] rounded-none rounded-l-[10px] mt-0 flex flex-col">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <DrawerTitle>
              {showGeneralPassages ? "General Passages" : selectedGroup ? selectedGroup.label : selectedScripture?.ref}
            </DrawerTitle>
            <button
              onClick={closeDrawer}
              className="sm:hidden rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4 pb-4 space-y-4">
            {(showGeneralPassages ? generalPassages : selectedGroup ? selectedGroup.refs.map(r => scriptureByRef[r]).filter(Boolean) : null)?.map((s, i) => (
              <div key={s.ref} className={`space-y-2 ${i > 0 ? "pt-4 border-t border-border" : ""}`}>
                <p className="font-semibold text-sm text-foreground">{s.ref}</p>
                {s.verses.map(({ v, text }) => (
                  <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary mr-2">{v}</span>
                    {text}
                  </p>
                ))}
              </div>
            ))}
            {selectedScripture && selectedScripture.verses.map(({ v, text }) => (
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
