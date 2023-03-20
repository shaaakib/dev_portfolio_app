import { Text as RNText } from 'react-native';
import React from 'react';
import { presets } from '../../components/text/Text.preset';
import { colors } from '../../theme/colors';
import { StyleSheet } from 'react-native';

export default function Text({ children, customStyles, preset = 'body' }) {
  const textStyle = presets[preset];
  return (
    <RNText style={[textStyle, style.text, customStyles]}>{children}</RNText>
  );
}

const style = StyleSheet.create({
  text: { color: colors.white },
});
