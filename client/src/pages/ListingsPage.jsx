import { useEffect, useState } from "react";
import API from "../services/api";
import Button from "../components/Button";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";

const ListingsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/products", {
        params: { page, sort, category },
      });
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, sort, category]);

  return (
    <div>
      {/* Add NavBar */}
      <NavBar setProducts={setProducts} />
      <div className="p-6">
        <h1 className="text-3xl mb-6">Product Listings</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="mr-2">Sort By:</label>
            <select
              className="border border-gray-300 px-2 py-1 rounded"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">None</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div>
            <label className="mr-2">Category:</label>
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded"
              placeholder="Search category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Manufacturer</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Availability</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td className="px-4 py-2 border">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.Manufacturer}</td>
                  <td className="px-4 py-2 border">{product.description}</td>
                  <td className="px-4 py-2 border">{product.category}</td>
                  <td className="px-4 py-2 border">${product.price}</td>
                  <td className="px-4 py-2 border">{product.Availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <p>
            Page {page} of {totalPages}
          </p>
          <Button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ListingsPage;
