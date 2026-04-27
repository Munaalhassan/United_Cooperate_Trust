import { Variants } from 'framer-motion';

export const fadeInLift: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: 'blur(1px)'
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

// Stagger container for multiple children
export const staggerContainer = (staggerDelay: number = 0.1, delayChildren: number = 0): Variants => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren
        }
    }
});

// Horizontal slide reveal
export const revealRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const revealLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

// Section level reveal with custom distance
export const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

// Micro-interaction for hover
export const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.4, ease: "easeOut" }
};
