import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECREAT_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: process.env.NEXT_PUBLIC_S3_BUCKET },
  region: process.env.NEXT_PUBLIC_REGION,
});

interface UploadParams {
  ACL: string;
  Body: File;
  Bucket: string;
  Key: string;
}

const uploadToS3 = (img: File): Promise<string> => {
  const uuid = uuidv4();
  const fileExtension = img.name.split('.').pop();
  const encodedFileName = encodeURIComponent(img.name);
  console.log('인코딩 파일명::::', fileExtension);
  const params: UploadParams = {
    ACL: 'public-read',
    Body: img,
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET || 'weneedbucket/files',
    Key: `weneedbucket/files/${uuid}.${fileExtension}`,
  };

  return new Promise((resolve, reject) => {
    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {})
      .send((err, _) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        const imageUrl = `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_REGION}.amazonaws.com/${params.Key}`;
        resolve(imageUrl);
      });
  });
};

export default uploadToS3;
