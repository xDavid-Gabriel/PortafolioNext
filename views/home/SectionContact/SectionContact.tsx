import React from 'react'
import 'twin.macro'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { Button } from '../../../components/ui'
import * as St from './SectionContact.styled'
import { variantsLeft } from '../../../animations'
import { motion } from 'framer-motion'
import { useForm } from '../../../hooks'
export const SectionContact = () => {
  const { description, nombre, email, telefono, handleChange, onResetForm } =
    useForm({
      nombre: '',
      telefono: '',
      email: '',
      description: '',
    })

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    let cabecera = `*Mensaje enviado de la página web Gabriel Portafolio*`
    let nom = `%0A*Nombre:* ${nombre}%0A*Telefono:* ${telefono}`
    let correo = `*Email:* ${email}`
    let mensaje = `*Mensaje:* ${description}`
    window.open(
      `https://api.whatsapp.com/send?phone=51988848573&text='${cabecera} ${nom}"%0A"${correo}"%0A"${mensaje}`,
    )

    onResetForm()
  }

  return (
    <St.SectionContact id="contact">
      <St.Container>
        <St.Contact>
          <motion.h2
            tw="text-secondary"
            variants={variantsLeft}
            initial="position"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span tw="text-primary">03.</span> Contactame
          </motion.h2>
          <p>
            Si deseas colaborar conmigo, no dudes en escribirme. Estoy seguro de
            que podemos hacer un gran trabajo juntos.
          </p>
          <St.Contact>
            <St.ContactLink href="mailto:davidbetalleluz31@gmail.com">
              <St.ContactIcon>
                <AiOutlineMail size={25} tw="text-primary" />
              </St.ContactIcon>
              <St.ContactInfo>
                <span tw="font-semibold">Email</span>
                <p tw="break-all">davidbetalleluz31@gmail.com</p>
              </St.ContactInfo>
            </St.ContactLink>
            <St.ContactLink href="tel:+51988848573">
              <St.ContactIcon>
                <AiOutlineWhatsApp size={25} tw="text-primary" />
              </St.ContactIcon>
              <St.ContactInfo>
                <span tw="font-semibold">Teléfono</span>
                <p>+51 988 848 573</p>
              </St.ContactInfo>
            </St.ContactLink>
          </St.Contact>
        </St.Contact>
        {/* Mi Formulario */}
        <St.BgForm>
          <St.FormTitle>Escribeme</St.FormTitle>
          <St.Form onSubmit={onFormSubmit}>
            <St.Input
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
              value={nombre}
              name="nombre"
              required
            />
            <St.Input
              onChange={handleChange}
              type="text"
              placeholder="Teléfono"
              value={telefono}
              name="telefono"
              required
            />
            <St.Input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              required
            />
            <St.TextArea
              onChange={handleChange}
              placeholder="Mensaje"
              value={description}
              name="description"
              required
            ></St.TextArea>
            <Button as="button" variant="primary" tw="w-full mt-3">
              Enviar
            </Button>
          </St.Form>
        </St.BgForm>
        {/* Cierra Formulario */}
      </St.Container>
    </St.SectionContact>
  )
}
