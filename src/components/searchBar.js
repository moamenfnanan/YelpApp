import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
const SearchBar = ({onEndEditing,value,setValue}) =>{
    return(
        <View style={styles.container}>
            <Feather 
                name='search'
                style={styles.iconStyle}
                />
            <TextInput 
                onEndEditing={onEndEditing}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='search'
                style={styles.searchBox}
                value={value}
                onChangeText={setValue}
            />
        </View>
    )    
}
const styles = StyleSheet.create({
    searchBox:{
       flex:1,
        fontSize:18
    },
    container:{
        flexDirection:'row',
        height:50,
        marginVertical:15,
        marginHorizontal:15,
        backgroundColor: '#f0eeee',
        borderRadius:5,
        alignItems:'center'
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15
    }
})
export default SearchBar