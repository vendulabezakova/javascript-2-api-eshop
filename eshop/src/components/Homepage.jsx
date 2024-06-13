import Product from './Product';

export function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('URL_TVÉHO_API_ENDPOINTU');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) {
      return <div>Načítání...</div>;
    }
  
    if (error) {
      return <div>Chyba: {error}</div>;
    }
  
    return (
      <div className="home-page">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
          />
        ))}
      </div>
    );
  }