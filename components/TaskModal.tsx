import React from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

interface TaskModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: () => void;
    title: string;
    setTitle: (t: string) => void;
    date: string;
    setDate: (d: string) => void;
    category: string;
    setCategory: (c: string) => void;
    description: string;
    setDescription: (d: string) => void;
}

export default function TaskModal({
    visible,
    onClose,
    onSave,
    title,
    setTitle,
    date,
    setDate,
    category,
    setCategory,
    description,
    setDescription,
}: TaskModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Nova Tarefa</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Título da Atividade"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data (ex: 25/06/2026)"
                        value={date}
                        onChangeText={setDate}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Categoria (ex: Prova, Trabalho)"
                        value={category}
                        onChangeText={setCategory}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Descrição detalhada"
                        multiline
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={onClose}>
                            <Text style={styles.btnText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={onSave}>
                            <Text style={styles.btnText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 20,
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#f1f3f5",
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderColor: "#e9ecef",
        borderWidth: 1,
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    btn: {
        flex: 0.48,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    btnCancel: {
        backgroundColor: "#6c757d",
    },
    btnSave: {
        backgroundColor: "#28a745",
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
    },
});