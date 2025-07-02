'use client';

import * as React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import { useEditorRef } from '@udecode/plate/react';
import { DownloadIcon, FileTextIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ExportToolbarButton(props: DropdownMenuProps) {
  const editor = useEditorRef();

  const handleExport = (format: string) => {
    let content: string;
    let filename: string;
    let mimeType: string;

    try {
      if (format === 'markdown') {
        // Markdown export - simplified for now
        console.log('Markdown export not implemented yet');
        return;
      } else if (format === 'json') {
        content = JSON.stringify(editor.children, null, 2);
        filename = 'document.json';
        mimeType = 'application/json';
      } else if (format === 'html') {
        // HTML export - simplified for now
        console.log('HTML export not implemented yet');
        return;
      } else {
        return;
      }

      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 h-8 min-w-8 px-1.5 bg-transparent"
          title="Export"
        >
          <DownloadIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => handleExport('markdown')}>
            <FileTextIcon />
            Export Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleExport('json')}>
            <FileTextIcon />
            Export JSON
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleExport('html')}>
            <FileTextIcon />
            Export HTML
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
