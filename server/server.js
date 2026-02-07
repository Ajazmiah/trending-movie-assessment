import express from 'express'

const port = process.env.PORT || 500
const app = express();

app.listen(port, () => console.log(`Server started on ${port}`))