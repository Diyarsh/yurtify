import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is tokenized real estate?",
    answer: "Tokenized real estate divides property ownership into digital tokens on the blockchain. Each token represents a fractional share of the property, making real estate investment more accessible and liquid."
  },
  {
    question: "How do I earn money from my modules?",
    answer: "Module holders receive monthly rental income proportional to their ownership stake. Additionally, you can trade modules on our marketplace as property values appreciate."
  },
  {
    question: "What's the minimum investment?",
    answer: "You can start investing with as little as ₸10,000. Our modular approach means you can buy individual tokens and gradually build your portfolio."
  },
  {
    question: "Are my investments secure?",
    answer: "Yes. All properties are legally owned by regulated entities, and your tokens are secured on the Solana blockchain. We maintain full transparency with regular audits and reports."
  },
  {
    question: "Can I sell my modules anytime?",
    answer: "Absolutely. Unlike traditional real estate, our tokens are liquid. You can sell them on our marketplace 24/7 to other investors."
  },
  {
    question: "What happens if a property is sold?",
    answer: "If a property is sold, the proceeds are distributed to module holders proportionally. You'll receive your share of the sale price based on your token ownership."
  },
  {
    question: "How is Yurtify different from REITs?",
    answer: "Unlike REITs that pool investments across many properties, Yurtify lets you choose specific properties. You have direct ownership tokens and transparent, real-time reporting."
  },
  {
    question: "What blockchain does Yurtify use?",
    answer: "We use Solana for its fast transactions, low fees, and robust ecosystem. This ensures efficient trading and minimal costs for our investors."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about tokenized real estate investment
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/10 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};