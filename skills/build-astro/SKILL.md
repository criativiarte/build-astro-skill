---
name: build-astro
description: Criar sites Astro com o comando start a partir de um link do Figma ou adaptar páginas e componentes em um projeto Astro existente. Use para converter designs em código Astro acessível e responsivo, com starter estático incluído para sites novos.
---

# Build Astro

Atue como web designer sênior e desenvolvedor frontend. Use o Figma como referência visual. Em projetos existentes, preserve os contratos e o comportamento registrados no código. Siga o escopo do desenvolvedor e ajuste decisões visuais que prejudiquem a acessibilidade.

## Iniciar projeto

- Acione este fluxo com `$build-astro start` ou quando o desenvolvedor pedir um site novo a partir do Figma. Se ainda não houver link nem pedido explícito para usar outro material como design, pergunte “Qual é o link do Figma?” e aguarde. Se o link já estiver no contexto, avance direto.
- Identifique os frames de produção seguindo [Figma e design system](references/figma-design-system.md). Quando houver um frame e um escopo explícitos, mantenha o trabalho nesse recorte. Para o arquivo inteiro, use navegação, nomes e hierarquia para distinguir páginas de componentes, estados e variantes responsivas.
- Derive páginas, hierarquia, componentes, tokens, responsividade e conteúdo editável do Figma. Organize a implementação seguindo a estrutura e as convenções do template efetivamente adotado. Aplique decisões reversíveis e siga para a implementação sem formulário de descoberta ou aprovação adicional do plano. Registre as suposições relevantes na entrega.
- Crie o site no destino vazio indicado ou em uma pasta dedicada e disponível no workspace, com nome derivado do projeto. Use o starter empacotado na skill, conforme [Escolha da base e arquitetura](references/template-architecture.md). A presença de outro app Astro no workspace não o torna destino do `start`. Adapte um projeto existente somente quando o pedido tiver esse escopo.
- Substitua ou retire os dados demonstrativos da base na criação do site. Se faltar um valor de produção, avance com o que o design e o projeto sustentarem. Deixe os recursos que dependem desse valor inativos ou restritos ao preview e registre a pendência, sem inventar dados. Peça ajuda apenas para um bloqueio concreto que o Figma, a base empacotada ou o workspace não resolvam.

## Entender o trabalho

1. Identifique o destino, as rotas e os frames relevantes. Inspecione as instruções do repositório, o estado do Git, a estrutura, o manifesto e o lockfile. Em adaptações, use a base atual do projeto e limite as alterações ao escopo solicitado.
2. Leia [Figma e design system](references/figma-design-system.md) para obter o design pelo MCP remoto oficial ou trabalhar com material autorizado quando houver uma limitação de acesso.
3. Leia [Escolha da base e arquitetura](references/template-architecture.md) para usar a base empacotada em sites novos e preservar os contratos de sites existentes. Leia [Convenções Astro](references/astro-conventions.md) para escolher as APIs compatíveis com a base.
4. Tome decisões reversíveis com base no design e no código, como breakpoints intermediários, estados visuais previsíveis e composição. Avance com o que estiver claro e informe suposições relevantes. Faça uma pergunta focada quando faltar material essencial, houver destinos incompatíveis ou uma decisão de produto, migração ou backend for indispensável.
5. Prepare o [histórico Git](references/template-architecture.md#preparar-o-histórico-git) antes de editar o projeto. Inicialize o Git no destino quando necessário e faça commits locais atômicos em Conventional Commits à medida que concluir cada etapa.

## Implementar

- Mapeie frames, rotas, estados, tokens, componentes e assets antes de montar as páginas. Reaproveite componentes, dados e padrões existentes. Extraia componentes quando houver responsabilidade clara, repetição real ou necessidade de consistência.
- Se houver frentes independentes ou uma mudança transversal que mereça revisão independente, use subagentes quando disponíveis, conforme [Divisão do trabalho](references/delegation.md). Compartilhe o mapa de reutilização antes de dividir a implementação e mantenha a integração e a verificação final com o agente principal.
- Ao criar um site com CMS, faça um inventário editorial dos frames e das rotas antes de implementar. Identifique o que a equipe precisará alterar sem editar código e modele só o que atende a esse fluxo. Siga os critérios de [modelagem de conteúdo](references/astro-cms-template.md#modelar-o-conteúdo-do-site) e, em adaptações, preserve os contratos existentes.
- Com um template ou projeto existente, preserve as versões, as camadas e a organização das pastas. Encaixe páginas, componentes, conteúdo e estilos nos equivalentes da base. Aplique as convenções próprias do [Astro CMS Template](references/astro-cms-template.md) quando ele for usado. Para um site criado explicitamente sem template, use Astro estável, geração estática, Tailwind CSS v4, fontes autohospedadas e `astro-icon` conforme a referência.
- Reutilize o `Container` e a grade da base onde já fizerem parte da arquitetura. Declare variações de largura no ponto de uso quando o design precisar. Um projeto novo Tailwind v4 sem grade definida pode usar `mx-auto w-17/20 max-w-7xl`. Mantenha os componentes de conteúdo independentes da largura da página.
- Comece com HTML semântico, CSS e componentes Astro. Adicione JavaScript somente para o comportamento que precisar dele. Preserve a renderização e integrações existentes. Use View Transitions somente por solicitação explícita.
- Classifique dependências por uso e etapa de instalação. Mantenha ferramentas exclusivas de desenvolvimento e verificação em `devDependencies`.

## Verificar e entregar

1. Siga o [checklist de qualidade](references/quality-checklist.md). Execute as verificações pertinentes e inspecione as rotas afetadas. Corrija problemas introduzidos, repita as verificações relevantes e informe falhas preexistentes ou bloqueios.
2. Com a implementação concluída, informe o estado da entrega. Leia [Auditoria Lighthouse opcional](references/lighthouse-audit.md) e ofereça a auditoria em uma pergunta interativa se houver uma rota apropriada e o desenvolvedor ainda não tiver decidido. Execute somente após aceite explícito, em janela privada no navegador de uso habitual entre os disponíveis e compatíveis. Use Computer Use para operar o painel Lighthouse, exporte e leia o JSON local.
3. Resuma o resultado, as decisões relevantes, as verificações realizadas e as pendências. Quando houver auditoria, inclua as rotas realmente auditadas e os achados do JSON.
