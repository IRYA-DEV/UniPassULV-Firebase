import admin from 'firebase-admin';
import serviceAccount from '../unipass-ulv-firebase-adminsdk-7z3zf-a48952a665.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
