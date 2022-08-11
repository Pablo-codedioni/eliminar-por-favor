class Producto {
    constructor(name, price, fecha) {

        this.name = name;
        this.price = price;
        this.fecha = fecha;

    }
}
class UI {
    addProduct(product){
       const producList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML=`

        <div class="card text-center mb-4">
        <div class="card-boody">
            <strong>Producto Name </strong>:${product.name}
            <strong>Producto price </strong>:${product.price}
            <strong>Producto year </strong>:${product.fecha}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>

        </div>

         </div>
        
        `;
        producList.appendChild(element);

    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
        }

    }
    showMessage(){

    }
}

//Dom EVENt

document.getElementById('product-form').addEventListener('submit' ,function(e){
   const name= document.getElementById('name').value;
   const price= document.getElementById('price').value;
   const fecha= document.getElementById('fecha').value;
   console.log(name,price,fecha)

   const product = new Producto(name, price, fecha);
   
   console.log(product)
   const ui  = new UI();
   ui.addProduct(product);

   e.preventDefault();
});

document.getElementById('product-list').addEventListener('click',function(e){
    const ui  = new UI();
   ui.deleteProduct(e.target);
});