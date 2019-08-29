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
* [tree-md](./tree-md)
 * [dir2](./dir2)
   * [file21.ext](./dir2/file21.ext)
   * [file22.ext](./dir2/file22.ext)
   * [file23.ext](./dir2/file23.ext)
 * [dir1](./dir1)
   * [file11.ext](./dir1/file11.ext)
   * [file12.ext](./dir1/file12.ext)
 * [file_in_root.ext](./file_in_root.ext)
 * [README.md](./README.md)
 * [dir3](./dir3)

### Project setup: 
Since github.io does not allow working with the server, and this application involves working with the server, You will need to start the JSON-server and download the database(db.json), since the data is loaded by the JSON-server (addresses of pictures, comments, etc.) 
actions algorithm: 

   1.Download the JSON-server - need to run the 'npm install -g json-server' command on the command line.
   
   2.Download the database(db.json) by this [link](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/AndreiLavrov/AndreiLavrov.github.io/blob/master/internet-store(SPA)/db.json)  and Extract to selected directory.
   
   3.RUN JSON-server - on the command line, being in the selected directory, you need to run the 'json-server --watch db.json --port 3006' command.
   
