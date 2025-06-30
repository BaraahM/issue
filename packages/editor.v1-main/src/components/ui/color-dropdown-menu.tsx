'use client';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import {
  useColorDropdownMenu,
  useColorDropdownMenuState,
} from '@udecode/plate-font/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from './color-constants';
import { ColorPicker } from './color-picker';
import { ToolbarButton } from './toolbar';

type ColorDropdownMenuProps = {
  nodeType: string;
  tooltip?: string;
} & DropdownMenuProps;

export function ColorDropdownMenu({
  children,
  nodeType,
  tooltip,
}: ColorDropdownMenuProps) {
  const state = useColorDropdownMenuState({
    closeOnSelect: true,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    nodeType,
  });

  const { buttonProps, menuProps } = useColorDropdownMenu(state);

  return (
    <DropdownMenu modal={false} {...menuProps}>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0"
          title={tooltip}
          {...buttonProps}
        >
          {children}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <ColorPicker
          color={state.selectedColor || state.color}
          clearColor={state.clearColor}
          colors={state.colors}
          customColors={state.customColors}
          updateColor={state.updateColorAndClose}
          updateCustomColor={state.updateColor}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
