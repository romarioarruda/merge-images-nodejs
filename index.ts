import express from 'express'
import { generateFrontImage, generateBackImage } from './src/mergeImage'

const app = express()
const port = 3000

app.use(express.json())

const pathFront = './files/models/front'
const pathBack = './files/models/back'

app.post('/merge', async (req, res) => {
  const frontDoll = [
    { input: `${pathFront}/${req.body.frente.cabelo}.png`, blend: 'over' },
    { input: `${pathFront}/${req.body.frente.face}.png`, blend: 'over' },
    { input: `${pathFront}/${req.body.frente.roupa}.png`, blend: 'over' }
  ]

  const optionsFrontDoll = {
    imageRoot: `${pathFront}/${req.body.frente.pele}.png`,
    imageArray: frontDoll,
    imageOutput: './files/generated/frente.png'
  }

  const backDoll = [
    { input: `${pathBack}/${req.body.costas.cabelo}.png`, blend: 'over' },
    { input: `${pathBack}/${req.body.costas.roupa}.png`, blend: 'over' }
  ]

  const optionsBackDoll = {
    imageRoot: `${pathBack}/${req.body.costas.pele}.png`,
    imageArray: backDoll,
    imageOutput: './files/generated/costas.png'
  }

  await Promise.allSettled([
    generateFrontImage(optionsFrontDoll),
    generateBackImage(optionsBackDoll)
  ])

  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})