'use client';

import { PiArrowUpBold } from 'react-icons/pi';

import { useNavbar } from '@/hooks/use-navbar';
import { cn } from '@/lib/utils';

export function ScrollTopTopTrigger() {
  const { isNavbarActive } = useNavbar();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className={cn(
        'fixed bottom-4 right-4 z-[9] rounded bg-[#254A7D] p-1 text-white',
        isNavbarActive ? 'inline-block' : 'hidden'
      )}
    >
      <span className='sr-only'>scroll to top trigger</span>
      <PiArrowUpBold className='size-8' />
    </button>
  );
}
