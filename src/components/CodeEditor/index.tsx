import { CodeData } from '@/pages/Question/DoOnline';
import { Editor, useMonaco } from '@monaco-editor/react';
import React, { useContext, useEffect } from 'react';

const CodeEditor: React.FC = () => {
  const monaco = useMonaco();
  const { code, language, updateCode } = useContext(CodeData);

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);
  return (
    <>
      <div style={{ padding: '28px 0 0 0', height: '100%' }}>
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(v, e) => {
            updateCode(v);
          }}
        />
      </div>
    </>
  );
};

export default CodeEditor;
