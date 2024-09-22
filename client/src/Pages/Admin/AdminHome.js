import React from 'react'
import Layout from '../../Component/shared/Layout/Layout'
import { UseSelector } from 'react-redux'

const AdminHOme = () => {

    const {user} = useSelector(state =>state.auth);

  return (
    <Layout>
        <div className = "container">

            <div className="d-flex flex-column mt-4">
                <h1>Welcome Admin <i className = "text-success ">{user?.name}</i></h1>
                <h3>Manage Blood Bank App</h3>
                <hr>
                </hr>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo quas natus facere nisi totam nihil consequuntur vero aut, facilis velit id reprehenderit corporis dicta enim, iusto impedit earum doloribus.
                </p>
            

            </div>
        </div>
      <h1>Admin Page</h1>

    </Layout>
  )
}

export default AdminHOme
