"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle wallet connection
  const connectWallet = () => {
    // In a real implementation, this would integrate with Web3 providers
    setWalletConnected(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,255,0.15)_0,_rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute inset-0 bg-black opacity-90">
          {/* Placeholder for dot pattern background */}
          <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-30"></div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left side - Search and Fund dropdown */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center bg-blue-900/50 rounded-md px-2 py-1">
                  <Search className="h-4 w-4 text-blue-400 mr-1" />
                  <Input
                    type="text"
                    placeholder="Search"
                    className="border-0 bg-transparent focus:ring-0 focus:outline-none text-white placeholder:text-gray-400 h-6 p-0 text-sm w-20"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchQuery(e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Fund Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white text-sm">
                  Fund
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  <span className="text-white">FUND</span>
                  <span className="text-blue-500">CHAIN</span>
                </span>
              </Link>
            </div>

            {/* Right side - About and Connect Wallet */}
            <div className="flex items-center gap-4">
              {/* About Link */}
              <Link href="#about" className="text-white text-sm">
                About
              </Link>

              {/* Connect Wallet Button */}
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 h-auto rounded-md"
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="relative w-full py-8 md:py-12 overflow-hidden flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center">
            {/* Hands with Cubes Illustration - Placeholder */}
            <div className="relative w-full max-w-3xl h-[400px] mb-8 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* This is a placeholder for the hands illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for hands */}
                  <div className="w-[80%] h-[80%] relative">
                    {/* Placeholder for cubes - you'll replace these with actual images */}
                    <div className="absolute top-[15%] left-[30%] w-[60px] h-[60px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>

                    <div className="absolute top-[15%] left-[45%] w-[60px] h-[60px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">➕</span>
                    </div>

                    <div className="absolute top-[15%] right-[30%] w-[60px] h-[60px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🐾</span>
                    </div>

                    <div className="absolute top-[35%] left-[25%] w-[60px] h-[60px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>

                    <div className="absolute top-[35%] right-[25%] w-[60px] h-[60px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔔</span>
                    </div>

                    {/* Placeholder for person in the middle */}
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>

                    {/* Explore Button */}
                    <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 h-auto rounded-full">
                        Explore FundChain
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center max-w-3xl">
              <h1 className="text-2xl md:text-3xl mb-4">
                A{" "}
                <span className="text-blue-500">
                  transparent, secure, and decentralized
                </span>{" "}
                crowdfunding.
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Our platform connects passionate change makers, innovators, and
                supporters, creating a trusted space where funding thrive and
                every contribution counts.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full max-w-4xl">
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <p className="text-white text-sm">
                  Every donation tracked on-chain
                </p>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <p className="text-white text-sm">
                  Instant withdrawals, no delays/middlemen
                </p>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <p className="text-white text-sm">
                  Full transparency with smart contract-powered donations
                </p>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
                <p className="text-white text-sm">Open and trusted</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                Empowering creators, charities & communities to thrive
              </Button>
            </div>
          </div>
        </section>

        {/* Explore Section - Placeholder for the second image */}
        <section id="explore" className="py-16 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-blue-500">EX</span>PLORE
              </h2>
              <p className="text-gray-300">
                Discover projects making a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for Jayy fundraiser */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,255,0.3)]">
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl">🐕</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Help Jayy Find a Home
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    Jayy is an adorable stray. He's extremely friendly and loves
                    people. He was found on the side of the road and needs
                    medical attention, food, and shelter.
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "34%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm mb-4">
                    <span>0.85 ETH raised</span>
                    <span>Goal: 2.5 ETH</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    DONATE
                  </Button>
                </div>
              </div>

              {/* Additional placeholder fundraisers */}
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Fundraiser Project
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Placeholder for fundraiser description.
                    </p>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm mb-4">
                      <span>ETH raised</span>
                      <span>Goal: ETH</span>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      DONATE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About FundChain</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fundraising on{" "}
                <span className="text-blue-500 font-bold">FUND</span>
                <span className="font-bold">CHAIN</span> is decentralized,
                secure, and transparent.
              </p>
              <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                Get the tools you need to make your fundraiser thrive on{" "}
                <span className="text-blue-500 font-bold">FUND</span>
                <span className="font-bold">CHAIN</span>, whether you're raising
                crypto funds for yourself, your community, or a global cause.
                With zero platform fees and blockchain-backed security,{" "}
                <span className="text-blue-500 font-bold">FUND</span>
                <span className="font-bold">CHAIN</span> is redefining
                crowdfunding—from humanitarian aid and medical relief to
                innovative projects and nonprofits. Wherever you need support,
                you can fund it here, on-chain.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-blue-950/20 to-black/0">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Fundraiser?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the blockchain revolution in crowdfunding and make your
              project a reality with FundChain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg">
                Create Campaign
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900/50 border-t border-gray-800 py-4 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} FundChain. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
