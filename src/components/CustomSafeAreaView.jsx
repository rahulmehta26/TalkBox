import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const CustomSafeAreaView = ({children, customStyle}) => {
  return (
    <SafeAreaView
    style = {customStyle}
    className = 'bg-gray-100 px-2 flex-1 py-1 '
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;