'use client';

import * as React from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import { DropdownMenuItemIndicator } from '@radix-ui/react-dropdown-menu';
import {
  useLineHeightDropdownMenu,
  useLineHeightDropdownMenuState,
} from '@udecode/plate-line-height/react';
import { CheckIcon, WrapText } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LineHeightDropdownMenu({ ...props }: DropdownMenuProps) {
  const state = useLineHeightDropdownMenuState();
  const { radioGroupProps } = useLineHeightDropdownMenu(state);

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 h-8 min-w-8 px-1.5 bg-transparent"
          title="Line height"
        >
          <WrapText className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-0" align="start">
        <DropdownMenuRadioGroup {...radioGroupProps}>
          {state.values.map((_value) => (
            <DropdownMenuRadioItem
              key={_value}
              className="min-w-[180px] pl-2 *:first:[span]:hidden"
              value={_value}
            >
              <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
                <DropdownMenuItemIndicator>
                  <CheckIcon />
                </DropdownMenuItemIndicator>
              </span>
              {_value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
