import { Item } from './types'
import { PROVIDERS, ProviderType } from '../index'

const provider = PROVIDERS.find((provider: ProviderType) => provider.name === 'itlifehack')

export const converter = (items: Item[]) => {
  if (!provider) return []

  return items.map(item => {
    const contents = item.content.match("<img.*src\s*=\s*[\"|\'](.*?)[\"|\'].*>")

    return {
      genre: provider.genre,
      provider: provider.name,
      title: item.title,
      link: item.link,
      image: contents ? contents[1] : '',
      pubDate: new Date(item.isoDate),
      createdAt: new Date
    }
  })
}