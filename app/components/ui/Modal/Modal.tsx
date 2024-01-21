'use client';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAnimate, cubicBezier } from 'framer-motion';
import { useEffect } from 'react';

const Modal = ({ children, animation }: { children: React.ReactNode; animation?: boolean }) => {
  const ease = cubicBezier(0.25, 0.1, 0.25, 1);
  const router = useRouter();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (animation) {
      animate([
        ['#backblur', { opacity: [0, 1] }, { duration: 1.2, ease }],
        ['#modal', { opacity: [0, 1], y: [55, 0] }, { duration: 0.65, ease, at: '<' }],
      ]);
    } else {
      animate([
        ['#backblur', { opacity: [0, 1] }, { duration: 0 }],
        ['#modal', { opacity: [0, 1], y: [55, 0] }, { duration: 0 }],
      ]);
    }
  }, []);

  const closeModal = () => {
    router.back();
  };
  return (
    <div ref={scope} className='fixed h-[100dvh] w-full flex items-center justify-center'>
      <div id='backblur' className='fixed opacity-0 h-full w-full bg-black/50 backdrop-blur'></div>
      <div
        id='modal'
        className='relative opacity-0 w-[90%] max-w-[600px] min-h-48 rounded-xl border-[1px] border-white/15 p-12'
      >
        <div className='absolute top-5 right-5'>
          <div onClick={closeModal}>
            <Button>
              <XMarkIcon className='w-4' />
            </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
