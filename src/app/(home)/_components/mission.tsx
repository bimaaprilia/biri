import Image from 'next/image';
import Mission1 from 'public/mission-1.jpg';
import Mission2 from 'public/mission-2.jpg';

export function Mission() {
  return (
    <section className='pt-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-16 max-w-[570px] bg-[#800101] py-4 text-center text-5xl uppercase tracking-widest text-white'>
          Mission
        </h2>

        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Mission1}
            alt='Solar panels and sky'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            <span className='font-semibold'>BiriWorld mission</span> is to
            provide a platform for innovation and collaboration to build a
            research environment of excellence, enriching lives locally,
            nationally, and globally. We aim to contribute to global efforts in
            mitigating climate change by researching and implementing innovative
            technologies, policies, and practices that can transition societies
            and industries towards a zero-emission future.
          </p>
        </div>
        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            As a research institution, we also aim to overcome traditional
            academic boundaries: fostering interdisciplinary pursuits, providing
            educational excellence, as well as inviting partners & enthusiastic
            volunteers to shape a dynamic and inclusive system of research and
            innovation. In addition, We aim to provide the resources, support,
            and infrastructure necessary for the international projects in the
            future. Through international collaborative efforts, partnerships,
            and a commitment, BiriWorld aims to drive positive changes in
            sustainability, education, and conservation towards a responsible
            future.
          </p>
          <Image
            src={Mission2}
            alt="Bali's people praying"
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover md:order-1'
            quality={100}
          />
        </div>
      </div>

      <hr className='my-28' />
    </section>
  );
}
