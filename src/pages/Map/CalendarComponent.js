import React, { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet, Text } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";

const CalendarComponent = ({ onDateRangeSelect }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);

  // Calcula a data mínima como uma semana antes da data atual
  const minDate = moment().subtract(1, "weeks").toDate();

  const handleDateChange = (date, type) => {
    if (type === "START_DATE") {
      setTempStartDate(moment(date).format("YYYY-MM-DD"));
    } else {
      setTempEndDate(moment(date).format("YYYY-MM-DD"));
    }
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleConfirmDates = () => {
    if (!tempStartDate || !tempEndDate) {
      alert("Por favor, selecione ambas as datas.");
      return;
    }

    // Lógica para calcular e validar semanas e anos
    const calculateWeekAndYear = (date) => {
      const week = moment(date).isoWeek(); // Calcula a semana ISO
      const year = moment(date).year(); // Extrai o ano como int
      const validWeek = week >= 1 && week <= 53 ? week : null;
      const validYear = year >= 0 && year <= 9999 ? year : null;
      return { week: validWeek, year: validYear };
    };

    // Calcule as semanas e anos para as datas de início e fim
    const start = calculateWeekAndYear(tempStartDate);
    const end = calculateWeekAndYear(tempEndDate);

    // Exporta como `ew_start`, `ew_end`, `ey_start`, e `ey_end`
    const exportData = {
      ew_start: start.week,
      ew_end: end.week,
      ey_start: start.year,
      ey_end: end.year,
    };

    // Chama a função de callback com os valores
    onDateRangeSelect(exportData);
    toggleCalendar(); // Fecha o calendário
  };

  return (
    <View>
      {/* Botão para abrir o calendário */}
      <TouchableOpacity onPress={toggleCalendar} style={styles.iconContainer}>
        <FontAwesome name="calendar" size={24} color="black" />
      </TouchableOpacity>

      {/* Modal para exibir o calendário */}
      <Modal
        visible={isCalendarVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleCalendar}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.calendarContainer}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              onDateChange={handleDateChange}
              weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]}
              months={[
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
              ]}
              previousTitle="Anterior"
              nextTitle="Próximo"
              selectedDayColor="#FF0000"
              selectedDayTextColor="#FFFFFF"
              todayBackgroundColor="#E0E0E0"
              textStyle={{ color: "#000" }}
            />
            <TouchableOpacity
              onPress={handleConfirmDates}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmButtonText}>Confirmar Datas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleCalendar}
              style={styles.closeButton}
            >
              <FontAwesome name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarContainer: {
    width: "96%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: "#FF0000",
    padding: 12,
    marginTop: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
});

export default CalendarComponent;
