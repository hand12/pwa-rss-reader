import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './GenreListContents.scss'

interface GenreListContentsProps {
  getCards(genre: string): void
}

const GenreListContents: FC<GenreListContentsProps> = ({ getCards }) => (
  <div className="genreListContents">
    <Link to="?genre=Gadget" onClick={ () => getCards('Gadget') }>ガジェットのニュースを探す</Link>
    <Link to="?genre=Economy" onClick={ () => getCards('Economy') }>経済のニュースを探す</Link>
    <Link to="?genre=Technology" onClick={ () => getCards('Technology') }>テクノロジーのニュースを探す</Link>
    <Link to="?genre=Global" onClick={ () => getCards('Global') }>海外のニュースを探す</Link>
  </div>
)

export default GenreListContents