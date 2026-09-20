# Roadmap de Planejamento e Execução (PLAN.md)

**Projeto:** Landing Page de Alta Conversão - Filipe Sales Perfumes (Atlântica Natural)  
**Metodologia:** Spec-Driven Development (SDD) & Governança Contínua  
**Versão:** 1.1.0  
**Data da Última Atualização:** 19/09/2026  

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
| **Fase 5** | Execução de testes cruzados de ponta a ponta e homologação formal pelo PO | **AGUARDANDO** | PO (ZweiSpy) |
| **Fase 6** | Otimizações futuras: Prova social ao vivo, WebP, selo regional e Analytics | **BACKLOG PRIORIZADO** | Antigravity / PO |

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

### 🔄 Fase 5: Bateria de Testes & Homologação pelo PO
- [ ] Validação do card do WhatsApp no simulador/debugger oficial.
- [ ] Verificação do Favicon exibido na aba do navegador.
- [ ] Validação de cada um dos 13 gatilhos do WhatsApp no navegador.
- [ ] Teste de clique nos botões de 100ml vs 15ml em todos os cards (*La Belle, Amore, Good Woman, Fortune, Imortal, Indomável*).
- [ ] Teste do link do Instagram abrindo em nova aba com segurança (`noopener noreferrer`).
- [ ] Teste de responsividade em resoluções mobile (360px a 414px) e desktop (1080p).
- [ ] Aceite formal pelo PO / Tester.

### 🔮 Fase 6: Backlog Priorizado para Futuros Ciclos
- [ ] **Prova Social Flutuante (Live Social Proof Toast):** Notificação periódica e discreta simulando pedidos recentes de clientes no WhatsApp para acelerar a tomada de decisão (gatilho de urgência e validação).
- [ ] **Destaque de Entrega Local:** Inserção de selo de credibilidade *"🚀 Entrega expressa para Nova Iguaçu e Baixada Fluminense | Envio para todo o Brasil"*.
- [ ] **Compressão & WebP:** Geração de `assets/filipe-sales-consultor.webp` para redução de peso e carregamento instantâneo em 3G/4G.
- [ ] **Telemetria de Eventos:** Suporte a Meta Pixel / Google Tag Manager via data-attributes nos 13 botões de WhatsApp.

---

## 📌 Log de Decisões Técnicas Homologadas

* **Decisão #001 (19/09/2026):** Rejeição de arquitetura SPA/framework pesado em favor de Vanilla HTML5 + Tailwind utilitário para garantir pontuação máxima no Google PageSpeed (FCP < 1.2s).
* **Decisão #002 (19/09/2026):** Não inclusão de checkout monetário ou tabela aberta de preços na landing page; foco 100% em consultoria olfativa via WhatsApp.
* **Decisão #003 (19/09/2026):** Adoção da **Opção A** para o posicionamento da foto executiva real (Seção *"Sobre o Filipe"*), preservando a pureza geométrica do Hero.
* **Decisão #004 (19/09/2026):** Renomeação do entrypoint de `landing_page_filipe_sales_perfumes.html` para `index.html` para compatibilidade nativa com roteamento raiz da Vercel.
* **Decisão #005 (19/09/2026):** Padronização estrita de todos os assets de Favicon e Open Graph residentes exclusivamente dentro do diretório `assets/`.
