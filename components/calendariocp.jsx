import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ComponenteCalendario = () => {
  const [markedDates, setMarkedDates] = useState({})
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayLongPress = (date) => {
    Alert.alert('Opções', `Escolha uma ação para a data: ${date}`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Criar Novo Lembrete',
        onPress: () => handleCreateReminder(date),
      },
    ]);
  };

  const handleCreateReminder = (date) => {
    Alert.alert('Lembrete Criado!', `Lembrete agendado para: ${date}`);
  };

  const handleDayPress = (date) => {
    // Atualiza o estado da data selecionada
    setSelectedDate(date);

    // Atualiza os dias marcados (substituindo o estado anterior)
    setMarkedDates({
      [date]: { selected: true, marked: true, selectedColor: 'red' },
    });
  };

  return (
    <View style={{ flex:1 , justifyContent: 'flex-end'  }}>
    <Calendar
      style={{
        borderWidth: 10,
        borderColor: 'grey',
        alignSelf: 'center',
        width: windowWidth * 0.9,  // 80% da largura da tela
        height: windowHeight * 0.6, // 60% da altura da tela
      }}
        
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'red',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'arial',
          textMonthFontFamily: 'arial',
          textDayHeaderFontFamily: 'arial',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}

        onDayLongPress={(date) => handleDayLongPress(date)}
        onDayPress={(date) => handleDayPress(date.dateString)}
        markedDates={markedDates}
      />
    </View>
  );
};
LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Jullho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mars', 'Abril', 'Maio', 'Junh', 'Jull.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Domingo', 'Segunda-Feira', 'Terça Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt';

export default ComponenteCalendario;
