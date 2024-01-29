import Image from 'next/image';
import Building1 from 'public/contact-us/building-1.jpg';
import Building2 from 'public/contact-us/building-2.jpg';
import Building3 from 'public/contact-us/building-3.jpg';
import Building4 from 'public/contact-us/building-4.jpg';

export function GetInTouch() {
  return (
    <section className='pb-36 pt-24'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-16 max-w-[570px] bg-[#800101] px-2 py-4 text-center text-4xl uppercase tracking-widest text-white sm:text-5xl'>
          Get in Touch
        </h2>
        <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr,1.5fr,1fr] lg:grid-cols-[1fr,2fr,1fr]'>
          <div className=''>
            <p className='mb-6 text-center text-xl font-semibold uppercase tracking-wider text-blue-800 md:text-base'>
              DESIGN FUTURE BIRIWORLD ECO-BUILDING
            </p>
            <Image
              src={Building1}
              alt='Building 1'
              width='0'
              height='0'
              sizes='100vw'
              placeholder='blur'
              className='mb-10 h-auto w-full object-cover'
              quality={100}
            />
            <Image
              src={Building2}
              alt='Building 2'
              width='0'
              height='0'
              sizes='100vw'
              placeholder='blur'
              className='h-auto w-full object-cover'
              quality={100}
            />
          </div>
          <div className='order-1 md:order-none'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d251.2316773250975!2d115.40383760749442!3d-8.573974375716993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1699265070893!5m2!1sen!2sid'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='aspect-square w-full border-none'
            />
          </div>
          <div className=''>
            <p className='mb-6 text-center text-xl font-semibold uppercase tracking-wider text-blue-800 md:text-base'>
              DESIGN FUTURE BIRIWORLD ECO-BUILDING
            </p>
            <Image
              src={Building3}
              alt='Building 3'
              width='0'
              height='0'
              sizes='100vw'
              placeholder='blur'
              className='mb-10 h-auto w-full object-cover'
              quality={100}
            />
            <Image
              src={Building4}
              alt='Building 4'
              width='0'
              height='0'
              sizes='100vw'
              placeholder='blur'
              className='h-auto w-full object-cover'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
