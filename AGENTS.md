# Diretrizes de Governança e Regras dos Agentes (AGENTS.md)

**Projeto:** Landing Page de Alta Conversão - Filipe Sales Perfumes (Atlântica Natural)  
**Repositório:** [https://github.com/ZweiSpy/filipesales.perfumes.git](https://github.com/ZweiSpy/filipesales.perfumes.git)  
**Versão da Governança:** 1.0.0  
**Data:** 19/09/2026  

---

## 1. Definição de Papéis & Matriz RACI

| Papel | Titular | Responsabilidades |
|---|---|---|
| **Product Owner (PO), Tester & Tech Lead** | **Usuário (ZweiSpy)** | Aprovador final de requisitos, escopo, decisões de design, fornecimento de dados reais e homologação funcional/visual. |
| **Dev, Engenheiro de Software Sênior, Arquiteto & Governança** | **Antigravity (AI)** | Arquitetura técnica, integridade de código, aplicação de governança, implementação, otimização de performance e bateria prévia de testes. |

### Matriz de Responsabilidades Detalhada

| Atividade | PO / Tech Lead | Arquiteto / Dev (Antigravity) |
|---|:---:|:---:|
| Definição de Requisitos e Escopo | **Aprovador (Accountable)** | Consultado / Propositor |
| Fornecimento de Dados Reais (Whats / Insta / Textos) | **Responsável (Responsible)** | Suporte e Validação |
| Arquitetura, Governança e Qualidade de Código | Consultado | **Responsável (Responsible)** |
| Implementação de Código e Assets | Aprovador | **Responsável (Responsible)** |
| Homologação e Testes de Aceite | **Responsável (Responsible)** | Validador prévio |
| Gestão de Commits e Versionamento Git | Consultado | **Responsável (Responsible)** |

---

## 2. Limites de Escopo do Produto

### O que o Produto É:
1. **Landing Page Institucional de Alta Conversão:** Focada em atendimento consultivo olfativo personalizado conduzido diretamente pelo consultor credenciado **Filipe Sales**.
2. **Vitrine Exclusiva Atlântica Natural:** Exibição elegante das fragrâncias selecionadas nos formatos **100ml** (imponência e bancada) e **15ml** (pocket e portabilidade diária).
3. **Ultra Performance & Luxo Visual:** Estética imersiva *Dark Noir, Ouro Metálico, Bronze e Esmeralda*, carregamento instantâneo, total responsividade em dispositivos móveis e desktop.

### O que o Produto NÃO É:
1. **NÃO é E-commerce Tradicional com Checkout:** Não possui carrinho de compras, gateway de pagamento ou exibição aberta de valores monetários. Toda negociação e fechamento de pedidos ocorrem 100% via WhatsApp.
2. **NÃO vende produtos não homologados:** Foco exclusivo nas fragrâncias listadas (*La Belle, Amore Radiant Gold, Good Woman, Fortune, Imortal, Indomável*) com gatilho genérico para consulta de outros itens do catálogo oficial.
3. **NÃO utiliza frameworks pesados:** Mantém arquitetura Vanilla (HTML5 semântico, Tailwind CSS utilitário, CSS modular para efeitos e Vanilla JS puro), garantindo First Contentful Paint (FCP) ultraveloz.

---

## 3. Regras de Ouro de Governança

1. **Ordem de Execução Estrita:** Nenhuma alteração em código ou exclusão estrutural pode ser executada sem a aprovação explícita e prévia do PO / Tech Lead.
2. **Princípio da Não Duplicação:** Não duplicar informações, variáveis, componentes visuais ou blocos de script.
3. **Preservação de Funcionalidades Existentes:** Manter íntegras todas as seções aprovadas, incluindo filtros por abas, modal dinâmico de telefone, seletores de volume e acordeão de FAQ.
4. **Padronização de Assets:** Todo asset de mídia (imagens, logotipos, ícones) deve residir no diretório `assets/`, com nomenclatura semântica em letras minúsculas separadas por hífens (ex: `assets/filipe-sales-consultor.jpeg`).
5. **Otimização e LCP:** Nenhuma imagem deve ser inserida sem verificação prévia de proporção, atributos `alt` descritivos e sem gerar atraso de renderização crítica (Largest Contentful Paint).
6. **Versionamento e Commits Semânticos:** Todo commit no Git deve seguir o padrão convencional (ex: `feat:`, `fix:`, `docs:`, `chore:`, `style:`) e ser reportado ao Tech Lead.

---

## 4. Dados Oficiais Homologados (PO / Tech Lead)

Os dados abaixo foram fornecidos e confirmados pelo Product Owner para integração na aplicação:

* **WhatsApp Oficial:** `+55 21 97595-6187`
  * Número limpo para API `wa.me`: `5521975956187`
  * Formato de exibição: `(21) 97595-6187`
* **Instagram Oficial:** `@filipesales.perfumes`
  * Link direto: [https://www.instagram.com/filipesales.perfumes/#](https://www.instagram.com/filipesales.perfumes/#)
* **Posicionamento da Foto Real:** **Opção A**
  * Local: Seção *"Sobre o Filipe"*, substituindo o avatar representativo pelo retrato executivo oficial do consultor (`assets/filipe-sales-consultor.jpeg`), preservando a moldura com brilho dourado e o indicador de status online.

---

## 5. Protocolo de Testes e Bateria de Validação

Antes de cada entrega de código ao PO, o Engenheiro deve validar os seguintes pontos:

### 5.1 Pontos de Contato do WhatsApp (13 Gatilhos Mapeados)
- [ ] 1. Botão do Top Bar de urgência (ajuste dinâmico)
- [ ] 2. Botão do Header (`Chamar no WhatsApp`)
- [ ] 3. Botão principal do Hero (`Escolher Minha Fragrância`)
- [ ] 4. Link contextual do Teste Olfativo no card lateral do Hero
- [ ] 5. Card La Belle (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 6. Card Amore Radiant Gold (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 7. Card Good Woman (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 8. Card Fortune (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 9. Card Imortal (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 10. Card Indomável (mensagem com frasco selecionado: 100ml ou 15ml)
- [ ] 11. Banner de Consulta de Outras Fragrâncias
- [ ] 12. Botão da seção *"Sobre o Filipe"* (`Falar Diretamente com Filipe Sales`)
- [ ] 13. Botão do Banner Final Agressivo (`Chamar Filipe no WhatsApp Agora`)
- [ ] 14. Botão Flutuante persistente no canto inferior direito

### 5.2 Interatividade & Responsividade
- [ ] **Instagram Oficial:** Abre o perfil real em nova guia com `rel="noopener noreferrer"`.
- [ ] **Modal de WhatsApp:** Engrenagem no topo abre modal, permite troca rápida e atualiza todos os botões em tempo de execução via `localStorage`.
- [ ] **Filtros de Catálogo:** Transição suave entre *Todos*, *Feminino* e *Masculino*.
- [ ] **FAQ Accordion:** Abertura e fechamento independente de cada pergunta.
- [ ] **Mobile & Desktop:** Zero scroll horizontal em resoluções de 360px a 1920px.
