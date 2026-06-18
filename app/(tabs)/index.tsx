import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import TaskCard from "../../components/TaskCard";
import TaskModal from "../../components/TaskModal";
import { Platform } from "react-native";

interface Task {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

const initialTasks: Task[] = [
  { id: "1", title: "Prova de PPDM", date: "15/06/2026", category: "Prova", description: "Estudar React Native" },
  { id: "2", title: "Entrega de BCD", date: "18/06/2026", category: "Trabalho", description: "Finalizar atividade" },
  { id: "3", title: "Atividade de Matemática", date: "20/06/2026", category: "Atividade", description: "Resolver exercícios" },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [newTitle, setNewTitle] = useState<string>("");
  const [newDate, setNewDate] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");

  useEffect(() => {
    Alert.alert("Bem-vindo!", "Gerencie suas tarefas do SESI com facilidade.");
  }, []);

  const filteredTasks = tasks.filter((task: Task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = () => {
    if (!newTitle || !newDate || !newCategory || !newDescription) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const newTask: Task = {
      id: Math.random().toString(),
      title: newTitle,
      date: newDate,
      category: newCategory,
      description: newDescription,
    };

    setTasks([...tasks, newTask]);

    setNewTitle("");
    setNewDate("");
    setNewCategory("");
    setNewDescription("");
    setModalVisible(false);

    Alert.alert("Sucesso", "Tarefa adicionada!");
  };

  const handleLongPress = (id: string, title: string) => {
    // Se o professor testar no Navegador (Web)
    if (Platform.OS === 'web') {
      const aceitou = window.confirm(`Deseja realmente excluir a tarefa "${title}"?`);
      if (aceitou) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } else {
      // Se testar no Celular (Expo Go)
      Alert.alert(
        "Excluir Tarefa",
        `Deseja realmente excluir a tarefa "${title}"?`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            style: "destructive",
            onPress: () => {
              setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/sesi-logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>SESI Task Manager</Text>
          <Text style={styles.subtitle}>Organize suas atividades escolares</Text>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar tarefa por título..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            item={item}
            onLongPress={() => handleLongPress(item.id, item.title)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>}
      />

      <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddTask}
        title={newTitle}
        setTitle={setNewTitle}
        date={newDate}
        setDate={setNewDate}
        category={newCategory}
        setCategory={setNewCategory}
        description={newDescription}
        setDescription={setNewDescription}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  header: { backgroundColor: "#f4292f", padding: 15, borderRadius: 15, marginBottom: 15, flexDirection: "row", alignItems: "center" },
  logoImage: { width: 90, height: 40, marginRight: 15 },
  headerText: { flex: 1 },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  subtitle: { color: "#fff", fontSize: 13, marginTop: 4 },
  searchInput: { backgroundColor: "#fff", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10, borderColor: "#ddd", borderWidth: 1, marginBottom: 15 },
  emptyText: { textAlign: "center", color: "#999", marginTop: 20 },
  fab: { position: "absolute", bottom: 20, right: 20, backgroundColor: "#f4292f", width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center", elevation: 5 },
  fabText: { color: "#fff", fontSize: 30, fontWeight: "bold" },
});