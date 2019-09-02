export const getFeeds = async (genre: string) => {
  const url = new URL(endpoint)
  const params = new URLSearchParams()
  params.append('genre', genre)
  url.search = params.toString()
  const response = await fetch(url.toString())

  return response.json()
}

const isProduction = window.location.hostname === 'news-collect.web.app'

const endpoint = isProduction ?
  'https://us-central1-news-collect.cloudfunctions.net/apiFeedList' :
  'https://us-central1-pwa-rss-reader-bcbc4.cloudfunctions.net/apiFeedList'
