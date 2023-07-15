import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'

const Drawer = createDrawerNavigator()

export default function AppNav() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} options={{title:"HOME"}} />
            <Drawer.Screen name="Profile" component={Profile} options={{title: "PROFILE"}} />
        </Drawer.Navigator>
    )
}