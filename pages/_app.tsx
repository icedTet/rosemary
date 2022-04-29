import React, { useState } from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/globals.css'
import { SlideContext } from '../utils/slideContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [slide, setSlide] = useState(0)
  return (
    <SlideContext.Provider value={slide}>
      <Component {...pageProps} />
    </SlideContext.Provider>
  )
}

export default MyApp