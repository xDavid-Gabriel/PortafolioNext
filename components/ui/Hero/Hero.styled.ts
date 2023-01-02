import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const Section = tw.section`bg-[linear-gradient(90deg, #070302 0%, #3C040B 101.09%, #EF0454 101.09%)] min-h-[100vh] relative`

export const ContainerGrid = tw.div`container grid  md:grid-cols-[max-content 1fr 1fr]
min-h-[100vh]  relative gap-10 pt-[80px] pb-[40px] items-center z-[1]`

export const Figure = styled(motion.figure)`
  ${tw`relative md:order-3 before:(absolute w-full  bg-[linear-gradient(90deg, #070302 0%, #3C040B 101.09%, #EF0454 101.09%)] top-0 mix-blend-color-dodge z-[1]) xl:h-[500px] overflow-hidden`}
`
export const NumberSpan = tw.span`absolute bottom-0 text-5xl md:text-[5rem] right-0 translate-y-[50%] font-bold text-primary [-webkit-text-stroke: 3px] [-webkit-text-fill-color: #fff]`
export const ContentDes = tw.div`self-start md:self-center flex flex-col gap-7`

export const H1 = styled(motion.h1)`
  ${tw`text-white leading-[1]`}
`
export const Decoration = styled(motion.div)`
  ${tw`w-[6rem] h-8 relative before:absolute before:w-12  before:rounded-full before:h-1 before:bg-primary after:left-1/2 after:h-1 after:absolute after:bottom-0  after:w-12  after:rounded-full after:bg-primary`}
`

export const Picture = tw.picture`mb-10 md:mb-0 w-3/6 md:w-[31px] md:order-[-1] mx-auto`

export const Pulse = tw.img`w-[90%] absolute md:w-1/2 md:h-full md:right-0 top-[120px] h-auto right-[50%] translate-x-[50%] object-contain md:translate-x-0 md:top-0 animate-pulse`
export const Shape = tw.img`w-[50%] absolute bottom-0 left-0 object-contain h-auto md:h-full md:right-0
md:top-0`

//Mis variantes

interface itemScrollProps {
  variant?: 'mobile' | 'desktop'
}

export const itemScroll = styled.div(({ variant }: itemScrollProps) => [
  tw`text-white text-lg md:text-2xl font-bold items-center gap-4`,
  variant === 'mobile' && tw`flex md:hidden`,
  variant === 'desktop' &&
    tw`absolute bottom-12 lg:bottom-[3.5rem] left-1/2 translate-x-[-50%] hidden md:flex`,
])
export const btnScroll = tw.button`border-[2px] border-white grid place-items-center w-14 h-14 rounded-full font-bold  animate-bounce`
