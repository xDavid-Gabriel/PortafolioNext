import Link from 'next/link'
import tw, { styled } from 'twin.macro'
export const Section = tw.section` bg-fondo flex flex-col gap-28 py-40`
export const RoleContent = tw.div`container flex flex-col gap-28`
export const Info = tw.div`flex flex-wrap gap-16 lg:justify-center `
export const Title = tw.p`font-bold text-2xl text-secondary [letter-spacing: 5px] mb-2`
export const Description = tw.p`text-body max-w-[21rem]`
export const Item = tw.div`flex items-center relative `

export const MobileNumber = tw.p`font-bold text-primary leading-[1] text-[clamp(2rem,10.7vw - 2.7rem,3rem)] pl-[20px] sm:pl-[71px] mr-[71px] absolute top-0 after:top-0  after:(absolute w-[1rem] sm:w-[3.5rem] h-[2px] bg-primary left-0  bottom-0 m-auto) lg:hidden`

export const ItemDesktopNumber = tw.div`w-[3.5rem] h-[2px] absolute left-0 bg-primary hidden lg:block`
export const DesktopNumber = tw.p`text-primary font-bold text-[clamp(2rem,10.7vw - 2.7rem,3rem)] absolute left-[4rem] top-[50%] translate-y-[-50%]`
export const Information = tw.div`flex flex-col lg:flex-row justify-between container  gap-7 lg:gap-20 items-center relative`
export const H2 = tw.h2`text-secondary leading-[1] lg:pl-[120px]`
export const P = tw.p`max-w-[63rem] text-body`
export const Mockup = tw.figure`max-w-[70rem] mx-auto`
export const Fondo = tw.div` bg-fondo`
export const MockupWeb = tw.div`container grid grid-cols-2 gap-5 md:gap-x-10  gap-y-28`
export const Atras = styled(Link)(() => [
  tw`cursor-pointer text-secondary flex text-center justify-center gap-5 text-5xl font-bold col-span-2 `,
])
export const ArrowLeft = tw.span`group-hover:-translate-x-3 transition duration-500`
