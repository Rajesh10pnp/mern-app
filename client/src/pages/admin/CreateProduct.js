import React from 'react'
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';


const CreateProduct = () => {
  return (
    <Layout>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu />
            </div>
            <div className='col-md-9 p-4'>
                <h2>Create Product</h2>
            </div>
        </div>
    </Layout>
  )
}

export default CreateProduct