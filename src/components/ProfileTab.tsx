import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Camera, CreditCard, Package } from "lucide-react";

export function ProfileTab() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Профиль продавца</h2>
        <p className="text-muted-foreground">
          Управляйте своими товарами и продажами
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Информация о продавце
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Ферма Солнечная</p>
                <p className="text-sm text-muted-foreground">
                  Проверенный продавец
                </p>
                <Badge className="mt-1 bg-green-500">✓ Верифицирован</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Рейтинг: 4.8/5 (124 отзыва)
                </p>
                <p className="text-sm text-muted-foreground">
                  На платформе с марта 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Верификация товаров
            </CardTitle>
            <CardDescription>
              Загрузите фото для подтверждения наличия товара
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Загрузить фото товара
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Способы оплаты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Банковские карты</span>
                <Badge variant="outline">Активно</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Зарубежные карты</span>
                <Badge variant="outline">Активно</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Банковский перевод</span>
                <Badge variant="outline">Активно</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Мои товары
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Активных объявлений: 12</p>
              <p className="text-sm">Продано за месяц: 48 товаров</p>
              <p className="text-sm">Выручка: 12 450 ₽</p>
              <Button className="w-full mt-4">Добавить товар</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
