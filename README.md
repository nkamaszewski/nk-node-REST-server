# nk-node-REST-server
simple node.js (v12.9.0) REST api server  
1. `npm i`
2. `node index`  
  
routes:  
- GET: `/users`  
- POST: `/users`, body example: `{"name": "Alice", "lastname":"Pink"}`  
- GET: `/users/:id`  
- PUT: `/users/:id`, body example: `{"name": "Alice", "lastname":"Pink"}`  
- DELETE: `/users/:id`
