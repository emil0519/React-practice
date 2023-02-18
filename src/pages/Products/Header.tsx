import HeaderButton from "../../components/HeaderButton";
import logo from "../../img/logo.png";

function Header() {
  interface DropDownListType {
    name: string;
    dropDown: boolean;
    detailInfo?: any;
  }

  const dropDownList: DropDownListType[] = [
    { name: "商品分類", dropDown: true, detailInfo: ["男裝", "女裝", "配件"] },
    { name: "Latest Promotions", dropDown: false },
    { name: "Crayon Shinchan 15% off", dropDown: false },
    { name: "Best Sellers", dropDown: false },
    { name: "Our Videos", dropDown: false },
    { name: "Latest Promotions", dropDown: false },
    { name: "Crayon Shinchan 15% off", dropDown: false },
    { name: "Best Sellers", dropDown: false },
    { name: "Our Videos", dropDown: false },
  ];
  const dropDownListWithIds = dropDownList.map((item, index) => {
    return { ...item, id: index + 1 };
  });

  return (
    <main className="w-[100%] h-[144px] bg-[#c89186] flex flex-row">
      <img
        src={logo}
        alt=""
        className="w-[174px] h-[65px] mt-[17.5px] ml-[17px] bg-[white] px-[26px]"
      ></img>
      <div className="w-[56%] h-[max-content] mt-[67px] flex flex-wrap ml-[24px]">
        {dropDownListWithIds.map((info) => (
          <HeaderButton
            text={info.name}
            isDetails={info.dropDown}
            key={info.id}
          />
        ))}
      </div>
    </main>
  );
}

export default Header;
