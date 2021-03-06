import { converter as convertForGizmode } from './gizmode/converter'
import { converter as convertForGadgetTsushin } from './gadgetTsushin/converter'
import { converter as convertForToyokeizai } from './toyokeizai/converter'
import { converter as convertForGooBusiness } from './gooBusiness/converter'
import { converter as convertForCnn } from './cnn/converter'
import { converter as convertForLabaq } from './labaq/converter'
import { converter as convertForCnet } from './cnet/converter'
import { converter as convertForTechCrunch } from './techCrunch/converter'
import { converter as convertForLifehacker } from './lifehacker/converter'
import { converter as convertForItlifehack } from './itlifehack/converter'
import { converter as convertForHamusoku } from './hamusoku/converter'

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
    else if (this.name === 'gadgetTsushin') {
      return convertForGadgetTsushin(items)
    }
    else if (this.name === 'toyokeizai') {
      return convertForToyokeizai(items)
    }
    else if (this.name === 'goo-business') {
      return convertForGooBusiness(items)
    }
    else if (this.name === 'cnn') {
      return convertForCnn(items)
    }
    else if (this.name === 'labaq') {
      return convertForLabaq(items)
    }
    else if (this.name === 'cnet') {
      return convertForCnet(items)
    }
    else if (this.name === 'techCrunch') {
      return convertForTechCrunch(items)
    }
    else if (this.name === 'lifehacker') {
      return convertForLifehacker(items)
    }
    else if (this.name === 'itlifehack') {
      return convertForItlifehack(items)
    }
    else if (this.name === 'hamusoku') {
      return convertForHamusoku(items)
    }
    else {
      console.error('converter not found', items)
    }
    return []
  }
}