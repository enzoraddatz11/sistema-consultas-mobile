# Sistema de Consultas - Mobile

App mobile (React Native / Expo) do Sistema de Consultas, integrado a um backend Spring Boot.

## Deploy

### Backend

Hospedado no Render: https://backend-consultas.onrender.com

- GET /health → {"status":"UP"}
- GET /medicos → lista de médicos
- GET /pacientes → lista de pacientes

> O serviço dorme após 15 min de inatividade (free tier).
> A primeira requisição pode levar até 60 segundos.

---

### Frontend - APK Android

Build gerado com EAS Build (perfil `preview`).

1. Escaneie o QR Code abaixo **ou** baixe pelo link do Expo.
2. Permita instalação de fontes desconhecidas apenas para o instalador.
3. Instale e abra o app.

### QR Code do build (Expo Dashboard / EAS)

![QR Code EAS Build](./docs/qrcode-eas-build.png)

> Este QR é o da página do build em expo.dev - não o do `npx expo start`.

> **Observação:** o build foi gerado com sucesso no EAS (status "Succeeded"),
> mas a instalação em um dispositivo Android físico não pôde ser testada
> por falta de aparelho disponível no momento da entrega.

### Credenciais de teste

| Perfil | Campo | Valor |
|---|---|---|
| Médico | CRM | 789456 |
| Paciente | CPF | 12345678901 |