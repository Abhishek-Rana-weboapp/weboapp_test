import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { BASE_URL } from "../../api/Url";
import axios from "axios";
import { AlignCenter, AlignLeft, AlignRight, Bold, ChevronsLeftRight, ImageUp, Italic, List, ListOrdered, Strikethrough } from "lucide-react";

// define your extension array
const extensions = [
  StarterKit,
  Image,
  CodeBlock,
  TextAlign.configure({
    types: ["heading", "paragraph", "orderedlist"],
  }),
];

const content = "<h1>Start Writing</h1>";

const Tiptap = ({ setEditorData }) => {
  const handleEditor = (content) => {
    setEditorData(content);
  };

  const MenuBar = () => {
    const { editor } = useCurrentEditor();
    if (!editor) {
      return null;
    }

    editor.on("update", ({ editor }) => {
      handleEditor(editor.getHTML());
    });

    const handleChange = async (e) => {
      if (e.target.files) {

        const file = e.target.files[0];
        const blob = new Blob([file],{ type: file.type });
        const url = URL.createObjectURL(blob)
        addImage(url)
        
        // const formData = new FormData();
        // formData.append("profile", e.target.files[0]);
        // await axios
        //   .post(`${BASE_URL}upload`, formData)
        //   .then((res) => {
        //     addImage(res.data.profile_url);
        //   })
        //   .catch((err) => {
        //     alert("Something went wrong please try again");
        //   });
      }
    };

    const addImage = (url) => {
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    };

    const addTextAlign = (align) => {
      editor.chain().focus().setTextAlign(align).run();
    };

    return (
      <div className="flex flex-wrap items-center rounded-lg border border-neutral-300 p-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <Bold className="hover:scale-105 hover:shadow" size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <Italic className="hover:scale-105 hover:shadow" size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <Strikethrough
            className="hover:scale-105 hover:shadow"
            size={18}
          />
        </button>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((level) => (
          <button
            key={level}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={editor.isActive("heading", { level }) ? "is-active" : ""}
          >
            <span className="px-2">{`H${level}`}</span>
          </button>
        ))}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <List
            className="hover:scale-105 hover:shadow"
            size={25}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
         <ListOrdered
            className="hover:scale-105 hover:shadow"
            size={25}
          />
        </button>

        <label className="inline-block cursor-pointer px-2" htmlFor="upload">
        <ImageUp className="hover:scale-105 hover:shadow" size={25} />
          <input
            className="hidden"
            id="upload"
            type="file"
            onChange={handleChange}
          />
        </label>

        <button
          onClick={() => addTextAlign("left")}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <AlignLeft
            className="hover:scale-105 hover:shadow"
            size={25}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <AlignCenter
            className="hover:scale-105 hover:shadow"
            size={25}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <AlignRight
            className="hover:scale-105 hover:shadow"
            size={25}
          />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
          disabled={!editor.can().chain().focus().toggleCode().run()}
        >
          <ChevronsLeftRight className="hover:scale-105 hover:shadow" size={25} />
        </button>
      </div>
    );
  };

  return (
    <>
      <EditorProvider
        extensions={extensions}
        slotBefore={<MenuBar />}
        className="rounded-lg border border-neutral-300 text-start outline-none focus:outline-none"
        content={content}
        shouldRerenderOnTransaction={false}
      />
    </>
  );
};

export default Tiptap;
