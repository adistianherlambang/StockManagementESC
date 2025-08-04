const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const { users } = require('../app/data/user'); 
const { firebaseConfig } = require('../firebase'); 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seed = async () => {
  for (const user of users) {
    const ref = doc(db, 'users', user.userId);
    await setDoc(ref, user);
  }
  console.log('Users berhasil diupload ke Firestore');
};

seed();