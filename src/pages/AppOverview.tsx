import { memo, useEffect, useState } from 'react'
import { getAppOverview } from '@/api/app-service/getAppOverview'
import { getAppOverviewUsers } from '@/api/app-service/getAppOverviewUsers'
import { Button, Divider, Drawer, List, ListItem, Stack, Typography } from '@mui/material'

interface AppOverviewProps {
  appId: string
  closeDrawer: () => void
}

type AppOverviewResponse = Awaited<ReturnType<typeof getAppOverview>>

export const AppOverview = memo(({ appId, closeDrawer }: AppOverviewProps) => {
  const [overview, setOverview] = useState<AppOverviewResponse['appOverview'] | null>(null)
  const [appUsers, setAppUsers] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!appId) return

    setIsLoading(true)

    Promise.all([getAppOverview({ id: appId }), getAppOverviewUsers({ id: appId })])
      .then(([appOverviewResp, appOverviewUsers]) => {
        setOverview(appOverviewResp.appOverview)
        setAppUsers(appOverviewUsers.appUsers)
      })
      .catch((err) => {
        // show toast ???
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [appId])

  if (!overview || !appUsers || isLoading) {
    return <div>Loading...</div>
  }

  console.log(appUsers)
  console.log(overview)

  return (
    <Drawer variant='permanent' anchor='right' open={Boolean(appId)}>
      <Stack p={2} direction={'column'} textAlign={'left'}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant='h5' my={3} align='left'>
            App overview
          </Typography>
          <Button onClick={closeDrawer}>Close</Button>
        </Stack>
        <Typography variant='h6'>{overview.appId}</Typography>
        <Stack direction={'column'} border={1} borderRadius={2} p={2} textAlign={'left'} borderColor={'#1F5CED'}>
          <Typography variant='h6'>App name: {overview.appName}</Typography>
          <Typography variant='h6'>Category: {overview.category}</Typography>
          <Typography variant='h6'>Users: {appUsers.length}</Typography>
          <Typography variant='h6'>Connector: {overview.appSources.join(', ')}</Typography>
        </Stack>
        <List>
          <Typography variant='subtitle1' my={3} align='left'>
            Username
          </Typography>
          <Divider />
          {appUsers.map((appUser) => (
            <>
              <ListItem>
                <Typography key={appUser} variant='h6'>
                  {appUser}
                </Typography>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Stack>
    </Drawer>
  )
})
