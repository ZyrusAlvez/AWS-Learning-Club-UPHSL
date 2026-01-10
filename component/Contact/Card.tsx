import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ title, subtitle, info } : {title: string, subtitle: string, info: string}) => {
  return (
    <div className="text-white flex flex-col items-center space-y-3 sm:space-y-4 min-w-[210px] max-w-[300px] px-4">
      <div className="text-[#ffa23f] text-[36px] sm:text-[48px] h-6 sm:h-[35px]"> 
        {title === "Email" ? (
          <MdOutlineEmail />
        ) : title === "Phone" ? (
          <BsTelephone />
        ) : (
          <IoLocationOutline />
        )}
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <h2 className="text-center text-sm sm:text-base">{subtitle}</h2>
      <h3 className="text-[#ffa23f] text-center text-sm sm:text-base break-words w-full">{info}</h3>
    </div>
  );
};

export default Card;