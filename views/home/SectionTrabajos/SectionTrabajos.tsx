import { FC } from 'react'
import { Button } from '../../../components/ui'
import { ProyectosHome } from '../../../components/proyectos'
import { proyectosProps } from '../../../interfaces'
import * as St from './SectionTrabajos.styled'
import { variantsLeft } from '../../../animations'
import 'twin.macro'

interface Props {
  proyectos: proyectosProps[]
}
export const SectionTrabajos: FC<Props> = ({ proyectos }) => {
  return (
    <St.Section>
      <St.Item>
        <St.H2
          variants={variantsLeft}
          initial="position"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span tw="text-primary">01. </span> Algunas cosas que he construido
        </St.H2>
        <ProyectosHome proyectos={proyectos} />
        <Button href="/mas-proyectos" variant="primaryOutline" tw="mx-auto">
          VER MAS PROYECTOS
        </Button>
      </St.Item>
    </St.Section>
  )
}
