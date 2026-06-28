# Estimativa de custos operacionais

Os valores abaixo são estimativas mensais aproximadas e variam por provedor, região, tráfego, volume de telemetria, retenção e nível de suporte. Não incluem custo de hardware, chip SIM, conectividade celular por dispositivo, impostos ou equipe.

## Premissas

- Dispositivo em modo normal envia localização a cada 30 a 60 segundos.
- Lost Mode aumenta frequência para poucos segundos.
- Histórico retido conforme plano.
- Push notification tem custo baixo usando FCM/APNs, mas e-mail, SMS e WhatsApp variam por volume.

## Fase MVP: até 100 usuários

| Item | Estimativa mensal |
|---|---:|
| Compute API/WebSocket/Workers | US$ 40 - 120 |
| PostgreSQL gerenciado | US$ 30 - 100 |
| Redis | US$ 15 - 60 |
| MQTT | US$ 0 - 80 |
| Object storage/CDN | US$ 5 - 30 |
| Logs e monitoramento | US$ 0 - 50 |
| E-mail transacional | US$ 0 - 20 |
| Total | US$ 90 - 460 |

## Beta: até 10.000 usuários

| Item | Estimativa mensal |
|---|---:|
| Compute escalado | US$ 300 - 1.500 |
| PostgreSQL maior + backups | US$ 250 - 1.200 |
| Redis gerenciado | US$ 100 - 500 |
| MQTT cluster/gerenciado | US$ 150 - 1.000 |
| Object storage/CDN | US$ 50 - 500 |
| Observabilidade | US$ 100 - 800 |
| E-mail/push | US$ 20 - 300 |
| Total | US$ 970 - 5.800 |

## Produção: até 100.000 usuários

| Item | Estimativa mensal |
|---|---:|
| Compute API/Workers/WebSocket | US$ 2.000 - 10.000 |
| Banco transacional + réplicas | US$ 2.000 - 12.000 |
| Redis Cluster | US$ 700 - 4.000 |
| MQTT cluster | US$ 1.000 - 8.000 |
| Storage/CDN | US$ 500 - 5.000 |
| Observabilidade | US$ 1.000 - 8.000 |
| Notificações e e-mail | US$ 300 - 3.000 |
| Total | US$ 7.500 - 50.000 |

## Pontos de atenção

- A conectividade celular por coleira pode superar o custo de cloud.
- Frequência de telemetria é o maior multiplicador de custo.
- Retenção longa de dados precisa ser monetizada nos planos pagos.
- Lost Mode deve ter limites operacionais para evitar abuso e consumo excessivo.
