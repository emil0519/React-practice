import down from "../img/down.png";

type HeaderButtonProps = {
  text: string;
  isDetails: boolean;
};

function HeaderButton({ text, isDetails }: HeaderButtonProps) {
  return (
    <div
      className={`${
        isDetails ? "cursor-pointer" : "cursor-default"
      } w-[max-content] h-[21px] flex items-center mr-[20px] mb-[17.5px] relative`}
    >
      <p className="text-[14px] mr-[1px]">{text}</p>
      {isDetails ? (
        <img src={down} alt="" className="w-[20px] h-[20px]"></img>
      ) : (
        ""
      )}
      <div className="w-[max-content] h-[max-content] bg-[white] flex absolute top-[30px]">
        <div className="h-[40px] cursor-pointer">男裝</div>
      </div>
    </div>
  );
}

export default HeaderButton;
