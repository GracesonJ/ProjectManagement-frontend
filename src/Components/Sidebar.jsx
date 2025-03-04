import React from 'react'
import Dashboard from '../Pages/Dashboard'
import ProjectManagement from '../Pages/ProjectManagement'
import TaskManagement from '../Pages/TaskManagement'
import UserManagement from '../Pages/UserManagement'
import Reports from '../Pages/Reports'

function Sidebar() {
    return (
        <>

            <div className="container-fluid mt-5 rounded rounded-3 bg-success">
                <div className="">
                   <div> <Dashboard /></div>
                </div>
                {/* <div className="">
                   <div> <ProjectManagement /></div>
                </div>
                <div className="">
                    <div><TaskManagement /></div>
                </div>
                <div className="">
                   <div> <UserManagement /></div>
                </div>
                <div className="">
                    <div><Reports /></div>
                </div> */}
            </div>


        </>
    )
}

export default Sidebar