import admin from 'firebase-admin';
import serviceAccount from '../config/realtimefirebase197pm31170-firebase-adminsdk-ll8m5-143610cad6.json' assert {type: 'json'};
const BUCKET = "realtimefirebase197pm31170.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

export const uploadImage = (req, res) => {
    if(!req.file) 
      return res.json({
        success: false,
        message: 'No image file'
      })

    const file = req.file;
    const fileName = Date.now() + "." + file.originalname.split(".").pop();

    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
    });
  
    blobStream.on('error', (error) => {
      res.status(500).json({ error: error });
    });

    blobStream.on('finish', async () => {
        const firebaseURL = `https://storage.googleapis.com/${BUCKET}/${fileUpload.name}`;
        const abc = {
          name: BUCKET,
          name2: fileUpload.name,
          name3: firebaseURL
        }
        console.log(abc);
        res.status(200).json(abc);
    });

    blobStream.end(file.buffer);

};
