type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "pink" | "purple"; // new prop
};

const Button = ({ children, onClick, className, variant = "pink" }: Props) => {
  const baseStyle =
    "rounded-full px-4 py-2 text-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105";

  const variantStyle =
    variant === "pink"
      ? "bg-[#b21b6e] hover:bg-[#d63384]"
      : "bg-[#640d6b] hover:bg-[#7a1f8e]";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
