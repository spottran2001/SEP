
var admin = require("firebase-admin");

var serviceAccount = require("../config/realtimefirebase197pm31170-firebase-adminsdk-ll8m5-143610cad6.json");

const BUCKET = "realtimefirebase197pm31170.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: BUCKET
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
    if(!req.file) return next();

    const image = req.file;
    const fileName = `${file.originalname}_${Date.now()}`;

    const file = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
    });
  
    blobStream.on('error', (error) => {
        reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', async () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = format(`https://storage.googleapis.com/${BUCKET.name}/${file.name}`);
        resolve(url);
    });

    blobStream.end(file.buffer);

};
