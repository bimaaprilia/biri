import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import GirlDance from 'public/girl-dance.png';

export function Welcome() {
  return (
    <section
      id='welcome'
      className='relative bg-[linear-gradient(to_bottom,#010133_50%,#2e04e9_100%)] py-20 text-white'
    >
      <div className='z-10 mx-auto w-[min(1140px,90%)]'>
        <h3 className='mb-20 text-center text-3xl uppercase tracking-widest'>
          OM SWASTIASTU –{' '}
          <span className='text-yellow-500'>WELCOME TO BIRI WORLD</span>
        </h3>
        <p className='relative z-[1] w-full text-start font-volkhov text-xl italic !leading-[1.7] sm:text-justify sm:text-2xl lg:w-3/4'>
          Bali International Research Institute for the World (BiriWorld) is an
          independent research institute dedicated to: (i) enhancing society’s
          understanding of environmental sustainability, (ii) education, and
          (iii) conservation. We are passionately committed to realizing a world
          of citizen science and providing a hub where local/indigenous
          innovation and international collaboration meet. Advancing research to
          tackle pressing challenges of these three domains forms the core of
          BIRI, in addition to introducing scientific practices to meet local
          ecosystem needs.
        </p>
        <div className='mt-4 flex justify-center'>
          <Link
            href='/#vision'
            className='inline-block transition-colors hover:opacity-60'
          >
            <ChevronDownIcon className='size-6' />
          </Link>
        </div>
      </div>
      <Image
        src={GirlDance}
        alt='Girl Dancing'
        width='0'
        height='0'
        sizes='100vw'
        placeholder='blur'
        className='absolute bottom-0 right-0 hidden lg:block'
        quality={100}
      />
    </section>
  );
}
