import { useParams } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

interface ProductDetailsProps {
    products: Product[];
}

const ProductDetails = ({ products }: ProductDetailsProps) => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((product) => product.id === parseInt(id || "", 10));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="border w-full">
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p className={"text-left"}>Description: {product.description}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductDetails;
