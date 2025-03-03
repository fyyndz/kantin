import { useState } from "react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Electronics",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Electronics",
    isSale: true,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Sports",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 49.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Home",
    isSale: true,
  },
  {
    id: 5,
    name: "Backpack",
    price: 39.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Fashion",
  },
  {
    id: 6,
    name: "Smartphone",
    price: 699.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Electronics",
    isNew: true,
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 29.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Sports",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 24.99,
    image: `https://picsum.photos/300/300?random=${Math.random()}`,
    category: "Home",
  },
]

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const [category, setCategory] = useState("all")

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category.toLowerCase() === category.toLowerCase())

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0
  })

  const categories = ["all", ...new Set(products.map((product) => product.category.toLowerCase()))]

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

