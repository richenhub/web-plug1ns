import { FileButton } from "@mantine/core";
import { RichTextEditor, useRichTextEditorContext } from "@mantine/tiptap";
import { useEffect } from "react";
interface Props {
    handleImageUpload: (file: File) => Promise<string>;
    editor: any
  }
const ImageControl = ({ handleImageUpload, editor }: Props) => {
    //const { editor } = useRichTextEditorContext();
  
    useEffect(() => {
      const handlePaste = (event: ClipboardEvent) => {
        if (!event.clipboardData || !event.clipboardData.items) return;
  
        const item = Array.from(event.clipboardData.items).find(
          (item: DataTransferItem) => item.type.indexOf("image") === 0
        );
  
        if (!item) return;
  
        const file = item.getAsFile();
        if (file) handleImage(file);
      };
  
      window.document.addEventListener("paste", handlePaste);
  
      return () => {
        window.document.removeEventListener("paste", handlePaste);
      };
    }, [editor]);
  
    const handleImage = (file: File | null) => {
      if (!file) return;
      handleImageUpload(file).then((url) => {
        editor?.chain().focus().setImage({ src: url }).run();
      });
    };
  
    return (
      <FileButton onChange={handleImage} accept="image/png,image/jpeg">
        {(props) => (
          <RichTextEditor.Control {...props} aria-label="Insert image" title="Insert image">
            photo
          </RichTextEditor.Control>
        )}
      </FileButton>
    );
  };
  
  export default ImageControl;