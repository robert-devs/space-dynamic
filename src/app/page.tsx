
import MainLayout from "@/components/layout";
import phone from "@/assets/images/iphone13.png";

import Image from "next/image";
import Link from "next/link";
import { AccentButton } from "@/components/ui/accent-button";


export default function Home() {
  return (
    <MainLayout>
      <main className="">

        {/* Hero section */}
        <div className="relative h-[508px] md:h-[780px] z-20 bg-[url(/hero-bg-2.png)] bg-top bg-bottom_ bg-cover bg-no-repeat">
          <div className="h-full bg-black/50">
            <div className="max-w-[1420px] h-full flex items-center mx-auto p-2">
              <div className="md:px-16 "> 
                <p className="uppercase text-primary-orange font-bold text-[20px]">welcome to space dynamic</p>
                <h1 className="hero-text-shadow text-[36px] md:text-[72px] font-[700] leading-[56px] md:leading-[80px] tracking-[0.2px]  text-white">
                  We make <span className="text-secondary-blue">Digital <br /> Ideal & <span className="text-primary-orange">SEO</span></span> Marketing
                </h1>
                <p className="text-[16px] md:text-[24px] font-[700] leading-[25.6px] md:leading-[36px] tracking-[0.2px] max-w-[263px] sm:max-w-[564px] text-white my-4" >
                  Your Gateway to a World of Delicious African Cuisine, Coming Soon.
                </p>

                <div className="w-full mt-8 sm:w-[425px] h-[64px] flex items-center p-2 bg-secondary-blue  rounded-full">
                  <input
                    type="text"
                    className="flex-1 w-full h-full border-none bg-secondary-blue rounded-full text-white placeholder:text-[16px] placeholder:opacity-40 outline-none px-4"
                    placeholder="Type your email"
                  />
                  <Link href={"/#early-access"} className="block h-full">
                    <AccentButton className="h-full px-4 md:px-8 bg-white text-primary-orange">Get in Early</AccentButton>
                  </Link>
                </div>
              </div>
              <Image
                    src={phone}
                    alt="phone"
                    className="object-cover  w-[372px] md:w-[867px] h-[297px] md:h-[615px]"
                />
            </div>

          </div>
        </div>

        <div className="relative z-10 w-full overflow-hidden">
          <svg className="absolute z-10 -top-[50%] w-full  left-0 xl:w[1419px]" viewBox="0 0 1419 1271" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.32" filter="url(#filter0_f_3_329)">
              <ellipse cx="437" cy="635.5" rx="502" ry="155.5" fill="#F36D4D" />
            </g>
            <defs>
              <filter id="filter0_f_3_329" x="-545" y="0" className="!w-full xl:w-[1964px]" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="240" result="effect1_foregroundBlur_3_329" />
              </filter>
            </defs>
          </svg>
        </div>
      </main> 
    </MainLayout>
  );
}
