# Build Astro

Skill para o Codex implementar designs do Figma em Astro. Use em sites novos ou para adaptar a interface de um projeto existente, reaproveitando seus componentes, rotas e integrações.

## Instalação

Você precisa do Codex com suporte a skills, de acesso ao projeto de destino e de permissão para consultar o design. Para ler o Figma, conecte o plugin oficial no Codex. O MCP remoto também está disponível no plano Starter, com cota de leitura. [Configuração do Figma no Codex](https://help.figma.com/hc/en-us/articles/39888629089175-Codex-and-Figma-Set-up-the-MCP-server)

Abra a [pasta da skill](skills/build-astro) no GitHub, copie a URL da pasta e use-a no Codex:

```text
Use $skill-installer para instalar esta skill:
<URL da pasta skills/build-astro no GitHub>
```

Para instalar manualmente, copie a pasta inteira, com `SKILL.md`, `agents/`, `references/` e `assets/`, para um destes destinos:

| Escopo | Destino |
| --- | --- |
| Todos os seus projetos | `~/.agents/skills/build-astro/` |
| Somente um projeto | `.agents/skills/build-astro/` na raiz do projeto |

## Uso

Para iniciar um site, abra o workspace no Codex e envie:

```text
$build-astro start
```

O Codex pede apenas o link do Figma. Você também pode enviá-lo junto com o comando. A skill usa o design e a base para definir as páginas, os componentes e o conteúdo que vale expor no CMS. Se não houver um destino indicado, o site novo fica em uma pasta dedicada no workspace.

Para adaptar uma página ou seção em um projeto existente, indique diretamente o escopo:

```text
Use $build-astro para implementar a página inicial em Astro.
Figma: <link do frame com node-id>
Destino: neste projeto
```

Para um site novo, a skill usa a [base Astro CMS incluída no pacote](skills/build-astro/assets/astro-cms-starter), com geração estática, Sveltia CMS e SEO. O código, as configurações e o lockfile da base já vêm instalados com a skill. Posts e tags são exemplos que podem ser substituídos por coleções adequadas ao site, como projetos, serviços ou eventos.

## O que esperar

- Sites criados com o template seguem a mesma organização de páginas, layouts, componentes, assets, estilos e coleções. As versões do lockfile, os contratos do CMS e os comandos de validação vêm da base. [Convenções do template](skills/build-astro/references/astro-cms-template.md)
- Em um site novo, as coleções refletem o conteúdo que a equipe precisa editar no painel. Layout e elementos fixos continuam em Astro. Um site sem blog fica sem posts de exemplo e sem suas rotas.
- Em projetos existentes, o design é adaptado à arquitetura atual, incluindo CMS, busca, rotas, componentes, versões e modo de renderização. Migrações entram no escopo quando solicitadas.
- Quando há frentes independentes, o Codex pode distribuir o trabalho entre subagentes. O agente principal define o que será compartilhado entre as páginas, integra as mudanças e verifica o resultado.
- A entrega inclui as verificações realizadas e as limitações encontradas. Se o Figma estiver inacessível, você pode fornecer capturas de frames, tokens e assets para viabilizar a implementação.

### Auditoria Lighthouse

Depois da implementação e das verificações do projeto, o Codex oferece uma auditoria opcional. Ao aceitar, ele abre o preview em uma janela privada via Computer Use. Prioriza o navegador indicado ou habitual, usa o padrão do sistema se a preferência for desconhecida e escolhe outro já instalado se faltar suporte a Lighthouse. O relatório JSON é salvo localmente para análise. Se a interface estiver indisponível, você pode exportar o JSON de um navegador compatível e anexá-lo. [Como exportar um relatório Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

## Contribuições

Use as Issues para relatar problemas ou sugerir melhorias. Inclua um exemplo de pedido, a stack usada e o comportamento observado. Para enviar um pull request, faça um fork, altere a [skill](skills/build-astro/SKILL.md) ou a referência correspondente e descreva como verificou a mudança.

## Licença

[MIT](LICENSE)
