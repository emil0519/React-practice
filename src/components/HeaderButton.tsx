import { useEffect, useState } from "react";
import down from "../img/down.png";
import HoverItem from "./HoverItem";

type HeaderButtonProps = {
  text: string;
  isDetails: boolean;
  detailInfo?: string[];
};

function HeaderButton({ text, isDetails, detailInfo }: HeaderButtonProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="h-[max-content]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${
          isDetails ? "cursor-pointer" : "cursor-default"
        } w-[max-content] h-[max-content] flex items-center mr-[20px] mb-[17.5px] relative`}
      >
        <p className="text-[14px] mr-[1px]">{text}</p>
        {isDetails ? (
          <img src={down} alt="" className="w-[20px] h-[20px]"></img>
        ) : (
          ""
        )}

        {detailInfo && hover ? (
          <div
            className={`w-[max-content] h-[400px] bg-[white] flex flex-col absolute z-2 top-[30px] z-[10] rounded-md `}
          >
            {detailInfo.map((info) => (
              <HoverItem eachInfo={info} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HeaderButton;
