import { FC } from 'react'
import { useRouter } from 'next/router'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
//Variante para mis animaciones con framer motion
import {
  variants,
  variantsList,
  variantsItem,
} from './NavbarMenuVariantAnimations'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import * as St from './NavbarMenu.styled'

type Props = {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarMenu: FC<Props> = ({ showMenu, setShowMenu }) => {
  const { asPath } = useRouter()
  const PathConverted = asPath.slice(11)

  return (
    <St.Nav
      transition={{ duration: 0.5, type: 'spring' }}
      initial={{ opacity: 0 }}
      animate={showMenu ? 'open' : 'closed'}
      variants={variants}
    >
      <St.NavList variants={variantsList}>
        <motion.li
          variants={variantsItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group"
          tw="relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <St.NavLink css={asPath === '/' ? tw`before:w-full` : ''} href="/">
            Inicio
          </St.NavLink>
        </motion.li>
        <motion.li
          variants={variantsItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group"
          tw="relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <St.NavLink
            css={asPath === '/sobre-mi' ? tw`before:w-full` : ''}
            href="/sobre-mi"
          >
            Sobre Mi
          </St.NavLink>
        </motion.li>
        <motion.li
          variants={variantsItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group"
          tw="relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <St.NavLink
            css={
              asPath === `/proyectos/${PathConverted}` ? tw`before:w-full` : ''
            }
            href="/proyectos/gold-gym"
          >
            Mis Trabajos
          </St.NavLink>
        </motion.li>

        <motion.li tw="flex gap-4" variants={variantsItem}>
          <St.SocialLink
            href="https://www.instagram.com/gabriel_betalleluz"
            target="_blank"
          >
            <FaInstagram size={25} />
          </St.SocialLink>
          <St.SocialLink
            href="https://www.linkedin.com/in/david-gabriel-cayllahua-betalleluz-i12637"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </St.SocialLink>
        </motion.li>
      </St.NavList>
    </St.Nav>
  )
}
