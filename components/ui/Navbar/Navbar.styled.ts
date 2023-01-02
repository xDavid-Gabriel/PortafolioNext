import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const Header = tw.header` min-h-[10vh] flex items-center fixed w-full  top-0 z-10 [background: rgba(22, 22, 22, 0.49);
  ] [backdrop-filter: blur(10px)]`
export const Nav = tw.nav`flex justify-between  py-4 container md:gap-7`
export const Ul = tw.ul`md:flex md:w-full`
export const LiLogo = tw.li`md:flex md:flex-grow relative z-10 cursor-pointer`
export const Logo = styled(Link)(() => [tw`text-white font-bold text-lg`])

export const Social = tw.li`items-center hidden md:flex gap-4 `
export const SocialLink = tw.a`text-white hover:translate-y-2 transition duration-500`
export const Contactame = styled(Link)(() => [
  tw`text-white text-xl font-bold cursor-pointer leading-[1]`,
])
