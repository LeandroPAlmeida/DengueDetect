import React from "react";
import { useNavigation } from "@react-navigation/native";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

export default function Login() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            {/* Acessibilidade: Bem-vindo ao Dengue Detect (oculto na interface) */}

            <View 
                style={styles.containerLogo}
                accessibilityRole="image"
                accessibilityLabel="Bem-vindo ao Dengue Detect"
            >
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../assets/logo.png")}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                    accessibilityLabel="Imagem do logotipo em vermelho"
                />
            </View>

            <Animatable.View 
                delay={700} 
                animation="fadeInUp" 
                style={styles.containerForm}
                accessibilityLabel="Seção de formulário"
                accessibilityHint="Contém informações e botão para acessar o conteúdo"
            >
                <Text style={styles.title}>Saiba mais sobre a dengue e suas variantes</Text>

                <Text>Entre para começar</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('TabBar')}
                    accessibilityRole="button"
                    accessibilityLabel="Botão de acesso"
                    accessibilityHint="Toque para entrar e navegar pelo aplicativo"
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF0000' // cor: Vermelho
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#FF0000', // cor: Vermelho
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1, // Proporção da tela
        backgroundColor: 'white',
        borderTopLeftRadius: 25, // Inserindo borda na esquerda
        borderTopRightRadius: 25, // Inserindo borda na direita
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 28,
        marginBotton: 12
    },
    text:{
        color: '#a1a1a1',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#FF0000',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        justifyContent: 'center', // centralizando com o eixo y do container
        alignItems: 'center'  // centralizando com o eixo x do container
    },
    buttonText:{
        fontSize: 17,
        color: '#FFF',
        fontWeight: 'bold'
    }
});
