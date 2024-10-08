import { ReactNode } from 'react'
import { Box, Stack, Typography } from '@mui/material'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack bgcolor='#F9FAFC' direction='column'>
      <Stack component='header' width={'100%'} height={64} textAlign={'left'} bgcolor={'#1F5CED'} justifyContent={'center'} px={3}>
        <Typography variant='h3' color='white'>Reco</Typography>
      </Stack>

      <Box component='main' p={4}>
        {children}
      </Box>
    </Stack>
  )
}
