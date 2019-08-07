import {useEffect, useRef} from 'react';
import {isClient} from 'src/utils';
import raf from 'raf';
import throttle from 'lodash/throttle';

const THROTTLE_MS = 100;

const getScrollPosition = isClientSide => {
    if (!isClientSide) {
        return {x: 0, y: 0};
    }
    return {
        x: window.pageXOffset,
        y: window.pageYOffset,
    };
};

const getScrollYDirection = ({prevScrollY, currentScrollY}) => {
    const scrollingUp = prevScrollY > currentScrollY;
    return {scrollingUp};
};

const useWindowScroll = callBack => {
    const requestFrameId = useRef(0);
    const prevScrollYRef = useRef(0);

    const scrollHandler = () => {
        raf.cancel(requestFrameId.current);
        requestFrameId.current = raf(() => {
            const {y: currentScrollY} = getScrollPosition(isClient);
            const {scrollingUp} = getScrollYDirection({prevScrollY: prevScrollYRef.current, currentScrollY});
            callBack({currentScrollY, scrollingUp});

            prevScrollYRef.current = currentScrollY;
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        // for initial values after page is loaded
        scrollHandler();

        return () => {
            raf.cancel(requestFrameId.current);
            window.removeEventListener('scroll', throttle(scrollHandler, THROTTLE_MS));
        };
    }, []);
};

export default useWindowScroll;
