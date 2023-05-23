import React, { useState } from 'react'
import { useSelector } from 'react-redux' 
import axios from 'axios'

export default function JsonLogin() {
  const { token } = useSelector(state => state.auth) // assuming you have auth in your root reducer
  console.log('token: ', token);
  const [response, setResponse] = useState(null)

  const fetchProtectedData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setResponse(response.data)
    } catch (error) {
      console.error(error)
      setResponse(error.response.data)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">JSON Login</h1>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        onClick={fetchProtectedData}>
        Get Protected Data
      </button>
      {response && (
        <div className="mt-4 p-4 rounded shadow bg-white">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
