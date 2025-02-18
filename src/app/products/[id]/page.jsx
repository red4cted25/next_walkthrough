import Image from 'next/image'
import { products } from "../../data/products"

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }))
}

export default async function ProductPage({ params }) {
    // Fetch product data from your API or data source here
    const paramId = await params;
    const product = products.find((p) => p.id === paramId.id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className="container flex flex-col item-center">
            <Image src={product.image} alt={product.name} width={100} height={200} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
}