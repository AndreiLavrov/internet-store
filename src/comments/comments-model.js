import {MethodsAJAX} from "../methodsAJAX";
import {EventEmitter} from "../evente-emitter";

export class CommentsModel extends EventEmitter {
    constructor() {
        super();
        this.methodsAJAX = new MethodsAJAX();
    }

    /**
     * I receive comments for a specific product.
     * @param idProd -- number
     */
    getCommentsFromServer(idProd) {
        this.methodsAJAX.getDataFetch(`https://andreilavrov.github.io/internet-store/commentsProd${idProd}`)
            .then((arrComments) => {
                this.arrComments = arrComments;
                this.emit('getComments', arrComments);
            })
            .catch((e) => console.log(e))
    }

    /**
     * add a comment to the server
     * @param obj -- {name, text, indexProd};
     */
    sentComment(obj) {
        this.methodsAJAX.sendData(`https://andreilavrov.github.io/internet-store/commentsProd${obj.indexProd}`, obj)
            .then(() => {
                if (this.arrComments) {
                    this.arrComments.push(obj);
                    this.emit('getComments', this.arrComments);
                } else {
                    this.getCommentsFromServer(obj.indexProd);
                }
            })
            .catch((e) => console.log(e))
    }
}
