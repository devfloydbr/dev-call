import { Heading, Text } from '@devfloydbr-ui/react'
import { Container, Hero, Preview } from './styles'

import homeImage from '../../assets/home.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dev Call</title>
      </Head>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={homeImage}
          alt="Home Image"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
