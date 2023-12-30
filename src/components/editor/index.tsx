import '@mantine/tiptap/styles.css';
import { RichTextEditor, Link, useRichTextEditorContext } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { useCallback } from 'react';
import Image from "@tiptap/extension-image";
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { useContextMenu } from 'mantine-contextmenu';
import { ResizableImage } from 'tiptap-extension-resizable-image';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {common, createLowlight} from 'lowlight'

import phpLanguageSyntax from 'highlight.js/lib/languages/php';

import styles from './index.module.pcss';
import ImageControl from './image-control';

const lowlight = createLowlight(common);

lowlight.register({phpLanguageSyntax});

const content =
 '';
const Editor = () => {
    const { showContextMenu } = useContextMenu();
        const context = useRichTextEditorContext();
        const editor = useEditor({
            extensions: [
                StarterKit,
                Underline,
                Link,
                Superscript,
                SubScript,
                Highlight,
                TextStyle,
                Image,
                TextAlign.configure({ types: ['heading', 'paragraph'] }),
                Color,
                CodeBlockLowlight.configure({ lowlight }),
                ResizableImage.configure({
                    defaultHeight: 300,
                    defaultWidth: 300,
                    moveableProps: {
                      renderDirections: ['se'],
                    },
                    async onUpload(file: File) {
                        const src = URL.createObjectURL(file);
                        return {
                          src,
                          'data-keep-ratio': false,
                        };
                      },
                    onContextMenu(event, payload) {
                        showContextMenu([
                          {
                            key: 'copy',
                            title: 'Copy to clipboard',
                            onClick: () => alert(`You copied ${payload.node.attrs.src}`),
                          },
                          {
                            key: 'delete',
                            title: 'Delete this image',
                            onClick: () =>
                              alert('kek')
                          },
                        ])(event);
                    }
                }),
            ],
            content,
          });
        
          const handleImageUpload = useCallback(
            (file: File): Promise<string> =>
              new Promise((resolve, reject) => {
                const formData = context;
                formData.editor?.chain?.focus().setImage(file);
                // api
                //   .post("api/upload/image", formData)
                //   .then((result) => resolve(result.data.url))
                //   .catch(() => reject(new Error("Upload failed")));
              }),
            []
          );

          return (
            <RichTextEditor editor={editor} 
            classNames={{
              content: styles.content,
              toolbar: styles.toolbar,
            }}>
              <RichTextEditor.Toolbar sticky stickyOffset={0}>

              <RichTextEditor.ColorPicker
                    colors={[
                        '#25262b',
                        '#868e96',
                        '#fa5252',
                        '#e64980',
                        '#be4bdb',
                        '#7950f2',
                        '#4c6ef5',
                        '#228be6',
                        '#15aabf',
                        '#12b886',
                        '#40c057',
                        '#82c91e',
                        '#fab005',
                        '#fd7e14',
                    ]}
                />
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>
                

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.CodeBlock />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>
        
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>
        
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
        
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>

                
            
                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Control interactive={false}>
                        color
                    </RichTextEditor.Control>
                    <RichTextEditor.Color color="#F03E3E" />
                    <RichTextEditor.Color color="#7048E8" />
                    <RichTextEditor.Color color="#1098AD" />
                    <RichTextEditor.Color color="#37B24D" />
                    <RichTextEditor.Color color="#F59F00" />
                    <RichTextEditor.UnsetColor />
                </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
                    <ImageControl editor={editor} handleImageUpload={handleImageUpload} />
            </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor>
    );
};

export default Editor;