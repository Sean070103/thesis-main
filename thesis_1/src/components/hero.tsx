import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-black"></div>
        <div className="absolute inset-0 bg-[url('/dot-pattern.png')] bg-repeat opacity-30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="relative mx-auto mb-12 flex max-w-4xl justify-center">
            <div className="absolute -z-10 h-[400px] w-full">
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Blockchain hands illustration"
                    width={800}
                    height={400}
                    className="opacity-70"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm">
                  <div className="h-16 w-16 rounded-md bg-blue-900/50">
                    <div className="flex h-full w-full items-center justify-center text-3xl">
                      +
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm">
                  <div className="h-16 w-16 rounded-md bg-blue-900/50">
                    <div className="flex h-full w-full items-center justify-center text-3xl">
                      🎓
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm">
                  <div className="h-16 w-16 rounded-md bg-blue-900/50">
                    <div className="flex h-full w-full items-center justify-center text-3xl">
                      🐾
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="default"
            className="mb-12 bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Explore FundChain →
          </Button>

          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A{" "}
              <span className="text-blue-500">
                transparent, secure, and decentralized
              </span>{" "}
              crowdfunding.
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
              Our platform connects passionate change makers, innovators, and
              supporters, creating a trusted space where funding thrive and
              every contribution counts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
