---
name: build-astro
description: Criar ou adaptar sites Astro a partir de designs do Figma. Use para implementar páginas e componentes acessíveis e responsivos, com starter estático incluído para sites novos.
---

# Build Astro

Atue como web designer sênior e desenvolvedor frontend. Use o Figma como referência visual. Em projetos existentes, preserve os contratos e o comportamento registrados no código. Siga o escopo do desenvolvedor e ajuste decisões visuais que prejudiquem a acessibilidade.

## Entender o trabalho

1. Identifique o destino, as rotas e os frames relevantes. Inspecione as instruções do repositório, o estado do Git, a estrutura, o manifesto e o lockfile. Em adaptações, use a base atual do projeto e limite as alterações ao escopo solicitado.
2. Leia [Figma e design system](references/figma-design-system.md) para obter o design pelo MCP remoto oficial ou trabalhar com material autorizado quando houver uma limitação de acesso.
3. Leia [Escolha da base e arquitetura](references/template-architecture.md) para usar a base empacotada em sites novos e preservar os contratos de sites existentes. Leia [Convenções Astro](references/astro-conventions.md) para escolher as APIs compatíveis com a base.
4. Tome decisões reversíveis com base no design e no código, como breakpoints intermediários, estados visuais previsíveis e composição. Avance com o que estiver claro e informe suposições relevantes. Faça uma pergunta focada quando faltar material essencial, houver destinos incompatíveis ou uma decisão de produto, migração ou backend for indispensável.

## Implementar

- Mapeie frames, rotas, estados, tokens, componentes e assets antes de montar as páginas. Reaproveite componentes, dados e padrões existentes. Extraia componentes quando houver responsabilidade clara, repetição real ou necessidade de consistência.
- Ao criar um site com CMS, identifique o que a equipe precisará editar com autonomia. Modele apenas as coleções que atendam a essa rotina e adapte o conteúdo de exemplo ao formato do site. Siga a [referência da base Astro CMS](references/astro-cms-template.md) quando usar o template padrão.
- Com um template ou projeto existente, preserve as versões, as camadas e a organização das pastas. Encaixe páginas, componentes, conteúdo e estilos nos equivalentes da base. Aplique as convenções próprias do [Astro CMS Template](references/astro-cms-template.md) quando ele for usado. Para um site criado explicitamente sem template, use Astro estável, geração estática, Tailwind CSS v4, fontes autohospedadas e `astro-icon` conforme a referência.
- Reutilize o `Container` e a grade da base onde já fizerem parte da arquitetura. Declare variações de largura no ponto de uso quando o design precisar. Um projeto novo Tailwind v4 sem grade definida pode usar `mx-auto w-17/20 max-w-7xl`. Mantenha os componentes de conteúdo independentes da largura da página.
- Comece com HTML semântico, CSS e componentes Astro. Adicione JavaScript somente para o comportamento que precisar dele. Preserve a renderização e integrações existentes. Use View Transitions somente por solicitação explícita.
- Classifique dependências por uso e etapa de instalação. Mantenha ferramentas exclusivas de desenvolvimento e verificação em `devDependencies`.

## Verificar e entregar

1. Siga o [checklist de qualidade](references/quality-checklist.md). Execute as verificações pertinentes e inspecione as rotas afetadas. Corrija problemas introduzidos, repita as verificações relevantes e informe falhas preexistentes ou bloqueios.
2. Com a implementação concluída, informe o estado da entrega. Leia [Auditoria Lighthouse opcional](references/lighthouse-audit.md) e ofereça a auditoria em uma pergunta interativa se houver uma rota apropriada e o desenvolvedor ainda não tiver decidido. Execute somente após aceite explícito, em janela privada no navegador de uso habitual entre os disponíveis e compatíveis. Use Computer Use para operar o painel Lighthouse, exporte e leia o JSON local.
3. Resuma o resultado, as decisões relevantes, as verificações realizadas e as pendências. Quando houver auditoria, inclua as rotas realmente auditadas e os achados do JSON.
