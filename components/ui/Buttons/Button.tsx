import Link from 'next/link'
import tw, { styled } from 'twin.macro'

interface btnProps {
  variant?: 'primary' | 'primaryOutline'
}
export const Button = styled(Link)(({ variant }: btnProps) => [
  tw`overflow-hidden transition duration-500 p-4 px-6 rounded-full w-fit relative font-semibold before:absolute before:w-[60px] before:(bg-white  h-[150px] left-[-75px] top-[-35px] rotate-[35deg] [transition: left,opacity, 1.3s cubic-bezier(.19,1,.22,1)] hover:left-[120%] opacity-0 hover:opacity-[.25]) hover:-translate-y-2 cursor-pointer uppercase`,

  variant === 'primary' && tw`bg-primary text-white`,
  variant === 'primaryOutline' &&
    tw`bg-transparent text-primary rounded-md border-[2px] border-primary hover:bg-primary hover:text-white`,
])
