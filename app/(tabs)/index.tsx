import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { router } from "expo-router";

interface Task {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Prova de PPDM",
    date: "15/06/2026",
    category: "Prova",
    description: "Estudar React Native",
  },
  {
    id: "2",
    title: "Entrega de BCD",
    date: "18/06/2026",
    category: "Trabalho",
    description: "Finalizar atividade",
  },
  {
    id: "3",
    title: "Atividade de Matemática",
    date: "20/06/2026",
    category: "Atividade",
    description: "Resolver exercícios",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require("../../assets/images/sesi-logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>
            SESI Task Manager
          </Text>

          <Text style={styles.subtitle}>
            Organize suas atividades escolares
          </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/details/[id]",
                params: {
                  id: item.id,
                  title: item.title,
                  date: item.date,
                  category: item.category,
                  description: item.description,
                },
              })
            }
          >
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text>{item.date}</Text>

            <Text>{item.category}</Text>
          </TouchableOpacity>
        )}
      />

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

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#f4292f",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  logoImage: {
    width: 90,
    height: 40,
    marginRight: 15,
  },

  headerText: {
    flex: 1,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#fff",
    fontSize: 13,
    marginTop: 4,
  },
});
