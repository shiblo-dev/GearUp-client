import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I rent sports equipment?",
    answer:
      "Browse available gear, choose your rental dates, complete your booking, and pick up your equipment from the provider.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel according to the provider's cancellation policy. Any eligible refund will be processed automatically.",
  },
  {
    question: "Do I need to pay a security deposit?",
    answer:
      "Some providers require a refundable security deposit depending on the equipment being rented.",
  },
  {
    question: "How are providers verified?",
    answer:
      "Every provider goes through identity verification and equipment review before being approved on GearUp.",
  },
  {
    question: "What happens if equipment is damaged?",
    answer:
      "Report the issue immediately through your dashboard. Our support team will review the case based on the rental agreement.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-emerald-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Find answers to the most common questions about renting gear on
            GearUp.
          </p>

        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border bg-background px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}