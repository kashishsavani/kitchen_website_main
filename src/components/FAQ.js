import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../FAQ.css";

const FAQ = () => {
  const faqItems = [
    {
      id: "faq1",
      question: "Do your products come with a warranty?",
      answer: "Yes, all our products come with a one-year warranty covering manufacturing defects.",
    },
    {
      id: "faq2",
      question: "Do you offer customization?",
      answer: "Yes, we offer customization on select products. Please contact us for more details.",
    },
    {
      id: "faq3",
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 business days, depending on your location.",
    },
    {
      id: "faq4",
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer discounts for bulk purchases. Contact us for a custom quote.",
    },
    {
      id: "faq5",
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and bank transfers.",
    },
    {
      id: "faq6",
      question: "Can I return a product?",
      answer: "Yes, we have a 30-day return policy. Please read our return policy for more details.",
    },
  ];

  return (
    <div className="container my-5  FAQContainer">
      <h1 className="faq-header text-center">FAQ</h1>
      <div className="accordion mx-auto" id="faqAccordion" >
        {faqItems.map((item, index) => (
          <div className="accordion-item mt-3" key={item.id}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
                {index + 1}. {item.question}
              </button>
            </h2>
            <div id={item.id} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FAQ;
