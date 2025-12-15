import { FaArrowRight } from "react-icons/fa";

type Props = {
  onClick : () => void
}

const Arrow_Right = ({ onClick } : Props) => {
  return (
    <div
      className="w-11 h-11 border-2 border-[#ffa23f] rounded-full flex flex-shrink-0 justify-center items-center cursor-pointer group hover:bg-[#ffa23f] active:bg-[#ffa23f]"
      onClick={onClick}
    >
      <FaArrowRight className="text-[#ffa23f] group-hover:text-white text-base" />
    </div>
  );
};

export default Arrow_Right;