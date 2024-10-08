import { App } from "./types"

type GetAppsPayload = {
  pageNumber: number
  pageSize: number
}

interface GetAppsResponse {
  appRows: App[]
  totalCount: number
}

export const getApps = async (payload: GetAppsPayload): Promise<GetAppsResponse> => {
  try {
    const res = await fetch(`/api/v1/app-service/get-apps`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const apps = await res.json()
    return apps
  } catch (error: unknown) {
    throw new Error(`Failed to fetch apps ${error}`)
  }
}
