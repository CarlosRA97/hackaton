'use strict'

const app = require('./app')
const port = 3000

app.listen(port, () =>{
  console.log(`Iniciado en el puerto ${port}`)
})
