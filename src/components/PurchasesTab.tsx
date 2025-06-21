import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

export function PurchasesTab() {
  const [activeCategory, setActiveCategory] = useState("fruits");

  const categories = [
    { id: "fruits", label: "Фрукты/Овощи" },
    { id: "herbs", label: "Зелень" },
    { id: "eggs", label: "Яйца" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">Покупки</h2>
        <p className="text-muted-foreground">
          Найдите свежие продукты от проверенных фермеров
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
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

      <ProductGrid category={activeCategory} showPurchaseMode={true} />
    </div>
  );
}
