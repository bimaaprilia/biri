'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from 'public/home-hero.jpg';

const FADE_INTERVAL_MS = 1700;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = ['Hello', 'Welcome', 'Rahajeng Rawuh'];

type FadeProp = { fade: 'fade-in' | 'fade-out' };

export function Hero() {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in'
        ? setFadeProp({ fade: 'fade-out' })
        : setFadeProp({ fade: 'fade-in' });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div className='relative grid h-screen w-full place-items-center px-4 [clip-path:inset(0_0_0_0)]'>
      <Image
        src={HomeHero}
        alt='Beautiful mountain & farm scenery'
        sizes='100vw'
        className='fixed inset-x-0 z-[-1] size-full object-cover object-top'
        quality={100}
        priority
      />
      <div className='space-y-12 text-center text-4xl uppercase !leading-[1.4] tracking-widest text-white md:text-5xl md:tracking-[0.4em]'>
        <h2 className='relative'>
          <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
        </h2>
        <h2>We Are Biri World</h2>
        <Link
          href='/#welcome'
          className='inline-block rounded-full border px-8 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-white hover:text-foreground'
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
