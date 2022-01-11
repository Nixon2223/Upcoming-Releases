import React from 'react'
import Film from './Film'

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <Film url = {film.url} key = {film.id}>{film.name}</Film>
        )
    })

return (
    <>
    <h3>Film list</h3>
    {filmNodes}
    </>
)

}

export default FilmList