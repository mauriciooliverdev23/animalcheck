# Fluxos entre dispositivo, servidor e aplicativos

## Ingestão HTTP

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant API as API IoT HTTP
    participant Q as Fila
    participant W as Worker
    participant DB as Banco
    participant R as Redis
    participant WS as WebSocket
    participant APP as App/Web

    D->>API: POST /api/v1/iot/telemetry
    API->>API: Autentica device token e valida payload
    API->>Q: Publica TelemetryReceived
    API-->>D: 202 Accepted
    Q->>W: Consome evento
    W->>DB: Persiste telemetry_points
    W->>R: Atualiza último estado
    W->>W: Avalia geofence e alertas
    W->>WS: Publica localização atualizada
    WS-->>APP: animal.location.updated
```

## Ingestão MQTT

- Tópico de telemetria: `devices/{deviceSerial}/telemetry`.
- Tópico de status: `devices/{deviceSerial}/status`.
- Tópico de comandos: `devices/{deviceSerial}/commands`.
- Tópico de ack: `devices/{deviceSerial}/acks`.

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant M as Broker MQTT
    participant I as Bridge IoT
    participant Q as Fila
    participant W as Worker

    D->>M: Publish telemetry QoS 1
    M->>I: Encaminha mensagem autenticada
    I->>Q: Publica TelemetryReceived
    Q->>W: Processa telemetria
    W-->>M: Publica comando se necessário
    M-->>D: Entrega comando OTA ou Lost Mode
```

## Rastreamento em tempo real

1. App autentica com JWT.
2. App abre WebSocket.
3. Backend autoriza inscrição no canal `private-pet.{petId}`.
4. Ao chegar nova telemetria, o worker publica o evento no canal.
5. App move o marcador no mapa com interpolação visual para suavidade.

## Geofence

1. Usuário desenha círculo, retângulo ou polígono no mapa.
2. Backend valida permissões e salva geometria.
3. Cada ponto recebido é comparado com geofences ativas do animal.
4. O sistema mantém em Redis o último estado dentro/fora por geofence.
5. Transições geram `geofence_events`, `alerts` e notificações.

## Modo perdido

1. Tutor ativa modo perdido no app.
2. API cria comando `lost_mode_on` para o dispositivo.
3. Worker envia comando por MQTT ou mantém pendente para polling HTTP.
4. Dispositivo reduz intervalo de envio e prioriza precisão.
5. App recebe atualizações mais frequentes e notificações constantes.
6. Ao desativar, API envia `lost_mode_off` e restaura intervalo normal.

## Notificações

- Push imediato para alertas críticos.
- E-mail para relatórios, lembretes e alertas configuráveis.
- SMS e WhatsApp planejados por adaptadores futuros.
- Preferências por usuário, pet, severidade e canal.

## Fluxo veterinário

1. Tutor concede acesso ao veterinário ou clínica.
2. Veterinário acessa painel com escopo limitado.
3. Visualiza atividade, peso, vacinas, consultas e medicamentos.
4. Registros clínicos geram auditoria.
