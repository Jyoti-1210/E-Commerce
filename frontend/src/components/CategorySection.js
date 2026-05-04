import ProductCard from "./ProductCard";

import SubCategoryBar from "./SubCategoryBar";

function CategorySection({ title, products }) {

  return (

    <div className="mb-5">

      <h2 className="mb-4 text-capitalize fw-bold">
        {title}
      </h2>

      <SubCategoryBar products={products} />

      <div className="row">

        {products.map((product) => (

          <ProductCard
            key={product._id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}

export default CategorySection;