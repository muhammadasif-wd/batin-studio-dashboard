import React from 'react'
import { Spinner } from '@material-tailwind/react'

export default function Loader() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Spinner className="h-20 w-20" />
        </div>
    )
}
