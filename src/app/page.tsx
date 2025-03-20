import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Bar */}
      <header className="w-full p-4 border-b border-blue-900">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-1.5 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Fund</span>
              <ChevronRight className="h-4 w-4 rotate-90" />
            </div>
          </div>

          <div className="text-xl font-bold tracking-wider">
            FUND<span className="text-blue-500">CHAIN</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm hover:text-blue-400 transition"
            >
              About
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-sm font-medium transition">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Wave pattern at the bottom */}
          <div className="absolute bottom-0 w-full h-1/2">
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="w-full h-full opacity-20"
            >
              <defs>
                <radialGradient
                  id="dots"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <pattern
                id="dotPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#dotPattern)"
              />
            </svg>
          </div>
        </div>

        {/* Hands and Cubes Illustration */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center z-10 px-4">
          <div className="relative w-full h-[300px] md:h-[400px] mb-8">
            {/* Hands */}
            <div className="absolute w-full h-full flex justify-center">
              <div className="relative w-[600px] h-full">
                <Image
                  src="/landing/hands.jpg"
                  alt="Hands illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Cubes with Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center">
              <div className="relative w-[500px] h-full">
                {/* Medical/Plus Cube */}
                <div className="absolute left-[20%] top-[30%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                      <div className="text-black text-3xl font-bold">+</div>
                    </div>
                  </div>
                </div>

                {/* Education Cube */}
                <div className="absolute left-[40%] top-[10%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-10 h-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="white"
                          strokeWidth="2"
                          fill="white"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path d="M19 10V16" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Paw Print Cube */}
                <div className="absolute right-[20%] top-[30%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-10 h-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-full h-full"
                      >
                        <path d="M8 9C9.10457 9 10 7.65685 10 6C10 4.34315 9.10457 3 8 3C6.89543 3 6 4.34315 6 6C6 7.65685 6.89543 9 8 9Z" />
                        <path d="M16 9C17.1046 9 18 7.65685 18 6C18 4.34315 17.1046 3 16 3C14.8954 3 14 4.34315 14 6C14 7.65685 14.8954 9 16 9Z" />
                        <path d="M19 16C20.1046 16 21 14.6569 21 13C21 11.3431 20.1046 10 19 10C17.8954 10 17 11.3431 17 13C17 14.6569 17.8954 16 19 16Z" />
                        <path d="M5 16C6.10457 16 7 14.6569 7 13C7 11.3431 6.10457 10 5 10C3.89543 10 3 11.3431 3 13C3 14.6569 3.89543 16 5 16Z" />
                        <path d="M12 20C14.2091 20 16 18.2091 16 16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16C8 18.2091 9.79086 20 12 20Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Building Cube */}
                <div className="absolute left-[15%] bottom-[30%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-10 h-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path d="M3 21H21" stroke="white" strokeWidth="2" />
                        <path
                          d="M5 21V7L13 3V21"
                          stroke="white"
                          strokeWidth="2"
                          fill="white"
                          fillOpacity="0.8"
                        />
                        <path
                          d="M19 21V10L13 7"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 9H10"
                          stroke="#333"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 13H10"
                          stroke="#333"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 17H10"
                          stroke="#333"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16 13H17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16 17H17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bell Cube */}
                <div className="absolute right-[15%] bottom-[30%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-10 h-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                          stroke="white"
                          strokeWidth="2"
                          fill="#aaaaaa"
                        />
                        <path
                          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Person Cube */}
                <div className="absolute left-[40%] bottom-[10%]">
                  <div className="w-16 h-16 bg-gray-900/80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-10 h-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <circle
                          cx="12"
                          cy="8"
                          r="4"
                          stroke="#aaaaaa"
                          strokeWidth="2"
                          fill="#888888"
                        />
                        <path
                          d="M6 21V19C6 16.7909 8.23858 15 11 15H13C15.7614 15 18 16.7909 18 19V21"
                          stroke="#aaaaaa"
                          strokeWidth="2"
                          fill="#888888"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Button */}
            <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-medium transition flex items-center gap-2">
                Explore FundChain
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-2xl">
            <p className="text-xl md:text-2xl mb-4">
              A{" "}
              <span className="text-blue-500">
                transparent, secure, and decentralized
              </span>{" "}
              crowdfunding.
            </p>
            <p className="text-sm md:text-base text-gray-300">
              Our platform connects passionate change makers, innovators, and
              supporters, creating a trusted space where funding thrive and
              every contribution counts.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
