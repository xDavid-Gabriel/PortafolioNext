// import { Hero } from "../../"; //Components
import { FC } from 'react'
import { proyectosProps } from '../../../interfaces'
import { BsArrowLeft } from 'react-icons/bs'
import * as St from './ProyectosDetalle.styled'
import 'twin.macro'
import { motion } from 'framer-motion'

interface Props {
  proyectos: proyectosProps
}
export const ProyectosDetalle: FC<Props> = ({ proyectos }) => {
  return (
    <St.Section>
      <St.RoleContent>
        <St.Info>
          <motion.div
            initial={{ rotate: -50, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <St.Title>ROLE</St.Title>
            <St.Description>{proyectos.role}</St.Description>
          </motion.div>

          <motion.div
            initial={{ rotate: -50, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <St.Title>FECHA</St.Title>
            <St.Description>{proyectos.fecha}</St.Description>
          </motion.div>

          <motion.div
            initial={{ rotate: -50, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <St.Title>VISIÓN GENERAL</St.Title>
            <St.Description>{proyectos.visionGeneral}</St.Description>
          </motion.div>
        </St.Info>
        <St.Mockup>
          <img src={proyectos.imgMockup} alt={proyectos.title} />
        </St.Mockup>
      </St.RoleContent>
      <St.Item>
        <St.MobileNumber>01</St.MobileNumber>
        <St.ItemDesktopNumber>
          <St.DesktopNumber>01</St.DesktopNumber>
        </St.ItemDesktopNumber>
        <St.Information>
          <St.H2>Concepto</St.H2>
          <St.P>{proyectos.concepto}</St.P>
        </St.Information>
      </St.Item>

      <div tw="bg-primary h-[350px]"></div>

      <St.Item>
        <St.MobileNumber>02</St.MobileNumber>
        <St.ItemDesktopNumber>
          <St.DesktopNumber>02</St.DesktopNumber>
        </St.ItemDesktopNumber>
        <St.Information>
          <St.H2>Desarrollo</St.H2>
          <St.P>{proyectos.desarrollo}</St.P>
        </St.Information>
      </St.Item>
      <St.Fondo>
        <St.MockupWeb>
          <figure>
            <img src={proyectos.imgOne} alt={proyectos.title} />
          </figure>
          <figure>
            <img src={proyectos.imgTwo} alt={proyectos.title} />
          </figure>

          <St.Atras href="/" className="group">
            <St.ArrowLeft>
              <BsArrowLeft size={50} />
            </St.ArrowLeft>
            Atras
          </St.Atras>
        </St.MockupWeb>
      </St.Fondo>
    </St.Section>
  )
}
