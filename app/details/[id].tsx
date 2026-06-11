import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
    const {
        title,
        date,
        category,
        description,
    } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>

            <Text>Data: {date}</Text>

            <Text>Categoria: {category}</Text>

            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },

    description: {
        marginTop: 15,
    },
});