import {CartWidget} from "../CartWidget/CartWidget";
export const NavBar =() =>{
     return (
          <header>
               <div className="container">
                    <div style={{
                    backgroundColor: 'black',
                    height: '5rem',
                    width: '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'}}>
                         <span style={{fontSize:30, fontweight: "bolder"}}>Driver's Tech</span>
                         <nav style={{
                         height: '5rem',
                         width: '10rem',
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         gap: 10}}>
                              <a link href="http://">Inicio</a>
                              <a link href="http://">Tienda</a>
                              <a link href="http://">Carrito
                              <CartWidget items={5} />
                              </a>
                         </nav>
                    </div>
               </div>
          </header>
     )
};