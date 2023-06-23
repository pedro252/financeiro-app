import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({saldo, gastos}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balanceAmount}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balanceGasto}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
  },
  item: {
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: `#808080`
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currentSymbol: {
    fontSize: 14,
    color: '#808080',
    marginRight: 4,
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: `#2ecc71`
  },
  balanceGasto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: `#e74c3c`
  },
});
