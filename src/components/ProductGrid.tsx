import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CheckCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  seller: string;
  verified: boolean;
  description: string;
}

interface ProductGridProps {
  category: string;
  showPurchaseMode?: boolean;
}

export function ProductGrid({
  category,
  showPurchaseMode = false,
}: ProductGridProps) {
  const getProductsByCategory = (category: string): Product[] => {
    const products = {
      fruits: [
        {
          id: "1",
          name: "Свежие томаты",
          image:
            "https://images.unsplash.com/photo-1592841200221-4e2f8d09bdb4?w=300&h=300&fit=crop",
          price: "150 ₽/кг",
          seller: "Ферма Солнечная",
          verified: true,
          description: "Сочные грунтовые томаты",
        },
        {
          id: "2",
          name: "Огурцы свежие",
          image:
            "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
          price: "120 ₽/кг",
          seller: "Эко-сад",
          verified: true,
          description: "Хрустящие огурцы без химии",
        },
        {
          id: "3",
          name: "Морковь молодая",
          image:
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop",
          price: "80 ₽/кг",
          seller: "Деревенский двор",
          verified: true,
          description: "Сладкая молодая морковь",
        },
      ],
      herbs: [
        {
          id: "4",
          name: "Укроп свежий",
          image:
            "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=300&h=300&fit=crop",
          price: "40 ₽/пучок",
          seller: "Зеленый дом",
          verified: true,
          description: "Ароматный свежий укроп",
        },
        {
          id: "5",
          name: "Петрушка",
          image:
            "https://images.unsplash.com/photo-1551254260-8e5e2b5d4b5e?w=300&h=300&fit=crop",
          price: "35 ₽/пучок",
          seller: "Био-ферма",
          verified: true,
          description: "Свежая кудрявая петрушка",
        },
      ],
      eggs: [
        {
          id: "6",
          name: "Яйца куриные",
          image:
            "https://images.unsplash.com/photo-1518569656473-ba7cc39ef3b3?w=300&h=300&fit=crop",
          price: "80 ₽/десяток",
          seller: "Домашняя птица",
          verified: true,
          description: "Свежие домашние яйца",
        },
      ],
    };

    return products[category as keyof typeof products] || [];
  };

  const products = getProductsByCategory(category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-square relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.verified && (
              <Badge className="absolute top-2 right-2 bg-green-500">
                <CheckCircle className="w-3 h-3 mr-1" />
                Проверено
              </Badge>
            )}
          </div>

          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {product.description}
            </p>
            <p className="text-sm text-muted-foreground">от {product.seller}</p>
            <p className="text-xl font-bold text-primary mt-2">
              {product.price}
            </p>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full"
              variant={showPurchaseMode ? "default" : "outline"}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {showPurchaseMode ? "Купить" : "В корзину"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
