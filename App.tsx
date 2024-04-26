import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import type { User } from './lib/defintions';

const App = () => {
   enums {
      n, h, r, d
   }
   console.log()
   const {
      container
   } = styles;
   const users: User = {
      id: '001',
      isActive: false,
      description: 'something to write'
   };
   console.log(users);
   return (
      <View style={container}>
         <StatusBar />
         <Text>STICKER SMASH APP</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default App;