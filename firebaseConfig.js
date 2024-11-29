import { initializeApp } from "firebase/app";
import * as Notifications from 'expo-notifications';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Função para solicitar permissão para notificações
async function requestNotificationPermission() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        console.warn('Permissão de notificações negada!');
        return null;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
    return token;
}

export { requestNotificationPermission };
