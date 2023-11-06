export const isClient = typeof window === 'object';

export const getScrollPosition = () => {
    if (!isClient) {
        return {x: 0, y: 0};
    }
    return {
        x: window.pageXOffset,
        y: window.pageYOffset,
    };
};

export const getScrollYDirection = ({prevScrollY, currentScrollY}) => {
    const scrollingUp = prevScrollY > currentScrollY;
    return {scrollingUp};
};