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
    <div className={`w-64 flex flex-col text-white ${className || ""}`}>
      <div className="w-64 h-52 overflow-hidden rounded-lg mb-6">
        <Image className="w-full h-full object-cover" src={img} alt={name} width={256} height={208} />
      </div>
      <h1 className="font-bold text-xl mb-2">{name}</h1>
      <h2 className="text-lg mb-4">{title}</h2>
      <h3 className="mb-6">{subtitle}</h3>
      <div className="flex text-pink cursor-pointer text-2xl gap-4">
        <FaLinkedin className="hover:text-white" onClick={handleClick} />
        <FaFacebook className="hover:text-white" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Team_Card;
