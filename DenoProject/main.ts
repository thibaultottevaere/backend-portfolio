import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { cors } from 'https://deno.land/x/hono/middleware.ts'


import ProjectController from "./controllers/ProjectController.ts";
import BlogController from "./controllers/BlogController.ts";
import { loadData } from "./dataLoader.ts";

const app = new Hono({ strict: false });

app.get('/', (c:any) => c.text('Portfolio backend'));
app.use('/api/*', cors({credentials: true}));

app.route("/api/projects", ProjectController);
app.route("/api/blogs", BlogController);
await loadData();
Deno.serve(app.fetch);