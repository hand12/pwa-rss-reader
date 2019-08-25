export const getFeeds = async (genre: string) => {
  const url = new URL('https://us-central1-pwa-rss-reader-bcbc4.cloudfunctions.net/apiFeedList')
  const params = new URLSearchParams()
  params.append('genre', genre)
  url.search = params.toString()
  const response = await fetch(url.toString())

  return response.json()
}