import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqTab() {
  const faqs = [
    {
      question: "Как работает верификация продавцов?",
      answer:
        "Каждый продавец должен предоставить фото товаров перед публикацией. Наша система проверяет соответствие фото и описания.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Мы принимаем банковские карты (российские и зарубежные), электронные кошельки и банковские переводы.",
    },
    {
      question: "Как гарантируется качество товаров?",
      answer:
        "Все продавцы проходят верификацию, предоставляют фото товаров. Покупатели могут оставлять отзывы и оценки.",
    },
    {
      question: "Доставка товаров",
      answer:
        "Доставка осуществляется курьерскими службами или самовывозом. Условия доставки указывает продавец.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Часто задаваемые вопросы
        </h2>
        <p className="text-muted-foreground">
          Ответы на популярные вопросы о работе маркетплейса
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
