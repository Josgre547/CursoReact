import {FaOpencart} from "react-icons/fa";
export const CartWidget =({items}) =>{
     return  <div className="container">
          <FaOpencart style={{fontSize:50, color:'red'}}/>
          ({items})
          </div>
}