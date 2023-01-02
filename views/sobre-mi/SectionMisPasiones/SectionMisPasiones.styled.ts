import tw from 'twin.macro'

export const SectionMisPasiones = tw.section`container flex flex-col gap-28 py-40`
export const Grid = tw.div`grid lg:grid-cols-2 xl:grid-cols-3 gap-12`
export const Card = tw.div`flex flex-col gap-5 px-10 py-[4rem] hover:[box-shadow: 0 20px 30px rgb(55 7 23 / 16%)] transition duration-300 max-w-[27rem] mx-auto`
export const Icon = tw.div`text-primary transition duration-300 group-hover:-translate-y-2`
export const TitleCard = tw.h3`text-secondary text-[1.4rem] font-semibold`
