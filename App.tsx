
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Coffee, 
  ChevronRight,
  ShieldCheck,
  Star,
  Users,
  Eye,
  BookOpen
} from 'lucide-react';
import { EXPERT, IMAGES } from './constants';
import { Lightbox } from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open(EXPERT.whatsapp, '_blank');
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {/* Lightbox */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* Floating WhatsApp Mobile */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl whatsapp-pulse md:hidden"
      >
        <MessageCircle fill="currentColor" size={28} />
      </button>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-12 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={IMAGES.hero} 
            alt="Professional Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gold rounded-full blur opacity-25"></div>
            <img 
              src={IMAGES.expert} 
              alt={EXPERT.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gold/50 relative z-10 shadow-2xl"
            />
          </div>

          <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full bg-gold/5 backdrop-blur-md">
            Especialista em {EXPERT.city}
          </span>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Realce sua beleza com <span className="text-gold italic">autoridade</span> e precisão.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-2xl">
            Eu sou {EXPERT.name}. {EXPERT.profession}. Transformo olhares através de técnicas exclusivas e personalizadas.
          </p>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto mx-auto bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle fill="currentColor" size={24} />
              ORÇAMENTO VIA WHATSAPP
            </button>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-gold" /> Resposta rápida • Atendimento exclusivo
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <section className="py-24 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 -z-10 rounded-2xl" />
            <img 
              src={IMAGES.expert} 
              alt={EXPERT.name} 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl border border-gray-100"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8 text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Prazer, <span className="text-gold">Sara Santos</span>.
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Minha missão é transformar vidas através do olhar. Não entrego apenas sobrancelhas, entrego confiança. Utilizo as técnicas mais modernas de micropigmentação e design com henna para realçar a beleza que já existe em você.
            </p>
            <ul className="space-y-5">
              {[
                "Especialista em design estratégico",
                "Certificações nacionais e internacionais",
                "Foco total na naturalidade do olhar",
                "Atendimento exclusivo e humanizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-medium text-gray-700">
                  <div className="p-1 bg-gold/10 rounded-full">
                    <CheckCircle2 className="text-gold" size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Resultados</h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto font-light text-lg">Veja como o design estratégico pode transformar completamente a sua expressão facial.</p>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {IMAGES.results.map((url, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-white/50 transition-all hover:shadow-2xl"
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Eye className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xs text-gray-400 italic font-light">
            *Resultados individuais. Fotos de procedimentos reais realizados no estúdio.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Diferenciais Premium</h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="text-gold" size={32} />,
                title: "Visagismo Aplicado",
                desc: "Cada design é planejado de acordo com a sua estrutura óssea e muscular."
              },
              {
                icon: <MessageCircle className="text-gold" size={32} />,
                title: "Consultoria Direta",
                desc: "Canal aberto para tirar dúvidas pré e pós-procedimento com a própria expert."
              },
              {
                icon: <Award className="text-gold" size={32} />,
                title: "Biossegurança",
                desc: "Ambiente rigorosamente esterilizado e materiais de uso único e descartáveis."
              },
              {
                icon: <Users className="text-gold" size={32} />,
                title: "Foco na Naturalidade",
                desc: "Nada de sobrancelhas marcadas ou artificiais. O foco é a sua melhor versão."
              }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-gold/30 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150"></div>
                <div className="mb-8 p-4 bg-gray-50 rounded-2xl inline-block shadow-sm group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-gold text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src={IMAGES.hero} className="w-full h-full object-cover grayscale blur-sm" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight italic">Beleza é sobre se sentir bem.</h2>
          <p className="text-xl mb-10 font-light opacity-95 leading-relaxed">
            A primeira consulta de avaliação é <span className="font-bold underline">totalmente gratuita</span>. Vamos conversar sobre seus objetivos e como posso te ajudar.
          </p>
          <button 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto mx-auto bg-white text-gold hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <MessageCircle fill="currentColor" size={24} />
            SOLICITAR ORÇAMENTO AGORA
          </button>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experiência do Cliente</h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 bg-gray-100 z-0" />
            
            {[
              {
                step: "01",
                title: "Contato Inicial",
                desc: "Fale comigo pelo WhatsApp. Tire dúvidas e envie fotos para uma pré-análise."
              },
              {
                step: "02",
                title: "Diagnóstico",
                desc: "Agendamos sua avaliação gratuita para planejar cada detalhe do design."
              },
              {
                step: "03",
                title: "Transformação",
                desc: "Realizamos o procedimento escolhido com o máximo de conforto e técnica."
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 text-gold flex items-center justify-center text-3xl font-bold mb-8 shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Cursos, Certificados e Espaço) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Cursos e Treinamentos */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-block">
                <BookOpen className="text-gold" size={40} />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900">Expertise que Transforma</h2>
                <p className="text-gray-500 text-lg font-light">Além de atender, capacito novas profissionais na área.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {IMAGES.courses.map((url, i) => (
                <div 
                  key={i} 
                  className="aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm border border-white transition-all hover:shadow-xl"
                  onClick={() => setSelectedImage(url)}
                >
                  <img src={url} alt={`Curso ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          {/* Certificados */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-block">
                <Award className="text-gold" size={40} />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900">Domínio Técnico</h2>
                <p className="text-gray-500 text-lg font-light">Currículo sólido construído com as melhores escolas.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {IMAGES.certificates.map((url, i) => (
                <div 
                  key={i} 
                  className="aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer group shadow-sm border border-white transition-all hover:shadow-xl"
                  onClick={() => setSelectedImage(url)}
                >
                  <img src={url} alt={`Certificado ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          {/* Espaço Coffee */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-block">
                <Coffee className="text-gold" size={40} />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900">O Studio</h2>
                <p className="text-gray-500 text-lg font-light">Onde a técnica de elite encontra o acolhimento.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {IMAGES.coffee.map((url, i) => (
                <div 
                  key={i} 
                  className="aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm border border-white transition-all hover:shadow-xl"
                  onClick={() => setSelectedImage(url)}
                >
                  <img src={url} alt={`Espaço ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight italic">
            Pronta para elevar o seu olhar?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            O primeiro passo para a sua transformação é uma conversa. Me chame agora para um orçamento personalizado.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto mx-auto bg-green-500 hover:bg-green-600 text-white px-16 py-7 rounded-3xl font-bold text-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-4 group"
            >
              <MessageCircle fill="currentColor" size={32} />
              ORÇAMENTO VIA WHATSAPP
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-gold" size={20} /> Avaliação Gratuita</span>
              <span className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-gold" size={20} /> Horários Flexíveis</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <img src={IMAGES.expert} className="w-20 h-20 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border border-gray-100 shadow-lg" alt="Sara Santos footer" />
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{EXPERT.name}</h3>
          <p className="text-gold font-medium mb-4 text-lg">{EXPERT.profession}</p>
          <p className="text-gray-500 flex items-center justify-center gap-2 mb-10 bg-gray-50 px-6 py-2 rounded-full text-sm">
            <MapPin size={16} className="text-gold" /> {EXPERT.city} — Atendimento Personalizado
          </p>

          <div className="flex justify-center gap-8 mb-16">
            <a 
              href={EXPERT.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-pink-600 group-hover:bg-pink-50 transition-all shadow-sm">
                <Instagram size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-pink-600 transition-colors">Instagram</span>
            </a>
            <a 
              href={EXPERT.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-green-600 group-hover:bg-green-50 transition-all shadow-sm">
                <MessageCircle size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-green-600 transition-colors">WhatsApp</span>
            </a>
          </div>

          <div className="pt-10 border-t border-gray-100 w-full">
            <p className="text-xs text-gray-300 uppercase tracking-[0.2em] font-medium">
              Desenvolvido com sofisticação • © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
