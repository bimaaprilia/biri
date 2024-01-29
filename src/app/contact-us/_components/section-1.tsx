import Image from 'next/image';
import Section1Img from 'public/section-1.png';
import Section3Img from 'public/section-3.jpg';
import Sp5 from 'public/sp5.jpg';

export function Section1() {
  return (
    <section className='py-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            <span className='font-semibold'>
              Bali, with its unique cultural and natural assets, has the
              potential to become a hub for the international research and
              development community for the Sustainable Development Goals
              (SDGs).
            </span>{' '}
            The work is in going and BiriWorld is part of the ongoing work. With
            our involvement, we hope to promote collaboration between local and
            international organizations, and establish platforms for knowledge
            sharing. In addition,
          </p>
          <Image
            src={Section1Img}
            alt='Kids playing water near waterfall'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover
            md:order-1'
            quality={100}
          />
        </div>
        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Sp5}
            alt='a man on bicycle'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className=' h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            Bali's vibrant cultural heritage and traditional wisdom make it an
            inspiring place for researchers to study and develop solutions for
            sustainable development. Local communities in Bali have long
            maintained a harmonious relationship with nature and have valuable
            knowledge about sustainable farming practices, traditional medicine,
            and renewable energy sources. Leveraging this cultural heritage can
            lead to innovative solutions with a strong community-based approach.
          </p>
        </div>
        <div className='mb-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            Additionally, the traditional people of Bali strongly believe in the
            concept of Tri Kaya Parisudha, which promotes purity of thoughts,
            words, and deeds. This concept encourages individuals to reduce
            their negative impact on the environment by practicing sustainable
            living. For instance, many Balinese families have embraced
            eco-friendly practices such as organic farming, waste reduction, and
            recycling.
          </p>
          <Image
            src={Section3Img}
            alt='people on bike near rice fields'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover
            md:order-1'
            quality={100}
          />
        </div>
        <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
          The traditional people of Bali have also embraced their cultural
          heritage and customs to address the challenges posed by climate
          change. Their deep respect for nature and adherence to Bali Customary
          Law have motivated them to adopt sustainable practices in agriculture,
          architecture, and daily living. By incorporating rituals and
          ceremonies, they seek both divine and practical guidance to protect
          their environment and mitigate the impacts of climate change.
        </p>
      </div>
    </section>
  );
}
