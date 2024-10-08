import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
                Don't have a account? <Text style={styles.accent}>Sing up</Text>
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#34495E"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#34495E"
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/tabs")}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.viewButtons}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <Text style={styles.forgotPassword}>Sign in like Invited</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF0F1",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: "#2C3E50",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#34495E",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 20,
        color: "#34495E",
    },
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: "#27AE60",
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    forgotPassword: {
        color: "#E67E22",
        marginTop: 20,
    },
    subtitle: {
        color: "hsl(240 3.8% 45%)",
        marginTop: 10,
        marginBottom: 40,
    },
    accent: {
        color: "hsl(346.8 77.2% 49.8%)",
    },
    viewButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
});

export default HomePage;