import Image from 'next/image';
import Sp1 from 'public/sp1.jpg';
import Sp2 from 'public/sp2.jpg';
import Sp3 from 'public/sp3.jpg';
import Sp4 from 'public/sp4.jpg';
import Sp5 from 'public/sp5.jpg';

export function StartingPoint() {
  return (
    <section className='py-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-16 bg-[#800101] py-4 text-center text-5xl uppercase tracking-widest text-white'>
          Bali as the Starting Point!
        </h2>

        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Sp1}
            alt='Dragon fruit on girl hands'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            Bali, an island located in Indonesia, is renowned for its unique
            culture and heritage. The people of Bali have a rich tradition,
            rooted in Hinduism, which significantly influences their daily life
            and customs. With the increasing threat of climate change, the
            traditional people of Bali have had to adapt their practices and
            incorporate all means necessary to mitigate its effects and protect
            their environment.
          </p>
        </div>
        <p className='mb-6 text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
          The traditional people of Bali deeply respect and worship nature. They
          believe in the concept of Tri Hita Karana, which emphasizes harmony
          and balance between humans, nature, and the spiritual world. This
          philosophy has shaped the way they interact with their surroundings
          and has motivated them to adopt sustainable practices.
        </p>
        <div className='mb-6 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
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
            src={Sp2}
            alt='A man hugging kid'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover 
            md:order-1'
            quality={100}
          />
        </div>
        <div className='mb-6 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
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
            src={Sp3}
            alt='Bali\s people praying'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover 
            md:order-1'
            quality={100}
          />
        </div>
        <div className='mb-6 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Sp4}
            alt='kids watching something'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            Balinese traditional architecture also plays a significant role in
            adapting to climate change. The use of traditional materials like
            bamboo and thatch roofs helps regulate temperature and reduce energy
            consumption. These building techniques have been passed down through
            generations and have proven to be effective in withstanding extreme
            weather events such as cyclones and floods.
          </p>
        </div>
        <div className='mb-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-foreground/80 sm:text-justify'>
            Furthermore, the traditional people of Bali place great importance
            on rituals and ceremonies to honor their ancestors and seek
            blessings from the gods. These rituals often involve offerings and
            prayers that demonstrate gratitude and reverence for the natural
            environment. Climate change has led to an increased frequency of
            natural disasters in Bali, such as droughts and landslides. As a
            response, the Balinese people have incorporated specific ceremonies
            to seek protection from these disasters and to express their
            commitment to environmental stewardship.
          </p>
          <Image
            src={Sp5}
            alt='a man on bicycle'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='order-[-1] h-auto w-full object-cover 
            md:order-1'
            quality={100}
          />
        </div>
        <p className='text-start text-[1.25rem] !leading-relaxed tracking-[2px] text-[purple] sm:text-justify'>
          In short, we believe that Bali is the Starting Point to build
          BiriWorld’s portfolio. It is because the traditional people of Bali
          have embraced their cultural heritage and customs to address the
          challenges posed by climate change. Their deep respect for nature and
          adherence to Bali Customary Law have motivated them to adopt
          sustainable practices in agriculture, architecture, and daily living.
          By incorporating rituals and ceremonies, they seek both divine and
          practical guidance to protect their environment and mitigate the
          impacts of climate change.
        </p>

        <hr className='my-12' />
      </div>
    </section>
  );
}
