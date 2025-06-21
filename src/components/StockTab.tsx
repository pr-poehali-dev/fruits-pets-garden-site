import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, RefreshCw } from "lucide-react";
import Icon from "@/components/ui/icon";

interface StockItem {
  id: string;
  name: string;
  image: string;
  inStock: boolean;
}

export function StockTab() {
  const [activeCategory, setActiveCategory] = useState("vegetables");
  const [timeLeft, setTimeLeft] = useState(300); // 5 минут в секундах
  const [stockData, setStockData] = useState<StockItem[]>([]);

  const categories = [
    { id: "vegetables", label: "Овощи" },
    { id: "fruits", label: "Фрукты" },
    { id: "flowers", label: "Цветы" },
  ];

  const getStockByCategory = (category: string): StockItem[] => {
    const stock = {
      vegetables: [
        {
          id: "carrot",
          name: "Carrot",
          image:
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "tomato",
          name: "Tomato",
          image:
            "https://images.unsplash.com/photo-1592841200221-4e2f8d09bdb4?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "potato",
          name: "Potato",
          image:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "cucumber",
          name: "Cucumber",
          image:
            "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "lettuce",
          name: "Lettuce",
          image:
            "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "onion",
          name: "Onion",
          image:
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
      ],
      fruits: [
        {
          id: "apple",
          name: "Apple",
          image:
            "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "banana",
          name: "Banana",
          image:
            "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "orange",
          name: "Orange",
          image:
            "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "strawberry",
          name: "Strawberry",
          image:
            "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "watermelon",
          name: "Watermelon",
          image:
            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
      ],
      flowers: [
        {
          id: "rose",
          name: "Rose",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "sunflower",
          name: "Sunflower",
          image:
            "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
        {
          id: "tulip",
          name: "Tulip",
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop",
          inStock: Math.random() > 0.5,
        },
      ],
    };

    return stock[category as keyof typeof stock] || [];
  };

  const updateStock = () => {
    setStockData(getStockByCategory(activeCategory));
    setTimeLeft(300);
  };

  useEffect(() => {
    updateStock();
  }, [activeCategory]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          updateStock();
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeCategory]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">Сток Grow a Garden</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Icon name="Timer" size={16} />
          <span>Обновление через: {formatTime(timeLeft)}</span>
          <Button variant="ghost" size="sm" onClick={updateStock}>
            <Icon name="RefreshCw" size={16} />
          </Button>
        </div>
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
        {stockData.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <Badge
                className={`absolute top-2 right-2 ${
                  item.inStock ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {item.inStock ? "ЕСТЬ" : "НЕТУ"}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-center">{item.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
