import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomText from '../../components/CustomText';

const ProfileScreen = () => {
  return (
    <CustomSafeAreaView>

      <CustomText variants ='large' customStyle={{fontWeight: 'bold'}} >ProfileScreen</CustomText>

    </CustomSafeAreaView>
  );
};

export default ProfileScreen;