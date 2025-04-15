
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  features
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-2xl font-bold text-trnd-blue">{price} ريال</p>
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-2 text-sm">
            <h4 className="font-semibold">المميزات:</h4>
            <ul className="list-disc list-inside space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="w-full">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <>
                <span>إخفاء التفاصيل</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>عرض التفاصيل</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
        {isExpanded && (
          <Button className="w-full">شراء الآن</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
