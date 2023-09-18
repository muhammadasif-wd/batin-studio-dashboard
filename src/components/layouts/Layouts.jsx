import React, { Suspense, lazy } from 'react'
const Sidebar = lazy(() => import('../sidebar/Sidebar'))
import Loader from '../../utils/helpers/Spinner'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
    return (
        <Suspense fallback={<Loader />}>
            <section className="flex items-center">
                <Sidebar />
                <div className={`min-h-screen p-5`}>
                    <Outlet />
                </div>
            </section>
        </Suspense>
    )
}
