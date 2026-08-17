import api from "./api";
import { Medico } from "../interfaces/medico";

export async function listarMedicos(): Promise<Medico[]> {
  const response = await api.get<Medico[]>("/medicos");
  return response.data;
}

export async function buscarMedicoPorId(id: number): Promise<Medico> {
  const response = await api.get<Medico>(`/medicos/${id}`);
  return response.data;
}

export async function buscarMedicoPorCrm(crm: string): Promise<Medico> {
  // O backend nao tem rota GET /medicos/crm/{crm}, entao buscamos
  // todos os medicos e filtramos pelo CRM aqui no frontend.
  const medicos = await listarMedicos();
  const medico = medicos.find(
    (m) => m.crm.toUpperCase() === crm.toUpperCase()
  );
  if (!medico) {
    throw new Error("Medico nao encontrado");
  }
  return medico;
}

export async function listarMedicosPorEspecialidade(
  especialidadeId: number
): Promise<Medico[]> {
  // O backend nao tem rota GET /medicos/especialidade/{id}, entao
  // buscamos todos os medicos e filtramos pela especialidade aqui.
  const medicos = await listarMedicos();
  return medicos.filter((m) => m.especialidade.id === especialidadeId);
}

export async function atualizarMedico(
  id: number,
  dados: Medico
): Promise<Medico> {
  const response = await api.put<Medico>(`/medicos/${id}`, dados);
  return response.data;
}

export async function cadastrarMedico(
  dados: Omit<Medico, "id">
): Promise<Medico> {
  const response = await api.post<Medico>("/medicos", dados);
  return response.data;
}