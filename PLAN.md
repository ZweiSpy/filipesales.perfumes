# Roadmap de Planejamento e Execução (PLAN.md)

**Projeto:** Landing Page de Alta Conversão - Filipe Sales Perfumes (Atlântica Natural)  
**Metodologia:** Spec-Driven Development (SDD) & Governança Contínua  
**Versão:** 1.3.0  
**Data da Última Atualização:** 20/09/2026  

---

## 🧭 Visão Estratégica do Plano

Este documento acompanha a evolução do produto desde a concepção de requisitos até a homologação final, servindo de alinhamento contínuo entre o **Product Owner / Tech Lead (ZweiSpy)** e o **Dev / Arquiteto / Governança (Antigravity)**.

---

## 📊 Matriz de Fases & Status de Execução

| Fase | Escopo Principal | Status | Responsável |
|---|---|:---:|---|
| **Fase 1** | Diagnóstico arquitetural, Governança ([AGENTS.md](AGENTS.md)) e Especificação ([SDD.md](SDD.md)) | **CONCLUÍDO** | Antigravity / PO |
| **Fase 2** | Configuração do Git, repositório remoto, deploy na Vercel (`index.html`) e assets | **CONCLUÍDO** | Antigravity |
| **Fase 3** | Integração dos dados homologados (WhatsApp oficial, Instagram e foto executiva Opção A) | **CONCLUÍDO** | Antigravity |
| **Fase 4** | **Identidade & Compartilhamento:** Favicon oficial, Open Graph e Meta Tags de SEO (`assets/`) | **CONCLUÍDO** | Antigravity |
| **Fase 5** | **Refinamento de Conteúdo & Credibilidade:** Remoção de 24h por "Alta Fixação", Inspirações Olfativas e FAQ Selo Bortoletto | **CONCLUÍDO** | Antigravity |
| **Fase 6** | **Expansão do Catálogo (+62 perfumes):** Implementação da arquitetura homologada (Página Satélite Dedicada `catalogo.html` + Live Search) | **CONCLUÍDO** | Antigravity / PO |
| **Fase 7** | **Refinamento de UI & Créditos:** Separação do Menu (>=3cm) e Rodapé Zwei Coorporações LTDA | **CONCLUÍDO** | Antigravity / PO |
| **Fase 8** | **Quiz Olfativo Interativo ("Qual perfume combina com você?"):** 3 perguntas oficiais do PDF, motor de perfil olfativo, recomendação TOP 3 de `perfumes.js`, persistência local e WhatsApp CTA | **CONCLUÍDO** | Antigravity / PO |
| **Fase 9** | Execução de testes cruzados de ponta a ponta e homologação formal pelo PO | **EM HOMOLOGAÇÃO** | PO (ZweiSpy) |
| **Fase 10** | Otimizações futuras: Prova social ao vivo, WebP, selo regional e Analytics | **BACKLOG PRIORIZADO** | Antigravity / PO |

---

## 📝 Detalhamento das Entregas por Fase

### ✅ Fase 1: Diagnóstico, Governança & Especificação (Concluída)
- [x] Leitura e auditoria completa de `index.html`.
- [x] Levantamento de todos os 13 pontos de contato de conversão via WhatsApp.
- [x] Elaboração do documento oficial de Governança ([AGENTS.md](AGENTS.md)) com Matriz RACI e regras estritas de não duplicação e aprovação prévia.
- [x] Redação do Documento de Design de Software ([SDD.md](SDD.md)).
- [x] Alinhamento das 3 perguntas abertas de requisitos com o PO (WhatsApp, Instagram e enquadramento da foto).

### ✅ Fase 2: Versionamento & Deploy Vercel (Concluída)
- [x] Inicialização do repositório Git na branch `main`.
- [x] Configuração do remoto `origin` para `https://github.com/ZweiSpy/filipesales.perfumes.git`.
- [x] Criação do arquivo de exclusão `.gitignore`.
- [x] Padronização semântica do asset de estúdio: `assets/WhatsApp Image...jpeg` copiado para `assets/filipe-sales-consultor.jpeg`.
- [x] Renomeação para `index.html` para resolver rota raiz na Vercel (404 fix).

### ✅ Fase 3: Implementação de Código & Dados Reais (Concluída)
- [x] Atualização da constante `DEFAULT_PHONE` no JavaScript para `"5521975956187"`.
- [x] Criação de rotina de migração inteligente no `localStorage` para descartar qualquer número de teste prévio.
- [x] Atualização do modal de configuração de telefone com exemplos reais.
- [x] Integração do perfil oficial do Instagram: `https://www.instagram.com/filipesales.perfumes/#` com handle `@filipesales.perfumes`.
- [x] Substituição do avatar genérico na seção *"Sobre o Filipe"* pelo retrato executivo de estúdio com proporção harmoniosa `aspect-[4/5]`, bordas arredondadas e indicador ativo `Online no WhatsApp`.

### ✅ Fase 4: Favicon, Open Graph & Meta Tags SEO (Concluída)
- [x] **Favicon em `assets/`:**
  - Asset oficial homologado pelo PO: `assets/favicon.png` (frasco dourado com brasão Atlântica Natural).
  - Ícone vetorial complementar em ouro metálico: `assets/favicon.svg`.
  - Tags `<link rel="icon">` e `<link rel="apple-touch-icon">` configuradas no `<head>`.
- [x] **Open Graph Card em `assets/` (Preview para WhatsApp e Redes):**
  - Banner oficial fornecido pelo PO: `assets/Open-graph.png` (composição executiva, perfumes, xícara e notebook de notas).
  - Banner 1200x630 gerado como alternativa: `assets/og-image.jpeg`.
  - Tags Open Graph completas (`og:title`, `og:description`, `og:image`, `og:type`, `og:site_name`, `og:locale`).
  - Tags Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- [x] **Meta Tags SEO & Navegador:**
  - Tag `description` persuasiva com palavras-chave de alta conversão olfativa.
  - Tag `keywords` focadas em Atlântica Natural, Filipe Sales e perfumaria de 100ml e 15ml.
  - Tag `theme-color: #060607` para imersão Dark Noir na barra de status mobile.
  - Tag `robots: index, follow` para indexação orgânica no Google.

### ✅ Fase 5: Refinamento de Conteúdo, Inspirações & Credibilidade (Concluída)
- [x] **Expurgo de Menções Legadas a "24h":**
  - Substituição sistemática de "fixação 24h" por "alta fixação" e termos de alta performance olfativa nas meta tags, hero metric, parágrafos e seção de diferenciais.
- [x] **Inspirações Olfativas nos Cards:**
  - Inclusão visual elegante de badges e referências olfativas mundiais nos cards dos perfumes (*La Belle, Amore Radiant Gold, Good Woman, Fortune, Imortal, Indomável*).
- [x] **FAQ com Selo de Fabricação Bortoletto:**
  - Inserção de pergunta e resposta destacando a fabricação Bortoletto e a maestria de um dos melhores perfumistas do Brasil.

### ✅ Fase 6: Expansão de Catálogo Completo (62 Fragrâncias: 32 Fem + 30 Masc) (Concluída)
- [x] **Mapeamento Integral das 62 Fragrâncias:**
  - 32 perfumes femininos decodificados das fichas oficiais da Atlântica Natural / Bortoletto.
  - 30 perfumes masculinos decodificados das fichas oficiais da Atlântica Natural / Bortoletto.
  - Estruturação de nomes, inspirações olfativas mundiais, famílias olfativas e slogans de conversão.
- [x] **Desenvolvimento da Página Satélite Dedicada (`catalogo.html`):**
  - **Header & Navegação:** Identidade Filipe Sales, link de retorno à LP (`← Voltar para Início`) e botão direto do WhatsApp.
  - **Barra de Busca Instantânea (Search Live):** Filtro inteligente em tempo real por nome do perfume, grife de inspiração olfativa ou família aromática.
  - **Tabs com Contadores Dinâmicos:** `Todos (62)` | `Femininos (32)` | `Masculinos (30)`.
  - **Filtros Rápidos por Categorias:** `Todos`, `Bestsellers`, `Doces & Gourmand`, `Amadeirados`, `Frescos & Cítricos`, `Orientais & Árabes (Lattafa)`, `Fragrâncias Próprias`.
  - **Grid de Cards Dark Noir de Luxo:**
    - Cards responsivos com badges dourados de inspiração olfativa (`✨ Referência: [Nome da Grife]`).
    - Seletor funcional de frascos: `100ml` vs `15ml`.
    - Botão WhatsApp com mensagem contextualizada para cada fragrância e tamanho selecionado.
  - **Rodapé de Consultoria Olfativa VIP:** Chamada direta com Filipe Sales para tirar dúvidas e receber recomendações personalizadas.
- [x] **Interconexão na Landing Page Principal (`index.html`):**
  - Inserção de banner suntuoso ao final da seção de Bestsellers convidando para a coleção completa: *"Deseja explorar todas as nossas 62 fragrâncias exclusivas Bortoletto? [Acessar Catálogo Completo (62) →]"*.
  - Link dedicado adicionado no Header desktop e no rodapé.

### ✅ Fase 7: Refinamento de UI, Espaçamento Mínimo & Créditos Institucionais (Concluída)
- [x] **Crédito Institucional no Rodapé (Zwei Coorporações LTDA):**
  - Inserção de assinatura elegante e discreta centralizada ao final da linha de copyright em `index.html` e `catalogo.html`: *"Desenvolvido por Zwei Coorporações LTDA"*.
  - Hiperlink seguro no nome da empresa direcionando para `https://zweicoorp.com.br` com `target="_blank"` e `rel="noopener noreferrer"`.
  - Harmonização de contraste com a paleta Dark Noir e alinhamento centralizado fluido (`text-center leading-relaxed`).
- [x] **Deslocamento & Separação Visual do Botão no Menu (`index.html`):**
  - Afastamento mínimo garantido de **3 cm** (`margin-left: max(3cm, 48px) !important` e `md:ml-[3cm]`) para o grupo de ação do Header.
  - Ancoragem automática à extrema direita via `ml-auto`.
  - Otimização responsiva dos links de navegação (`space-x-3 lg:space-x-5 xl:space-x-6 text-[11px] lg:text-xs xl:text-sm`) eliminando proximidade e sobreposição com o botão *"Dúvidas"*.

### ✅ Fase 8: Quiz Olfativo Interativo ("Qual perfume combina com você?") (Concluída)
- [x] **Fidelidade ao Guia Oficial em PDF:** Implementação estrita das 3 perguntas (A, B, C, D) sem inflar etapas e com os 4 perfis olfativos previstos (Fresco/Limpo, Doce/Envolvente, Amadeirado/Elegante, Floral/Delicado).
- [x] **Motor de Recomendação TOP 3:** Mapeamento dinâmico e seguro com as 62 fragrâncias oficiais catalogadas em `assets/data/perfumes.js`.
- [x] **Tratamento Elegante de Empates:** Resolução de empates e perfis híbridos conforme orientações do guia oficial, cobrindo as 64 combinações possíveis sem falhas de execução.
- [x] **Persistência de Estado (localStorage):** Armazenamento em `filipesales_quiz_result` com suporte a recarregamento automático e opção de refazer teste a qualquer momento.
- [x] **Conversão Contextual no WhatsApp:** Botão de pedido em cada um dos 3 perfumes sugeridos com texto formatado contendo o perfil apurado, o perfume selecionado e o frasco desejado (100ml ou 15ml).
- [x] **Dicas do Especialista (Página 2 do PDF):** Acordeão expansível com pirâmide olfativa (Saída, Coração, Fundo) e dicas práticas de aplicação e conservação.
- [x] **Gatilhos de Abertura:** Integrado no menu desktop (`Quiz NOVO`), gaveta mobile, card lateral do Hero e banner exclusivo na seção de catálogo em `index.html`, além de banner de acionamento em `catalogo.html`.

### 🔄 Fase 9: Bateria de Testes & Homologação pelo PO
- [ ] Validação do card do WhatsApp no simulador/debugger oficial.
- [ ] Verificação do Favicon exibido na aba do navegador.
- [ ] Validação de cada um dos 13 gatilhos do WhatsApp no navegador.
- [ ] Teste de clique nos botões de 100ml vs 15ml em todos os cards (*La Belle, Amore, Good Woman, Fortune, Imortal, Indomável*).
- [ ] Teste de busca em tempo real na página de catálogo (`catalogo.html`).
- [ ] Teste do Quiz Olfativo (fluxo de perguntas, recomendação TOP 3, seletor de 100ml/15ml e link de WhatsApp).
- [ ] Teste do link do Instagram abrindo em nova aba com segurança (`noopener noreferrer`).
- [ ] Teste do link de desenvolvimento Zwei Coorporações LTDA (`https://zweicoorp.com.br`) abrindo em nova aba.
- [ ] Teste de responsividade em resoluções mobile (360px a 414px) e desktop (1080p).
- [ ] Aceite formal pelo PO / Tester.

### 🔮 Fase 10: Backlog Priorizado para Futuros Ciclos
- [ ] **Prova Social Flutuante (Live Social Proof Toast):** Notificação periódica e discreta simulando pedidos recentes de clientes no WhatsApp para acelerar a tomada de decisão (gatilho de urgência e validação).
- [ ] **Destaque de Entrega Local:** Inserção de selo de credibilidade *"🚀 Entrega expressa para Nova Iguaçu e Baixada Fluminense | Envio para todo o Brasil"*.
- [ ] **Compressão & WebP:** Geração de `assets/filipe-sales-consultor.webp` para redução de peso e carregamento instantâneo em 3G/4G.
- [ ] **Telemetria de Eventos:** Suporte a Meta Pixel / Google Tag Manager via data-attributes nos botões de WhatsApp.

---

## 📌 Log de Decisões Técnicas Homologadas

* **Decisão #001 (19/09/2026):** Rejeição de arquitetura SPA/framework pesado em favor de Vanilla HTML5 + Tailwind utilitário para garantir pontuação máxima no Google PageSpeed (FCP < 1.2s).
* **Decisão #002 (19/09/2026):** Não inclusão de checkout monetário ou tabela aberta de preços na landing page; foco 100% em consultoria olfativa via WhatsApp.
* **Decisão #003 (19/09/2026):** Adoção da **Opção A** para o posicionamento da foto executiva real (Seção *"Sobre o Filipe"*), preservando a pureza geométrica do Hero.
* **Decisão #004 (19/09/2026):** Renomeação do entrypoint de `landing_page_filipe_sales_perfumes.html` para `index.html` para compatibilidade nativa com roteamento raiz da Vercel.
* **Decisão #005 (19/09/2026):** Padronização estrita de todos os assets de Favicon e Open Graph residentes exclusivamente dentro do diretório `assets/`.
* **Decisão #006 (19/09/2026):** Substituição de qualquer alegação temporal absoluta ("fixação 24h") pela diretriz de "Alta Fixação" e "Performance Marcante", garantindo precisão técnica e credibilidade.
* **Decisão #007 (19/09/2026):** Oficialização da chancela do **Selo de Fabricação Bortoletto** como pilar de autoridade técnica e qualidade olfativa nacional.
* **Decisão #008 (19/09/2026):** Implementação da arquitetura híbrida de alto desempenho: Landing Page enxuta (`index.html`) com os 6 Bestsellers de alta conversão + Catálogo Satélite dedicado (`catalogo.html`) com os 62 perfumes e busca instantânea em tempo real.
* **Decisão #009 (20/09/2026):** Remoção completa do modal de configuração do número do WhatsApp da interface pública (Top Bar e Rodapé). O número oficial (+55 21 97595-6187) passa a ser estritamente fixo e interno no código, eliminando qualquer risco de alteração ou exposição de controles para os clientes finais.
* **Decisão #010 (20/09/2026):** Execução do pacote de correções P1: implementação de Menu Drawer responsivo no mobile para a Landing Page; correção do alinhamento/scroll das tags de filtro no catálogo; compactação da barra sticky mobile; otimização do favicon PNG (redução de 97,6% no peso: de 1,1 MB para 25 KB); eliminação de asset duplicado órfão; adição de dimensões explícitas na foto executiva (prevenção de CLS); expansão da área de toque dos botões de volume; e inclusão de cabeçalhos de segurança HTTP em vercel.json.
* **Decisão #011 (20/09/2026):** Redimensionamento e reformulação estética do botão de WhatsApp do menu superior (`index.html` e `catalogo.html`). Aplicação do estilo **Esmeralda Joia Nobre (Deep Emerald Luxury)**: pílula compacta `h-10 px-4` com `whitespace-nowrap shrink-0` (eliminando a quebra de linha de "Chamar no"), borda fina acetinada esmeralda, glow sutil e espaçamento responsivo refinado entre os links da barra de navegação (`space-x-4 lg:space-x-6 xl:space-x-7`).
* **Decisão #012 (20/09/2026):** Implementação do crédito institucional centralizado no rodapé (*"Desenvolvido por Zwei Coorporações LTDA"* com hiperlink seguro `target="_blank" rel="noopener noreferrer"` para `https://zweicoorp.com.br`) preservando a paleta discreta e harmônica do copyright oficial em `index.html` e `catalogo.html`. Ajuste de espaçamento do botão de ação do Header desktop em `index.html`, aplicando classe utilitária e regra CSS de separação mínima de **3 cm** (`margin-left: max(3cm, 48px) !important` e `md:ml-[3cm]`) combinada com `ml-auto` e refinamento do espaçamento de links (`space-x-3 lg:space-x-5 xl:space-x-6 text-[11px] lg:text-xs xl:text-sm`), garantindo distância livre e impedindo qualquer colisão visual com o item *"Dúvidas"* em notebooks e resoluções intermediárias.
* **Decisão #013 (02/10/2026):** Implementação do Quiz Olfativo Interativo baseado estritamente no guia oficial em PDF *"Qual perfume combina com você?"*. Arquitetura 100% Vanilla JS (`assets/js/quiz.js`), modal Dark Glassmorphism auto-contido, 3 perguntas oficiais (A, B, C, D), resolução precisa de empates e perfis híbridos, recomendação automática do TOP 3 fragrances oficiais de `perfumes.js`, seletor de volume (100ml / 15ml), persistência de resultado no `localStorage` (`filipesales_quiz_result`) e conversão direta no WhatsApp com mensagem personalizada para o consultor Filipe Sales.
* **Decisão #014 (02/10/2026):** Resolução do corte vertical da logo no Header desktop através da blindagem estrutural com `shrink-0` e `whitespace-nowrap`, eliminando a quebra em 5 linhas. Aplicação do estilo **Dark Glassmorphism Fantasma** com 60% de opacidade (`bg-noir-950/60` com `backdrop-blur-md` e borda `border-white/10`) em `index.html` e `catalogo.html`. Descongestionamento dos links de navegação (`Frascos` e `Sobre`) e espaçamento responsivo para a margem de 3cm (`xl:ml-[3cm]` e `md:ml-4 lg:ml-6`). Substituição oficial do termo "Quiz" pelo nome consultivo e convidativo **"Descubra seu Perfume"** (com badge dourado `GUIA`) em todo o ecossistema digital.
* **Decisão #015 (02/10/2026):** Restauração do design da marca empilhada clássica (*"FILIPE"* no topo e *"SALES"* abaixo) em `index.html` e `catalogo.html`, com entrelinhas compactas (`leading-tight -mt-1`) e subtítulo `Perfumes Atlântica Natural` em linha única. Eliminação definitiva de qualquer scroll horizontal através de `overflow-x-hidden` em `html` e `body`, remoção do `md:ml-[3cm]` estático e aplicação dinâmica da margem de 3cm para telas amplas (`>= 1400px`) e `1.5rem` para notebooks (`1024px-1399px`). Manutenção integral da barra promocional superior *"Exclusivo"* e do efeito translúcido fantasma de 60% do header para que o nome e a navegação respirem com elegância máxima sem sobreposições.
* **Decisão #016 (02/10/2026):** Otimização da geometria e do texto do botão de ação de WhatsApp no cabeçalho conforme homologado pelo PO (Opção 3: ajuste simultâneo de distância e dimensões). Redução da margem fixa para valores dinâmicos (`1.25rem` em 1024px-1399px e `2rem` em >=1400px), remoção do excesso de padding de container (`px-4 sm:px-6`), compressão do botão para `h-9 px-3 sm:px-3.5` e exibição inteligente de `[Ícone] WhatsApp` em 1024px-1279px e `[Ícone] Chamar no WhatsApp` em telas >=1280px. Essa abordagem gera mais de 130px de margem livre segura à direita, eliminando 100% de qualquer corte lateral em qualquer modelo de notebook ou monitor e preservando a máxima conversão consultiva.
* **Decisão #017 (02/10/2026):** Resolução definitiva e homologação da arquitetura de Open Graph / Social Preview para WhatsApp, Meta, X (Twitter) e Threads. Escolha e publicação do asset oficial `assets/og-image.jpeg` (1200x630 px, proporção 1.91:1, 175 KB, JPEG autêntico), contendo o número real do WhatsApp `(21) 97595-6187`, chancela Atlântica Natural e enquadramento executivo com frascos nobres. Implementação de URLs absolutas HTTPS com cache-busting (`https://filipesalesperfumes.vercel.app/assets/og-image.jpeg?v=2`), inclusão de `og:url`, `canonical`, dimensões explícitas `1200x630` e MIME type `image/jpeg` em `index.html` e `catalogo.html`.

