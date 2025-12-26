import React from "react";

const InfiniteScrollWatermark = () => {
  const words = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "POSTGRESQL",
    "NODEJS",
    "EXPRESSJS",
    "TAILWINDCSS",
    "JAVA",
    "SQL",
    "AWS"
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-transparent">
      {/* Single main scrolling row only */}
      <div className="flex animate-[marquee_35s_linear_infinite] gap-12 whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span
            key={index}
            className="
              text-2xl           /* Even smaller font size */
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-medium        /* Reduced boldness (medium instead of bold) */
              text-gray-500/40    /* Subtle grey with low opacity */
              select-none
              pointer-events-none
            "
          >
            {word}
          </span>
        ))}
      </div>

      {/* Inline keyframes – no config needed */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollWatermark;