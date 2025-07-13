import { useState, useEffect } from "react";

const CommitmentCard = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    image: string;
    lists: string[];
  };
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAnimation = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      key={item.id}
      className="w-full md:h-[500px] h-[350px] overflow-hidden relative shadow-2xl group"
      onClick={toggleAnimation}
    >
      <img
        className={`h-full w-full absolute inset-0 object-cover duration-300 ease-in-out transition-all duration-500
          ${
            isActive && isMobile
              ? "translate-x-full translate-y-full scale-0"
              : ""
          } 
          group-hover:translate-x-full group-hover:translate-y-full group-hover:scale-0`}
        src={item.image}
        alt=""
      />

      <div className="absolute bg-gradient-to-br from-[#1C182A]/50 to-[#1C182A]/20 inset-0"></div>

      <div
        className={`relative h-[30%] transition-all duration-500 ease-in-out 
          ${isActive && isMobile ? "bg-[#1C182A]" : ""} 
          group-hover:bg-[#1C182A]`}
      >
        <h2 className="p-6 md:text-3xl text-2xl">{item.title}</h2>
      </div>

      <div
        className={`bg-[#1C182A] p-6 pt-0 relative h-[70%] transition-all duration-500 ease-in-out 
          ${isActive && isMobile ? "translate-x-0" : "translate-x-full"} 
          group-hover:translate-x-0`}
      >
        <ul className="text-start flex flex-col gap-2">
          {item.lists.map((listItem: string, i: number) => (
            <li className="text-sm md:text-base" key={i}>• {listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommitmentCard;
