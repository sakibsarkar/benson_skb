import { Pangolin } from "next/font/google";
import Image from "next/image";

const pangolin = Pangolin({
  subsets: ["latin"],
  weight: "400",
});

const Note = () => {
  return (
    <section className="relative container flex flex-col items-center lg:mt-[225px]">
      <h1 className="text-[60px] leading-[65px] text-white">
        $BENSON Note to Anon Reader
      </h1>
      <div className="relative lg:mt-[107px]">
        <div className="absolute z-40 right-[-276px] bottom-[270px]">
          <Image src="/img/note-1.png" alt="mew 1" height="351" width="350" />
        </div>
        <div className="absolute left-[-201px] bottom-[84px] -z-10">
          <Image src="/img/note-2.png" alt="mew 2" height="300" width="300" />
        </div>{" "}
        <div className="absolute z-50 top-[-52px] left-[-6px] text-[128px] leading-[32px] text-action opacity-70">
          <img src="/img/paws.png" />
        </div>
        <div className="absolute z-50 right-[30px] bottom-[198px]  text-[128px] leading-[32px] text-action opacity-70">
          <img src="/img/paws.png" />
        </div>
        <div className="bg-cardPrm w-[572.70px] h-[444.07px] rounded-[10px] border-[4px] border-action shadow-lg shadow-action rotate-[-0.18deg] relative left-[-13px]" />
        <div
          className={`bg-cardPrm w-[575.486px] h-[453.02px] rounded-[10px] border-[4px] border-action ${pangolin.className} rotate-[-5.409deg] absolute left-1/2 translate-x-[-51%] top-0 flex flex-col items-center pt-14 shadow-xl shadow-action`}
        >
          <h3 className="text-[60px] leading-[65px]">Cat season is here!</h3>
          <p className="text-[35px] rotate-[5deg] text-center leading-[32px] mt-[68px]">
            Are you swift enough to get
            <br />
            #BASED with $BENSON?
          </p>
        </div>
        <div className="flex justify-center mt-[105px]">
          <button className="text-[24px] leading-normal rounded-[12px] py-[13px] w-[235px]  bg-action text-white relative top-[14px] left-[-6px]">
            Spread the word!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Note;
