import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CheckboxItem = ({ label, isSelected, onCheckboxChange }) => {
  return (
    <TouchableOpacity 
      style={{ flexDirection: 'row', alignItems: 'center' }} 
      onPress={onCheckboxChange}
    >
      <View 
        style={{
          height: 24,
          width: 24,
          borderWidth: 2,
          borderRadius: 90,
          marginBottom: '3%',
          borderColor: isSelected ? '#FF0000' : '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected && <View style={{ height: 12, width: 12, borderRadius: 90, backgroundColor: '#FF0000' }} />}
      </View>
      <Text style={{ marginLeft: '2%', marginRight: '2%', alignItems: 'center', justifyContent: 'center', marginBottom: '3%',}}>{label}</Text>
    </TouchableOpacity>
  );
};

const CheckboxList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = 
  [ 
    "Você está com febre?", 
    "Você tem dores no corpo ou nas articulações?", 
    "Você sente dor de cabeça?",
    "Você tem dor atrás dos olhos?",
    "Você está apresentando erupções cutâneas (manchas) no corpo?",
    "Você tem náuseas ou vômitos?",
    "Você sente fadiga ou fraqueza?",
    "Você esteve em áreas onde há surtos de dengue nos últimos 15 dias?",
    "Você notou a presença de mosquitos em sua casa ou nas proximidades?",
    "Você já teve dengue anteriormente?"
  ];

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const checkSelectedItems = () => {
    const message = selectedItems.length >= 3 
      ? "Você pode estar com dengue. Procure um médico para avaliação." 
      : "É improvável que você esteja com dengue, mas consulte um médico para confirmar.";
      Alert.alert( "Resultado", 
        message, 
        [ 
          { text: "Voltar", 
          onPress: () => setSelectedItems([]), // Reseta os itens selecionados 
          }
        ] 
      );
  };

  return (
    <View style={styles.textQuestion}>
      <Text style={styles.TextTitle}>Responda a lista abaixo para sabermos seu diagnóstico: Selecione os itens para resposta afirmativa</Text>
      {items.map((item) => (
        <CheckboxItem key={item} label={item} isSelected={selectedItems.includes(item)} onCheckboxChange={() => handleCheckboxChange(item)}/>
      ))}
      <Text style={styles.TextAtention}>Atenção: Este questionário é uma ferramenta inicial e não substitui um diagnóstico médico. Lembre-se de sempre seguir as orientações de profissionais de saúde ao lidar com possíveis casos de dengue.</Text>
      <Animatable.View delay={200} animation="flipInX">
          <TouchableOpacity style={styles.button} onPress={checkSelectedItems}>
            <Text style={styles.buttonText}>Verificar</Text>
          </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  textQuestion: {
    marginTop: 5,
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 60,
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: "white"
  },
  button: {
    position: "relative",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    width: '30%',
    backgroundColor: '#FF0000',
    borderRadius: 90,
    alignItems: 'center',
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold'
  },
  TextTitle: {
    fontSize: 21,
    fontWeight: '600',
    fontWeight: 'bold',
    color: 'red',
    marginBottom: '5%'
},
  TextAtention: {
    fontSize: 14,
    fontWeight: '600',
    padding: 10,
    marginTop: '1%',
}
});

export default CheckboxList;
