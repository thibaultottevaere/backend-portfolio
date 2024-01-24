import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { Project } from "../models/IProject.ts";

const ProjectController = new Hono({ strict: false });
const kv = await Deno.openKv();

ProjectController.get("/all/:name", async (c:any) => {
  const { name } = c.req.param();
  const records = kv.list({ prefix: ['projects', name] });
  const projects: Project[] = [];

  for await (const record of records) {
    projects.push(record.value as Project);
  }

  return c.json(projects);
});

ProjectController.get("/:id", async (c:any) => {
  const { id } = c.req.param();
  const record = await kv.get(["projects", Number.parseInt(id)]);
  const project: Project = record.value as Project;
  if (!project) {
    return c.json({ message: "Project not found",id:  id}, 404);
  }
  return c.json(project);
});

export default ProjectController;