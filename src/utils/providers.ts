export const PROVIDERS = [
  {
    name: 'gizmodo',
    label: 'GIZMODE'
  },
  {
    name: 'gadgetTsushin',
    label: 'ガジェット通信'
  },
  {
    name: 'toyokeizai',
    label: '東洋経済'
  },
  {
    name: 'goo-business',
    label: 'gooニュース'
  },
  {
    name: 'cnn',
    label: 'CNN'
  },
  {
    name: 'labaq',
    label: 'らばQ'
  },
  {
    name: 'cnet',
    label: 'CNET'
  },
  {
    name: 'techCrunch',
    label: 'TechCrunch'
  }
]

export const convertProvider = (name: string) => {
  const provider = PROVIDERS.find(p => p.name === name)

  if (!provider) return 'No Provider'
  return provider.label
}
