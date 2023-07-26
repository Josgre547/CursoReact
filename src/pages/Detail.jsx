import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getArticulo } from "../lib/articulos.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [articulo, setArticulo] = useState({});


  useEffect(() => {
    getArticulo(+id).then((res) => {
      setArticulo(res);
    });
  }, []);

  if(!Object.keys(articulo).length) return

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={articulo.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{articulo.title} </span>

          <p className="detail__info-description">{articulo.description}</p>

          <span className="detail__info-price">
            $
            {(articulo.price || 0).toLocaleString("es-ES", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡ULTIMOS {articulo.stock}!</span>

          <ItemCount stock={articulo.stock} onAdd={() => alert("GRACX POR TU COMPRA!!")} />
        </div>
      </div>
    </div>
  );
};
