import React from 'react';
import BotaoAdicionar from './components/BotaoAdicionar';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function SecondScreen() {
  // Example off reminders (you can make changes for you real dates)
  const reminders = [
    { id: 1, title: 'Lembrete 1' },
    { id: 2, title: 'Lembrete 2' },
    { id: 3, title: 'Lembrete 3' },
    // Add new reminders as needed
  ];

  return (
    <View style={styles.container}>
      <BotaoAdicionar title= 'Novo recado'/>
      <Text style={styles.heading}>Lembretes</Text>
      <ScrollView contentContainerStyle={styles.reminderList}>
        {reminders.map((reminder) => (
          <TouchableOpacity key={reminder.id} style={styles.reminderItem}>
            <Text>{reminder.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminderList: {
    flexGrow: 1,
  },
  reminderItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});