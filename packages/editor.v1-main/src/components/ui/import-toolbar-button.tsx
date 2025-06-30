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

export function ImportToolbarButton(props: DropdownMenuProps) {
  const editor = useEditorRef();

  const handleImport = async (format: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = format === 'markdown' ? '.md,.markdown' : '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const text = await file.text();
      let value;

      try {
        if (format === 'markdown') {
          // Import markdown - simplified for now
          console.log('Markdown import not implemented yet');
          return;
        } else {
          // Import JSON
          value = JSON.parse(text);
        }

        editor.tf.insertNodes(value);
        editor.tf.focus();
      } catch (error) {
        console.error('Import failed:', error);
      }
    };
    input.click();
  };

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 h-8 min-w-8 px-1.5 bg-transparent"
          title="Import"
        >
          <DownloadIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => handleImport('markdown')}>
            <FileTextIcon />
            Import Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleImport('json')}>
            <FileTextIcon />
            Import JSON
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
