import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors';

export default function Divider({ customStyles }) {
  return <View style={[styles.divider, customStyles]}></View>;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.white,
    height: 1,
  },
});
