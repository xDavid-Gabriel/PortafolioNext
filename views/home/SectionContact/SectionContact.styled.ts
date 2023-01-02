import tw from 'twin.macro'
export const SectionContact = tw.section`bg-fondo`
export const Container = tw.div`container grid lg:grid-cols-2 gap-20 py-40`
export const Contact = tw.div`container flex flex-col gap-10`
export const ContactLink = tw.a`flex gap-5 items-center w-fit`
export const ContactIcon = tw.div`w-[3.5rem] h-[3.5rem] grid place-content-center rounded-full border-[1px] border-primary flex-none`
export const ContactInfo = tw.div`flex flex-col gap-1`
export const BgForm = tw.div`bg-bodycard px-5 py-10 sm:px-20 md:px-28 flex flex-col gap-10`
export const FormTitle = tw.span`font-semibold text-3xl text-secondary`
export const Form = tw.form`flex flex-col gap-5`
export const Input = tw.input`bg-white p-5 rounded-2xl outline-none w-full`
export const TextArea = tw.textarea`bg-white p-5 rounded-2xl resize-none outline-none w-full h-48`
