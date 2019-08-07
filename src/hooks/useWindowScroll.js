import {useEffect, useRef, useState} from 'react';
import {isClient} from 'src/utils';
import raf from 'raf';
import throttle from 'lodash/throttle';
// import * as aaa from 'src/utils';

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

let prevScrollY = 0;

const useWindowScroll = callBack => {
    // const frame = useRef(0);
    // const [state, setState] = useState({
    //     x: isClient ? window.pageXOffset : 0,
    //     y: isClient ? window.pageYOffset : 0,
    // });
    //
    // useEffect(() => {
    //     const handler = () => {
    //         console.log('IIIII', isClient);
    //         cancelAnimationFrame(frame.current);
    //         frame.current = requestAnimationFrame(() => {
    //             // setState({
    //             //     x: window.pageXOffset,
    //             //     y: window.pageYOffset,
    //             // });
    //             callBack(window.pageYOffset)
    //         });
    //     };
    //
    //     window.addEventListener('scroll', handler, {
    //         capture: false,
    //         passive: true,
    //     });
    //
    //     return () => {
    //         cancelAnimationFrame(frame.current);
    //         window.removeEventListener('scroll', handler);
    //     };
    // }, []);
    //
    // return state;

    const requestFrameId = useRef(0);

    const scrollHandler = () => {
        // if (isNavClicked.current) {
        //     isNavClicked.current = false;
        //     return;
        // }

        raf.cancel(requestFrameId.current);
        requestFrameId.current = raf(() => {
            // const navElem = navElemRef.current;
            const {y: currentScrollY} = getScrollPosition(isClient);
            const {scrollingUp} = getScrollYDirection({prevScrollY, currentScrollY});
            callBack({currentScrollY, scrollingUp});
            // const isNavHidden = getIsNavHidden(navElem);
            //
            // changeNavBackGround({currentScrollY, navElem, setNavBgClass});
            // showOrHideNav({scrollingUp, isNavHidden, currentScrollY, setNavHiddenClass});

            prevScrollY = currentScrollY;
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
