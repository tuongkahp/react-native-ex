import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { RootTabScreenProps } from '../types';

export default function CategoryListItems(props) {
  const { category, onPress } = props
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {
      navigation.navigate('CategoryDetailScreen', props)
      // navigation.navigate('Modal')
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.title}</Text>
        <FontAwesome
          name={category.iconName}
          // size={25}
          color={Colors[colorScheme].text}
          style={styles.categoryImage}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#333",
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryImage: {
    fontSize: 40,
    paddingTop: 16,
    paddingBottom: 16
  },
});

