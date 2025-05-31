import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const UserView = ({ navigation }) => {
  const usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@utma.com',
    telefono: '4493113122',
    direccion: 'Calle Imelda 123',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text style={styles.label}>Nombre: {usuario.nombre}</Text>
      <Text style={styles.label}>Correo: {usuario.correo}</Text>
      <Text style={styles.label}>Teléfono: {usuario.telefono}</Text>
      <Text style={styles.label}>Dirección: {usuario.direccion}</Text>
      <Button title="Ver Clientes" onPress={() => navigation.navigate('Clientes')} />
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
