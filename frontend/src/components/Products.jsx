import Product from "@/components/Product";
import Filter from "@/components/ProductFilter"

export default function Products() {
  return (
    <div className="pt-10 space-y-6">
      <h2>Recommended For You</h2>
      <Filter />
      <div className="grid grid-cols-3 gap-0 m-auto">
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
        <div>
            <Product />
        </div>
      </div>
    </div>
  );
}
