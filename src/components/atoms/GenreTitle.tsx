import React, { FC } from 'react'
import './GenreTitle.scss'

interface GenreTitleProps {
  genre: {
    name: string
    label: string
  }
}

const GenreTitle: FC<GenreTitleProps> = ({ genre }) => (
  <div className="genreTitle">
    <span className="genreLabel">{ genre.label }</span>
    のニュース一覧
  </div>
)

export default GenreTitle