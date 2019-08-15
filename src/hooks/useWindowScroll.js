import {useEffect, useRef} from 'react';
import {getScrollPosition, getScrollYDirection} from 'src/utils';
import raf from 'raf';

const useWindowScroll = callBack => {
    const requestFrameId = useRef(0);
    const prevScrollYRef = useRef(0);

    const scrollHandler = () => {
        raf.cancel(requestFrameId.current);
        requestFrameId.current = raf(() => {
            const {y: currentScrollY} = getScrollPosition();
            const {scrollingUp} = getScrollYDirection({prevScrollY: prevScrollYRef.current, currentScrollY});
            callBack({currentScrollY, scrollingUp});

            prevScrollYRef.current = currentScrollY;
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        // for initial values after page is loaded
        scrollHandler();

        return () => {
            raf.cancel(requestFrameId.current);
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
};

export default useWindowScroll;
