import React from 'react'

const Popup = (props) => {
    const { visible, children } = props;
    return (
        <>
            {
                (visible) ?
                    (
                        <p>
                            {children}
                        </p>
                    )
                    :
                    (
                        <p>Kapalı</p>
                    )
            }
        </>
    )
}

export default Popup