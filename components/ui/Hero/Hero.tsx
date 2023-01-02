import { FC } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import * as St from './Hero.styled'
import 'twin.macro'
import { Button } from '../' //Components
import { motion } from 'framer-motion'
import { variantsLeft } from '../../../animations'

interface Props {
  img: string
  imgAlt: string
  number?: string
  title: string
  description: string
  link: string
  showLink: boolean
}

export const Hero: FC<Props> = ({
  img,
  imgAlt,
  number,
  title,
  description,
  link,
  showLink,
}) => {
  return (
    <St.Section>
      <St.ContainerGrid>
        <div tw="relative md:order-2">
          <St.Figure
            initial={{ scale: 0, translateX: 100 }}
            animate={{ scale: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={img} alt={imgAlt} />

            <motion.div
              initial={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                translateX: '-100%',
                background: '#161616',
              }}
              transition={{ duration: 1.3, delay: 0.3 }}
              animate={{ translateX: '110%' }}
            />
            <motion.div
              initial={{
                position: 'absolute',
                width: '100%',
                background: '#EF0454',
                translateX: '-100%',
                top: 0,
                height: '100%',
              }}
              transition={{ duration: 1.3, delay: 0.6 }}
              animate={{ translateX: '110%' }}
            />
          </St.Figure>
          <St.NumberSpan>{number}</St.NumberSpan>
        </div>
        <St.ContentDes>
          <St.H1 variants={variantsLeft} initial="position" animate="visible">
            {title}
            {/* Mis <br /> <span tw="md:text-primary">Trabajos</span> */}
          </St.H1>
          {/* Decoración */}
          <St.Decoration
            variants={variantsLeft}
            initial="position"
            animate="visible"
          />
          {/*Cierra Decoración */}

          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            tw="text-white max-w-[20rem]"
          >
            {description}
          </motion.p>
          {showLink && (
            <Button
              variant="primary"
              target="_blanck"
              href={link}
              rel="noreferrer"
            >
              Visitar sitio
            </Button>
          )}
        </St.ContentDes>
        {/* Animacion Scroll Mobile*/}
        <St.itemScroll variant="mobile">
          <St.btnScroll>
            <HiArrowDown color="#fff" size={20} />
          </St.btnScroll>
          Scroll
        </St.itemScroll>
        {/* Cierra Animacion Scroll Mobile */}

        <St.Picture>
          <source
            srcSet="https://portfolio-lake-nu.vercel.app/static/media/rayas-escritorio.4239944e.svg"
            media="(min-width:768px)"
          />
          <img
            src="https://i.postimg.cc/Vvd8zykw/Group-118.png"
            alt="Decoraciones"
          />
        </St.Picture>
      </St.ContainerGrid>
      {/* Animacion Scroll Desktop*/}
      <St.itemScroll variant="desktop">
        <St.btnScroll>
          <HiArrowDown color="#fff" size={20} />
        </St.btnScroll>
        Scroll
      </St.itemScroll>
      {/* Cierra Animacion Scroll Desktop */}

      {/* Animacion Pulse */}
      <St.Pulse src="https://i.postimg.cc/y69s7x7v/Group-128.png" alt="..." />
      {/* Decoración Shape */}
      <St.Shape src="https://i.postimg.cc/tCRs9sVn/shape.png" alt="..." />
    </St.Section>
  )
}
