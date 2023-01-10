import 'twin.macro'
import { Button } from '../../../components/ui'
import * as St from './SectionAboutMe.styled'
import { motion } from 'framer-motion'
import { variantsLeft } from '../../../animations'
import Image from 'next/image'

export const SectionAboutMe = () => {
  return (
    <St.SectionAboutMe>
      <St.Item>
        <motion.h2
          tw="text-secondary"
          variants={variantsLeft}
          initial="position"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span tw="text-primary">02.</span> Sobre mi
        </motion.h2>
        <p>Hola, soy David Gabriel y me gustaría contarles algo sobre mí</p>

        <Button href="/sobre-mi" variant="primary">
          Leer mas
        </Button>
      </St.Item>
      <motion.figure
        tw="relative overflow-hidden"
        initial={{ scale: 0, translateX: 100 }}
        whileInView={{ scale: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          width={500}
          height={500}
          src="https://i.postimg.cc/wMg0jfQM/about.png"
          alt="Sobre mi"
        />

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
          whileInView={{ translateX: '110%' }}
          viewport={{ once: true }}
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
          whileInView={{ translateX: '110%' }}
          viewport={{ once: true }}
        />
      </motion.figure>
    </St.SectionAboutMe>
  )
}
