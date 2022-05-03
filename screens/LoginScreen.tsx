import { StyleSheet, Image, ScrollView, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CategoryListItems from '../components/CategoryListItems'

export default function LoginScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let categories = [
    { title: 'item1', iconName: 'plus' },
    { title: 'item2', iconName: 'github' },
    { title: 'item3', iconName: 'coffee' },
    { title: 'item4', iconName: 'plus' },
    { title: 'item5', iconName: 'github' },
    { title: 'item6', iconName: 'coffee' },
    { title: 'item7', iconName: 'plus' },
    { title: 'item8', iconName: 'github' },
    { title: 'item9', iconName: 'coffee' },
    { title: 'item10', iconName: 'plus' },
    { title: 'item11', iconName: 'coffee' },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is first screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    alignItems: 'stretch',
    paddingLeft: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
