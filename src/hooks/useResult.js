import {useEffect,useState} from 'react'
import yelp from '../api/yelp'

export default() =>{
    const [result,setResult] = useState([])
    const [err,setErr] = useState('')
    const searchApi = async searchTerm => {
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'san Jose'
                }
            })
            setResult(response.data.businesses)
        }
        catch(err){
            setErr('something is wrong!')
        }
    }
    useEffect(()=>{
        searchApi('pasta');
    },[])
    return[searchApi,err,result]
}