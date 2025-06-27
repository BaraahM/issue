'use client';

import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Plate } from '@udecode/plate/react';
import { useEditorRef, useEditorString } from '@udecode/plate/react';
import { ArrowLeft, User } from 'lucide-react';

import { AISidebarProvider, useAISidebar } from '@/components/editor/ai-sidebar-context';
import { useCreateEditor } from '@/components/editor/use-create-editor';
import { VersionHistoryProvider } from '@/components/editor/version-history-context';
import { AISidebar } from '@/components/ui/ai-sidebar';
import { Button } from '@/components/ui/button';
import { DocumentOutline } from '@/components/ui/document-outline';
import { Editor, EditorContainer } from '@/components/ui/editor';
import { FloatingToolbar } from '@/components/ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/ui/floating-toolbar-buttons';
import { MagicWandButton } from '@/components/ui/magic-wand-button';
import { VersionHistoryButton } from '@/components/ui/version-history-button';
import { Toolbar } from '@/components/ui/toolbar';
import { ModeDropdownMenu } from '@/components/ui/mode-dropdown-menu';

interface PlateEditorProps {
  initialTemplate?: {
    content: string | null;
    name: string | null;
  } | null;
}

function AISidebarComponent() {
  const { closeSidebar, isOpen } = useAISidebar();
  const editor = useEditorRef();
  
  // Get current editor content using the hook
  const editorString = useEditorString();
  
  const getEditorContent = () => {
    if (!editor) return '';
    try {
      // Get the editor content as plain text using the correct Plate v48 API
      return editorString || '';
    } catch (error) {
      console.error('Failed to get editor content:', error);
      return '';
    }
  };

  // Update editor content
  const handleUpdateEditorContent = (newContent: string) => {
    if (!editor) return;
    try {
      // Parse the new content and set it
      const lines = newContent.split('\n');
      const nodes = lines.map(line => ({
        children: [{ text: line }],
        type: 'p',
      }));
      
      editor.tf.setValue(nodes.length > 0 ? nodes : [{ children: [{ text: '' }], type: 'p' }]);
    } catch (error) {
      console.error('Failed to update editor content:', error);
    }
  };

  return (
    <AISidebar 
      onClose={closeSidebar} 
      onUpdateEditorContent={handleUpdateEditorContent}
      editorContent={getEditorContent()}
      isOpen={isOpen}
    />
  );
}

function MagicWandButtonComponent() {
  const { openSidebar } = useAISidebar();

  return <MagicWandButton onClick={openSidebar} />;
}

export function PlateEditor({ initialTemplate }: PlateEditorProps = {}) {
  // Create initial value based on template to prevent flicker
  const templateValue = React.useMemo(() => {
    if (initialTemplate?.content) {
      return [
        {
          children: [{ text: initialTemplate.name || 'Document' }],
          type: 'h1',
        },
        {
          children: [{ text: '' }],
          type: 'p',
        },
        ...initialTemplate.content.split('\n\n').map(paragraph => ({
          children: [{ text: paragraph }],
          type: 'p',
        })),
      ];
    }
    // Default: blank new document (original Plate.js behavior)
    return [
      {
        children: [{ text: 'New Document' }],
        type: 'h1',
      },
      {
        children: [{ text: '' }],
        type: 'p',
      },
    ];
  }, [initialTemplate]);

  const editor = useCreateEditor({ value: templateValue });

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <AISidebarProvider>
          <VersionHistoryProvider>
            <div className="flex h-screen w-screen bg-white font-sans">
              {/* Sidebar: minimal, just outline */}
              <aside className="w-56 border-r border-border bg-white p-6 pt-8 flex-shrink-0 overflow-y-auto">
                <DocumentOutline editor={editor} />
              </aside>
              {/* Main content */}
              <main className="flex-1 flex flex-col min-w-0">
                {/* Toolbar: Figma style */}
                <Toolbar className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-border bg-white gap-4">
                  {/* Left: Save, Share, etc. */}
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="h-8 px-3">Save</Button>
                    <Button size="sm" variant="ghost" className="h-8 px-3">Share</Button>
                </div>
                  {/* Center: Version selector */}
                  <div className="flex-1 flex justify-center">
                  <VersionHistoryButton />
                </div>
                  {/* Right: Editing mode, avatar */}
                <div className="flex items-center gap-2">
                    <ModeDropdownMenu />
                    <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full bg-gray-100 text-gray-700">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
                </Toolbar>
                {/* Editor area: full width, Figma padding */}
                <div className="flex-1 flex flex-col relative min-w-0 px-24 py-12">
                  <EditorContainer id="scroll_container" variant="demo" className="max-w-5xl mx-auto w-full flex-1 relative bg-white">
                    <Editor 
                      variant="demo" 
                      className="text-left min-h-[800px] w-full text-base" 
                      autoFocus
                    />
                    <FloatingToolbar>
                      <FloatingToolbarButtons />
                    </FloatingToolbar>
                    {/* Magic Wand Button - floating, right */}
                    <div className="fixed right-12 top-1/2 z-50">
                    <MagicWandButtonComponent />
                    </div>
                  </EditorContainer>
                </div>
                <AISidebarComponent />
              </main>
            </div>
          </VersionHistoryProvider>
        </AISidebarProvider>
      </Plate>
    </DndProvider>
  );
}