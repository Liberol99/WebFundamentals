import React from 'react'

const Waiting = (props) => {
    const { visible } = props;
    return (
        <>
            {
                (visible === true)
                &&
                (
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                )
            }
        </>
    )
}

export default Waiting