import {MethodsAJAX} from "../methodsAJAX";
import {EventEmitter} from "../evente-emitter";

export class CommentsModel extends EventEmitter{
    constructor(){
        super();
        this.methodsAJAX = new MethodsAJAX();
        // this.comments
    }

    /**
     * I reduce the parameter as in the array the count is from scratch
     * @param idProd
     */
    getCommentsFromServer(idProd) {
        this.idProd = idProd;
        this.methodsAJAX.getDataFetch(`http://localhost:3006/commentsProd${idProd}`)
            .then((comments) => {
                this.emit('getComments', comments);
            })
            .catch((e) => console.log(e))
    }

    sentComment(obj) {
        this.methodsAJAX.sendData(`http://localhost:3006/commentsProd${obj.indexProd}`, obj)
            .then((comments) => {
                this.getCommentsFromServer(this.idProd);
            })
            .catch((e) => console.log(e))
    }
}
