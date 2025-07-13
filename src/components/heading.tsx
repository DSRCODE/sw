import React from "react";

interface HeadingProps {
  title: string;
  description: string;
  maxWidth?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description, maxWidth }) => {
  return (
    <div className="text-center md:text-left">
      <p className="text-[#008AFF] md:text-lg text-[13px]">{title}</p>
      <h4
        className={`text-[#222D39] md:text-[46px] text-2xl md:leading-[50px] ${
          maxWidth ? maxWidth : "max-w-[518px]"
        } font-bold`}
      >
        {description}
      </h4>
    </div>
  );
};

export default Heading;