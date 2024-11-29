import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomCheckBox = ({ isChecked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 8 }}>
    <FontAwesome
      name={isChecked ? "check-square" : "square-o"}
      size={24}
      color={isChecked ? "red" : "gray"}
    />
  </TouchableOpacity>
);

export default CustomCheckBox;
