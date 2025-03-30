'use client';

import { Button } from '@/components/ui/button';
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
    </main>
  );
}
