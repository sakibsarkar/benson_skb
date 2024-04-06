const Token = () => {
  return (
    <section className="container mt-[50px] md:mt-[100px] lg:mt-[460px]">
      <h1 className="text-white text-center text-[40px] lg:text-[60px] leading-[58px]">
        Based Benson&apos;s <br />
        Tokenomics
      </h1>
      <div className="mt-[64px] bg-white rounded-[40px] max-w-[985px]  border-[4px] border-action lg:pt-[93px] lg:pb-[94px] min-h-[611px] lg:max-h-[611px] lg:px-[88px] lg:relative top-[-10px] left-[5px] w-[90%] mx-auto justify-center lg:justify-normal px-[20px] py-[20px]">
        <div className="grid grid-cols-[repeat(1,100%)] md:grid-cols-[repeat(2,48%)] sm:grid-cols-[repeat(2,300)] lg:grid-cols-[repeat(2,390px)] gap-x-[30px] gap-y-[27px] left-[-5px] top-[-4px] relative w-full">
          <div className="bg-primary h-[200px] text-white p-[20px] lg:px-[56px] lg:py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
            <h1 className=" text-center text-[48px] leading-[58px]">
              Total Supply
            </h1>
            <p className="text-[32px]  text-centerleading-[58px]">
              500,000,000
            </p>
          </div>
          <div className="bg-primary h-[200px] text-white p-[20px] lg:px-[56px] lg:py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
            <h1 className=" text-center text-[48px] leading-[58px]">100% LP</h1>
            <h1 className="text-[48px] text-center leading-[58px]">
              0% Presale
            </h1>
          </div>
          <div className="bg-primary h-[200px] text-white p-[20px] lg:px-[56px] lg:py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
            <h1 className=" text-center text-[48px] leading-[58px]">
              LP Burned
            </h1>
            <h1 className="text-[48px] text-center leading-[58px]">
              At Launch
            </h1>
          </div>
          <div className="bg-primary h-[200px] text-white p-[20px] lg:px-[56px] lg:py-[42px] border-[4px] border-action rounded-[30px] flex flex-col items-center justify-center">
            <h1 className=" text-center text-[48px] leading-[58px]">
              Ownership
            </h1>
            <h1 className="text-[48px] text-center leading-[58px]">Revoked</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[64px] lg:relative left-[4px] top-[-9px]">
        <button className="pt-[13px] pb-[17px] min-w-[235px] text-[24px] leading-normal rounded-[12px] bg-action text-white">
          See the Charts
        </button>
      </div>
    </section>
  );
};

export default Token;
