# AnimalCheck

AnimalCheck é um SaaS de monitoramento inteligente para animais domésticos e de grande porte, combinando aplicativos móveis, painel web, API, comunicação em tempo real e integração com coleiras GPS/GNSS conectadas por 4G, LTE-M ou NB-IoT.

Este repositório inicia pela fase de arquitetura e planejamento. A implementação de módulos deve ocorrer somente após aprovação da arquitetura.

## Documentação inicial

- [Arquitetura completa do sistema](docs/architecture.md)
- [Modelagem do banco de dados](docs/database-model.md)
- [Fluxos entre dispositivo, servidor e aplicativos](docs/flows.md)
- [Estrutura de pastas proposta](docs/folder-structure.md)
- [Roadmap MVP, Beta e v1.0](docs/roadmap.md)
- [Plano de escalabilidade](docs/scalability.md)
- [Estratégia de segurança e LGPD](docs/security.md)
- [Plano de infraestrutura em nuvem](docs/cloud-infrastructure.md)
- [Estimativa de custos operacionais](docs/costs.md)

## Stack proposta

- Backend: Laravel 12, PHP 8.4, Redis, Queues, PostgreSQL ou MySQL.
- Web: React, TypeScript, Tailwind CSS.
- Mobile: Flutter como opção principal para Android e iOS.
- Tempo real: WebSocket via Laravel Reverb ou serviço compatível.
- IoT: ingestão por HTTP e MQTT.
- Infraestrutura: Docker, Nginx, Supervisor, Redis, observabilidade e CI/CD.
