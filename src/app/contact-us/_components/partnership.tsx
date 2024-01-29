'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Partnership1 from 'public/contact-us/partnership-1.jpg';
import Partnership2 from 'public/contact-us/partnership-2.png';
import Partnership3 from 'public/contact-us/partnership-3.png';
import { VscChevronLeft } from 'react-icons/vsc';

import { cn } from '@/lib/utils';

const events = [
  {
    imgSrc: Partnership1,
  },
  {
    imgSrc: Partnership2,
  },
  {
    imgSrc: Partnership3,
  },
  {
    imgSrc: Partnership1,
  },
  {
    imgSrc: Partnership2,
  },
  {
    imgSrc: Partnership3,
  },
] as const;

export function Partnership() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: 'start',
      loop: true,
    },
    [Autoplay({ delay: 4000 })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className='bg-[#E3E3E3] py-32 '>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-20 max-w-[570px] bg-[#800101] py-4 text-center text-4xl uppercase tracking-widest text-white sm:text-5xl'>
          Partnership
        </h2>

        <div className='relative overflow-hidden' ref={emblaRef}>
          <div className='ml-[calc(4rem*-1)] flex h-auto'>
            {events.map((event, idx) => (
              <div
                key={idx}
                className='group relative min-w-0 shrink-0 grow-0 basis-[100%] pl-[4rem] sm:basis-[50%] lg:basis-1/3'
              >
                <div className='h-full overflow-hidden'>
                  <Image
                    src={event.imgSrc}
                    alt='Inspiry Events'
                    width='0'
                    height='0'
                    sizes='100vw'
                    placeholder='blur'
                    className={cn('w-full object-cover')}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows Navigation */}
          <button
            type='button'
            className='absolute left-[-10px] top-[50%] z-[1] translate-y-[-50%] text-[#9d9fa1] disabled:opacity-20'
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <span className='sr-only'>navigation button</span>
            <VscChevronLeft className='xs:size-10 size-12 sm:size-12 md:size-16' />
          </button>
          <button
            type='button'
            className='absolute right-[-10px] top-[50%] z-[1] translate-y-[-50%] text-[#9d9fa1] disabled:opacity-20'
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <span className='sr-only'>navigation button</span>
            <VscChevronLeft className='xs:size-10 size-12 rotate-180 sm:size-12 md:size-16' />
          </button>
        </div>
      </div>
    </section>
  );
}
