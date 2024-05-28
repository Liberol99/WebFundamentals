import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
    const [step, setStep] = useState(0)

    const loginToApi = async (event) => {
        try {
            event.preventDefault();
            let _userCode = document.querySelectorAll('form input')[0].value;
            let _userPass = document.querySelectorAll('form input')[1].value;
            let _companyCode = document.querySelectorAll('form input')[2].value;
            let _companyPass = document.querySelectorAll('form input')[3].value;
            // Axios ile POST isteği yap
            let url = `http://localhost:8080/api/Authentication/Login?userCode=${_userCode}&password=${_userPass}&companyCode=${_companyCode}&userType=0`;
            const response = await axios.post(url, null);
            // İstek başarılı, yanıtı döndür
            if (response.data.IsOk == true) {
                setStep(1);
                return response.data;
            }
        } catch (error) {
            // Hata durumunda hata mesajını fırlat
            throw new Error('İstek başarisiz! Hata: ' + error);
        }
    }

    return (
        <div>
            <div className='row w-100 p-0 m-0'>
                {
                    (step === 0) ? (<div className='jumbotron bg-secondary p-5' style={{ width: '600px' }}>
                        <p className='display-4'>Giriş Yap</p>
                        <form action='#' method='post' onSubmit={async (event) => { await loginToApi(event); }}>
                            <input type='text' className='form-control mb-3' placeholder='Kullanici Kodu'></input>
                            <input type='password' className='form-control mb-3' placeholder='Kullanici Şifresi'></input>
                            <input type='text' className='form-control mb-3' placeholder='Şirket Kodu'></input>
                            <input type='password' className='form-control mb-3' placeholder='Şirket Şifresi'></input>
                            <input type='submit' className='btn btn-danger w-100' value={"Giriş Yap"}></input>
                        </form>
                    </div>) : (step === 1) ? (<div className='jumbotron bg-secondary p-5' style={{ width: '600px' }}>
                        <p className='display-4'>İşlem Başarili</p>
                    </div>) : (<></>)
                }

            </div>
        </div>
    )
}

// async function getData() {
//   const token = 'YOUR_BEARER_TOKEN_HERE';
//   const url = 'https://api.example.com/data';

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });
//     console.log('Data:', response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// async function postData() {
//   const token = 'YOUR_BEARER_TOKEN_HERE';
//   const url = 'https://api.example.com/data';
//   const data = {
//     key1: 'value1',
//     key2: 'value2'
//   };

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log('Response:', response.data);
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// }

export default HomePage