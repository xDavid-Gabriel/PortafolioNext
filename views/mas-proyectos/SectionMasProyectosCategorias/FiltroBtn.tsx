import { useEffect, FC } from 'react'
import { Button } from '../../../components/ui'
import { proyectosCategoriaProps } from '../../../interfaces'
import { useFilter } from '../../../hooks'
import { ButtonList } from './SectionMasProyectos.styled'
import tw from 'twin.macro'

type SetPropsType = {
  setProyectos: React.Dispatch<React.SetStateAction<proyectosCategoriaProps[]>>
}
export const FiltroBtn: FC<SetPropsType> = ({ setProyectos }) => {
  const { allProyect, activo, setActivo, filtradoProyectos, getCategoria } =
    useFilter([], { setProyectos })

  useEffect(() => {
    getCategoria()
  }, [])
  return (
    <ButtonList>
      <Button
        as="button"
        css={activo.todos ? tw`bg-primary text-white` : ''}
        variant="primaryOutline"
        onClick={() => {
          setProyectos(allProyect)
          setActivo({ todos: true })
        }}
      >
        Todos
      </Button>
      <Button
        css={activo.portafolio ? tw`bg-primary text-white` : ''}
        as="button"
        variant="primaryOutline"
        onClick={() => {
          filtradoProyectos('portafolio')
          setActivo({ portafolio: true })
        }}
      >
        Portafolio
      </Button>
      <Button
        css={activo.figma ? tw`bg-primary text-white` : ''}
        as="button"
        variant="primaryOutline"
        onClick={() => {
          filtradoProyectos('figma')
          setActivo({ figma: true })
        }}
      >
        Figma
      </Button>
      <Button
        css={activo.frontendMentor ? tw`bg-primary text-white` : ''}
        as="button"
        variant="primaryOutline"
        onClick={() => {
          filtradoProyectos('frontendmentor')
          setActivo({ frontendMentor: true })
        }}
      >
        Frontend Mentor
      </Button>
    </ButtonList>
  )
}
