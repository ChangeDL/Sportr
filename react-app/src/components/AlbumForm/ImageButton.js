import React, { useState } from 'react';

const ImageButton = ({ image, photoSelect }) => {
    const [selected, setSelected] = useState(false);

    return (
        <button className='select-photo-button-album' onClick={e => [photoSelect(e, image.id), setSelected(!selected)]} style={{ backgroundColor: selected ? "rgb(153,153,153)" : 'white' }}>
            <img src={image.url} alt={image.alt} className='photos-to-be-selected-album-form' />
        </button>
    );
};

export default ImageButton
