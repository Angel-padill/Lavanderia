import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UpdateClientView = ({ route, navigation }) => {
  const cliente = route.params?.cliente || {
    id: '',
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
  };

  const [nombre, setNombre] = useState(cliente.nombre);
  const [correo, setCorreo] = useState(cliente.correo);
  const [telefono, setTelefono] = useState(cliente.telefono);
  const [direccion, setDireccion] = useState(cliente.direccion);

  const handleActualizar = () => {
    Alert.alert('Cliente actualizado', `Nombre: ${nombre}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
      />
      <Button title="Guardar Cambios" onPress={handleActualizar} />
    </View>
  );
};

export default UpdateClientView;

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
