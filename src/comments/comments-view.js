import {EventEmitter} from "../evente-emitter";

export class CommentsView extends EventEmitter {
    constructor() {
        super();
        // this.comments
    }

    showComments(comments) {
        if(comments == []) return;
        const listUnstyled = document.querySelector('.commentsModal .list-unstyled');
        listUnstyled.innerHTML = '';
        const commentsTemplate = `{{#each this}} 
        <li class="media">
            <img class="mr-3" src="../assets/images/user-ava.png" height="50rem" alt="image">
            <div class="media-body">
            <h5 class="mt-0 mb-1">{{name}}</h5>
            <div class="spanTextComment"> {{text}}</div>   
            </div>
        </li>
                {{/each}}`;

    const theTemplate = Handlebars.compile(commentsTemplate);

    this.savedProductsHtml = theTemplate(comments);
    listUnstyled.innerHTML = this.savedProductsHtml;
    }

    addIndexButSentComm(id, userLogEmail) {
        const butSentComment = document.querySelector('.commentsModal .butSentComment');
        butSentComment.setAttribute('data-index', `${id}`);
        this.sentComment(userLogEmail);

    }

    sentComment(userLogEmail) {                  // add change validation(space, count comments, empty comm)..
        const butSentComment = document.querySelector('.commentsModal .butSentComment');
        butSentComment.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
          const text = document.querySelector('.commentsModal textarea').value;

          this.objComment = {
              name: userLogEmail,
              text,
              indexProd: index,
          };

            this.emit('sentComment', this.objComment);
        });
    }
}
