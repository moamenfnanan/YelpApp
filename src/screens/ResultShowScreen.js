import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Text,Image,FlatList} from 'react-native';
import yelp from '../api/yelp'
const ResultShowScreen=({navigation})=> {
  const [result,setResult] = useState(null);
  const id = navigation.getParam('id');
  const getResult = async (homaaar)=>{
    const respons = await yelp.get(`/${homaaar}`)
    setResult(respons.data)
  }
  useEffect(()=>{
    getResult(id)
  },[])

  if(!result){
    return null
  }
    return (
    <View style={styles.container}>
            <Text>
              {result.name}
            </Text>
            <FlatList
              data={result.photos}
              keyExtractor={ptata=>ptata}
              renderItem={({item})=><Image style={styles.image} source={{uri : item}} />}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  image:{
    width:300,
    height:200
  }
});
export default ResultShowScreen