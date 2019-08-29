import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './GenreListContents.scss'

interface GenreListContentsProps {
  getCards(genre: string): void
  selectedGenre: {
    name: string
    label: string
  }
}

const GenreListContents: FC<GenreListContentsProps> = ({ getCards, selectedGenre }) => {
  const genreClassNames = (genre: string) => classNames('genre', { 'selected' :  isSelected(genre) })
  const isSelected = (genre: string) => genre === selectedGenre.name

  return (
    <div className="genreListContents">
      <ul>
        <li className={ genreClassNames("Gadget") }>
          <Link to="?genre=Gadget" onClick={ () => getCards('Gadget') }>ガジェット</Link>
        </li>
        <li className={ genreClassNames("Economy") }>
          <Link to="?genre=Economy" onClick={ () => getCards('Economy') }>経済</Link>
        </li>
        <li className={ genreClassNames("Technology") }>
          <Link to="?genre=Technology" onClick={ () => getCards('Technology') }>テクノロジー</Link>
        </li>
        <li className={ genreClassNames("Global") }>
          <Link to="?genre=Global" onClick={ () => getCards('Global') }>海外</Link>
        </li>
      </ul>
    </div>
  )
}

export default GenreListContents