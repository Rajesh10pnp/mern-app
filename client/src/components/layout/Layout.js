import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({children, title, keywords, description, author}) => {
  return (
    <div>
      <Helmet>
         <meta charset="utf-8" />
         <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
        <Header/> 
        <main style={{minHeight:"82vh"}}>
         <Toaster position="top-center" reverseOrder={false} />
        {children}
        </main>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: "Ecommerce App -Shop Now",
  description:"mern stck project",
  keywords:"mern, react, node, mongodb",
  author:"deshwal"
}

export default Layout;