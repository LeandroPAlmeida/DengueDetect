import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const ACCORDION_LIST = [
  {
    title: 'O que causa a dengue?',
    message:
      'No Brasil, o vetor da dengue é a fêmea do mosquito Aedes aegypi (significa "adioso do Egito"). Os vírus dengue (DENV) estão classificados cientificamente na família Flaviviride e no gênero Flavivirus. Até o momento são conhecidos quatro sorotipos - DENV-1, DENV-2, DENV-3 e DENV-4, que apresentam distintos materiais genéticos (genótipos) e linhagens.',
  },
  {
    title: 'Como a doença é transmissivel?',
    message:
      "The prices of flight tickets are updated in realtime, so you're always up to date with latest information",
  },
  {
    title: 'Quais são os sintomas?',
    message: 'Easily book round trips and generally with better discounts',
  },
  {
    title: 'Como é feito o diagnóstico?',
    message:
      'If you bought your ticket or related travel products and services through NgeFly, you can request a refund or check your refund status.',
  },
];

interface AccordionProps {
  item: (typeof ACCORDION_LIST)[0];
  isOpen: boolean;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const AccordionItem: React.FC<AccordionProps> = ({ item, isOpen, onPress }) => {
  const layoutHeight = useRef({ container: 0, text: 0 });
  const accHeight = useRef(new Animated.Value(-1));
  const iconRotation = useRef(new Animated.Value(0));

  // Whenever item activeness canges we animate the item to expand or collapse
  useEffect(() => {
    Animated.parallel([
      Animated.spring(accHeight.current, {
        toValue:
          layoutHeight.current.container +
          (isOpen ? layoutHeight.current.text : 0),
        useNativeDriver: false,
      }),
      Animated.spring(iconRotation.current, {
        toValue: isOpen ? 180 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isOpen]);

  const rotation = iconRotation.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const calculateLayout = (e: LayoutChangeEvent) => {
  
    if (Platform.OS === 'web' || layoutHeight.current.container === 0) {
      layoutHeight.current.container = e.nativeEvent.layout.height + 32 + 2;

      setInitialHeight();
    }
  };

  const setInitialHeight = () => {
    const newHeight = layoutHeight.current.container;
    if (newHeight > 0) {
      accHeight.current?.setValue(
        newHeight + (isOpen ? layoutHeight.current.text : 0),
      );
    }
  };

  return (
    <Animated.View
      style={[
        {
          height: accHeight.current,
          backgroundColor: isOpen ? 'rgb(245, 247, 250)' : undefined,
          borderColor: !isOpen ? 'black' : 'transparent',
        },
        styles.itemContainer,
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          { flexDirection: 'row', opacity: pressed ? 0.6 : 1 },
        ]}
        onLayout={calculateLayout}
        onPress={onPress}
      >
        <Text
          style={{ flex: 1, fontSize: 20, fontWeight: '600' }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <AntDesign name={isOpen ? "minus" : "plus"} size={24} color="black" />
        </Animated.View> 
      </Pressable>
      <View style={{ width: '100%', paddingHorizontal: 16 }}>
        <Text
          style={{ position: 'absolute', color: 'black', paddingTop: 16 }}
          onLayout={e => {
            layoutHeight.current.text = e.nativeEvent.layout.height;
            setInitialHeight();
          }}
        >
          {item.message}
        </Text>
      </View>
    </Animated.View>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{ fontSize: 24, fontWeight: 'bold', margin: 16, color: 'red' }}
      >
        Dengue: o que é, sintomas, tratamento e prevenção
      </Text>
      <View style={{ padding: 16 }}>
        {ACCORDION_LIST.map((item, index) => (
          <AccordionItem
            key={`${item.title}_${index}`}
            item={item}
            isOpen={activeIndex === index}
            onPress={() => setActiveIndex(activeIndex === index ? -1 : index)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 16,
    marginVertical: 8,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Accordion;
