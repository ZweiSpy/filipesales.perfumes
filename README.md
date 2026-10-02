# Filipe Sales Perfumes | Atlântica Natural

Landing page institucional de alta conversão desenvolvida para o consultor oficial credenciado **Filipe Sales**, especializada na apresentação e atendimento consultivo da linha exclusiva de perfumaria da **Atlântica Natural**.

---

## 📌 Visão Geral do Projeto

O objetivo primordial desta aplicação é proporcionar uma experiência visual de alto luxo (*Dark Noir & Gold*) e alta velocidade, conduzindo o visitante de forma intuitiva a uma consultoria olfativa personalizada diretamente no WhatsApp do consultor.

### 🌟 Destaques Principais
- **Design de Luxo:** Paleta sofisticada *Noir, Ouro Metálico, Bronze e Esmeralda*, tipografia clássica (*Cinzel*, *Playfair Display* e *Montserrat*) e micro-animações de brilho metálico.
- **Quiz Olfativo Interativo ("Qual perfume combina com você?"):** Experiência gamificada de 1 minuto baseada no guia oficial, diagnosticando a família olfativa do cliente e recomendando o TOP 3 do catálogo com link direto para pedido no WhatsApp.
- **Catálogo Oficial Completo (62 Fragrâncias):** Página satélite dedicada (`catalogo.html`) com busca instantânea em tempo real e filtros por família e gênero (32 femininos e 30 masculinos).
- **Seleção Dinâmica de Frascos:** Suporte em tempo real para escolha entre o frasco de **100ml** (imponência de bancada) e o pocket de **15ml** (praticidade e portabilidade).
- **Roteamento Inteligente no WhatsApp:** Mais de 13 pontos de contato com mensagens contextuais customizadas para cada perfume e intenção do cliente (+55 21 97595-6187).
- **Zero Dependências Pesadas:** Desenvolvido em Vanilla HTML5, Tailwind CSS utilitário, CSS modular e JavaScript puro para carregamento instantâneo (First Contentful Paint ultraveloz).

---

## 🏛️ Estrutura de Governança e Especificação

Este repositório adota a metodologia **Spec-Driven Development (SDD)** e governança estrita entre Product Owner e Engenharia de IA:

* 📄 [AGENTS.md](AGENTS.md): Diretrizes de governança, papéis (PO / Tech Lead vs. Dev / Arquiteto), Matriz RACI, regras de ouro e checklist de testes.
* 📋 [PLAN.md](PLAN.md): Roadmap evolutivo do projeto, status de fases concluídas e backlog priorizado.
* 📐 [SDD.md](SDD.md): Especificação técnica formal de arquitetura, design system, componentes, fluxo de dados e integrações.

---

## 📁 Estrutura de Diretórios

```plaintext
filipesales.perfumes/
├── assets/
│   ├── data/
│   │   └── perfumes.js               # Catálogo com as 62 fragrâncias oficiais
│   ├── js/
│   │   └── quiz.js                   # Módulo do Quiz Olfativo e motor de recomendação
│   ├── filipe-sales-consultor.jpeg   # Retrato executivo oficial de estúdio
│   ├── favicon.png / favicon.svg     # Ícones da aplicação em alta definição
│   └── Open-graph.png                # Card de pré-visualização para redes sociais e WhatsApp
├── AGENTS.md                         # Matriz RACI e governança do projeto
├── PLAN.md                           # Roadmap de planejamento e execução
├── SDD.md                            # Software Design Document (Especificação Técnica)
├── README.md                         # Documentação central do repositório
├── catalogo.html                     # Catálogo completo com 62 fragrâncias e live search
├── index.html                        # Aplicação principal (Landing Page de Alta Conversão)
└── vercel.json                       # Configurações de headers e deploy na Vercel
```

---

## 🚀 Como Executar Localmente

Como a aplicação adota arquitetura estática leve, nenhuma etapa de compilação ou instalação de pacotes pesados é exigida:

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/ZweiSpy/filipesales.perfumes.git
   cd filipesales.perfumes
   ```

2. **Abrir a Aplicação:**
   - **Opção A:** Dê um duplo clique no arquivo `index.html` para abrir diretamente em qualquer navegador moderno.
   - **Opção B (Recomendada via VS Code):** Utilize a extensão **Live Server** para recarregamento automático em `http://localhost:5500`.

---

## 📞 Canais Oficiais Integrados

* **WhatsApp Oficial:** `+55 21 97595-6187`
* **Instagram Oficial:** [@filipesales.perfumes](https://www.instagram.com/filipesales.perfumes/#)

---

## ⚖️ Licença e Propriedade

Todos os direitos reservados a **Filipe Sales** e **Atlântica Natural**. Desenvolvido sob a liderança de produto de **ZweiSpy**.
