import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Blog } from "../models/IBlog.ts";

const BlogController = new Hono({ strict: false });
const kv = await Deno.openKv();

BlogController.get("/all/:name", async (c: any) => {
  const { name } = c.req.param();
  const records = kv.list({ prefix: ['blogs', name] });
  const blogs: Blog[] = [];

  for await (const record of records) {
    blogs.push(record.value as Blog);
  }

  return c.json(blogs);
});

export default BlogController;