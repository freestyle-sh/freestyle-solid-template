
import "#internal/nitro/virtual/polyfill";
import { useNitroApp } from "nitropack/runtime";

console.log("Starting server...");

const app = useNitroApp();


async function handler(request: Request, info: any) {

    const url = new URL(request.url);
  
    // https://deno.land/api?s=Body
    let body;
    if (request.body) {
      body = await request.arrayBuffer();
    }
  
    return app.localFetch(url.pathname + url.search, {
      host: url.hostname,
      protocol: url.protocol,
      headers: request.headers,
      method: request.method,
      redirect: request.redirect,
      body,
    });
  }

Deno.serve({
    port: 8000
}, handler);
console.log("Server started on port 8000");