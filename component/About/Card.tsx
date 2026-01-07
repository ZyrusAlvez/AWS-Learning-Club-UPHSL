import React from "react";

const Top_Card = ({ title, subtitle }: {title: string, subtitle: string}) => {
  return (
    <div className="border-yellow-500 bg-yellow-500/10 border-2 rounded-2xl px-4 py-6 sm:h-40 text-white flex flex-col justify-center font-inter w-full sm:w-80 max-w-sm">
      <h1 className="text-xl sm:text-2xl mb-2 font-bold">{title}</h1>
      <h2 className="text-sm sm:text-base">{subtitle}</h2>
    </div>
  );
};

export default Top_Card;