import { imageType, execMergeImages } from './sharp'

export async function generateFrontImage(options: imageType): Promise<any> {
  console.log('gerando perfil de frente.')
  try {
    await execMergeImages(options)
    return Promise.resolve()
  } catch(err) {
    return Promise.reject(err)
  }
}

export async function generateBackImage(options: imageType): Promise<any> {
  console.log('gerando perfil de costas.')
  try {
    await execMergeImages(options)
    return Promise.resolve()
  } catch(err) {
    return Promise.reject(err)
  }
}
