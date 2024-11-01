import { Link } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    return (
        <div className={"text-center border"}>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
