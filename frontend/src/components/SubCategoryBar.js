function SubCategoryBar({ products }) {

  const grouped = {};

  products.forEach((p) => {

    if (!grouped[p.subcategory]) {

      grouped[p.subcategory] = p;
    }
  });

  return (

    <div className="d-flex gap-4 overflow-auto mb-4 pb-2">

      {Object.values(grouped).map((item) => (

        <div
          key={item.subcategory}
          className="text-center"
          style={{ minWidth: "100px" }}
        >

          <img
            src={item.images[0]}
            alt={item.subcategory}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <p className="mt-2 small fw-bold">
            {item.subcategory}
          </p>

        </div>
      ))}

    </div>
  );
}

export default SubCategoryBar;