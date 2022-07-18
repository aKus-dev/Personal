export const titleAnimations = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', duration: 1 },
    exit: { y: 100, opacity: 0 }
}

export const textAnimations = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', duration: 1, delay: 0.1 },
    exit: { y: 100, opacity: 0 }
}

export const smokeAnimations = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', duration: 1 },
    exit: { y: 100, opacity: 0 }
}

export const circleWhiteAnimations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', duration: 0.65, bounce: 0.35 },
    exit: { y: 100, opacity: 0 }
}

export const circleAnimation = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: 'spring', duration: 0.65, bounce: 0.35 },
    exit: { x: -100, opacity: 0 }
}