import api from "./api";
import { Paciente } from "../types/paciente";

export async function listarPacientes(): Promise<Paciente[]> {
  const response = await api.get<Paciente[]>("/pacientes");
  return response.data;
}

export async function buscarPacientePorId(id: number): Promise<Paciente> {
  const response = await api.get<Paciente>(`/pacientes/${id}`);
  return response.data;
}

export async function buscarPacientePorCpf(cpf: string): Promise<Paciente> {
  // O backend nao tem rota GET /pacientes/cpf/{cpf}, entao buscamos
  // todos os pacientes e filtramos pelo CPF aqui no frontend.
  const pacientes = await listarPacientes();
  const cpfLimpo = cpf.replace(/\D/g, "");
  const paciente = pacientes.find(
    (p) => p.cpf.replace(/\D/g, "") === cpfLimpo
  );
  if (!paciente) {
    throw new Error("Paciente nao encontrado");
  }
  return paciente;
}

export async function cadastrarPaciente(
  dados: Omit<Paciente, "id">
): Promise<Paciente> {
  const response = await api.post<Paciente>("/pacientes", dados);
  return response.data;
}