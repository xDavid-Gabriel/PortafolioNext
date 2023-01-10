import { FC, useRef, useEffect } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import * as St from './SectionHero.styled'
import 'twin.macro'
import Typed, { TypedOptions } from 'typed.js'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const SectionHero: FC = () => {
  const el = useRef<HTMLSpanElement>(null)
  const elTwo = useRef<HTMLDivElement>(null)

  //const  a = new Typed()
  useEffect(() => {
    //En typescript con el useRef debemos hacer una validacion en el.current
    if (el.current && elTwo.current) {
      const options: TypedOptions = {
        // strings: ['Gabriel', 'Cayllahua', 'Betalleluz'],
        startDelay: 1700,
        typeSpeed: 110,
        backSpeed: 110,
        loop: true,
        backDelay: 2500,
        shuffle: false,
        showCursor: true,
        smartBackspace: false,
        stringsElement: elTwo.current,
      }

      const typed: Typed = new Typed(el.current, options)
      return () => {
        typed.destroy()
      }
    }
  }, [])
  return (
    <>
      <St.Section>
        <motion.div
          initial={{
            background: '#b90e47',
            minHeight: '100vh',
            position: 'fixed',
            width: '100%',
            zIndex: 30,
          }}
          animate={{ minHeight: 0 }}
          transition={{ duration: 0.6 }}
        />
        <St.ContainerGrid>
          <St.Figure
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Image
              width={500}
              height={500}
              src="https://i.postimg.cc/HsVzPRTG/Group-127.png"
              alt="Decoración"
              loading="lazy"
            />
          </St.Figure>

          <St.ColumnOne>
            <St.H1>
              David <br />
              <span tw="text-primary" ref={el}></span>
            </St.H1>
            {/* Para que se guie por estas referencias para los buscadores por defecto la libreria lo esconde con la propiedad stringsElement */}
            <div ref={elTwo}>
              <p>Gabriel</p>
              <p>Cayllahua</p>
              <p>Betalleluz</p>
            </div>
            {/* Decoración */}
            <St.Decoration />
            {/*Cierra Decoración */}
            <St.ContentDes>
              <St.Description>
                diseñador <br />
                desarrollador
              </St.Description>
              <St.Span>Web /</St.Span>
            </St.ContentDes>
            {/* Animacion Scroll Mobile*/}
            <St.itemScroll variant="mobile">
              <St.btnScroll>
                <HiArrowDown color="#fff" size={20} />
              </St.btnScroll>
              Scroll
            </St.itemScroll>
            {/* Cierra Animacion Scroll Mobile */}
          </St.ColumnOne>

          <St.ColumnTwo>
            <source
              srcSet="https://portfolio-lake-nu.vercel.app/static/media/rayas-escritorio.4239944e.svg"
              media="(min-width:768px)"
            />
            <img
              src="https://i.postimg.cc/Vvd8zykw/Group-118.png"
              alt="Decoraciones"
            />
          </St.ColumnTwo>
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
        <St.Pulse
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="https://i.postimg.cc/y69s7x7v/Group-128.png"
          alt="..."
        />
        {/* Decoración Shape */}
        <St.Shape src="https://i.postimg.cc/tCRs9sVn/shape.png" alt="..." />
      </St.Section>
    </>
  )
}
