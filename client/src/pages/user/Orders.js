import React from 'react'
import Layout from '../../components/layout/Layout';
import UserMenu from '../../components/layout/UserMenu';


const Orders = () => {
  return (
    <Layout title={"Dashboard User"}>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9 p-4'>
                <h2>All Orders</h2>
            </div>
        </div>
    </Layout>
  )
}

export default Orders;