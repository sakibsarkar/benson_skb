import { TelegramIcon, Xicon } from "@/utils/icons";

const Header = () => {
  return (
    <header>
      <div className="m-5 lg:m-0 lg:mt-[22px] max-w-[1148.75px] lg:mx-auto lg:h-[94px] bg-white rounded-[30px] p-3 lg:py-[23px] lg:px-[20px] border-[4px] border-action flex justify-between items-center relative left-[20px] top-[-1px]">
        <h1 className="text-[16px] lg:text-[32px] leading-normal">$BENSON</h1>
        <div className="flex gap-[10px] relative left-[6px] top-[-2px]">
          <a
            href="/"
            className="center h-[50px] w-[49.95px] rounded-[12px] bg-secondaryAction"
          >
            <TelegramIcon />
          </a>
          <a
            href="/"
            className="center h-[50px] w-[49.95px] rounded-[12px] bg-action"
          >
            <Xicon />
          </a>
          <a
            href="/"
            className="bg-action text-white h-[50px] px-2 lg:px-0 lg:w-[169.85px] text-[12px] lg:text-[24px] leading-normal center rounded-[12px]"
          >
            Buy $BENSON
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
