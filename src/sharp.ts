import sharp from 'sharp'

export type imageType = {
    imageRoot: string,
    imageArray: Array<any>,
    imageOutput: string
}

export async function execMergeImages(imgOptions: imageType): Promise<void> {
  let icon = await sharp(imgOptions.imageRoot).toBuffer();

  icon = await sharp(icon).composite(imgOptions.imageArray).toBuffer();
  icon = await sharp(icon).resize(200).toBuffer();

  await sharp(icon).png().toFile(imgOptions.imageOutput);
}
