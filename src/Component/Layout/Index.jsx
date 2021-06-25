import React from 'react'
import LogIn from '../../Pages/Login/Index'
import Footer from './Footer'
import Header from './Header'

const Index = ({header= false, footer = false, body = <LogIn />}) => {
    return (
        <div>
                {header && <Header />}
                {body}
                {footer && <Footer />}
        </div>
    )
}

export default Index
