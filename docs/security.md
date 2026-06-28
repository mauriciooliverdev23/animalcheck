# Estratégia de segurança e LGPD

## Autenticação e autorização

- JWT curto para acesso e refresh token rotativo.
- Revogação de refresh token por dispositivo do usuário.
- Policies por organização, animal e papel.
- Permissões granulares para família, veterinários e administradores.
- MFA planejado para administradores, veterinários e contas empresariais.

## Segurança de dispositivos

- Credenciais individuais por coleira.
- Token armazenado com hash no servidor.
- Rotação de credenciais.
- Assinatura HMAC ou chave pública para payloads críticos.
- Bloqueio remoto de dispositivo roubado ou comprometido.
- Rate limit por dispositivo e anomalia de localização.

## Proteção de dados

- Criptografia em trânsito com TLS.
- Criptografia em repouso para banco, backups e objetos.
- Campos sensíveis com criptografia na aplicação quando necessário.
- Separação por organização e checagem de escopo em todas as queries.
- Logs sem segredos, tokens ou dados sensíveis desnecessários.

## LGPD

- Base legal e consentimento para tratamento de localização.
- Exportação de dados do titular.
- Exclusão ou anonimização mediante solicitação.
- Retenção configurável por plano e finalidade.
- Registro de consentimento e alterações relevantes.
- Contratos e termos para veterinários e empresas que acessam dados de terceiros.

## Proteção contra ataques comuns

- Rate limit em login, API pública e ingestão IoT.
- Validação rigorosa de payloads.
- Proteção contra SQL injection por ORM e queries parametrizadas.
- CORS restrito.
- CSRF para rotas web quando aplicável.
- Headers de segurança via Nginx e aplicação.
- Sanitização de uploads e varredura de arquivos.
- Auditoria para ações administrativas, compartilhamentos e comandos OTA.

## Auditoria

Devem ser auditados:

- Login e logout relevantes.
- Alterações de permissões.
- Criação e remoção de compartilhamentos.
- Ativação do modo perdido.
- Comandos OTA.
- Bloqueio de dispositivo.
- Exportação e exclusão de dados.
