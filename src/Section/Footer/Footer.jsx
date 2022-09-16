import React from 'react'
import './Footer.css'
import { FaMailBulk, FaPhoneSquareAlt, FaMapMarkerAlt , FaUniversity} from "react-icons/fa"

export default function Footer() {
  return (

    <div className='container-Footer row' style={{
      width: '100vw',
      height: '30vh',
    }}>
      <div className='col-4' style={{
        color: '#E1E1E6',
        fontSize: 20,
        textAlign: 'center',
        // padding:70,
      }}>
        <h1><FaMapMarkerAlt></FaMapMarkerAlt> Localização</h1>
        <div style={{
        color: '#E1E1E6',
        fontSize: 10,
        textAlign: 'center',
        // padding:15,
      }}>
        <h2>Cuiaba-MT</h2>
        </div>
    </div>
    <div className='col-4' style={{
        color: '#E1E1E6',
        fontSize: 20,
        textAlign: 'center',
        // padding:70,
      }}>
        <h1><FaMailBulk></FaMailBulk> Contato por E-mail</h1>
        <div style={{
        color: '#E1E1E6',
        fontSize: 10,
        textAlign: 'center',
        // padding:15,
      }}>
        <h2>edpbatista2@gmail.com</h2>
        </div>
    </div>
    <div className='col-4' style={{
        color: '#E1E1E6',
        fontSize: 20,
        textAlign: 'center',
        // padding:70,
      }}>
        <h1><FaPhoneSquareAlt></FaPhoneSquareAlt> Contato por Telefone</h1>
        <div style={{
        color: '#E1E1E6',
        fontSize: 10,
        textAlign: 'center',
        // padding:15,
      }}>
        <h2>+55 (65) 99250-0235</h2>
        </div>
    </div>
    <div className='FooterFinal' style={{
        color: '#E1E1E6',
        fontSize: 10,
        textAlign: 'center',
        // padding:20,
      }}>
      <h1>&copy;2022 - Edimar Pereira Batista</h1>
    </div>
    </div>
  )
}
