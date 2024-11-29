import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  findNodeHandle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ACCORDION_LIST = [
  {
    title: "O que causa a dengue?",
    message:
      'No Brasil, o vetor da dengue é a fêmea do mosquito Aedes aegypi (significa "adioso do Egito"). Os vírus dengue (DENV) estão classificados cientificamente na família Flaviviride e no gênero Flavivirus. Até o momento são conhecidos quatro sorotipos - DENV-1, DENV-2, DENV-3 e DENV-4, que apresentam distintos materiais genéticos (genótipos) e linhagens.',
  },
  {
    title: "Como se dá a reprodução do Aedes Aegypti?",
    message:
      "O mosquito  põe seus ovos em recipientes onde pode haver um acúmulo de água, como pratos de plantas, latas, garrafas descobertas e com a abertura para cima, calhas e até mesmo caixas d'água. Os ovos do mosquito após serem depositados podem vivos por aproximadamente um ano sem eclodir, ele irá eclodir apenas quando o ovo  entrar em contato com a água ou caso a umidade do ambiente esteja adequada.",
  },
  {
    title: "Maneiras de dificultar a reprodução do mosquito",
    message: [
      "Selar garrafas e recipientes parecidos.",
      "Colocar areia em pratos de plantas.",
      "Frequentemente higienizar o pote de água dos pets.",
      "Recolher lixo a céu aberto.",
    ],
  },
  {
    title: "O que influência nos surtos de dengue",
    message: [
      "Aspectos como a urbanização, o crescimento desordenado da população, o saneamento básico deficitário e os fatores climáticos mantêm as condições favoráveis para a presença do vetor, com reflexos na dinâmica de transmissão desses arbovírus.",
      "Principais sintomas apresentados:",
      "• Febre alta (40°C)",
      "• Forte dor de cabeça",
      "• Dor atrás dos olhos",
      "• Náusea",
      "• Vômitos",
      "• Manchas vermelhas na pele",
    ],
  },
  {
    title: "Maneiras de dificultar a reprodução do mosquito",
    message:
      "O mosquito põe seus ovos em recipientes onde pode haver um acúmulo de água, como pratos de plantas, latas, garrafas descobertas e com a abertura para cima, calhas e até mesmo caixas d'água. Os ovos do mosquito após serem depositados podem viver por aproximadamente um ano sem eclodir, ele irá eclodir apenas quando o ovo entrar em contato com a água ou caso a umidade do ambiente esteja adequada.",
  },
];

interface AccordionProps {
  item: (typeof ACCORDION_LIST)[0];
  isOpen: boolean;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const AccordionItem: React.FC<AccordionProps> = ({ item, isOpen, onPress }) => {
  const iconRotation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(iconRotation.current, {
      toValue: isOpen ? 180 : 0,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const rotation = iconRotation.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const renderMessage = () => {
    if (Array.isArray(item.message)) {
      return (
        <View>
          {item.message.map((line, index) => (
            <Text key={index} style={{ color: "black", paddingBottom: 8 }}>
              {line}
            </Text>
          ))}
        </View>
      );
    }
    return (
      <Text style={{ color: "black", paddingBottom: 8 }}>{item.message}</Text>
    );
  };

  return (
    <View style={[styles.itemContainer, isOpen && styles.openContainer]}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Título: ${item.title}`}
        accessibilityState={{ expanded: isOpen }}
      >
        <Text style={{ flex: 1, fontSize: 19, fontWeight: "600" }}>
          {item.title}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <AntDesign name={isOpen ? "minus" : "plus"} size={24} color="black" />
        </Animated.View>
      </Pressable>
      {isOpen && <View style={{ marginTop: 16 }}>{renderMessage()}</View>}
    </View>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const scrollViewRef = useRef<ScrollView>(null);
  const lastAccordionRef = useRef<View>(null);

  const scrollToPosition = () => {
    if (activeIndex === ACCORDION_LIST.length - 1 && lastAccordionRef.current) {
      const scrollNode = findNodeHandle(scrollViewRef.current);
      if (scrollNode) {
        lastAccordionRef.current.measureLayout(scrollNode, (x, y) => {
          scrollViewRef.current?.scrollTo({
            y: Math.max(y - 2000, 0),
            animated: true,
          });
        });
      }
    }
  };

  useEffect(() => {
    scrollToPosition();
  }, [activeIndex]);

  return (
    <ScrollView ref={scrollViewRef} style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          margin: 16,
          color: "red",
          marginTop: 5,
        }}
      >
        Dengue: o que é, sintomas, tratamento e prevenção
      </Text>
      <View style={{ padding: 16, marginTop: -15 }}>
        {ACCORDION_LIST.map((item, index) => (
          <View
            key={index}
            ref={index === ACCORDION_LIST.length - 1 ? lastAccordionRef : null}
          >
            <AccordionItem
              item={item}
              isOpen={activeIndex === index}
              onPress={() => setActiveIndex(activeIndex === index ? -1 : index)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 16,
    marginVertical: 8,
    backgroundColor: "white",
  },
  openContainer: {
    backgroundColor: "rgb(245, 247, 250)",
  },
});

export default Accordion;
