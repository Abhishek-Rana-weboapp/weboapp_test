import React, { useState } from "react";
import TextInput from "../../components/buttons/TextInput";
import Tiptap from "../../components/textEditor/Tiptap";
import SlideButton from "../../components/buttons/SlideButton";
import ImageUpload from "../../components/buttons/ImageUpload";
import axios from "axios";
import { BASE_URL } from "../../api/Url";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [editorData, setEditorData] = useState(null);
const {setBlogData} = useFormContext()
  const navigate = useNavigate()
  const handleCreatePost = async () => {
    const payload = {
      title,
      summary: description,
      cover_image: coverImg,
      content: editorData,
    };

    setBlogData(payload)
    navigate("/blog/1")

    // await axios
    //   .post(`${BASE_URL}blog`, payload)
    //   .then((res) => {
    //     navigate("/blog")
    //   })
    //   .catch((err) => console.error(err));
  };

  const handleFile = async (files) => {
    if (files.length > 0) {
      const file = files[0];
      const blob = new Blob([file],{ type: file.type });
      const url = URL.createObjectURL(blob)
      setCoverImg(url)
    //   const formData = new FormData();
    //   formData.append("profile", files[0]);
    //   await axios
    //     .post(`${BASE_URL}upload`, formData)
    //     .then((res) => {
    //       setCoverImg(res.data.profile_url);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
}
  };

  return (
    <div className="mx-auto min-h-screen pt-20 md:w-3/4 md:pt-24">
      <div className="p-4">
        <h1 className="text-4xl font-semibold">Create Blog</h1>
        <div className="mt-4 flex h-full flex-col items-center gap-3">
          <label htmlFor="title" className="w-full text-start font-semibold">
            Title
            <TextInput
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={"Enter title"}
              className={"font-normal"}
              id="title"
            />
          </label>
          <label htmlFor="title" className="w-full text-start font-semibold">
            Description
            <TextInput
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder={"Enter Description"}
              className={"font-normal"}
              id="title"
            />
          </label>
          {coverImg ? (
            <img src={coverImg} className="h-72 w-full object-cover" />
          ) : (
            <ImageUpload onFilesAdded={handleFile} />
          )}
          <Tiptap editorData={editorData} setEditorData={setEditorData} />
          <SlideButton onClick={handleCreatePost}>Create a post</SlideButton>
        </div>
      </div>


      <div>
      <div className='blog-content md:w-3/4'>
          <div dangerouslySetInnerHTML={{ __html: editorData }} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
