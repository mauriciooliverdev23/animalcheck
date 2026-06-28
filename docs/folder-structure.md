# Estrutura de pastas proposta

```text
animalcheck/
├── apps/
│   ├── api/                    # Laravel 12
│   ├── web/                    # React + TypeScript + Tailwind
│   └── mobile/                 # Flutter
├── packages/
│   ├── contracts/              # OpenAPI, eventos, schemas MQTT
│   ├── shared-types/           # Tipos gerados para web/mobile
│   └── ui/                     # Design system web compartilhado
├── infrastructure/
│   ├── docker/
│   ├── nginx/
│   ├── supervisor/
│   ├── terraform/
│   └── k8s/
├── docs/
│   ├── architecture.md
│   ├── database-model.md
│   ├── flows.md
│   ├── folder-structure.md
│   ├── roadmap.md
│   ├── scalability.md
│   ├── security.md
│   ├── cloud-infrastructure.md
│   └── costs.md
└── .github/
    └── workflows/
```

## Backend Laravel

```text
apps/api/
├── app/
│   ├── Domain/
│   │   ├── Identity/
│   │   ├── Pets/
│   │   ├── Devices/
│   │   ├── Telemetry/
│   │   ├── Geofencing/
│   │   ├── Alerts/
│   │   ├── Health/
│   │   ├── Billing/
│   │   └── Admin/
│   ├── Application/
│   │   ├── Commands/
│   │   ├── Queries/
│   │   ├── DTOs/
│   │   └── Services/
│   ├── Infrastructure/
│   │   ├── Persistence/
│   │   ├── Messaging/
│   │   ├── Notifications/
│   │   ├── Cache/
│   │   └── IoT/
│   └── Interfaces/
│       ├── Http/
│       ├── WebSocket/
│       ├── Mqtt/
│       └── Console/
├── database/
├── routes/
├── tests/
└── config/
```

## Frontend Web

```text
apps/web/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   │   ├── dashboard/
│   │   ├── tracking/
│   │   ├── geofences/
│   │   ├── pets/
│   │   ├── health/
│   │   ├── admin/
│   │   └── billing/
│   ├── hooks/
│   ├── services/
│   ├── stores/
│   └── styles/
└── tests/
```

## Mobile Flutter

```text
apps/mobile/
├── lib/
│   ├── core/
│   ├── features/
│   │   ├── auth/
│   │   ├── onboarding/
│   │   ├── dashboard/
│   │   ├── live_tracking/
│   │   ├── geofences/
│   │   ├── pet_profile/
│   │   ├── health/
│   │   └── notifications/
│   └── design_system/
└── test/
```

## Convenção de implementação

Cada módulo deve conter contratos, casos de uso, policies, eventos, listeners, jobs, testes unitários e testes de integração. O domínio não deve depender de framework, banco ou provedores externos.
