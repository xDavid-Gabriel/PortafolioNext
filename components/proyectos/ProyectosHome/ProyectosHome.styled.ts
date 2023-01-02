import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
export const Grid = tw.div`grid sm:grid-cols-2 lg:grid-cols-3 gap-16`
export const Cards = styled(motion.div)`
  ${tw`flex flex-col gap-10`}
`
export const Figure = tw.figure`relative overflow-hidden  before:(absolute w-full h-0  z-[1] bg-[linear-gradient(hsla(0,0%,9%,.06),#9f0036)]  opacity-[.85] transition-[height] bottom-0 duration-500 ease-out  hover:h-full) rounded-2xl shadow-lg`

// export const Imagenes = styled(Image)(
//   tw`[transition: transform 1.5s cubic-bezier(0,0,.2,1)] group-hover:[transform: scale3d(1.1,1.1,1.1)]`
// );

export const Imagenes = tw.img`[transition: transform 1.5s cubic-bezier(0,0,.2,1)] group-hover:[transform: scale3d(1.1,1.1,1.1)]`

export const ContentDes = tw.div`text-white transition-[bottom] duration-500 group-hover:bottom-[23px] left-4 max-w-[20rem]  z-[2] absolute bottom-[-100px] hidden sm:flex flex-col gap-1`
export const ContentMobile = tw.div`sm:hidden flex flex-col gap-5`
export const SpanDesktop = tw.span`font-bold text-[1.5rem]`
export const SpanMobile = tw.span`text-primary font-bold text-3xl`
export const Description = tw.p`text-secondary md:text-white max-w-[25rem]`
