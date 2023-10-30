import React from 'react'
import EmojiButton from './EmojiButton'

// function SnackLis({ snack }) {
//     return <li className='favoriteList'>{snack}</li>
// }

const defaultImageUrl = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"


function PetCard({ name, image = defaultImageUrl, favSnacks, isAdopted }) {
    const snackLis = favSnacks.map(snack => <li className='favoriteList' key={snack}>{snack}</li>)
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            {isAdopted ? null : <EmojiButton label="Adopt" />}
            <h3>Favorite Snacks</h3>
            <ul>
                {snackLis}
            </ul>
        </div>
    )
}

export default PetCard
