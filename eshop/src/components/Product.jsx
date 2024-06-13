import { render } from '@czechitas/render';

export function Product({ interpret, album, price, image, release, distribution, genre}) {
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