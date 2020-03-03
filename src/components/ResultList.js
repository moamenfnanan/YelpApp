import React from 'react'
import {View,Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native'
import ResultDetail from './ReaultDetail'
import {withNavigation} from 'react-navigation'
const ResultList =({title,result,navigation})=>{
    if(!result.length){
        return null
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={result}
            keyExtractor={result=>result.id}
            renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}><ResultDetail result={item} /></TouchableOpacity>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15
    }
})
export default withNavigation(ResultList)