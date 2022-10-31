import React from 'react'
import ReactDOM from 'react-dom/client'
import {HorizontalCard} from './components/card/card'
import {Menu} from './components/menu/menu'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
    return <h1>Hello world </h1>
}

root.render(<>
    {/* <Greeting/> */}

    {/* <HorizontalCard name="PapoMc" descripcion="Fullstack" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." imagen="fms.jfif"/>

    <HorizontalCard name="Marquitos" descripcion="Frontend developer" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." imagen="fmsa.jfif"/>

    <HorizontalCard name="Dtoke" descripcion="Backend developer" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." imagen="godsa.jfif"/> */}

    <Menu/> 
</>
    )