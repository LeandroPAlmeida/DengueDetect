
import { initializeApp } from "firebase/app";
import * as Notifications from 'expo-notifications';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDavzXW6IDaIqPmJp-DzkPDAvWZPNcr6qY",
    authDomain: "denguedetect-7ba79.firebaseapp.com",
    projectId: "denguedetect-7ba79",
    storageBucket: "denguedetect-7ba79.appspot.com",
    messagingSenderId: "419227999532",
    appId: "1:419227999532:android:56d99980a62bf628c0a089",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Solicita permissões para notificações
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
