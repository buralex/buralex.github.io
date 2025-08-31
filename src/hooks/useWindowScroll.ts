import { useEffect, useRef, useCallback } from 'react';

export const getScrollYDirection = ({
  prevScrollY,
  currentScrollY,
}: {
  prevScrollY: number;
  currentScrollY: number;
}) => {
  const scrollingUp = prevScrollY > currentScrollY;
  return { scrollingUp };
};

interface ScrollYResult {
  currentScrollY: number;
  scrollingUp: boolean;
}

const useWindowScroll = (callBack: (result: ScrollYResult) => void) => {
  const prevScrollYRef = useRef(0);

  const eventHandler = useCallback(() => {
    const currentScrollY = window.scrollY;
    const { scrollingUp } = getScrollYDirection({
      prevScrollY: prevScrollYRef.current,
      currentScrollY,
    });

    prevScrollYRef.current = currentScrollY;
    callBack({ currentScrollY, scrollingUp });
  }, [callBack]);

  useEffect(() => {
    window.addEventListener('scroll', eventHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', eventHandler);
    };
  }, [eventHandler]);
};

export default useWindowScroll;
