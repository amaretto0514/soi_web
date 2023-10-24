import React from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Header  = () => {
  return(
    <HeaderContainer>
      <div class="header">
      <div class="Logo">
      <img src='/assets/Logo-soi.png' alt='Logo-SOI' /><h5>Servicios Operativos de Ingenieria EIRL</h5>
      </div>
      <div class="info">
        <div>
          <FontAwesomeIcon icon={faPhone} size='2x' />
          <span>999999999 <br/>Llamar Ahora</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpenText} size='2x' />
          <span>ventas@fff.com<br/>asssc@gkbmdkf.com</span>
          </div>
      </div>
      </div>
      <div class="header-menu">
        <ul>
          <li><a href='#'>Inicio</a></li>
          <li><a href='#'>Nosotros</a></li>
          <li><a href='#'>Mision</a></li>
          <li><a href='#'>Productos</a></li>
          <li><a href='#'>Servicios</a></li>
          <li><a href='#'>Proyectos</a></li>
          <li><a href='#'>Contacto</a></li>
        </ul>

      </div>
    </HeaderContainer>
    )
  }

export default Header


const HeaderContainer = styled.header `
.header{
  width: 100%;
  height: 55px;
  display: flex;
  justify-content:space-around;
  align-items: center;
  gap: 1:2;
}

.header .logo{
  width: 60%;
  height: 55px;
  display:flex;
}
h5{
  margin:-10px;
  padding: 0px;
  font-size: 12px;
}
img{
  width: 190px;
  height: 55px;
}

.info{
  width: 40%;
  margin-top:1%;
  color: #000;
  display:flex;
  align-items: center;
  justify-content:space-around;
}

.info div{
  display:flex;
  align-items: center;
  justify-content:space-around;
}

.info span{
  width: 100%;
  margin-left:10px;
}


.header-menu{
  width: 100%;
  height: 3em;
  background-color: #939496;
}
ul{
  list-style: none;
  display: flex;
  justify-content:inherit;
  
}
li{
  width: 15%;
  height:max-content;
  padding: 0.8em;
  display: flex;
  text-align: center; 
}
li:hover{
  transition: all 0.3s;
  opacity: 0.8 ;
  background-color: #F9D305;
  
}
a{
  width: 100%;
  font-weight: 500;
  text-transform:uppercase;
  text-decoration: none;
  color: #000;
}
a:hover{
  transition: all 0.3s;
  color: #939496;
}
`