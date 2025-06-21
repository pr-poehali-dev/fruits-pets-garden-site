import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { StockTab } from "@/components/StockTab";
import { PurchasesTab } from "@/components/PurchasesTab";
import { FaqTab } from "@/components/FaqTab";
import { ProfileTab } from "@/components/ProfileTab";

export function Navigation() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">🌱 Grow Garden</h1>
        <p className="text-muted-foreground">
          Фермерский маркетплейс с прозрачными продажами
        </p>
      </div>

      <Tabs defaultValue="stock" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="stock">Сток</TabsTrigger>
          <TabsTrigger value="purchases">Покупки</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="profile">Профиль</TabsTrigger>
        </TabsList>

        <TabsContent value="stock">
          <StockTab />
        </TabsContent>

        <TabsContent value="purchases">
          <PurchasesTab />
        </TabsContent>

        <TabsContent value="faq">
          <FaqTab />
        </TabsContent>

        <TabsContent value="profile">
          <ProfileTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
