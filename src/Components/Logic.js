import React from 'react'
import { useState } from 'react';

const Logic = () => {
    const [tangki, setTangki] = useState(4);

    const changeTangkiHandler = () => {
        setTangki(6);
    };

    if (tangki > 5) {
        throw new Error('Tangki Full');
    }

    return (
        <div>
            <h4>Isi Tangki</h4>
            <p>Kapasitas {tangki} Liter</p>
            <button className='btn btn-primary' onClick={changeTangkiHandler}>Cek Tangki</button>
        </div>
    )
}

export default Logic