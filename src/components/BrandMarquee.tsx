
import { useRef } from 'react';

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
}

interface BrandMarqueeProps {
  brands: Brand[];
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ brands }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const duplicatedBrands = [...brands, ...brands];
  
  return (
    <div className="w-full bg-trnd-lightgray py-8">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-6">عملاؤنا</h2>
        <div className="w-full overflow-hidden scroll-container">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="h-16 w-32 flex items-center justify-center">
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="sr-only">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
