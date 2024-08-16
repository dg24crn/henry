class CarritoCompra {
    constructor(){
        this.products = []
    }
    agregarProducto(product) {
        this.products.push(product)
    }
    calcularTotal() {
        let total = 0
        for (const product of this.products) {
            total = total + product.price
        }
        return total
    }
    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal()
        const descuento = (porcentaje / 100) * total
        return total - descuento
    }
}

module.exports = CarritoCompra
