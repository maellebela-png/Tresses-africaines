import { motion, useScroll, useTransform } from "motion/react";
import { Compass, Crown, MapPin, Sparkles, MoveRight } from "lucide-react";
import { TIMELINE_DATA, SYMBOLS } from "./constants";

const IconMap = {
  Crown: Crown,
  Sparkles: Sparkles,
  MapPin: MapPin,
  Compass: Compass,
};

export default function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-gold selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-brand-cream">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif italic text-2xl tracking-tighter"
        >
          Héritage
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-xs uppercase tracking-widest font-medium"
        >
          <a href="#history" className="hover:text-brand-gold transition-colors">Histoire</a>
          <a href="#symbols" className="hover:text-brand-gold transition-colors">Symboles</a>
          <a href="#modern" className="hover:text-brand-gold transition-colors">Aujourd'hui</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 200]) }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1595475241949-0f02b288a662?q=80&w=2000&auto=format&fit=crop"
              alt="Art of Braiding"
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/10 via-brand-cream/50 to-brand-cream" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter text-brand-brown">
              Architecture <br />
              <span className="italic relative inline-block">
                du Cheveu
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-gold origin-left"
                />
              </span>
            </h1>
            <p className="mt-12 text-lg md:text-xl font-light text-brand-earth max-w-xl mx-auto leading-relaxed">
              Plus qu'une coiffure, une écriture. Explorez l'histoire millénaire des tresses africaines : des cartes de liberté aux codes de royauté.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 group flex items-center gap-4 mx-auto text-brand-brown font-serif italic text-2xl hover:text-brand-gold transition-colors"
          >
            Découvrir l'histoire <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Origin Timeline */}
      <section id="history" className="py-32 px-6 bg-brand-brown text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <h2 className="font-serif text-6xl md:text-8xl tracking-tighter">Chronologie.</h2>
            <p className="max-w-xs text-brand-earth uppercase text-[10px] tracking-[0.3em] font-bold mb-4">
              Du Sahara antique à la diaspora moderne
            </p>
          </div>

          <div className="space-y-40">
            {TIMELINE_DATA.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 text-center md:text-left">
                  <span className="font-serif italic text-6xl text-brand-gold">{event.year}</span>
                  <h3 className="text-3xl font-serif mt-4 mb-6">{event.title}</h3>
                  <p className="text-brand-earth font-light leading-relaxed max-w-md mx-auto md:mx-0">
                    {event.description}
                  </p>
                </div>
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-brand-earth/20">
                    <img 
                      src={`https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1000&auto=format&fit=crop&sig=${i}`}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbols Bento Grid */}
      <section id="symbols" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif text-6xl md:text-8xl tracking-tighter mb-8 italic text-brand-gold">Langage Muet</h2>
            <p className="max-w-2xl mx-auto text-brand-earth text-lg font-light leading-relaxed">
              Chaque motif, chaque tension, chaque croisement portait un sens. Dans les sociétés traditionnelles, on pouvait lire la vie d'une personne à travers la géométrie de ses tresses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SYMBOLS.map((symbol) => {
              const Icon = IconMap[symbol.icon as keyof typeof IconMap];
              return (
                <motion.div
                  key={symbol.id}
                  whileHover={{ y: -10 }}
                  className={`${symbol.color} p-10 rounded-[40px] flex flex-col justify-between aspect-square border border-black/5`}
                >
                  <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/20">
                    <Icon className="w-8 h-8 text-brand-brown" />
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl mb-4">{symbol.title}</h4>
                    <p className="text-sm font-light text-brand-brown/70 leading-relaxed">
                      {symbol.meaning}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-brand-gold flex items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl"
        >
          <blockquote className="font-serif text-4xl md:text-6xl text-brand-brown italic leading-tight">
            "Les tresses sont le lien entre nos racines et le ciel, une sculpture de notre identité."
          </blockquote>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-brand-earth/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-serif italic text-4xl">Héritage.</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-earth">
            <p>© 2026 ART DES TRESSES</p>
            <p>CONÇU POUR L'ÉLÉGANCE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
