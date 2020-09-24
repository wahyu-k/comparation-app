const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
app.use(express.json())
app.use(cors())

app.post('/v1/calc', async (req, res) => {
  try {
    const { x, y, z, updated_date } = req.body
    const insert = await pool.query(
      'INSERT INTO calcs (x, y, z, updated_date) VALUES($1,$2,$3,$4) RETURNING *',
      [x, y, z, Date.now()],
    )
    res.json(insert.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/v1/calc', async (req, res) => {
  try {
    const view = await pool.query('SELECT * FROM calcs')
    res.json(view.rows[0])
    //res.json(view.rows) //select dari semua baris, sehingga dikasih [0] agar hanya select array pertama, jika tidak diberi [0] maka semua array
  } catch (err) {
    console.error(err.message)
  }
})

app.put('/v1/calc', async (req, res) => {
  try {
    const { x, y, z } = req.body
    const edit = await pool.query(
      'UPDATE calcs SET x = $1, y = $2,z = $3 WHERE id =$4',
      [x, y, z, 3],
    )
    res.json('Update Successful')
  } catch (err) {
    res.status(400).send(err.message)
  }
})
app.listen(5000, () => console.log('server jalan di port 5000'))
