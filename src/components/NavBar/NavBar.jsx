export const NavBar =() =>{
     return (
          <header>
               <div className="container">
                    <div
                    style={{
                         display: "flex",
                         justifyContent: "space-betrween",
                    }}
                    >
                         <span style={{fontSize:18, fontweight: "bolder"}}>Gandhi</span>
                         <nav>
                              <a>Misterio</a>
                              <a>Terror</a>
                         </nav>
                    </div>
               </div>
          </header>
     )
};