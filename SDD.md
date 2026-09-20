# Especificação Técnica de Software (SDD.md)
## Spec-Driven Development Document

**Produto:** Landing Page Institucional de Alta Conversão - Filipe Sales Perfumes  
**Marca Representada:** Atlântica Natural  
**Consultor Oficial:** Filipe Sales  
**Versão do Documento:** 1.0.0  
**Data:** 19/09/2026  

---

## 1. Visão Geral e Contexto de Negócio

### 1.1 Missão do Produto
Proporcionar uma vitrine digital imersiva, elegante e de carregamento ultrarrápido para posicionar o consultor **Filipe Sales** como autoridade em alta perfumaria da **Atlântica Natural**, convertendo visitantes qualificados em diálogos consultivos no WhatsApp.

### 1.2 Proposta de Valor
- **Atendimento Consultivo Olfativo:** Não apenas vender produtos, mas guiar o cliente na escolha do perfume perfeito com base na sua rotina, personalidade e clima.
- **Dualidade de Formatos:** Atender tanto ao público que busca imponência e custo-benefício por ml (**100ml para bancada**) quanto ao público corporativo/noturno que exige portabilidade (**Pocket 15ml para o bolso/bolsa**).
- **Garantia de Autenticidade:** Produtos 100% lacrados de fábrica com procedência direta da Atlântica Natural.

---

## 2. Limites Arquiteturais de Escopo

```
[ Visitante na Web ] 
         │ 
         ▼ (Navega na Landing Page de Luxo)
  ┌────────────────────────────────────────────────────────┐
  │  • Hero com Headline Emocional                         │
  │  • Apresentação Didática dos Frascos (100ml vs 15ml)   │
  │  • Catálogo com Filtro por Abas (Todos/Fem/Masc)       │
  │  • Seção de Credencial do Consultor (Foto Real)        │
  │  • Diferenciais, Depoimentos e FAQ                     │
  └────────────────────────────────────────────────────────┘
         │
         ▼ (Gatilho Contextual de WhatsApp)
[ Chat Oficial wa.me/5521975956187 com Mensagem Pré-formatada ]
         │
         ▼ (Negociação Humana, Frete & Pagamento via Pix/Cartão)
[ Venda Concretizada ]
```

### O que o Sistema NÃO Faz:
1. **Sem Checkout / Pagamentos Nativos:** Não processa cartões nem gera Pix internamente. Elimina carrinhos abandonados e complexidade de infraestrutura.
2. **Sem Tabela de Preços Aberta:** A negociação de valores, combos promocionais e custos de frete ocorrem com flexibilidade diretamente no WhatsApp.
3. **Sem Frameworks Pesados:** A arquitetura estática Vanilla previne gargalos de processamento em celulares de entrada.

---

## 3. Especificação do Design System & Estética

### 3.1 Paleta Cromática Institucional (*Dark Noir & Gold Metallic*)
- **Noir 950 (`#060607`) / Noir 900 (`#0c0d0e`):** Fundo imersivo, reduz fadiga visual e destaca elementos iluminados.
- **Gold Metallic (`#D4AF37` / `#FDECB1`):** Ouro de alto padrão empregado em tipografia nobre, bordas ativas e gradientes.
- **Bronze Nobre (`#CD7F32` / `#A45821`):** Acento caloroso que evoca especiarias, couro e âmbar.
- **Emerald Green (`#10b981` / `#059669`):** Contraste funcional de alta conversão para os gatilhos e botões do WhatsApp.

### 3.2 Tipografia Hierárquica
- **Títulos de Alto Luxo:** *Cinzel* (Google Fonts, serifada clássica) e *Playfair Display* para manchetes e slogans.
- **Corpo de Texto e Controles:** *Montserrat* (Google Fonts, sans-serif limpa) em pesos 300, 400, 500 e 600, garantindo legibilidade perfeita em qualquer resolução.

### 3.3 Efeitos Visuais & Micro-interações
- **Gold Shine Effect (`.gold-shine-effect`):** Animação sutil de varredura luminosa em 30 graus no frasco e botões de destaque.
- **Pulse WhatsApp (`.pulse-whatsapp`):** Pulso de escala e brilho esmeralda (`scale(1.03)`) para retenção visual contínua.
- **Dark Glass (`backdrop-blur-md`):** Efeito de vidro fosco no header fixo e nos modais.

---

## 4. Arquitetura de Componentes & Modelo de Dados

### 4.1 Estado da Aplicação (Client-Side State)
O estado do frontend é gerenciado de forma reativa e leve via Vanilla JS:

```javascript
// 1. Telefone do Consultor (com fallback e persistência)
const DEFAULT_PHONE = "5521975956187";
let currentPhone = localStorage.getItem("filipe_perfumes_whatsapp") || DEFAULT_PHONE;

// 2. Mapeamento de tamanho selecionado por perfume
const perfumeSelectedSizes = {
  "La Belle": "100ml",
  "Amore Radiant Gold": "100ml",
  "Good Woman": "100ml",
  "Fortune": "100ml",
  "Imortal": "100ml",
  "Indomável": "100ml"
};
```

### 4.2 Construtor de URLs do WhatsApp (`buildWhatsAppUrl`)
- **Assinatura:** `buildWhatsAppUrl(phone, text)`
- **Higienização:** Expressão regular `replace(/\D/g, "")` para garantir padrão E.164 limpo (código 55 + DDD 21 + 9 dígitos).
- **Encoding:** Codificação segura com `encodeURIComponent(text.trim())`.
- **Output:** `https://wa.me/5521975956187?text=...`

### 4.3 Mapeamento dos Perfumes Homologados
| Fragrância | Família Olfativa | Gênero | Formatos Disponíveis | Destaque |
|---|---|:---:|:---:|---|
| **La Belle** | Floral Frutado Gourmet | Feminino | 100ml / 15ml | Brilho leve e sofisticação |
| **Amore Radiant Gold** | Âmbar Floral Solar | Feminino | 100ml / 15ml | Luxo solar e envolvente |
| **Good Woman** | Oriental Floral Misterioso | Feminino | 100ml / 15ml | Sensualidade e alta projeção |
| **Fortune** | Amadeirado Especiado com Couro | Masculino | 100ml / 15ml | Bestseller, ambição e riqueza |
| **Imortal** | Aquático Amadeirado Fresco | Masculino | 100ml / 15ml | Vigor, frescor e imponência |
| **Indomável** | Fougère Aromático com Ambroxan | Masculino | 100ml / 15ml | Liberdade e instinto selvagem |

---

## 5. Requisitos Não Funcionais (NFRs)

### 5.1 Performance (Core Web Vitals)
- **First Contentful Paint (FCP):** < 1.0s.
- **Largest Contentful Paint (LCP):** < 1.8s (carregamento priorizado de tipografia e otimização da foto do consultor).
- **Cumulative Layout Shift (CLS):** 0 (todas as seções e imagens com proporções explícitas).

### 5.2 Segurança & Resiliência
- **Privacidade de Armazenamento:** Uso de bloco `try / catch` no acesso a `localStorage` para prevenir quebras em navegação anônima com storage bloqueado.
- **Links Externos Seguros:** Todo link externo (WhatsApp e Instagram) contém obrigatoriamente `rel="noopener noreferrer"` e `target="_blank"`.

### 5.3 Responsividade Multi-Dispositivo
- **Mobile First:** Adaptação suave de 360px a 767px (layout em coluna única, botões de toque com altura mínima de 44px).
- **Tablet & Desktop:** Grid responsivo de 2 e 3 colunas entre 768px e 1920px sem quebras de alinhamento.
