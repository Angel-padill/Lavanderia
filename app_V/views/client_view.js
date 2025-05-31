import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const ClientView = ({ navigation }) => {
  const clientes = [
    { id: '1', nombre: 'Cliente 1', correo: 'cliente1@example.com', telefono: '555-1234', direccion: 'Calle 1' },
    { id: '2', nombre: 'Cliente 2', correo: 'cliente2@example.com', telefono: '555-5678', direccion: 'Calle 2' },
    { id: '3', nombre: 'Cliente 3', correo: 'cliente3@example.com', telefono: '555-9012', direccion: 'Calle 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text>{item.correo}</Text>
      <Text>{item.telefono}</Text>
      <Text>{item.direccion}</Text>
      <Button title="Editar" onPress={() => navigation.navigate('ActualizarCliente', { cliente: item })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ClientView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
