import { firebase } from '@/firebaseConfig';
import Compressor from 'compressorjs';

var imageUpload = {
    methods: {
        uploadImage(imageRefPath, file) {
            return new Promise((resolve, reject) => {
                new Compressor(file, {
                    quality: 0.80,
                    success(item) {
                        var storageRef = firebase.storage().ref();

                        var storageRef1 = storageRef.child(
                            imageRefPath
                        );

                        const uploadTask = storageRef1.put(item, { contentType: item.type });
                        uploadTask.on(
                            'state_changed',
                            (snapshot) => {
                                var progress =
                                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log('Upload is ' + progress + '% done');
                            },
                            (err) => {
                                console.log('error', err);
                                reject(err);
                            },
                            () => {
                                uploadTask.snapshot.ref
                                    .getDownloadURL()
                                    .then((downloadURL) => {
                                        console.log(downloadURL);
                                        resolve(downloadURL);
                                    });
                            }
                        );
                    },
                    error(err) {
                        console.log(err.message);
                        reject(err.message);
                    },
                });
            });
        }
    }
};
export { imageUpload };