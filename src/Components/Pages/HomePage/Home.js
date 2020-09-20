import React from 'react'
import MainSection from '../../MainSection';
import Pricing from '../../Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
    return (
        <React.Fragment>
            <MainSection {...homeObjOne} />
            <MainSection {...homeObjThree} />
            <MainSection {...homeObjTwo} />
            <Pricing />
            <MainSection {...homeObjFour} />
        </React.Fragment>
    )
}

export default Home;
