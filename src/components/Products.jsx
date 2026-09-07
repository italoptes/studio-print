import { useState, useRef, useEffect } from 'react';
import {
  CircleDot,
  Shirt,
  ShoppingBag,
  KeyRound,
  Baby,
  Coffee,
  Footprints,
  MessageCircle,
} from 'lucide-react';
import './Products.css';

const categories = [
  {
    id: 'bottons',
    name: 'Bottons',
    icon: CircleDot,
    description: 'Bottons personalizados para qualquer ocasião',
    images: [
      { src: '/images/bottons1.jpg', alt: 'Bottons personalizados' },
      { src: '/images/bottons2.jpg', alt: 'Bottons personalizados' },
      { src: '/images/bottons3.jpg', alt: 'Bottons personalizados' },
      { src: '/images/bottons4.jpg', alt: 'Bottons personalizados' },
    ],
  },
  {
    id: 'body-bebe',
    name: 'Bodys de Bebê',
    icon: Baby,
    description: 'Bodys personalizados com muito carinho',
    images: [
      { src: '/images/body-bebe1.jpg', alt: 'Body de bebê personalizado' },
      { src: '/images/body-bebe2.jpg', alt: 'Body de bebê personalizado' },
      { src: '/images/body-bebe3.jpg', alt: 'Body de bebê personalizado' },
      { src: '/images/body-bebe4.jpg', alt: 'Body de bebê personalizado' },
    ],
  },
  {
    id: 'ecobags',
    name: 'Ecobags',
    icon: ShoppingBag,
    description: 'Ecobags personalizadas e sustentáveis',
    images: [
      { src: '/images/ecobag1.jpg', alt: 'Ecobag personalizada' },
    ],
  },
  {
    id: 'dtf',
    name: 'DTF',
    icon: Shirt,
    description: 'Estampa DTF de alta qualidade',
    images: [],
  },
  {
    id: 'camisas-sublimadas',
    name: 'Sublimação',
    icon: Shirt,
    description: 'Camisas sublimadas com cores vibrantes',
    images: [],
  },
  {
    id: 'chaveiros',
    name: 'Chaveiros',
    icon: KeyRound,
    description: 'Chaveiros personalizados únicos',
    images: [],
  },
  {
    id: 'ceramicas',
    name: 'Cerâmicas',
    icon: Coffee,
    description: 'Canecas e peças em cerâmica personalizada',
    images: [],
  },
  {
    id: 'chinelos',
    name: 'Chinelos',
    icon: Footprints,
    description: 'Chinelos personalizados com seu estilo',
    images: [],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('bottons');
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const tabsRef = useRef(null);

  const current = categories.find((c) => c.id === activeCategory);

  const handleScroll = () => {
    if (!tabsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
    // Margem de erro de 5px para checar se chegou no final
    setIsScrolledToEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5);
  };

  useEffect(() => {
    // Scroll hint (bump animado) na montagem do componente se estiver no mobile
    const checkAndBump = () => {
      if (tabsRef.current && window.innerWidth <= 768) {
        // Checa inicial se precisa esconder o fade logo de cara
        handleScroll();
        
        // Faz o bump
        setTimeout(() => {
          if (tabsRef.current && tabsRef.current.scrollLeft === 0) {
            tabsRef.current.scrollTo({ left: 35, behavior: 'smooth' });
            setTimeout(() => {
              if (tabsRef.current) {
                tabsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }, 400);
          }
        }, 1000);
      }
    };
    checkAndBump();
  }, []);

  return (
    <section className="products" id="produtos">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <p className="products-subtitle">
          Tudo personalizado do jeitinho que você imaginar
        </p>

        <div className="category-tabs-wrapper">
          <div 
            className="category-tabs" 
            role="tablist"
            ref={tabsRef}
            onScroll={handleScroll}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  className={`category-tab${activeCategory === cat.id ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  id={`tab-${cat.id}`}
                >
                  <Icon size={16} />
                  {cat.name}
                </button>
              );
            })}
          </div>
          {!isScrolledToEnd && <div className="category-tabs-fade"></div>}
        </div>

        <div className="product-gallery" role="tabpanel" aria-labelledby={`tab-${activeCategory}`}>
          <div className="product-grid" key={activeCategory}>
            {current.images.length > 0 ? (
              current.images.map((img, i) => (
                <div className="product-card" key={i}>
                  <div className="product-card-image">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                  <div className="product-card-info">
                    
                    <a
                      href={`https://wa.me/5583981513223?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(current.name)}!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card-cta"
                    >
                      <MessageCircle size={14} />
                      Pedir pelo WhatsApp
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="product-card">
                <div className="product-card-image">
                  <div className="product-placeholder">
                    {(() => {
                      const Icon = current.icon;
                      return <Icon size={56} className="placeholder-icon" />;
                    })()}
                  </div>
                </div>
                <div className="product-card-info">
                  <h3>{current.name}</h3>
                  <p>{current.description}</p>
                  <a
                    href={`https://wa.me/5583981513223?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(current.name)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-cta"
                  >
                    <MessageCircle size={14} />
                    Pedir pelo WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
