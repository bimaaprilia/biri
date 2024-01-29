'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import NavbarLogo from 'public/navbar-logo.png';

import { useNavbar } from '@/hooks/use-navbar';
import { cn } from '@/lib/utils';

const navbarData = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/#vision',
    text: 'Vision',
  },
  {
    href: '/#portfolio',
    text: 'Portfolio',
  },
  {
    href: '/#projects',
    text: 'Projects',
  },
  {
    href: '/contact-us',
    text: 'Contact Us',
  },
] as const;

export function Navbar() {
  const { isNavbarActive } = useNavbar();

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'fixed inset-x-0 z-10 flex h-[70px] items-center border-b border-white/20 md:border-0 md:transition-colors',
        isNavbarActive ? 'bg-[#254A7D]' : 'bg-[#254A7D] md:bg-transparent'
      )}
    >
      <div className='mx-auto flex w-[min(1140px,90%)] items-center justify-between'>
        <Image
          src={NavbarLogo}
          alt='Biri Logo'
          width='0'
          height='0'
          sizes='100vw'
          placeholder='blur'
          className=''
          priority
        />
        <nav
          className={cn(
            'fixed inset-x-0 top-[70px] h-[calc(100vh-70px)] flex-col bg-[#254A7D] md:static md:h-auto md:flex-row md:items-center md:gap-8 md:bg-transparent',
            open ? 'block md:flex' : 'hidden md:flex'
          )}
        >
          {navbarData.map((navbar) => (
            <Link
              key={navbar.text}
              href={navbar.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex justify-center border-b border-b-white/20 py-8 text-xl uppercase tracking-widest transition-colors hover:text-white/50 md:inline-block md:justify-normal md:border-b-0 md:bg-transparent md:py-0 md:text-base',
                isNavbarActive
                  ? 'text-white'
                  : 'text-white md:text-foreground md:hover:text-foreground/60'
              )}
            >
              <span className='mx-auto inline-block w-[90%] md:mx-0 md:w-auto'>
                {navbar.text}
              </span>
            </Link>
          ))}
        </nav>

        <button
          type='button'
          className='transition-opacity hover:opacity-50 md:hidden'
          onClick={() => setOpen(!open)}
        >
          <span className='sr-only'>toggle navbar button</span>
          <MenuIcon
            className={cn(
              'size-8 text-white',
              open ? 'hidden' : 'inline-block'
            )}
          />
          <XIcon
            className={cn(
              'size-8 text-white',
              open ? 'inline-block' : 'hidden'
            )}
          />
        </button>
      </div>
    </div>
  );
}
