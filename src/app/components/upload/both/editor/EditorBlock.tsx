import React, { memo, useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './EditorTools';

interface EditorBlockProps {
  data?: OutputData; //time,version 옵션, blocks[]는 필수
  onChange(val: OutputData): void;
  holder: string; //식별자
}

const EditorBlock = ({ data, onChange, holder }: EditorBlockProps) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <div className="border">
      <div id={holder} />
    </div>
  );
};

export default memo(EditorBlock);
