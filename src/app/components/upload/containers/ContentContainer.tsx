import React from 'react';
import Content from '../Content';
import { CONTENT_TYPE } from 'constants/portfolio';

const ContentContainer = () => {
  return (
    <div className="flex gap-x-[25px]">
      {CONTENT_TYPE.map((item, index) => (
        <Content key={index} title={item} />
      ))}
    </div>
  );
};

export default ContentContainer;
