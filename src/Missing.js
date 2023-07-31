import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Post Not Found</h2>
            <p>There is no post here.</p>
            <p>
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing