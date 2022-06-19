function cargarProductos(prod:string[]):void{
for(let i: number=0;i <prod.length;i++){
prod[i]= prompt("ingrese producto");
}
}
let cantDeProductos: number= Number(prompt("ingrese cantidad"));
let productos : string[]= new Array(cantDeProductos);
let PrecioUnit: number[]= new Array(cantDeProductos);
let stockD: number[]= new Array(cantDeProductos);
let subtotal: number=0;
let total: number=0;
let descuento: number=0.1;


