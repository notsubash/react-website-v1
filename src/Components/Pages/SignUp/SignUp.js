import React from 'react'
import MainSection from '../../MainSection';
import {homeObjTwo, homeObjFour} from './Data'

function SignUp() {
    return (
        <React.Fragment>
            <MainSection {...homeObjFour} />
            <MainSection {...homeObjTwo} />
        </React.Fragment>
    )
}

export default SignUp;
