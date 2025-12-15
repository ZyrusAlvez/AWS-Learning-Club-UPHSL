import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ title, subtitle, info } : {title: string, subtitle: string, info: string}) => {
  return (
    <div className="text-white flex flex-col items-center space-y-6 w-[350px]">
      <div className="text-[#ffa23f] text-[48px]"> 
        {title === "Email" ? (
          <MdOutlineEmail />
        ) : title === "Phone" ? (
          <BsTelephone />
        ) : (
          <IoLocationOutline />
        )}
      </div>
      <h1 className="font-bold text-[32px]">{title}</h1>
      <h2>{subtitle}</h2>
      <h3 className="text-[#ffa23f] underline text-center">{info}</h3>
    </div>
  );
};

export default Card;