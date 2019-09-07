import React, { FC, useEffect, useState } from 'react'
import { Stock as StockType } from '../../ducks/stocks/types'
import PilatesBanner from '../atoms/PilatesBanner'
import TechcareerBanner from '../atoms/TechcareerBanner'
import ZexyBanner from '../atoms/ZexyBanner'
import TechCampBanner from '../atoms/TechCampBanner'
import './Banners.scss'

const NoStocksLabel: FC<{}> = () => (
  <h1>ストックしている記事はありません。</h1>
)

interface BannersProps {
  stocks: StockType[]
}

const Banners: FC<BannersProps> = ({ stocks }) => {

  const [ gadgetCount, setGadgetCount ] = useState(0)
  const [ economyCount, setEconomyCount ] = useState(0)
  const [ technologyCount, setTechnologyCount ] = useState(0)
  const [ globalCount, setGlobalCount ] = useState(0)
  const [ lifeCount, setLifeCount ] = useState(0)

  useEffect(() => {

    stocks.forEach(stock => {
      if (stock.genre === 'Gadget') {
        setGadgetCount(gadgetCount + 1)
      } else if (stock.genre === 'Economy') {
        setEconomyCount(economyCount + 1)
      } else if (stock.genre === 'Technology') {
        setTechnologyCount(technologyCount + 1)
      } else if (stock.genre === 'Global') {
        setGlobalCount(globalCount + 1)
      } else if (stock.genre === 'Life') {
        setLifeCount(lifeCount + 1)
      }
    })
  }, [])

  return (
    <div className="addContainer">
      { stocks.length <= 0 ? <NoStocksLabel /> : null }
      { gadgetCount + technologyCount>= 1 ? <TechcareerBanner /> : null }
      { lifeCount >= 1 ? <PilatesBanner /> : null }
      { lifeCount >= 1 ? <ZexyBanner /> : null }
      <TechCampBanner />
    </div>
  )
}

export default Banners