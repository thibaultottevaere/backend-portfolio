import { Project } from "./models/IProject.ts";
import { Blog } from "./models/IBlog.ts";

const blogs : Blog[] = [
      {
          id:1,
          title: 'Opmerking GraphQl',
          author: 'Thibault',
          content: 'Het opvragen van GraphQl werkt!',
          project_id: 1,
      },
      {
          id:2,
          title: 'Opmerking GraphQl',
          author: 'Thibault Ottevaere',
          content: 'Het opvragen van GraphQl werkt!',
          project_id: 2, 
      },
      {
          id:3,
          title: 'Opmerking Deno',
          author: 'Thibault Ottevaere',
          content: 'Het opvragen van Deno werkt!',
          project_id: 1,
      },
      {
          id:4,
          title: 'Opmerking Deno',
          author: 'Thibault Ottevaere',
          content: 'Het opvragen van GraphQl werkt!',
          project_id: 4,
     },
]

const projects :Project[] = [
  {
    id:1,
    title:"toYOlLboWU",
    description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
    image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
    url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
    category:"Web Development"
 },
  {
        id:2,
        title:"bi2QAdnewn",
        description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
        image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
        url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
        category:"Mobile Development"
 },
 {
    id:3,
    title:"HO3ZAbApBP",
    description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
    image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
    url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
    category:"Design"
 },
  {
        id:4,
        title:"3JcAkH3Por",
        description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
        image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
        url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
        category:"Web Development"
 },
 {
    id:5,
    title:"KK3SBvhpTg",
    description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
    image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
    url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
    category:"Mobile Development"
 },
  {
        id:6,
        title:"MtaRJxgvhZ",
        description:"Rerum vel maxime unde. Veniam quisquam molestiae dolore dolorem ut. Maiores dolor unde sapiente similique molestias est.",
        image:"\/tmp\/01ffced7c95d75ab8cd198d781df1cdf.png",
        url:"http:\/\/www.schultz.org\/et-delectus-et-iste-eos-quo-eos-provident",
        category:"Design"
 },
];

// Function to load data into the Deno KV database
export const loadData = async () => {
  const kv = await Deno.openKv(); // Provide a unique name for your database

  // Store projects
  const existingProjects = await kv.list({ prefix: ['projects', 'Thibault'] });
for await (const projectRecord of existingProjects) {
  await kv.delete(projectRecord.key);
}
  for (const project of projects) {
    const projectKey = ['projects', 'Thibault', project.id.toString()];
    await kv.set(projectKey, project);
  }

    // Store blogs
    const existingBlogs = await kv.list({ prefix: ['blogs', 'Thibault'] });
for await (const blogRecord of existingBlogs) {
  await kv.delete(blogRecord.key);
}
  for (const blog of blogs) {
    const blogKey = ['blogs', 'Thibault', blog.id.toString()];
    await kv.set(blogKey, blog);
  }


  console.log('Data loaded into the Deno KV database.');
};