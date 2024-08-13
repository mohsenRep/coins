"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: any;
}
const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="flex justify-between items-center w-full p-4 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
           fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "رمز ارز چیست؟",
      answer:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید.",
    },
    {
      question: "آیا می توانم با کارت بانکی بیت کوین بخرم؟",
      answer: "پاسخ به سوال درباره خرید بیت کوین با کارت بانکی...",
    },
    {
      question: "چرا باید از والت استفاده کنم؟",
      answer:
        "توضیحات درباره اهمیت استفاده از کیف پول (والت) برای نگهداری ارزهای دیجیتال...",
    },
  ];

  return (
    <div className=" py-8 ">
      <h2 className="text-2xl font-bold mb-6 text-center">سوالات متداول</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <div className="bg-gray-100 p-8 flex flex-col-reverse lg:flex-row lg:justify-center items-center text-center  rounded-lg shadow-md">
        <img
          src="/img/guid.svg"
          alt="Bitcoin illustration"
          className="w-48 h-auto"
        />
        <div className=" flex flex-col items-center text-center ">
          <h2 className="text-2xl font-bold mb-4">
            علاقه مند به خرید بیت کوین هستید؟
          </h2>

          <p className="text-gray-600 mb-6">
            ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین داشته
            باشید.
          </p>

          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-bold mb-8 hover:bg-blue-700 transition duration-300">
            اکنون شروع کنید
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
