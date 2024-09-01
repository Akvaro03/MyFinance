import { router } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <View>
            <Text onPress={()=> router.back()}>Home Screen</Text>
        </View>
    );
}
