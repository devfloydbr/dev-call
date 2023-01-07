import { Container, Form, FormError, Header } from './styles'
import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@devfloydbr-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '../../lib/axios'
import { AxiosError } from 'axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'No mínimo 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'No mínimo 3 caracteres' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const handleRegister = async (data: RegisterFormData) => {
    const { username, name } = data

    try {
      await api.post('/users', { username, name })

      await router.push('/register/connect-calendar')
    } catch (e) {
      if (e instanceof AxiosError && e.response?.data.message) {
        alert(e.response.data.message)
      }
    }
  }

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Bem-vindo ao Dev Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
        <Form as={'form'} onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size={'sm'}>Nome de Usuário</Text>
            <TextInput
              prefix={'call.floyd.dev.br/'}
              placeholder={'seu-usuário'}
              {...register('username')}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </label>

          <label>
            <Text size={'sm'}>Nome completo</Text>
            <TextInput placeholder={'seu-nome'} {...register('name')} />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </label>

          <Button type={'submit'} disabled={isSubmitting}>
            Próximo Passo
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
