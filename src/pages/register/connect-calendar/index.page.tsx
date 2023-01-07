import { Container, Header } from '../styles'
import { Button, Heading, MultiStep, Text } from '@devfloydbr-ui/react'
import { ConnectBox, ConnectItem } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  /*  const router = useRouter()

  const handleRegister = async () => {} */

  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant={'secondary'} size={'sm'}>
            Conectar <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type={'submit'}>
          Próximo Passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
