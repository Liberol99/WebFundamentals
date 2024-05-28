import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ApiService = () => {
    let BEARER_TOKEN;
    const [dTable, setDTable] = useState([]);

    useEffect(() => {
        LoginToApi();
    }, []);

    const LoginToApi = async () => {
        try {
            const postData = null;
            const response = await axios.post(`http://192.168.0.7:8080/api/Authentication/Login?userCode=Admin&password=1&companyCode=20&userType=0`,
                postData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log('Post response:', response.data);
            const { Data } = response.data;
            BEARER_TOKEN = Data;
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const UtilityQueryToApi = async () => {
        try {
            const postData = {
                "query": "select top 10 * from Erp_Employee"
            }
            const response = await axios.post(`http://192.168.0.7:8080/api/Utility/UtilityQuery`,
                postData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${BEARER_TOKEN}`
                }
            });
            // console.log('Post response:', response.data);
            const { Data } = response.data;
            setDTable(Data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };


    return (
        <div>
            <div>
                <button class="btn btn-warning" onClick={async () => { await UtilityQueryToApi(); }}>Sorgu</button>
            </div>
            <div>
                {(dTable !== null && dTable.length > 0) ?
                    dTable.map(dRow => (
                        <p key={dRow.EmployeeID}>{dRow.EmployeeName}</p>
                    ))
                    : ''}
            </div>
        </div>
    )
}

export default ApiService