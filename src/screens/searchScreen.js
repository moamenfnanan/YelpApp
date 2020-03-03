import React,{useState} from 'react';
import { StyleSheet, View,Text,FlatList ,ScrollView} from 'react-native';
import SearchBar from '../components/searchBar'
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList'
const SearchScreen=()=> {
    const [term,setTerm] = useState('')
    const [searchApi,err,result] = useResult()
    const searchByPrice = (price) => result.filter( (val) => val.price === price)
    const search = async ()=>await searchApi(term)
    return (
    <View style={styles.container}>
            <SearchBar
                value={term}
                setValue={(val)=>setTerm(val)}
                onEndEditing={search}
            />
            {err?<Text>{err}</Text>:<Text>We have found {result.length} results</Text>}
            <ScrollView>
              <ResultList result={searchByPrice('$')} title='Cost Effective' />
              <ResultList result={searchByPrice('$$')} title='Bit Pricier' />
              <ResultList result={searchByPrice('$$$')} title='Big Spender' />
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
export default SearchScreen