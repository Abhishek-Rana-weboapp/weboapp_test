import { useEffect, useState } from "react";
import TextInput from "../../components/buttons/TextInput";
import Tiptap from "../../components/textEditor/Tiptap";
import SlideButton from "../../components/buttons/SlideButton";
import ImageUpload from "../../components/buttons/ImageUpload";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Plus, X, FileText, ImageIcon, Tag, Type, AlignLeft } from "lucide-react";
import { axiosInstance } from "../../api/axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [coverImgPreview, setCoverImgPreview] = useState(null);
  const [editorData, setEditorData] = useState(null);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { blogData, setBlogData } = useFormContext();
  const navigate = useNavigate();

  const isEditMode = !!blogData && (blogData.id || blogData._id);

  useEffect(() => {
    if (blogData) {
      setTitle(blogData.title || "");
      setDescription(blogData.description || "");
      setEditorData(blogData.content || "");
      // Parse tags if they come as a stringified array
      const parsedTags = typeof blogData.tags === "string" 
        ? JSON.parse(blogData.tags) 
        : blogData.tags || [];
      setTags(parsedTags);
      if (blogData.cover_image) {
        setCoverImgPreview(blogData.cover_image);
      }
    }
  }, [blogData]);

  const handleCreateOrUpdatePost = async () => {
    if (!title || !description || !editorData) {
      alert("Please fill all the fields");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", editorData);
    formData.append("tags", JSON.stringify(tags));
    if (coverImg) {
      formData.append("cover_image", coverImg);
    }

    try {
      let res;
      if (isEditMode) {
        const id = blogData.id || blogData._id;
        res = await axiosInstance.put(`/blog/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        res = await axiosInstance.post("/blog/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (res.status === 200 || res.status === 201) {
        setBlogData(null);
        navigate("/admin/blogSection");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFile = async (files) => {
    if (files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setCoverImg(file);
      setCoverImgPreview(url);
    }
  };

  const handleAddTag = () => {
    if (!tag) {
      setError((prev) => ({ ...prev, tag: "Tag cannot be empty" }));
      return;
    }
    if (tags.includes(tag)) {
      setError((prev) => ({ ...prev, tag: "Tag already added" }));
      return;
    }
    setTags((prev) => [...prev, tag]);
    setTag("");
    setError((prev) => ({ ...prev, tag: null }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 ">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-start gap-3">
          <div className="rounded-xl w-max bg-gradient-to-br from-indigo-500 to-purple-600 p-3 shadow-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? "Edit Blog" : "Create New Blog"}
            </h1>
            <p className="text-sm text-gray-500">
              {isEditMode ? "Update your blog post" : "Share your thoughts with the world"}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 md:p-8">
          <div className="space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Type className="h-4 w-4 text-indigo-500" />
                Title
              </label>
              <TextInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter an engaging title..."
                className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <AlignLeft className="h-4 w-4 text-indigo-500" />
                Description
              </label>
              <TextInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a brief description..."
                className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Tags Section */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Tag className="h-4 w-4 text-indigo-500" />
                Tags
              </label>
              <div className="flex flex-wrap items-start gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <TextInput
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                      placeholder="Add a tag..."
                      className="w-40 rounded-xl border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                    {error.tag && (
                      <span className="mt-1 text-xs text-red-500">{error.tag}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-md transition-all hover:bg-indigo-600 hover:shadow-lg active:scale-95"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((t, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 py-1.5 pl-3.5 pr-2 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                    >
                      {t}
                      <button
                        type="button"
                        onClick={() => setTags(tags.filter((_, i) => i !== index))}
                        className="rounded-full p-0.5 transition-colors hover:bg-indigo-200/50"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cover Image Section */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <ImageIcon className="h-4 w-4 text-indigo-500" />
                Cover Image
              </label>
              {coverImgPreview ? (
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src={coverImgPreview}
                    alt="Cover"
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => {
                        setCoverImg(null);
                        setCoverImgPreview(null);
                      }}
                      className="rounded-lg bg-white px-4 py-2 font-medium text-gray-900 shadow-lg transition-transform hover:scale-105"
                    >
                      Change Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 transition-colors hover:border-indigo-300 hover:bg-indigo-50/30">
                  <ImageUpload onFilesAdded={handleFile} />
                </div>
              )}
            </div>

            {/* Content Editor */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText className="h-4 w-4 text-indigo-500" />
                Content
              </label>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <Tiptap editorData={editorData} setEditorData={setEditorData} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <SlideButton onClick={handleCreateOrUpdatePost} disabled={isSubmitting}>
                {isSubmitting
                  ? "Saving..."
                  : isEditMode
                    ? "Update Post"
                    : "Publish Blog"}
              </SlideButton>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {editorData && (
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">Preview</h2>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
              <div className="blog-content prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: editorData }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBlog;
