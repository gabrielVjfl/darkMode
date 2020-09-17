import React from 'react';

import {ThemeProvider} from 'styled-components'
import light from './components/Temas/Light'
import dark from './components/Temas/Dark'
import Header from './components/Header/index'
import GlobalStyle from './styles/global'
import usePersistentState from './utils/usePersistentState'


function App() {

const [theme, setTheme] = usePersistentState('theme', light) // começa com o tema light


const toogleTheme = () => {
  setTheme(theme.title === 'light' ? dark : light)
}



  return (
  <ThemeProvider theme={theme}>
      <GlobalStyle/>
     <Header toogleTheme={toogleTheme}/>
   </ThemeProvider>
  );
}

export default App;
