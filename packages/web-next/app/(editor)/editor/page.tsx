'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import PlateEditorWrapper with SSR disabled
const PlateEditorWrapper = dynamic(
  () =>
    import('@barum/plate-editor').then((mod) => ({
      default: mod.PlateEditorWrapper,
    })),
  { ssr: false },
);

function EditorContent() {
  // No template data needed - just render the standalone editor
  return (
    <div className="editor-container">
      <PlateEditorWrapper initialTemplate={null} />
    </div>
  );
}

export default function EditorPage() {
  return <EditorContent />;
}
