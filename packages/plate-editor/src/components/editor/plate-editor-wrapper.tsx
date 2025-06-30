'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { Toaster } from 'sonner';
import { ClientOnly } from '../ClientOnly';

import { PlateEditor } from './plate-editor';
import { SettingsProvider } from './settings';

interface PlateEditorWrapperProps {
  initialTemplate?: {
    content: string | null;
    name: string | null;
  } | null;
}

function EditorContent({ initialTemplate }: PlateEditorWrapperProps) {
  return (
    <div className="h-screen w-full">
      <SettingsProvider>
        <PlateEditor initialTemplate={initialTemplate} />
      </SettingsProvider>
      <Toaster />
    </div>
  );
}

export function PlateEditorWrapper({ initialTemplate }: PlateEditorWrapperProps) {
  return (
    <ClientOnly>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading editor...</div>}>
        <EditorContent initialTemplate={initialTemplate} />
      </Suspense>
    </ClientOnly>
  );
} 