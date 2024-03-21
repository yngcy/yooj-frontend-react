import breaks from '@bytemd/plugin-breaks';
import frontmatter from '@bytemd/plugin-frontmatter';
import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import math from '@bytemd/plugin-math';
import medium from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid';
import { Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import 'github-markdown-css';
import 'highlight.js/styles/vs.css';
import 'juejin-markdown-themes/dist/juejin.css';
import 'katex/dist/katex.css';
import React from 'react';

interface Props {
  value: string;
}

const plugins = [
  breaks(),
  gfm(),
  highlight(),
  math(),
  gemoji(),
  medium(),
  frontmatter(),
  mermaid(),
  // Add more plugins here
];

const MdViewer: React.FC<Props> = (props) => {
  const { value } = props;
  return <Viewer value={value} plugins={plugins} />;
};

export default MdViewer;
