import UnderConstruction from "@/app/components/UnderConstruction";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const pathways = [
  {
    name: "Naturalist",
    subtitle: "Loving God Outdoors",
    description:
      "Naturalists' hearts soar toward God when surrounded by His creation. Being in nature bends them toward worship and adoration in ways that indoor prayer often cannot.",
    quote: "I connect with God through being in nature",
  },
  {
    name: "Sensate",
    subtitle: "Loving God with the Senses",
    description:
      "Sensates commune with God through the five senses. Majestic music, symbolic architecture, outstanding art, or the sensory experience of communion are powerful spiritual aids.",
    quote: "Beautiful art and powerful music stirs me toward God",
  },
  {
    name: "Traditionalist",
    subtitle: "Loving God through Ritual and Symbol",
    description:
      "Traditionalists find that religious rituals show reverence to God and convey spiritual truths. Symbols and ceremonies connect them to something larger and eternal.",
    quote: "I connect with God through timeless disciplines, rich symbols and meaningful traditions",
  },
  {
    name: "Ascetic",
    subtitle: "Loving God in Solitude and Simplicity",
    description:
      "Ascetics gravitate toward solitude, austerity, and simplicity. They worship through prayer and quiet time, finding God in the absence of outside noise and distraction.",
    quote: "I connect with God by being alone in quiet places and living simply",
  },
  {
    name: "Activist",
    subtitle: "Loving God through Confrontation",
    description:
      "Activists love God by standing up for justice and calling sinners to repentance. They are energized by fighting for the Lord against evil in the world.",
    quote: "I connect with God by standing against what God hates and afflicting the comfortable",
  },
  {
    name: "Caregiver",
    subtitle: "Loving God by Loving Others",
    description:
      "Caregivers love God by loving others. They often see God in the poor and needy and are best fed through service — nursing the sick, giving time at a shelter, or supporting those in need.",
    quote: "I want to comfort the afflicted and connect with God by helping others",
  },
  {
    name: "Enthusiast",
    subtitle: "Loving God with Mystery and Celebration",
    description:
      "Enthusiasts love God through mystery and celebration. They want excitement in worship and are cheerleaders for God and the Christian life, worshipping with outward displays of passion.",
    quote: "I want to feel and experience my relationship with God",
  },
  {
    name: "Contemplative",
    subtitle: "Loving God through Adoration",
    description:
      "Contemplatives are marked by deep emotional attachment to God. They are God's lovers — spending time in His presence, adoring Him, listening to Him, and enjoying Him.",
    quote: "I connect with God by adoring him and experiencing his love for me",
  },
  {
    name: "Intellectual",
    subtitle: "Loving God with the Mind",
    description:
      "Intellectuals are drawn to Bible study and deep learning. The more they understand about truth and God's universe — biology, astronomy, even physics — the more in awe of God they become.",
    quote: "I connect with God through studying and learning more about him and his ways",
  },
];

export default function SacredPathways() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10">Sacred Pathways</h1>
      <h2 className="text-2xl font-semibold text-center mb-6">Your love languages with God</h2>
      <p className="text-base text-muted-foreground mb-10 leading-relaxed">
        A sacred pathway is basically the unique way a person connects with God and grows closer to Him. People might relate to more than one pathway, but most find that one style really helps their faith feel alive and meaningful.
      </p>
      <p className="text-base text-muted-foreground mb-10 leading-relaxed">
         Evangelical minister Gary Thomas describes nine different pathways, including Naturalists, Sensates, Traditionalists, Ascetics, Activists, Caregivers, Enthusiasts, Contemplatives, and Intellectuals. Each one highlights a different way people experience spirituality, whether through nature, tradition, service, celebration, quiet reflection, or learning.
      </p>
      <p className="text-base text-muted-foreground mb-10 leading-relaxed">
        The heart of the idea is that God created everyone differently, so spiritual growth often happens when we lean into the ways of worship and connection that feel most natural to who we are, instead of trying to fit into one single mold.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {pathways.map((pathway) => (
          <Card key={pathway.name}>
            <CardHeader>
              <CardTitle>{pathway.name}</CardTitle>
              <CardDescription>{pathway.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{pathway.description}</p>
              <p className="text-sm text-muted-foreground italic">&ldquo;{pathway.quote}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <hr className="my-6 border-border" />
      <p className="text-sm text-muted-foreground mb-10">
        Reference:{" "}
        <a
          href="https://garythomas.com/wp-content/uploads/2013/03/sacred_pathways_sample_chapter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          Sacred Pathways by Gary L. Thomas
        </a>
      </p>
      <UnderConstruction />
    </main>
  );
}
