import logoLg from "@/assets/images/logo-lg.svg";
import Image from "next/image";
import Link from "next/link";
import ScrollTopArrow from "../ScrollTopArrow";
import { AccentButton } from "../ui/accent-button";

const Footer = () => {
	return (
		<div className="bg-[#262239]">
			<div className="max-w-[1420px] py-[36px] mx-auto p-4 relative">

				{/* Footer top columns */}
				<div className="flex flex-wrap justify-between gap-12 md:gap-4">
					<div className="w-full md:w-auto flex justify-center">
						<Image src={logoLg} height={20} width={60} className="!w-[50px] md:!w-[100px]" alt="Logo" />
					</div>
					<div className="flex flex-col text-white gap-4">
						<h3 className="text-[24px] font-[700] leading-[36px] tracking-[0.2px] text-white">Get in Touch</h3>

						<p className="flex items-center font-[700] leading-[22.4px] gap-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<g clipPath="url(#clip0_541_9237)">
									<path d="M12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0ZM17.4063 6.66667L11.9956 10.9442L6.40878 6.66667H17.4063ZM17.963 17.3333H5.85189V8.47322L11.4346 12.7077C11.5842 12.8221 11.8057 12.8793 11.9842 12.8793C12.167 12.8793 12.3257 12.8193 12.477 12.6998L17.963 8.33578V17.3333Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_541_9237">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>info@hoppn.app</span>
						</p>

						<p className="flex items-center gap-4  font-[700] leading-[22.4px] gap-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<g clipPath="url(#clip0_541_9242)">
									<path d="M20.4853 3.51471C18.2188 1.24823 15.2053 0 12 0C8.79474 0 5.78119 1.24823 3.51471 3.51471C1.24823 5.78137 0 8.79474 0 12C0 15.2053 1.24823 18.2188 3.51471 20.4853C5.78119 22.7518 8.79474 24 12 24C15.2053 24 18.2186 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2054 24 12C24 8.79474 22.7518 5.78119 20.4853 3.51471ZM18.6389 17.0063C18.6383 17.0068 18.6378 17.0074 18.6372 17.0079L18.1648 17.4803C17.7675 17.8777 17.4371 18.208 17.425 18.2199C16.8267 18.8183 15.9765 19.136 14.9687 19.136C12.9311 19.136 10.3625 17.8328 8.26483 15.7354C6.76208 14.2326 5.65814 12.4955 5.15643 10.8441C4.60858 9.04083 4.83105 7.5238 5.78284 6.5722C5.79254 6.5625 6.04138 6.31348 6.36566 5.98938L6.98199 5.37286C6.98712 5.36774 6.99207 5.36261 6.99738 5.35748C7.37457 4.98303 7.87482 4.77686 8.40656 4.77686C8.94012 4.77686 9.44202 4.9845 9.81976 5.36133C9.82214 5.36371 9.82452 5.36627 9.8269 5.36865L11.1691 6.71082C11.547 7.08875 11.755 7.591 11.755 8.12531C11.755 8.65668 11.5494 9.15619 11.1757 9.5332C11.1731 9.53577 11.1705 9.53833 11.1678 9.54108L10.4537 10.2554L13.7433 13.545L14.4575 12.8306C14.46 12.828 14.4626 12.8254 14.4653 12.8229C14.8423 12.4493 15.3422 12.2435 15.8732 12.2435C16.4075 12.2435 16.9098 12.4517 17.2875 12.8295L18.6317 14.1735C18.6335 14.1753 18.6356 14.1773 18.6372 14.179C18.6412 14.183 18.6451 14.1868 18.6489 14.1909C18.6535 14.1956 18.6583 14.2009 18.663 14.2062C19.4156 14.9872 19.4073 16.236 18.6389 17.0063Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_541_9242">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>0903 706 4426</span>
						</p>
					</div>

					<div className="flex flex-col text-white gap-4 my-5 md:my-0">
						<h3 className="text-[24px] font-[700] leading-[36px] tracking-[0.2px] text-white">Our Cities</h3>

						<div className="grid grid-cols-2 gap-x-3 gap-y-6">
							<p className="text-white leading-[22.6px] tracking-[0.2px]">Dallas</p>
							<p className="text-white leading-[22.6px] tracking-[0.2px]">Minneapolis/St. Paul</p>
							<p className="text-white leading-[22.6px] tracking-[0.2px]">Baltimore</p>
						</div>
					</div>

					<div>
						<h3 className="text-[36px] font-[700] leading-[54px] tracking-[0.2px] text-white">Get Early Access</h3>

						<div className="flex flex-wrap_ items-center gap-4 mt-6">

							<Link href="/vendor-registration" className="flex-1">
								<AccentButton className="bg-transparent border text-sm px-4 whitespace-nowrap w-full border-secondary-blue text-secondary-blue">Become a vendor</AccentButton>
							</Link>
						</div>
					</div>
				</div>



				<hr className="border-[#565365] opacity-30 border-[1px] my-5" />

				<div className="flex flex-col-reverse justify-between gap-6 text-white md:flex-row">
					<p className="text-center md:text-left ">
						2023 © Hoppn Technologies LLC/All Rights Reserved.
					</p>

					<div className="flex justify-center items-center gap-3">
						<Link href="https://facebook.com/hoppnlife" target="_blank"> {/* Facebook */}
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<g clipPath="url(#clip0_566_992)">
									<path d="M32 16C32 23.9862 26.1488 30.6056 18.5 31.8056V20.625H22.2281L22.9375 16H18.5V12.9987C18.5 11.7331 19.12 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5431 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C5.85125 30.6056 0 23.9862 0 16C0 7.16375 7.16375 0 16 0C24.8363 0 32 7.16375 32 16Z" fill="white" />
									<path d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7334 19.1199 10.5 21.1074 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8887 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.3146 31.9334 15.1495 32 16 32C16.8505 32 17.6854 31.9334 18.5 31.8056V20.625H22.2281Z" fill="#262239" />
								</g>
								<defs>
									<clipPath id="clip0_566_992">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>

						</Link>
						<Link href="https://instagram.com/hoppnlife" target="_blank"> {/* Instagram */}
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<g clipPath="url(#clip0_566_997)">
									<path d="M22.467 0H9.53297C4.27647 0 0 4.27647 0 9.53297V22.467C0 27.7235 4.27647 32 9.53297 32H22.467C27.7235 32 32 27.7235 32 22.467V9.53297C31.9999 4.27647 27.7235 0 22.467 0ZM28.7808 22.467C28.7808 25.954 25.954 28.7808 22.467 28.7808H9.53297C6.046 28.7808 3.2192 25.954 3.2192 22.467V9.53297C3.2192 6.04594 6.046 3.2192 9.53297 3.2192H22.467C25.954 3.2192 28.7808 6.04594 28.7808 9.53297V22.467Z" fill="white" />
									<path d="M16 7.72363C11.4364 7.72363 7.72363 11.4364 7.72363 15.9999C7.72363 20.5634 11.4364 24.2763 16 24.2763C20.5636 24.2763 24.2763 20.5635 24.2763 15.9999C24.2763 11.4363 20.5636 7.72363 16 7.72363ZM16 21.0571C13.207 21.0571 10.9428 18.793 10.9428 16C10.9428 13.207 13.207 10.9428 16 10.9428C18.793 10.9428 21.0571 13.207 21.0571 16C21.0571 18.7929 18.7929 21.0571 16 21.0571Z" fill="white" />
									<path d="M24.2928 9.7691C25.388 9.7691 26.2759 8.8812 26.2759 7.78592C26.2759 6.69064 25.388 5.80273 24.2928 5.80273C23.1975 5.80273 22.3096 6.69064 22.3096 7.78592C22.3096 8.8812 23.1975 9.7691 24.2928 9.7691Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_566_997">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>

						</Link>
						<Link href="https://twitter.com/hoppnlife" target="_blank"> {/* Twitter */}
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<g clipPath="url(#clip0_566_1003)">
									<path d="M31.4801 15.9983C31.4801 24.5487 24.5487 31.4801 15.9983 31.4801C7.44801 31.4801 0.516602 24.5487 0.516602 15.9983C0.516602 7.44801 7.44801 0.516602 15.9983 0.516602C24.5487 0.516602 31.4801 7.44801 31.4801 15.9983Z" fill="#262239" stroke="white" strokeMiterlimit="10" />
									<path d="M6.15293 6.73877L13.7935 16.9527L6.10645 25.2607H7.83644L14.5672 17.9887L20.0062 25.2607H25.8935L17.8246 14.4723L24.9804 6.73877H23.2504L17.0509 13.4363L12.0436 6.73877H6.15293ZM8.69978 8.01385H11.4027L23.3467 23.9856H20.6404L8.69978 8.01385Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_566_1003">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>
				</div>
				<ScrollTopArrow />
			</div>

		</div>
	);
};

export default Footer;