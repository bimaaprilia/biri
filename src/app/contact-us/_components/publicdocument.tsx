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

export function PublicDocument() {
  
  

  return (
    <section className='bg-[#E3E3E3] py-32 '>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-20 max-w-[570px] bg-[#09007c] py-4 text-center text-4xl uppercase tracking-widest text-white sm:text-5xl'>
          Public Document
        </h2>

        <p>Click on the pdf logo to download the whitepaper:</p>
                  
                  <a href="/contact-us/whitepaper.pdf" download>
                    <img src="/contact-us/pdf.png" width="120" height="120"/>
                  </a>
                  
                  <p><b>Note:</b> The download attribute is not supported in Edge version 12, IE, Safari 10 (and earlier), or Opera version 12 (and earlier).</p>

      </div>
    </section>
  );
}
