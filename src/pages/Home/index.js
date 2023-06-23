// Home.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cabecalho from '../../components/Header';
import Balance from '../../components/Header/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: '500,00',
    date: '17/02/2023',
    type: 0, // saída
  },
  {
    id: 2,
    label: 'pix cliente X',
    value: '2.500,00',
    date: '17/01/2023',
    type: 1, // entrada
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '05/01/2023',
    type: 1, // entrada
  },
];

export default function Home() {
  const [tipoMovimentacao, setTipoMovimentacao] = useState(null);

  return (
    <View style={styles.container}>
      <Cabecalho name="Pedro Estevam" />

      <Balance saldo="9.259,87" gastos="- 527,02" />
      <Actions setTipoMovimentacao={setTipoMovimentacao} />
      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list.filter((item) => tipoMovimentacao === null || item.type === tipoMovimentacao)}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
