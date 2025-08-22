"use client"; // <-- add this at the top

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const TextButton = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={(e) =>
        (e.currentTarget.style.textShadow =
          "0 0 8px #ff66cc, 0 0 16px #ff66cc, 0 0 24px #ff66cc")
      }
      onMouseLeave={(e) => (e.currentTarget.style.textShadow = "none")}
    >
      {children}
    </button>
  );
};

export default TextButton;
