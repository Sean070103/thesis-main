import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../components/ui/button';

export function ExploreProjects() {
  return (
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
                  <p className='text-lg font-medium'>Hi! I'm Jayjay</p>
                </div>
              </div>
              <div className='p-4 text-sm'>
                <p>
                  Jayjay is my wonder dog. Every morning, he sits quietly by his
                  bowl waiting for his breakfast. He's very smart and loves to
                  play fetch. He lost his rear leg in an accident, but that
                  doesn't slow him down. He runs and plays just like any other
                  dog.
                </p>
                <p className='mt-2'>
                  As a concerned citizen who has shared countless resources with
                  strays, I'm now collecting funds for a custom-made prosthetic
                  leg designed especially for dogs like Jayjay.
                </p>
              </div>
            </CardContent>
            <CardFooter className='flex justify-center border-t border-gray-700 p-4'>
              <Button className='bg-blue-600 hover:bg-blue-700'>DONATE</Button>
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
  );
}
