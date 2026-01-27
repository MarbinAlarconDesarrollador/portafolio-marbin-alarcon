import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, ExternalLink, Sun, Moon, Type,
  Volume2, VolumeX, Terminal, Briefcase, User,
  Code2, ChevronRight, ArrowUpCircle, MapPin, MessageCircle, Globe,
  Layers, Zap, CheckCircle2, Cpu, ShieldCheck, Eye
} from 'lucide-react';

// --- ANIMACIONES RESTAURADAS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.15 } }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [isReading, setIsReading] = useState(false);
  const [showWpTooltip, setShowWpTooltip] = useState(false);

  // --- DATOS DE PROYECTOS ---
  const projectsData = [
    {
      id: 1,
      title: "Wordle Pro - Torneo Móvil ",
      description: "Sistema inteligente que gestiona flujos de clientes, horarios y confirmaciones automáticamente mediante la API de WhatsApp Business.",
      tech: "VITE + JavaScript + Tailwind CSS + Node.js",
      tags: ["Node.js", "VITE", "JavaScript", "Tailwind CSS"],
      image: "proyecto3.png",
      link: "https://marbinalarcondesarrollador.github.io/WordleTorneoMovil/"
    },
    {
      id: 2,
      title: "Vita Mahjong Deluxe - PWA",
      description: "Panel administrativo diseñado rigurosamente bajo estándares de accesibilidad, optimizado para lectores de pantalla y navegación por teclado.",
      tech: "CSS + JavaScript + HTML",
      tags: ["CSS", "JavaScript", "HTML"],
      image: "proyecto1.png",
      link: "https://marbinalarcondesarrollador.github.io/Vita-Mahjong/"
    },
    {
      id: 3,
      title: "Block Puzzle",
      description: "Interfaz diseñada para alta legibilidad, navegación por teclado y soporte total de lectores de pantalla.",
      tech: "React",
      tags: ["React", "A11y"],
      image: "proyecto4.png",
      link: "https://github.com/MarbinAlarconDesarrollador"
    },
    {
      id: 4,
      title: "Plataforma de E-learning",
      description: "Sistema de gestión de cursos con funcionalidades para estudiantes y profesores, integrado con pasarelas de pago.",
      tech: "PHP",
      tags: ["PHP", "Laravel"],
      image: "proyecto2.png",
      link: "https://github.com/MarbinAlarconDesarrollador"
    }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = "#020617";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "#f1f0ee";
    }
  }, [darkMode]);

  // --- FUNCIONALIDAD LECTOR DE VOZ (RESTAURADA) ---
  const leerPagina = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    const texto = document.body.innerText;
    const enunciado = new SpeechSynthesisUtterance(texto);
    enunciado.lang = 'es-ES';
    enunciado.onend = () => setIsReading(false);
    setIsReading(true);
    window.speechSynthesis.speak(enunciado);
  };

  const toggleFontSize = () => setFontSize(prev => (prev >= 1.4 ? 1 : prev + 0.15));

  // --- ESTILOS DE ALTO CONTRASTE PARA BRAVE/FIREFOX ---
  const textBody = darkMode ? "text-slate-200" : "text-slate-900";
  const sectionTitle = `text-4xl md:text-5xl font-black mb-16 flex justify-center items-center gap-4 text-[#1e4a6d] dark:text-[#48afe1] text-center`;
  const btnPrimary = "bg-[#48afe1] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1e4a6d] shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95";
  const cardBase = `rounded-[2.5rem] border-2 transition-all duration-300 overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#1e4a6d]/20 shadow-xl'}`;

  const [hoverVoz, setHoverVoz] = useState(false);
  const [hoverTexto, setHoverTexto] = useState(false);
  const [hoverDark, setHoverDark] = useState(false);

  return (
    <div style={{ fontSize: `${fontSize}rem` }} className={`min-h-screen transition-colors duration-500 font-sans ${textBody}`}>

      {/* --- WHATSAPP --- */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
        <AnimatePresence>
          {showWpTooltip && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mb-3 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border-2 border-[#48afe1] text-sm font-bold text-[#1e4a6d] dark:text-white">
              ¿Hablamos de tu proyecto?
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a href="https://wa.me/573205578471" target="_blank" onMouseEnter={() => setShowWpTooltip(true)} onMouseLeave={() => setShowWpTooltip(false)} whileHover={{ scale: 1.1, rotate: 5 }} className="bg-green-500 text-white p-4 rounded-full shadow-2xl"><MessageCircle size={32} /></motion.a>
      </div>

      {/* --- ACCESIBILIDAD --- */}
      {/* --- PANEL DE ACCESIBILIDAD CON TOOLTIPS Y MOVIMIENTO --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">

        {/* TOOLTIP Y BOTÓN LECTOR DE VOZ */}
        <div className="flex items-center">
          <AnimatePresence>
            {hoverVoz && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="mr-3 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border-2 border-[#48afe1] text-sm font-bold text-[#1e4a6d] dark:text-white whitespace-nowrap"
              >
                {isReading ? "Detener lectura" : "Escuchar página"}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onMouseEnter={() => setHoverVoz(true)}
            onMouseLeave={() => setHoverVoz(false)}
            onClick={leerPagina}
            whileHover={{ x: -12, scale: 1.1 }}
            className={`p-4 rounded-full shadow-2xl ${isReading ? 'bg-red-500' : 'bg-[#48afe1]'} text-white z-50`}
          >
            {isReading ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </motion.button>
        </div>

        {/* TOOLTIP Y BOTÓN TAMAÑO DE TEXTO */}
        <div className="flex items-center">
          <AnimatePresence>
            {hoverTexto && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="mr-3 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border-2 border-[#48afe1] text-sm font-bold text-[#1e4a6d] dark:text-white whitespace-nowrap"
              >
                Aumentar texto
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onMouseEnter={() => setHoverTexto(true)}
            onMouseLeave={() => setHoverTexto(false)}
            onClick={toggleFontSize}
            whileHover={{ x: -12, scale: 1.1 }}
            className="p-4 bg-white dark:bg-slate-800 text-[#1e4a6d] dark:text-[#48afe1] rounded-full shadow-2xl border-2 border-slate-200 dark:border-slate-700 z-50"
          >
            <Type size={24} />
          </motion.button>
        </div>

        {/* TOOLTIP Y BOTÓN MODO OSCURO */}
        <div className="flex items-center">
          <AnimatePresence>
            {hoverDark && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="mr-3 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border-2 border-[#48afe1] text-sm font-bold text-[#1e4a6d] dark:text-white whitespace-nowrap"
              >
                {darkMode ? "Modo Claro" : "Modo Oscuro"}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onMouseEnter={() => setHoverDark(true)}
            onMouseLeave={() => setHoverDark(false)}
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ x: -12, scale: 1.1 }}
            className="p-4 bg-[#1e4a6d] text-white rounded-full shadow-2xl z-50"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>
        </div>

      </div>

      {/* --- HERO --- */}
      <header className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <motion.img whileHover={{ scale: 1.05 }} src="mi_foto.jpeg" className="w-40 h-40 rounded-[2.5rem] border-8 border-white dark:border-slate-800 shadow-2xl mx-auto mb-10 object-cover rotate-3" />
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-[#1e4a6d] dark:text-white">
            Marbin <span className="text-[#48afe1]">Alarcón</span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 font-bold leading-relaxed ${textBody}`}>
            Desarrollador Fullstack especializado en crear soluciones digitales elegantes y funcionales, priorizando la claridad, el rendimiento y la accesibilidad. Transformo el código en experiencias digitales reales e inclusivas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <a href="#proyectos" className={btnPrimary}>Explorar Mi Trabajo</a>
            {/* CORRECCIÓN BOTÓN GITHUB HERO */}
            <a
              href="https://github.com/MarbinAlarconDesarrollador"
              target="_blank"
              className={`px-8 py-4 rounded-2xl font-bold border-2 transition-all ${darkMode ? 'border-[#48afe1] text-white' : 'border-[#1e4a6d] text-[#1e4a6d]'} hover:bg-white/50`}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </header>

      {/* --- ESPECIALIDADES --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2 className={sectionTitle} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Zap size={36} /> Especialidades
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Eye size={32} />, title: "Auditoría WCAG", desc: "Evaluación y corrección de interfaces para garantizar la accesibilidad universal." },
            { icon: <Cpu size={32} />, title: "Arquitectura Fullstack", desc: "Sistemas escalables con React, Node.js y PHP." },
            { icon: <ShieldCheck size={32} />, title: "Soporte & Evolución", desc: "Mantenimiento preventivo de aplicaciones críticas 24/7." }
          ].map((service, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`${cardBase} p-10`}>
              <div className="text-[#48afe1] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className={`font-bold ${textBody}`}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PERFIL --- */}
      <section id="sobre-mi" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className={sectionTitle}><User size={36} /> Perfil Profesional</h2>
          <div className="text-center mb-16">
            <p className="text-2xl font-black italic opacity-90 mb-6">"La accesibilidad es el corazón de mi código."</p>
            <p className="opacity-75 text-lg max-w-2xl mx-auto font-medium"> Me especializo en el desarrollo de aplicaciones web inclusivas, donde la accesibilidad no es un complemento, sino un principio fundamental del diseño. Mi enfoque garantiza que el software sea usable, claro y funcional para todos.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {['React', 'Node.js', 'Tailwind', 'PHP', 'Java', 'MySQL', 'MongoDB', 'JavaScript'].map((skill) => (
            <motion.div key={skill} whileHover={{ scale: 1.05, y: -5 }} className={`p-6 rounded-3xl border text-center font-black ${darkMode ? 'bg-slate-900 border-slate-800 text-blue-400' : 'bg-white border-slate-100 text-blue-600 shadow-sm'}`}>
              {skill}
            </motion.div>
          ))}
        </div>

        <div className={`p-8 rounded-[2rem] border-2 ${darkMode ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <span className="text-xs font-black bg-blue-600 text-white px-4 py-1.5 rounded-full uppercase tracking-widest">Actualidad</span>
              <h4 className="text-3xl font-black mt-4">Creando Soft</h4>
              <p className="font-bold text-blue-600 text-lg mt-1">Dev Java & PHP / Soporte</p>
            </div>
            <p className="text-sm font-black opacity-40">2023 - Pres.</p>
          </div>
        </div>
      </section>

      {/* --- METODOLOGÍA --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2 className={sectionTitle} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <CheckCircle2 size={36} /> Metodología de Trabajo
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Descubrimiento", desc: "Análisis profundo de requerimientos y definición de la arquitectura ideal." },
            { step: "02", title: "Desarrollo A11y", desc: "Codificación siguiendo estándares WCAG y buenas prácticas de rendimiento." },
            { step: "03", title: "Pruebas QA", desc: "Validación rigurosa de flujos, seguridad y compatibilidad con lectores de pantalla." },
            { step: "04", title: "Despliegue", desc: "Lanzamiento optimizado y monitoreo constante de la solución en producción." }
          ].map((proc, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white shadow-lg shadow-slate-100'}`}>
              <span className="text-4xl font-black text-blue-600/20 block mb-4">{proc.step}</span>
              <h4 className="text-xl font-black mb-2">{proc.title}</h4>
              <p className="text-sm opacity-60 font-medium leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROYECTOS --- */}
      <main id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2 className={sectionTitle} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Layers size={36} /> Proyectos Destacados
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 gap-10" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {projectsData.map((p) => (
            <motion.article key={p.id} variants={fadeInUp} whileHover={{ y: -5 }} className={cardBase}>
              <div className="h-64 overflow-hidden relative group">
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.src = "https://marbinalarcondesarrollador.github.io/Vita-Mahjong/logo"; }} />
                <div className="absolute top-6 right-6 bg-[#1e4a6d] p-3 rounded-2xl text-white shadow-lg"><Code2 size={24} /></div>
              </div>
              <div className="p-10">
                <h3 className={`text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-[#1e4a6d]'}`}>{p.title}</h3>
                <p className={`text-lg font-bold mb-10 ${textBody}`}>{p.description}</p>
                <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
                  <span className="font-black text-[#48afe1] text-xl">{p.tech}</span>
                  <a href={p.link} target="_blank" className="font-black text-[#1e4a6d] dark:text-[#48afe1] flex items-center gap-2">Ver Código <ExternalLink size={16} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      {/* --- FOOTER CON LOGO CENTRADO (VERSIÓN CORREGIDA) --- */}
      <footer className={`relative mt-20 border-t-4 border-[#48afe1] overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]'}`}>

        {/* CAPA DEL LOGO: Subimos opacidad a 0.08 para que se vea mejor */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.08, scale: 1 }} // Subí la opacidad aquí
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="/logo.png" // <--- ASEGÚRATE QUE ESTE NOMBRE SEA EXACTO
            alt=""
            className="w-[300px] md:w-[500px] h-auto grayscale object-contain"
            onError={(e) => { e.target.style.display = 'none'; console.log("No se encontró la imagen en la ruta especificada"); }}
          />
        </div>

        {/* CONTENIDO (z-10 para asegurar que el texto esté adelante) */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-16 mb-16 text-center md:text-left">
            {/* ... Todo tu contenido de columnas (Marbin, Navegación, Ubicación) ... */}
            <div>
              <h2 className={`text-3xl font-black mb-6 italic ${darkMode ? 'text-white' : 'text-[#1e4a6d]'}`}>
                MARBIN <span className="text-[#48afe1]">ALARCÓN</span>
              </h2>
              <p className={`text-lg font-bold ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                Desarrollo web accesible y funcional, comprometido con la inclusión digital.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-8">
                <a href="#" className="p-4 bg-[#1e4a6d] text-white rounded-2xl shadow-lg hover:scale-110 transition-transform"><Linkedin size={24} /></a>
                <a href="https://github.com/MarbinAlarconDesarrollador" className="p-4 bg-[#48afe1] text-white rounded-2xl shadow-lg hover:scale-110 transition-transform"><Github size={24} target="_blank"
                  rel="noopener noreferrer" /></a>
              </div>
            </div>

            <div>
              <h3 className="font-black uppercase text-xs tracking-[0.3em] text-[#48afe1] mb-8">Navegación</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li><a href="#" className={`flex items-center gap-2 group hover:text-[#48afe1] ${darkMode ? 'text-slate-300' : 'text-[#1e4a6d]'}`}><ChevronRight size={18} /> Inicio</a></li>
                <li><a href="#proyectos" className={`flex items-center gap-2 group hover:text-[#48afe1] ${darkMode ? 'text-slate-300' : 'text-[#1e4a6d]'}`}><ChevronRight size={18} /> Proyectos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase text-xs tracking-[0.3em] text-[#48afe1] mb-8">Ubicación</h3>
              <p className={`flex items-center justify-center md:justify-start gap-3 text-lg font-bold ${darkMode ? 'text-slate-300' : 'text-[#1e4a6d]'}`}><MapPin size={20} className="text-[#48afe1]" /> Bucaramanga, Colombia</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-10 flex items-center gap-3 text-[#48afe1] font-black hover:translate-y-[-2px] transition-transform mx-auto md:mx-0">Ir arriba <ArrowUpCircle size={24} /></button>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200 dark:border-slate-900 flex flex-col md:grid md:grid-cols-2 items-center gap-6 text-sm font-black text-[#1e4a6d] dark:text-slate-500 uppercase">
            <p>© 2026 MARBIN ALARCÓN • DESARROLLO WEB</p>
            <div className="flex items-center gap-2 text-green-600 md:justify-end">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> ACCESIBILIDAD WCAG 2.1
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;