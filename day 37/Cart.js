function Cart(){
    var items=['Tv','Laptop','AC','Mobile','Fan'];
    var cart=[];
    return(
        <div>
            <h2>Cart Items :-</h2>
            <table style={{margin:'10px'}}>
                <tbody>
                {
                    items.map((item,index)=>
                        <tr key={index}>
                            <td>{item}</td> 
                            <td style={{padding:'10px'}}><button className="btn btn-success">Add {item} to cart</button></td>
                        </tr>
                        
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default Cart;