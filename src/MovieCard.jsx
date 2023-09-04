import React from 'react';
// importing react

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
{/* movieCard function with data from api for each movie */}

    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            {/* year of movie */}

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            {/* placeholder poster in case if a movie doesn't have a poster */}

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
            {/* type of movie and title */}
        </div>
    )
}

export default MovieCard;
// export component