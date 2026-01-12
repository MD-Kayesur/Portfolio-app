//import liraries
 import { View, Text, StyleSheet } from 'react-native';


// create a component
const App:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>App hi how ate you
                let me try
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default App;
