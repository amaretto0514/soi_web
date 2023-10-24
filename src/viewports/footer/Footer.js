import React from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Footer  = () => {
    return(
     <FooterContainer>
        <footer>
            <div>
                <img src='/assets/Logo-soi.png' alt='Logo-SOI'/>
                <p>eh jgshtjshgsgs</p>
            </div>
            <div>
                <h3>Servicios</h3>
                <ul>
                    <li><a href='#'>Cableado estructurado</a></li>
                    <li><a href='#'>Electricidad</a></li>
                    <li><a href='#'>Sistemas contra incendios</a></li>
                    <li><a href='#'>Sistemas de Video</a></li>
                    <li><a href='#'>A.D.</a></li>
                    <li><a href='#'>Alarma</a></li>
                </ul>
            </div>
            <div>
                <h3>Secciones</h3>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Misión</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Servicios</a></li>
                    <li><a href='#'>Proyectos</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacto</h3>
                <p></p>
            </div>
        </footer>
        <div>
            <hr/>
            Copyright &copy;2023 Desrrollado por: Agustin Villalta. All rights resrved
        </div>
     </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
footer{
    display:flex;
    background-color: #F9D305;
    justify-content: space-around;
}
img{
    margin-top:9%;
    width: 190px;
    height: 55px;
  }
  a{
   text-decoration: none;
   color: white;
   font-weight:500; 
  }
`