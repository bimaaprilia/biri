import Image from 'next/image';
import Barong from 'public/barong.jpg';
import Vision1 from 'public/vision-1.png';
import Vision2 from 'public/vision-2.jpg';
import Vision3 from 'public/vision-3.png';
import Vision4 from 'public/vision-4.jpg';
import VisionKey1 from 'public/vision-key-1.png';
import VisionKey2 from 'public/vision-key-2.png';
import VisionKey3 from 'public/vision-key-3.png';
import VisionKey4 from 'public/vision-key-4.png';

export function Vision() {
  return (
    <section id='vision' className='py-20'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-6 max-w-[570px] bg-[#800101] py-4 text-center text-5xl uppercase tracking-widest text-white'>
          Vision
        </h2>
        <div className='mb-8'>
          <p className='text-center font-volkhov font-light italic'>
            Besi yang Ditempa, Diasah!
          </p>
          <p className='text-center font-volkhov font-light italic'>
            (Bali proverb: Always Learning and Contributing Concurrently!).
          </p>
        </div>

        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-[1.7] tracking-[2px] text-foreground/80 sm:text-justify'>
            Located in Bali, Indonesia, BiriWorld centres itself around cultural
            and environmental diversity, sustainable practices, local/indigenous
            community engagement, and global relevance. Holding international
            significance for environment, ecology, and sustainability, Bali is
            proven to be highly attractive to researchers, scholars,
            organisations and simply curious individuals.
          </p>
          <Image
            src={Vision1}
            alt='Biri Logo'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
        </div>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <p className='text-start text-[1.25rem] !leading-[1.7] tracking-[2px] text-foreground/80 sm:text-justify'>
            Located in Bali, Indonesia, BiriWorld centres itself around cultural
            and environmental diversity, sustainable practices, local/indigenous
            community engagement, and global relevance. Holding international
            significance for environment, ecology, and sustainability, Bali is
            proven to be highly attractive to researchers, scholars,
            organisations and simply curious individuals.
          </p>
          <Image
            src={Vision2}
            alt='Beautfiul view from top'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
        </div>

        <hr className='my-28' />

        <div className='mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Vision3}
            alt='Biri Logo'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-[1.7] tracking-[2px] text-foreground/80 sm:text-justify'>
            <span className='font-semibold'>Vision of BiriWorld</span> is to
            become a leading research and development institution in Indonesia
            (the world's fourth-most populous country) dedicated to studying and
            developing sustainable solutions for environmental change, with a
            specific focus on achieving net zero emissions. The center envisions
            a future where environmentally harmful activities are minimized,
            ecosystems are restored, and the traditional/indigenous customs are
            preserved for future generations.
          </p>
        </div>

        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:items-start'>
          <Image
            src={Vision4}
            alt='Traditional things'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <p className='text-start text-[1.25rem] !leading-[1.7] tracking-[2px] text-foreground/80 sm:text-justify'>
            Our vision stands as an unwavering commitment to innovation,
            collaboration, and open frontiers of knowledge. BiriWorld aspires to
            be a driving force for sustainable communities and agroecological
            integrity, all the while holding close values of inclusivity and
            educational excellence.
          </p>
        </div>

        <hr className='my-32' />

        {/* VISION KEYS */}
        <h2 className='mx-auto mb-6 max-w-[730px] bg-[linear-gradient(to_bottom,#01360c_30%,#00751d_100%)] px-4 py-3 text-center text-[2rem] uppercase leading-[1.3] tracking-wider text-white sm:text-[2.5rem] md:text-[3rem]'>
          KEY COMPONENTS OF THE CENTER'S VISION INCLUDE
        </h2>

        <div className='mb-56 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Image
            src={VisionKey1}
            alt='Vision Key 1'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <Image
            src={VisionKey2}
            alt='Vision Key 2'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <Image
            src={VisionKey3}
            alt='Vision Key 3'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
          <Image
            src={VisionKey4}
            alt='Vision Key 4'
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='h-auto w-full object-cover'
            quality={100}
          />
        </div>

        <Image
          src={Barong}
          alt='Barong'
          width='0'
          height='0'
          sizes='100vw'
          placeholder='blur'
          quality={100}
          className='mx-auto'
        />
      </div>
    </section>
  );
}
