import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/product-grid";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
