import { Item } from './types'
import { PROVIDERS, ProviderType } from '../index'

const provider = PROVIDERS.find((provider: ProviderType) => provider.name === 'goo-business')

export const converter = (items: Item[]) => {
  if (!provider) return []

  return items.map(item => {

    return {
      genre: provider.genre,
      provider: provider.name,
      title: item.title,
      link: item.link,
      image: '',
      pubDate: new Date(item.isoDate),
      createdAt: new Date
    }
  })
}