import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark text-white">
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-dark/70 backdrop-blur-sm flex justify-between items-center px-4 py-3">
        <h1 className="text-gold font-bold text-lg">Eventos VIP</h1>
        <button className="text-white">☰</button>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image 
            src="/hero.jpg" 
            alt="Evento" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-2 text-gold">Hacemos tu evento único</h2>
          <p className="text-light mb-6">Servicios premium para que tu celebración sea inolvidable</p>
          <a href="#cotizacion" className="bg-primary text-white px-6 py-3 rounded-full font-semibold">
            Cotizá tu evento
          </a>
        </div>
      </section>

      {/* Categorías */}
      <section className="px-4 py-12 grid grid-cols-2 gap-4">
        {["Barra", "DJs", "Toldos", "Carpas", "Decoración"].map(cat => (
          <div key={cat} className="relative h-32 rounded-lg overflow-hidden group">
            <Image 
              src={`/${cat.toLowerCase()}.jpg`} 
              alt={cat} 
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold">{cat}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-grayDark py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-8 text-gold">¿Por qué elegirnos?</h3>
        <div className="grid gap-6">
          <div>
            <span className="text-primary text-4xl">⭐</span>
            <p className="mt-2">Calidad Premium</p>
          </div>
          <div>
            <span className="text-primary text-4xl">🎧</span>
            <p className="mt-2">Experiencia Garantizada</p>
          </div>
          <div>
            <span className="text-primary text-4xl">⚡</span>
            <p className="mt-2">Flexibilidad Total</p>
          </div>
        </div>
      </section>

      {/* CTA intermedio */}
      <section className="relative py-16 text-center">
        <div className="absolute inset-0">
          <Image 
            src="/cta.jpg" 
            alt="Reserva tu evento" 
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">¡Reservá tu fecha hoy mismo!</h3>
          <a href="#cotizacion" className="bg-primary px-6 py-3 rounded-full font-semibold">
            Solicitar cotización
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section id="cotizacion" className="px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-gold">Cotización rápida</h3>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded bg-grayDark border border-gray-700" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-grayDark border border-gray-700" />
          <input type="date" className="p-3 rounded bg-grayDark border border-gray-700" />
          <select className="p-3 rounded bg-grayDark border border-gray-700">
            <option>Servicio requerido</option>
            <option>Barra</option>
            <option>DJs</option>
            <option>Toldos</option>
            <option>Carpas</option>
            <option>Decoración</option>
          </select>
          <button className="bg-primary py-3 rounded font-semibold">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-8 text-center text-sm text-light">
        <p>© 2025 Eventos VIP. Todos los derechos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
      </footer>

    </main>
  );
}
