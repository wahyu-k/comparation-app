import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Admin() {
  //const [input, setInput] = useState('')
  const [x1, setX1] = useState('')
  const [y1, setY1] = useState('')
  const [z1, setZ1] = useState('')
  const [resp, setResp] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  //const [update, setUpdate] = useState()

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const update = await axios.put('http://localhost:5000/v1/calc', {
        x: parseInt(x1),
        y: parseInt(y1),
        z: parseInt(z1),
      })
      console.log(update.data)
      // const resp = await axios.get('http://localhost:5000/v1/calc')
      // console.log(resp)
      // setX(update.data.x)
      // setY(update.data.y)
      // setZ(update.data.z)
      // console.log(update)
      // console.log(update.data.z)

      //window.location = '/'
    } catch (err) {
      alert(err.response.data)
    }
  }

  // const onSubmitX = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const update = await axios.put('http://localhost:5000/v1/calc')
  //     setX(update.data.x)
  //     console.log(update)
  //     // setX(update.data.x) //nilai x, tanpa set X
  //     // console.log(update)

  //     //window.location = '/'
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  // const onSubmitY = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const update = await axios.put('http://localhost:5000/v1/calc')
  //     setY(update.data.y)
  //     // setY(update.data.y)
  //     // console.log(update.data.y)

  //     //window.location = '/'
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  // const onSubmitZ = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const update = await axios.put('http://localhost:5000/v1/calc')
  //     setZ(update.data.z)
  //     // console.log(update.data.z)

  //     //window.location = '/'
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get('http://localhost:5000/v1/calc')
        setResp(resp.data)
        setX1(resp.data.x)
        setY1(resp.data.y)
        setZ1(resp.data.z)
      } catch (err) {
        //console.log(resp.data.x)
        // setPdam(1)
        console.error(err.data.message)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Admin</h1>
      <h2 className="text-center mt-5">Update Nilai Variabel</h2>
      <h3 className="text-center mt-5">Nilai Variabel X</h3>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="real"
          className="form-control"
          // value={x}
          onChange={(e) => setX1(e.target.value)}
          //value={input - a}
          //value=
          value={x1}
          //onChange={(e) => setInput(e.target.value)}
        />
        {/* <button className="btn btn-success">Ubah Nilai X</button> */}
        <h3 className="text-center mt-5">Nilai Variabel Y</h3>
        <input
          type="real"
          className="form-control"
          // value={y}
          value={y1}
          onChange={(e) => setY1(e.target.value)}
        />
        {/* <button className="btn btn-success">Ubah Nilai Y</button> */}
        <h3 className="text-center mt-5">Nilai Variabel Z</h3>
        <input
          type="real"
          className="form-control"
          // value={z}
          value={z1}
          onChange={(e) => setZ1(e.target.value)}
        />
        <button className="btn btn-success">Ubah Nilai</button>
      </form>
    </div>
  )
}

export default Admin
