import React from 'react'
import Button from 'react-bootstrap/Button' //react components used must be imported from the bootstrap Library after installing it

const prevLikedItems = JSON.parse(sessionStorage.getItem("likedItems"))

export default class Favourites extends React.Component{
    render() {
    return (
        <div className="styleData">{
            prevLikedItems.map((item, index) => (
                <div key={index}>
                    <p className='positionData'>
                        {item.title}
                        <br />
                        {item.artist}
                    </p>

                    <a
                        href={item.profile}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                    <img
                        src={item.artwork}
                        alt="Album Artwork"
                        className="styleAlbum"
                    />
                    </a>
                    <br />
                    <p>
                        {item.album}

                    <br />
                    <a
                        href={item.preview}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Preview
                    </a>

                    </p>

                    <Button
                        variant="dark"
                        onClick={() => {
                            prevLikedItems.splice(index, 1)
                            sessionStorage.setItem("likedItems", JSON.stringify(prevLikedItems))
                            window.location.reload()
                        }}
                        size="sm"
                    >
                        Unlike
                    </Button>

                    </div>
                ))
            }
        </div>
    )
    }
}
