import React from 'react'
import './card.css'
import TodayIcon from '@mui/icons-material/Today';


export default function Cards(props) {
    return (
        <div className='card2'>
            
            <img src={props.items.image} alt='logo'/>
            <div>
                
                <center><h5>{props.items.title}</h5></center>
                <center><h6>{props.items.precio}</h6></center> 
                <button type="button" class="button">Comprar</button>
            </div>

        </div>
    )
}
