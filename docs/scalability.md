# Plano de escalabilidade

## 100 usuários

- Monólito modular Laravel em uma instância.
- Banco PostgreSQL gerenciado pequeno.
- Redis único.
- WebSocket no mesmo cluster.
- Broker MQTT simples.

## 1.000 usuários

- Separar web, API, workers e WebSocket em containers distintos.
- Redis gerenciado.
- PostgreSQL com backups automáticos e read replica opcional.
- Filas dedicadas para telemetria, notificações e relatórios.

## 10.000 usuários

- Auto scaling horizontal de API e workers.
- WebSocket escalado com Redis pub/sub ou adapter dedicado.
- MQTT broker em cluster.
- Índices espaciais revisados e telemetria particionada.
- CDN para imagens e assets.
- Observabilidade obrigatória.

## 100.000 usuários

- Separação lógica de serviços críticos: ingestão IoT, realtime, notificações e API principal.
- Particionamento mensal ou semanal de telemetria.
- Read replicas para dashboards e relatórios.
- Data warehouse ou lake para analytics histórico.
- Backpressure e rate limit por dispositivo, usuário e organização.
- Cache de última localização em Redis Cluster.

## 1 milhão de usuários

- Arquitetura distribuída por domínios de alta carga.
- Ingestão IoT independente com Kafka, Pulsar ou fila equivalente.
- Sharding por organização ou dispositivo para telemetria massiva.
- Banco transacional separado de banco temporal/analítico.
- Multi-região para baixa latência e resiliência.
- Estratégia de retenção agressiva e armazenamento frio.

## Estratégias sem reescrita

- Começar com monólito modular bem delimitado.
- Publicar eventos de domínio desde o MVP.
- Contratos versionados para REST, WebSocket e MQTT.
- Repositórios e serviços desacoplados da infraestrutura.
- Jobs idempotentes para reprocessamento seguro.
