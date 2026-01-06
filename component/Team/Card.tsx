import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";

interface TeamCardProps {
  img: string;
  name: string;
  title: string;
  subtitle: string;
  className?: string; // optional
}

const Team_Card: React.FC<TeamCardProps> = ({ img, name, title, subtitle, className }) => {
  function handleClick(): void {
    alert("We'll update officers social links soon");
  }

  return (
    <div className={`w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-[256px] flex flex-col text-white ${className || ""}`}>
      <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
        <Image className="w-full h-full object-cover" src={img} alt={name} width={256} height={208} />
      </div>
      <h1 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-[#ffa23f]">{name}</h1>
      <h2 className="text-base sm:text-lg mb-1">{title}</h2>
      <h3 className="text-sm sm:text-base mb-2">{subtitle}</h3>
      <div className="flex text-pink cursor-pointer text-xl sm:text-2xl gap-3 sm:gap-4">
        <FaLinkedin className="hover:text-white" onClick={handleClick} />
        <FaFacebook className="hover:text-white" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Team_Card;
