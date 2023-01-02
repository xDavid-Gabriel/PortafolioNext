export const variants = {
  open: { opacity: 1, x: 0, stiffness: 20, restDelta: 2 },
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      delay: 0.5,
    },
  },
}
export const variantsList = {
  open: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
