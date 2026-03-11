"use client";

import { useEffect, useRef, useState } from "react";
import { Book, BookOpen, BookOpenText, Church, ListChecks, Users, HelpCircle, X } from "lucide-react";
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

const quotes: { text: React.ReactNode; ref?: string }[] = [
  {
    text: "Traditionalists are fed by what are often termed the historic dimensions of faith: rituals, symbols, sacraments, and sacrifice. These Christians tend to have a disciplined life of faith. Some may be seen by others as legalists, defining their faith largely by matters of conduct….Traditionalists have a need for ritual and structure.",
    ref: "(24, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Rituals provide structure for our faith. Once we learn to use them, traditionalists can also incorporate the use of symbols, which provide meaning.",
    ref: "(81, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Some people react to the word, religion, like a child reacts to the work, bedtime. They rightly fear a form of faith that has no substance, so they stress Christianity is a relationship, not a religion. However, in the context of a true faith, religious practices and rituals can be a powerful force for good – a friend, not an enemy, of a rich and growing relationship with God.",
    ref: "(70, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: <>There are <strong>three elements of the traditionalist pathway: ritual (or liturgical pattern); symbol (or significant image); sacrifice</strong>.</>,
    ref: "(73, from Sacred Pathways by Gary Thomas)",
  },
  {
    text: "Imbued with a vibrant faith, the repetition of ritual is a powerful force for good. Without present attention, however, ritual becomes an empty exercise that floods our souls with insincerity.",
    ref: "(91, from Sacred Pathways by Gary Thomas)",
  },
];

const activities = [
  "Contemplate the three elements of the traditionalist pathway: ritual, symbol, sacrifice.",
  "Read Scripture aloud.",
  "Select a Psalm to say every morning and one for each evening; practice liturgical prayer (see Book of Common Prayer).",
  "Set a regular time and place to meet with the Lord each day.",
  "Follow the Church calendar and celebrate significant days, e.g. Pentecost, Advent.",
  "Develop meaningful rituals; make plentiful use of symbols or ritualized gestures.",
  "Find areas of sacrifice.",
];

const notableTraditinalists = [
  { name: "Kathleen Norris", subtitle: "Poet & spiritual memoirist", image: "https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=1500,q=80/content/images/e0a1b125d6f27c4e5bfcd6df4b144c48a50a9c78.jpeg" },
  { name: "Walt Wangerin", subtitle: "Author & Lutheran pastor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WalterWangerinJr_July2011.jpg/1920px-WalterWangerinJr_July2011.jpg" },
  { name: "Clement of Alexandria", subtitle: "Early church father (c. 150–215)", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Clement_alexandrin.jpg" },
  { name: "Dietrich Bonhoeffer", subtitle: "Theologian & martyr (1906–1945)", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bundesarchiv_Bild_146-1987-074-16%2C_Dietrich_Bonhoeffer.jpg" },
];

type Verse = { v: number; text: string };
type Scripture = {
  ref: string;
  verses?: Verse[];
  sections?: { label: string; verses: Verse[] }[];
};

const scriptures: Scripture[] = [
  {
    ref: "Gen. 12:7–8",
    verses: [
      { v: 7, text: "The LORD appeared to Abram and said, \"To your offspring I will give this land.\" So he built an altar there to the LORD, who had appeared to him." },
      { v: 8, text: "From there he went on toward the hills east of Bethel and pitched his tent, with Bethel on the west and Ai on the east. There he built an altar to the LORD and called on the name of the LORD." },
    ],
  },
  {
    ref: "Ex. 25:40; 40:12–15",
    sections: [
      {
        label: "Ex. 25:40",
        verses: [
          { v: 40, text: "See that you make them according to the pattern shown you on the mountain." },
        ],
      },
      {
        label: "Ex. 40:12–15",
        verses: [
          { v: 12, text: "\"Bring Aaron and his sons to the entrance to the tent of meeting and wash them with water." },
          { v: 13, text: "Then dress Aaron in the sacred garments, anoint him and consecrate him so he may serve me as priest." },
          { v: 14, text: "Bring his sons and dress them in tunics." },
          { v: 15, text: "Anoint them just as you anointed their father, so they may serve me as priests. Their anointing will be to a priesthood that will continue throughout their generations.\"" },
        ],
      },
    ],
  },
  {
    ref: "Lev. 10:8–11",
    verses: [
      { v: 8, text: "Then the LORD said to Aaron," },
      { v: 9, text: "\"You and your sons are not to drink wine or other fermented drink whenever you go into the tent of meeting, or you will die. This is a lasting ordinance for the generations to come," },
      { v: 10, text: "so that you can distinguish between the holy and the common, between the unclean and the clean," },
      { v: 11, text: "and so you can teach the Israelites all the decrees the LORD has given them through Moses.\"" },
    ],
  },
  {
    ref: "Num. 15:37–40; 21:4–9",
    sections: [
      {
        label: "Num. 15:37–40",
        verses: [
          { v: 37, text: "The LORD said to Moses," },
          { v: 38, text: "\"Speak to the Israelites and say to them: \u2018Throughout the generations to come you are to make tassels on the corners of your garments, with a blue cord on each tassel." },
          { v: 39, text: "You will have these tassels to look at and so you will remember all the commands of the LORD, that you may obey them and not prostitute yourselves by chasing after the lusts of your own hearts and eyes." },
          { v: 40, text: "Then you will remember to obey all my commands and will be consecrated to your God." },
        ],
      },
      {
        label: "Num. 21:4–9",
        verses: [
          { v: 4, text: "They traveled from Mount Hor along the route to the Red Sea, to go around Edom. But the people grew impatient on the way;" },
          { v: 5, text: "they spoke against God and against Moses, and said, \"Why have you brought us up out of Egypt to die in the wilderness? There is no bread! There is no water! And we detest this miserable food!\"" },
          { v: 6, text: "Then the LORD sent venomous snakes among them; they bit the people and many Israelites died." },
          { v: 7, text: "The people came to Moses and said, \"We sinned when we spoke against the LORD and against you. Pray that the LORD will take the snakes away from us.\" So Moses prayed for the people." },
          { v: 8, text: "The LORD said to Moses, \"Make a snake and put it up on a pole; anyone who is bitten can look at it and live.\"" },
          { v: 9, text: "So Moses made a bronze snake and put it up on a pole. Then when anyone was bitten by a snake and looked at the bronze snake, they lived." },
        ],
      },
    ],
  },
  {
    ref: "Josh. 1:8",
    verses: [
      { v: 8, text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful." },
    ],
  },
  {
    ref: "2 Kings 18:4",
    verses: [
      { v: 4, text: "He removed the high places, smashed the sacred stones and cut down the Asherah poles. He broke into pieces the bronze snake Moses had made, for up to that time the Israelites had been burning incense to it. (It was called Nehushtan.)" },
    ],
  },
  {
    ref: "Ezra 8:32, 35",
    verses: [
      { v: 32, text: "So we arrived in Jerusalem. After resting three days," },
      { v: 35, text: "Then the exiles who had returned from captivity sacrificed burnt offerings to the God of Israel: twelve bulls for all Israel, ninety-six rams, seventy-seven male lambs and, as a sin offering, twelve male goats. All this was a burnt offering to the LORD." },
    ],
  },
  {
    ref: "Neh. 8:3",
    verses: [
      { v: 3, text: "He read it aloud from daybreak till noon as he faced the square before the Water Gate in the presence of the men, women and others who could understand. And all the people listened attentively to the Book of the Law." },
    ],
  },
  {
    ref: "Jer. 7:4–7",
    verses: [
      { v: 4, text: "Do not trust in deceptive words and say, \"This is the temple of the LORD, the temple of the LORD, the temple of the LORD!\"" },
      { v: 5, text: "If you really change your ways and your actions and deal with each other justly," },
      { v: 6, text: "if you do not oppress the foreigner, the fatherless or the widow and do not shed innocent blood in this place, and if you do not follow other gods to your own harm," },
      { v: 7, text: "then I will let you live in this place, in the land I gave your ancestors for ever and ever." },
    ],
  },
  {
    ref: "Amos 5:21–24",
    verses: [
      { v: 21, text: "\"I hate, I despise your religious festivals; your assemblies are a stench to me." },
      { v: 22, text: "Even though you bring me burnt offerings and grain offerings, I will not accept them. Though you bring choice fellowship offerings, I will have no regard for them." },
      { v: 23, text: "Away with the noise of your songs! I will not listen to the music of your harps." },
      { v: 24, text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
    ],
  },
  {
    ref: "Matt. 23:27",
    verses: [
      { v: 27, text: "\"Woe to you, teachers of the law and Pharisees, you hypocrites! You are like whitewashed tombs, which look beautiful on the outside but on the inside are full of the bones of the dead and everything unclean." },
    ],
  },
  {
    ref: "Luke 4:16",
    verses: [
      { v: 16, text: "He went to Nazareth, where he had been brought up, and on the Sabbath day he went into the synagogue, as was his custom. He stood up to read," },
    ],
  },
  {
    ref: "Acts 3:1; 10; 16:13; 21:26",
    sections: [
      {
        label: "Acts 3:1",
        verses: [
          { v: 1, text: "One day Peter and John were going up to the temple at the time of prayer\u2014at three in the afternoon." },
        ],
      },
      {
        label: "Acts 10",
        verses: [
          { v: 1, text: "At Caesarea there was a man named Cornelius, a centurion in what was known as the Italian Regiment." },
          { v: 2, text: "He and all his family were devout and God-fearing; he gave generously to those in need and prayed to God regularly." },
          { v: 3, text: "One day at about three in the afternoon he had a vision. He distinctly saw an angel of God, who came to him and said, \"Cornelius!\"" },
          { v: 4, text: "Cornelius stared at him in fear. \"What is it, Lord?\" he asked. The angel answered, \"Your prayers and gifts to the poor have come up as a memorial offering before God." },
          { v: 5, text: "Now send men to Joppa to bring back a man named Simon who is called Peter." },
          { v: 6, text: "He is staying with Simon the tanner, whose house is by the sea.\"" },
          { v: 7, text: "When the angel who spoke to him had gone, Cornelius called two of his servants and a devout soldier who was one of his attendants." },
          { v: 8, text: "He told them everything that had happened and sent them to Joppa." },
          { v: 9, text: "About noon the following day as they were on their journey and approaching the city, Peter went up on the roof to pray." },
          { v: 10, text: "He became hungry and wanted something to eat, and while the meal was being prepared, he fell into a trance." },
          { v: 11, text: "He saw heaven opened and something like a large sheet being let down to earth by its four corners." },
          { v: 12, text: "It contained all kinds of four-footed animals, as well as reptiles and birds." },
          { v: 13, text: "Then a voice told him, \"Get up, Peter. Kill and eat.\"" },
          { v: 14, text: "\"Surely not, Lord!\" Peter replied. \"I have never eaten anything impure or unclean.\"" },
          { v: 15, text: "The voice spoke to him a second time, \"Do not call anything impure that God has made clean.\"" },
          { v: 16, text: "This happened three times, and immediately the sheet was taken back to heaven." },
          { v: 17, text: "While Peter was wondering about the meaning of the vision, the men sent by Cornelius found out where Simon\u2019s house was and stopped at the gate." },
          { v: 18, text: "They called out, asking if Simon who was known as Peter was staying there." },
          { v: 19, text: "While Peter was still thinking about the vision, the Spirit said to him, \"Simon, three men are looking for you." },
          { v: 20, text: "So get up and go downstairs. Do not hesitate to go with them, for I have sent them.\"" },
          { v: 21, text: "Peter went down and said to the men, \"I\u2019m the one you\u2019re looking for. Why have you come?\"" },
          { v: 22, text: "The men replied, \"We have come from Cornelius the centurion. He is a righteous and God-fearing man, who is respected by all the Jewish people. A holy angel told him to ask you to come to his house so that he could hear what you have to say.\"" },
          { v: 23, text: "Then Peter invited the men in and gave them lodging. The next day Peter started out with them, and some of the believers from Joppa went along." },
          { v: 24, text: "The following day he arrived in Caesarea. Cornelius was expecting them and had called together his relatives and close friends." },
          { v: 25, text: "As Peter entered the house, Cornelius met him and fell at his feet in reverence." },
          { v: 26, text: "But Peter made him get up. \"Stand up,\" he said, \"I am only a man myself.\"" },
          { v: 27, text: "While talking with him, Peter went inside and found a large gathering of people." },
          { v: 28, text: "He said to them: \"You are well aware that it is against our law for a Jew to associate with or visit a Gentile. But God has shown me that I should not call anyone impure or unclean." },
          { v: 29, text: "So when I was sent for, I came without raising any objection. May I ask why you sent for me?\"" },
          { v: 30, text: "Cornelius answered: \"Three days ago I was in my house praying at this hour, at three in the afternoon. Suddenly a man in shining clothes stood before me" },
          { v: 31, text: "and said, \u2018Cornelius, God has heard your prayer and remembered your gifts to the poor." },
          { v: 32, text: "Send to Joppa for Simon who is called Peter. He is a guest in the home of Simon the tanner, who lives by the sea.\u2019" },
          { v: 33, text: "So I sent for you immediately, and it is good of you to come. Now we are all here in the presence of God to listen to everything the Lord has commanded you to tell us.\"" },
          { v: 34, text: "Then Peter began to speak: \"I now realize how true it is that God does not show favoritism" },
          { v: 35, text: "but accepts from every nation the one who fears him and does what is right." },
          { v: 36, text: "You know the message God sent to the people of Israel, announcing the good news of peace through Jesus Christ, who is Lord of all." },
          { v: 37, text: "You know what has happened throughout the province of Judea, beginning in Galilee after the baptism that John preached\u2014" },
          { v: 38, text: "how God anointed Jesus of Nazareth with the Holy Spirit and power, and how he went around doing good and healing all who were under the power of the devil, because God was with him." },
          { v: 39, text: "\"We are witnesses of everything he did in the country of the Jews and in Jerusalem. They killed him by hanging him on a cross," },
          { v: 40, text: "but God raised him from the dead on the third day and caused him to be seen." },
          { v: 41, text: "He was not seen by all the people, but by witnesses whom God had already chosen\u2014by us who ate and drank with him after he rose from the dead." },
          { v: 42, text: "He commanded us to preach to the people and to testify that he is the one whom God appointed as judge of the living and the dead." },
          { v: 43, text: "All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.\"" },
          { v: 44, text: "While Peter was still speaking these words, the Holy Spirit came on all who heard the message." },
          { v: 45, text: "The circumcised believers who had come with Peter were astonished that the gift of the Holy Spirit had been poured out even on Gentiles." },
          { v: 46, text: "For they heard them speaking in tongues and praising God. Then Peter said," },
          { v: 47, text: "\"Surely no one can stand in the way of their being baptized with water. They have received the Holy Spirit just as we have.\"" },
          { v: 48, text: "So he ordered that they be baptized in the name of Jesus Christ. Then they asked Peter to stay with them for a few days." },
        ],
      },
      {
        label: "Acts 16:13",
        verses: [
          { v: 13, text: "On the Sabbath we went outside the city gate to the river, where we expected to find a place of prayer. We sat down and began to speak to the women who had gathered there." },
        ],
      },
      {
        label: "Acts 21:26",
        verses: [
          { v: 26, text: "The next day Paul took the men and purified himself along with them. Then he went to the temple to give notice of the date when the days of purification would end and the offering would be made for each of them." },
        ],
      },
    ],
  },
  {
    ref: "Rom. 3:25; 8:3",
    sections: [
      {
        label: "Rom. 3:25",
        verses: [
          { v: 25, text: "God presented Christ as a sacrifice of atonement, through the shedding of his blood\u2014to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished\u2014" },
        ],
      },
      {
        label: "Rom. 8:3",
        verses: [
          { v: 3, text: "For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering. And so he condemned sin in the flesh," },
        ],
      },
    ],
  },
  {
    ref: "Col. 2:16–17",
    verses: [
      { v: 16, text: "Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day." },
      { v: 17, text: "These are a shadow of the things that were to come; the reality, however, is found in Christ." },
    ],
  },
  {
    ref: "1 Tim. 4:1–5",
    verses: [
      { v: 1, text: "The Spirit clearly says that in later times some will abandon the faith and follow deceiving spirits and things taught by demons." },
      { v: 2, text: "Such teachings come through hypocritical liars, whose consciences have been seared as with a hot iron." },
      { v: 3, text: "They forbid people to marry and order them to abstain from certain foods, which God created to be received with thanksgiving by those who believe and who know the truth." },
      { v: 4, text: "For everything God created is good, and nothing is to be rejected if it is received with thanksgiving," },
      { v: 5, text: "because it is consecrated by the word of God and prayer." },
    ],
  },
];

const romans = {
  ref: "Exodus 12:1–28",
  verses: [
    { v: 1, text: "The LORD said to Moses and Aaron in Egypt," },
    { v: 2, text: "\u201cThis month is to be for you the first month, the first month of your year." },
    { v: 3, text: "Tell the whole community of Israel that on the tenth day of this month each man is to take a lamb for his family, one for each household." },
    { v: 4, text: "If any household is too small for a whole lamb, they must share one with their nearest neighbor, having taken into account the number of people there are. You are to determine the amount of lamb needed in accordance with what each person will eat." },
    { v: 5, text: "The animals you choose must be year-old males without defect, and you may take them from the sheep or the goats." },
    { v: 6, text: "Take care of them until the fourteenth day of the month, when all the members of the community of Israel must slaughter them at twilight." },
    { v: 7, text: "Then they are to take some of the blood and put it on the sides and tops of the doorframes of the houses where they eat the lambs." },
    { v: 8, text: "That same night they are to eat the meat roasted over fire, along with bitter herbs, and bread made without yeast." },
    { v: 9, text: "Do not eat the meat raw or boiled in water, but roast it over fire\u2014with the head, legs and internal organs." },
    { v: 10, text: "Do not leave any of it till morning; if some is left till morning, you must burn it." },
    { v: 11, text: "This is how you are to eat it: with your cloak tucked into your belt, your sandals on your feet and your staff in your hand. Eat it in haste; it is the LORD\u2019s Passover." },
    { v: 12, text: "\u201cOn that same night I will pass through Egypt and strike down every firstborn of both people and animals, and I will bring judgment on all the gods of Egypt. I am the LORD." },
    { v: 13, text: "The blood will be a sign for you on the houses where you are, and when I see the blood, I will pass over you. No destructive plague will touch you when I strike Egypt." },
    { v: 14, text: "\u201cThis is a day you are to commemorate; for the generations to come you shall celebrate it as a festival to the LORD\u2014a lasting ordinance." },
    { v: 15, text: "For seven days you are to eat bread made without yeast. On the first day remove the yeast from your houses, for whoever eats anything with yeast in it from the first day through the seventh must be cut off from Israel." },
    { v: 16, text: "On the first day hold a sacred assembly, and another one on the seventh day. Do no work at all on these days, except to prepare food for everyone to eat; that is all you may do." },
    { v: 17, text: "\u201cCelebrate the Festival of Unleavened Bread, because it was on this very day that I brought your divisions out of Egypt. Celebrate this day as a lasting ordinance for the generations to come." },
    { v: 18, text: "In the first month you are to eat bread made without yeast, from the evening of the fourteenth day until the evening of the twenty-first day." },
    { v: 19, text: "For seven days no yeast is to be found in your houses. And anyone, whether foreigner or native-born, who eats anything with yeast in it must be cut off from the community of Israel." },
    { v: 20, text: "Eat nothing made with yeast. Wherever you live, you must eat unleavened bread.\u201d" },
    { v: 21, text: "Then Moses summoned all the elders of Israel and said to them, \u201cGo at once and select the animals for your families and slaughter the Passover lamb." },
    { v: 22, text: "Take a bunch of hyssop, dip it into the blood in the basin and put some of the blood on the top and on both sides of the doorframe. None of you shall go out of the door of your house until morning." },
    { v: 23, text: "When the LORD goes through the land to strike down the Egyptians, he will see the blood on the top and sides of the doorframe and will pass over that doorway, and he will not permit the destroyer to enter your houses and strike you down." },
    { v: 24, text: "\u201cObey these instructions as a lasting ordinance for you and your descendants." },
    { v: 25, text: "When you enter the land that the LORD will give you as he promised, observe this ceremony." },
    { v: 26, text: "And when your children ask you, \u2018What does this ceremony mean to you?\u2019" },
    { v: 27, text: "then tell them, \u2018It is the Passover sacrifice to the LORD, who passed over the houses of the Israelites in Egypt and spared our homes when he struck down the Egyptians.\u2019\u201d Then the people bowed down and worshiped." },
    { v: 28, text: "The Israelites did just what the LORD commanded Moses and Aaron." },
  ],
  studyQuestions: [
    {
      question: "What symbols are present in the Passover meal?",
      points: [
        "Lamb, blood on the doorpost, unleavened bread, bitter herbs",
      ],
    },
    {
      question: "Why does God tell the Israelites to repeat this ritual every year?",
      points: [
        "Remembering God’s deliverance from slavery",
      ],
    },
    {
      question: "Why do you think God used rituals and symbols to help people remember His actions?",
      points: [
        "Shared community, faith through repetition, make spiritual truths visible",
      ],
    },
    {
      question: "How does the Passover lamb connect to Jesus’ sacrifice?",
      points: [
        "Point 1",
        "Point 2",
      ],
    },
    {
      question: "Study question 1 placeholder?",
      points: [
        "Lamb without defect, Lamb’s blood brings salvation, deliverance",
        "Read the Last Supper (Luke 22:7-20)",
      ],
    },
  ],
};

const reflectionQuestions = [
  "What rituals, symbols, etc. would you like to incorporate into your life? How do you think they would affect your personal worship time? What would you like them to do for you?",
  "What rituals are necessary for you to be able to worship easily?",
  "What happens to your ability to worship when you are fellowshipping in a church of a denomination that has little formal liturgy?",
];

const resources = [
  "Bethge, Eberhard (1972). Letters and Papers from Prison. New York: MacMillan.",
  "Heath, Sidney (1909). The Romance of Symbolism. London: Francis Griffiths.",
  "Jungmann, Joseph (1978). Prayer Through the Centuries, trans. by John Coyne. New York: Paulist.",
  "Nelson, Gertrude Mueller (1986). To Dance with God: Family Ritual and Community Celebration. New York: Paulist.",
  "Norris, Kathleen. Amazing Grace; Cloister Walk.",
  "Underhill, Evelyn (1936). Worship. New York: Harper and Row.",
  "Wangerin, Walter (1992). Reliving the Passion. Grand Rapids: Zondervan.",
  "Book of Common Prayer.",
];

export default function Traditionalists() {
  const [selectedScripture, setSelectedScripture] = useState<typeof scriptures[number] | null>(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  return (
    <main className="max-w-3xl mx-auto space-y-14">

      {/* Hero */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Traditionalists</h1>
        <p className="text-lg text-muted-foreground italic">Loving God through Ritual and Symbol</p>
      </section>

      {/* Description / Quotes */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Church className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Description</h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Traditionalists are fed by what are often termed the historic dimensions of faith: rituals, symbols, sacraments, and sacrifice. These Christians tend to have a disciplined life of faith. Some may be seen by others as legalists, defining their faith largely by matters of conduct. Frequently they enjoy regular attendance at church services, tithing, keeping the Sabbath, and so on.
          </p>
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
                src="https://images.unsplash.com/photo-1592708488730-0444f89ee75e?q=80&w=3607&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Traditionalist worship"
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
                  Traditions help us remember and celebrate what God has done and who he is.
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

      {/* Well Known Traditionalists */}
      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Well Known Traditionalists</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notableTraditinalists.map((person) => (
              <div key={person.name} className="flex items-center gap-3 rounded-xl border bg-card pr-3 shadow-sm h-[72px]">
                <div className="shrink-0 self-stretch aspect-square rounded-l-xl overflow-hidden bg-muted flex items-center justify-center">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <Church className="h-7 w-7 text-muted-foreground/40" />
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
            {selectedScripture?.sections ? (
              selectedScripture.sections.map((section) => (
                <div key={section.label} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{section.label}</p>
                  {section.verses.map(({ v, text }) => (
                    <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-primary mr-2">{v}</span>
                      {text}
                    </p>
                  ))}
                </div>
              ))
            ) : (
              selectedScripture?.verses?.map(({ v, text }) => (
                <p key={v} className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary mr-2">{v}</span>
                  {text}
                </p>
              ))
            )}
            <p className="text-xs text-muted-foreground/60 pt-4 border-t">NIV — New International Version</p>
          </div>
        </DrawerContent>
      </Drawer>

    </main>
  );
}
