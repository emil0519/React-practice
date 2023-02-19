import { useEffect, useState } from "react";

interface HoverItemProps {
  eachInfo: string;
}

function HoverItem({ eachInfo }: HoverItemProps) {
  const [hoverOnItem, setHoverOnItem] = useState<boolean>(false);
  console.log(eachInfo);

  return (
    <div
      className={`${
        hoverOnItem ? "bg-[#222971]" : "bg-[white]"
      } h-[max-content] py-[3px] cursor-pointer min-w-[56px] rounded-md flex items-center justify-center ${
        hoverOnItem ? "text-[white]" : "text-[black]"
      }`}
      onMouseEnter={() => setHoverOnItem(true)}
      onMouseLeave={() => setHoverOnItem(false)}
    >
      <p>{eachInfo}</p>
    </div>
  );
}

export default HoverItem;
