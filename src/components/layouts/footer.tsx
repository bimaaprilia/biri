import Image from 'next/image';
import FooterLogo from 'public/footer-logo.png';

export function Footer() {
  return (
    <>
      <section className='bg-[linear-gradient(to_bottom,#010133_50%,#2e04e9_100%)] py-16'>
        <div className='mx-auto grid w-[min(1140px,90%)] grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-[1fr,3fr] lg:gap-x-32'>
          <div className='space-y-4'>
            <h2 className='border-b border-dotted py-2 uppercase tracking-widest text-white'>
              About Biri World
            </h2>
            <p className='font-light text-white'>
              We are passionately committed to realizing a world of citizen
              science and providing a hub where local/indigenous innovation and
              international collaboration meet. Advancing research to tackle
              pressing challenges of these three domains forms the core of BIRI,
              in addition to introducing scientific practices to meet local
              ecosystem needs.
            </p>
            <p className='font-light text-white'>Phone: +62 817 16 1930</p>
            <p className='font-light text-white'>Email: info@biriworld.com</p>
          </div>
          <div className=''>
            <Image
              src={FooterLogo}
              alt='Biri Logo'
              width='0'
              height='0'
              sizes='100vw'
              placeholder='blur'
              className='mx-auto h-auto w-full max-w-[500px] object-cover'
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className='bg-[linear-gradient(to_bottom,#010133_50%,#2e04e9_100%)] py-2'>
        <div className='mx-auto grid w-[min(1140px,90%)]'>
          <p className='text-sm tracking-widest text-white'>
            <span className='text-white/70'>
              ©{new Date().getFullYear()} BIRI WORLD
            </span>
            , ALL RIGHTS RESERVED
          </p>
        </div>
      </section>
    </>
  );
}
