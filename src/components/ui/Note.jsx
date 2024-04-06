import { Pangolin } from "next/font/google";
import Image from "next/image";

const pangolin = Pangolin({
  subsets: ["latin"],
  weight: "400",
});

const Note = () => {
  return (
    <section className="relative container flex flex-col items-center mt-[100px] lg:mt-[225px]">
      <h1 className="text-[40px] text-center lg:text-[30px] md:text-[40px] lg:text-[60px] text-center leading-[65px] text-white">
        $BENSON Note to Anon Reader
      </h1>
      <div className="relative mt-[107px] ">
        <div className="hidden md:flex absolute z-40 right-[-100px]  lg:right-[-276px] bottom-[270px]">
          <Image
            src="/img/note-1.png"
            alt="mew 1"
            height="351"
            width="350"
            className="w-[150px] h-[150px] lg:h-[351px] lg:w-[350px]"
          />
        </div>
        <div className="hidden md:flex absolute left-[-111px] lg:left-[-201px] bottom-[90px] -z-10">
          <Image
            src="/img/note-2.png"
            alt="mew 2"
            height="300"
            width="300"
            className="w-[200px] h-[200px] lg:h-[300px] lg:w-[300px]"
          />
        </div>{" "}
        <div className="absolute z-50 top-[11px] lg:top-[-52px] left-[-6px] text-[128px] leading-[32px] text-action opacity-70">
          <Image
            src="/img/paws.png"
            width={128}
            height={131}
            className="w-[48px] h-[50px] lg:w-[128px] lg:h-[131px] "
          />
        </div>
        <div className="absolute z-50 right-[30px] bottom-[198px]  text-[128px] leading-[32px] text-action opacity-70">
          <Image
            src="/img/paws.png"
            width={128}
            height={131}
            className="w-[48px] h-[50px] lg:w-[128px] lg:h-[131px] "
          />
        </div>
        <div className="bg-cardPrm w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] lg:w-[572.70px] lg:h-[444.07px] rounded-[10px] border-[4px] border-action shadow-lg shadow-action rotate-[-0.18deg] relative left-[-13px]" />
        <div
          className={`bg-cardPrm w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] lg:w-[575.486px] lg:h-[453.02px] rounded-[10px] border-[4px] border-action ${pangolin.className} rotate-[-5.409deg] absolute left-1/2 translate-x-[-51%] top-0 flex flex-col items-center py-[10px] lg:pt-14 shadow-xl shadow-action`}
        >
          <h3 className="text-[30px] lg:text-[60px] leading-[65px]">
            Cat season is here!
          </h3>
          <p className="text-[20px] lg:text-[35px] rotate-[5deg] text-center leading-[32px] mt-[20px] lg:mt-[68px]">
            Are you swift enough to get
            <br />
            #BASED with $BENSON?
          </p>
        </div>
        <div className="flex justify-center mt-[105px]">
          <button className="text-[24px] leading-normal rounded-[12px] py-[13px] w-[235px]  bg-action text-white relative top-[8px] left-[-6px]">
            Spread the word!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Note;
