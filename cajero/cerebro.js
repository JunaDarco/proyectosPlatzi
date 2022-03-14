const input = document.querySelector('#monto')
const boton = document.querySelector('#boton')
const contenedor = document.querySelector('#output')
const total = document.querySelector('#total')
const resta = document.querySelector('#restado')

class Billete {
    constructor(v,c) {
        this.valor = v;
        this.cantidad = c;
    }
}

let cajero = []
cajero.push(new Billete(50, 50))
cajero.push(new Billete(20, 50))
cajero.push(new Billete(10, 50))

generarTotal()
generarHistorial()

boton.addEventListener('click', (e) => {
    const billetes = generarEntrega(input.value)
    
    if(typeof billetes === 'string') {
        contenedor.innerHTML = '<p>No tenemos forma de darte esa cantidad, lo sentimos </p>'
    }else{
        contenedor.innerHTML = '<h2>Salida: </h2>'
        billetes.forEach(b => {   
            container = document.createElement('div')
            container.className = 'billetes' 
            if (b.cantidad) {
                if (b.cantidad > 4) {
                    generarBilletes(4,billetes)
                    console.log('si');
                }else if (b.cantidad < 4){
                    generarBilletes(b.cantidad,billetes)
                    console.log('no')
                }
                contenedor.appendChild(container)
                if(b.cantidad - 4 > 0){
                    n = document.createElement('p')
                    n.textContent =  `+ ${b.cantidad - 4}`
                    container.appendChild(n) 
                }
            }  
        })
    }

    generarTotal()

    generarHistorial()
})
function generarBilletes(cantidad,billete) {
    for (let i = 0; i < cantidad; i++) {
        billete = document.createElement('img')
        billete.src = 'billete' + b.valor + '.png'
        container.appendChild(billete)      
    }
}
function generarHistorial(){
    let r = document.createElement('li')
    console.log(resta.textContent);
    if(resta.textContent == ''){
        r.textContent = '...........................................'
    }else{
        if (resta.textContent === '...........................................'){
            resta.children[0].remove()
        }
        r.textContent = input.value + '$'
    }
    resta.appendChild(r)
}
function generarTotal() {
    let t = 0
    for(b of cajero){
        t += b.valor * b.cantidad;    
    } 

    total.textContent = t + '$'
}

function generarEntrega(dinero) {
    e = []
    for(b of cajero) {
        if (dinero) {
            div = Math.floor(dinero / b.valor)
            if (div > b.cantidad) {
                p = b.cantidad
            }else{
                p = div
            }
            if (p) {
                e.push(new Billete(b.valor,p))
                dinero -= b.valor * p
            }     
        }
    }
    if (!dinero) {
        for(b of e){
            for (let i = 0; i < cajero.length; i++) {
                if(cajero[i].valor == b.valor){
                    cajero[i].cantidad -= b.cantidad
                }
            }
        }
        return e
    }else{
        return 'No tenemos saldo suficiente'
    }
}



