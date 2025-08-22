type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 bg-[#b21b6e] text-white cursor-pointer 
                  transition-all duration-300 
                  hover:bg-[#d63384] hover:shadow-lg hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
