import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

export function StockTab() {
  const [activeCategory, setActiveCategory] = useState("fruits");

  const categories = [
    { id: "fruits", label: "Фрукты/Овощи" },
    { id: "herbs", label: "Зелень" },
    { id: "eggs", label: "Яйца" },
  ];

  return (
    <div className="space-y-6">
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

      <ProductGrid category={activeCategory} />
    </div>
  );
}
