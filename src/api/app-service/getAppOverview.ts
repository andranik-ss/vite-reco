import { App } from './types'

type GetAppsPayload = {
  id: string
}

type GetAppOverviewResponse = {
  appOverview: App
}

export const getAppOverview = async ({ id }: GetAppsPayload): Promise<GetAppOverviewResponse> => {
  try {
    const res = await fetch(`/api/v1/app-service/get-app-overview/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
    })
    const data = await res.json()
    return data
  } catch (error: unknown) {
    throw new Error(`Failed to fetch apps ${error}`)
  }
}
