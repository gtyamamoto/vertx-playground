/// <reference types="es4x" />
// @ts-check
import { Router,BodyHandler } from '@vertx/web';
import {HttpMethod} from '@vertx/core/enums'
 
import * as _ from 'lodash';

const app = Router.router(vertx);

app.route('/api')
.method(HttpMethod.GET)
.handler(ctx => {
   
    debugger;
    const arrr = [1,2,3,4,5,6,67];
    const even = _.filter(arrr,elm=>elm%2!==0);
  ctx.response()
    .end(`Hello from Vert.x Web! ${JSON.stringify(even)}`);
});


app.route('/api')
.handler(BodyHandler.create())
.method(HttpMethod.POST)
.handler( ctx=>{
    const data = ctx.getBodyAsJson();
   ctx.response()
   .putHeader("content-type", "application/json; charset=utf-8")
   .end(JSON.stringify({juruve:'ss',...data}))

})




vertx.createHttpServer()
  .requestHandler(app)
  .listen(8080);
  
console.log('Server listening at: http://localhost:8080/')