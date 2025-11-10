import React from 'react'
import Layout from '../components/layout/Layout'
import {useAuth}from "../context/auth.js";

const HomePage = () => {
  const [auth, setAuth] =useAuth();
  return (
    <Layout title={"shop now"}>
        <h3>Home page</h3>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  )
}

export default HomePage;