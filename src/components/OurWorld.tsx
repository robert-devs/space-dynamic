import features from "@/data/features.json";
import Image from "next/image";

const InOurWords = () => {
  return (
    <div  className=" flex items-center justify-center h-[508px] md:h-[780px] z-20 bg-[url(/about-bg.png)] bg-top bg-bottom_ bg-cover bg-no-repeat ">
        <div className="max-w-[1420px] mx-auto gap-5 flex justify-between  py-10">
            <div className="flex  items-center justify-center">
                <Image
                        src="/about-left-image.png"
                        alt="phone"
                        width={200}
                        height={200}
                        className="object-contain  w-[3px] md:w-[250px] h-[297px] md:h-[305px] mr-5"
                    />
                <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 gap-5 ">
                    {
                    features?.map((item, idx) => (
                        <div className="overflow-hidden   px-4 gap-8 py-6  flex justify-center items-center rounded-lg" key={idx}>
                            <div className="rounded-full flex items-center justify-center bg-white  p-4">
                                {item?.image === "/Authentication.svg" ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 38 38" fill="none">
                                <g clipPath="url(#clip0_530_7263)">
                                    <path d="M1.1159 6.99445C1.73056 6.99445 2.22888 6.49614 2.22888 5.88148V2.22595H5.88441C7.35955 2.17119 7.35843 0.054239 5.88441 0H1.1159C0.501246 0 0.00292969 0.498316 0.00292969 1.11297V5.88148C0.00292969 6.49614 0.501246 6.99445 1.1159 6.99445Z" fill="white" />
                                    <path d="M17.8071 2.22595H21.4626V5.88148C21.5174 7.35662 23.6343 7.3555 23.6886 5.88148V1.11297C23.6886 0.498316 23.1903 0 22.5756 0H17.8071C16.332 0.0547584 16.3331 2.17171 17.8071 2.22595Z" fill="white" />
                                    <path d="M28.5366 19.0739C26.7658 19.0739 25.1075 19.5635 23.689 20.4137V17.8026C23.6342 16.3275 21.5173 16.3286 21.463 17.8026V21.4582H20.3257C18.8155 19.9114 16.9073 18.805 14.8147 18.262C21.5905 15.0805 19.4374 4.84879 11.8468 4.76843C4.25852 4.84894 2.10388 15.076 8.87433 18.2597C6.7533 18.81 4.86183 19.9354 3.37571 21.4581H2.23083V17.8026C2.17607 16.3274 0.0591218 16.3285 0.00488281 17.8026V22.5711C0.00488281 23.1858 0.503199 23.6841 1.11786 23.6841H1.66477C0.611157 25.4537 0.00488281 27.5191 0.00488281 29.7238V36.8766C0.00488281 37.4912 0.503199 37.9895 1.11786 37.9895H22.576C23.1907 37.9895 23.689 37.4912 23.689 36.8766V36.6497C29.8041 40.4426 38.0968 35.7717 37.9944 28.5316C37.9944 23.3167 33.7516 19.0739 28.5366 19.0739ZM6.99926 11.8421C6.99926 9.16913 9.17394 6.99446 11.8469 6.99446C18.2691 7.2382 18.2672 16.447 11.8468 16.6897C9.17394 16.6897 6.99926 14.515 6.99926 11.8421ZM21.463 35.7636H2.23083V29.7238C2.23083 27.4379 3.03314 25.3361 4.37019 23.6842H5.88636C6.94784 23.6831 7.39674 22.3282 6.56646 21.6916C9.57038 19.6077 14.0896 19.5941 17.1281 21.6911C16.2966 22.3278 16.7463 23.6832 17.8075 23.6842H19.3287C19.5521 23.9605 19.7623 24.2497 19.9559 24.5527C18.3736 27.8852 18.9804 32.0813 21.463 34.8078V35.7636H21.463ZM28.5366 35.7636C24.549 35.7636 21.3048 32.5193 21.3048 28.5317C21.6683 18.9508 35.4063 18.9534 35.7685 28.5318C35.7685 32.5193 32.5242 35.7636 28.5366 35.7636Z" fill="white" />
                                    <path d="M31.326 25.9566L27.9405 29.342L26.3433 27.7448C25.9087 27.3101 25.204 27.3101 24.7693 27.7448C24.3347 28.1793 24.3347 28.8841 24.7693 29.3187L27.1536 31.703C27.568 32.1341 28.3131 32.1342 28.7275 31.703L32.8999 27.5306C33.3346 27.096 33.3346 26.3913 32.8999 25.9566C32.4653 25.522 31.7605 25.522 31.326 25.9566Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_530_7263">
                                    <rect width="38" height="38" fill="currentColor" className="text-primary-orange" />
                                    </clipPath>
                                </defs>
                                </svg> :
                                <Image
                                    width={200}
                                    height={200}
                                    src={item?.image}
                                    alt={item.heading}
                                    className="!w-full !h-[60px] object-cover text-black "
                                />
                                }
                            </div>


                            <div className="flex flex-col">
                                <h3 className="text-white  text-[14px] md:text-[24px] font-[700] leading=[22.4px] md:leading-[36px] ">{item?.heading}</h3>
                                <p className="text-white text-[12px] text-left md:text-[16px] font-[500] leading-[19.2px] md:leading-[28px] w-full md:w-[300px]  opacity-0.6">
                                    {item.summary}
                                </p>
                            </div>

                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    </div >

  );
};

export default InOurWords;