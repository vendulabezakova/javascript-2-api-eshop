import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4001/api/products")
const json = await response.json()

const product = json.data

//console.log(product)

/*document.querySelector('#root').innerHTML = render (
    <>
        {
            product.map((item) => (
                <div key={item.id}><a href={`product.html?id=${item.id}`}>{item.interpret} - {item.album}</a></div>
            ))
        }
    </>
)*/

document.querySelector('#root').innerHTML = render (
    <>
        {
            product.map((item) => (
                <div key={item.id}>
                <div className="product">
                <img src={item.image} />
                <h2>{item.interpret} - {item.album}</h2>
                <p className="product-release">Year of release: {item.release}</p>
                <p className="product-genre">Genre: {item.genre}</p>
                <p className="product-distribution">{item.distribution}</p>
                <p className="product-price">{item.price}</p>
                <a href={`product.html?id=${item.id}`}><button>More info</button></a>
            </div>
            </div>
            ))
        }
    </>
)
