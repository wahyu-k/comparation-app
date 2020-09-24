import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const Input = () => {
  const [input, setInput] = useState('')
  // const [siab, setSiab] = useState('')
  // const [pdam, setPdam] = useState(0)
  const [resp, setResp] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  // usestate diberi array jika di express tidak diberi array di view rows

  // const [test, setTest] = useState(false)

  // const [data, setData] = useState(initialState)

  // const onSubmitForm = async (e) => {
  //   e.preventDefault()
  //   try {
  //     //const { input, x, y, z } = req.body
  //     //const pdam = await axios.get('http://localhost:5000/v1/calcs')
  //     const resp = await axios.get('http://localhost:5000/v1/calc')
  //     setResp(resp.data)
  //     console.log(resp.data.x)
  //     setPdam(1)
  //     // console.log(resp.data[0].x)
  //     //console.log(response)

  //     //window.location = '/'
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get('http://localhost:5000/v1/calc')
      setResp(resp.data)
      //console.log(resp.data.x)
      // setPdam(1)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId)
  //     // ...
  //   }
  //   fetchData()
  // }, [someId])
  // Or [] if effect doesn't need props or state
  // const logic = () => {
  //   if (true) {
  //     setTest(true)
  //   } else {
  //     setTest(false)
  //   }
  // }
  const a = input * resp.x * resp.y * resp.z
  //const pdam = 1

  return (
    <Fragment>
      {/* {test ? <p>trueee</p> : <p>falsee</p>} */}
      <h1 className="text-center mt-5">SIAB INDONESIA</h1>
      <h2 className="text-center mt-5">Input Perhitungan Biaya Air</h2>
      <h3 className="text-center mt-5">Harga Air</h3>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button className="btn btn-success">Submit</button> */}
      <h3 className="text-center mt-5">Harga Air SIAB</h3>
      <p>{a}</p>
      {/* <p>{resp.x}</p> */}
      {/* <p>{resp[0].x}</p> */}
      <h3 className="text-center mt-5">Harga Air PDAM</h3>
      <p>{input} </p>
      <h3 className="text-center mt-5">Anda dapat menghemat seharga</h3>
      <p>
        {input - a}
        {/* //value= //value={resp[0].x}
        //onChange={(e) => setInput(e.target.value)} */}
      </p>
    </Fragment>
  )
}

export default Input
