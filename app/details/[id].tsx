import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function Details() {
    // Tipando os parâmetros estritamente para o TypeScript não reclamar
    const { title, date, category, description } = useLocalSearchParams<{
        title: string;
        date: string;
        category: string;
        description: string;
    }>();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Detalhes da Tarefa" }} />

            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>Data: {date}</Text>
                <Text style={styles.info}>Categoria: {category}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginTop: 15,
        padding: 10,
        backgroundColor: "#eee",
        borderRadius: 5,
    },
});