import { Text } from 'react-native'
import Home from './Home'
import { AuthContext } from './AuthContext'



export default function AppNav() {
    const {isLoading, userToken, userInfo} = useContext(AuthContext)
    const [accountModal, setAccountModal] = useState(false);
    

    if (isLoading) {
        return(
            <View style = {{flex:1,justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    const handleModalState =()=>{
        setAccountModal(!accountModal)
    }
    
    if (userToken !== null){
        if (accountModal){ 
            return(
                <MyAccount handleModalState={handleModalState} />
            )
        }
    }

    return (
        <NavigationContainer >
        {userToken !== null ? (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#EEF0F2',
                },
                headerTintColor: '#394053',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => (
                    <Avatar
                    onPress={() => setAccountModal(true)}
                    title={userInfo.first_name.charAt(0)}
                    color="white"
                    size={35}
                    rounded
                    containerStyle={{ backgroundColor: "#1C2541" }}
                    />
                    ),
                }}
            >
                <Stack.Screen name='Home' component={Home} options={{title: '',}}/> 
            </Stack.Navigator>
            
        ):(
            <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#EEF0F2',
                    },
                    headerTintColor: '#1C2541',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        
                    },
                    autoCapitalize: 'none'
                }}
            >
                <Stack.Screen name='Login' component={Login} options={{title: ''}}/>
                <Stack.Screen name='Create Account' component={CreateAccount} options={{title: 'Token Fun',}}/> 
            </Stack.Navigator>
        )}
        
        </NavigationContainer>
    )
}
 