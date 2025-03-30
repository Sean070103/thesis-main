'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='relative overflow-hidden py-20'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-black'></div>
          <div className="absolute inset-0 bg-[url('/dot-pattern.png')] bg-repeat opacity-30"></div>
        </div>

        <div className='container relative z-10 mx-auto px-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative mx-auto mb-12 flex max-w-4xl justify-center'>
              <div className='absolute -z-10 h-[400px] w-full'>
                <div className='relative h-full w-full'>
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Image
                      src='/placeholder.svg?height=400&width=800'
                      alt='Blockchain hands illustration'
                      width={800}
                      height={400}
                      className='opacity-70'
                    />
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-8'>
                <div className='flex flex-col items-center'>
                  <div className='mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm'>
                    <div className='h-16 w-16 rounded-md bg-blue-900/50'>
                      <div className='flex h-full w-full items-center justify-center text-3xl'>
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm'>
                    <div className='h-16 w-16 rounded-md bg-blue-900/50'>
                      <div className='flex h-full w-full items-center justify-center text-3xl'>
                        🎓
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='mb-4 flex h-24 w-24 items-center justify-center rounded-md bg-blue-900/30 backdrop-blur-sm'>
                    <div className='h-16 w-16 rounded-md bg-blue-900/50'>
                      <div className='flex h-full w-full items-center justify-center text-3xl'>
                        🐾
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant='default'
              className='mb-12 bg-blue-600 px-6 py-2 text-white hover:bg-blue-700'
            >
              Explore FundChain →
            </Button>

            <div className='text-center'>
              <h1 className='mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>
                A{' '}
                <span className='text-blue-500'>
                  transparent, secure, and decentralized
                </span>{' '}
                crowdfunding.
              </h1>
              <p className='mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl'>
                Our platform connects passionate change makers, innovators, and
                supporters, creating a trusted space where funding thrive and
                every contribution counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Button
              variant='outline'
              className='h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30'
            >
              <span className='block text-lg font-medium'>
                Every donation tracked on-chain
              </span>
            </Button>

            <Button
              variant='outline'
              className='h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30'
            >
              <span className='block text-lg font-medium'>
                Instant withdrawals, no delays/ middlemen
              </span>
            </Button>

            <Button
              variant='outline'
              className='h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30'
            >
              <span className='block text-lg font-medium'>
                Full transparency with smart contract-powered donations
              </span>
            </Button>

            <Button
              variant='outline'
              className='h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30'
            >
              <span className='block text-lg font-medium'>
                Open and trusted
              </span>
            </Button>
          </div>

          <div className='mt-4'>
            <Button
              variant='outline'
              className='h-auto w-full border-blue-600 bg-blue-900/20 p-4 text-center hover:bg-blue-900/30'
            >
              <span className='block text-lg font-medium'>
                Empowering creators, charities & communities to thrive
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-5xl font-bold text-blue-500'>
            EXPLORE
          </h2>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='overflow-hidden bg-gray-800 text-white'>
              <CardContent className='p-0'>
                <div className='relative'>
                  <Image
                    src='/placeholder.svg?height=200&width=400'
                    alt='Dog named Jayjay'
                    width={400}
                    height={200}
                    className='h-48 w-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                    <p className='text-lg font-medium'>{`Hi! I'm Jayjay`}</p>
                  </div>
                </div>
                <div className='p-4 text-sm'>
                  <p>
                    {`Jayjay is my wonder dog. Every morning, he sits quietly by
                    his bowl waiting for his breakfast. He's very smart and
                    loves to play fetch. He lost his rear leg in an accident,
                    but that doesn't slow him down. He runs and plays just like
                    any other dog.`}
                  </p>
                  <p className='mt-2'>
                    {`As a concerned citizen who has shared countless resources
                    with strays, I'm now collecting funds for a custom-made
                    prosthetic leg designed especially for dogs like Jayjay.`}
                  </p>
                </div>
              </CardContent>
              <CardFooter className='flex justify-center border-t border-gray-700 p-4'>
                <Button className='bg-blue-600 hover:bg-blue-700'>
                  DONATE
                </Button>
              </CardFooter>
            </Card>

            {/* Placeholder cards */}
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className='overflow-hidden bg-gray-800 text-white'>
                <CardContent className='p-0'>
                  <div className='h-48 w-full bg-gray-700'></div>
                  <div className='p-4'>
                    <p className='text-sm'>Project description placeholder</p>
                  </div>
                </CardContent>
                <CardFooter className='flex justify-center border-t border-gray-700 p-4'>
                  <Button className='bg-blue-600 hover:bg-blue-700'>
                    DONATE
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
