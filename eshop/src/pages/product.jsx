import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4001/api/products/${id}`)
const json = await response.json()
const product = json.data


document.querySelector('#root').innerHTML = render (
    <>
    <h1>{product.interpret} - {product.album} ({product.release})</h1>
    <img src={product.image} className="product-image"></img>
    <p className="product-genre">{product.genre}</p>
    <p className="product-distribution">{product.distribution}</p>
    <p className="product-price">{product.price}</p>
    </>
)

