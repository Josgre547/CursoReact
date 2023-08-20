import { useEffect, useState, useCallback } from "react";
import { ItemCount, Loader } from "../components";
import { getArticulo } from "../lib/articulos.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";


export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articulo, setArticulo] = useState({});

  const { addProduct, itemInCart } = useCartContext();

  useEffect(() => {
    getArticulo(id).then((res) => {
      if(!res) return navigate('/');
      setArticulo(res);
    });
  }, []);

  const handleAdd = useCallback(
    (qty) => {
      addProduct(articulo, qty);
    },
    [addProduct, articulo]
  );

  if (!Object.keys(articulo).length) return <Loader />;

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
            {(articulo.price || 0).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <ItemCount
            stock={articulo.stock - (itemInCart?.(id)?.qty || 0)}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};
