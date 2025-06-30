'use client';

import * as React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import {
  SubscriptPlugin,
  SuperscriptPlugin,
} from '@udecode/plate-basic-marks/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
import { useEditorRef } from '@udecode/plate/react';
import {
  KeyboardIcon,
  MoreHorizontalIcon,
  SubscriptIcon,
  SuperscriptIcon,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 h-8 min-w-8 px-1.5 bg-transparent"
          title="More"
        >
          <MoreHorizontalIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => {
              editor.tf.toggleMark(KbdPlugin.key);
              editor.tf.collapse({ edge: 'end' });
              editor.tf.focus();
            }}
          >
            <KeyboardIcon />
            Keyboard input
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={() => {
              editor.tf.toggleMark(SuperscriptPlugin.key, {
                remove: SubscriptPlugin.key,
              });
              editor.tf.focus();
            }}
          >
            <SuperscriptIcon />
            Superscript
            {/* (⌘+,) */}
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              editor.tf.toggleMark(SubscriptPlugin.key, {
                remove: SuperscriptPlugin.key,
              });
              editor.tf.focus();
            }}
          >
            <SubscriptIcon />
            Subscript
            {/* (⌘+.) */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
