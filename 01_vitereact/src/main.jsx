/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App | React</h1>
//         </div>
//     )
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank' rel="noreferrer">Visit google</a>
)

const anotherUser = "Cool"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' }, 
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
)
