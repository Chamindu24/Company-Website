import React from "react";

type QuestionItemProps = {
  question: string;
  answer: string;
  index?: number; // Optional: To show "01", "02" for that premium numbered look
};

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer, index }) => {
  return (
    <details className="group border-b border-slate-300 bg-white py-8 transition-all duration-300 hover:bg-white/90">
      <summary className="flex cursor-pointer items-start justify-between text-left list-none px-4">
        <div className="flex gap-8">
          {/* Numbering - Adds an institutional/organized vibe */}
          {index !== undefined && (
            <span className="text-xs font-semibold tracking-widest text-[#B89450] mt-1.5">
              {index < 10 ? `0${index}` : index}
            </span>
          )}
          
          <span className="text-xl lg:text-2xl  font-semibold text-stone-800 tracking-tight">
            {question}
          </span>
        </div>

        {/* Custom Royal Toggle */}
        <div className="relative flex items-center justify-center w-8 h-8 mt-1">
          <div className="absolute h-[2px] w-6 bg-[#1A1A1A] transition-transform duration-300 group-open:rotate-180" />
          <div className="absolute w-[2px] h-6 bg-[#1A1A1A] transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
        </div>
      </summary>

      {/* Answer Area - Designed for wide readability */}
      <div className="mt-6 px-4 bg-white lg:pl-[5.5rem] max-w-4xl">
        <div className="border-l-4 border-emerald-600 pl-8 py-2">
          <p className="text-lg text-slate-700 font-semibold leading-relaxed">
            {answer}
          </p>
          

        </div>
      </div>
    </details>
  );
};

export default QuestionItem;