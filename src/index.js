import React from 'react'
import ReactDom from 'react-dom'
import HomePage from './components/HomePage.jsx'
function Greeting(){
  return <>
            <HomePage/>
          </>
}
ReactDom.render(<Greeting/>,document.getElementById("root"));