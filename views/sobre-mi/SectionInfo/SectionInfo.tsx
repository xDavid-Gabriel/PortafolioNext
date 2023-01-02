import { Button } from '../../../components/ui'
import { ListOne, ListTwo } from './attributes'
import * as St from './SectionInfo.styled'
import 'twin.macro'
import { variantsLeft } from '../../../animations'
import { motion } from 'framer-motion'

export const SectionInfo = () => {
  return (
    <St.SectionInfo>
      <motion.h2
        tw="text-secondary"
        variants={variantsLeft}
        initial="position"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span tw="text-primary">01.</span> Mi presentación
      </motion.h2>

      <St.Grid>
        <figure>
          <img
            src="https://i.postimg.cc/q7r0Q7q6/about-us.png"
            alt="Fografia"
          />
        </figure>
        <St.Flex>
          <h2 tw="text-secondary">Desarrollador web con experiencia</h2>
          <p>
            Soy un experto en desarrollo frontend altamente motivado y
            apasionado por el diseño y desarrollo de aplicaciones web modernas.
            Tengo una amplia experiencia en el prototipado y llevación de
            proyectos a producción y me encanta trabajar en equipo. Mi facilidad
            de aprendizaje me permite adaptarme rápidamente a nuevas tecnologías
            y tendencias en el campo del desarrollo web. Mi objetivo es siempre
            ofrecer soluciones innovadoras y de alta calidad utilizando las
            últimas técnicas y tecnologías del desarrollo frontend.
          </p>

          <St.GridDatos>
            <St.List>
              {ListOne.map(list => (
                <li tw="font-medium text-secondary" key={list.id}>
                  <span>
                    {list.nombre}
                    <St.Datos>{list.des}</St.Datos>
                  </span>
                </li>
              ))}
            </St.List>

            <St.List>
              {ListTwo.map(list => (
                <li tw="font-medium text-secondary" key={list.id}>
                  <span>
                    {list.nombre}
                    <St.Datos>{list.des}</St.Datos>
                  </span>
                </li>
              ))}
            </St.List>
          </St.GridDatos>
          <Button variant="primary" href="/pdf-view">
            VER CV
          </Button>
        </St.Flex>
      </St.Grid>
    </St.SectionInfo>
  )
}
