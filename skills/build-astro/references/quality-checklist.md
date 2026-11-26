# Checklist de qualidade

## Verificar código e build

- Use os comandos existentes de lint, formatação em modo de verificação, testes e checagem de tipos pertinentes. Antes de uma alteração ampla em projeto existente, execute as verificações relevantes para registrar falhas preexistentes, se for viável.
- Execute checagem de tipos e build de produção separadamente quando o script de build não incluir ambas. Confirme que a infraestrutura tem acesso às dependências necessárias na etapa correta. Revise o diff, o lockfile e os avisos introduzidos.
- Use o build no preview do projeto ou na forma suportada pelo adapter. Confira as URLs reais, incluindo `base`, e que as rotas e os assets afetados carregam corretamente. Em SSR, registre limitações do adapter ou dos dados locais quando impedirem a verificação. Valide ao menos o fluxo de interação principal afetado, com foco em preservar contratos existentes.

## Verificar conteúdo e configuração

- Em sites novos, procure no código, na configuração e na saída gerada valores temporários, venham do starter, do Figma ou da implementação: nome do template, domínio fictício, repositório e branch de exemplo, Lorem Ipsum, contatos e links provisórios, conteúdo e mídia demonstrativos, scripts e IDs de exemplo. Revise também manifesto e lockfile quando registrarem o nome do pacote, favicon, metadados sociais, canonicals, sitemap, robots e arquivos de indexação. Substitua ou remova ocorrências em uso. Preserve exemplos restritos a documentação ou fixtures e textos de ajuda que sejam intencionais.
- Quando houver CMS, inspecione a configuração realmente servida em `/admin/` e confira onde “Ver site” aponta no preview. Confira também os links de entradas que tiverem preview configurado. Se a interface estiver inacessível, verifique a configuração efetiva e informe que o clique não foi testado. Não apresente a saída como pronta para publicar se ainda depender de origem local ou de dados ou integrações indispensáveis que estejam pendentes.
- Compare o resultado com o inventário editorial. Procure valores que deveriam vir do CMS, mas ficaram fixos ou duplicados nos componentes. Com dados locais representativos, confirme que uma alteração na fonte aparece em todos os consumidores previstos e que a configuração do CMS e o schema do Astro aceitam os mesmos dados. Não publique entradas de teste.

## Verificar design e acessibilidade

- Compare a implementação renderizada com os frames no mesmo viewport. Confira a largura estreita e uma intermediária quando o layout variar entre breakpoints. Verifique overflow, textos longos, proporção e posição dos assets, listas e estados alterados. Limite a revisão às rotas solicitadas e aos consumidores dos componentes compartilhados que foram alterados.
- Navegue por teclado nos fluxos afetados. Confira se o foco permanece visível e livre de sobreposição por elementos fixos. Verifique ordem de navegação, nomes acessíveis, contraste, hierarquia de títulos, landmarks, labels e texto alternativo. Confira movimento reduzido quando houver animação. Em formulários, exercite validação e mensagens de erro com os recursos já disponíveis no projeto. Verifique semântica e conteúdo antes de oferecer Lighthouse.
- Confira os metadados da rota, links internos e canonical quando aplicáveis. Inspecione o carregamento de imagens e fontes e a quantidade de JavaScript no cliente nas rotas alteradas.
- Corrija regressões introduzidas pela implementação e repita as verificações pertinentes. Registre separadamente resultados aprovados, falhas preexistentes e verificações não executadas, com o motivo. Siga o fluxo opcional de auditoria indicado em `SKILL.md` depois desta etapa.
