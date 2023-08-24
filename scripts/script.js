//alert ('Bienvenidos a mi tienda ');

/*let EleccionCategoria = parseInt (prompt('Elija la categoría :  \n 1 - Almohadas \n 2 - Pies de Cama \n 3 - Mantitas  \n 0 - Para salir. '));

    switch(EleccionCategoria) {

        case 1 :
            let almohada = prompt('Seleccionaste la categoria "Almohadas". \n ¡Tenemos una gran varidad disponible!. \n Selecciona: \n a - Almohadones 50x50. Precio $500 \n b - Almohadones 40x40. Precio $ 400 \n c - Almohadones para cama. Precio $ 300. \n d - Para salir');
    
            while (almohada !== 'd') {
    
                if (almohada == 'a') {
                    alert('Añadiste al carrito: $500.00');
                }
                else if (almohada == 'b') {
                    alert('Añadiste al carrito: $400.00');
                }
                else if (almohada == 'c') {
                    alert('Añadiste al carrito: $300.00');
                }
                
                else {
                    alert('Por favor seleciona una opción válida');
                }
                almohada = prompt('Seleccionaste la categoria "Almohadas". \n ¡Tenemos una gran varidad disponible!. \n Selecciona: \n a - Almohadones 50x50. Precio $500 \n b - Almohadones 40x40. Precio $ 400 \n c - Almohadones para cama. Precio $ 300. \n d - Para salir');
            }
            break
    
        case 2 :
            let piesdeCama = prompt('Seleccionaste la categoria "Pies de Cama". \n ¡Tenemos disponibles en color gris y mostaza!. \n Selecciona: \n a - Gris \n b - Mostaza \n d - Para salir');
            
            while (piesdeCama !== 'd') {
                
                if (piesdeCama == 'a') {
                    alert('Añadiste al carrito: $700.00');
                }
                else if (piesdeCama == 'b') {
                    alert('Añadiste al carrito: $700.00');
                }
                else {
                    alert('Por favor seleciona una opción válida');
                }
                piesdeCama = prompt('Seleccionaste la categoria "Pies de Cama". ¡Tenemos disponibles en color gris y mostaza!. \n Selecciona: \n a- Gris \n b - Mostaza \n d - Para salir');
            }
            break
            
            
    
        case 3:
            let mantita = prompt('Seleccionaste la categoria "Mantitas". ¡Tenemos disponibles en azul y blanca!. \n Selecciona: \n a - Azul. Precio $1.000 \n b - Blanca. Precio $1.100 \n d - Para salir');
            while (mantita != 'd'){
    
                if (mantita == 'a'){
                    alert ('Añadiste al carrito $1000.00');
                }
                else if (mantita == 'b'){
                    alert ('Añadiste al carrito $1100.00');
                }
                else if (mantita == 'd'){
                    alert('Chau');
                }
                else {
                    alert('Por favor, selecciona una opción válida.');
                }
                 mantita = prompt('Seleccionaste la categoria "Mantitas". ¡Tenemos disponibles en azul y blanca!. \n Selecciona: \n a- azul. Precio $1.000 \n b - blanca. Precio $1.100 \n d - Para salir');
            }
            break
    
        case 0:
            alert('!Gracias por visitarnos! Hasta luego');
            break
    
        default:
            prompt ('Por favor ingresa un número válido');
            break
    
    }*/
    


//Calculadora de envios dentro de Cordoba Capital

//El envio es gratis en Barrio Centro
//El costo de envio es de $500 Para, Gral Paz y Nueva Cordoba
//El costo de envio es de $800 Para Barrio Alberdi, Alto Gral Paz 
//El costo de envio es de $ 1500 para los demás
//El costo de envio es de $2000 para localidades del interior de Córdoba.

/*let precio;

function PrecioFinal ( medioPago, precio, porcentaje){
   if (medioPago == 'efectivo'){
    let descuento = (precio - precio * porcentaje / 100);
          return descuento;
   }
    
   else if (medioPago == 'tc'){
    let recargo = (precio + precio * porcentaje /100);
    return recargo
   }
   
    
}





let precio;
let PorcenjateDescuento ;
let PorcentajeRecargo ;

function descuento (precio, PorcenjateDescuento){
    let calculaDescuento = (precio - precio * PorcenjateDescuento / 100);
          return calculaDescuento;
          
}

function recargo (precio, PorcentajeRecargo){
    let calculaRecargo = (precio + precio * PorcentajeRecargo / 100);
          return calculaRecargo;
}


let MedioPago = prompt ('¿Cómo desea abonar el cliente? \n 1 - Efectivo, tranferencia, débito. \n 2 - Tarjeta de Crédito');

if (MedioPago == '1'){
    let PrecioDescuento = descuento (parseFloat(prompt ('Ingrese el precio del producto: ')) , (parseFloat(prompt ('Ingrese el Porcentaje de descuento: '))))
       alert(`Informar al cliente el precio final con el descuento efectivo/tranferencia es ${PrecioDescuento}`);
}
else if (MedioPago == '2'){
    let PrecioRecargo = recargo (parseFloat (prompt('Ingrese el precio del producto:')),parseFloat(prompt('Ingrese el porcentaje de recargo:')));
    alert (`Informar al cliente el precio final con el recargo por tarjeta de crédito es ${PrecioRecargo}`)

}*/
