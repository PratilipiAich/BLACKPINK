import React from 'react'
import { useMediaQuery } from "react-responsive"
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import { mediaQueries } from "./Responsive"

function Home() {

    const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery });
    const isDesktop = useMediaQuery({ query: mediaQueries.desktopQuery });
    
    if(isMobile) {
        return <HomeMobile />
    }
    else {
        return <HomeDesktop />
    }
}

export default Home
