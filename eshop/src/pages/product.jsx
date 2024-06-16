import { render } from '@czechitas/render';
import './product.css';
import '../global.css';


const params = new URLSearchParams(window.location.search); //extrahuje vybrané parametry z URL
const id = params.get('id');

//fetch jednoho alba:
const response = await fetch(`http://localhost:4001/api/products/${id}`)
const json = await response.json()
const products = json.data

document.querySelector('#root').innerHTML = render (
    <>
    <h1>{products.interpret} - {products.album}</h1>
    <table className="interpret-table">
        <tr>
            <td>Interpret</td>
            <td>{products.interpret}</td>
        </tr>
        <tr>
            <td>Album</td>
            <td>{products.album}</td>
        </tr>
        <tr>
            <td>Year of release</td>
            <td>{products.release}</td>
        </tr>
        <tr>
            <td>Genre:</td>
            <td>{products.genre}</td>
        </tr>
        <tr>
            <td>Label:</td>
            <td>{products.distribution}</td>
        </tr>
    </table>
    <p className="product-price">{products.price}</p>
    <a href="#"><button>Buy now</button></a>
    </>
)

document.querySelector('#detail-img').innerHTML = render (
    <>
    <img src={products.image}/>
    
    </>
)