import Image from 'next/image';
import LsiiLogo from 'public/contact-us/lsii.png';
import Sarah from 'public/contact-us/sarah.jpg';

export function Collaborate() {
  return (
    <section className='pb-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-16 bg-[#800101] p-4 text-center text-3xl uppercase tracking-widest text-white sm:text-4xl md:text-5xl'>
          SOUNDS INTERESTING? LET’S COLLABORATE AND WORK TOGETHER…
        </h2>

        <div className='mb-6 grid grid-cols-1 gap-12 md:grid-cols-2'>
          <Image
            src={Sarah}
            alt=''
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <div className=''>
            <h3 className='text-center text-[2rem] font-bold uppercase tracking-widest md:text-start'>
              SARAH ROSETTA AURELIA
            </h3>
            <p className='mb-8 text-center text-[2rem] uppercase tracking-widest md:text-start'>
              (Founder)
            </p>
            <p className='text-start font-volkhov italic leading-[2] text-foreground/80 sm:text-justify'>
              Sarah Rosetta Aurelia is currently completing her final year of
              obtaining a BSc Neuroscience (Honours) at the University of St
              Andrews, United Kingdom. Sarah is extremely enthusiastic in
              deepening her knowledge on Artificial Intelligence (AI),
              psychology, healthcare, life sciences, communication, and social
              engagement. Lover of the arts, Sarah has taken many roles in
              theatre and holds French, Spanish, Italian, and Japanese under her
              belt (in addition to English and Indonesian). One of her pursuits:
              the integration of Artificial General Intelligence and Artificial
              Super Intelligence in everyday lives as the future standard. With
              the breakneck speed of innovation, she holds her opinion that we
              must walk alongside technology instead of fighting its flow.
            </p>
          </div>
        </div>
        <p className='flex flex-col items-start gap-x-4 text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-blue-800 sm:flex-row sm:text-justify'>
          <Image
            src={LsiiLogo}
            alt='Lsii Logo'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-[5em] shrink-0'
            quality={100}
          />{' '}
          BiriWorld is powered & supported by PT Legal Spesialis India Indonesia
          (LSII), the corporation duly established under Indonesia Law with
          registration number: AHU- 0022860.AH.01.01.Tahun 2023
        </p>
      </div>
    </section>
  );
}
