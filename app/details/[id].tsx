import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Details() {
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
                <View style={styles.topBar} />

                <Text style={styles.title}>{title}</Text>

                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{category}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#f4292f"
                    />
                    <Text style={styles.info}>
                        {date}
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>
                    Descrição
                </Text>

                <View style={styles.descriptionBox}>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20,
        justifyContent: "center",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,

        elevation: 5,
    },

    topBar: {
        height: 6,
        backgroundColor: "#f4292f",
        borderRadius: 10,
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 15,
    },

    badge: {
        alignSelf: "flex-start",
        backgroundColor: "#FEE2E2",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 50,
        marginBottom: 20,
    },

    badgeText: {
        color: "#f4292f",
        fontWeight: "bold",
    },

    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },

    info: {
        marginLeft: 8,
        color: "#6B7280",
        fontSize: 16,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 10,
    },

    descriptionBox: {
        backgroundColor: "#F9FAFB",
        borderRadius: 15,
        padding: 15,
    },

    description: {
        fontSize: 16,
        color: "#4B5563",
        lineHeight: 24,
    },
});