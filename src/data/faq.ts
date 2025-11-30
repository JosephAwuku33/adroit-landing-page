export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Where is your team based?",
    answer:
      "Our engineering hub is in Accra, Ghana. Our U.S. entity allows you to contract and pay locally while we deliver from Ghana.",
  },
  {
    question: "What time zones do you work in?",
    answer:
      "We overlap with U.S. mornings and early afternoons, making daily stand-ups and real-time collaboration easy.",
  },
  {
    question: "Who owns the code and IP",
    answer:
      "You do. All IP and code we create as part of the engagement belongs to you or your client.",
  },
  {
    question: "Do you work directly with our clients",
    answer:
      "Up to you. For agencies, we can work fully white-label, or join selected calls as your engineering team",
  },

  {
    question: "What tech stacks do you work with",
    answer:
      "Mainly JavaScript/TypeScript (React, Next.js, Node), Python, modern cloud platforms (AWS, Azure), plus common databases and CI/CD tooling.",
  },
];
