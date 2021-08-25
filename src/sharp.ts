import sharp from 'sharp'

type imageType = {
    imageRoot: string,
    imageArray: Array<any>,
    imageOutput: string
}

export async function execMergeImages(imgOptions: imageType): Promise<void> {
  console.time('carreguei...')

  let icon = await sharp(imgOptions.imageRoot).toBuffer();

  icon = await sharp(icon).composite(imgOptions.imageArray).toBuffer();
  icon = await sharp(icon).resize(200).toBuffer();

  sharp(icon).png().toFile(imgOptions.imageOutput);

  console.timeEnd('carreguei...')
}
