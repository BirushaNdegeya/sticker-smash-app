import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';


export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <ImageViewer />
         </View>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
   },
   imageContainer: {
      flex: 1,
      paddingTop: 58,
   },
});
