import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={60} color="#fff" />
                </View>

                <Text style={styles.name}>
                    Maria Fernanda Bighi Siqueira
                </Text>

                <View style={styles.infoContainer}>
                    <Ionicons name="school" size={22} color="#f4292f" />
                    <Text style={styles.info}>Turma: 3º Ano</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Ionicons name="laptop" size={22} color="#f4292f" />
                    <Text style={styles.info}>
                        Curso: Desenvolvimento de Sistemas
                    </Text>
                </View>

                <View style={styles.infoContainer}>
                    <Ionicons name="card" size={22} color="#f4292f" />
                    <Text style={styles.info}>RM: 2610</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    card: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        padding: 25,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,

        elevation: 5,
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: "#f4292f",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1E293B",
        textAlign: "center",
        marginBottom: 25,
    },

    infoContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcefef",
        padding: 15,
        borderRadius: 15,
        marginBottom: 12,
    },

    info: {
        fontSize: 16,
        marginLeft: 10,
        color: "#334155",
        flex: 1,
    },
});