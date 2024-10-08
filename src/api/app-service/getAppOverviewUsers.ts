type GetAppsPayload = {
  id: string
}

type GetAppOverviewUsersResponse = {
  appUsers: string[]
}

export const getAppOverviewUsers = async ({ id }: GetAppsPayload): Promise<GetAppOverviewUsersResponse> => {
  try {
    const res = await fetch(`/api/v1/app-service/get-app-overview-users/${id}`, {
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
