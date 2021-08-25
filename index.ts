import { execMergeImages } from './src/sharp'

const options = {
  imageRoot: 'bob.png',
  imageArray: [{ input: 'bob2.png', blend: 'over' }],
  imageOutput: 'imageOutput.png'
}

execMergeImages(options)