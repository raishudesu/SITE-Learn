import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/css/themes/dark.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const MyFroalaEditor = () => {
  const config = {
    placeholderText: "Start writing your blog content here.",
    moreParagraph: {
      buttons: ["alignLeft", "alignCenter"],
    },
    moreRich: {
      buttons: ["insertLink", "insertHR"],
    },
    charCounterCount: true,
    charCounterMax: 25,
    heightMin: 300,
    theme: "dark",
  };
  return <FroalaEditor config={config} />;
};

export default MyFroalaEditor;
