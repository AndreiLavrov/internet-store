import {EventEmitter} from '../evente-emitter';
import {MethodsAJAX} from '../methodsAJAX';

export class ProductsModel extends EventEmitter {
    constructor() {
        super();
        this.methodsAJAX = new MethodsAJAX();
        this.allProducts = [];

    }

    /**
     * get Products
     */
    getProducts() {
        if (this.allProducts.length && this.allProducts.length > 0) {
            this.emit('productsReceived', this.allProducts);

        } else {
            this.getProdPromise()
                .then(() => {

                    this.emit('productsReceived', this.allProducts);
                });
        }
    }

    /**
     * get Products from server
     * @returns {Promise<T | never> | *}
     */
    getProdPromise() {
        return this.methodsAJAX.getDataFetch('https://andreilavrov.github.io/internet-store/products')
            .then((products) => {
                this.allProducts = products;
            });
    }

}
