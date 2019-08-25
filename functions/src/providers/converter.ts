import { converter as convertForGizmode } from './gizmode/converter'
import { converter as convertForToyokeizai } from './toyokeizai/converter'

export class Converter {
  name: string

  constructor(name: string) {
    this.name = name
  }

  // itemsがproviderによってばらばらだから肩が定義しづらい
  convert(items: any) {
    if (this.name === 'gizmodo') {
      return convertForGizmode(items)
    }
    else if (this.name === 'toyokeizai') {
      return convertForToyokeizai(items)
    }
    else {
      console.error('converter not found', items)
    }
    return []
  }
}