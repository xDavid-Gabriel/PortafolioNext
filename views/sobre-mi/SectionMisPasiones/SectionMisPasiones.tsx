import * as St from './SectionMisPasiones.styled'
import 'twin.macro'
import { Cards } from './attributes'
import { variantsLeft } from '../../../animations'
import { motion } from 'framer-motion'

export const SectionMisPasiones = () => {
  return (
    <St.SectionMisPasiones>
      <motion.h2
        tw="text-secondary"
        variants={variantsLeft}
        initial="position"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span tw="text-primary">02.</span> Mis pasiones
      </motion.h2>
      <St.Grid>
        {Cards.map(card => (
          <St.Card className="group" key={card.title}>
            <St.Icon>{<card.icon size={70} />}</St.Icon>
            <St.TitleCard>{card.title}</St.TitleCard>
            <p>{card.description}</p>
          </St.Card>
        ))}
      </St.Grid>
    </St.SectionMisPasiones>
  )
}
