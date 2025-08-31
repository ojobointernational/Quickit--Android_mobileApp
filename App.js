import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Quick Buy</Text>
      <Image style ={styles.Image} source={require('./assets/backgrdlogin.jpg')}  />
      <Text style={styles.description}> Best Platform for your used cheap items</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop:50,
    fontsize:30,
    fontweight:'bold',
    color:'#ff6347',
    marginBottom:40,
  },
  Image:{
    width:200,
    height:200,
    borderRadius:100,
  },
  description:{
    fontsize:20,
    textAlign:'center',
    marginTop:30,

}});
