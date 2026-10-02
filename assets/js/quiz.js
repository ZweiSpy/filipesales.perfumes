/**
 * Quiz Olfativo Interativo - Filipe Sales Perfumes
 * Baseado estritamente no Guia Oficial ("Qual perfume combina com você?")
 * Atlântica Natural & Linha Bortoletto
 */

(function () {
  "use strict";

  // Telefone oficial fixo homologado (+55 21 97595-6187)
  const OFFICIAL_PHONE = "5521975956187";
  const STORAGE_KEY = "filipesales_quiz_result";

  // 1. Perguntas Oficiais do PDF (Passo 1)
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      titulo: "1. Que tipo de cheiro você mais gosta?",
      subtitulo: "Marque a opção que mais parece com você.",
      opcoes: [
        {
          letra: "A",
          texto: "Limpo, fresco, de banho tomado",
          icone: "fa-solid fa-wind",
          cor: "cyan"
        },
        {
          letra: "B",
          texto: "Doce, quentinho, envolvente",
          icone: "fa-solid fa-heart",
          cor: "amber"
        },
        {
          letra: "C",
          texto: "Seco, elegante, de madeira",
          icone: "fa-solid fa-tree",
          cor: "emerald"
        },
        {
          letra: "D",
          texto: "De flores, delicado, romântico",
          icone: "fa-solid fa-spa",
          cor: "rose"
        }
      ]
    },
    {
      id: 2,
      titulo: "2. Qual é o seu momento ideal?",
      subtitulo: "Onde você mais se imagina usando seu perfume?",
      opcoes: [
        {
          letra: "A",
          texto: "Manhã de sol, praia e brisa",
          icone: "fa-solid fa-sun",
          cor: "cyan"
        },
        {
          letra: "B",
          texto: "Jantar a dois, noite especial",
          icone: "fa-solid fa-moon",
          cor: "amber"
        },
        {
          letra: "C",
          texto: "Tarde em um ambiente sofisticado",
          icone: "fa-solid fa-building-columns",
          cor: "emerald"
        },
        {
          letra: "D",
          texto: "Passeio em um jardim florido",
          icone: "fa-solid fa-leaf",
          cor: "rose"
        }
      ]
    },
    {
      id: 3,
      titulo: "3. Como você quer ser lembrado(a)?",
      subtitulo: "Qual a impressão e rastro que você deseja deixar?",
      opcoes: [
        {
          letra: "A",
          texto: "Pela energia e pelo frescor",
          icone: "fa-solid fa-bolt",
          cor: "cyan"
        },
        {
          letra: "B",
          texto: "Pela presença e pela sedução",
          icone: "fa-solid fa-fire",
          cor: "amber"
        },
        {
          letra: "C",
          texto: "Pela elegância e pela confiança",
          icone: "fa-solid fa-gem",
          cor: "emerald"
        },
        {
          letra: "D",
          texto: "Pela delicadeza e pelo charme",
          icone: "fa-solid fa-wand-magic-sparkles",
          cor: "rose"
        }
      ]
    }
  ];

  // 2. Perfis Olfativos Oficiais do PDF (Passo 2)
  const QUIZ_PROFILES = {
    A: {
      letra: "A",
      nome: "Fresco e Limpo",
      familia: "Cítrico, aromático ou aquático",
      notas: "Notas como limão, bergamota, lavanda e notas marinhas. Leve e energizante.",
      quandoUsar: "Dia a dia, trabalho e calor.",
      badgeCor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      accentCor: "cyan",
      topIds: ["indomavel", "imortal", "aqua-for-men"]
    },
    B: {
      letra: "B",
      nome: "Doce e Envolvente",
      familia: "Oriental / Âmbar",
      notas: "Baunilha, âmbar, especiarias e resinas. Quente e marcante.",
      quandoUsar: "Noite, encontros e eventos.",
      badgeCor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      accentCor: "amber",
      topIds: ["bee", "bali", "god-woman"]
    },
    C: {
      letra: "C",
      nome: "Amadeirado e Elegante",
      familia: "Amadeirado / Fougère / Chipre",
      notas: "Cedro, sândalo, vetiver, patchouli. Seco, sofisticado e atemporal.",
      quandoUsar: "Trabalho, reuniões e ocasiões formais.",
      badgeCor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      accentCor: "emerald",
      topIds: ["fortune", "champion", "zeus-polo"]
    },
    D: {
      letra: "D",
      nome: "Floral e Delicado",
      familia: "Floral / Floral frutado",
      notas: "Rosa, jasmim, peônia, lírio e frutas. Feminino, leve e romântico.",
      quandoUsar: "Dia, passeios e encontros.",
      badgeCor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      accentCor: "rose",
      topIds: ["loved", "athena", "amore"]
    }
  };

  // Perfis de Empate Customizados (Regra do PDF: "Empate? Escolha as duas famílias.")
  const HYBRID_PROFILES = {
    "A-C": {
      nome: "Fresco & Amadeirado",
      familia: "Cítrico Amadeirado & Aquático",
      notas: "Equilíbrio entre a energia revigorante e a solidez das madeiras nobres.",
      quandoUsar: "Versátil: do escritório ao happy hour.",
      topIds: ["indomavel", "fortune", "aqua-for-men"]
    },
    "B-D": {
      nome: "Floral & Doce Envolvente",
      familia: "Floral Oriental & Gourmand",
      notas: "A feminilidade das flores nobres aliada à sedução da baunilha e do âmbar.",
      quandoUsar: "Passeios à tarde, encontros e ocasiões especiais.",
      topIds: ["loved", "bee", "athena"]
    },
    "A-B": {
      nome: "Fresco & Marcante",
      familia: "Aromático com Toque Doce",
      notas: "Saída revigorante com corpo quente e marcante.",
      quandoUsar: "Eventos ao ar livre e noites amenas.",
      topIds: ["indomavel", "bee", "imortal"]
    },
    "A-D": {
      nome: "Fresco & Floral Radiante",
      familia: "Cítrico Floral Suave",
      notas: "Sensação cristalina de banho tomado com a beleza das pétalas frescas.",
      quandoUsar: "Dia a dia, manhãs e primavera/verão.",
      topIds: ["very-summer", "loved", "amore"]
    },
    "B-C": {
      nome: "Amadeirado & Oriental Nobre",
      familia: "Oriental Amadeirado com Couro",
      notas: "A suntuosidade das especiarias quentes com a elegância de cedro e patchouli.",
      quandoUsar: "Noites frias, jantares sofisticados e eventos de gala.",
      topIds: ["fortune", "bee", "champion"]
    },
    "C-D": {
      nome: "Floral Amadeirado Sofisticado",
      familia: "Floral Amadeirado Nobre",
      notas: "A sensibilidade floral envolvida por uma estrutura clássica e refinada de madeiras.",
      quandoUsar: "Ambientes corporativos e celebrações requintadas.",
      topIds: ["libert", "champion", "loved"]
    }
  };

  // Estado Atual do Quiz
  let state = {
    currentStep: 1, // 1, 2, 3 ou "result"
    answers: [null, null, null],
    selectedSizes: {}, // { [id]: '100ml' | '15ml' }
    resultData: null
  };

  // Helper para construir URL segura do WhatsApp
  function buildWhatsAppUrl(text) {
    return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(text.trim())}`;
  }

  // Obter catálogo seguro
  function getCatalog() {
    if (typeof PERFUMES_CATALOG !== "undefined" && Array.isArray(PERFUMES_CATALOG)) {
      return PERFUMES_CATALOG;
    }
    return [];
  }

  // Motor de Apuração (Passo 2 do PDF)
  function calculateResult(answers) {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(letter => {
      if (counts[letter] !== undefined) counts[letter]++;
    });

    const sorted = Object.keys(counts).sort((x, y) => counts[y] - counts[x]);
    const maxVal = counts[sorted[0]];
    const topLetters = sorted.filter(l => counts[l] === maxVal);

    let profileInfo = null;
    let topIds = [];
    let isTie = false;

    if (topLetters.length === 1) {
      // Vencedor claro (2 ou 3 votos)
      const winner = topLetters[0];
      profileInfo = QUIZ_PROFILES[winner];
      topIds = profileInfo.topIds;
    } else if (topLetters.length === 2) {
      // Empate de 2 letras (1 e 1 voto)
      isTie = true;
      const key1 = `${topLetters[0]}-${topLetters[1]}`;
      const key2 = `${topLetters[1]}-${topLetters[0]}`;
      const hybrid = HYBRID_PROFILES[key1] || HYBRID_PROFILES[key2];

      if (hybrid) {
        profileInfo = {
          letra: `${topLetters[0]} + ${topLetters[1]}`,
          nome: hybrid.nome,
          familia: hybrid.familia,
          notas: hybrid.notas,
          quandoUsar: hybrid.quandoUsar,
          badgeCor: "bg-gold-500/10 text-gold-300 border-gold-500/30",
          accentCor: "gold"
        };
        topIds = hybrid.topIds;
      } else {
        // Fallback genérico para combinação
        const p1 = QUIZ_PROFILES[topLetters[0]];
        const p2 = QUIZ_PROFILES[topLetters[1]];
        profileInfo = {
          letra: `${topLetters[0]} + ${topLetters[1]}`,
          nome: `${p1.nome} & ${p2.nome}`,
          familia: `${p1.familia} e ${p2.familia}`,
          notas: `${p1.notas} / ${p2.notas}`,
          quandoUsar: "Ideal para transitar entre dia e noite.",
          badgeCor: "bg-gold-500/10 text-gold-300 border-gold-500/30",
          accentCor: "gold"
        };
        topIds = [p1.topIds[0], p2.topIds[0], p1.topIds[1]];
      }
    } else {
      // 3 respostas diferentes (A, B, C, etc.)
      isTie = true;
      profileInfo = {
        letra: "A, B, C",
        nome: "Estilo Versátil & Multifacetado",
        familia: "Equilíbrio entre Frescor, Doçura e Madeiras",
        notas: "Você aprecia a pluralidade da alta perfumaria e varia de aroma conforme o seu humor.",
        quandoUsar: "Um perfume para cada ocasião da sua semana.",
        badgeCor: "bg-gold-500/10 text-gold-300 border-gold-500/30",
        accentCor: "gold"
      };
      topIds = [
        QUIZ_PROFILES[answers[0]].topIds[0],
        QUIZ_PROFILES[answers[1]].topIds[0],
        QUIZ_PROFILES[answers[2]].topIds[0]
      ];
    }

    // Buscar os objetos reais dos perfumes dentro do catálogo oficial
    const catalog = getCatalog();
    const perfumes = topIds.map(id => catalog.find(p => p.id === id)).filter(Boolean);

    // Se faltou algum por ID, preencher com bestsellers da respectiva família
    while (perfumes.length < 3 && catalog.length >= 3) {
      const remaining = catalog.filter(p => !perfumes.some(sel => sel.id === p.id));
      if (remaining.length > 0) perfumes.push(remaining[0]);
      else break;
    }

    return {
      answers,
      profile: profileInfo,
      perfumes,
      isTie,
      timestamp: new Date().toISOString()
    };
  }

  // Salvar no localStorage
  function saveQuizResult(result) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    } catch (e) {
      console.warn("Não foi possível salvar resultado do quiz no localStorage:", e);
    }
  }

  // Carregar do localStorage
  function loadSavedQuizResult() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  // Criar Modal no DOM
  function ensureModalDOM() {
    if (!document.getElementById("quizStyles")) {
      const style = document.createElement("style");
      style.id = "quizStyles";
      style.textContent = `
        @keyframes quizFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: quizFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `;
      document.head.appendChild(style);
    }

    let modal = document.getElementById("quizModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "quizModal";
      modal.className = "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-noir-950/80 backdrop-blur-md hidden transition-all duration-300 opacity-0";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-labelledby", "quizModalTitle");

      modal.innerHTML = `
        <div class="relative w-full max-w-2xl bg-noir-900 border border-gold-500/30 rounded-3xl p-5 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col max-h-[92vh] overflow-hidden text-gray-200">
          
          <!-- Botão Fechar -->
          <button 
            type="button" 
            onclick="window.FilipeQuiz.close()" 
            aria-label="Fechar Quiz" 
            class="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-noir-800 border border-white/10 hover:border-gold-400 text-gray-400 hover:text-white flex items-center justify-center transition z-10"
          >
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>

          <!-- Top Progress Bar & Header -->
          <div class="pb-4 border-b border-white/10 shrink-0">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-gold-400 flex items-center gap-1.5">
                <i class="fa-solid fa-wand-magic-sparkles text-gold-500"></i>
                <span id="quizBadgeTitle">Quiz Olfativo Oficial</span>
              </span>
              <span id="quizStepIndicator" class="text-xs text-gray-400 font-medium">Passo 1 de 3</span>
            </div>
            <!-- Progress Bar Line -->
            <div class="w-full h-1.5 bg-noir-950 rounded-full overflow-hidden border border-white/5">
              <div id="quizProgressBar" class="h-full bg-gradient-to-r from-gold-500 to-amber-300 rounded-full transition-all duration-300 w-1/3"></div>
            </div>
          </div>

          <!-- Body Dinâmico com Scroll Interno -->
          <div id="quizModalBody" class="py-4 overflow-y-auto flex-1 space-y-5 pr-1">
            <!-- Conteúdo inserido dinamicamente via JS -->
          </div>

        </div>
      `;

      document.body.appendChild(modal);

      // Fechar ao clicar fora
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          window.FilipeQuiz.close();
        }
      });

      // Fechar no ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          window.FilipeQuiz.close();
        }
      });
    }
    return modal;
  }

  // Renderizar Etapa Atual
  function render() {
    ensureModalDOM();
    const body = document.getElementById("quizModalBody");
    const indicator = document.getElementById("quizStepIndicator");
    const bar = document.getElementById("quizProgressBar");
    const badge = document.getElementById("quizBadgeTitle");

    if (state.currentStep >= 1 && state.currentStep <= 3) {
      const qIndex = state.currentStep - 1;
      const question = QUIZ_QUESTIONS[qIndex];
      const selected = state.answers[qIndex];

      indicator.textContent = `Pergunta ${state.currentStep} de 3`;
      bar.style.width = `${(state.currentStep / 3) * 100}%`;
      badge.textContent = "Guia Rápido de Escolha (1 Minuto)";

      body.innerHTML = `
        <div class="text-center sm:text-left space-y-1.5 animate-fadeIn">
          <span class="text-xs text-bronze-300 uppercase tracking-widest font-semibold">Passo 1 — Responda com sinceridade</span>
          <h3 id="quizModalTitle" class="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
            ${question.titulo}
          </h3>
          <p class="text-xs text-gray-400">${question.subtitulo}</p>
        </div>

        <div class="grid gap-3 pt-2">
          ${question.opcoes.map(opt => {
            const isChecked = selected === opt.letra;
            return `
              <button 
                type="button" 
                onclick="window.FilipeQuiz.chooseOption('${opt.letra}')" 
                class="group text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 min-h-[58px] ${
                  isChecked 
                    ? 'bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border-gold-400 text-white shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                    : 'bg-noir-950/60 border-white/10 hover:border-gold-500/50 hover:bg-noir-800 text-gray-300'
                }"
              >
                <div class="flex items-center gap-3.5">
                  <span class="w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                    isChecked 
                      ? 'bg-gold-500 text-noir-950 shadow-md' 
                      : 'bg-noir-800 border border-white/10 text-gold-400 group-hover:border-gold-400/50'
                  }">
                    ${opt.letra}
                  </span>
                  <span class="text-xs sm:text-sm font-medium ${isChecked ? 'text-gold-200 font-semibold' : 'text-gray-200'}">
                    ${opt.texto}
                  </span>
                </div>
                <i class="fa-solid fa-chevron-right text-[11px] text-gray-500 group-hover:text-gold-400 transition-transform group-hover:translate-x-1"></i>
              </button>
            `;
          }).join('')}
        </div>

        <div class="pt-4 flex items-center justify-between border-t border-white/5 text-xs text-gray-400">
          ${state.currentStep > 1 
            ? `<button type="button" onclick="window.FilipeQuiz.prevStep()" class="hover:text-gold-300 transition flex items-center gap-1.5 py-1">
                 <i class="fa-solid fa-arrow-left text-[10px]"></i> Voltar
               </button>` 
            : `<span>Sem resposta errada. Siga seu instinto.</span>`}
          <span class="text-[11px] text-gray-500">Toque em uma opção para avançar</span>
        </div>
      `;
    } else if (state.currentStep === "result" && state.resultData) {
      const res = state.resultData;
      const prof = res.profile;

      indicator.textContent = "Diagnóstico Concluído";
      bar.style.width = "100%";
      badge.textContent = "Seu Match Olfativo Atlântica Natural";

      body.innerHTML = `
        <!-- Card do Perfil Vencedor -->
        <div class="bg-gradient-to-br from-noir-950 via-noir-850 to-noir-950 border border-gold-500/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-400">Perfil Olfativo Dominante</span>
              <h3 class="font-serif text-2xl sm:text-3xl font-black text-gold-gradient mt-0.5">
                ${prof.nome}
              </h3>
            </div>
            <span class="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold ${prof.badgeCor} border">
              Família: ${prof.familia}
            </span>
          </div>

          <div class="py-3.5 space-y-2 text-xs sm:text-sm text-gray-300">
            <p><strong>✨ Notas e Características:</strong> ${prof.notas}</p>
            <p><strong>🎯 Quando usar:</strong> ${prof.quandoUsar}</p>
            ${res.isTie ? `<p class="text-[11px] text-gold-300/90 italic pt-1"><i class="fa-solid fa-scale-balanced mr-1"></i> Resposta equilibrada: mesclamos as famílias que mais combinaram com suas escolhas.</p>` : ''}
          </div>
        </div>

        <!-- Título do TOP 3 -->
        <div class="pt-2">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-serif text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-crown text-gold-400 text-sm"></i>
              <span>Seu TOP 3 no Catálogo Oficial</span>
            </h4>
            <span class="text-[11px] text-gray-400">Bortoletto & Atlântica Natural</span>
          </div>

          <!-- Grid dos 3 Perfumes -->
          <div class="grid gap-3.5 sm:grid-cols-3">
            ${res.perfumes.map((perfume, idx) => {
              const currentSize = state.selectedSizes[perfume.id] || "100ml";
              const waText = `Olá Filipe! Acabei de fazer o Quiz Olfativo no seu site e meu perfil deu *${prof.nome}* (${prof.familia}). Meu match número #${idx + 1} foi o perfume *${perfume.nome}* (referência: ${perfume.inspiracao}) no frasco de *${currentSize}*. Gostaria de saber mais e pedir o meu!`;
              const waUrl = buildWhatsAppUrl(waText);

              return `
                <div class="bg-noir-950 border border-gold-500/25 hover:border-gold-400/60 rounded-2xl p-4 flex flex-col justify-between shadow-lg transition-all group relative">
                  <!-- Tag de Posição -->
                  <div class="flex items-center justify-between pb-2 border-b border-white/5">
                    <span class="text-[10px] font-black uppercase tracking-wider text-gold-400 flex items-center gap-1">
                      <span class="w-4 h-4 rounded-full bg-gold-500 text-noir-950 text-[9px] flex items-center justify-center font-black">#${idx + 1}</span>
                      Match Oficial
                    </span>
                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-noir-800 text-gray-400 border border-white/5">
                      ${perfume.genero === 'feminino' ? 'Feminino' : 'Masculino'}
                    </span>
                  </div>

                  <!-- Detalhes do Perfume -->
                  <div class="py-3 space-y-1">
                    <h5 class="font-serif font-bold text-base sm:text-lg text-white group-hover:text-gold-200 transition">
                      ${perfume.nome}
                    </h5>
                    <div class="text-[11px] font-medium text-amber-200/90 flex items-center gap-1">
                      <i class="fa-solid fa-sparkles text-[9px] text-gold-400"></i>
                      <span>Inspiração: <strong>${perfume.inspiracao}</strong></span>
                    </div>
                    <p class="text-[10px] text-gray-400 line-clamp-2 pt-1 leading-relaxed">
                      ${perfume.descricao || perfume.slogan}
                    </p>
                  </div>

                  <!-- Seletor de Tamanho & Botão WhatsApp -->
                  <div class="pt-3 border-t border-white/5 space-y-2.5">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="text-gray-400 text-[10px]">Tamanho:</span>
                      <div class="flex gap-1">
                        <button 
                          type="button" 
                          onclick="window.FilipeQuiz.setSize('${perfume.id}', '100ml')" 
                          class="px-2 py-0.5 rounded text-[10px] font-bold transition ${currentSize === '100ml' ? 'bg-gold-500 text-noir-950 font-black' : 'bg-noir-800 text-gray-400 hover:text-white border border-white/5'}"
                        >
                          100ml
                        </button>
                        <button 
                          type="button" 
                          onclick="window.FilipeQuiz.setSize('${perfume.id}', '15ml')" 
                          class="px-2 py-0.5 rounded text-[10px] font-bold transition ${currentSize === '15ml' ? 'bg-gold-500 text-noir-950 font-black' : 'bg-noir-800 text-gray-400 hover:text-white border border-white/5'}"
                        >
                          15ml
                        </button>
                      </div>
                    </div>

                    <a 
                      href="${waUrl}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-emerald-500/20 transition transform active:scale-95"
                    >
                      <i class="fa-brands fa-whatsapp text-sm"></i>
                      <span>Pedir no Whats</span>
                    </a>
                  </div>

                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Dicas do Consultor Filipe (Baseado na Página 2 do PDF) -->
        <div class="pt-2">
          <details class="bg-noir-950/80 border border-white/10 rounded-2xl overflow-hidden group">
            <summary class="p-3.5 sm:p-4 text-xs sm:text-sm font-semibold text-gold-300 hover:text-gold-200 cursor-pointer flex items-center justify-between select-none">
              <span class="flex items-center gap-2">
                <i class="fa-solid fa-lightbulb text-gold-400"></i>
                Dicas do Especialista: Pirâmide Olfativa & Como Fazer Render Mais
              </span>
              <i class="fa-solid fa-chevron-down text-xs transition-transform group-open:rotate-180"></i>
            </summary>
            <div class="p-4 pt-1 text-xs text-gray-300 space-y-3 border-t border-white/5 leading-relaxed">
              <div class="grid sm:grid-cols-3 gap-2 py-2">
                <div class="p-2.5 rounded-xl bg-noir-900 border border-white/5">
                  <div class="text-gold-400 font-bold mb-1">1. Saída (Minutos)</div>
                  <p class="text-[11px] text-gray-400">Primeira impressão: fresca e cítrica. Evapora rápido.</p>
                </div>
                <div class="p-2.5 rounded-xl bg-noir-900 border border-white/5">
                  <div class="text-gold-400 font-bold mb-1">2. Coração (Horas)</div>
                  <p class="text-[11px] text-gray-400">Identidade real: flores, ervas e especiarias nobres.</p>
                </div>
                <div class="p-2.5 rounded-xl bg-noir-900 border border-white/5">
                  <div class="text-gold-400 font-bold mb-1">3. Fundo (Durabilidade)</div>
                  <p class="text-[11px] text-gray-400">O rastro que fixa na pele: madeiras, baunilha e âmbar.</p>
                </div>
              </div>
              <div class="space-y-1.5 text-[11px] text-gray-400">
                <p>• <strong>Pontos de Calor:</strong> Aplique no pescoço, pulsos e atrás das orelhas sem esfregar.</p>
                <p>• <strong>Pele Hidratada:</strong> A hidratação ajuda a segurar a essência por muito mais tempo.</p>
                <p>• <strong>Conservação:</strong> Guarde seu frasco protegido de sol e umidade para preservar a pureza dos óleos.</p>
              </div>
            </div>
          </details>
        </div>

        <!-- Rodapé do Resultado -->
        <div class="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-white/10">
          <button 
            type="button" 
            onclick="window.FilipeQuiz.restart()" 
            class="text-gray-400 hover:text-gold-300 transition flex items-center gap-1.5 py-1"
          >
            <i class="fa-solid fa-rotate-left text-[11px]"></i> Refazer Teste
          </button>

          <a 
            href="catalogo.html" 
            class="text-gold-300 hover:text-white font-semibold transition flex items-center gap-1.5"
          >
            <span>Ver Catálogo Completo (62 Fragrâncias)</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      `;
    }
  }

  // Interface Pública do Quiz
  window.FilipeQuiz = {
    open: function (event) {
      if (event && event.preventDefault) event.preventDefault();
      const modal = ensureModalDOM();

      // Checar se já possui resultado salvo prévio
      if (!state.resultData) {
        const saved = loadSavedQuizResult();
        if (saved && saved.profile && saved.perfumes) {
          state.resultData = saved;
          state.currentStep = "result";
        }
      }

      modal.classList.remove("hidden");
      // Pequeno timeout para transição fluida de opacidade
      setTimeout(() => {
        modal.classList.remove("opacity-0");
      }, 20);

      document.body.style.overflow = "hidden";
      render();
    },

    close: function () {
      const modal = document.getElementById("quizModal");
      if (modal) {
        modal.classList.add("opacity-0");
        setTimeout(() => {
          modal.classList.add("hidden");
          document.body.style.overflow = "";
        }, 200);
      }
    },

    chooseOption: function (letter) {
      const qIndex = state.currentStep - 1;
      state.answers[qIndex] = letter;

      if (state.currentStep < 3) {
        state.currentStep++;
        render();
      } else {
        // Concluiu as 3 perguntas: calcular e salvar
        state.resultData = calculateResult(state.answers);
        saveQuizResult(state.resultData);
        state.currentStep = "result";
        render();
      }
    },

    prevStep: function () {
      if (state.currentStep > 1 && state.currentStep <= 3) {
        state.currentStep--;
        render();
      }
    },

    restart: function () {
      state.currentStep = 1;
      state.answers = [null, null, null];
      state.resultData = null;
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      render();
    },

    setSize: function (perfumeId, size) {
      state.selectedSizes[perfumeId] = size;
      render();
    }
  };

  // Inicialização Automática de Gatilhos
  document.addEventListener("DOMContentLoaded", () => {
    // Interceptar qualquer link com classe .quiz-trigger ou id correspondente
    document.querySelectorAll(".quiz-trigger, a[href='#quiz'], a[data-quiz]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        window.FilipeQuiz.open(e);
      });
    });
  });

})();
