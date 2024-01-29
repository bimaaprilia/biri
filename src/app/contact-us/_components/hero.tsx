import Image from 'next/image';
import ContactHero from 'public/contact-us/hero.jpg';

export function Hero() {
  return (
    <div className='relative grid h-screen w-full place-items-center px-4 [clip-path:inset(0_0_0_0)]'>
      <Image
        src={ContactHero}
        alt='Beautiful sea view'
        sizes='100vw'
        className='fixed inset-x-0 z-[-1] size-full object-cover object-top brightness-75'
        quality={100}
        priority
      />
      <div className=''>
        <h2 className='mb-20 text-center text-[2rem] uppercase tracking-wider text-white'>
          Contact Us
        </h2>
        <div className='space-y-12 text-center text-4xl uppercase !leading-[1.4] tracking-widest text-white md:text-5xl md:tracking-[0.4em]'>
          <h2>Hello</h2>
          <h2>We Are Biri World</h2>
        </div>
      </div>
    </div>
  );
}
