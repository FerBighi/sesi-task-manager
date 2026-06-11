import { View, Text, StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Sobre o Aluno
            </Text>

            <Text>Nome: Maria Fernanda Bighi Siqueira</Text>
            <Text>Turma: 3° Ano</Text>
            <Text>Curso: Desenvolvimento de Sistemas</Text>
            <Text>RM: 2610</Text>
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
        marginBottom: 20,
    },
});