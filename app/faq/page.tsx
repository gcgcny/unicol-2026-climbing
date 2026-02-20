import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CopyEmail from "@/app/components/CopyEmail";

const faqs = [
  {
    question: "Do I need climbing experience?",
    answer:
      "Not at all. Beginners are welcome! You can climb, workout, or just hang out.",
  },
  {
    question: "What if I'm not a climber?",
    answer:
      "That's totally okay. You can rest in the café area, condition, encourage others, or just be part of the community.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable athletic clothes, water, and a good attitude. If you have your own climbing shoes, chalk, and/or harness, please bring it. Otherwise they are all available for rental or purchase. Leaders may also have chalk and harnesses to borrow, just ask!",
  },
  {
    question: "Can I come late or leave early?",
    answer: "Yes. Just check in with a leader so we know you're safe.",
  },
  {
    question: "What are pods?",
    answer:
      "Small groups with a leader where you build friendships, look out for each other, and connect with others in the gym.",
  },
  {
    question: "Is this only for Christians?",
    answer:
      "No, everyone is welcome! We're a Christian ministry, but you don't need to have faith figured out to join.",
  },
  {
    question: "How often do we climb?",
    answer: (
      <>
        Climbing happens on the <strong>1st and 3rd Fridays</strong> of each
        month during the summer.
      </>
    ),
  },
  {
    question: "Is there a cost?",
    answer: (
      <>
        Subsidized passes are available. Check the{" "}
        <a href="/pricing-plans" className="underline hover:opacity-70">
          pricing section
        </a>{" "}
        for details.
      </>
    ),
  },
  {
    question: "Can I invite friends?",
    answer:
      "Yes. Bring classmates, roommates, or anyone of university and college age who might enjoy community.",
  },
  {
    question: "Who do I talk to if I have questions?",
    answer: (
      <>
        Reach out to a Unicol leader anytime, we're happy to help! You can also
        reach us at <CopyEmail email="unicol@gcgcny.org" />
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
