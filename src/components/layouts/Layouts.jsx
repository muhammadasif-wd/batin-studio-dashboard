import React, { Suspense, lazy } from 'react'
const Sidebar = lazy(() => import('../sidebar/Sidebar'))
import Loader from '../../utils/helpers/Spinner'

export default function Layouts() {
    return (
        <Suspense fallback={<Loader />}>
            <Sidebar />
        </Suspense>
    )
}
