let money = prompt('Cuanto dinero tienes');

if (money<10){
    document.write("Wtf, no te alcanza pa nah");
}
else if(money>=10 && money<15){
    document.write("Te alcanza para paleta de hielo");
}
else if(money>=15 && money<20){
    document.write("Te alcanza para nieve");
}
else if(money>=20){
    document.write("Te alcanza para todo");
}