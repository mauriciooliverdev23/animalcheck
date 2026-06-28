# Como rodar o AnimalCheck localmente

Esta fase do projeto contém documentação e uma página estática de apresentação do produto. Ainda não há backend Laravel, aplicativo Flutter ou painel React implementados, pois a implementação deve começar somente após aprovação da arquitetura.

## Pré-requisitos

- Git instalado.
- Python 3 instalado para servir arquivos estáticos localmente.
- Navegador moderno, como Chrome, Edge, Firefox ou Safari.

## Rodando a página de apresentação

A partir da raiz do repositório, execute:

```bash
python3 -m http.server 8080
```

Depois abra no navegador:

```text
http://localhost:8080/presentation/
```

## Alternativa sem servidor local

Você também pode abrir diretamente o arquivo abaixo no navegador:

```text
presentation/index.html
```

O servidor local é recomendado porque simula melhor a forma como a página será acessada quando hospedada.

## O que a demonstração mostra

- Uma landing page moderna para apresentar o AnimalCheck.
- Um animal de exemplo chamado Thor, um Golden Retriever com coleira GPS online.
- Um dashboard simulado com mapa, localização, bateria, velocidade, status, temperatura e tempo de atividade.
- Cards de recursos como rastreamento em tempo real, cerca virtual, alertas, painel veterinário, compartilhamento familiar e modo perdido.
- Uma seção de planos para explicar a monetização.

## Próximos passos após aprovação

1. Criar o backend Laravel 12 com autenticação, usuários, organizações, animais e dispositivos.
2. Criar endpoints de ingestão HTTP para telemetria.
3. Adicionar WebSocket para rastreamento em tempo real.
4. Criar painel web React e aplicativo Flutter.
5. Integrar MQTT, geofences, notificações, relatórios e módulos veterinários.
