import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
        />
        {isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}
        {isSale && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Sale
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <a href={`/products/${id}`} className="font-medium text-lg mb-2 hover:text-primary transition-colors">
          {name}
        </a>
        <div className="font-bold">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
