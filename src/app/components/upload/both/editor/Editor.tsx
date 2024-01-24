'use client';
import { OutputData } from '@editorjs/editorjs';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const EditorBlock = dynamic(() => import('./EditorBlock'), {
  ssr: false,
});

const Editor = () => {
  const [data, setData] = useState<OutputData>({
    blocks: [],
  });
  console.log('현재 저장된 editor Data', data);
  return (
    <div className="w-full h-full">
      <EditorBlock data={data} onChange={setData} holder="editorjs" />
    </div>
  );
};
export default Editor;
