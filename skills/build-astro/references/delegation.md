# Divisão do trabalho

Trabalhe sem subagentes para um ajuste localizado, quando as etapas forem sequenciais ou quando os subagentes não estiverem disponíveis. Delegue quando houver frentes que possam avançar sem disputar arquivos ou quando uma revisão independente puder detectar regressões relevantes. Selecione apenas as frentes necessárias.

## Antes de dividir

- O agente principal consulta o Figma, reaproveita as leituras e projeta a composição compartilhada. Registre o mapa mínimo de rotas, seções, componentes reutilizáveis, tokens e contratos de dados. Entregue aos subagentes apenas os recortes, assets autorizados e decisões de que precisem, sem replicar consultas ao MCP.
- Defina um único responsável por arquivo. Mantenha com o agente principal os elementos transversais, como layout, navegação, tokens globais, manifesto, lockfile e configuração Astro. Combine imports, props e formatos de dados antes de paralelizar tarefas que dependam deles. Se o contrato ainda estiver aberto, resolva-o primeiro.

## Escolher modelo, contexto e esforço

Use o modelo geral da sessão para planejamento e implementação de rotina. Reserve um modelo de raciocínio mais capaz e esforço alto para decisões que condicionem várias rotas, componentes compartilhados ou contratos do CMS. O agente principal mantém essas decisões e a integração. Para subagentes, escolha pelas capacidades disponíveis, sem fixar IDs: Sol é um exemplo de modelo geral, Astra de raciocínio mais forte e Terra de análise visual. Se não houver escolha de modelo, use o padrão da sessão.

| Frente | Contexto e escopo | Esforço sugerido |
| --- | --- | --- |
| Inventário, se ainda houver lacunas | Uma área do projeto, mapa parcial e lacunas concretas. Leitura apenas; devolva candidatos a reutilização e riscos de duplicação. | Baixo |
| Implementação por rota ou seção | Recorte do Figma, estados, assets, critérios de aceite e APIs dos componentes compartilhados. Edite somente os arquivos atribuídos. Se precisar mudar um contrato compartilhado, sinalize ao principal antes de criar uma variante. | Médio; baixo só para aplicação mecânica de um padrão definido |
| Conteúdo e CMS, quando aplicável | Campos editáveis, convenções da base, contratos e consumidores. Cuide dos arquivos atribuídos de conteúdo, coleções e configuração editorial. | Médio; alto se houver risco de quebrar slugs ou contratos existentes |
| Revisão visual | Recortes do Figma e capturas do preview no mesmo viewport. Use um modelo com capacidade visual para verificar as diferenças relevantes de hierarquia, proporção e comportamento responsivo. | Médio |
| Revisão estrutural | Diff, contratos afetados e mapa de componentes. Use um modelo geral para verificar duplicação, semântica e regressões, sem reler o Figma. | Médio; alto para regressões difíceis de isolar |

Acione só a revisão que corresponda ao risco; use as duas em paralelo apenas quando ambos os riscos justificarem revisão independente. Revisores trabalham sem editar e entregam apenas achados verificáveis e a menor correção útil. Compartilhe as capturas e os resultados dos checks já executados. Não repita o build por revisor; após correções, rode novamente só as verificações afetadas.

Quando a ferramenta oferecer esses controles, use o esforço indicado e parta sem histórico para tarefas delimitadas (como `fork_turns: "none"` no Codex), enviando destino, arquivos permitidos, referências e critérios de aceite. Inclua histórico apenas quando o recorte não contiver decisões essenciais. Sem ajuste de esforço, use o padrão da ferramenta. Não peça ao desenvolvedor que monte a equipe ou escolha os níveis.

Por exemplo, duas páginas com o mesmo cabeçalho podem ser implementadas em paralelo depois de combinar como vão usar o layout e os componentes comuns. Um ajuste isolado no hero fica com o agente principal.

Peça a cada subagente os arquivos alterados, as verificações realizadas e os bloqueios. O agente principal revisa o diff integrado para detectar variantes duplicadas e incompatibilidades, executa a validação final no projeto e conduz a oferta de Lighthouse conforme a skill.
