import { Box, styled, Text } from '@devfloydbr-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray600',
  padding: '$4 $6',
  boderRadius: '$md',

  marginBottom: '$4',
})

export const AuthErrorText = styled(Text, {
  color: '$red500',
  marginBottom: '$4',
})
