import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format, parse, compareDesc } from 'date-fns';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  // Sort the data by date, newest date first and add a formated date property
  return fileNames.map((fileName) => {
	// Remove ".md" from file name to get id
	const id = fileName.replace(/\.md$/, '');

	// Read markdown file as string
	const fullPath = path.join(postsDirectory, fileName);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Combine the data with the id; Lets parse the dates to make them more americanized. DE 1/10/23
	const parsedDate = parse(matterResult.data.date, 'yyyy-MM-dd', new Date());
	return {
	  id,
	  ...matterResult.data,
	  date: format(parsedDate, 'LLLL dd, yyyy'),
	  parsedDate: parsedDate.toJSON()
	};
  }).sort((a, b) => compareDesc(a.parsedDate, b.parsedDate));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
	return {
	  params: {
		id: fileName.replace(/\.md$/, ''),
	  },
	};
  });
}
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
	const processedContent = await remark()
	  .use(html)
	  .process(matterResult.content);
	const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
	id,
	contentHtml,
	...matterResult.data,
  };
}