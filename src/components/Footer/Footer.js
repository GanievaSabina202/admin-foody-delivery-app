import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FooterContainer, FooterInside } from './Footer.Styled'

export const Footer = () => {

    return (
        <FooterContainer>
            <FooterInside>
                <img src={logo} alt="" />
                <p>Version: 3.2</p>
                <p>2022</p>
            </FooterInside>
        </FooterContainer>
    )
}

