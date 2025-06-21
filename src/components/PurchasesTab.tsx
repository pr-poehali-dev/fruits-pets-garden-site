import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import Icon from "@/components/ui/icon";

interface PurchaseItem {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  available: boolean;
}

export function PurchasesTab() {
  const [activeCategory, setActiveCategory] = useState("vegetables");

  const categories = [
    { id: "vegetables", label: "Овощи" },
    { id: "fruits", label: "Фрукты" },
    { id: "flowers", label: "Цветы" },
  ];

  const getItemsByCategory = (category: string): PurchaseItem[] => {
    const items = {
      vegetables: [
        {
          id: "carrot",
          name: "Carrot",
          image:
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop",
          price: 50,
          currency: "🌱",
          available: true,
        },
        {
          id: "tomato",
          name: "Tomato",
          image:
            "https://images.unsplash.com/photo-1592841200221-4e2f8d09bdb4?w=300&h=300&fit=crop",
          price: 75,
          currency: "🌱",
          available: true,
        },
        {
          id: "potato",
          name: "Potato",
          image:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
          price: 40,
          currency: "🌱",
          available: true,
        },
        {
          id: "cucumber",
          name: "Cucumber",
          image:
            "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
          price: 60,
          currency: "🌱",
          available: true,
        },
        {
          id: "lettuce",
          name: "Lettuce",
          image:
            "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
          price: 35,
          currency: "🌱",
          available: true,
        },
        {
          id: "onion",
          name: "Onion",
          image:
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&h=300&fit=crop",
          price: 30,
          currency: "🌱",
          available: true,
        },
      ],
      fruits: [
        {
          id: "apple",
          name: "Apple",
          image:
            "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
          price: 80,
          currency: "🌱",
          available: true,
        },
        {
          id: "banana",
          name: "Banana",
          image:
            "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
          price: 90,
          currency: "🌱",
          available: true,
        },
        {
          id: "orange",
          name: "Orange",
          image:
            "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
          price: 85,
          currency: "🌱",
          available: true,
        },
        {
          id: "strawberry",
          name: "Strawberry",
          image:
            "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
          price: 120,
          currency: "🌱",
          available: true,
        },
        {
          id: "watermelon",
          name: "Watermelon",
          image:
            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=300&fit=crop",
          price: 150,
          currency: "🌱",
          available: true,
        },
      ],
      flowers: [
        {
          id: "rose",
          name: "Rose",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
          price: 200,
          currency: "🌱",
          available: true,
        },
        {
          id: "sunflower",
          name: "Sunflower",
          image:
            "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=300&fit=crop",
          price: 180,
          currency: "🌱",
          available: true,
        },
        {
          id: "tulip",
          name: "Tulip",
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop",
          price: 160,
          currency: "🌱",
          available: true,
        },
      ],
    };

    return items[category as keyof typeof items] || [];
  };

  const items = getItemsByCategory(activeCategory);

  const handlePurchase = (item: PurchaseItem) => {
    alert(`Покупка ${item.name} за ${item.price}${item.currency}!`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">Покупки в Grow a Garden</h2>
        <p className="text-muted-foreground">
          Покупайте семена и растения для вашего сада
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.available && (
                <Badge className="absolute top-2 right-2 bg-green-500">
                  Доступно
                </Badge>
              )}
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-xl font-bold text-primary">
                {item.price} {item.currency}
              </p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                onClick={() => handlePurchase(item)}
                disabled={!item.available}
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
