'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

// Dynamically import PlateEditorWrapper with SSR disabled
const PlateEditorWrapper = dynamic(
  () =>
    import('@barum/plate-editor').then((mod) => ({
      default: mod.PlateEditorWrapper,
    })),
  { ssr: false },
);

function EditorContent() {
  const searchParams = useSearchParams();

  const templateData = useMemo(() => {
    const templateName = searchParams.get('template');
    const templateContent = searchParams.get('content');

    if (templateName || templateContent) {
      return {
        content: templateContent,
        name: templateName,
      };
    }
    return null;
  }, [searchParams]);

  return (
    <div className="editor-container">
      <PlateEditorWrapper initialTemplate={templateData} />
    </div>
  );
}

export default function EditorPage() {
  return <EditorContent />;
}
