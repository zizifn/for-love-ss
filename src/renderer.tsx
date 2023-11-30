import "hono";
import { Context, Env } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true,
  }
);

export const httpTestHtml = (c: Context<Env, "/http", {}>) => {
  return c.html(
    <html>
      <head>
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <script type="module" src="/src/client.ts"></script>
          </>
        )}
      </head>
      <body>
        <h1>Hello httpTestHtml</h1>
        <button id="http-test-cache-control">Test HTTP cache-control</button>
      </body>
    </html>
  );
};
