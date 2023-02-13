import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}