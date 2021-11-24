import {Fab, AddIcon} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import TrainersList from '../../components/TrainersList/TrainersList';

const TrainersPage = () => {
  const navigation = useNavigation();
  return (
    <>
      <TrainersList />
      <Fab
        position="absolute"
        size="sm"
        onPress={() => {
          navigation.navigate('AddTrainer' as any);
        }}
        bgColor="violet.600"
        icon={<AddIcon color="white" size="sm" />}
      />
    </>
  );
};

export default TrainersPage;
