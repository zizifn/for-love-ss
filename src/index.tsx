import { Context, Env, Hono } from "hono";
import { httpTestHtml, renderer } from "./renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.get("/http", httpTestHtml);
app.get("/http/api/cache-control", (c) => {
  return c.json(
    {
      message: new Date(),
    },
    200,
    {
      "cache-control": "max-age=30",
    }
  );
});
export default app;
