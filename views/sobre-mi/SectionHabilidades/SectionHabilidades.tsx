import { images } from './attributes'
import * as St from './SectionHabilidades.styled'
import 'twin.macro'
import { variantsLeft } from '../../../animations'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const SectionHabilidades = () => {
  return (
    <St.SectionHabilidades>
      <motion.h2
        tw="text-secondary"
        variants={variantsLeft}
        initial="position"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span tw="text-primary">03.</span> Mis Habilidades
      </motion.h2>
      <St.Grid>
        {images.map(image => (
          <St.Figure key={image.id}>
            <motion.img
              tw="object-contain"
              src={image.img}
              alt={image.title}
              drag
              loading="lazy"
              dragConstraints={{
                top: -10,
                left: -10,
                right: 0,
                bottom: 0,
              }}
            />
          </St.Figure>
        ))}
      </St.Grid>
    </St.SectionHabilidades>
  )
}
