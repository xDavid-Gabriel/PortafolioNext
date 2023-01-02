import { FC } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import * as St from './Navbar.styled'
import { NavbarMenu } from './NavbarMenu/NavbarMenu'
import { useState } from 'react'

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <St.Header>
      <St.Nav>
        <St.Ul>
          <St.LiLogo>
            <St.Logo href="/">David Gabriel</St.Logo>
          </St.LiLogo>
          <St.Social>
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
            <St.Contactame href="/#contact">Contáctame</St.Contactame>
          </St.Social>
        </St.Ul>
        {/* Boton Hamburguesa */}
        <button
          className={
            showMenu
              ? 'hamburger hamburger--collapse is-active'
              : 'hamburger hamburger--collapse'
          }
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        {/* ==== Mi Nav menu ====  */}
        <NavbarMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        {/* ==== Cierra Mi Nav menu ====  */}
      </St.Nav>
    </St.Header>
  )
}
