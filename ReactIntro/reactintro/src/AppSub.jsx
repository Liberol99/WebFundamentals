import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AppSub = (props) => {
    const { say1, str1 } = props;
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        console.log('1-her render');
    });

    useEffect(() => {
        console.log('2-sayfa ilk açildiğinda');
    }, []);

    useEffect(() => {
        console.log('3-sayfa ilk açildiğinda girer bundan sonraki süreçte sadece name set edildğinde girer');
    }, [isChange]);

    let StateHasChanged = async () => {
        // isChange ? setIsChange(false) : setIsChange(true)
        if (isChange) {
            setIsChange(false)
        } else {
            setIsChange(true)
        }
    }

    return (
        <div>
            <p class="text-light display-1">
                {str1} {say1}
            </p>
            <div>
                <button class="btn btn-danger" onClick={async () => { await StateHasChanged(); }}>Tikla</button>
            </div>
        </div>
    )
}

export default AppSub