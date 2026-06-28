# Roadmap de desenvolvimento

## MVP

Objetivo: validar rastreamento em tempo real e valor principal para tutores.

- Autenticação JWT e refresh token.
- Cadastro de usuário, organização individual e animal.
- Cadastro e vínculo de dispositivo GPS.
- Ingestão HTTP de telemetria.
- Persistência de histórico básico.
- Última localização, bateria, velocidade, status e última atualização.
- App mobile Flutter com mapa em tempo real.
- Painel web básico com mapa.
- WebSocket para atualização de localização.
- Geofence circular.
- Push notification para saída e retorno da área segura.
- Alerta de baixa bateria e sem sinal.
- Plano Free e Premium com limites simples.
- Docker local, CI básico, testes essenciais e OpenAPI inicial.

## Beta

Objetivo: preparar operação comercial limitada e ampliar retenção.

- MQTT com broker dedicado.
- Geofence poligonal e retangular.
- Histórico reproduzível no mapa.
- Compartilhamento familiar com permissões.
- Carteira de vacinação.
- Medicamentos e lembretes.
- Painel administrativo.
- Lost Mode.
- Atividade física com distância, tempo andando, correndo e parado.
- Relatórios diários e semanais.
- Auditoria, rate limit avançado e logs estruturados.
- Observabilidade com métricas e alertas operacionais.
- Integração de pagamento recorrente.
- Testes de carga iniciais.

## Versão 1.0

Objetivo: produto comercial escalável e pronto para milhares de usuários.

- Painel veterinário completo.
- Planos Família, Veterinário e Empresas.
- OTA de firmware com comandos e auditoria.
- Relatórios mensais e anuais.
- Preferências avançadas de notificação.
- Retenção de dados por plano.
- Particionamento de telemetria.
- Infraestrutura em nuvem com alta disponibilidade.
- Backup, disaster recovery e runbooks.
- Segurança LGPD madura, DPA e processos de exclusão/exportação.
- Testes automatizados amplos e pipeline CI/CD completo.

## Pós 1.0

- IA para mudança de comportamento, sedentarismo, possível doença e rotina alterada.
- SMS e WhatsApp.
- Integração com clínicas, fazendas e ERPs parceiros.
- Marketplace de dispositivos homologados.
- Analytics preditivo e recomendações personalizadas.
