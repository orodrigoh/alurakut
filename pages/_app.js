import { ThemeProvider } from 'styled-components'
import {GlobalStyle}  from '../src/styles/globals'
import light from '../src/styles/themes/light'
import dark from '../src/styles/themes/dark'
import {useState, createContext } from 'react'
const GlobalContext = createContext();


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
	setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <>
      <GlobalContext.Provider value={{set: toggleTheme, theme: theme}} >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}

export {GlobalContext};  