import admin from '../config/FirebaseConfig.js';

export const sendNotification = async (req, res) => {
    const { token, title, body } = req.body;
    const message = {
        notification: {
            title,
            body
        },
        token
    };

    try {
        const response = await admin.messaging().send(message);
        res.status(200).json({ success: true, messageId: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
