
import * as Notifications from "expo-notifications";

const dengueTips = [
    "Verifique sua casa: tampe caixas d'água e cubra piscinas.",
    "Cuidado com pratos de plantas: evite acumular água.",
    "O lixo também é um foco de dengue: descarte corretamente pneus, garrafas e recipientes.",
    "Semanalmente, limpe calhas e ralos!",
    "Final de semana é dia de checar o quintal. Evite focos de dengue!",
    "Dicas de prevenção da dengue: você sabia que até tampinhas podem ser focos?",
    "Sintomas da dengue: se sentir febre, dores no corpo e manchas vermelhas, procure um médico!",
];

export default async function scheduleNotifications() {
    try {
        // Agendamento de notificações a cada 6 horas
        setInterval(async () => {
            const randomTip = dengueTips[Math.floor(Math.random() * dengueTips.length)];
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Dicas de Prevenção à Dengue",
                    body: randomTip,
                },
                trigger: null, // Imediato (você pode configurar horários específicos)
            });
        }, 0.1 * 60 * 1000); // 6 horas
    } catch (error) {
        console.error("Erro ao agendar notificações:", error);
    }
}
