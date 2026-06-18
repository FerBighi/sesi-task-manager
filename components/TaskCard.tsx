import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

interface Task {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
}

interface TaskCardProps {
    item: Task;
    onLongPress: () => void;
}

export default function TaskCard({ item, onLongPress }: TaskCardProps) {
    return (
        <Pressable
            style={({ pressed }: { pressed: boolean }) => [
                styles.card,
                { opacity: pressed ? 0.7 : 1 }
            ]}
            onLongPress={onLongPress} // Exigido pelo desafio!
            onPress={() => {
                router.push({
                    pathname: "/details/[id]",
                    params: {
                        id: item.id,
                        title: item.title,
                        date: item.date,
                        category: item.category,
                        description: item.description,
                    },
                });
            }}
        >
            <View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardInfo}>{item.date} | {item.category}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    cardInfo: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
});