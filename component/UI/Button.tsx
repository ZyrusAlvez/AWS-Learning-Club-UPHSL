type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "pink" | "purple" | "orange"; // new prop
};

const Button = ({ children, onClick, className, variant = "pink" }: Props) => {
  const baseStyle =
    "rounded-full px-4 py-2 text-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105";

  const variantStyles = {
    pink: "bg-[#b21b6e] hover:bg-[#d63384]",
    orange: "bg-[#ffa23f] hover:bg-[#ff8c00]",
    purple: "bg-[#640d6b] hover:bg-[#7a1f8e]"
  };

  const variantStyle = variantStyles[variant];

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
