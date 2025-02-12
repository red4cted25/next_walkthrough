import Link from 'next/link'
import { products } from '../data/products'

export default function ProductsPage() {
    return (
        <div className="container flex justify-center">
            <h1 className="m-2 border-2">Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className='border-2 m-2 p-2'>
                        <Link href={`/products/${product.id}`} >{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}