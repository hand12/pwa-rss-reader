import { converter as convertForGizmode } from './gizmode/converter'
import { converter as convertForToyokeizai } from './toyokeizai/converter'
import { converter as convertForCnn } from './cnn/converter'
import { converter as convertForCnet } from './cnet/converter'
import { converter as convertForTechCrunch } from './techCrunch/converter'

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
    else if (this.name === 'cnn') {
      return convertForCnn(items)
    }
    else if (this.name === 'cnet') {
      return convertForCnet(items)
    }
    else if (this.name === 'techCrunch') {
      return convertForTechCrunch(items)
    }
    else {
      console.error('converter not found', items)
    }
    return []
  }
}