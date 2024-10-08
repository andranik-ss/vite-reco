import { Typography } from '@mui/material'
import AppInventoryTable from './AppInventoryTable'

function AppInventory() {
  return (
    <>
      <Typography variant='h5' my={3} align='left'>
        App Inventory
      </Typography>
      <AppInventoryTable />
    </>
  )
}

export default AppInventory
