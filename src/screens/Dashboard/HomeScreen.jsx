import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomText from '../../components/CustomText';

const HomeScreen = () => {
  return (

    <CustomSafeAreaView>

      <CustomText variants ='large' >HomeScreen</CustomText>

    </CustomSafeAreaView>
    
  );
};

export default HomeScreen;