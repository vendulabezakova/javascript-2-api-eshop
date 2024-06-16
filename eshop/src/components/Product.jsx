import { render } from '@czechitas/render';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4001/api/products/${id}`)
const json = await response.json()
const product = json.data

document.querySelector('#root').innerHTML = render (
  <>
  <h1>{product.interpret} - {product.album} ({product.release})</h1>
  <img src={product.image}></img>
  </>
)

/*export function Product({ interpret, album, price, image, release, distribution, genre}) {
    return (
      <div className="product">
        <img src={image} className="product-image" />
        <h2 className="product-interpret">{interpret}</h2>
        <p className="product-album">{album}</p>
        <p className="product-release">{release}</p>
        <p className="product-genre">{genre}</p>
        <p className="product-distribution">{distribution}</p>
        <p className="product-price">{price}</p>
      </div>
    );
  }

*/

