import {createAppContainer,createStackNavigator} from 'react-navigation'
import SearchScreen from './src/screens/searchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'
const Nav = createStackNavigator(
  {
    search:SearchScreen,
    ResultShow: ResultShowScreen
  },{
    initialRouteName:'search',
    defaultNavigationOptions:{
      title:'Business Search'
    }
  }
)
export default createAppContainer(Nav)