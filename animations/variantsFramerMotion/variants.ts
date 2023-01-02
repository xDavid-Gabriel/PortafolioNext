export const variantsLeft = {
  position: {
    translateX: -50,
    opacity: 0,
  },

  visible: {
    translateX: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      delay: 0.3,
      type: 'spring',
      damping: 15,
      stiffness: 500,
      once: true,
    },
  },
}
