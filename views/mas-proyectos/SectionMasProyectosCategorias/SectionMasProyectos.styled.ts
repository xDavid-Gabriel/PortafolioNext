import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const Container = tw.div`container flex flex-col gap-28 py-40`
export const GridProyect = styled(motion.div)`
  ${tw`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10`}
`
export const Card = styled(motion.div)`
  ${tw`rounded-xl overflow-hidden`}
`

export const CardBody = tw.div`bg-bodycard p-[25px 30px 30px] flex flex-col gap-6`
export const SpanTitle = tw.span`text-secondary font-semibold pt-2 text-xl relative before:(absolute w-7 h-[3px] rounded-full bg-primary top-0)`
export const Visited = tw.a`text-primary text-lg flex gap-3 items-center justify-end uppercase`
export const VisitedSpan = tw.span`transition duration-500 group-hover:translate-x-2`

export const ButtonList = tw.div`flex gap-10 flex-wrap justify-center`
