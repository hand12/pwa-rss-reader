import { Item } from './types'
import { PROVIDERS, ProviderType } from '../index'


const provider = PROVIDERS.find((provider: ProviderType) => provider.name === 'toyokeizai')

export const converter = (items: Item[]) => {
  if (!provider) return []

  return items.map(item => {
    return {
      genre: provider.genre,
      provider: provider.name,
      title: item.title,
      link: item.link,
      image: item.enclosure.type === 'image/jpeg' ? item.enclosure.url : '',
      pubDate: new Date(item.pubDate),
      createdAt: new Date
    }
  })
}