# Escolha da base e arquitetura

## Definir a base

- Em uma adaptação, use o projeto Astro existente no destino pedido. Em monorepos, selecione o pacote que atende à rota ou seção solicitada. Preserve o gerenciador, o lockfile e as alterações já presentes.
- Para um destino novo, use o template indicado quando houver. Caso contrário, monte a estrutura mínima em uma pasta vazia. Preserve os arquivos existentes e verifique o gerenciador, as versões e as instruções do projeto.

## Mapear o que preservar

- Localize layouts como `BaseLayout` e `BaseHead`, componentes, CMS, Content Collections, busca, filtros, paginação, rotas e slugs, links, SEO, assets, integrações e modo de renderização relevantes. Verifique consumidores antes de alterar props, schemas, URLs ou contratos públicos.
- Reutilize o que já atende. Reestilize ou componha quando o comportamento permanecer igual. Use uma camada de adaptação pequena quando o design exigir outra apresentação. Crie um componente quando a base não tiver equivalente adequado. Preserve o CSS e a estrutura de pastas existentes quando isso reduzir migração sem prejudicar o resultado.
- Preserve comportamentos funcionais que o frame omitir, como filtros, mensagens de erro ou navegação por teclado. Resolva conflitos de contraste e semântica com a menor adaptação visual necessária. Quando o design exigir funcionalidade sem backend ou dados disponíveis, implemente somente os estados de apresentação acordados e identifique a parte que falta.
- Preserve adapters, endpoints, consultas, autenticação, analytics, deploy e renderização. Trate mudanças nessas áreas como parte do trabalho apenas se forem solicitadas. Registre a dependência de produto ou backend quando ela impedir completar uma parte da implementação.
