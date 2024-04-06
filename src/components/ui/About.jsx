import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col items-center lg:mt-[185px] sm:mt-[50px] pt-[43px] pb-[46.68px] lg:px-[275px] px-[20px] relative">
      <h1 className="text-[30px] md:text-[40px] lg:text-[60px] text-center leading-[65px] text-white">
        What is $BENSON?
      </h1>
      <div className="bg-white border-[4px] border-action rounded-[40px] pl-[43px] pr-[43.52px] pt-[13px] pb-[12.92px] text-[20px] leading-[32px] text-center mt-[67px] mb-[67px] box-content">
        <p className="mx-w-[711px]">
          Olivia Benson, Taylor Swifts adopted Scottish Fold cat and the SECOND
          richest cat in the world with a net worth of $97 million dollars is
          now on Base, but there’s one problem..
        </p>
        <br />
        <p>Nala, the richest cat, stands in the way.</p>
      </div>
      <button className="text-[24px] leading-normal rounded-[12px] lg:w-[208px] p-5 lg:p-0 lg:h-[68px] bg-action text-white relative top-[-3px]">
        Buy $BENSON
      </button>
      <div className="hidden md:flex absolute lg:right-[-60px] lg:bottom-[40px] right-[0] bottom-0">
        <Image
          src="/img/about.png"
          alt="About Benson"
          className="lg:w-[351px] lg:h-[350px] w-[200px] h-[200px]"
          height="350"
          width="351"
        />
      </div>
    </section>
  );
};

export default About;
