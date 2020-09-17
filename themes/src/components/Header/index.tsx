import React, {useContext} from 'react'

import Switch from 'react-switch'

import {Container} from './styles' 

import {ThemeContext} from 'styled-components'

import {shade} from 'polished'

interface Props {
    toogleTheme(): void
}

const Header: React.FC<Props> = ({toogleTheme}) => {
    // pegar as cores do light
    const {colors, title} = useContext(ThemeContext)


    return (
     <Container>
    Hello World
         <Switch onChange={toogleTheme} checked={title === 'dark'} checkedIcon={false}
         height={10} width={40} handleDiameter={20} offColor={shade(0.15, colors.primary)} 
         onColor={colors.secundary}>

         </Switch>
     </Container>
    )
}
export default Header;