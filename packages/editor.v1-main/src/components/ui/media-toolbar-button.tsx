'use client';

import * as React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import { useEditorRef } from '@udecode/plate/react';
import {
  FileIcon,
  ImageIcon,
  LinkIcon,
  VideoIcon,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MediaToolbarButton(props: DropdownMenuProps) {
  const editor = useEditorRef();

  const handleMediaInsert = (type: string) => {
    switch (type) {
      case 'image':
        // Handle image insertion
        console.log('Image insertion not implemented yet');
        break;
      case 'video':
        // Handle video insertion
        console.log('Video insertion not implemented yet');
        break;
      case 'file':
        // Handle file insertion
        console.log('File insertion not implemented yet');
        break;
      case 'link':
        // Handle link insertion
        console.log('Link insertion not implemented yet');
        break;
      default:
        break;
    }
  };

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 h-8 min-w-8 px-1.5 bg-transparent"
          title="Insert media"
        >
          <ImageIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => handleMediaInsert('image')}>
            <ImageIcon />
            Image
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleMediaInsert('video')}>
            <VideoIcon />
            Video
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleMediaInsert('file')}>
            <FileIcon />
            File
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleMediaInsert('link')}>
            <LinkIcon />
            Link
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
