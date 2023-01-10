import { FC, useState } from 'react'
import 'twin.macro'
import { BsArrowRight } from 'react-icons/bs'
import { proyectosCategoriaProps } from '../../../interfaces/proyectos-list'
import { FiltroBtn } from './FiltroBtn'
import * as St from './SectionMasProyectos.styled'
import { AnimatePresence, motion } from 'framer-motion'
import { variantsLeft } from '../../../animations'
import Image from 'next/image'

interface Props {
  proyectosCategoria: proyectosCategoriaProps[]
}

export const SectionMasProyectosCategorias: FC<Props> = ({
  proyectosCategoria,
}) => {
  const [proyectos, setProyectos] =
    useState<proyectosCategoriaProps[]>(proyectosCategoria)
  return (
    <section tw="bg-fondo">
      <St.Container>
        <motion.h2
          tw="text-secondary"
          variants={variantsLeft}
          initial="position"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span tw="text-primary">01.</span> Categoria de proyectos
        </motion.h2>
        {/* Mis Botones de filtrado */}

        <FiltroBtn setProyectos={setProyectos} />
        <St.GridProyect layout>
          {/* AnimatePresence Sirve para animar el manejo de estados cuando quitamos o agregamos elementos */}
          <AnimatePresence>
            {proyectos.map(item => (
              <St.Card
                key={item.id}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <figure>
                  <Image
                    width={500}
                    height={500}
                    tw="lg:h-[250px]"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <St.CardBody>
                  <St.SpanTitle>{item.title}</St.SpanTitle>
                  <St.Visited
                    className="group"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.link}
                    <St.VisitedSpan>
                      <BsArrowRight size={20} />
                    </St.VisitedSpan>
                  </St.Visited>
                </St.CardBody>
              </St.Card>
            ))}
          </AnimatePresence>
        </St.GridProyect>
      </St.Container>
    </section>
  )
}
