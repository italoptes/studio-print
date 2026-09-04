import { useState } from 'react';
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
    id: 'camisas-dtf',
    name: 'Camisas DTF',
    icon: Shirt,
    description: 'Camisas com estampa DTF de alta qualidade',
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

  const current = categories.find((c) => c.id === activeCategory);

  return (
    <section className="products" id="produtos">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <p className="products-subtitle">
          Tudo personalizado do jeitinho que você imaginar
        </p>

        <div className="category-tabs" role="tablist">
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

        <div className="product-gallery" role="tabpanel" aria-labelledby={`tab-${activeCategory}`}>
          <div className="product-grid" key={activeCategory}>
            {current.images.length > 0 ? (
              current.images.map((img, i) => (
                <div className="product-card" key={i}>
                  <div className="product-card-image">
                    <img src={img.src} alt={img.alt} loading="lazy" />
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
