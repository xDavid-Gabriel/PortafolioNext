import Link from 'next/link'
import tw, { styled } from 'twin.macro'
//Animaciones con framer motion para usarlos con tw
import { motion } from 'framer-motion'

// type Props = {
//   showMenu: boolean
// }
// export const Nav = styled.nav(({ showMenu }: Props) => [
//   tw`fixed top-0 left-0 min-h-screen bg-[linear-gradient(90deg, #070302 0%, #3C040B 101.09%, #EF0454 101.09%)] right-0  transition duration-500 translate-x-[-100%]`,
//   showMenu && tw`translate-x-0`,
// ])

export const Nav = styled(motion.nav)`
  ${tw`fixed top-0 left-0 min-h-screen bg-[linear-gradient(90deg, #070302 0%, #3C040B 101.09%, #EF0454 101.09%)] right-0 `}
`

export const NavList = styled(motion.ul)`
  ${tw`flex flex-col items-center justify-center min-h-screen gap-7 xl:gap-12`}
`

export const NavLink = styled(Link)(() => [
  tw`group-hover:before:w-full before:w-0 before:transition-[width] before:duration-500 before:content-[''] before:bottom-0 before:top-[50%] before:translate-y-[-50%] before:h-1 before:rounded-full before:bg-primary before:absolute  font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-7xl cursor-pointer`,
])

export const SocialLink = styled(Link)(() => [
  tw`text-white hover:translate-y-2 transition duration-500`,
])
