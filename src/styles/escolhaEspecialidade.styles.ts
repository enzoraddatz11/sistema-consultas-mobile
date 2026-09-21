/**
 * Estilos da EscolhaEspecialidadeScreen
 *
 * Separados da lógica para facilitar manutenção e reuso.
 * A tela em si (EscolhaEspecialidadeScreen.tsx) cuida apenas de JSX e lógica.
 *
 * Regra: este arquivo só importa StyleSheet - nada de React, nada de lógica.
 */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#79059C" },
    listContent: { padding: 20, paddingBottom: 40 },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 18,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardNome: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        flex: 1,
    },
    cardSeta: { fontSize: 18, color: "#79059C" },
    vazio: { color: "#fff", textAlign: "center", marginTop: 40, fontSize: 14 },
});