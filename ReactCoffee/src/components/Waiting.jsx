import React from 'react'
import { useSelector } from 'react-redux'

const Waiting = () => {
    const { waitingVisible } = useSelector((state) => state.waiting)
    return (
        <>
            {
                (waitingVisible) &&
                (
                    <div>
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Waiting