# Roadmap de Planejamento e Execução (PLAN.md)

**Projeto:** Landing Page de Alta Conversão - Filipe Sales Perfumes (Atlântica Natural)  
**Metodologia:** Spec-Driven Development (SDD) & Governança Contínua  
**Versão:** 1.0.0  
**Data da Última Atualização:** 19/09/2026  

---

## 🧭 Visão Estratégica do Plano

Este documento acompanha a evolução do produto desde a concepção de requisitos até a homologação final, servindo de alinhamento contínuo entre o **Product Owner / Tech Lead (ZweiSpy)** e o **Dev / Arquiteto / Governança (Antigravity)**.

---

## 📊 Matriz de Fases & Status de Execução

| Fase | Escopo Principal | Status | Responsável |
|---|---|:---:|---|
| **Fase 1** | Diagnóstico arquitetural, Governança ([AGENTS.md](AGENTS.md)) e Especificação ([SDD.md](SDD.md)) | **CONCLUÍDO** | Antigravity / PO |
| **Fase 2** | Configuração do Git, criação de repositório remoto e padronização semântica de assets | **CONCLUÍDO** | Antigravity |
| **Fase 3** | Integração dos dados homologados (WhatsApp oficial, Instagram e foto executiva Opção A) | **CONCLUÍDO** | Antigravity |
| **Fase 4** | Execução de testes cruzados de ponta a ponta e homologação formal pelo PO | **EM ANDAMENTO** | PO (ZweiSpy) |
| **Fase 5** | Otimizações futuras: Meta Tags OpenGraph (preview no Whats), conversão WebP e Analytics | **BACKLOG** | Antigravity / PO |

---

## 📝 Detalhamento das Entregas por Fase

### ✅ Fase 1: Diagnóstico, Governança & Especificação (Concluída)
- [x] Leitura e auditoria completa de `landing_page_filipe_sales_perfumes.html`.
- [x] Levantamento de todos os 13 pontos de contato de conversão via WhatsApp.
- [x] Elaboração do documento oficial de Governança ([AGENTS.md](AGENTS.md)) com Matriz RACI e regras estritas de não duplicação e aprovação prévia.
- [x] Redação do Documento de Design de Software ([SDD.md](SDD.md)).
- [x] Alinhamento das 3 perguntas abertas de requisitos com o PO (WhatsApp, Instagram e enquadramento da foto).

### ✅ Fase 2: Versionamento & Organização de Assets (Concluída)
- [x] Inicialização do repositório Git na branch `main`.
- [x] Configuração do remoto `origin` para `https://github.com/ZweiSpy/filipesales.perfumes.git`.
- [x] Criação do arquivo de exclusão `.gitignore`.
- [x] Padronização semântica do asset de estúdio: `assets/WhatsApp Image...jpeg` copiado para `assets/filipe-sales-consultor.jpeg`.

### ✅ Fase 3: Implementação de Código & Dados Reais (Concluída)
- [x] Atualização da constante `DEFAULT_PHONE` no JavaScript para `"5521975956187"`.
- [x] Criação de rotina de migração inteligente no `localStorage` para descartar qualquer número de teste prévio.
- [x] Atualização do modal de configuração de telefone com exemplos reais.
- [x] Integração do perfil oficial do Instagram: `https://www.instagram.com/filipesales.perfumes/#` com handle `@filipesales.perfumes`.
- [x] Substituição do avatar genérico na seção *"Sobre o Filipe"* pelo retrato executivo de estúdio com proporção harmoniosa `aspect-[4/5]`, bordas arredondadas e indicador ativo `Online no WhatsApp`.

### 🔄 Fase 4: Bateria de Testes & Homologação pelo PO (Em Andamento)
- [ ] Validação de cada um dos 13 gatilhos do WhatsApp no navegador.
- [ ] Teste de clique nos botões de 100ml vs 15ml em todos os cards (*La Belle, Amore, Good Woman, Fortune, Imortal, Indomável*).
- [ ] Teste do link do Instagram abrindo em nova aba com segurança (`noopener noreferrer`).
- [ ] Teste de responsividade em resoluções mobile (360px a 414px) e desktop (1080p).
- [ ] Aceite formal pelo PO / Tester.

### 🔮 Fase 5: Backlog Priorizado para Próximos Ciclos
- [ ] **Meta Tags OpenGraph & Twitter Cards:** Configurar título, descrição e thumbnail para que, ao compartilhar o link no WhatsApp ou Instagram, apareça o card de visualização elegante com a foto do Filipe.
- [ ] **Compressão & WebP:** Otimizar a imagem `assets/filipe-sales-consultor.jpeg` com versão WebP e fallback JPEG para redução de tráfego de dados.
- [ ] **Telemetria de Eventos:** Inserir suporte opcional a Pixel da Meta / Google Tag Manager via data-attributes nos botões.

---

## 📌 Log de Decisões Técnicas Homologadas

* **Decisão #001 (19/09/2026):** Rejeição de arquitetura SPA/framework pesado em favor de Vanilla HTML5 + Tailwind utilitário para garantir pontuação máxima no Google PageSpeed (FCP < 1.2s).
* **Decisão #002 (19/09/2026):** Não inclusão de checkout monetário ou tabela aberta de preços na landing page; foco 100% em consultoria olfativa via WhatsApp.
* **Decisão #003 (19/09/2026):** Adoção da **Opção A** para o posicionamento da foto executiva real (Seção *"Sobre o Filipe"*), preservando a pureza geométrica do Hero.
