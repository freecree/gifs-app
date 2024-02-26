import { useEffect } from 'react';

export default function useInfinityScroll(
  isFetching: boolean,
  page: number,
  setPage: (value: number) => void,
) {
  useEffect(() => {
    const scrollHandler = () => {
      const scrolledToBottom =
        document.body.offsetHeight - (window.innerHeight + window.scrollY) <
        100;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [page, isFetching, setPage]);
  return page;
}
