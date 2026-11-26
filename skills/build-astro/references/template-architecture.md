# Escolha da base e arquitetura

## Definir a base

- Em uma adaptação, use o projeto Astro existente no destino pedido. Em monorepos, selecione o pacote que atende à rota ou seção solicitada. Preserve o gerenciador, o lockfile e as alterações já presentes.
- Para um destino novo, localize o [starter Astro CMS empacotado](../assets/astro-cms-starter/) relativo à pasta da skill instalada. Leia a [referência da base Astro CMS](astro-cms-template.md). Copie o conteúdo do starter para uma pasta vazia no workspace, incluindo `.gitignore` e `package-lock.json`. Confirme que origem e destino são distintos e aplique as mudanças no destino. O fluxo de criação usa somente os arquivos da própria skill como fonte da base.
- Instale as dependências no destino com o gerenciador e o lockfile fornecidos. A base pode precisar do registro de pacotes e do provedor de fontes durante a preparação. O painel CMS só precisa de um repositório editorial quando for configurado para publicar conteúdo. A criação e o build local independem dessa conexão.
- Se o starter estiver ausente na instalação, informe que o pacote está incompleto e indique a reinstalação com a pasta `assets/` incluída. Para um site criado explicitamente sem a base, siga as convenções Astro da skill para preparar uma estrutura mínima.
- Antes de copiar, confira se o destino está vazio, inclusive quanto a arquivos ocultos. Em workspace ocupado, escolha uma pasta que não entre nos globs de outros apps, workspaces ou pipelines. Em caso de colisão, use outro nome disponível se o caminho não foi especificado. Se o caminho explícito estiver ocupado ou não houver pasta isolada, preserve os arquivos e resolva apenas o destino antes de escrever.

## Mapear o que preservar

- Localize layouts como `BaseLayout` e `BaseHead`, componentes, CMS, Content Collections, busca, filtros, paginação, rotas e slugs, links, SEO, assets, integrações e modo de renderização relevantes. Verifique consumidores antes de alterar props, schemas, URLs ou contratos públicos.
- Reutilize o que já atende. Reestilize ou componha quando o comportamento permanecer igual. Use uma camada de adaptação pequena quando o design exigir outra apresentação. Crie um componente quando a base não tiver equivalente adequado. Preserve o CSS e a estrutura de pastas existentes quando isso reduzir migração sem prejudicar o resultado.
- Preserve comportamentos funcionais que o frame omitir, como filtros, mensagens de erro ou navegação por teclado. Resolva conflitos de contraste e semântica com a menor adaptação visual necessária. Quando o design exigir funcionalidade sem backend ou dados disponíveis, implemente somente os estados de apresentação acordados e identifique a parte que falta.
- Preserve adapters, endpoints, consultas, autenticação, analytics, deploy e renderização. Trate mudanças nessas áreas como parte do trabalho apenas se forem solicitadas. Registre a dependência de produto ou backend quando ela impedir completar uma parte da implementação.
