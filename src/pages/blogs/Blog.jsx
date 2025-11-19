import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import { renderToStaticMarkup } from 'react-dom/server';
import { useFormContext } from '../../context/FormContext';
import { dummyBlogs } from '../../static/blogsData';
import ImageComponent from '../../components/image/ImageComponent';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);


  const [modifiedContent, setModifiedContent] = useState('');
  const [toc, setToc] = useState([]); // For storing the Table of Contents

  useEffect(() => {
    const filteredBlog = dummyBlogs.filter(blog => parseInt(blog?.id) === parseInt(id));
    setBlog(filteredBlog[0]);
  }, [id]);

  useEffect(() => {
    const headers = [];
    let idCounter = 1;

    const addIdsToHeaders = (node) => {
      if (node.type === 'tag' && (node.name === 'h1' || node.name === 'h2')) {
        const id = `${node.name}-${idCounter++}`;
        node.attribs = { ...node.attribs, id };

        headers.push({
          type: node.name,
          text: domToReact(node.children), // Convert the full children array
          id,
        });
      }

      if (node.children) {
        node.children.forEach(addIdsToHeaders);
      }
    };

      if(blog?.content){
        const parsedContent = parse(blog?.content, {
          replace: (domNode) => {
            addIdsToHeaders(domNode);
            return domNode; // Return the modified node
          },
        });
      // Debugging: Log parsed content
      const htmlString = renderToStaticMarkup(parsedContent);
      setModifiedContent(htmlString); // Render the modified content
      setToc(headers); // Store the headers for TOC
    }
  }, [blog]);


  return (
    <div className=''>
      <Helmet>
        <meta name={"title"} content={blog?.title}></meta>
        <meta name={"description"} content={blog?.meta_description}></meta>
      </Helmet>
      <ImageComponent className={"h-[40vh] w-full object-cover"} src={blog?.cover_image} webpSrc={""}/>

      <div className='md:w-3/4 w-full mx-auto p-4 space-y-10 my-10'>
        <h1 className='md:text-5xl text-2xl my-5 font-bold'>{blog?.title}</h1>
        <div className="w-full flex gap-4 md:flex-row flex-col items-start mt-10">
          <div className='md:w-1/4 p-4 md:sticky top-20'>
            <h2 className='text-xl font-semibold my-4'>Table of Contents</h2>
            <ul className='rounded-lg p-4 bg-blue-100 shadow text-left'>
              {toc?.map((item, index) => (
                <li key={index} className='p-2 '>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='blog-content md:w-3/4'>
            <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
