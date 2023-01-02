import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
export const Section = tw.section`bg-fondo relative py-40`
export const Item = tw.div`container flex flex-col gap-28`
export const H2 = styled(motion.h2)`
  ${tw`text-secondary flex flex-col sm:flex-row sm:gap-6`}
`
