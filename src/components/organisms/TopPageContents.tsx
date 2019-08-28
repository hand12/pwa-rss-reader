import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../ducks/cards/types'
import { Stock } from '../../ducks/stocks/types'
import Cards from '../molecules/Cards'
import StockIcon from '../atoms/StockIcon'
import Loading from '../atoms/Loading'
import TopImage from '../../assets/images/topImage.png'
import './TopPageContents.scss'

interface TopPageContentsProps {
  getFeeds(genre: string): void,
  addStock(stock: Stock): void,
  cards: Card[],
  stocks: Stock[]
  feeds: {
    loading: boolean
  }
}

export const GENRES = [
  {
    name: 'Gadget',
    label: 'ガジェット'
  },
  {
    name: 'Economy',
    label: '経済'
  },
  {
    name: 'Technology',
    label: 'テクノロジー'
  },
  {
    name: 'Global',
    label: '海外'
  }
]

const selectedGenre = () => {
  const param = new URLSearchParams(window.location.search)
  const genre = param.get('genre') || 'Gadget'
  return genre
}

const genreLabel = () => {
  const genreName = selectedGenre()
  const genre = GENRES.find(g => g.name === genreName) || GENRES[0]
  return genre.label
}

const TopPageContents: FC<TopPageContentsProps> = ({ getFeeds, addStock, cards, stocks, feeds }) => {
  const getCards = (genre: string) => {
    if (GENRES.some(g => g.name === genre)) { getFeeds(genre!) }
    else getFeeds('Gadget')
  }

  useEffect(() => {
    const genre = selectedGenre()
    getCards(genre)
  }, [])

  return (
    <div className="mainContents">
      <div className="topImageContents">
        <img src={ TopImage } />
      </div>
      <div className="genreTitle">
        <span className="genreLabel">{ genreLabel() }</span>
        のニュース一覧
      </div>
      <div className="cardsContents">
        {
          feeds.loading ? <Loading /> : <Cards cards={ cards } addStock={ addStock } />
        }
      </div>
      <div className="stocksIconContents">
        <StockIcon stocks={ stocks } />
      </div>
      <div className="genreListContents">
        <Link to="?genre=Gadget" onClick={ () => getCards('Gadget') }>ガジェットのニュースを探す</Link>
        <Link to="?genre=Economy" onClick={ () => getCards('Economy') }>経済のニュースを探す</Link>
        <Link to="?genre=Technology" onClick={ () => getCards('Technology') }>テクノロジーのニュースを探す</Link>
        <Link to="?genre=Global" onClick={ () => getCards('Global') }>海外のニュースを探す</Link>
      </div>
    </div>
  )
}

export default TopPageContents