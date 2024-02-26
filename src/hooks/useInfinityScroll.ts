import { useEffect } from 'react';

export default function useInfinityScroll(isFetching: boolean, cb: () => void) {
  useEffect(() => {
    const scrollHandler = () => {
      const scrolledToBottom =
        document.body.offsetHeight - (window.innerHeight + window.scrollY) <
        100;
      if (scrolledToBottom && !isFetching) {
        cb();
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [isFetching, cb]);
}
