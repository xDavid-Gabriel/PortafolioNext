import { FC } from 'react'
import { Button } from '../../../components/ui'
import { proyectosProps } from '../../../interfaces'
import { convertToPath } from '../../../utils'
import * as St from './ProyectosHome.styled'

interface Props {
  proyectos: proyectosProps[]
}

export const ProyectosHome: FC<Props> = ({ proyectos }) => {
  return (
    <St.Grid>
      {proyectos.map(item => (
        <St.Cards
          key={item.id}
          initial={{ translateY: 150, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: item.delay }}
          viewport={{ once: true }}
        >
          <St.Figure className="group">
            <St.Imagenes
              width={500}
              height={400}
              src={item.image}
              alt={item.title}
            />
            {/* Contenido Desktop */}
            <St.ContentDes>
              <p>{item.funcion}</p>
              <St.SpanDesktop> {item.title}</St.SpanDesktop>
            </St.ContentDes>
          </St.Figure>
          {/* Contenido Mobile */}
          <St.ContentMobile>
            <St.SpanMobile>{item.title}</St.SpanMobile>
            <St.Description>{item.description}</St.Description>
          </St.ContentMobile>

          <Button
            href={`/proyectos/${convertToPath(item.title)}`}
            variant="primary"
          >
            Ver proyecto
          </Button>
        </St.Cards>
      ))}
    </St.Grid>
  )
}

// {`/${convertToPath(item.title)}`}
