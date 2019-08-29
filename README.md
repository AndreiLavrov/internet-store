# internet-store

### Description:
This is single page application using JSON-server.

### Technology: 
HTML5, CSS, JS, jQuery, Bootstrap4, Local Storage.

### Visual representation(no hosting - need to run locally):
[internet-store](https://andreilavrov.github.io/internet-store).

### Site appearance photo:
![major](./screenshots/major.png)
![filter-news](./screenshots/filter-news.png)
![products-without-login](./screenshots/products-without-login.png)
![products-with-login](./screenshots/products-with-login.png)
![cart](./screenshots/cart.png)
![login](./screenshots/login.png)
![mobile](./screenshots/mobile.png)
![comments](./screenshots/comments.png)

### Browsers support:
Last versions of Chrome, Firefox, Safari, Edge.

### Structure:
 * [assets](./assets)
   * [css](./assets/css)
     * [styles.css](./assets/css/styles.css)
   * [images](./assets/images)
     * [img-products](./assets/images/img-products)
     * [news-photo](./assets/images/news-photo)
 * [screenshots](./screenshots)
 * [src](./src)
   * [about](./src/about)
     * [about-model.js](./src/about/about-model.js)
     * [about-view.js](./src/about/about-view.js)
   * [cart](./src/cart)
     * [cart-model.js](./src/cart/cart-model.js)
     * [cart-view.js](./src/cart/cart-view.js)
   * [comments](./src/comments)
     * [comments-model.js](./src/comments-model.js)
     * [comments-view.js](./src/comments-view.js)
   * [login](./src/login)
     * [login-model.js](./src/comments/login-model.js)
     * [login-view.js](./src/comments/login-view.js)
   * [news](./src/news)
     * [news-model.js](./src/news/news-model.js)
     * [news-view.js](./src/news/news-view.js)
   * [products](./src/products)
     * [products-model.js](./src/products/products-model.js)
     * [products-view.js](./src/products/products-view.js)
   * [app-module.js](./src/app-module.js)
   * [app.js](./src/app.js)
   * [evente-emitter.js](./src/evente-emitter.js)
   * [methodsAJAX.js](./src/methodsAJAX.js)
   * [router.js](./src/router.js)
 * [gitignore](./gitignore)
 * [README.md](./README.md)
 * [db.json](./db.json)
 * [index.html](./index.html)
 * [package-lock.json](./package-lock.json)
 * [package.json](./package.json)
 * [webpack.config.js](./webpack.config.js)

### Project setup: 
Since github.io does not allow working with the server, and this application involves working with the server, You will need to start the JSON-server and download the database(db.json), since the data is loaded by the JSON-server (addresses of pictures, comments, etc.) 
actions algorithm: 

   1.Download the JSON-server - need to run the 'npm install -g json-server' command on the command line.
   
   2.Download the database(db.json) by this [link](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/AndreiLavrov/AndreiLavrov.github.io/blob/master/internet-store(SPA)/db.json)  and Extract to selected directory.
   
   3.RUN JSON-server - on the command line, being in the selected directory, you need to run the 'json-server --watch db.json --port 3006' command.
   
