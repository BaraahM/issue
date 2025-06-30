'use strict';

var React19 = require('react');
var reactDnd = require('react-dnd');
var reactDndHtml5Backend = require('react-dnd-html5-backend');
var react$b = require('@udecode/plate/react');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');
var cn$1 = require('@udecode/cn');
var react$1 = require('@udecode/plate-ai/react');
var react$j = require('@udecode/plate-basic-marks/react');
var react$d = require('@udecode/plate-block-quote/react');
var react$8 = require('@udecode/plate-callout/react');
var react$7 = require('@udecode/plate-code-block/react');
var react$s = require('@udecode/plate-comments/react');
var react$a = require('@udecode/plate-date/react');
var react$w = require('@udecode/plate-emoji/react');
var react$y = require('@udecode/plate-excalidraw/react');
var plateHeading = require('@udecode/plate-heading');
var react$5 = require('@udecode/plate-heading/react');
var react$k = require('@udecode/plate-highlight/react');
var react$g = require('@udecode/plate-horizontal-rule/react');
var react$u = require('@udecode/plate-kbd/react');
var react$2 = require('@udecode/plate-layout/react');
var react$9 = require('@udecode/plate-link/react');
var react$6 = require('@udecode/plate-math/react');
var react$4 = require('@udecode/plate-media/react');
var react$q = require('@udecode/plate-mention/react');
var react$v = require('@udecode/plate-slash-command/react');
var react = require('@udecode/plate-suggestion/react');
var react$3 = require('@udecode/plate-table/react');
var react$c = require('@udecode/plate-toggle/react');
var faker = require('@faker-js/faker');
var plateMarkdown = require('@udecode/plate-markdown');
var remarkGfm = require('remark-gfm');
var remarkMath = require('remark-math');
var emojiMartData = require('@emoji-mart/data');
var plateDocx = require('@udecode/plate-docx');
var react$t = require('@udecode/plate-font/react');
var plateJuice = require('@udecode/plate-juice');
var plateTrailingBlock = require('@udecode/plate-trailing-block');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var ToolbarPrimitive = require('@radix-ui/react-toolbar');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var classVarianceAuthority = require('class-variance-authority');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var reactSlot = require('@radix-ui/react-slot');
var plateAlignment = require('@udecode/plate-alignment');
var plate = require('@udecode/plate');
var plateCallout = require('@udecode/plate-callout');
var plateCodeBlock = require('@udecode/plate-code-block');
var plateDate = require('@udecode/plate-date');
var plateIndentList = require('@udecode/plate-indent-list');
var react$f = require('@udecode/plate-indent-list/react');
var plateLayout = require('@udecode/plate-layout');
var plateMath = require('@udecode/plate-math');
var plateMedia = require('@udecode/plate-media');
var plateComments = require('@udecode/plate-comments');
var plateEmoji = require('@udecode/plate-emoji');
var PopoverPrimitive = require('@radix-ui/react-popover');
var plateBasicMarks = require('@udecode/plate-basic-marks');
var plateBlockQuote = require('@udecode/plate-block-quote');
var plateFont = require('@udecode/plate-font');
var plateHighlight = require('@udecode/plate-highlight');
var plateHorizontalRule = require('@udecode/plate-horizontal-rule');
var plateIndent = require('@udecode/plate-indent');
var plateKbd = require('@udecode/plate-kbd');
var plateLineHeight = require('@udecode/plate-line-height');
var plateLink = require('@udecode/plate-link');
var plateMention = require('@udecode/plate-mention');
var plateTable = require('@udecode/plate-table');
var plateToggle = require('@udecode/plate-toggle');
var lowlight$1 = require('lowlight');
var useFilePicker = require('use-file-picker');
var sonner = require('sonner');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var plateFloating = require('@udecode/plate-floating');
var plateSuggestion = require('@udecode/plate-suggestion');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var dateFns = require('date-fns');
var reactDayPicker = require('react-day-picker');
var react$e = require('@ariakit/react');
var plateCombobox = require('@udecode/plate-combobox');
var react$A = require('@udecode/plate-combobox/react');
var TextareaAutosize = require('react-textarea-autosize');
var react$h = require('@udecode/plate-selection/react');
var plateAi = require('@udecode/plate-ai');
var cmdk = require('cmdk');
var react$z = require('@ai-sdk/react');
require('@radix-ui/react-dialog');
var react$i = require('@udecode/plate-alignment/react');
var plateAutoformat = require('@udecode/plate-autoformat');
var react$l = require('@udecode/plate-autoformat/react');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var plateDnd = require('@udecode/plate-dnd');
var plateSelect = require('@udecode/plate-select');
var plateNodeId = require('@udecode/plate-node-id');
var react$m = require('@udecode/plate-break/react');
var react$n = require('@udecode/plate-indent/react');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var react$o = require('@udecode/plate-line-height/react');
var react$p = require('@udecode/plate-caption/react');
var react$r = require('@udecode/plate-reset-node/react');
var plateResizable = require('@udecode/plate-resizable');
var LiteYouTubeEmbed = require('react-lite-youtube-embed');
var reactTweet = require('react-tweet');
var react$x = require('@uploadthing/react');
var zod = require('zod');
var ReactPlayer = require('react-player');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React19__namespace = /*#__PURE__*/_interopNamespace(React19);
var remarkGfm__default = /*#__PURE__*/_interopDefault(remarkGfm);
var remarkMath__default = /*#__PURE__*/_interopDefault(remarkMath);
var emojiMartData__default = /*#__PURE__*/_interopDefault(emojiMartData);
var ToolbarPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToolbarPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var TextareaAutosize__default = /*#__PURE__*/_interopDefault(TextareaAutosize);
var ContextMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(ContextMenuPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var LiteYouTubeEmbed__default = /*#__PURE__*/_interopDefault(LiteYouTubeEmbed);
var ReactPlayer__default = /*#__PURE__*/_interopDefault(ReactPlayer);

// src/components/editor/plate-editor.tsx
var AISidebarContext = React19.createContext(void 0);
function AISidebarProvider({ children }) {
  const [isOpen, setIsOpen] = React19.useState(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AISidebarContext.Provider,
    {
      value: {
        closeSidebar,
        isOpen,
        openSidebar,
        toggleSidebar
      },
      children
    }
  );
}
function useAISidebar() {
  const context = React19.useContext(AISidebarContext);
  if (context === void 0) {
    throw new Error("useAISidebar must be used within an AISidebarProvider");
  }
  return context;
}
var GhostText = () => {
  const element = react$b.useElement();
  const isSuggested = react$b.usePluginOption(
    react$1.CopilotPlugin,
    "isSuggested",
    element.id
  );
  if (!isSuggested) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(GhostTextContent, {});
};
function GhostTextContent() {
  const suggestionText = react$b.usePluginOption(react$1.CopilotPlugin, "suggestionText");
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: "pointer-events-none text-muted-foreground/70 max-sm:hidden",
      contentEditable: false,
      children: suggestionText && suggestionText
    }
  );
}
var markdownPlugin = plateMarkdown.MarkdownPlugin.configure({
  options: {
    disallowedNodes: [react.SuggestionPlugin.key],
    remarkPlugins: [remarkMath__default.default, remarkGfm__default.default, plateMarkdown.remarkMdx, plateMarkdown.remarkMention]
  }
});

// src/components/editor/plugins/copilot-plugins.tsx
var copilotPlugins = [
  markdownPlugin,
  react$1.CopilotPlugin.configure(({ api }) => ({
    options: {
      completeOptions: {
        api: "/api/ai/copilot",
        body: {
          system: `You are an advanced AI writing assistant, similar to VSCode Copilot but for general text. Your task is to predict and generate the next part of the text based on the given context.
  
  Rules:
  - Continue the text naturally up to the next punctuation mark (., ,, ;, :, ?, or !).
  - Maintain style and tone. Don't repeat given text.
  - For unclear context, provide the most likely continuation.
  - Handle code snippets, lists, or structured text if needed.
  - Don't include """ in your response.
  - CRITICAL: Always end with a punctuation mark.
  - CRITICAL: Avoid starting a new block. Do not use block formatting like >, #, 1., 2., -, etc. The suggestion should continue in the same block as the context.
  - If no context is provided or you can't generate a continuation, return "0" without explanation.`
        },
        onError: () => {
          api.copilot.setBlockSuggestion({
            text: plateMarkdown.stripMarkdown(faker.faker.lorem.sentence())
          });
        },
        onFinish: (_, completion) => {
          if (completion === "0") return;
          api.copilot.setBlockSuggestion({
            text: plateMarkdown.stripMarkdown(completion)
          });
        }
      },
      debounceDelay: 500,
      renderGhostText: GhostText,
      getPrompt: ({ editor }) => {
        const contextEntry = editor.api.block({ highest: true });
        if (!contextEntry) return "";
        const prompt = plateMarkdown.serializeMd(editor, {
          value: [contextEntry[0]]
        });
        return `Continue the text up to the next punctuation mark:
  """
  ${prompt}
  """`;
      }
    }
  }))
];
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    {
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      "data-slot": "dropdown-menu-content",
      sideOffset,
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    {
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      "data-inset": inset,
      "data-slot": "dropdown-menu-item",
      "data-variant": variant,
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  checked,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    {
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      "data-slot": "dropdown-menu-checkbox-item",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    {
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      "data-slot": "dropdown-menu-radio-item",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    {
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      "data-inset": inset,
      "data-slot": "dropdown-menu-label",
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    {
      className: cn("bg-border -mx-1 my-1 h-px", className),
      "data-slot": "dropdown-menu-separator",
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  children,
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    {
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      "data-inset": inset,
      "data-slot": "dropdown-menu-sub-trigger",
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    {
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      "data-slot": "dropdown-menu-sub-content",
      ...props
    }
  );
}
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    TooltipPrimitive__namespace.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function Toolbar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarPrimitive__namespace.Root,
    {
      className: cn("relative flex items-center select-none", className),
      ...props
    }
  );
}
function ToolbarToggleGroup2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarPrimitive__namespace.ToolbarToggleGroup,
    {
      className: cn("flex items-center", className),
      ...props
    }
  );
}
var toolbarButtonVariants = classVarianceAuthority.cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-checked:bg-accent aria-checked:text-accent-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-9 min-w-9 px-2",
        lg: "h-10 min-w-10 px-2.5",
        sm: "h-8 min-w-8 px-1.5"
      },
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      }
    }
  }
);
var dropdownArrowVariants = classVarianceAuthority.cva(
  cn(
    "inline-flex items-center justify-center rounded-r-md text-sm font-medium text-foreground transition-colors disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    defaultVariants: {
      size: "sm",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-9 w-6",
        lg: "h-10 w-8",
        sm: "h-8 w-4"
      },
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-muted-foreground aria-checked:bg-accent aria-checked:text-accent-foreground",
        outline: "border border-l-0 border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      }
    }
  }
);
var ToolbarButton = withTooltip(function ToolbarButton2({
  children,
  className,
  isDropdown,
  pressed,
  size = "sm",
  variant,
  ...props
}) {
  return typeof pressed === "boolean" ? /* @__PURE__ */ jsxRuntime.jsx(ToolbarToggleGroup2, { disabled: props.disabled, value: "single", type: "single", children: /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarToggleItem,
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        isDropdown && "justify-between gap-1 pr-1",
        className
      ),
      value: pressed ? "single" : "",
      ...props,
      children: isDropdown ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-1 items-center gap-2 whitespace-nowrap", children }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDown,
          {
            className: "size-3.5 text-muted-foreground",
            "data-icon": true
          }
        ) })
      ] }) : children
    }
  ) }) : /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarPrimitive__namespace.Button,
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        isDropdown && "pr-1",
        className
      ),
      ...props,
      children
    }
  );
});
function ToolbarSplitButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      className: cn("group flex gap-0 px-0 hover:bg-transparent", className),
      ...props
    }
  );
}
function ToolbarSplitButtonPrimary({
  children,
  className,
  size = "sm",
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        toolbarButtonVariants({
          size,
          variant
        }),
        "rounded-r-none",
        "group-data-[pressed=true]:bg-accent group-data-[pressed=true]:text-accent-foreground",
        className
      ),
      ...props,
      children
    }
  );
}
function ToolbarSplitButtonSecondary({
  className,
  size,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        dropdownArrowVariants({
          size,
          variant
        }),
        "group-data-[pressed=true]:bg-accent group-data-[pressed=true]:text-accent-foreground",
        className
      ),
      onClick: (e) => e.stopPropagation(),
      role: "button",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "size-3.5 text-muted-foreground", "data-icon": true })
    }
  );
}
function ToolbarToggleItem({
  className,
  size = "sm",
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarPrimitive__namespace.ToggleItem,
    {
      className: cn(toolbarButtonVariants({ size, variant }), className),
      ...props
    }
  );
}
function ToolbarGroup({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "group/toolbar-group",
        "relative hidden has-[button]:flex",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center", children }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-1.5 py-0.5 group-last/toolbar-group:hidden!", children: /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical" }) })
      ]
    }
  );
}
function withTooltip(Component) {
  return function ExtendComponent({
    tooltip,
    tooltipContentProps,
    tooltipProps,
    tooltipTriggerProps,
    ...props
  }) {
    const [mounted, setMounted] = React19__namespace.useState(false);
    React19__namespace.useEffect(() => {
      setMounted(true);
    }, []);
    const component = /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props });
    if (tooltip && mounted) {
      return /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { ...tooltipProps, children: [
        /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, ...tooltipTriggerProps, children: component }),
        /* @__PURE__ */ jsxRuntime.jsx(TooltipContent2, { ...tooltipContentProps, children: tooltip })
      ] });
    }
    return component;
  };
}
function TooltipContent2({
  children,
  className,
  // CHANGE
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Content,
    {
      className: cn(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground",
        className
      ),
      "data-slot": "tooltip-content",
      sideOffset,
      ...props,
      children
    }
  ) });
}
function ToolbarMenuGroup({
  children,
  className,
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      DropdownMenuSeparator,
      {
        className: cn(
          "hidden",
          "mb-0 shrink-0 peer-has-[[role=menuitem]]/menu-group:block peer-has-[[role=menuitemradio]]/menu-group:block peer-has-[[role=option]]/menu-group:block"
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DropdownMenuRadioGroup,
      {
        ...props,
        className: cn(
          "hidden",
          "peer/menu-group group/menu-group my-1.5 has-[[role=menuitem]]:block has-[[role=menuitemradio]]:block has-[[role=option]]:block",
          className
        ),
        children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { className: "text-xs font-semibold text-muted-foreground select-none", children: label }),
          children
        ]
      }
    )
  ] });
}
function FixedToolbar(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Toolbar,
    {
      ...props,
      className: cn(
        "scrollbar-hide w-full justify-between overflow-x-auto border-b border-b-border bg-background/95 px-1 py-0 backdrop-blur-sm supports-backdrop-blur:bg-background/60 relative z-40",
        props.className
      )
    }
  );
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button2({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function AIToolbarButton(props) {
  const { api } = react$b.useEditorPlugin(react$1.AIChatPlugin);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button2,
    {
      ...props,
      size: "sm",
      variant: "ghost",
      className: cn(
        'bg-accent text-accent-foreground relative flex cursor-default items-center rounded-md px-2 py-1 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 mt-1',
        props.className
      ),
      onClick: () => {
        api.aiChat.show();
      },
      onMouseDown: (e) => {
        e.preventDefault();
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Wand2, { className: "h-4 w-4" })
    }
  );
}
var STRUCTURAL_TYPES = [
  react$2.ColumnPlugin.key,
  react$2.ColumnItemPlugin.key,
  react$3.TablePlugin.key,
  react$3.TableRowPlugin.key,
  react$3.TableCellPlugin.key
];
var ACTION_THREE_COLUMNS = "action_three_columns";
var insertList = (editor, type) => {
  editor.tf.insertNodes(
    editor.api.create.block({
      indent: 1,
      listStyleType: type
    }),
    { select: true }
  );
};
var insertBlockMap = {
  [plateIndentList.INDENT_LIST_KEYS.todo]: insertList,
  [plateIndentList.ListStyleType.Decimal]: insertList,
  [plateIndentList.ListStyleType.Disc]: insertList,
  [ACTION_THREE_COLUMNS]: (editor) => plateLayout.insertColumnGroup(editor, { columns: 3, select: true }),
  [react$4.AudioPlugin.key]: (editor) => plateMedia.insertAudioPlaceholder(editor, { select: true }),
  [react$8.CalloutPlugin.key]: (editor) => plateCallout.insertCallout(editor, { select: true }),
  [react$7.CodeBlockPlugin.key]: (editor) => plateCodeBlock.insertCodeBlock(editor, { select: true }),
  [react$6.EquationPlugin.key]: (editor) => plateMath.insertEquation(editor, { select: true }),
  [react$4.FilePlugin.key]: (editor) => plateMedia.insertFilePlaceholder(editor, { select: true }),
  [react$4.ImagePlugin.key]: (editor) => plateMedia.insertMedia(editor, {
    select: true,
    type: react$4.ImagePlugin.key
  }),
  [react$4.MediaEmbedPlugin.key]: (editor) => plateMedia.insertMedia(editor, {
    select: true,
    type: react$4.MediaEmbedPlugin.key
  }),
  [react$3.TablePlugin.key]: (editor) => editor.getTransforms(react$3.TablePlugin).insert.table({}, { select: true }),
  [react$5.TocPlugin.key]: (editor) => plateHeading.insertToc(editor, { select: true }),
  [react$4.VideoPlugin.key]: (editor) => plateMedia.insertVideoPlaceholder(editor, { select: true })
};
var insertInlineMap = {
  [react$a.DatePlugin.key]: (editor) => plateDate.insertDate(editor, { select: true }),
  [react$6.InlineEquationPlugin.key]: (editor) => plateMath.insertInlineEquation(editor, "", { select: true }),
  [react$9.LinkPlugin.key]: (editor) => react$9.triggerFloatingLink(editor, { focused: true })
};
var insertBlock = (editor, type) => {
  editor.tf.withoutNormalizing(() => {
    const block = editor.api.block();
    if (!block) return;
    if (type in insertBlockMap) {
      insertBlockMap[type](editor, type);
    } else {
      editor.tf.insertNodes(editor.api.create.block({ type }), {
        at: plate.PathApi.next(block[1]),
        select: true
      });
    }
    if (getBlockType(block[0]) !== type) {
      editor.getApi(react.SuggestionPlugin).suggestion.withoutSuggestions(() => {
        editor.tf.removeNodes({ previousEmptyBlock: true });
      });
    }
  });
};
var insertInlineElement = (editor, type) => {
  if (insertInlineMap[type]) {
    insertInlineMap[type](editor, type);
  }
};
var setList = (editor, type, entry) => {
  editor.tf.setNodes(
    editor.api.create.block({
      indent: 1,
      listStyleType: type
    }),
    {
      at: entry[1]
    }
  );
};
var setBlockMap = {
  [plateIndentList.INDENT_LIST_KEYS.todo]: setList,
  [plateIndentList.ListStyleType.Decimal]: setList,
  [plateIndentList.ListStyleType.Disc]: setList,
  [ACTION_THREE_COLUMNS]: (editor) => plateLayout.toggleColumnGroup(editor, { columns: 3 })
};
var setBlockType = (editor, type, { at } = {}) => {
  editor.tf.withoutNormalizing(() => {
    const setEntry = (entry) => {
      const [node, path] = entry;
      if (node[react$f.IndentListPlugin.key]) {
        editor.tf.unsetNodes([react$f.IndentListPlugin.key, "indent"], { at: path });
      }
      if (type in setBlockMap) {
        return setBlockMap[type](editor, type, entry);
      }
      if (node.type !== type) {
        editor.tf.setNodes({ type }, { at: path });
      }
    };
    if (at) {
      const entry = editor.api.node(at);
      if (entry) {
        setEntry(entry);
        return;
      }
    }
    const entries = editor.api.blocks({ mode: "lowest" });
    entries.forEach((entry) => setEntry(entry));
  });
};
var getBlockType = (block) => {
  if (block[react$f.IndentListPlugin.key]) {
    if (block[react$f.IndentListPlugin.key] === plateIndentList.ListStyleType.Decimal) {
      return plateIndentList.ListStyleType.Decimal;
    } else if (block[react$f.IndentListPlugin.key] === plateIndentList.INDENT_LIST_KEYS.todo) {
      return plateIndentList.INDENT_LIST_KEYS.todo;
    } else {
      return plateIndentList.ListStyleType.Disc;
    }
  }
  return block.type;
};
var items = [
  {
    icon: lucideReact.AlignLeftIcon,
    value: "left"
  },
  {
    icon: lucideReact.AlignCenterIcon,
    value: "center"
  },
  {
    icon: lucideReact.AlignRightIcon,
    value: "right"
  },
  {
    icon: lucideReact.AlignJustifyIcon,
    value: "justify"
  }
];
function AlignDropdownMenu(props) {
  const editor = react$b.useEditorRef();
  const value = react$b.useSelectionFragmentProp({
    defaultValue: "start",
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => node.align
  });
  const [open, setOpen] = React19__namespace.useState(false);
  const IconValue = items.find((item) => item.value === value)?.icon ?? lucideReact.AlignLeftIcon;
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: open, tooltip: "Align", isDropdown: true, children: /* @__PURE__ */ jsxRuntime.jsx(IconValue, {}) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { className: "min-w-0", align: "start", children: /* @__PURE__ */ jsxRuntime.jsx(
      DropdownMenuRadioGroup,
      {
        value,
        onValueChange: (value2) => {
          plateAlignment.setAlign(editor, { value: value2 });
          editor.tf.focus();
        },
        children: items.map(({ icon: Icon, value: itemValue }) => /* @__PURE__ */ jsxRuntime.jsx(
          DropdownMenuRadioItem,
          {
            className: "pl-2 *:first:[span]:hidden",
            value: itemValue,
            children: /* @__PURE__ */ jsxRuntime.jsx(Icon, {})
          },
          itemValue
        ))
      }
    ) })
  ] });
}

// src/components/ui/color-constants.ts
var DEFAULT_COLORS = [
  {
    isBrightColor: false,
    name: "black",
    value: "#000000"
  },
  {
    isBrightColor: false,
    name: "dark grey 4",
    value: "#434343"
  },
  {
    isBrightColor: false,
    name: "dark grey 3",
    value: "#666666"
  },
  {
    isBrightColor: false,
    name: "dark grey 2",
    value: "#999999"
  },
  {
    isBrightColor: false,
    name: "dark grey 1",
    value: "#B7B7B7"
  },
  {
    isBrightColor: false,
    name: "grey",
    value: "#CCCCCC"
  },
  {
    isBrightColor: false,
    name: "light grey 1",
    value: "#D9D9D9"
  },
  {
    isBrightColor: true,
    name: "light grey 2",
    value: "#EFEFEF"
  },
  {
    isBrightColor: true,
    name: "light grey 3",
    value: "#F3F3F3"
  },
  {
    isBrightColor: true,
    name: "white",
    value: "#FFFFFF"
  },
  {
    isBrightColor: false,
    name: "red berry",
    value: "#980100"
  },
  {
    isBrightColor: false,
    name: "red",
    value: "#FE0000"
  },
  {
    isBrightColor: false,
    name: "orange",
    value: "#FE9900"
  },
  {
    isBrightColor: true,
    name: "yellow",
    value: "#FEFF00"
  },
  {
    isBrightColor: false,
    name: "green",
    value: "#00FF00"
  },
  {
    isBrightColor: false,
    name: "cyan",
    value: "#00FFFF"
  },
  {
    isBrightColor: false,
    name: "cornflower blue",
    value: "#4B85E8"
  },
  {
    isBrightColor: false,
    name: "blue",
    value: "#1300FF"
  },
  {
    isBrightColor: false,
    name: "purple",
    value: "#9900FF"
  },
  {
    isBrightColor: false,
    name: "magenta",
    value: "#FF00FF"
  },
  {
    isBrightColor: false,
    name: "light red berry 3",
    value: "#E6B8AF"
  },
  {
    isBrightColor: false,
    name: "light red 3",
    value: "#F4CCCC"
  },
  {
    isBrightColor: true,
    name: "light orange 3",
    value: "#FCE4CD"
  },
  {
    isBrightColor: true,
    name: "light yellow 3",
    value: "#FFF2CC"
  },
  {
    isBrightColor: true,
    name: "light green 3",
    value: "#D9EAD3"
  },
  {
    isBrightColor: false,
    name: "light cyan 3",
    value: "#D0DFE3"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 3",
    value: "#C9DAF8"
  },
  {
    isBrightColor: true,
    name: "light blue 3",
    value: "#CFE1F3"
  },
  {
    isBrightColor: true,
    name: "light purple 3",
    value: "#D9D2E9"
  },
  {
    isBrightColor: true,
    name: "light magenta 3",
    value: "#EAD1DB"
  },
  {
    isBrightColor: false,
    name: "light red berry 2",
    value: "#DC7E6B"
  },
  {
    isBrightColor: false,
    name: "light red 2",
    value: "#EA9999"
  },
  {
    isBrightColor: false,
    name: "light orange 2",
    value: "#F9CB9C"
  },
  {
    isBrightColor: true,
    name: "light yellow 2",
    value: "#FFE598"
  },
  {
    isBrightColor: false,
    name: "light green 2",
    value: "#B7D6A8"
  },
  {
    isBrightColor: false,
    name: "light cyan 2",
    value: "#A1C4C9"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 2",
    value: "#A4C2F4"
  },
  {
    isBrightColor: false,
    name: "light blue 2",
    value: "#9FC5E8"
  },
  {
    isBrightColor: false,
    name: "light purple 2",
    value: "#B5A7D5"
  },
  {
    isBrightColor: false,
    name: "light magenta 2",
    value: "#D5A6BD"
  },
  {
    isBrightColor: false,
    name: "light red berry 1",
    value: "#CC4125"
  },
  {
    isBrightColor: false,
    name: "light red 1",
    value: "#E06666"
  },
  {
    isBrightColor: false,
    name: "light orange 1",
    value: "#F6B26B"
  },
  {
    isBrightColor: false,
    name: "light yellow 1",
    value: "#FFD966"
  },
  {
    isBrightColor: false,
    name: "light green 1",
    value: "#93C47D"
  },
  {
    isBrightColor: false,
    name: "light cyan 1",
    value: "#76A5AE"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 1",
    value: "#6C9EEB"
  },
  {
    isBrightColor: false,
    name: "light blue 1",
    value: "#6FA8DC"
  },
  {
    isBrightColor: false,
    name: "light purple 1",
    value: "#8D7CC3"
  },
  {
    isBrightColor: false,
    name: "light magenta 1",
    value: "#C27BA0"
  },
  {
    isBrightColor: false,
    name: "dark red berry 1",
    value: "#A61B00"
  },
  {
    isBrightColor: false,
    name: "dark red 1",
    value: "#CC0000"
  },
  {
    isBrightColor: false,
    name: "dark orange 1",
    value: "#E59138"
  },
  {
    isBrightColor: false,
    name: "dark yellow 1",
    value: "#F1C231"
  },
  {
    isBrightColor: false,
    name: "dark green 1",
    value: "#6AA74F"
  },
  {
    isBrightColor: false,
    name: "dark cyan 1",
    value: "#45818E"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 1",
    value: "#3B78D8"
  },
  {
    isBrightColor: false,
    name: "dark blue 1",
    value: "#3E84C6"
  },
  {
    isBrightColor: false,
    name: "dark purple 1",
    value: "#664EA6"
  },
  {
    isBrightColor: false,
    name: "dark magenta 1",
    value: "#A64D78"
  },
  {
    isBrightColor: false,
    name: "dark red berry 2",
    value: "#84200D"
  },
  {
    isBrightColor: false,
    name: "dark red 2",
    value: "#990001"
  },
  {
    isBrightColor: false,
    name: "dark orange 2",
    value: "#B45F05"
  },
  {
    isBrightColor: false,
    name: "dark yellow 2",
    value: "#BF9002"
  },
  {
    isBrightColor: false,
    name: "dark green 2",
    value: "#38761D"
  },
  {
    isBrightColor: false,
    name: "dark cyan 2",
    value: "#124F5C"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 2",
    value: "#1155CB"
  },
  {
    isBrightColor: false,
    name: "dark blue 2",
    value: "#0C5394"
  },
  {
    isBrightColor: false,
    name: "dark purple 2",
    value: "#351C75"
  },
  {
    isBrightColor: false,
    name: "dark magenta 2",
    value: "#741B47"
  },
  {
    isBrightColor: false,
    name: "dark red berry 3",
    value: "#5B0F00"
  },
  {
    isBrightColor: false,
    name: "dark red 3",
    value: "#660000"
  },
  {
    isBrightColor: false,
    name: "dark orange 3",
    value: "#783F04"
  },
  {
    isBrightColor: false,
    name: "dark yellow 3",
    value: "#7E6000"
  },
  {
    isBrightColor: false,
    name: "dark green 3",
    value: "#274E12"
  },
  {
    isBrightColor: false,
    name: "dark cyan 3",
    value: "#0D343D"
  },
  {
    isBrightColor: false,
    name: "dark cornflower blue 3",
    value: "#1B4487"
  },
  {
    isBrightColor: false,
    name: "dark blue 3",
    value: "#083763"
  },
  {
    isBrightColor: false,
    name: "dark purple 3",
    value: "#1F124D"
  },
  {
    isBrightColor: false,
    name: "dark magenta 3",
    value: "#4C1130"
  }
];
var DEFAULT_CUSTOM_COLORS = [
  {
    isBrightColor: false,
    name: "dark orange 3",
    value: "#783F04"
  },
  {
    isBrightColor: false,
    name: "dark grey 3",
    value: "#666666"
  },
  {
    isBrightColor: false,
    name: "dark grey 2",
    value: "#999999"
  },
  {
    isBrightColor: false,
    name: "light cornflower blue 1",
    value: "#6C9EEB"
  },
  {
    isBrightColor: false,
    name: "dark magenta 3",
    value: "#4C1130"
  }
];
function ColorDropdownMenuItem({
  className,
  isBrightColor,
  isSelected,
  name,
  updateColor,
  value,
  ...props
}) {
  const content = /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuItem,
    {
      className: cn(
        buttonVariants({
          size: "icon",
          variant: "outline"
        }),
        "my-1 flex size-6 items-center justify-center rounded-full border border-solid border-muted p-0 transition-all hover:scale-125",
        !isBrightColor && "border-transparent",
        isSelected && "border-2 border-primary",
        className
      ),
      style: { backgroundColor: value },
      onSelect: (e) => {
        e.preventDefault();
        updateColor(value);
      },
      ...props
    }
  );
  return name ? /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { children: content }),
    /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { className: "mb-1 capitalize", children: name })
  ] }) : content;
}
function ColorDropdownMenuItems({
  className,
  color,
  colors,
  updateColor,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-[repeat(10,1fr)] place-items-center gap-x-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(TooltipProvider, { children: [
        colors.map(({ isBrightColor, name, value }) => /* @__PURE__ */ jsxRuntime.jsx(
          ColorDropdownMenuItem,
          {
            name,
            value,
            isBrightColor,
            isSelected: color === value,
            updateColor
          },
          name ?? value
        )),
        props.children
      ] })
    }
  );
}
function ColorInput({
  children,
  className,
  value = "#000000",
  ...props
}) {
  const { childProps, inputRef } = react$t.useColorInput();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [
    React19__namespace.Children.map(children, (child) => {
      if (!child) return child;
      return React19__namespace.cloneElement(child, childProps);
    }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ...props,
        ref: react$b.useComposedRef(props.ref, inputRef),
        className: cn("size-0 overflow-hidden border-0 p-0", className),
        value,
        type: "color"
      }
    )
  ] });
}
function ColorCustom({
  className,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}) {
  const state = react$t.useColorsCustomState({
    color,
    colors,
    customColors,
    updateCustomColor
  });
  const { inputProps, menuItemProps } = react$t.useColorsCustom(state);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative flex flex-col gap-4", className), ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
    ColorDropdownMenuItems,
    {
      color,
      colors: state.computedColors,
      updateColor,
      children: /* @__PURE__ */ jsxRuntime.jsx(ColorInput, { ...inputProps, children: /* @__PURE__ */ jsxRuntime.jsxs(
        DropdownMenuItem,
        {
          className: cn(
            buttonVariants({
              size: "icon",
              variant: "outline"
            }),
            "absolute top-1 right-2 bottom-2 flex size-8 items-center justify-center rounded-full"
          ),
          ...menuItemProps,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Custom" }),
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PlusIcon, {})
          ]
        }
      ) })
    }
  ) });
}
function ColorPickerContent({
  className,
  clearColor,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col", className), ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ToolbarMenuGroup, { label: "Custom Colors", children: /* @__PURE__ */ jsxRuntime.jsx(
      ColorCustom,
      {
        color,
        className: "px-2",
        colors,
        customColors,
        updateColor,
        updateCustomColor
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(ToolbarMenuGroup, { label: "Default Colors", children: /* @__PURE__ */ jsxRuntime.jsx(
      ColorDropdownMenuItems,
      {
        color,
        className: "px-2",
        colors,
        updateColor
      }
    ) }),
    color && /* @__PURE__ */ jsxRuntime.jsx(ToolbarMenuGroup, { children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { className: "p-2", onClick: clearColor, children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EraserIcon, {}),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Clear" })
    ] }) })
  ] });
}
var ColorPicker = React19__namespace.memo(
  ColorPickerContent,
  (prev, next) => prev.color === next.color && prev.colors === next.colors && prev.customColors === next.customColors
);
function ColorDropdownMenu({
  children,
  nodeType,
  tooltip
}) {
  const state = react$t.useColorDropdownMenuState({
    closeOnSelect: true,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    nodeType
  });
  const { buttonProps, menuProps } = react$t.useColorDropdownMenu(state);
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { modal: false, ...menuProps, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { tooltip, ...buttonProps, children }) }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsxRuntime.jsx(
      ColorPicker,
      {
        color: state.selectedColor || state.color,
        clearColor: state.clearColor,
        colors: state.colors,
        customColors: state.customColors,
        updateColor: state.updateColorAndClose,
        updateCustomColor: state.updateColor
      }
    ) })
  ] });
}
var commentsPlugin = react$b.toTPlatePlugin(
  plateComments.BaseCommentsPlugin,
  {
    handlers: {
      onClick: ({ api, event, setOption, type }) => {
        let leaf = event.target;
        let isSet = false;
        const unsetActiveSuggestion = () => {
          setOption("activeId", null);
          isSet = true;
        };
        if (!plate.isSlateString(leaf)) unsetActiveSuggestion();
        while (leaf.parentElement) {
          if (leaf.classList.contains(`slate-${type}`)) {
            const commentsEntry = api.comment.node();
            if (!commentsEntry) {
              unsetActiveSuggestion();
              break;
            }
            const id = api.comment.nodeId(commentsEntry[0]);
            setOption("activeId", id ?? null);
            isSet = true;
            break;
          }
          leaf = leaf.parentElement;
        }
        if (!isSet) unsetActiveSuggestion();
      }
    },
    options: {
      activeId: null,
      commentingBlock: null,
      hotkey: ["meta+shift+m", "ctrl+shift+m"],
      hoverId: null,
      uniquePathMap: /* @__PURE__ */ new Map()
    },
    useHooks: ({ editor, getOptions }) => {
      const { hotkey } = getOptions();
      react$b.useHotkeys(
        hotkey,
        (e) => {
          if (!editor.selection) return;
          e.preventDefault();
          if (!editor.api.isExpanded()) return;
        },
        {
          enableOnContentEditable: true
        }
      );
    }
  }
);
function CommentToolbarButton() {
  const { editor, setOption, tf } = react$b.useEditorPlugin(commentsPlugin);
  const onCommentToolbarButton = React19__namespace.useCallback(() => {
    if (!editor.selection) return;
    tf.comment.setDraft();
    editor.tf.collapse();
    setOption("activeId", plateComments.getDraftCommentKey());
    setOption("commentingBlock", editor.selection.focus.path.slice(0, 1));
  }, [editor.selection, editor.tf, setOption, tf.comment]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      onClick: onCommentToolbarButton,
      "data-plate-prevent-overlay": true,
      tooltip: "Comment",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessageSquareTextIcon, {})
    }
  );
}
var emojiCategoryIcons = {
  activity: {
    outline: /* @__PURE__ */ jsxRuntime.jsxs(
      "svg",
      {
        className: "size-full",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    ),
    solid: /* @__PURE__ */ jsxRuntime.jsxs(
      "svg",
      {
        className: "size-full",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m5 4.9 14 14.2" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.9 10.6a10.1 10.1 0 0 0-11.3 11.3" })
        ]
      }
    )
  },
  custom: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.StarIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.StarIcon, { className: "size-full" })
  },
  flags: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FlagIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FlagIcon, { className: "size-full" })
  },
  foods: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AppleIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AppleIcon, { className: "size-full" })
  },
  frequent: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ClockIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ClockIcon, { className: "size-full" })
  },
  nature: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LeafIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LeafIcon, { className: "size-full" })
  },
  objects: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LightbulbIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LightbulbIcon, { className: "size-full" })
  },
  people: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SmileIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SmileIcon, { className: "size-full" })
  },
  places: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CompassIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CompassIcon, { className: "size-full" })
  },
  symbols: {
    outline: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MusicIcon, { className: "size-full" }),
    solid: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MusicIcon, { className: "size-full" })
  }
};
var emojiSearchIcons = {
  delete: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-4 text-current" }),
  loupe: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SearchIcon, { className: "size-4 text-current" })
};
var Button3 = React19__namespace.memo(
  ({ emoji, index, onMouseOver, onSelect }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: "group relative flex size-9 cursor-pointer items-center justify-center border-none bg-transparent text-2xl leading-none",
        onClick: () => onSelect(emoji),
        onMouseEnter: () => onMouseOver(emoji),
        onMouseLeave: () => onMouseOver(),
        "aria-label": emoji.skins[0].native,
        "data-index": index,
        tabIndex: -1,
        type: "button",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "relative",
              style: {
                fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
              },
              "data-emoji-set": "native",
              children: emoji.skins[0].native
            }
          )
        ]
      }
    );
  }
);
Button3.displayName = "Button";
var RowOfButtons = React19__namespace.memo(
  ({ emojiLibrary, row, onMouseOver, onSelectEmoji }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex", "data-index": row.id, children: row.elements.map((emojiId, index) => /* @__PURE__ */ jsxRuntime.jsx(
    Button3,
    {
      onMouseOver,
      onSelect: onSelectEmoji,
      emoji: emojiLibrary.getEmoji(emojiId),
      index
    },
    emojiId
  )) }, row.id)
);
RowOfButtons.displayName = "RowOfButtons";
function EmojiPickerContent({
  emojiLibrary,
  i18n,
  isSearching = false,
  refs,
  searchResult,
  settings = plateEmoji.EmojiSettings,
  visibleCategories,
  onMouseOver,
  onSelectEmoji
}) {
  const getRowWidth = settings.perLine.value * settings.buttonSize.value;
  const isCategoryVisible = React19__namespace.useCallback(
    (categoryId) => {
      return visibleCategories.has(categoryId) ? visibleCategories.get(categoryId) : false;
    },
    [visibleCategories]
  );
  const EmojiList = React19__namespace.useCallback(() => {
    return emojiLibrary.getGrid().sections().map(({ id: categoryId }) => {
      const section = emojiLibrary.getGrid().section(categoryId);
      const { buttonSize } = settings;
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: section.root,
          style: { width: getRowWidth },
          "data-id": categoryId,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold backdrop-blur-xs", children: i18n.categories[categoryId] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: "relative flex flex-wrap",
                style: { height: section.getRows().length * buttonSize.value },
                children: isCategoryVisible(categoryId) && section.getRows().map((row) => /* @__PURE__ */ jsxRuntime.jsx(
                  RowOfButtons,
                  {
                    onMouseOver,
                    onSelectEmoji,
                    emojiLibrary,
                    row
                  },
                  row.id
                ))
              }
            )
          ]
        },
        categoryId
      );
    });
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.categories,
    isCategoryVisible,
    onSelectEmoji,
    onMouseOver,
    settings
  ]);
  const SearchList = React19__namespace.useCallback(() => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: getRowWidth }, "data-id": "search", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sticky -top-px z-1 bg-popover/90 p-1 py-2 text-sm font-semibold text-card-foreground backdrop-blur-xs", children: i18n.searchResult }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative flex flex-wrap", children: searchResult.map((emoji, index) => /* @__PURE__ */ jsxRuntime.jsx(
        Button3,
        {
          onMouseOver,
          onSelect: onSelectEmoji,
          emoji: emojiLibrary.getEmoji(emoji.id),
          index
        },
        emoji.id
      )) })
    ] });
  }, [
    emojiLibrary,
    getRowWidth,
    i18n.searchResult,
    searchResult,
    onSelectEmoji,
    onMouseOver
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: refs.current.contentRoot,
      className: cn(
        "h-full min-h-[50%] overflow-x-hidden overflow-y-auto px-2",
        "[&::-webkit-scrollbar]:w-4",
        "[&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-button]:size-0",
        "[&::-webkit-scrollbar-thumb]:min-h-11 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:hover:bg-muted-foreground/25",
        "[&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-popover [&::-webkit-scrollbar-thumb]:bg-clip-padding"
      ),
      "data-id": "scroll",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: refs.current.content, className: "h-full", children: isSearching ? SearchList() : EmojiList() })
    }
  );
}
function EmojiPickerNavigation({
  emojiLibrary,
  focusedCategory,
  i18n,
  icons,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { delayDuration: 500, children: /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      id: "emoji-nav",
      className: "mb-2.5 border-0 border-b border-solid border-b-border p-1.5",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative flex items-center justify-evenly", children: emojiLibrary.getGrid().sections().map(({ id }) => /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          Button2,
          {
            size: "sm",
            variant: "ghost",
            className: cn(
              "h-fit rounded-full fill-current p-1.5 text-muted-foreground hover:bg-muted hover:text-muted-foreground",
              id === focusedCategory && "pointer-events-none bg-accent fill-current text-accent-foreground"
            ),
            onClick: () => {
              onClick(id);
            },
            "aria-label": i18n.categories[id],
            type: "button",
            children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex size-5 items-center justify-center", children: icons.categories[id].outline })
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { side: "bottom", children: i18n.categories[id] })
      ] }, id)) })
    }
  ) });
}
function EmojiPreview({ emoji }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center text-2xl", children: emoji?.skins[0].native }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate text-sm font-semibold", children: emoji?.name }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate text-sm", children: `:${emoji?.id}:` })
    ] })
  ] });
}
function NoEmoji({ i18n }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center text-2xl", children: "\u{1F622}" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "overflow-hidden pl-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate text-sm font-bold", children: i18n.searchNoResultsTitle }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate text-sm", children: i18n.searchNoResultsSubtitle })
    ] })
  ] });
}
function PickAnEmoji({ i18n }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-14 max-h-14 min-h-14 items-center border-t border-muted p-2", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center text-2xl", children: "\u261D\uFE0F" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-hidden pl-2", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate text-sm font-semibold", children: i18n.pick }) })
  ] });
}
function EmojiPickerPreview({
  emoji,
  hasFound = true,
  i18n,
  isSearching = false,
  ...props
}) {
  const showPickEmoji = !emoji && (!isSearching || hasFound);
  const showNoEmoji = isSearching && !hasFound;
  const showPreview = emoji && !showNoEmoji && !showNoEmoji;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    showPreview && /* @__PURE__ */ jsxRuntime.jsx(EmojiPreview, { emoji, ...props }),
    showPickEmoji && /* @__PURE__ */ jsxRuntime.jsx(PickAnEmoji, { i18n, ...props }),
    showNoEmoji && /* @__PURE__ */ jsxRuntime.jsx(NoEmoji, { i18n, ...props })
  ] });
}
function EmojiPickerSearchAndClear({
  clearSearch,
  i18n,
  searchValue
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center text-foreground", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "absolute top-1/2 left-2.5 z-10 flex size-5 -translate-y-1/2 items-center justify-center text-foreground"
        ),
        children: emojiSearchIcons.loupe
      }
    ),
    searchValue && /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        size: "icon",
        variant: "ghost",
        className: cn(
          "absolute top-1/2 right-0.5 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-popover-foreground hover:bg-transparent"
        ),
        onClick: clearSearch,
        title: i18n.clear,
        "aria-label": "Clear",
        type: "button",
        children: emojiSearchIcons.delete
      }
    )
  ] });
}
function EmojiPickerSearchBar({
  children,
  i18n,
  searchValue,
  setSearch
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center px-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex grow items-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        className: "block w-full appearance-none rounded-full border-0 bg-muted px-10 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none",
        value: searchValue,
        onChange: (event) => setSearch(event.target.value),
        placeholder: i18n.search,
        "aria-label": "Search",
        autoComplete: "off",
        type: "text",
        autoFocus: true
      }
    ),
    children
  ] }) });
}
function EmojiPicker({
  clearSearch,
  emoji,
  emojiLibrary,
  focusedCategory,
  hasFound,
  i18n,
  icons,
  isSearching,
  refs,
  searchResult,
  searchValue,
  setSearch,
  settings = plateEmoji.EmojiSettings,
  visibleCategories,
  handleCategoryClick,
  onMouseOver,
  onSelectEmoji
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col rounded-xl bg-popover text-popover-foreground",
        "h-[23rem] w-80 border shadow-md"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          EmojiPickerNavigation,
          {
            onClick: handleCategoryClick,
            emojiLibrary,
            focusedCategory,
            i18n,
            icons
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          EmojiPickerSearchBar,
          {
            i18n,
            searchValue,
            setSearch,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              EmojiPickerSearchAndClear,
              {
                clearSearch,
                i18n,
                searchValue
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          EmojiPickerContent,
          {
            onMouseOver,
            onSelectEmoji,
            emojiLibrary,
            i18n,
            isSearching,
            refs,
            searchResult,
            settings,
            visibleCategories
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          EmojiPickerPreview,
          {
            emoji,
            hasFound,
            i18n,
            isSearching
          }
        )
      ]
    }
  );
}
function EmojiToolbarDropdown({
  children,
  control,
  isOpen,
  setIsOpen
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(PopoverPrimitive__namespace.Root, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { asChild: true, children: control }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Content, { className: "z-100", children }) })
  ] });
}
function EmojiDropdownMenu({
  options,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = react$w.useEmojiDropdownMenuState(options);
  return /* @__PURE__ */ jsxRuntime.jsx(
    EmojiToolbarDropdown,
    {
      control: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: isOpen, tooltip: "Emoji", isDropdown: true, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Smile, {}) }),
      isOpen,
      setIsOpen,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        EmojiPicker,
        {
          ...emojiPickerState,
          icons: {
            categories: emojiCategoryIcons,
            search: emojiSearchIcons
          },
          isOpen,
          setIsOpen,
          settings: options?.settings
        }
      )
    }
  );
}
function BlockquoteElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  );
}
function CodeBlockElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative rounded-md bg-muted/50", children: /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ jsxRuntime.jsx("code", { children: props.children }) }) })
    }
  );
}
function CodeLeafStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateLeaf,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}
function CodeLineElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateElement, { ...props });
}
function CodeSyntaxLeafStatic(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateLeaf, { className: tokenClassName, ...props });
}
function ColumnElementStatic(props) {
  const { width } = props.element;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative h-full border border-transparent p-1.5", children: props.children })
    }
  ) });
}
function ColumnGroupElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateElement, { className: "mb-2", ...props, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-full rounded", children: props.children }) });
}
function CommentLeafStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateLeaf,
    {
      ...props,
      className: "border-b-2 border-b-highlight/35 bg-highlight/15",
      children: props.children
    }
  );
}
function DateElementStatic(props) {
  const { element } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { className: "inline-block", ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-fit rounded-sm bg-muted px-1 text-muted-foreground", children: element.date ? (() => {
      const today = /* @__PURE__ */ new Date();
      const elementDate = new Date(element.date);
      const isToday = elementDate.getDate() === today.getDate() && elementDate.getMonth() === today.getMonth() && elementDate.getFullYear() === today.getFullYear();
      const isYesterday = new Date(today.setDate(today.getDate() - 1)).toDateString() === elementDate.toDateString();
      const isTomorrow = new Date(today.setDate(today.getDate() + 2)).toDateString() === elementDate.toDateString();
      if (isToday) return "Today";
      if (isYesterday) return "Yesterday";
      if (isTomorrow) return "Tomorrow";
      return elementDate.toLocaleDateString(void 0, {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    })() : /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Pick a date" }) }),
    props.children
  ] });
}
var headingVariants = classVarianceAuthority.cva("relative mb-1", {
  variants: {
    variant: {
      h1: "mt-[1.6em] pb-1 font-heading text-4xl font-bold",
      h2: "mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight",
      h3: "mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight",
      h4: "mt-[0.75em] font-heading text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight"
    }
  }
});
function HeadingElementStatic({
  variant = "h1",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      as: variant,
      className: headingVariants({ variant }),
      ...props,
      children: props.children
    }
  );
}
function HighlightLeafStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateLeaf, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}
function HrElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "cursor-text py-6", contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
      "hr",
      {
        className: cn(
          "h-0.5 rounded-sm border-none bg-muted bg-clip-content"
        )
      }
    ) }),
    props.children
  ] });
}
function ImageElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { ...props, className: "py-2.5", children: [
    /* @__PURE__ */ jsxRuntime.jsx("figure", { className: "group relative m-0 inline-block", style: { width }, children: /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "relative max-w-full min-w-[92px]",
        style: { textAlign: align },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              className: cn(
                "w-full max-w-full cursor-default object-cover px-0",
                "rounded-sm"
              ),
              alt: props.attributes.alt,
              src: url
            }
          ),
          caption && /* @__PURE__ */ jsxRuntime.jsx("figcaption", { className: "mx-auto mt-2 h-[24px] max-w-full", children: plate.NodeApi.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}
var FireMarker = (props) => {
  const { element } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: "select-none",
      style: { left: -26, position: "absolute", top: -1 },
      "data-plate-prevent-deserialization": true,
      contentEditable: false,
      children: element.indent % 2 === 0 ? "\u{1F525}" : "\u{1F680}"
    }
  ) });
};
var FireLiComponent = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: "list-none", children });
};
function TodoMarkerStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxStatic,
    {
      className: "pointer-events-none absolute top-1 -left-6",
      checked: props.element.checked
    }
  ) });
}
function TodoLiStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      className: cn(
        "list-none",
        props.element.checked && "text-muted-foreground line-through"
      ),
      children: props.children
    }
  );
}
function CheckboxStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: cn(
        "peer size-4 shrink-0 rounded-sm border border-primary bg-background ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        props.className
      ),
      style: props.style,
      "data-state": props.checked ? "checked" : "unchecked",
      type: "button",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center justify-center text-current"), children: props.checked && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) })
    }
  );
}
function KbdLeafStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateLeaf,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}
function LinkElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      ...props,
      as: "a",
      className: "font-medium text-primary underline decoration-primary underline-offset-4",
      children: props.children
    }
  );
}
function MediaAudioElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { ...props, className: "mb-1", children: [
    /* @__PURE__ */ jsxRuntime.jsx("figure", { className: "group relative cursor-default", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-16", children: /* @__PURE__ */ jsxRuntime.jsx("audio", { className: "size-full", src: props.element.url, controls: true }) }) }),
    props.children
  ] });
}
function MediaFileElementStatic(props) {
  const { name, url } = props.element;
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { className: "my-px rounded-sm", ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        className: "group relative m-0 flex cursor-pointer items-center rounded px-0.5 py-[3px] hover:bg-muted",
        contentEditable: false,
        download: name,
        href: url,
        rel: "noopener noreferrer",
        role: "button",
        target: "_blank",
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1 p-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileUp, { className: "size-5" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { children: name })
        ] })
      }
    ),
    props.children
  ] });
}
function MediaVideoElementStatic(props) {
  const { align = "center", caption, url, width } = props.element;
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { className: "py-2.5", ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { textAlign: align }, children: /* @__PURE__ */ jsxRuntime.jsxs(
      "figure",
      {
        className: "group relative m-0 inline-block cursor-default",
        style: { width },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "video",
            {
              className: "w-full max-w-full rounded-sm object-cover px-0",
              src: url,
              controls: true
            }
          ),
          caption && /* @__PURE__ */ jsxRuntime.jsx("figcaption", { children: plate.NodeApi.string(caption[0]) })
        ]
      }
    ) }),
    props.children
  ] });
}
function MentionElementStatic(props) {
  const { prefix } = props;
  const element = props.element;
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      className: cn(
        "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium",
        element.children[0].bold === true && "font-bold",
        element.children[0].italic === true && "italic",
        element.children[0].underline === true && "underline"
      ),
      "data-slate-value": element.value,
      ...props,
      children: plate.IS_APPLE ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
          props.children,
          prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
          prefix,
          element.value,
          props.children
        ] })
      )
    }
  );
}
function ParagraphElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateElement, { ...props, className: cn("m-0 px-0 py-1"), children: props.children });
}
function TableCellElementStatic({
  isHeader,
  ...props
}) {
  const { editor, element } = props;
  const { api } = editor.getPlugin(plateTable.BaseTablePlugin);
  const { minHeight, width } = api.table.getCellSize({ element });
  const borders = api.table.getCellBorders({ element });
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      ...props,
      as: isHeader ? "th" : "td",
      className: cn(
        "h-full overflow-visible border-none bg-background p-0",
        element.background ? "bg-(--cellBackground)" : "bg-background",
        isHeader && "text-left font-normal *:m-0",
        "before:size-full",
        "before:absolute before:box-border before:content-[''] before:select-none",
        borders && cn(
          borders.bottom?.size && `before:border-b before:border-b-border`,
          borders.right?.size && `before:border-r before:border-r-border`,
          borders.left?.size && `before:border-l before:border-l-border`,
          borders.top?.size && `before:border-t before:border-t-border`
        )
      ),
      style: {
        "--cellBackground": element.background,
        maxWidth: width || 240,
        minWidth: width || 120
      },
      attributes: {
        ...props.attributes,
        colSpan: api.table.getColSpan(element),
        rowSpan: api.table.getRowSpan(element)
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "relative z-20 box-border h-full px-4 py-2",
          style: { minHeight },
          children: props.children
        }
      )
    }
  );
}
function TableCellHeaderStaticElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(TableCellElementStatic, { ...props, isHeader: true });
}
function TableElementStatic({
  children,
  ...props
}) {
  const { disableMarginLeft } = props.editor.getOptions(plateTable.BaseTablePlugin);
  const marginLeft = disableMarginLeft ? 0 : props.element.marginLeft;
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      ...props,
      className: "overflow-x-auto py-5",
      style: { paddingLeft: marginLeft },
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ jsxRuntime.jsx("table", { className: "mr-0 ml-px table h-px table-fixed border-collapse", children: /* @__PURE__ */ jsxRuntime.jsx("tbody", { className: "min-w-full", children }) }) })
    }
  );
}
function TableRowElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(plate.SlateElement, { ...props, as: "tr", className: "h-full", children: props.children });
}
var headingItemVariants = classVarianceAuthority.cva(
  "block h-auto w-full cursor-pointer truncate rounded-none px-0.5 py-1.5 text-left font-medium text-muted-foreground underline decoration-[0.5px] underline-offset-4 hover:bg-accent hover:text-muted-foreground",
  {
    variants: {
      depth: {
        1: "pl-0.5",
        2: "pl-[26px]",
        3: "pl-[50px]"
      }
    }
  }
);
function TocElementStatic(props) {
  const { editor } = props;
  const headingList = getHeadingList(editor);
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        variant: "ghost",
        className: headingItemVariants({
          depth: item.depth
        }),
        children: item.title
      },
      item.title
    )) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] });
}
var headingDepth = {
  [plateHeading.HEADING_KEYS.h1]: 1,
  [plateHeading.HEADING_KEYS.h2]: 2,
  [plateHeading.HEADING_KEYS.h3]: 3,
  [plateHeading.HEADING_KEYS.h4]: 4,
  [plateHeading.HEADING_KEYS.h5]: 5,
  [plateHeading.HEADING_KEYS.h6]: 6
};
var getHeadingList = (editor) => {
  if (!editor) return [];
  const options = editor.getOptions(plateHeading.BaseTocPlugin);
  if (options.queryHeading) {
    return options.queryHeading(editor);
  }
  const headingList = [];
  const values = editor.api.nodes({
    at: [],
    match: (n) => plateHeading.isHeading(n)
  });
  if (!values) return [];
  Array.from(values, ([node, path]) => {
    const { type } = node;
    const title = plate.NodeApi.string(node);
    const depth = headingDepth[type];
    const id = node.id;
    if (title) {
      headingList.push({ id, depth, path, title, type });
    }
  });
  return headingList;
};
function ToggleElementStatic(props) {
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "rotate-0 transition-transform duration-75" })
      }
    ),
    props.children
  ] });
}
var editorVariants = classVarianceAuthority.cva(
  cn(
    "group/editor",
    "relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text",
    "rounded-md ring-offset-background focus-visible:outline-none",
    "placeholder:text-muted-foreground/80 **:data-slate-placeholder:top-[auto_!important] **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!",
    "[&_strong]:font-bold"
  ),
  {
    defaultVariants: {
      variant: "none"
    },
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50"
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2"
      },
      variant: {
        ai: "w-full px-0 text-base md:text-sm",
        aiChat: "max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-5 py-3 text-base md:text-sm",
        default: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        demo: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        fullWidth: "size-full px-16 pt-4 pb-72 text-base sm:px-24",
        none: "",
        select: "px-3 py-2 text-base data-readonly:w-fit"
      }
    }
  }
);
function EditorStatic({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.PlateStatic,
    {
      className: cn(editorVariants({ variant }), className),
      ...props
    }
  );
}
function EquationElementStatic(props) {
  const { element } = props;
  const html = plateMath.getEquationHtml({
    element,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(plate.SlateElement, { className: "my-1", ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "group flex items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
          element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
        ),
        children: element.texExpression.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: html
            }
          }
        ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, { className: "size-6 text-muted-foreground/80" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Add a Tex equation" })
        ] })
      }
    ),
    props.children
  ] });
}
function InlineEquationElementStatic(props) {
  const html = plateMath.getEquationHtml({
    element: props.element,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    plate.SlateElement,
    {
      ...props,
      className: "inline-block rounded-sm select-none [&_.katex-display]:my-0",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              'after:absolute after:inset-0 after:-top-0.5 after:-left-1 after:z-1 after:h-[calc(100%)+4px] after:w-[calc(100%+8px)] after:rounded-sm after:content-[""]',
              "h-6",
              props.element.texExpression.length === 0 && "text-muted-foreground after:bg-neutral-500/10"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: cn(
                  props.element.texExpression.length === 0 && "hidden",
                  "font-mono leading-none"
                ),
                dangerouslySetInnerHTML: { __html: html }
              }
            )
          }
        ),
        props.children
      ]
    }
  );
}
var siteUrl = "https://platejs.org";
var lowlight = lowlight$1.createLowlight(lowlight$1.all);
function ExportToolbarButton(props) {
  const editor = react$b.useEditorRef();
  const [open, setOpen] = React19__namespace.useState(false);
  const getCanvas = async () => {
    const { default: html2canvas } = await import('html2canvas-pro');
    const style = document.createElement("style");
    document.head.append(style);
    const canvas = await html2canvas(editor.api.toDOMNode(editor), {
      onclone: (document2) => {
        const editorElement = document2.querySelector(
          '[contenteditable="true"]'
        );
        if (editorElement) {
          Array.from(editorElement.querySelectorAll("*")).forEach((element) => {
            const existingStyle = element.getAttribute("style") || "";
            element.setAttribute(
              "style",
              `${existingStyle}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important`
            );
          });
        }
      }
    });
    style.remove();
    return canvas;
  };
  const downloadFile = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  };
  const exportToPdf = async () => {
    const canvas = await getCanvas();
    const PDFLib = await import('pdf-lib');
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage([canvas.width, canvas.height]);
    const imageEmbed = await pdfDoc.embedPng(canvas.toDataURL("PNG"));
    const { height, width } = imageEmbed.scale(1);
    page.drawImage(imageEmbed, {
      height,
      width,
      x: 0,
      y: 0
    });
    const pdfBase64 = await pdfDoc.saveAsBase64({ dataUri: true });
    await downloadFile(pdfBase64, "plate.pdf");
  };
  const exportToImage = async () => {
    const canvas = await getCanvas();
    await downloadFile(canvas.toDataURL("image/png"), "plate.png");
  };
  const exportToHtml = async () => {
    const components2 = {
      [plateMedia.BaseAudioPlugin.key]: MediaAudioElementStatic,
      [plateBlockQuote.BaseBlockquotePlugin.key]: BlockquoteElementStatic,
      [plateBasicMarks.BaseBoldPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "strong" }),
      [plateCodeBlock.BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
      [plateCodeBlock.BaseCodeLinePlugin.key]: CodeLineElementStatic,
      [plateBasicMarks.BaseCodePlugin.key]: CodeLeafStatic,
      [plateCodeBlock.BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
      [plateLayout.BaseColumnItemPlugin.key]: ColumnElementStatic,
      [plateLayout.BaseColumnPlugin.key]: ColumnGroupElementStatic,
      [plateComments.BaseCommentsPlugin.key]: CommentLeafStatic,
      [plateDate.BaseDatePlugin.key]: DateElementStatic,
      [plateMath.BaseEquationPlugin.key]: EquationElementStatic,
      [plateMedia.BaseFilePlugin.key]: MediaFileElementStatic,
      [plateHighlight.BaseHighlightPlugin.key]: HighlightLeafStatic,
      [plateHorizontalRule.BaseHorizontalRulePlugin.key]: HrElementStatic,
      [plateMedia.BaseImagePlugin.key]: ImageElementStatic,
      [plateMath.BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
      [plateBasicMarks.BaseItalicPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "em" }),
      [plateKbd.BaseKbdPlugin.key]: KbdLeafStatic,
      [plateLink.BaseLinkPlugin.key]: LinkElementStatic,
      // [BaseMediaEmbedPlugin.key]: MediaEmbedElementStatic,
      [plateMention.BaseMentionPlugin.key]: MentionElementStatic,
      [plate.BaseParagraphPlugin.key]: ParagraphElementStatic,
      [plateBasicMarks.BaseStrikethroughPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "del" }),
      [plateBasicMarks.BaseSubscriptPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "sub" }),
      [plateBasicMarks.BaseSuperscriptPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "sup" }),
      [plateTable.BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
      [plateTable.BaseTableCellPlugin.key]: TableCellElementStatic,
      [plateTable.BaseTablePlugin.key]: TableElementStatic,
      [plateTable.BaseTableRowPlugin.key]: TableRowElementStatic,
      [plateHeading.BaseTocPlugin.key]: TocElementStatic,
      [plateToggle.BaseTogglePlugin.key]: ToggleElementStatic,
      [plateBasicMarks.BaseUnderlinePlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "u" }),
      [plateMedia.BaseVideoPlugin.key]: MediaVideoElementStatic,
      [plateHeading.HEADING_KEYS.h1]: cn$1.withProps(HeadingElementStatic, { variant: "h1" }),
      [plateHeading.HEADING_KEYS.h2]: cn$1.withProps(HeadingElementStatic, { variant: "h2" }),
      [plateHeading.HEADING_KEYS.h3]: cn$1.withProps(HeadingElementStatic, { variant: "h3" }),
      [plateHeading.HEADING_KEYS.h4]: cn$1.withProps(HeadingElementStatic, { variant: "h4" }),
      [plateHeading.HEADING_KEYS.h5]: cn$1.withProps(HeadingElementStatic, { variant: "h5" }),
      [plateHeading.HEADING_KEYS.h6]: cn$1.withProps(HeadingElementStatic, { variant: "h6" })
    };
    const editorStatic = plate.createSlateEditor({
      plugins: [
        plateLayout.BaseColumnPlugin,
        plateLayout.BaseColumnItemPlugin,
        plateHeading.BaseTocPlugin,
        plateMedia.BaseVideoPlugin,
        plateMedia.BaseAudioPlugin,
        plate.BaseParagraphPlugin,
        plateHeading.BaseHeadingPlugin,
        plateMedia.BaseMediaEmbedPlugin,
        plateBasicMarks.BaseBoldPlugin,
        plateBasicMarks.BaseCodePlugin,
        plateBasicMarks.BaseItalicPlugin,
        plateBasicMarks.BaseStrikethroughPlugin,
        plateBasicMarks.BaseSubscriptPlugin,
        plateBasicMarks.BaseSuperscriptPlugin,
        plateBasicMarks.BaseUnderlinePlugin,
        plateBlockQuote.BaseBlockquotePlugin,
        plateDate.BaseDatePlugin,
        plateMath.BaseEquationPlugin,
        plateMath.BaseInlineEquationPlugin,
        plateCodeBlock.BaseCodeBlockPlugin.configure({
          options: {
            lowlight
          }
        }),
        plateIndent.BaseIndentPlugin.extend({
          inject: {
            targetPlugins: [
              plate.BaseParagraphPlugin.key,
              plateBlockQuote.BaseBlockquotePlugin.key,
              plateCodeBlock.BaseCodeBlockPlugin.key
            ]
          }
        }),
        plateIndentList.BaseIndentListPlugin.extend({
          inject: {
            targetPlugins: [
              plate.BaseParagraphPlugin.key,
              ...plateHeading.HEADING_LEVELS,
              plateBlockQuote.BaseBlockquotePlugin.key,
              plateCodeBlock.BaseCodeBlockPlugin.key,
              plateToggle.BaseTogglePlugin.key
            ]
          },
          options: {
            listStyleTypes: {
              fire: {
                liComponent: FireLiComponent,
                markerComponent: FireMarker,
                type: "fire"
              },
              todo: {
                liComponent: TodoLiStatic,
                markerComponent: TodoMarkerStatic,
                type: "todo"
              }
            }
          }
        }),
        plateLink.BaseLinkPlugin,
        plateTable.BaseTableRowPlugin,
        plateTable.BaseTablePlugin,
        plateTable.BaseTableCellPlugin,
        plateHorizontalRule.BaseHorizontalRulePlugin,
        plateFont.BaseFontColorPlugin,
        plateFont.BaseFontBackgroundColorPlugin,
        plateFont.BaseFontSizePlugin,
        plateKbd.BaseKbdPlugin,
        plateAlignment.BaseAlignPlugin.extend({
          inject: {
            targetPlugins: [
              plate.BaseParagraphPlugin.key,
              plateMedia.BaseMediaEmbedPlugin.key,
              ...plateHeading.HEADING_LEVELS,
              plateMedia.BaseImagePlugin.key
            ]
          }
        }),
        plateLineHeight.BaseLineHeightPlugin,
        plateHighlight.BaseHighlightPlugin,
        plateMedia.BaseFilePlugin,
        plateMedia.BaseImagePlugin,
        plateMention.BaseMentionPlugin,
        plateComments.BaseCommentsPlugin,
        plateToggle.BaseTogglePlugin
      ],
      value: editor.children
    });
    const editorHtml = await plate.serializeHtml(editorStatic, {
      components: components2,
      editorComponent: EditorStatic,
      props: { style: { padding: "0 calc(50% - 350px)", paddingBottom: "" } }
    });
    const tailwindCss = `<link rel="stylesheet" href="${siteUrl}/tailwind.css">`;
    const katexCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/katex.css" integrity="sha384-9PvLvaiSKCPkFKB1ZsEoTjgnJn+O3KvEwtsz37/XrkYft3DTk2gHdYvd9oWgW3tV" crossorigin="anonymous">`;
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
        ${tailwindCss}
        ${katexCss}
        <style>
          :root {
            --font-sans: 'Inter', 'Inter Fallback';
            --font-mono: 'JetBrains Mono', 'JetBrains Mono Fallback';
          }
        </style>
      </head>
      <body>
        ${editorHtml}
      </body>
    </html>`;
    const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
    await downloadFile(url, "plate.html");
  };
  const exportToMarkdown = async () => {
    const md = editor.getApi(plateMarkdown.MarkdownPlugin).markdown.serialize();
    const url = `data:text/markdown;charset=utf-8,${encodeURIComponent(md)}`;
    await downloadFile(url, "plate.md");
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: open, tooltip: "Export", isDropdown: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDownToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onSelect: exportToHtml, children: "Export as HTML" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onSelect: exportToPdf, children: "Export as PDF" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onSelect: exportToImage, children: "Export as Image" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onSelect: exportToMarkdown, children: "Export as Markdown" })
    ] }) })
  ] });
}
function RedoToolbarButton(props) {
  const editor = react$b.useEditorRef();
  const disabled = react$b.useEditorSelector(
    (editor2) => editor2.history.redos.length === 0,
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.redo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Redo",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Redo2Icon, {})
    }
  );
}
function UndoToolbarButton(props) {
  const editor = react$b.useEditorRef();
  const disabled = react$b.useEditorSelector(
    (editor2) => editor2.history.undos.length === 0,
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      ...props,
      disabled,
      onClick: () => editor.undo(),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: "Undo",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Undo2Icon, {})
    }
  );
}
function ImportToolbarButton(props) {
  const editor = react$b.useEditorRef();
  const [open, setOpen] = React19__namespace.useState(false);
  const getFileNodes = (text, type) => {
    if (type === "html") {
      const editorNode = plate.getEditorDOMFromHtmlString(text);
      const nodes = editor.api.html.deserialize({
        element: editorNode
      });
      return nodes;
    }
    if (type === "markdown") {
      return editor.getApi(plateMarkdown.MarkdownPlugin).markdown.deserialize(text);
    }
    return [];
  };
  const { openFilePicker: openMdFilePicker } = useFilePicker.useFilePicker({
    accept: [".md", ".mdx"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "markdown");
      editor.tf.insertNodes(nodes);
    }
  });
  const { openFilePicker: openHtmlFilePicker } = useFilePicker.useFilePicker({
    accept: ["text/html"],
    multiple: false,
    onFilesSelected: async ({ plainFiles }) => {
      const text = await plainFiles[0].text();
      const nodes = getFileNodes(text, "html");
      editor.tf.insertNodes(nodes);
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: open, tooltip: "Import", isDropdown: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUpToLineIcon, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        DropdownMenuItem,
        {
          onSelect: () => {
            openHtmlFilePicker();
          },
          children: "Import from HTML"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        DropdownMenuItem,
        {
          onSelect: () => {
            openMdFilePicker();
          },
          children: "Import from Markdown"
        }
      )
    ] }) })
  ] });
}
function IndentListToolbarButton({ variant }) {
  const editor = react$b.useEditorRef();
  const handleClick = () => {
    if (variant === "numbered") {
      plateIndentList.toggleIndentList(editor, {
        listStyleType: plateIndentList.ListStyleType.Decimal
      });
    } else {
      plateIndentList.toggleIndentList(editor, {
        listStyleType: plateIndentList.ListStyleType.Disc
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      onClick: handleClick,
      tooltip: variant === "numbered" ? "Numbered List" : "Bulleted List",
      children: variant === "numbered" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListOrderedIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListIcon, {})
    }
  );
}
function IndentTodoToolbarButton(props) {
  const state = react$f.useIndentTodoToolBarButtonState({ nodeType: "todo" });
  const { props: buttonProps } = react$f.useIndentTodoToolBarButton(state);
  return /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { ...props, ...buttonProps, tooltip: "Todo", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListTodoIcon, {}) });
}
function LinkToolbarButton(props) {
  const state = react$9.useLinkToolbarButtonState();
  const { props: buttonProps } = react$9.useLinkToolbarButton(state);
  return /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { ...props, ...buttonProps, "data-plate-focus": true, tooltip: "Link", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Link, {}) });
}
function MarkToolbarButton({
  clear,
  nodeType,
  ...props
}) {
  const state = react$b.useMarkToolbarButtonState({ clear, nodeType });
  const { props: buttonProps } = react$b.useMarkToolbarButton(state);
  return /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { ...props, ...buttonProps });
}
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsx(
      AlertDialogPrimitive__namespace.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
var Input = React19__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ref,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        type,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var MEDIA_CONFIG = {
  [react$4.AudioPlugin.key]: {
    accept: ["audio/*"],
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AudioLinesIcon, { className: "size-4" }),
    title: "Insert Audio",
    tooltip: "Audio"
  },
  [react$4.FilePlugin.key]: {
    accept: ["*"],
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileUpIcon, { className: "size-4" }),
    title: "Insert File",
    tooltip: "File"
  },
  [react$4.ImagePlugin.key]: {
    accept: ["image/*"],
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ImageIcon, { className: "size-4" }),
    title: "Insert Image",
    tooltip: "Image"
  },
  [react$4.VideoPlugin.key]: {
    accept: ["video/*"],
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FilmIcon, { className: "size-4" }),
    title: "Insert Video",
    tooltip: "Video"
  }
};
function MediaToolbarButton({
  nodeType,
  ...props
}) {
  const currentConfig = MEDIA_CONFIG[nodeType];
  const editor = react$b.useEditorRef();
  const [open, setOpen] = React19__namespace.useState(false);
  const [dialogOpen, setDialogOpen] = React19__namespace.useState(false);
  const { openFilePicker } = useFilePicker.useFilePicker({
    accept: currentConfig.accept,
    multiple: true,
    onFilesSelected: ({ plainFiles: updatedFiles }) => {
      editor.getTransforms(react$4.PlaceholderPlugin).insert.media(updatedFiles);
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      ToolbarSplitButton,
      {
        onClick: () => {
          openFilePicker();
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        },
        pressed: open,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(ToolbarSplitButtonPrimary, { children: currentConfig.icon }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenu,
            {
              open,
              onOpenChange: setOpen,
              modal: false,
              ...props,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarSplitButtonSecondary, {}) }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  DropdownMenuContent,
                  {
                    onClick: (e) => e.stopPropagation(),
                    align: "start",
                    alignOffset: -32,
                    children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
                      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onSelect: () => openFilePicker(), children: [
                        currentConfig.icon,
                        "Upload from computer"
                      ] }),
                      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onSelect: () => setDialogOpen(true), children: [
                        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LinkIcon, {}),
                        "Insert via URL"
                      ] })
                    ] })
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      AlertDialog,
      {
        open: dialogOpen,
        onOpenChange: (value) => {
          setDialogOpen(value);
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(AlertDialogContent, { className: "gap-6", children: /* @__PURE__ */ jsxRuntime.jsx(
          MediaUrlDialogContent,
          {
            currentConfig,
            nodeType,
            setOpen: setDialogOpen
          }
        ) })
      }
    )
  ] });
}
function MediaUrlDialogContent({
  currentConfig,
  nodeType,
  setOpen
}) {
  const editor = react$b.useEditorRef();
  const [url, setUrl] = React19__namespace.useState("");
  const embedMedia = React19__namespace.useCallback(() => {
    if (!plate.isUrl(url)) return sonner.toast.error("Invalid URL");
    setOpen(false);
    editor.tf.insertNodes({
      children: [{ text: "" }],
      name: nodeType === react$4.FilePlugin.key ? url.split("/").pop() : void 0,
      type: nodeType,
      url
    });
  }, [url, editor, nodeType, setOpen]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialogHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(AlertDialogTitle, { children: currentConfig.title }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogDescription, { className: "group relative w-full", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          className: "absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground",
          htmlFor: "url",
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex bg-background px-2", children: "URL" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        {
          id: "url",
          className: "w-full",
          value: url,
          onChange: (e) => setUrl(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") embedMedia();
          },
          placeholder: "",
          type: "url",
          autoFocus: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertDialogCancel, { children: "Cancel" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        AlertDialogAction,
        {
          onClick: (e) => {
            e.preventDefault();
            embedMedia();
          },
          children: "Accept"
        }
      )
    ] })
  ] });
}
function ModeDropdownMenu(props) {
  const editor = react$b.useEditorRef();
  const [readOnly, setReadOnly] = react$b.usePlateState("readOnly");
  const [open, setOpen] = React19__namespace.useState(false);
  const isSuggesting = react$b.usePluginOption(react.SuggestionPlugin, "isSuggesting");
  let value = "editing";
  if (readOnly) value = "viewing";
  if (isSuggesting) value = "suggestion";
  const item = {
    editing: {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PenIcon, {}),
      label: "Editing"
    },
    suggestion: {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PencilLineIcon, {}),
      label: "Suggestion"
    },
    viewing: {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EyeIcon, {}),
      label: "Viewing"
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(ToolbarButton, { pressed: open, tooltip: "Editing mode", isDropdown: true, children: [
      item[value].icon,
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden lg:inline", children: item[value].label })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { className: "min-w-[180px]", align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs(
      DropdownMenuRadioGroup,
      {
        value,
        onValueChange: (newValue) => {
          if (newValue === "viewing") {
            setReadOnly(true);
            return;
          } else {
            setReadOnly(false);
          }
          if (newValue === "suggestion") {
            editor.setOption(react.SuggestionPlugin, "isSuggesting", true);
            return;
          } else {
            editor.setOption(react.SuggestionPlugin, "isSuggesting", false);
          }
          if (newValue === "editing") {
            editor.tf.focus();
            return;
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "editing",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Indicator, {}),
                item.editing.icon,
                item.editing.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "viewing",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Indicator, {}),
                item.viewing.icon,
                item.viewing.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuRadioItem,
            {
              className: "pl-2 *:first:[span]:hidden *:[svg]:text-muted-foreground",
              value: "suggestion",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Indicator, {}),
                item.suggestion.icon,
                item.suggestion.label
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Indicator() {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive.DropdownMenuItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, {}) }) });
}
function MoreDropdownMenu(props) {
  const editor = react$b.useEditorRef();
  const [open, setOpen] = React19__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: open, tooltip: "Insert", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, {}) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar flex max-h-[500px] min-w-[180px] flex-col overflow-y-auto",
        align: "start",
        children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(react$u.KbdPlugin.key);
                editor.tf.collapse({ edge: "end" });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.KeyboardIcon, {}),
                "Keyboard input"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(react$j.SuperscriptPlugin.key, {
                  remove: react$j.SubscriptPlugin.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SuperscriptIcon, {}),
                "Superscript"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuItem,
            {
              onSelect: () => {
                editor.tf.toggleMark(react$j.SubscriptPlugin.key, {
                  remove: react$j.SuperscriptPlugin.key
                });
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SubscriptIcon, {}),
                "Subscript"
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function TableDropdownMenu(props) {
  const tableSelected = react$b.useEditorSelector(
    (editor2) => editor2.api.some({ match: { type: react$3.TablePlugin.key } }),
    []
  );
  const { editor, tf } = react$b.useEditorPlugin(react$3.TablePlugin);
  const [open, setOpen] = React19__namespace.useState(false);
  const mergeState = react$3.useTableMergeState();
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { pressed: open, tooltip: "Table", isDropdown: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Table, {}) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DropdownMenuContent,
      {
        className: "flex w-[180px] min-w-0 flex-col",
        align: "start",
        children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSubTrigger, { className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Grid3x3Icon, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Table" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSubContent, { className: "m-0 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(TablePicker, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "size-4" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Cell" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canMerge,
                  onSelect: () => {
                    tf.table.merge();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Combine, {}),
                    "Merge cells"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !mergeState.canSplit,
                  onSelect: () => {
                    tf.table.split();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Ungroup, {}),
                    "Split cell"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "size-4" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Row" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, {}),
                    "Insert row before"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, {}),
                    "Insert row after"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableRow();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {}),
                    "Delete row"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              DropdownMenuSubTrigger,
              {
                className: "gap-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                disabled: !tableSelected,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "size-4" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Column" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuSubContent, { children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn({ before: true });
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, {}),
                    "Insert column before"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.insert.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, {}),
                    "Insert column after"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                DropdownMenuItem,
                {
                  className: "min-w-[180px]",
                  disabled: !tableSelected,
                  onSelect: () => {
                    tf.remove.tableColumn();
                    editor.tf.focus();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {}),
                    "Delete column"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuItem,
            {
              className: "min-w-[180px]",
              disabled: !tableSelected,
              onSelect: () => {
                tf.remove.table();
                editor.tf.focus();
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Trash2Icon, {}),
                "Delete table"
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function TablePicker() {
  const { editor, tf } = react$b.useEditorPlugin(react$3.TablePlugin);
  const [tablePicker, setTablePicker] = React19__namespace.useState({
    grid: Array.from({ length: 8 }, () => Array.from({ length: 8 }).fill(0)),
    size: { colCount: 0, rowCount: 0 }
  });
  const onCellMove = (rowIndex, colIndex) => {
    const newGrid = [...tablePicker.grid];
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        newGrid[i][j] = i >= 0 && i <= rowIndex && j >= 0 && j <= colIndex ? 1 : 0;
      }
    }
    setTablePicker({
      grid: newGrid,
      size: { colCount: colIndex + 1, rowCount: rowIndex + 1 }
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "m-0 flex! flex-col p-0",
      onClick: () => {
        tf.insert.table(tablePicker.size, { select: true });
        editor.tf.focus();
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid size-[130px] grid-cols-8 gap-0.5 p-1", children: tablePicker.grid.map(
          (rows, rowIndex) => rows.map((value, columIndex) => {
            return /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "col-span-1 size-3 border border-solid bg-secondary",
                  !!value && "border-current"
                ),
                onMouseMove: () => {
                  onCellMove(rowIndex, columIndex);
                }
              },
              `(${rowIndex},${columIndex})`
            );
          })
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center text-xs text-current", children: [
          tablePicker.size.rowCount,
          " x ",
          tablePicker.size.colCount
        ] })
      ]
    }
  );
}
function ToggleToolbarButton(props) {
  const state = react$c.useToggleToolbarButtonState();
  const { props: buttonProps } = react$c.useToggleToolbarButton(state);
  return /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { ...props, ...buttonProps, tooltip: "Toggle", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListCollapseIcon, {}) });
}
var turnIntoItems = [
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PilcrowIcon, {}),
    keywords: ["paragraph"],
    label: "Text",
    value: react$b.ParagraphPlugin.key
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading1Icon, {}),
    keywords: ["title", "h1"],
    label: "Heading 1",
    value: plateHeading.HEADING_KEYS.h1
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading2Icon, {}),
    keywords: ["subtitle", "h2"],
    label: "Heading 2",
    value: plateHeading.HEADING_KEYS.h2
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading3Icon, {}),
    keywords: ["subtitle", "h3"],
    label: "Heading 3",
    value: plateHeading.HEADING_KEYS.h3
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListIcon, {}),
    keywords: ["unordered", "ul", "-"],
    label: "Bulleted list",
    value: plateIndentList.ListStyleType.Disc
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListOrderedIcon, {}),
    keywords: ["ordered", "ol", "1"],
    label: "Numbered list",
    value: plateIndentList.ListStyleType.Decimal
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SquareIcon, {}),
    keywords: ["checklist", "task", "checkbox", "[]"],
    label: "To-do list",
    value: plateIndentList.INDENT_LIST_KEYS.todo
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, {}),
    keywords: ["collapsible", "expandable"],
    label: "Toggle list",
    value: react$c.TogglePlugin.key
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileCodeIcon, {}),
    keywords: ["```"],
    label: "Code",
    value: react$7.CodeBlockPlugin.key
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.QuoteIcon, {}),
    keywords: ["citation", "blockquote", ">"],
    label: "Quote",
    value: react$d.BlockquotePlugin.key
  },
  {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Columns3Icon, {}),
    label: "3 columns",
    value: "action_three_columns"
  }
];
function TurnIntoDropdownMenu(props) {
  const editor = react$b.useEditorRef();
  const [open, setOpen] = React19__namespace.useState(false);
  const value = react$b.useSelectionFragmentProp({
    defaultValue: react$b.ParagraphPlugin.key,
    structuralTypes: STRUCTURAL_TYPES,
    getProp: (node) => getBlockType(node)
  });
  const selectedItem = React19__namespace.useMemo(
    () => turnIntoItems.find(
      (item) => item.value === (value ?? react$b.ParagraphPlugin.key)
    ) ?? turnIntoItems[0],
    [value]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      ToolbarButton,
      {
        className: "min-w-[125px]",
        pressed: open,
        tooltip: "Turn into",
        isDropdown: true,
        children: selectedItem.label
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      DropdownMenuContent,
      {
        className: "ignore-click-outside/toolbar min-w-0",
        onCloseAutoFocus: (e) => {
          e.preventDefault();
          editor.tf.focus();
        },
        align: "start",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          ToolbarMenuGroup,
          {
            value,
            onValueChange: (type) => {
              setBlockType(editor, type);
            },
            label: "Turn into",
            children: turnIntoItems.map(({ icon, label, value: itemValue }) => /* @__PURE__ */ jsxRuntime.jsxs(
              DropdownMenuRadioItem,
              {
                className: "min-w-[180px] pl-2 *:first:[span]:hidden",
                value: itemValue,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive.DropdownMenuItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, {}) }) }),
                  icon,
                  label
                ]
              },
              itemValue
            ))
          }
        )
      }
    )
  ] });
}
function FixedToolbarButtons() {
  const readOnly = react$b.useEditorReadOnly();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full", children: [
    !readOnly && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(UndoToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(RedoToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(ToolbarGroup, { children: /* @__PURE__ */ jsxRuntime.jsx(TurnIntoDropdownMenu, {}) }),
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: "bold", tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BoldIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: "italic", tooltip: "Italic (\u2318+I)", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ItalicIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          MarkToolbarButton,
          {
            nodeType: "underline",
            tooltip: "Underline (\u2318+U)",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.UnderlineIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          MarkToolbarButton,
          {
            nodeType: "strikethrough",
            tooltip: "Strikethrough (\u2318+\u21E7+M)",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.StrikethroughIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: "code", tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Code2Icon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: "superscript", tooltip: "Superscript", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SuperscriptIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: "subscript", tooltip: "Subscript", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SubscriptIcon, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(ColorDropdownMenu, { nodeType: "color", tooltip: "Text Color", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PaletteIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ColorDropdownMenu,
          {
            nodeType: "backgroundColor",
            tooltip: "Highlight Color",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PaletteIcon, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlignDropdownMenu, {}),
        /* @__PURE__ */ jsxRuntime.jsx(IndentListToolbarButton, { variant: "bulleted" }),
        /* @__PURE__ */ jsxRuntime.jsx(IndentTodoToolbarButton, {})
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(LinkToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ToggleToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(MediaToolbarButton, { nodeType: react$4.ImagePlugin.key }),
        /* @__PURE__ */ jsxRuntime.jsx(MediaToolbarButton, { nodeType: react$4.FilePlugin.key }),
        /* @__PURE__ */ jsxRuntime.jsx(TableDropdownMenu, {}),
        /* @__PURE__ */ jsxRuntime.jsx(EmojiDropdownMenu, {}),
        /* @__PURE__ */ jsxRuntime.jsx(MoreDropdownMenu, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grow" }),
    /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(ModeDropdownMenu, {}),
      !readOnly && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(CommentToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(AIToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ExportToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ImportToolbarButton, {})
      ] })
    ] })
  ] });
}
var FixedToolbarPlugin = react$b.createPlatePlugin({
  key: "fixed-toolbar",
  render: {
    beforeEditable: () => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sticky top-0 left-0 right-0 z-40 w-full bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxRuntime.jsx(FixedToolbar, { children: /* @__PURE__ */ jsxRuntime.jsx(FixedToolbarButtons, {}) }) })
  }
});
function FloatingToolbar({
  children,
  className,
  state,
  ...props
}) {
  const editorId = react$b.useEditorId();
  const focusedEditorId = react$b.useEventEditorValue("focus");
  const isFloatingLinkOpen = !!react$b.usePluginOption({ key: "a" }, "mode");
  const isAIChatOpen = react$b.usePluginOption({ key: "aiChat" }, "open");
  const floatingToolbarState = plateFloating.useFloatingToolbarState({
    editorId,
    focusedEditorId,
    hideToolbar: isFloatingLinkOpen || isAIChatOpen,
    ...state,
    floatingOptions: {
      middleware: [
        plateFloating.offset(12),
        plateFloating.flip({
          fallbackPlacements: [
            "top-start",
            "top-end",
            "bottom-start",
            "bottom-end"
          ],
          padding: 12
        })
      ],
      placement: "top",
      ...state?.floatingOptions
    }
  });
  const {
    clickOutsideRef,
    hidden,
    props: rootProps,
    ref: floatingRef
  } = plateFloating.useFloatingToolbar(floatingToolbarState);
  const ref = cn$1.useComposedRef(props.ref, floatingRef);
  if (hidden) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: clickOutsideRef, children: /* @__PURE__ */ jsxRuntime.jsx(
    Toolbar,
    {
      ...props,
      ...rootProps,
      ref,
      className: cn(
        "absolute z-50 scrollbar-hide overflow-x-auto rounded-md border bg-popover p-1 whitespace-nowrap opacity-100 shadow-md print:hidden",
        "max-w-[80vw]",
        className
      ),
      children
    }
  ) });
}
function InlineEquationToolbarButton(props) {
  const editor = react$b.useEditorRef();
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      ...props,
      onClick: () => {
        plateMath.insertInlineEquation(editor);
      },
      tooltip: "Mark as equation",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, {})
    }
  );
}
function SuggestionToolbarButton() {
  const { setOption } = react$b.useEditorPlugin(react.SuggestionPlugin);
  const isSuggesting = react$b.usePluginOption(react.SuggestionPlugin, "isSuggesting");
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      className: cn(isSuggesting && "text-brand/80 hover:text-brand/80"),
      onClick: () => setOption("isSuggesting", !isSuggesting),
      onMouseDown: (e) => e.preventDefault(),
      tooltip: isSuggesting ? "Turn off suggesting" : "Suggestion edits",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PencilLineIcon, {})
    }
  );
}
function FloatingToolbarButtons() {
  const readOnly = react$b.useEditorReadOnly();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    !readOnly && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(ToolbarGroup, { children: /* @__PURE__ */ jsxRuntime.jsxs(AIToolbarButton, { tooltip: "AI commands", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.WandSparklesIcon, {}),
        "Ask AI"
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(TurnIntoDropdownMenu, {}),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: react$j.BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BoldIcon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          MarkToolbarButton,
          {
            nodeType: react$j.ItalicPlugin.key,
            tooltip: "Italic (\u2318+I)",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ItalicIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          MarkToolbarButton,
          {
            nodeType: react$j.UnderlinePlugin.key,
            tooltip: "Underline (\u2318+U)",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.UnderlineIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          MarkToolbarButton,
          {
            nodeType: react$j.StrikethroughPlugin.key,
            tooltip: "Strikethrough (\u2318+\u21E7+M)",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.StrikethroughIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(MarkToolbarButton, { nodeType: react$j.CodePlugin.key, tooltip: "Code (\u2318+E)", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Code2Icon, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(InlineEquationToolbarButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(LinkToolbarButton, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CommentToolbarButton, {}),
      /* @__PURE__ */ jsxRuntime.jsx(SuggestionToolbarButton, {}),
      !readOnly && /* @__PURE__ */ jsxRuntime.jsx(MoreDropdownMenu, {})
    ] })
  ] });
}
var FloatingToolbarPlugin = react$b.createPlatePlugin({
  key: "floating-toolbar",
  render: {
    afterEditable: () => /* @__PURE__ */ jsxRuntime.jsx(FloatingToolbar, { children: /* @__PURE__ */ jsxRuntime.jsx(FloatingToolbarButtons, {}) })
  }
});
function Popover2({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Anchor, { "data-slot": "popover-anchor", ...props });
}
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
var aiIndicatorVariants = classVarianceAuthority.cva(
  'after:ml-1.5 after:inline-block after:h-3 after:w-3 after:animate-pulse after:rounded-full after:bg-primary after:align-middle after:content-[""]'
);
function AILeaf(props) {
  const streamingLeaf = props.editor.getApi(react$1.AIChatPlugin).aiChat.node({ streaming: true });
  const isLast = streamingLeaf?.[0] === props.text;
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateText,
    {
      className: cn(
        "border-b-2 border-b-purple-100 bg-purple-50 text-purple-800",
        "transition-all duration-200 ease-in-out",
        isLast && aiIndicatorVariants()
      ),
      ...props
    }
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: cn("size-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: cn("size-4", className2), ...props2 })
      },
      ...props
    }
  );
}
function DateElement(props) {
  const { editor, element } = props;
  const readOnly = react$b.useReadOnly();
  const trigger = /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        "w-fit cursor-pointer rounded-sm bg-muted px-1 text-muted-foreground"
      ),
      contentEditable: false,
      draggable: true,
      children: element.date ? (() => {
        const today = /* @__PURE__ */ new Date();
        const elementDate = new Date(element.date);
        const isToday = elementDate.getDate() === today.getDate() && elementDate.getMonth() === today.getMonth() && elementDate.getFullYear() === today.getFullYear();
        const isYesterday = new Date(today.setDate(today.getDate() - 1)).toDateString() === elementDate.toDateString();
        const isTomorrow = new Date(today.setDate(today.getDate() + 2)).toDateString() === elementDate.toDateString();
        if (isToday) return "Today";
        if (isYesterday) return "Yesterday";
        if (isTomorrow) return "Tomorrow";
        return elementDate.toLocaleDateString(void 0, {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      })() : /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Pick a date" })
    }
  );
  if (readOnly) {
    return trigger;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    react$b.PlateElement,
    {
      ...props,
      className: "inline-block",
      attributes: {
        ...props.attributes,
        contentEditable: false
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: trigger }),
          /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxRuntime.jsx(
            Calendar,
            {
              selected: new Date(element.date),
              onSelect: (date) => {
                if (!date) return;
                editor.tf.setNodes(
                  { date: date.toDateString() },
                  { at: element }
                );
              },
              mode: "single",
              initialFocus: true
            }
          ) })
        ] }),
        props.children
      ]
    }
  );
}
var editorContainerVariants = classVarianceAuthority.cva(
  "relative w-full cursor-text overflow-y-auto caret-primary select-text selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:z-50 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15",
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      variant: {
        comment: cn(
          "flex flex-wrap justify-between gap-1 px-1 py-0.5 text-sm",
          "rounded-md border-[1.5px] border-transparent bg-transparent",
          "has-[[data-slate-editor]:focus]:border-brand/50 has-[[data-slate-editor]:focus]:ring-2 has-[[data-slate-editor]:focus]:ring-brand/30",
          "has-aria-disabled:border-input has-aria-disabled:bg-muted"
        ),
        default: "h-full",
        demo: "h-[650px]",
        select: cn(
          "group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          "has-data-readonly:w-fit has-data-readonly:cursor-default has-data-readonly:border-transparent has-data-readonly:focus-within:[box-shadow:none]"
        )
      }
    }
  }
);
var EditorContainer = ({
  className,
  variant,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateContainer,
    {
      className: cn(
        "ignore-click-outside/toolbar",
        editorContainerVariants({ variant }),
        className
      ),
      ...props
    }
  );
};
EditorContainer.displayName = "EditorContainer";
var editorVariants2 = classVarianceAuthority.cva(
  cn(
    "group/editor",
    "relative w-full cursor-text overflow-x-hidden break-words whitespace-pre-wrap select-text",
    "rounded-md ring-offset-background focus-visible:outline-none",
    "placeholder:text-muted-foreground/80 **:data-slate-placeholder:top-[auto_!important] **:data-slate-placeholder:text-muted-foreground/80 **:data-slate-placeholder:opacity-100!",
    "[&_strong]:font-bold"
  ),
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50"
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2"
      },
      variant: {
        ai: "w-full px-0 text-base md:text-sm",
        aiChat: "max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-3 py-2 text-base md:text-sm",
        comment: cn("rounded-none border-none bg-transparent text-sm"),
        default: "size-full px-16 pt-4 pb-72 text-base sm:px-[max(64px,calc(50%-350px))]",
        demo: "size-full px-6 pt-4 pb-72 text-base sm:px-[max(6px,calc(35%-350px))]",
        fullWidth: "size-full px-16 pt-4 pb-72 text-base sm:px-24",
        none: "",
        select: "px-3 py-2 text-base data-readonly:w-fit"
      }
    }
  }
);
var Editor = React19__namespace.forwardRef(
  ({ className, disabled, focused, variant, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      react$b.PlateContent,
      {
        ref,
        className: cn(
          editorVariants2({
            disabled,
            focused,
            variant
          }),
          className
        ),
        disabled,
        disableDefaultStyles: true,
        ...props
      }
    );
  }
);
Editor.displayName = "Editor";
React19__namespace.forwardRef(({ className, readOnly, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "relative max-w-full word-wrap break-word outline-none text-left [&_strong]:font-bold",
        !readOnly && "focus-visible:shadow-[inset_0_0_0_2px_rgb(248_113_113)] focus-visible:shadow-red-400/20",
        className
      ),
      ...props,
      contentEditable: !readOnly
    }
  );
});
var useDebounce = (value, delay2 = 500) => {
  const [debouncedValue, setDebouncedValue] = React19__namespace.useState(value);
  React19__namespace.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay2);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay2]);
  return debouncedValue;
};
var InlineComboboxContext = React19__namespace.createContext(
  null
);
var defaultFilter = ({ group, keywords = [], label, value }, search) => {
  const uniqueTerms = new Set(
    [value, ...keywords, group, label].filter(Boolean)
  );
  return Array.from(uniqueTerms).some(
    (keyword) => plateCombobox.filterWords(keyword, search)
  );
};
var InlineCombobox = ({
  children,
  element,
  filter = defaultFilter,
  hideWhenNoValue = false,
  setValue: setValueProp,
  showTrigger = true,
  trigger,
  value: valueProp
}) => {
  const editor = react$b.useEditorRef();
  const inputRef = React19__namespace.useRef(null);
  const cursorState = react$A.useHTMLInputCursorState(inputRef);
  const [valueState, setValueState] = React19__namespace.useState("");
  const hasValueProp = valueProp !== void 0;
  const value = hasValueProp ? valueProp : valueState;
  const setValue = React19__namespace.useCallback(
    (newValue) => {
      setValueProp?.(newValue);
      if (!hasValueProp) {
        setValueState(newValue);
      }
    },
    [setValueProp, hasValueProp]
  );
  const [insertPoint, setInsertPoint] = React19__namespace.useState(null);
  React19__namespace.useEffect(() => {
    const path = editor.api.findPath(element);
    if (!path) return;
    const point = editor.api.before(path);
    if (!point) return;
    const pointRef = editor.api.pointRef(point);
    setInsertPoint(pointRef);
    return () => {
      pointRef.unref();
    };
  }, [editor, element]);
  const { props: inputProps, removeInput } = react$A.useComboboxInput({
    cancelInputOnBlur: false,
    cursorState,
    ref: inputRef,
    onCancelInput: (cause) => {
      if (cause !== "backspace") {
        editor.tf.insertText(trigger + value, {
          at: insertPoint?.current ?? void 0
        });
      }
      if (cause === "arrowLeft" || cause === "arrowRight") {
        editor.tf.move({
          distance: 1,
          reverse: cause === "arrowLeft"
        });
      }
    }
  });
  const [hasEmpty, setHasEmpty] = React19__namespace.useState(false);
  const contextValue = React19__namespace.useMemo(
    () => ({
      filter,
      inputProps,
      inputRef,
      removeInput,
      setHasEmpty,
      showTrigger,
      trigger
    }),
    [
      trigger,
      showTrigger,
      filter,
      inputRef,
      inputProps,
      removeInput,
      setHasEmpty
    ]
  );
  const store = react$e.useComboboxStore({
    // open: ,
    setValue: (newValue) => React19__namespace.startTransition(() => setValue(newValue))
  });
  const items2 = store.useState("items");
  React19__namespace.useEffect(() => {
    if (!store.getState().activeId) {
      store.setActiveId(store.first());
    }
  }, [items2, store]);
  return /* @__PURE__ */ jsxRuntime.jsx("span", { contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
    react$e.ComboboxProvider,
    {
      open: (items2.length > 0 || hasEmpty) && (!hideWhenNoValue || value.length > 0),
      store,
      children: /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxContext.Provider, { value: contextValue, children })
    }
  ) });
};
var InlineComboboxInput = React19__namespace.forwardRef(({ className, ...props }, propRef) => {
  const {
    inputProps,
    inputRef: contextRef,
    showTrigger,
    trigger
  } = React19__namespace.useContext(InlineComboboxContext);
  const store = react$e.useComboboxContext();
  const value = store.useState("value");
  const ref = react$b.useComposedRef(propRef, contextRef);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    showTrigger && trigger,
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative min-h-[1lh]", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "invisible overflow-hidden text-nowrap",
          "aria-hidden": "true",
          children: value || "\u200B"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        react$e.Combobox,
        {
          ref,
          className: cn(
            "absolute top-0 left-0 size-full bg-transparent outline-none",
            className
          ),
          value,
          autoSelect: true,
          ...inputProps,
          ...props
        }
      )
    ] })
  ] });
});
InlineComboboxInput.displayName = "InlineComboboxInput";
var InlineComboboxContent = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(react$e.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    react$e.ComboboxPopover,
    {
      className: cn(
        "z-500 max-h-[288px] w-[300px] overflow-y-auto rounded-md bg-popover shadow-md",
        className
      ),
      ...props
    }
  ) });
};
var comboboxItemVariants = classVarianceAuthority.cva(
  "relative mx-1 flex h-[28px] items-center rounded-sm px-2 text-sm text-foreground outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    defaultVariants: {
      interactive: true
    },
    variants: {
      interactive: {
        false: "",
        true: "cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground data-[active-item=true]:bg-accent data-[active-item=true]:text-accent-foreground"
      }
    }
  }
);
var InlineComboboxItem = ({
  className,
  focusEditor = true,
  group,
  keywords,
  label,
  onClick,
  ...props
}) => {
  const { value } = props;
  const { filter, removeInput } = React19__namespace.useContext(InlineComboboxContext);
  const store = react$e.useComboboxContext();
  const search = filter && store.useState("value");
  const visible = React19__namespace.useMemo(
    () => !filter || filter({ group, keywords, label, value }, search),
    [filter, group, keywords, label, value, search]
  );
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$e.ComboboxItem,
    {
      className: cn(comboboxItemVariants(), className),
      onClick: (event) => {
        removeInput(focusEditor);
        onClick?.(event);
      },
      ...props
    }
  );
};
var InlineComboboxEmpty = ({
  children,
  className
}) => {
  const { setHasEmpty } = React19__namespace.useContext(InlineComboboxContext);
  const store = react$e.useComboboxContext();
  const items2 = store.useState("items");
  React19__namespace.useEffect(() => {
    setHasEmpty(true);
    return () => {
      setHasEmpty(false);
    };
  }, [setHasEmpty]);
  if (items2.length > 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(comboboxItemVariants({ interactive: false }), className),
      children
    }
  );
};
function InlineComboboxGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$e.ComboboxGroup,
    {
      ...props,
      className: cn(
        "hidden py-1.5 not-last:border-b [&:has([role=option])]:block",
        className
      )
    }
  );
}
function InlineComboboxGroupLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$e.ComboboxGroupLabel,
    {
      ...props,
      className: cn(
        "mt-1.5 mb-2 px-3 text-xs font-medium text-muted-foreground",
        className
      )
    }
  );
}
function EmojiInputElement(props) {
  const { children, editor, element } = props;
  const data = react$b.usePluginOption(react$w.EmojiPlugin, "data");
  const [value, setValue] = React19__namespace.useState("");
  const debouncedValue = useDebounce(value, 100);
  const isPending = value !== debouncedValue;
  const filteredEmojis = React19__namespace.useMemo(() => {
    if (debouncedValue.trim().length === 0) return [];
    return plateEmoji.EmojiInlineIndexSearch.getInstance(data).search(debouncedValue.replace(/:$/, "")).get();
  }, [data, debouncedValue]);
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { as: "span", "data-slate-value": element.value, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      InlineCombobox,
      {
        value,
        element,
        filter: false,
        setValue,
        trigger: ":",
        hideWhenNoValue: true,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxInput, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(InlineComboboxContent, { children: [
            !isPending && /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxGroup, { children: filteredEmojis.map((emoji) => /* @__PURE__ */ jsxRuntime.jsxs(
              InlineComboboxItem,
              {
                value: emoji.name,
                onClick: () => plateEmoji.insertEmoji(editor, emoji),
                children: [
                  emoji.skins[0].native,
                  " ",
                  emoji.name
                ]
              },
              emoji.id
            )) })
          ] })
        ]
      }
    ),
    children
  ] });
}
var EquationInput = react$b.createPrimitiveComponent(TextareaAutosize__default.default)({
  propsHook: react$6.useEquationInput
});
var EquationPopoverContent = ({
  className,
  isInline,
  open,
  setOpen,
  ...props
}) => {
  const editor = react$b.useEditorRef();
  const readOnly = react$b.useReadOnly();
  const element = react$b.useElement();
  React19__namespace.useEffect(() => {
    if (isInline && open) {
      setOpen(true);
    }
  }, [isInline, open, setOpen]);
  if (readOnly) return null;
  const onClose = () => {
    setOpen(false);
    if (isInline) {
      editor.tf.select(element, { next: true });
    } else {
      editor.getApi(react$h.BlockSelectionPlugin).blockSelection.set(element.id);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PopoverContent,
    {
      className: "flex gap-2",
      onEscapeKeyDown: (e) => {
        e.preventDefault();
      },
      contentEditable: false,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          EquationInput,
          {
            className: cn("max-h-[50vh] grow resize-none p-2 text-sm", className),
            state: { isInline, open, onClose },
            autoFocus: true,
            ...props
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(Button2, { variant: "secondary", className: "px-3", onClick: onClose, children: [
          "Done ",
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CornerDownLeftIcon, { className: "size-3.5" })
        ] })
      ]
    }
  );
};
function InlineEquationElement(props) {
  const element = props.element;
  const katexRef = React19__namespace.useRef(null);
  const selected = react$b.useSelected();
  const isCollapsed = react$b.useEditorSelector(
    (editor) => editor.api.isCollapsed(),
    []
  );
  const [open, setOpen] = React19__namespace.useState(selected && isCollapsed);
  react$6.useEquationElement({
    element,
    katexRef,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    react$b.PlateElement,
    {
      ...props,
      className: cn(
        "inline-block rounded-sm select-none [&_.katex-display]:my-0"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open, onOpenChange: setOpen, modal: false, children: [
          /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                'after:absolute after:inset-0 after:-top-0.5 after:-left-1 after:z-1 after:h-[calc(100%)+4px] after:w-[calc(100%+8px)] after:rounded-sm after:content-[""]',
                "h-6",
                element.texExpression.length > 0 && open && "after:bg-brand/15",
                element.texExpression.length === 0 && "text-muted-foreground after:bg-neutral-500/10"
              ),
              contentEditable: false,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    ref: katexRef,
                    className: cn(
                      element.texExpression.length === 0 && "hidden",
                      "font-mono leading-none"
                    )
                  }
                ),
                element.texExpression.length === 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, { className: "mr-1 inline-block h-[19px] w-4 py-[1.5px] align-text-bottom" }),
                  "New equation"
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            EquationPopoverContent,
            {
              className: "my-auto",
              open,
              placeholder: "E = mc^2",
              setOpen,
              isInline: true
            }
          )
        ] }),
        props.children
      ]
    }
  );
}
function LinkElement(props) {
  const { props: linkProps } = react$9.useLink({ element: props.element });
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      ...props,
      as: "a",
      className: "font-medium text-primary underline decoration-primary underline-offset-4",
      attributes: {
        ...props.attributes,
        ...linkProps
      },
      children: props.children
    }
  );
}
function useMounted() {
  const [mounted, setMounted] = React19__namespace.useState(false);
  React19__namespace.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function MentionElement(props) {
  const element = props.element;
  const selected = react$b.useSelected();
  const focused = react$b.useFocused();
  const mounted = useMounted();
  const readOnly = react$b.useReadOnly();
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      ...props,
      className: cn(
        "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium",
        !readOnly && "cursor-pointer",
        selected && focused && "ring-2 ring-ring",
        element.children[0].bold === true && "font-bold",
        element.children[0].italic === true && "italic",
        element.children[0].underline === true && "underline"
      ),
      attributes: {
        ...props.attributes,
        contentEditable: false,
        "data-slate-value": element.value,
        draggable: true
      },
      children: mounted && plate.IS_APPLE ? (
        // Mac OS IME https://github.com/ianstormtaylor/slate/issues/3490
        /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
          props.children,
          props.prefix,
          element.value
        ] })
      ) : (
        // Others like Android https://github.com/ianstormtaylor/slate/pull/5360
        /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
          props.prefix,
          element.value,
          props.children
        ] })
      )
    }
  );
}
var onSelectItem = plateMention.getMentionOnSelectItem();
function MentionInputElement(props) {
  const { editor, element } = props;
  const [search, setSearch] = React19__namespace.useState("");
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      InlineCombobox,
      {
        value: search,
        element,
        setValue: setSearch,
        showTrigger: false,
        trigger: "@",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm ring-ring focus-within:ring-2", children: /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxInput, {}) }),
          /* @__PURE__ */ jsxRuntime.jsxs(InlineComboboxContent, { className: "my-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxEmpty, { children: "No results" }),
            /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxGroup, { children: MENTIONABLES.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
              InlineComboboxItem,
              {
                value: item.text,
                onClick: () => onSelectItem(editor, item, search),
                children: item.text
              },
              item.key
            )) })
          ] })
        ]
      }
    ),
    props.children
  ] });
}
var MENTIONABLES = [
  { key: "0", text: "Aayla Secura" },
  { key: "1", text: "Adi Gallia" },
  {
    key: "2",
    text: "Admiral Dodd Rancit"
  },
  {
    key: "3",
    text: "Admiral Firmus Piett"
  },
  {
    key: "4",
    text: "Admiral Gial Ackbar"
  },
  { key: "5", text: "Admiral Ozzel" },
  { key: "6", text: "Admiral Raddus" },
  {
    key: "7",
    text: "Admiral Terrinald Screed"
  },
  { key: "8", text: "Admiral Trench" },
  {
    key: "9",
    text: "Admiral U.O. Statura"
  },
  { key: "10", text: "Agen Kolar" },
  { key: "11", text: "Agent Kallus" },
  {
    key: "12",
    text: "Aiolin and Morit Astarte"
  },
  { key: "13", text: "Aks Moe" },
  { key: "14", text: "Almec" },
  { key: "15", text: "Alton Kastle" },
  { key: "16", text: "Amee" },
  { key: "17", text: "AP-5" },
  { key: "18", text: "Armitage Hux" },
  { key: "19", text: "Artoo" },
  { key: "20", text: "Arvel Crynyd" },
  { key: "21", text: "Asajj Ventress" },
  { key: "22", text: "Aurra Sing" },
  { key: "23", text: "AZI-3" },
  { key: "24", text: "Bala-Tik" },
  { key: "25", text: "Barada" },
  { key: "26", text: "Bargwill Tomder" },
  { key: "27", text: "Baron Papanoida" },
  { key: "28", text: "Barriss Offee" },
  { key: "29", text: "Baze Malbus" },
  { key: "30", text: "Bazine Netal" },
  { key: "31", text: "BB-8" },
  { key: "32", text: "BB-9E" },
  { key: "33", text: "Ben Quadinaros" },
  { key: "34", text: "Berch Teller" },
  { key: "35", text: "Beru Lars" },
  { key: "36", text: "Bib Fortuna" },
  {
    key: "37",
    text: "Biggs Darklighter"
  },
  { key: "38", text: "Black Krrsantan" },
  { key: "39", text: "Bo-Katan Kryze" },
  { key: "40", text: "Boba Fett" },
  { key: "41", text: "Bobbajo" },
  { key: "42", text: "Bodhi Rook" },
  { key: "43", text: "Borvo the Hutt" },
  { key: "44", text: "Boss Nass" },
  { key: "45", text: "Bossk" },
  {
    key: "46",
    text: "Breha Antilles-Organa"
  },
  { key: "47", text: "Bren Derlin" },
  { key: "48", text: "Brendol Hux" },
  { key: "49", text: "BT-1" }
];
var useCommentEditor = (options = {}, deps = []) => {
  const commentEditor = useCreateEditor(
    {
      id: "comment",
      components: {
        [react$1.AIPlugin.key]: AILeaf,
        [react$j.BoldPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "strong" }),
        [react$a.DatePlugin.key]: DateElement,
        [react$w.EmojiInputPlugin.key]: EmojiInputElement,
        [react$6.InlineEquationPlugin.key]: InlineEquationElement,
        [react$j.ItalicPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "em" }),
        [react$9.LinkPlugin.key]: LinkElement,
        [react$q.MentionInputPlugin.key]: MentionInputElement,
        [react$q.MentionPlugin.key]: MentionElement,
        [react$j.StrikethroughPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "s" }),
        [react$j.UnderlinePlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "u" })
        // [SlashInputPlugin.key]: SlashInputElement,
      },
      placeholders: false,
      plugins: [react$j.BasicMarksPlugin],
      value: [],
      ...options
    },
    deps
  );
  return commentEditor;
};
function CommentCreateForm({
  autoFocus = false,
  className,
  discussionId: discussionIdProp,
  focusOnMount = false
}) {
  const discussions = react$b.usePluginOption(discussionPlugin, "discussions");
  const editor = react$b.useEditorRef();
  const commentId = react$s.useCommentId();
  const discussionId = discussionIdProp ?? commentId;
  const userInfo = react$b.usePluginOption(discussionPlugin, "currentUser");
  const [commentValue, setCommentValue] = React19__namespace.useState();
  const commentContent = React19__namespace.useMemo(
    () => commentValue ? plate.NodeApi.string({ children: commentValue, type: "p" }) : "",
    [commentValue]
  );
  const commentEditor = useCommentEditor({}, []);
  React19__namespace.useEffect(() => {
    if (commentEditor && focusOnMount) {
      commentEditor.tf.focus();
    }
  }, [commentEditor, focusOnMount]);
  const onAddComment = React19__namespace.useCallback(async () => {
    if (!commentValue) return;
    commentEditor.tf.reset();
    if (discussionId) {
      const discussion = discussions.find((d) => d.id === discussionId);
      if (!discussion) {
        const newDiscussion2 = {
          id: discussionId,
          comments: [
            {
              id: plate.nanoid(),
              contentRich: commentValue,
              createdAt: /* @__PURE__ */ new Date(),
              discussionId,
              isEdited: false,
              userId: editor.getOption(discussionPlugin, "currentUserId")
            }
          ],
          createdAt: /* @__PURE__ */ new Date(),
          isResolved: false,
          userId: editor.getOption(discussionPlugin, "currentUserId")
        };
        editor.setOption(discussionPlugin, "discussions", [
          ...discussions,
          newDiscussion2
        ]);
        return;
      }
      const comment = {
        id: plate.nanoid(),
        contentRich: commentValue,
        createdAt: /* @__PURE__ */ new Date(),
        discussionId,
        isEdited: false,
        userId: editor.getOption(discussionPlugin, "currentUserId")
      };
      const updatedDiscussion = {
        ...discussion,
        comments: [...discussion.comments, comment]
      };
      const updatedDiscussions = discussions.filter((d) => d.id !== discussionId).concat(updatedDiscussion);
      editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
      return;
    }
    const commentsNodeEntry = editor.getApi(react$s.CommentsPlugin).comment.nodes({ at: [], isDraft: true });
    if (commentsNodeEntry.length === 0) return;
    const documentContent = commentsNodeEntry.map(([node]) => node.text).join("");
    const _discussionId = plate.nanoid();
    const newDiscussion = {
      id: _discussionId,
      comments: [
        {
          id: plate.nanoid(),
          contentRich: commentValue,
          createdAt: /* @__PURE__ */ new Date(),
          discussionId: _discussionId,
          isEdited: false,
          userId: editor.getOption(discussionPlugin, "currentUserId")
        }
      ],
      createdAt: /* @__PURE__ */ new Date(),
      documentContent,
      isResolved: false,
      userId: editor.getOption(discussionPlugin, "currentUserId")
    };
    editor.setOption(discussionPlugin, "discussions", [
      ...discussions,
      newDiscussion
    ]);
    const id = newDiscussion.id;
    commentsNodeEntry.forEach(([, path]) => {
      editor.tf.setNodes(
        {
          [plateComments.getCommentKey(id)]: true
        },
        { at: path, split: true }
      );
      editor.tf.unsetNodes([plateComments.getDraftCommentKey()], { at: path });
    });
  }, [commentValue, commentEditor.tf, discussionId, editor, discussions]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex w-full", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2 mr-1 shrink-0", children: /* @__PURE__ */ jsxRuntime.jsxs(Avatar, { className: "size-5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
      /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { children: userInfo?.name?.[0] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative flex grow gap-2", children: /* @__PURE__ */ jsxRuntime.jsx(
      react$b.Plate,
      {
        onChange: ({ value }) => {
          setCommentValue(value);
        },
        editor: commentEditor,
        children: /* @__PURE__ */ jsxRuntime.jsxs(EditorContainer, { variant: "comment", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Editor,
            {
              variant: "comment",
              className: "min-h-[25px] grow pt-0.5 pr-8",
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onAddComment();
                }
              },
              placeholder: "Reply...",
              autoComplete: "off",
              autoFocus
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              size: "icon",
              variant: "ghost",
              className: "absolute right-0.5 bottom-0.5 ml-auto shrink-0",
              disabled: commentContent.trim().length === 0,
              onClick: (e) => {
                e.stopPropagation();
                onAddComment();
              },
              children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-6 items-center justify-center rounded-full", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUpIcon, {}) })
            }
          )
        ] })
      }
    ) })
  ] });
}
var formatCommentDate = (date) => {
  const now = /* @__PURE__ */ new Date();
  const diffMinutes = dateFns.differenceInMinutes(now, date);
  const diffHours = dateFns.differenceInHours(now, date);
  const diffDays = dateFns.differenceInDays(now, date);
  if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  }
  if (diffHours < 24) {
    return `${diffHours}h`;
  }
  if (diffDays < 2) {
    return `${diffDays}d`;
  }
  return dateFns.format(date, "MM/dd/yyyy");
};
function Comment(props) {
  const {
    comment,
    discussionLength,
    documentContent,
    editingId,
    index,
    setEditingId,
    showDocumentContent = false,
    onEditorClick
  } = props;
  const editor = react$b.useEditorRef();
  const userInfo = react$b.usePluginOption(discussionPlugin, "user", comment.userId);
  const currentUserId = react$b.usePluginOption(discussionPlugin, "currentUserId");
  const resolveDiscussion = async (id) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id === id) {
        return { ...discussion, isResolved: true };
      }
      return discussion;
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const removeDiscussion = async (id) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").filter((discussion) => discussion.id !== id);
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const updateComment = async (input) => {
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id === input.discussionId) {
        const updatedComments = discussion.comments.map((comment2) => {
          if (comment2.id === input.id) {
            return {
              ...comment2,
              contentRich: input.contentRich,
              isEdited: true,
              updatedAt: /* @__PURE__ */ new Date()
            };
          }
          return comment2;
        });
        return { ...discussion, comments: updatedComments };
      }
      return discussion;
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
  };
  const { tf } = react$b.useEditorPlugin(react$s.CommentsPlugin);
  const isMyComment = currentUserId === comment.userId;
  const initialValue = comment.contentRich;
  const commentEditor = useCommentEditor(
    {
      id: comment.id,
      value: initialValue
    },
    [initialValue]
  );
  const onCancel = () => {
    setEditingId(null);
    commentEditor.tf.replaceNodes(initialValue, {
      at: [],
      children: true
    });
  };
  const onSave = () => {
    void updateComment({
      id: comment.id,
      contentRich: commentEditor.children,
      discussionId: comment.discussionId});
    setEditingId(null);
  };
  const onResolveComment = () => {
    void resolveDiscussion(comment.discussionId);
    tf.comment.unsetMark({ id: comment.discussionId });
  };
  const isFirst = index === 0;
  const isLast = index === discussionLength - 1;
  const isEditing = editingId && editingId === comment.id;
  const [hovering, setHovering] = React19__namespace.useState(false);
  const [dropdownOpen, setDropdownOpen] = React19__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Avatar, { className: "size-5", children: [
            /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
            /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { children: userInfo?.name?.[0] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs leading-none text-muted-foreground/80", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-1", children: formatCommentDate(new Date(comment.createdAt)) }),
            comment.isEdited && /* @__PURE__ */ jsxRuntime.jsx("span", { children: "(edited)" })
          ] }),
          isMyComment && (hovering || dropdownOpen) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute top-0 right-0 flex space-x-1", children: [
            index === 0 && /* @__PURE__ */ jsxRuntime.jsx(
              Button2,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: onResolveComment,
                type: "button",
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              CommentMoreDropdown,
              {
                onCloseAutoFocus: () => {
                  setTimeout(() => {
                    commentEditor.tf.focus({ edge: "endEditor" });
                  }, 0);
                },
                onRemoveComment: () => {
                  if (discussionLength === 1) {
                    tf.comment.unsetMark({ id: comment.discussionId });
                    void removeDiscussion(comment.discussionId);
                  }
                },
                comment,
                dropdownOpen,
                setDropdownOpen,
                setEditingId
              }
            )
          ] })
        ] }),
        isFirst && showDocumentContent && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-subtle-foreground relative mt-1 flex pl-[32px] text-sm", children: [
          discussionLength > 1 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-[5px] left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-px w-0.5 shrink-0 bg-highlight" }),
          documentContent && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-2", children: documentContent })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative my-1 pl-[26px]", children: [
          !isLast && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-0 left-3 h-full w-0.5 shrink-0 bg-muted" }),
          /* @__PURE__ */ jsxRuntime.jsx(react$b.Plate, { readOnly: !isEditing, editor: commentEditor, children: /* @__PURE__ */ jsxRuntime.jsxs(EditorContainer, { variant: "comment", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Editor,
              {
                variant: "comment",
                className: "w-auto grow",
                onClick: () => onEditorClick?.()
              }
            ),
            isEditing && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-auto flex shrink-0 gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                Button2,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-[28px]",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onCancel();
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-primary/40", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-3 stroke-[3px] text-background" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                Button2,
                {
                  size: "icon",
                  variant: "ghost",
                  onClick: (e) => {
                    e.stopPropagation();
                    void onSave();
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-5 shrink-0 items-center justify-center rounded-[50%] bg-brand", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-3 stroke-[3px] text-background" }) })
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
function CommentMoreDropdown(props) {
  const {
    comment,
    dropdownOpen,
    setDropdownOpen,
    setEditingId,
    onCloseAutoFocus,
    onRemoveComment
  } = props;
  const editor = react$b.useEditorRef();
  const selectedEditCommentRef = React19__namespace.useRef(false);
  const onDeleteComment = React19__namespace.useCallback(() => {
    if (!comment.id)
      return alert("You are operating too quickly, please try again later.");
    const updatedDiscussions = editor.getOption(discussionPlugin, "discussions").map((discussion) => {
      if (discussion.id !== comment.discussionId) {
        return discussion;
      }
      const commentIndex = discussion.comments.findIndex(
        (c) => c.id === comment.id
      );
      if (commentIndex === -1) {
        return discussion;
      }
      return {
        ...discussion,
        comments: [
          ...discussion.comments.slice(0, commentIndex),
          ...discussion.comments.slice(commentIndex + 1)
        ]
      };
    });
    editor.setOption(discussionPlugin, "discussions", updatedDiscussions);
    onRemoveComment?.();
  }, [comment.discussionId, comment.id, editor, onRemoveComment]);
  const onEditComment = React19__namespace.useCallback(() => {
    selectedEditCommentRef.current = true;
    if (!comment.id)
      return alert("You are operating too quickly, please try again later.");
    setEditingId(comment.id);
  }, [comment.id, setEditingId]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenu,
    {
      open: dropdownOpen,
      onOpenChange: setDropdownOpen,
      modal: false,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntime.jsx(Button2, { variant: "ghost", className: cn("h-6 p-1 text-muted-foreground"), children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          DropdownMenuContent,
          {
            className: "w-48",
            onCloseAutoFocus: (e) => {
              if (selectedEditCommentRef.current) {
                onCloseAutoFocus?.();
                selectedEditCommentRef.current = false;
              }
              return e.preventDefault();
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
              /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: onEditComment, children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PencilIcon, { className: "size-4" }),
                "Edit comment"
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: onDeleteComment, children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrashIcon, { className: "size-4" }),
                "Delete comment"
              ] })
            ] })
          }
        )
      ]
    }
  );
}
var BLOCK_SUGGESTION = "__block__";
var TYPE_TEXT_MAP = {
  [react$4.AudioPlugin.key]: () => "Audio",
  [react$d.BlockquotePlugin.key]: () => "Blockquote",
  [react$8.CalloutPlugin.key]: () => "Callout",
  [react$7.CodeBlockPlugin.key]: () => "Code Block",
  [react$2.ColumnPlugin.key]: () => "Column",
  [react$6.EquationPlugin.key]: () => "Equation",
  [react$4.FilePlugin.key]: () => "File",
  [plateHeading.HEADING_KEYS.h1]: () => `Heading 1`,
  [plateHeading.HEADING_KEYS.h2]: () => `Heading 2`,
  [plateHeading.HEADING_KEYS.h3]: () => `Heading 3`,
  [plateHeading.HEADING_KEYS.h4]: () => `Heading 4`,
  [plateHeading.HEADING_KEYS.h5]: () => `Heading 5`,
  [plateHeading.HEADING_KEYS.h6]: () => `Heading 6`,
  [react$g.HorizontalRulePlugin.key]: () => "Horizontal Rule",
  [react$4.ImagePlugin.key]: () => "Image",
  [react$4.MediaEmbedPlugin.key]: () => "Media",
  [react$b.ParagraphPlugin.key]: (node) => {
    if (node?.[react$f.IndentListPlugin.key] === plateIndentList.INDENT_LIST_KEYS.todo)
      return "Todo List";
    if (node?.[react$f.IndentListPlugin.key] === plateIndentList.ListStyleType.Decimal)
      return "Ordered List";
    if (node?.[react$f.IndentListPlugin.key] === plateIndentList.ListStyleType.Disc) return "List";
    return "Paragraph";
  },
  [react$3.TablePlugin.key]: () => "Table",
  [react$5.TocPlugin.key]: () => "Table of Contents",
  [react$c.TogglePlugin.key]: () => "Toggle",
  [react$4.VideoPlugin.key]: () => "Video"
};
var BlockSuggestionCard = ({
  idx,
  isLast,
  suggestion
}) => {
  const { api, editor } = react$b.useEditorPlugin(react.SuggestionPlugin);
  const userInfo = react$b.usePluginOption(discussionPlugin, "user", suggestion.userId);
  const accept = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      plateSuggestion.acceptSuggestion(editor, suggestion2);
    });
  };
  const reject = (suggestion2) => {
    api.suggestion.withoutSuggestions(() => {
      plateSuggestion.rejectSuggestion(editor, suggestion2);
    });
  };
  const [hovering, setHovering] = React19__namespace.useState(false);
  const suggestionText2Array = (text) => {
    if (text === BLOCK_SUGGESTION) return ["line breaks"];
    return text.split(BLOCK_SUGGESTION).filter(Boolean);
  };
  const [editingId, setEditingId] = React19__namespace.useState(null);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(Avatar, { className: "size-5", children: [
              /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { alt: userInfo?.name, src: userInfo?.avatarUrl }),
              /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { children: userInfo?.name?.[0] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "mx-2 text-sm leading-none font-semibold", children: userInfo?.name }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs leading-none text-muted-foreground/80", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-1", children: formatCommentDate(new Date(suggestion.createdAt)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative mt-1 mb-4 pl-[32px]", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
            suggestion.type === "remove" && /* @__PURE__ */ jsxRuntime.jsx(React19__namespace.Fragment, { children: suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "Delete:" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: text }, index)
            ] }, index)) }),
            suggestion.type === "insert" && /* @__PURE__ */ jsxRuntime.jsx(React19__namespace.Fragment, { children: suggestionText2Array(suggestion.newText).map(
              (text, index) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "Add:" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: text || "line breaks" }, index)
              ] }, index)
            ) }),
            suggestion.type === "replace" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
              suggestionText2Array(suggestion.newText).map(
                (text, index) => /* @__PURE__ */ jsxRuntime.jsx(React19__namespace.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 text-brand/80",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: "with:" }),
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: text || "line breaks" })
                    ]
                  },
                  index
                ) }, index)
              ),
              suggestionText2Array(suggestion.text).map((text, index) => /* @__PURE__ */ jsxRuntime.jsx(React19__namespace.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: index === 0 ? "Replace:" : "Delete:" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: text || "line breaks" })
              ] }, index) }, index))
            ] }),
            suggestion.type === "update" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                Object.keys(suggestion.properties).map((key) => /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                  "Un",
                  key
                ] }, key)),
                Object.keys(suggestion.newProperties).map((key) => /* @__PURE__ */ jsxRuntime.jsx("span", { children: key.charAt(0).toUpperCase() + key.slice(1) }, key))
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: suggestion.newText })
            ] })
          ] }) }),
          suggestion.comments.map((comment, index) => /* @__PURE__ */ jsxRuntime.jsx(
            Comment,
            {
              comment,
              discussionLength: suggestion.comments.length,
              documentContent: "__suggestion__",
              editingId,
              index,
              setEditingId
            },
            comment.id ?? index
          )),
          hovering && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button2,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => accept(suggestion),
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button2,
              {
                variant: "ghost",
                className: "h-6 p-1 text-muted-foreground",
                onClick: () => reject(suggestion),
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(CommentCreateForm, { discussionId: suggestion.suggestionId })
        ] }),
        !isLast && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-px w-full bg-muted" })
      ]
    },
    `${suggestion.suggestionId}-${idx}`
  );
};
var useResolveSuggestion = (suggestionNodes, blockPath) => {
  const discussions = react$b.usePluginOption(discussionPlugin, "discussions");
  const { api, editor, getOption, setOption } = react$b.useEditorPlugin(suggestionPlugin);
  suggestionNodes.forEach(([node]) => {
    const id = api.suggestion.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (plate.PathApi.isPath(previousPath)) {
      const nodes = api.suggestion.node({ id, at: previousPath, isText: true });
      const parentNode = api.node(previousPath);
      let lineBreakId = null;
      if (parentNode && plate.ElementApi.isElement(parentNode[0])) {
        lineBreakId = api.suggestion.nodeId(parentNode[0]) ?? null;
      }
      if (!nodes && lineBreakId !== id) {
        return setOption("uniquePathMap", new Map(map).set(id, blockPath));
      }
      return;
    }
    setOption("uniquePathMap", new Map(map).set(id, blockPath));
  });
  const resolvedSuggestion = React19__namespace.useMemo(() => {
    const map = getOption("uniquePathMap");
    if (suggestionNodes.length === 0) return [];
    const suggestionIds = new Set(
      suggestionNodes.flatMap(([node]) => {
        if (plate.TextApi.isText(node)) {
          const dataList = api.suggestion.dataList(node);
          const includeUpdate = dataList.some(
            (data) => data.type === "update"
          );
          if (!includeUpdate) return api.suggestion.nodeId(node);
          return dataList.filter((data) => data.type === "update").map((d) => d.id);
        }
        if (plate.ElementApi.isElement(node)) {
          return api.suggestion.nodeId(node);
        }
      }).filter(Boolean)
    );
    const res = [];
    suggestionIds.forEach((id) => {
      if (!id) return;
      const path = map.get(id);
      if (!path || !plate.PathApi.isPath(path)) return;
      if (!plate.PathApi.equals(path, blockPath)) return;
      const entries = [
        ...editor.api.nodes({
          at: [],
          mode: "all",
          match: (n) => n[react.SuggestionPlugin.key] && n[plateSuggestion.getSuggestionKey(id)] || api.suggestion.nodeId(n) === id
        })
      ];
      entries.sort(([, path1], [, path2]) => {
        return plate.PathApi.isChild(path1, path2) ? -1 : 1;
      });
      let newText = "";
      let text = "";
      let properties = {};
      let newProperties = {};
      entries.forEach(([node]) => {
        if (plate.TextApi.isText(node)) {
          const dataList = api.suggestion.dataList(node);
          dataList.forEach((data) => {
            if (data.id !== id) return;
            switch (data.type) {
              case "insert": {
                newText += node.text;
                break;
              }
              case "remove": {
                text += node.text;
                break;
              }
              case "update": {
                properties = {
                  ...properties,
                  ...data.properties
                };
                newProperties = {
                  ...newProperties,
                  ...data.newProperties
                };
                newText += node.text;
                break;
              }
            }
          });
        } else {
          const lineBreakData = api.suggestion.isBlockSuggestion(node) ? node.suggestion : void 0;
          if (lineBreakData?.id !== plateSuggestion.keyId2SuggestionId(id)) return;
          if (lineBreakData.type === "insert") {
            newText += lineBreakData.isLineBreak ? BLOCK_SUGGESTION : BLOCK_SUGGESTION + TYPE_TEXT_MAP[node.type](node);
          } else if (lineBreakData.type === "remove") {
            text += lineBreakData.isLineBreak ? BLOCK_SUGGESTION : BLOCK_SUGGESTION + TYPE_TEXT_MAP[node.type](node);
          }
        }
      });
      if (entries.length === 0) return;
      const nodeData = api.suggestion.suggestionData(entries[0][0]);
      if (!nodeData) return;
      const comments = discussions.find((s) => s.id === id)?.comments || [];
      const createdAt = new Date(nodeData.createdAt);
      const keyId = plateSuggestion.getSuggestionKey(id);
      if (nodeData.type === "update") {
        return res.push({
          comments,
          createdAt,
          keyId,
          newProperties,
          newText,
          properties,
          suggestionId: plateSuggestion.keyId2SuggestionId(id),
          type: "update",
          userId: nodeData.userId
        });
      }
      if (newText.length > 0 && text.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          newText,
          suggestionId: plateSuggestion.keyId2SuggestionId(id),
          text,
          type: "replace",
          userId: nodeData.userId
        });
      }
      if (newText.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          newText,
          suggestionId: plateSuggestion.keyId2SuggestionId(id),
          type: "insert",
          userId: nodeData.userId
        });
      }
      if (text.length > 0) {
        return res.push({
          comments,
          createdAt,
          keyId,
          suggestionId: plateSuggestion.keyId2SuggestionId(id),
          text,
          type: "remove",
          userId: nodeData.userId
        });
      }
    });
    return res;
  }, [
    api.suggestion,
    blockPath,
    discussions,
    editor.api,
    getOption,
    suggestionNodes
  ]);
  return resolvedSuggestion;
};
var isResolvedSuggestion = (suggestion) => {
  return "suggestionId" in suggestion;
};
function BlockSuggestion({ element }) {
  const suggestionData = element.suggestion;
  if (suggestionData?.isLineBreak) return null;
  const isRemove = suggestionData?.type === "remove";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "pointer-events-none absolute inset-0 z-1 border-2 border-brand/[0.8] transition-opacity",
        isRemove && "border-gray-300"
      ),
      contentEditable: false
    }
  );
}
var BlockDiscussion = (props) => {
  const { editor, element } = props;
  const commentsApi = editor.getApi(react$s.CommentsPlugin).comment;
  const blockPath = editor.api.findPath(element);
  if (!blockPath || blockPath.length > 1) return;
  const draftCommentNode = commentsApi.node({ at: blockPath, isDraft: true });
  const commentNodes = [...commentsApi.nodes({ at: blockPath })];
  const suggestionNodes = [
    ...editor.getApi(react.SuggestionPlugin).suggestion.nodes({ at: blockPath })
  ];
  if (commentNodes.length === 0 && suggestionNodes.length === 0 && !draftCommentNode) {
    return;
  }
  return (props2) => /* @__PURE__ */ jsxRuntime.jsx(
    BlockCommentsContent,
    {
      blockPath,
      commentNodes,
      draftCommentNode,
      suggestionNodes,
      ...props2
    }
  );
};
var BlockCommentsContent = ({
  blockPath,
  children,
  commentNodes,
  draftCommentNode,
  suggestionNodes
}) => {
  const editor = react$b.useEditorRef();
  const resolvedSuggestions = useResolveSuggestion(suggestionNodes, blockPath);
  const resolvedDiscussions = useResolvedDiscussion(commentNodes, blockPath);
  const suggestionsCount = resolvedSuggestions.length;
  const discussionsCount = resolvedDiscussions.length;
  const totalCount = suggestionsCount + discussionsCount;
  const activeSuggestionId = react$b.usePluginOption(suggestionPlugin, "activeId");
  const activeSuggestion = activeSuggestionId && resolvedSuggestions.find((s) => s.suggestionId === activeSuggestionId);
  const commentingBlock = react$b.usePluginOption(commentsPlugin, "commentingBlock");
  const activeCommentId = react$b.usePluginOption(commentsPlugin, "activeId");
  const isCommenting = activeCommentId === plateComments.getDraftCommentKey();
  const activeDiscussion = activeCommentId && resolvedDiscussions.find((d) => d.id === activeCommentId);
  const noneActive = !activeSuggestion && !activeDiscussion;
  const sortedMergedData = [
    ...resolvedDiscussions,
    ...resolvedSuggestions
  ].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  const selected = resolvedDiscussions.some((d) => d.id === activeCommentId) || resolvedSuggestions.some((s) => s.suggestionId === activeSuggestionId);
  const [_open, setOpen] = React19__namespace.useState(selected);
  const commentingCurrent = !!commentingBlock && plate.PathApi.equals(blockPath, commentingBlock);
  const open = _open || selected || isCommenting && !!draftCommentNode && commentingCurrent;
  const anchorElement = React19__namespace.useMemo(() => {
    let activeNode;
    if (activeSuggestion) {
      activeNode = suggestionNodes.find(
        ([node]) => plate.TextApi.isText(node) && editor.getApi(react.SuggestionPlugin).suggestion.nodeId(node) === activeSuggestion.suggestionId
      );
    }
    if (activeCommentId) {
      if (activeCommentId === plateComments.getDraftCommentKey()) {
        activeNode = draftCommentNode;
      } else {
        activeNode = commentNodes.find(
          ([node]) => editor.getApi(react$s.CommentsPlugin).comment.nodeId(node) === activeCommentId
        );
      }
    }
    if (!activeNode) return null;
    return editor.api.toDOMNode(activeNode[0]);
  }, [
    open,
    activeSuggestion,
    activeCommentId,
    editor.api,
    suggestionNodes,
    draftCommentNode,
    commentNodes
  ]);
  if (suggestionsCount + resolvedDiscussions.length === 0 && !draftCommentNode)
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full", children });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex w-full justify-between", children: /* @__PURE__ */ jsxRuntime.jsxs(
    Popover2,
    {
      open,
      onOpenChange: (_open_) => {
        if (!_open_ && isCommenting && draftCommentNode) {
          editor.tf.unsetNodes(plateComments.getDraftCommentKey(), {
            at: [],
            mode: "lowest",
            match: (n) => n[plateComments.getDraftCommentKey()]
          });
        }
        setOpen(_open_);
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full", children }),
        anchorElement && /* @__PURE__ */ jsxRuntime.jsx(
          PopoverAnchor,
          {
            asChild: true,
            className: "w-full",
            virtualRef: { current: anchorElement }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          PopoverContent,
          {
            className: "max-h-[min(50dvh,calc(-24px+var(--radix-popper-available-height)))] w-[380px] max-w-[calc(100vw-24px)] min-w-[130px] overflow-y-auto p-0 data-[state=closed]:opacity-0",
            onCloseAutoFocus: (e) => e.preventDefault(),
            onOpenAutoFocus: (e) => e.preventDefault(),
            align: "center",
            side: "bottom",
            children: isCommenting ? /* @__PURE__ */ jsxRuntime.jsx(CommentCreateForm, { className: "p-4", focusOnMount: true }) : /* @__PURE__ */ jsxRuntime.jsx(React19__namespace.Fragment, { children: noneActive ? sortedMergedData.map(
              (item, index) => isResolvedSuggestion(item) ? /* @__PURE__ */ jsxRuntime.jsx(
                BlockSuggestionCard,
                {
                  idx: index,
                  isLast: index === sortedMergedData.length - 1,
                  suggestion: item
                },
                item.suggestionId
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                BlockComment,
                {
                  discussion: item,
                  isLast: index === sortedMergedData.length - 1
                },
                item.id
              )
            ) : /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
              activeSuggestion && /* @__PURE__ */ jsxRuntime.jsx(
                BlockSuggestionCard,
                {
                  idx: 0,
                  isLast: true,
                  suggestion: activeSuggestion
                },
                activeSuggestion.suggestionId
              ),
              activeDiscussion && /* @__PURE__ */ jsxRuntime.jsx(BlockComment, { discussion: activeDiscussion, isLast: true })
            ] }) })
          }
        ),
        totalCount > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative left-0 size-0 select-none", children: /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
          Button2,
          {
            variant: "ghost",
            className: "mt-1 ml-1 flex h-6 gap-1 px-1.5 py-0 text-muted-foreground/80 hover:text-muted-foreground/80 data-[active=true]:bg-muted",
            "data-active": open,
            contentEditable: false,
            children: [
              suggestionsCount > 0 && discussionsCount === 0 && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PencilLineIcon, { className: "size-4 shrink-0" }),
              suggestionsCount === 0 && discussionsCount > 0 && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessageSquareTextIcon, { className: "size-4 shrink-0" }),
              suggestionsCount > 0 && discussionsCount > 0 && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessagesSquareIcon, { className: "size-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-semibold", children: totalCount })
            ]
          }
        ) }) })
      ]
    }
  ) });
};
var BlockComment = ({
  discussion,
  isLast
}) => {
  const [editingId, setEditingId] = React19__namespace.useState(null);
  return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4", children: [
      discussion.comments.map((comment, index) => /* @__PURE__ */ jsxRuntime.jsx(
        Comment,
        {
          comment,
          discussionLength: discussion.comments.length,
          documentContent: discussion?.documentContent,
          editingId,
          index,
          setEditingId,
          showDocumentContent: true
        },
        comment.id ?? index
      )),
      /* @__PURE__ */ jsxRuntime.jsx(CommentCreateForm, { discussionId: discussion.id })
    ] }),
    !isLast && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-px w-full bg-muted" })
  ] }, discussion.id);
};
var useResolvedDiscussion = (commentNodes, blockPath) => {
  const { api, getOption, setOption } = react$b.useEditorPlugin(commentsPlugin);
  const discussions = react$b.usePluginOption(discussionPlugin, "discussions");
  commentNodes.forEach(([node]) => {
    const id = api.comment.nodeId(node);
    const map = getOption("uniquePathMap");
    if (!id) return;
    const previousPath = map.get(id);
    if (plate.PathApi.isPath(previousPath)) {
      const nodes = api.comment.node({ id, at: previousPath });
      if (!nodes) {
        setOption("uniquePathMap", new Map(map).set(id, blockPath));
        return;
      }
      return;
    }
    setOption("uniquePathMap", new Map(map).set(id, blockPath));
  });
  const commentsIds = new Set(
    commentNodes.map(([node]) => api.comment.nodeId(node)).filter(Boolean)
  );
  const resolvedDiscussions = discussions.map((d) => ({
    ...d,
    createdAt: new Date(d.createdAt)
  })).filter((item) => {
    const commentsPathMap = getOption("uniquePathMap");
    const firstBlockPath = commentsPathMap.get(item.id);
    if (!firstBlockPath) return false;
    if (!plate.PathApi.equals(firstBlockPath, blockPath)) return false;
    return api.comment.has({ id: item.id }) && commentsIds.has(item.id) && !item.isResolved;
  });
  return resolvedDiscussions;
};

// src/components/editor/plugins/discussion-plugin.tsx
var discussionsData = [
  {
    id: "discussion1",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "This is a comment"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 9e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments to your content",
    isResolved: false,
    userId: "alice"
  },
  {
    id: "discussion2",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Hey, what do you think about this approach?"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 9e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "Looks good!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 8e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "bob"
      },
      {
        id: "comment3",
        contentRich: [
          {
            children: [
              {
                text: "Thanks for the feedback!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 7e5),
        discussionId: "discussion1",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "collaborate",
    isResolved: false,
    userId: "bob"
  },
  {
    id: "discussion4",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Comments are a great way to provide feedback and discuss changes."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 6e5),
        discussionId: "discussion4",
        isEdited: false,
        userId: "charlie"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "Agreed! The link to the docs makes it easy to learn more."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 5e5),
        discussionId: "discussion4",
        isEdited: false,
        userId: "bob"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments",
    isResolved: false,
    userId: "charlie"
  },
  {
    id: "discussion5",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "This is a good example of how to use comments."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 4e5),
        discussionId: "discussion5",
        isEdited: false,
        userId: "alice"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "comments on many text segments",
    isResolved: false,
    userId: "alice"
  },
  {
    id: "discussion6",
    comments: [
      {
        id: "comment1",
        contentRich: [
          {
            children: [
              {
                text: "Nice demonstration of overlapping annotations with both comments and suggestions!"
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 3e5),
        discussionId: "discussion6",
        isEdited: false,
        userId: "bob"
      },
      {
        id: "comment2",
        contentRich: [
          {
            children: [
              {
                text: "This helps users understand how powerful the editor can be."
              }
            ],
            type: "p"
          }
        ],
        createdAt: new Date(Date.now() - 2e5),
        discussionId: "discussion6",
        isEdited: false,
        userId: "charlie"
      }
    ],
    createdAt: /* @__PURE__ */ new Date(),
    documentContent: "overlapping",
    isResolved: false,
    userId: "bob"
  }
];
var avatarUrl = (seed) => `https://api.dicebear.com/9.x/glass/svg?seed=${seed}`;
var usersData = {
  alice: {
    id: "alice",
    avatarUrl: avatarUrl("alice6"),
    name: "Alice"
  },
  bob: {
    id: "bob",
    avatarUrl: avatarUrl("bob4"),
    name: "Bob"
  },
  charlie: {
    id: "charlie",
    avatarUrl: avatarUrl("charlie2"),
    name: "Charlie"
  }
};
var discussionPlugin = react$b.createPlatePlugin({
  key: "discussion",
  options: {
    currentUserId: "alice",
    discussions: discussionsData,
    users: usersData
  }
}).configure({
  render: { aboveNodes: BlockDiscussion }
}).extendSelectors(({ getOption }) => ({
  currentUser: () => getOption("users")[getOption("currentUserId")],
  user: (id) => getOption("users")[id]
}));
var suggestionPlugin = react$b.toTPlatePlugin(
  plateSuggestion.BaseSuggestionPlugin,
  ({ editor }) => ({
    handlers: {
      // unset active suggestion when clicking outside of suggestion
      onClick: ({ api, event, setOption, type }) => {
        let leaf = event.target;
        let isSet = false;
        const unsetActiveSuggestion = () => {
          setOption("activeId", null);
          isSet = true;
        };
        if (!plate.isSlateString(leaf)) unsetActiveSuggestion();
        while (leaf.parentElement && !plate.isSlateElement(leaf.parentElement) && !plate.isSlateEditor(leaf.parentElement)) {
          if (leaf.classList.contains(`slate-${type}`)) {
            const suggestionEntry = api.suggestion.node({ isText: true });
            if (!suggestionEntry) {
              unsetActiveSuggestion();
              break;
            }
            const id = api.suggestion.nodeId(suggestionEntry[0]);
            setOption("activeId", id ?? null);
            isSet = true;
            break;
          }
          leaf = leaf.parentElement;
        }
        if (!isSet) unsetActiveSuggestion();
      }
    },
    options: {
      activeId: null,
      currentUserId: editor.getOption(discussionPlugin, "currentUserId"),
      hoverId: null,
      uniquePathMap: /* @__PURE__ */ new Map()
    },
    render: {
      belowRootNodes: ({ api, element }) => {
        if (!api.suggestion.isBlockSuggestion(element)) {
          return null;
        }
        return /* @__PURE__ */ jsxRuntime.jsx(BlockSuggestion, { element });
      }
    }
  })
);
var SuggestionBelowNodes = ({
  api,
  element
}) => {
  if (!api.suggestion.isBlockSuggestion(element)) return;
  const suggestionData = element.suggestion;
  if (!suggestionData?.isLineBreak) return;
  return function Component({ children }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SuggestionLineBreak, { suggestionData })
    ] });
  };
};
function SuggestionLineBreak({
  suggestionData
}) {
  const { type } = suggestionData;
  const isRemove = type === "remove";
  const isInsert = type === "insert";
  const activeSuggestionId = react$b.usePluginOption(suggestionPlugin, "activeId");
  const hoverSuggestionId = react$b.usePluginOption(suggestionPlugin, "hoverId");
  const isActive = activeSuggestionId === suggestionData.id;
  const isHover = hoverSuggestionId === suggestionData.id;
  const spanRef = React19__namespace.useRef(null);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ref: spanRef,
      className: cn(
        "absolute border-b-2 border-b-brand/[.24] bg-brand/[.08] text-justify text-brand/80 no-underline transition-colors duration-200",
        isInsert && (isActive || isHover) && "border-b-brand/[.60] bg-brand/[.13]",
        isRemove && "border-b-gray-300 bg-gray-300/25 text-gray-400 line-through",
        isRemove && (isActive || isHover) && "border-b-gray-500 bg-gray-400/25 text-gray-500 no-underline"
      ),
      style: {
        bottom: 4.5,
        height: 21
      },
      contentEditable: false,
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CornerDownLeftIcon, { className: "mt-0.5 size-4" })
    }
  );
}
var AILoadingBar = () => {
  const chat = react$b.usePluginOption(react$1.AIChatPlugin, "chat");
  const mode = react$b.usePluginOption(react$1.AIChatPlugin, "mode");
  const { status } = chat;
  const { api } = react$b.useEditorPlugin(react$1.AIChatPlugin);
  const isLoading = status === "streaming" || status === "submitted";
  const visible = isLoading && mode === "insert";
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground shadow-md transition-all duration-300"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: status === "submitted" ? "Thinking..." : "Writing..." }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button2,
          {
            size: "sm",
            variant: "ghost",
            className: "flex items-center gap-1 text-xs",
            onClick: () => api.aiChat.stop(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Pause, { className: "h-4 w-4" }),
              "Stop",
              /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "ml-1 rounded bg-border px-1 font-mono text-[10px] text-muted-foreground shadow-sm", children: "Esc" })
            ]
          }
        )
      ]
    }
  );
};
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
var models = [
  { label: "claude-3-haiku-20240307", value: "claude-3-haiku-20240307" },
  { label: "claude-3-sonnet-20240229", value: "claude-3-sonnet-20240229" },
  { label: "claude-3-opus-20240229", value: "claude-3-opus-20240229" },
  { label: "claude-3-5-sonnet-20241022", value: "claude-3-5-sonnet-20241022" },
  { label: "claude-3-5-haiku-20241022", value: "claude-3-5-haiku-20241022" }
];
var SettingsContext = React19__namespace.createContext(
  void 0
);
function SettingsProvider({ children }) {
  const [keys, setKeys] = React19__namespace.useState({
    anthropic: "",
    uploadthing: ""
  });
  const [model, setModel] = React19__namespace.useState(models[0]);
  const setKey = (service, key) => {
    setKeys((prev) => ({ ...prev, [service]: key }));
  };
  return /* @__PURE__ */ jsxRuntime.jsx(SettingsContext.Provider, { value: { keys, model, setKey, setModel }, children });
}
function useSettings() {
  const context = React19__namespace.useContext(SettingsContext);
  return context ?? {
    keys: {
      anthropic: "",
      uploadthing: ""
    },
    model: models[0],
    setKey: () => {
    },
    setModel: () => {
    }
  };
}

// src/components/editor/use-chat.ts
var useChat = () => {
  const { keys, model } = useSettings();
  const abortControllerRef = React19__namespace.useRef(null);
  const _abortFakeStream = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };
  const chat = react$z.useChat({
    id: "editor",
    api: "/api/ai/command",
    body: {
      // !!! DEMO ONLY: don't use API keys client-side
      apiKey: keys.anthropic,
      model: model.value
    },
    // Mock the API response. Remove it when you implement the route /api/ai/command
    fetch: async (input, init) => {
      const res = await fetch(input, init);
      if (!res.ok) {
        let sample = null;
        try {
          const content = JSON.parse(init?.body).messages.at(
            -1
          ).content;
          if (content.includes("Generate a markdown sample")) {
            sample = "markdown";
          } else if (content.includes("Generate a mdx sample")) {
            sample = "mdx";
          }
        } catch {
          sample = null;
        }
        abortControllerRef.current = new AbortController();
        await new Promise((resolve) => setTimeout(resolve, 400));
        const stream = fakeStreamText({
          sample,
          signal: abortControllerRef.current.signal
        });
        return new Response(stream, {
          headers: {
            Connection: "keep-alive",
            "Content-Type": "text/plain"
          }
        });
      }
      return res;
    }
  });
  return { ...chat, _abortFakeStream };
};
var fakeStreamText = ({
  chunkCount = 10,
  sample = null,
  signal,
  streamProtocol = "data"
} = {}) => {
  const blocks = (() => {
    if (sample === "markdown") {
      return markdownChunks;
    }
    if (sample === "mdx") {
      return mdxChunks;
    }
    return [
      Array.from({ length: chunkCount }, () => ({
        delay: faker.faker.number.int({ max: 100, min: 30 }),
        texts: faker.faker.lorem.words({ max: 3, min: 1 }) + " "
      })),
      Array.from({ length: chunkCount + 2 }, () => ({
        delay: faker.faker.number.int({ max: 100, min: 30 }),
        texts: faker.faker.lorem.words({ max: 3, min: 1 }) + " "
      })),
      Array.from({ length: chunkCount + 4 }, () => ({
        delay: faker.faker.number.int({ max: 100, min: 30 }),
        texts: faker.faker.lorem.words({ max: 3, min: 1 }) + " "
      }))
    ];
  })();
  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      if (signal?.aborted) {
        controller.error(new Error("Aborted before start"));
        return;
      }
      const abortHandler = () => {
        controller.error(new Error("Stream aborted"));
      };
      signal?.addEventListener("abort", abortHandler);
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        for (const chunk of block) {
          await new Promise((resolve) => setTimeout(resolve, chunk.delay));
          if (streamProtocol === "text") {
            controller.enqueue(encoder.encode(chunk.texts));
          } else {
            controller.enqueue(
              encoder.encode(`0:${JSON.stringify(chunk.texts)}
`)
            );
          }
        }
        if (i < blocks.length - 1) {
          if (streamProtocol === "text") {
            controller.enqueue(encoder.encode("\n\n"));
          } else {
            controller.enqueue(encoder.encode(`0:${JSON.stringify("\n\n")}
`));
          }
        }
      }
      if (streamProtocol === "data") {
        controller.enqueue(
          `d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":${blocks.reduce(
            (sum, block) => sum + block.length,
            0
          )}}}
`
        );
      }
      controller.close();
    }
  });
};
var delay = faker.faker.number.int({ max: 20, min: 5 });
var markdownChunks = [
  [
    { delay, texts: "Make text " },
    { delay, texts: "**bold**" },
    { delay, texts: ", " },
    { delay, texts: "*italic*" },
    { delay, texts: ", " },
    { delay, texts: "__underlined__" },
    { delay, texts: ", or apply a " },
    {
      delay,
      texts: "***combination***"
    },
    { delay, texts: " " },
    { delay, texts: "of " },
    { delay, texts: "these " },
    { delay, texts: "styles " },
    { delay, texts: "for " },
    { delay, texts: "a " },
    { delay, texts: "visually " },
    { delay, texts: "striking " },
    { delay, texts: "effect." },
    { delay, texts: "\n\n" },
    { delay, texts: "Add " },
    {
      delay,
      texts: "~~strikethrough~~"
    },
    { delay, texts: " " },
    { delay, texts: "to " },
    { delay, texts: "indicate " },
    { delay, texts: "deleted " },
    { delay, texts: "or " },
    { delay, texts: "outdated " },
    { delay, texts: "content." },
    { delay, texts: "\n\n" },
    { delay, texts: "Write " },
    { delay, texts: "code " },
    { delay, texts: "snippets " },
    { delay, texts: "with " },
    { delay, texts: "inline " },
    { delay, texts: "`code`" },
    { delay, texts: " formatting " },
    { delay, texts: "for " },
    { delay, texts: "easy " },
    { delay: faker.faker.number.int({ max: 100, min: 30 }), texts: "readability." },
    { delay, texts: "\n\n" },
    { delay, texts: "Add " },
    {
      delay,
      texts: "[links](https://example.com)"
    },
    { delay: faker.faker.number.int({ max: 100, min: 30 }), texts: " to " },
    { delay: faker.faker.number.int({ max: 100, min: 30 }), texts: "external " },
    { delay, texts: "resources " },
    { delay, texts: "or " },
    {
      delay,
      texts: "references.\n\n"
    },
    { delay, texts: "Use " },
    { delay, texts: "inline " },
    { delay, texts: "math " },
    { delay, texts: "equations " },
    { delay, texts: "like " },
    { delay, texts: "$E = mc^2$ " },
    { delay, texts: "for " },
    { delay, texts: "scientific " },
    { delay, texts: "notation." },
    { delay, texts: "\n\n" },
    { delay, texts: "# " },
    { delay, texts: "Heading " },
    { delay, texts: "1\n\n" },
    { delay, texts: "## " },
    { delay, texts: "Heading " },
    { delay, texts: "2\n\n" },
    { delay, texts: "### " },
    { delay, texts: "Heading " },
    { delay, texts: "3\n\n" },
    { delay, texts: "> " },
    { delay, texts: "Blockquote\n\n" },
    { delay, texts: "- " },
    { delay, texts: "Unordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "- " },
    { delay, texts: "Unordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "1. " },
    { delay, texts: "Ordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "2. " },
    { delay, texts: "Ordered " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "- " },
    { delay, texts: "[ " },
    { delay, texts: "] " },
    { delay, texts: "Task " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "1\n" },
    { delay, texts: "- " },
    { delay, texts: "[x] " },
    { delay, texts: "Task " },
    { delay, texts: "list " },
    { delay, texts: "item " },
    { delay, texts: "2\n\n" },
    { delay, texts: "![Alt " },
    {
      delay,
      texts: "text](https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n"
    },
    {
      delay,
      texts: "### Advantage blocks:\n"
    },
    { delay, texts: "\n" },
    { delay, texts: "$$\n" },
    {
      delay,
      texts: "a^2 + b^2 = c^2\n"
    },
    { delay, texts: "$$\n" },
    { delay, texts: "\n" },
    { delay, texts: "```python\n" },
    { delay, texts: "# " },
    { delay, texts: "Code " },
    { delay, texts: "block\n" },
    { delay, texts: 'print("Hello, ' },
    { delay, texts: 'World!")\n' },
    { delay, texts: "```\n\n" },
    { delay, texts: "Horizontal " },
    { delay, texts: "rule\n\n" },
    { delay, texts: "---\n\n" },
    { delay, texts: "| " },
    { delay, texts: "Header " },
    { delay, texts: "1 " },
    { delay, texts: "| " },
    { delay, texts: "Header " },
    { delay, texts: "2 " },
    { delay, texts: "|\n" },
    {
      delay,
      texts: "|----------|----------|\n"
    },
    { delay, texts: "| " },
    { delay, texts: "Row " },
    { delay, texts: "1   " },
    { delay, texts: " | " },
    { delay, texts: "Data    " },
    { delay, texts: " |\n" },
    { delay, texts: "| " },
    { delay, texts: "Row " },
    { delay, texts: "2   " },
    { delay, texts: " | " },
    { delay, texts: "Data    " },
    { delay, texts: " |" }
  ]
];
var mdxChunks = [
  [
    {
      delay,
      texts: "## "
    },
    {
      delay,
      texts: "Basic "
    },
    {
      delay,
      texts: "Markdown\n\n"
    },
    {
      delay,
      texts: "> "
    },
    {
      delay,
      texts: "The "
    },
    {
      delay,
      texts: "following "
    },
    {
      delay,
      texts: "node "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "marks "
    },
    {
      delay,
      texts: "is "
    },
    {
      delay,
      texts: "supported "
    },
    {
      delay,
      texts: "by "
    },
    {
      delay,
      texts: "the "
    },
    {
      delay,
      texts: "Markdown "
    },
    {
      delay,
      texts: "standard.\n\n"
    },
    {
      delay,
      texts: "Format "
    },
    {
      delay,
      texts: "text "
    },
    {
      delay,
      texts: "with **b"
    },
    {
      delay,
      texts: "old**, _"
    },
    {
      delay,
      texts: "italic_,"
    },
    {
      delay,
      texts: " _**comb"
    },
    {
      delay,
      texts: "ined sty"
    },
    {
      delay,
      texts: "les**_, "
    },
    {
      delay,
      texts: "~~strike"
    },
    {
      delay,
      texts: "through~"
    },
    {
      delay,
      texts: "~, `code"
    },
    {
      delay,
      texts: "` format"
    },
    {
      delay,
      texts: "ting, an"
    },
    {
      delay,
      texts: "d [hyper"
    },
    {
      delay,
      texts: "links](https://en.wikipedia.org/wiki/Hypertext).\n\n"
    },
    {
      delay,
      texts: "```javascript\n"
    },
    {
      delay,
      texts: "// Use code blocks to showcase code snippets\n"
    },
    {
      delay,
      texts: "function greet() {\n"
    },
    {
      delay,
      texts: '  console.info("Hello World!")\n'
    },
    {
      delay,
      texts: "}\n"
    },
    {
      delay,
      texts: "```\n\n"
    },
    {
      delay,
      texts: "- Simple"
    },
    {
      delay,
      texts: " lists f"
    },
    {
      delay,
      texts: "or organ"
    },
    {
      delay,
      texts: "izing co"
    },
    {
      delay,
      texts: "ntent\n"
    },
    {
      delay,
      texts: "1. "
    },
    {
      delay,
      texts: "Numbered "
    },
    {
      delay,
      texts: "lists "
    },
    {
      delay,
      texts: "for "
    },
    {
      delay,
      texts: "sequential "
    },
    {
      delay,
      texts: "steps\n\n"
    },
    {
      delay,
      texts: "| **Plugin**  | **Element** | **Inline** | **Void** |\n"
    },
    {
      delay,
      texts: "| ----------- | ----------- | ---------- | -------- |\n"
    },
    {
      delay,
      texts: "| **Heading** |             |            | No       |\n"
    },
    {
      delay,
      texts: "| **Image**   | Yes         | No         | Yes      |\n"
    },
    {
      delay,
      texts: "| **Ment"
    },
    {
      delay,
      texts: "ion** | Yes         | Yes        | Yes      |\n\n"
    },
    {
      delay,
      texts: "![](https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n\n"
    },
    {
      delay,
      texts: "- [x] Co"
    },
    {
      delay,
      texts: "mpleted "
    },
    {
      delay,
      texts: "tasks\n"
    },
    {
      delay,
      texts: "- [ ] Pe"
    },
    {
      delay,
      texts: "nding ta"
    },
    {
      delay,
      texts: "sks\n\n"
    },
    {
      delay,
      texts: "---\n\n## Advan"
    },
    {
      delay,
      texts: "ced Feat"
    },
    {
      delay,
      texts: "ures\n\n"
    },
    {
      delay,
      texts: "<callout> "
    },
    {
      delay,
      texts: "The "
    },
    {
      delay,
      texts: "following "
    },
    {
      delay,
      texts: "node "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "marks "
    },
    {
      delay,
      texts: "are "
    },
    {
      delay,
      texts: "not "
    },
    {
      delay,
      texts: "supported "
    },
    {
      delay,
      texts: "in "
    },
    {
      delay,
      texts: "Markdown "
    },
    {
      delay,
      texts: "but "
    },
    {
      delay,
      texts: "can "
    },
    {
      delay,
      texts: "be "
    },
    {
      delay,
      texts: "serialized "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "deserialized "
    },
    {
      delay,
      texts: "using "
    },
    {
      delay,
      texts: "MDX "
    },
    {
      delay,
      texts: "or "
    },
    {
      delay,
      texts: "specialized "
    },
    {
      delay,
      texts: "UnifiedJS "
    },
    {
      delay,
      texts: "plugins. "
    },
    {
      delay,
      texts: "</callout>\n\n"
    },
    {
      delay,
      texts: "Advanced "
    },
    {
      delay,
      texts: "marks: "
    },
    {
      delay,
      texts: "<kbd>\u2318 "
    },
    {
      delay,
      texts: "+ "
    },
    {
      delay,
      texts: "B</kbd>,<u>underlined</u>, "
    },
    {
      delay,
      texts: "<mark"
    },
    {
      delay,
      texts: ">highli"
    },
    {
      delay,
      texts: "ghted</m"
    },
    {
      delay,
      texts: "ark"
    },
    {
      delay,
      texts: "> text, "
    },
    {
      delay,
      texts: "<span s"
    },
    {
      delay,
      texts: 'tyle="co'
    },
    {
      delay,
      texts: "lor: #93"
    },
    {
      delay,
      texts: 'C47D;">c'
    },
    {
      delay,
      texts: "olored t"
    },
    {
      delay,
      texts: "ext</spa"
    },
    {
      delay,
      texts: "n> and "
    },
    {
      delay,
      texts: "<spa"
    },
    {
      delay,
      texts: "n"
    },
    {
      delay,
      texts: ' style="'
    },
    {
      delay,
      texts: "backgrou"
    },
    {
      delay,
      texts: "nd-color"
    },
    {
      delay,
      texts: ": #6C9EE"
    },
    {
      delay,
      texts: 'B;">back'
    },
    {
      delay,
      texts: "ground h"
    },
    {
      delay,
      texts: "ighlight"
    },
    {
      delay,
      texts: "s</spa"
    },
    {
      delay,
      texts: "n> for "
    },
    {
      delay,
      texts: "visual e"
    },
    {
      delay,
      texts: "mphasis.\n\n"
    },
    {
      delay,
      texts: "Superscript "
    },
    {
      delay,
      texts: "like "
    },
    {
      delay,
      texts: "E=mc<sup>2</sup> "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "subscript "
    },
    {
      delay,
      texts: "like "
    },
    {
      delay,
      texts: "H<sub>2</sub>O "
    },
    {
      delay,
      texts: "demonstrate "
    },
    {
      delay,
      texts: "mathematical "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "chemical "
    },
    {
      delay,
      texts: "notation "
    },
    {
      delay,
      texts: "capabilities.\n\n"
    },
    {
      delay,
      texts: "Add "
    },
    {
      delay,
      texts: "mentions "
    },
    {
      delay,
      texts: "like "
    },
    {
      delay,
      texts: "@BB-8, d"
    },
    {
      delay,
      texts: "ates (<d"
    },
    {
      delay,
      texts: "ate>2025"
    },
    {
      delay,
      texts: "-05-08</"
    },
    {
      delay,
      texts: "date>), "
    },
    {
      delay,
      texts: "and math"
    },
    {
      delay,
      texts: " formula"
    },
    {
      delay,
      texts: "s ($E=mc"
    },
    {
      delay,
      texts: "^2$).\n\n"
    },
    {
      delay,
      texts: "The "
    },
    {
      delay,
      texts: "table "
    },
    {
      delay,
      texts: "of "
    },
    {
      delay,
      texts: "contents "
    },
    {
      delay,
      texts: "feature "
    },
    {
      delay,
      texts: "automatically "
    },
    {
      delay,
      texts: "generates "
    },
    {
      delay,
      texts: "document "
    },
    {
      delay,
      texts: "structure "
    },
    {
      delay,
      texts: "for "
    },
    {
      delay,
      texts: "easy "
    },
    {
      delay,
      texts: "navigation.\n\n"
    },
    {
      delay,
      texts: "<toc "
    },
    {
      delay,
      texts: "/>\n\n"
    },
    {
      delay,
      texts: "Math "
    },
    {
      delay,
      texts: "formula "
    },
    {
      delay,
      texts: "support "
    },
    {
      delay,
      texts: "makes "
    },
    {
      delay,
      texts: "displaying "
    },
    {
      delay,
      texts: "complex "
    },
    {
      delay,
      texts: "mathematical "
    },
    {
      delay,
      texts: "expressions "
    },
    {
      delay,
      texts: "simple.\n\n"
    },
    {
      delay,
      texts: "$$\n"
    },
    {
      delay,
      texts: "a^2"
    },
    {
      delay,
      texts: "+b^2"
    },
    {
      delay,
      texts: "=c^2\n"
    },
    {
      delay,
      texts: "$$\n\n"
    },
    {
      delay,
      texts: "Multi-co"
    },
    {
      delay,
      texts: "lumn lay"
    },
    {
      delay,
      texts: "out feat"
    },
    {
      delay,
      texts: "ures ena"
    },
    {
      delay,
      texts: "ble rich"
    },
    {
      delay,
      texts: "er page "
    },
    {
      delay,
      texts: "designs "
    },
    {
      delay,
      texts: "and cont"
    },
    {
      delay,
      texts: "ent layo"
    },
    {
      delay,
      texts: "uts.\n\n"
    },
    // {
    //  delay,
    //   texts: '<column_group layout="[50,50]">\n',
    // },
    // {
    //  delay,
    //   texts: '<column width="50%">\n',
    // },
    // {
    //  delay,
    //   texts: '  left\n',
    // },
    // {
    //  delay,
    //   texts: '</column>\n',
    // },
    // {
    //  delay,
    //   texts: '<column width="50%">\n',
    // },
    // {
    //  delay,
    //   texts: '  right\n',
    // },
    // {
    //  delay,
    //   texts: '</column>\n',
    // },
    // {
    //  delay,
    //   texts: '</column_group>\n\n',
    // },
    {
      delay,
      texts: "PDF "
    },
    {
      delay,
      texts: "embedding "
    },
    {
      delay,
      texts: "makes "
    },
    {
      delay,
      texts: "document "
    },
    {
      delay,
      texts: "referencing "
    },
    {
      delay,
      texts: "simple "
    },
    {
      delay,
      texts: "and "
    },
    {
      delay,
      texts: "intuitive.\n\n"
    },
    {
      delay,
      texts: "<file "
    },
    {
      delay,
      texts: 'name="sample.pdf" '
    },
    {
      delay,
      texts: 'align="center" '
    },
    {
      delay,
      texts: 'src="https://s26.q4cdn.com/900411403/files/doc_downloads/test.pdf" width="80%" isUpload="true" />\n\n'
    },
    {
      delay,
      texts: "Audio "
    },
    {
      delay,
      texts: "players "
    },
    {
      delay,
      texts: "can "
    },
    {
      delay,
      texts: "be "
    },
    {
      delay,
      texts: "embedded "
    },
    {
      delay,
      texts: "directly "
    },
    {
      delay,
      texts: "into "
    },
    {
      delay,
      texts: "documents, "
    },
    {
      delay,
      texts: "supporting "
    },
    {
      delay,
      texts: "online "
    },
    {
      delay,
      texts: "audio "
    },
    {
      delay,
      texts: "resources.\n\n"
    },
    {
      delay,
      texts: "<audio "
    },
    {
      delay,
      texts: 'align="center" '
    },
    {
      delay,
      texts: 'src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3" width="80%" />\n\n'
    },
    {
      delay,
      texts: "Video "
    },
    {
      delay,
      texts: "playback "
    },
    {
      delay,
      texts: "features "
    },
    {
      delay,
      texts: "support "
    },
    {
      delay,
      texts: "embedding "
    },
    {
      delay,
      texts: "various "
    },
    {
      delay,
      texts: "online "
    },
    {
      delay,
      texts: "video "
    },
    {
      delay,
      texts: "resources, "
    },
    {
      delay,
      texts: "enriching "
    },
    {
      delay,
      texts: "document "
    },
    {
      delay,
      texts: "content.\n\n"
    },
    {
      delay,
      texts: "<video "
    },
    {
      delay,
      texts: 'align="center" '
    },
    {
      delay,
      texts: 'src="https://videos.pexels.com/video-files/6769791/6769791-uhd_2560_1440_24fps.mp4" width="80%" isUpload="true" />'
    }
  ]
];
function CalloutElementStatic({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plate.SlateElement,
    {
      className: cn$1.cn("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "size-6 text-[18px] select-none",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("span", { "data-plate-prevent-deserialization": true, children: props.element.icon || "\u{1F4A1}" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full", children })
      ] })
    }
  );
}
function KbdLeaf(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateLeaf,
    {
      ...props,
      as: "kbd",
      className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(248,_249,_250)_0px_1px_5px_0px_inset,_rgb(193,_200,_205)_0px_0px_0px_0.5px,_rgb(193,_200,_205)_0px_2px_1px_-1px,_rgb(193,_200,_205)_0px_1px_0px_0px] dark:shadow-[rgba(255,_255,_255,_0.1)_0px_0.5px_0px_0px_inset,_rgb(26,_29,_30)_0px_1px_5px_0px_inset,_rgb(76,_81,_85)_0px_0px_0px_0.5px,_rgb(76,_81,_85)_0px_2px_1px_-1px,_rgb(76,_81,_85)_0px_1px_0px_0px]",
      children: props.children
    }
  );
}
var components = {
  [plateMedia.BaseAudioPlugin.key]: MediaAudioElementStatic,
  [plateBlockQuote.BaseBlockquotePlugin.key]: BlockquoteElementStatic,
  [plateBasicMarks.BaseBoldPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "strong" }),
  [plateCallout.BaseCalloutPlugin.key]: CalloutElementStatic,
  [plateCodeBlock.BaseCodeBlockPlugin.key]: CodeBlockElementStatic,
  [plateCodeBlock.BaseCodeLinePlugin.key]: CodeLineElementStatic,
  [plateBasicMarks.BaseCodePlugin.key]: CodeLeafStatic,
  [plateCodeBlock.BaseCodeSyntaxPlugin.key]: CodeSyntaxLeafStatic,
  [plateLayout.BaseColumnItemPlugin.key]: ColumnElementStatic,
  [plateLayout.BaseColumnPlugin.key]: ColumnGroupElementStatic,
  [plateDate.BaseDatePlugin.key]: DateElement,
  [plateMath.BaseEquationPlugin.key]: EquationElementStatic,
  [plateMedia.BaseFilePlugin.key]: MediaFileElementStatic,
  [plateHighlight.BaseHighlightPlugin.key]: HighlightLeafStatic,
  [plateHorizontalRule.BaseHorizontalRulePlugin.key]: HrElementStatic,
  [plateMedia.BaseImagePlugin.key]: ImageElementStatic,
  [plateMath.BaseInlineEquationPlugin.key]: InlineEquationElementStatic,
  [plateBasicMarks.BaseItalicPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "em" }),
  [plateKbd.BaseKbdPlugin.key]: KbdLeaf,
  [plateLink.BaseLinkPlugin.key]: LinkElementStatic,
  [plateMention.BaseMentionPlugin.key]: MentionElementStatic,
  [plate.BaseParagraphPlugin.key]: ParagraphElementStatic,
  [plateBasicMarks.BaseStrikethroughPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "s" }),
  [plateBasicMarks.BaseSubscriptPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "sub" }),
  [plateBasicMarks.BaseSuperscriptPlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "sup" }),
  [plateTable.BaseTableCellHeaderPlugin.key]: TableCellHeaderStaticElement,
  [plateTable.BaseTableCellPlugin.key]: TableCellElementStatic,
  [plateTable.BaseTablePlugin.key]: TableElementStatic,
  [plateTable.BaseTableRowPlugin.key]: TableRowElementStatic,
  [plateHeading.BaseTocPlugin.key]: TocElementStatic,
  [plateBasicMarks.BaseUnderlinePlugin.key]: cn$1.withProps(plate.SlateLeaf, { as: "u" }),
  [plateMedia.BaseVideoPlugin.key]: MediaVideoElementStatic,
  [plateHeading.HEADING_KEYS.h1]: cn$1.withProps(HeadingElementStatic, { variant: "h1" }),
  [plateHeading.HEADING_KEYS.h2]: cn$1.withProps(HeadingElementStatic, { variant: "h2" }),
  [plateHeading.HEADING_KEYS.h3]: cn$1.withProps(HeadingElementStatic, { variant: "h3" })
  // [BaseCommentsPlugin.key]: CommentLeafStatic
  // [BaseTogglePlugin.key]: ToggleElementStatic
};
var lowlight2 = lowlight$1.createLowlight(lowlight$1.all);
var plugins = [
  plateLayout.BaseColumnItemPlugin,
  plateLayout.BaseColumnPlugin,
  plateBlockQuote.BaseBlockquotePlugin,
  plateBasicMarks.BaseSubscriptPlugin,
  plateBasicMarks.BaseSuperscriptPlugin,
  plateMedia.BaseImagePlugin,
  plateKbd.BaseKbdPlugin,
  plateBasicMarks.BaseBoldPlugin,
  plateCodeBlock.BaseCodeBlockPlugin.configure({ options: { lowlight: lowlight2 } }),
  plateDate.BaseDatePlugin,
  plateMath.BaseEquationPlugin,
  plateMath.BaseInlineEquationPlugin,
  plateBasicMarks.BaseCodePlugin,
  plateBasicMarks.BaseItalicPlugin,
  plateBasicMarks.BaseStrikethroughPlugin,
  plateBasicMarks.BaseUnderlinePlugin,
  plateFont.BaseFontColorPlugin,
  plateFont.BaseFontSizePlugin,
  plateFont.BaseFontFamilyPlugin,
  plateFont.BaseFontWeightPlugin,
  plateFont.BaseFontBackgroundColorPlugin,
  plateHeading.BaseHeadingPlugin,
  plateHorizontalRule.BaseHorizontalRulePlugin,
  plateTable.BaseTablePlugin,
  plateHeading.BaseTocPlugin,
  plateHighlight.BaseHighlightPlugin,
  plateLink.BaseLinkPlugin,
  plateMention.BaseMentionPlugin,
  plate.BaseParagraphPlugin,
  plateCallout.BaseCalloutPlugin,
  plateIndent.BaseIndentPlugin.extend({
    inject: {
      targetPlugins: [plate.BaseParagraphPlugin.key]
    }
  }),
  plateIndentList.BaseIndentListPlugin.extend({
    inject: {
      targetPlugins: [plate.BaseParagraphPlugin.key]
    },
    options: {
      listStyleTypes: {
        todo: {
          liComponent: TodoLiStatic,
          markerComponent: TodoMarkerStatic,
          type: "todo"
        }
      }
    }
  }),
  markdownPlugin
];
var AIChatEditor = React19__namespace.memo(function AIChatEditor2({
  content
}) {
  const aiEditor = react$b.usePlateEditor({
    plugins
  });
  react$1.useAIChatEditor(aiEditor, content);
  return /* @__PURE__ */ jsxRuntime.jsx(EditorStatic, { variant: "aiChat", components, editor: aiEditor });
});
var aiChatItems = {
  accept: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, {}),
    label: "Accept",
    value: "accept",
    onSelect: ({ editor }) => {
      editor.getTransforms(react$1.AIChatPlugin).aiChat.accept();
      editor.tf.focus({ edge: "end" });
    }
  },
  continueWrite: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PenLine, {}),
    label: "Continue writing",
    value: "continueWrite",
    onSelect: ({ editor }) => {
      const ancestorNode = editor.api.block({ highest: true });
      if (!ancestorNode) return;
      const isEmpty = plate.NodeApi.string(ancestorNode[0]).trim().length === 0;
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        mode: "insert",
        prompt: isEmpty ? `<Document>
{editor}
</Document>
Start writing a new paragraph AFTER <Document> ONLY ONE SENTENCE` : "Continue writing AFTER <Block> ONLY ONE SENTENCE. DONT REPEAT THE TEXT."
      });
    }
  },
  discard: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, {}),
    label: "Discard",
    shortcut: "Escape",
    value: "discard",
    onSelect: ({ editor }) => {
      editor.getTransforms(react$1.AIPlugin).ai.undo();
      editor.getApi(react$1.AIChatPlugin).aiChat.hide();
    }
  },
  emojify: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SmileIcon, {}),
    label: "Emojify",
    value: "emojify",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Emojify"
      });
    }
  },
  explain: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BadgeHelp, {}),
    label: "Explain",
    value: "explain",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: {
          default: "Explain {editor}",
          selecting: "Explain"
        }
      });
    }
  },
  fixSpelling: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, {}),
    label: "Fix spelling & grammar",
    value: "fixSpelling",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Fix spelling and grammar"
      });
    }
  },
  generateMarkdownSample: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BookOpenCheck, {}),
    label: "Generate Markdown sample",
    value: "generateMarkdownSample",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Generate a markdown sample"
      });
    }
  },
  generateMdxSample: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BookOpenCheck, {}),
    label: "Generate MDX sample",
    value: "generateMdxSample",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Generate a mdx sample"
      });
    }
  },
  improveWriting: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Wand, {}),
    label: "Improve writing",
    value: "improveWriting",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Improve the writing"
      });
    }
  },
  insertBelow: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListEnd, {}),
    label: "Insert below",
    value: "insertBelow",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(react$1.AIChatPlugin).aiChat.insertBelow(aiEditor);
    }
  },
  makeLonger: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListPlus, {}),
    label: "Make longer",
    value: "makeLonger",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Make longer"
      });
    }
  },
  makeShorter: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListMinus, {}),
    label: "Make shorter",
    value: "makeShorter",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Make shorter"
      });
    }
  },
  replace: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, {}),
    label: "Replace selection",
    value: "replace",
    onSelect: ({ aiEditor, editor }) => {
      void editor.getTransforms(react$1.AIChatPlugin).aiChat.replaceSelection(aiEditor);
    }
  },
  simplifyLanguage: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FeatherIcon, {}),
    label: "Simplify language",
    value: "simplifyLanguage",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        prompt: "Simplify the language"
      });
    }
  },
  summarize: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Album, {}),
    label: "Add a summary",
    value: "summarize",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
        mode: "insert",
        prompt: {
          default: "Summarize {editor}",
          selecting: "Summarize"
        }
      });
    }
  },
  translate: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Languages, {}),
    label: "Translate",
    value: "translate",
    onSelect: ({ setTranslateMode }) => {
      setTranslateMode?.(true);
    }
  },
  tryAgain: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CornerUpLeft, {}),
    label: "Try again",
    value: "tryAgain",
    onSelect: ({ editor }) => {
      void editor.getApi(react$1.AIChatPlugin).aiChat.reload();
    }
  }
};
var menuStateItems = {
  cursorCommand: [
    {
      items: [
        aiChatItems.generateMdxSample,
        aiChatItems.generateMarkdownSample,
        aiChatItems.continueWrite,
        aiChatItems.summarize,
        aiChatItems.explain
      ]
    }
  ],
  cursorSuggestion: [
    {
      items: [aiChatItems.accept, aiChatItems.discard, aiChatItems.tryAgain]
    }
  ],
  selectionCommand: [
    {
      items: [
        aiChatItems.improveWriting,
        aiChatItems.translate,
        // 22
        aiChatItems.emojify,
        aiChatItems.makeLonger,
        aiChatItems.makeShorter,
        aiChatItems.fixSpelling,
        aiChatItems.simplifyLanguage
      ]
    }
  ],
  selectionSuggestion: [
    {
      items: [
        aiChatItems.replace,
        aiChatItems.insertBelow,
        aiChatItems.discard,
        aiChatItems.tryAgain
      ]
    }
  ]
};
var AIMenuItems = ({
  setTranslateMode,
  setValue
}) => {
  const editor = react$b.useEditorRef();
  const { messages } = react$b.usePluginOption(react$1.AIChatPlugin, "chat");
  const aiEditor = react$b.usePluginOption(react$1.AIChatPlugin, "aiEditor");
  const isSelecting = react$h.useIsSelecting();
  const menuState = React19__namespace.useMemo(() => {
    if (messages && messages.length > 0) {
      return isSelecting ? "selectionSuggestion" : "cursorSuggestion";
    }
    return isSelecting ? "selectionCommand" : "cursorCommand";
  }, [isSelecting, messages]);
  const menuGroups = React19__namespace.useMemo(() => {
    const items2 = menuStateItems[menuState];
    return items2;
  }, [menuState]);
  React19__namespace.useEffect(() => {
    if (menuGroups.length > 0 && menuGroups[0].items.length > 0) {
      setValue(menuGroups[0].items[0].value);
    }
  }, [menuGroups, setValue]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: menuGroups.map((group, index) => /* @__PURE__ */ jsxRuntime.jsx(CommandGroup, { heading: group.heading, children: group.items.map((menuItem) => /* @__PURE__ */ jsxRuntime.jsxs(
    CommandItem,
    {
      className: "[&_svg]:text-muted-foreground",
      value: menuItem.value,
      onSelect: () => {
        menuItem.onSelect?.({
          aiEditor,
          editor,
          setTranslateMode
        });
      },
      children: [
        menuItem.icon,
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: menuItem.label })
      ]
    },
    menuItem.value
  )) }, index)) });
};
function AIMenu() {
  const { api, editor } = react$b.useEditorPlugin(react$1.AIChatPlugin);
  const open = react$b.usePluginOption(react$1.AIChatPlugin, "open");
  const mode = react$b.usePluginOption(react$1.AIChatPlugin, "mode");
  const streaming = react$b.usePluginOption(react$1.AIChatPlugin, "streaming");
  const isSelecting = react$h.useIsSelecting();
  const [value, setValue] = React19__namespace.useState("");
  const chat = useChat();
  const { input, messages, setInput, status } = chat;
  const [anchorElement, setAnchorElement] = React19__namespace.useState(
    null
  );
  const [translateMode, setTranslateMode] = React19__namespace.useState(false);
  const [targetLanguage, setTargetLanguage] = React19__namespace.useState("");
  const content = react$1.useLastAssistantMessage()?.content;
  React19__namespace.useEffect(() => {
    if (streaming) {
      const anchor = api.aiChat.node({ anchor: true });
      setTimeout(() => {
        const anchorDom = editor.api.toDOMNode(anchor[0]);
        setAnchorElement(anchorDom);
      }, 0);
    }
  }, [streaming]);
  const setOpen = (open2) => {
    if (open2) {
      api.aiChat.show();
    } else {
      api.aiChat.hide();
      setTranslateMode(false);
      setTargetLanguage("");
    }
  };
  const show = (anchorElement2) => {
    setAnchorElement(anchorElement2);
    setOpen(true);
  };
  react$1.useEditorChat({
    chat,
    onOpenBlockSelection: (blocks) => {
      show(editor.api.toDOMNode(blocks.at(-1)[0]));
    },
    onOpenChange: (open2) => {
      if (!open2) {
        setAnchorElement(null);
        setInput("");
        setTranslateMode(false);
        setTargetLanguage("");
      }
    },
    onOpenCursor: () => {
      const [ancestor] = editor.api.block({ highest: true });
      if (!editor.api.isAt({ end: true }) && !editor.api.isEmpty(ancestor)) {
        editor.getApi(react$h.BlockSelectionPlugin).blockSelection.set(ancestor.id);
      }
      show(editor.api.toDOMNode(ancestor));
    },
    onOpenSelection: () => {
      show(editor.api.toDOMNode(editor.api.blocks().at(-1)[0]));
    }
  });
  react$b.useHotkeys(
    "meta+j",
    () => {
      api.aiChat.show();
    },
    { enableOnContentEditable: true, enableOnFormTags: true }
  );
  react$b.useHotkeys("esc", () => {
    api.aiChat.stop();
    chat._abortFakeStream();
    setTranslateMode(false);
    setTargetLanguage("");
  });
  const isLoading = status === "streaming" || status === "submitted";
  if (isLoading && mode === "insert") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverAnchor, { virtualRef: { current: anchorElement } }),
    /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContent,
      {
        className: "border-none bg-transparent p-0 shadow-none",
        style: {
          width: anchorElement?.offsetWidth
        },
        onEscapeKeyDown: (e) => {
          e.preventDefault();
          api.aiChat.hide();
          setTranslateMode(false);
          setTargetLanguage("");
        },
        align: "center",
        side: "bottom",
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          Command,
          {
            className: "w-full rounded-lg border shadow-md",
            value,
            onValueChange: setValue,
            children: [
              mode === "chat" && isSelecting && content && /* @__PURE__ */ jsxRuntime.jsx(AIChatEditor, { content }),
              isLoading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex grow items-center gap-2 p-2 text-sm text-muted-foreground select-none", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2Icon, { className: "size-4 animate-spin" }),
                messages.length > 1 ? "Editing..." : "Thinking..."
              ] }) : translateMode ? /* @__PURE__ */ jsxRuntime.jsx(
                cmdk.Command.Input,
                {
                  className: cn(
                    "flex h-9 w-full min-w-0 border-input bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm dark:bg-input/30",
                    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                    "border-b focus-visible:ring-transparent"
                  ),
                  value: targetLanguage,
                  onKeyDown: (e) => {
                    if (plate.isHotkey("enter")(e) && targetLanguage.trim()) {
                      e.preventDefault();
                      void editor.getApi(react$1.AIChatPlugin).aiChat.submit({
                        prompt: `Translate the selected text to ${targetLanguage}`
                      });
                      setTranslateMode(false);
                      setTargetLanguage("");
                    }
                    if (plate.isHotkey("esc")(e)) {
                      setTranslateMode(false);
                      setTargetLanguage("");
                    }
                  },
                  onValueChange: setTargetLanguage,
                  placeholder: "Enter target language (e.g. French)\u2026",
                  autoFocus: true
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                cmdk.Command.Input,
                {
                  className: cn(
                    "flex h-9 w-full min-w-0 border-input bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm dark:bg-input/30",
                    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                    "border-b focus-visible:ring-transparent"
                  ),
                  value: input,
                  onKeyDown: (e) => {
                    if (plate.isHotkey("backspace")(e) && input.length === 0) {
                      e.preventDefault();
                      api.aiChat.hide();
                    }
                    if (plate.isHotkey("enter")(e) && !e.shiftKey && !value) {
                      e.preventDefault();
                      void api.aiChat.submit();
                    }
                  },
                  onValueChange: setInput,
                  placeholder: "Ask AI anything...",
                  "data-plate-focus": true,
                  autoFocus: true
                }
              ),
              !isLoading && !translateMode && /* @__PURE__ */ jsxRuntime.jsx(CommandList, { children: /* @__PURE__ */ jsxRuntime.jsx(AIMenuItems, { setTranslateMode, setValue }) })
            ]
          }
        )
      }
    )
  ] });
}
function Cursor({
  id,
  caretPosition,
  data,
  selection,
  selectionRects
}) {
  const streaming = react$b.usePluginOption(react$1.AIChatPlugin, "streaming");
  const { style, selectionStyle = style } = data ?? {};
  const isCursor = plate.RangeApi.isCollapsed(selection);
  if (streaming) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    selectionRects.map((position, i) => {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "pointer-events-none absolute z-10",
            id === "selection" && "bg-brand/25",
            id === "selection" && isCursor && "bg-primary"
          ),
          style: {
            ...selectionStyle,
            ...position
          }
        },
        i
      );
    }),
    caretPosition && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "pointer-events-none absolute z-10 w-0.5",
          id === "drag" && "w-px bg-brand"
        ),
        style: { ...caretPosition, ...style }
      }
    )
  ] });
}
function CursorOverlay() {
  const { cursors } = react$h.useCursorOverlay();
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: cursors.map((cursor) => /* @__PURE__ */ jsxRuntime.jsx(Cursor, { ...cursor }, cursor.id)) });
}
var cursorOverlayPlugin = react$h.CursorOverlayPlugin.configure({
  render: {
    afterEditable: () => /* @__PURE__ */ jsxRuntime.jsx(CursorOverlay, {})
  }
});
var systemCommon = `You are an advanced AI-powered note-taking assistant, designed to enhance productivity and creativity in note management.
Respond directly to user prompts with clear, concise, and relevant content. Maintain a neutral, helpful tone.

Rules:
- <Document> is the entire note the user is working on.
- <Reminder> is a reminder of how you should reply to INSTRUCTIONS. It does not apply to questions.
- Anything else is the user prompt.
- Your response should be tailored to the user's prompt, providing precise assistance to optimize note management.
- For INSTRUCTIONS: Follow the <Reminder> exactly. Provide ONLY the content to be inserted or replaced. No explanations or comments.
- For QUESTIONS: Provide a helpful and concise answer. You may include brief explanations if necessary.
- CRITICAL: DO NOT remove or modify the following custom MDX tags: <u>, <callout>, <kbd>, <toc>, <sub>, <sup>, <mark>, <del>, <date>, <span>, <column>, <column_group>, <file>, <audio>, <video> in <Selection> unless the user explicitly requests this change.
- CRITICAL: Distinguish between INSTRUCTIONS and QUESTIONS. Instructions typically ask you to modify or add content. Questions ask for information or clarification.
- CRITICAL: when asked to write in markdown, do not start with \`\`\`markdown.
`;
var systemDefault = `${systemCommon}
- <Block> is the current block of text the user is working on.
- Ensure your output can seamlessly fit into the existing <Block> structure.

<Block>
{block}
</Block>
`;
var systemSelecting = `${systemCommon}
- <Block> is the block of text containing the user's selection, providing context.
- Ensure your output can seamlessly fit into the existing <Block> structure.
- <Selection> is the specific text the user has selected in the block and wants to modify or ask about.
- Consider the context provided by <Block>, but only modify <Selection>. Your response should be a direct replacement for <Selection>.
<Block>
{block}
</Block>
<Selection>
{selection}
</Selection>
`;
var systemBlockSelecting = `${systemCommon}
- <Selection> represents the full blocks of text the user has selected and wants to modify or ask about.
- Your response should be a direct replacement for the entire <Selection>.
- Maintain the overall structure and formatting of the selected blocks, unless explicitly instructed otherwise.
- CRITICAL: Provide only the content to replace <Selection>. Do not add additional blocks or change the block structure unless specifically requested.
<Selection>
{block}
</Selection>
`;
var userDefault = `<Reminder>
CRITICAL: NEVER write <Block>.
</Reminder>
{prompt}`;
var userSelecting = `<Reminder>
If this is a question, provide a helpful and concise answer about <Selection>.
If this is an instruction, provide ONLY the text to replace <Selection>. No explanations.
Ensure it fits seamlessly within <Block>. If <Block> is empty, write ONE random sentence.
NEVER write <Block> or <Selection>.
</Reminder>
{prompt} about <Selection>`;
var userBlockSelecting = `<Reminder>
If this is a question, provide a helpful and concise answer about <Selection>.
If this is an instruction, provide ONLY the content to replace the entire <Selection>. No explanations.
Maintain the overall structure unless instructed otherwise.
NEVER write <Block> or <Selection>.
</Reminder>
{prompt} about <Selection>`;
var PROMPT_TEMPLATES = {
  systemBlockSelecting,
  systemDefault,
  systemSelecting,
  userBlockSelecting,
  userDefault,
  userSelecting
};
var aiPlugins = [
  cursorOverlayPlugin,
  markdownPlugin,
  react$1.AIPlugin,
  react$1.AIChatPlugin.configure({
    options: {
      promptTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.userBlockSelecting : isSelecting ? PROMPT_TEMPLATES.userSelecting : PROMPT_TEMPLATES.userDefault;
      },
      systemTemplate: ({ isBlockSelecting, isSelecting }) => {
        return isBlockSelecting ? PROMPT_TEMPLATES.systemBlockSelecting : isSelecting ? PROMPT_TEMPLATES.systemSelecting : PROMPT_TEMPLATES.systemDefault;
      }
    },
    render: {
      afterContainer: () => /* @__PURE__ */ jsxRuntime.jsx(AILoadingBar, {}),
      afterEditable: () => /* @__PURE__ */ jsxRuntime.jsx(AIMenu, {})
    }
  }).extend({
    useHooks: ({ editor, getOption }) => {
      const mode = react$b.usePluginOption(
        { key: "aiChat" },
        "mode"
      );
      react$1.useChatChunk({
        onChunk: ({ chunk, isFirst, nodes }) => {
          if (isFirst && mode == "insert") {
            editor.tf.withoutSaving(() => {
              editor.tf.insertNodes(
                {
                  children: [{ text: "" }],
                  type: react$1.AIChatPlugin.key
                },
                {
                  at: plate.PathApi.next(editor.selection.focus.path.slice(0, 1))
                }
              );
            });
            editor.setOption(react$1.AIChatPlugin, "streaming", true);
          }
          if (mode === "insert" && nodes.length > 0) {
            plateAi.withAIBatch(
              editor,
              () => {
                if (!getOption("streaming")) return;
                editor.tf.withScrolling(() => {
                  plateAi.streamInsertChunk(editor, chunk, {
                    textProps: {
                      ai: true
                    }
                  });
                });
              },
              { split: isFirst }
            );
          }
        },
        onFinish: () => {
          editor.setOption(react$1.AIChatPlugin, "streaming", false);
          editor.setOption(react$1.AIChatPlugin, "_blockChunks", "");
          editor.setOption(react$1.AIChatPlugin, "_blockPath", null);
        }
      });
    }
  })
];
var alignPlugin = react$i.AlignPlugin.extend({
  inject: {
    targetPlugins: [
      react$b.ParagraphPlugin.key,
      ...plateHeading.HEADING_LEVELS,
      react$4.MediaEmbedPlugin.key,
      react$4.ImagePlugin.key
    ]
  }
});
var autoformatMarks = [
  {
    match: "***",
    mode: "mark",
    type: [react$j.BoldPlugin.key, react$j.ItalicPlugin.key]
  },
  {
    match: "__*",
    mode: "mark",
    type: [react$j.UnderlinePlugin.key, react$j.ItalicPlugin.key]
  },
  {
    match: "__**",
    mode: "mark",
    type: [react$j.UnderlinePlugin.key, react$j.BoldPlugin.key]
  },
  {
    match: "___***",
    mode: "mark",
    type: [react$j.UnderlinePlugin.key, react$j.BoldPlugin.key, react$j.ItalicPlugin.key]
  },
  {
    match: "**",
    mode: "mark",
    type: react$j.BoldPlugin.key
  },
  {
    match: "__",
    mode: "mark",
    type: react$j.UnderlinePlugin.key
  },
  {
    match: "*",
    mode: "mark",
    type: react$j.ItalicPlugin.key
  },
  {
    match: "_",
    mode: "mark",
    type: react$j.ItalicPlugin.key
  },
  {
    match: "~~",
    mode: "mark",
    type: react$j.StrikethroughPlugin.key
  },
  {
    match: "^",
    mode: "mark",
    type: react$j.SuperscriptPlugin.key
  },
  {
    match: "~",
    mode: "mark",
    type: react$j.SubscriptPlugin.key
  },
  {
    match: "==",
    mode: "mark",
    type: react$k.HighlightPlugin.key
  },
  {
    match: "\u2261",
    mode: "mark",
    type: react$k.HighlightPlugin.key
  },
  {
    match: "`",
    mode: "mark",
    type: react$j.CodePlugin.key
  }
];
var autoformatBlocks = [
  {
    match: "# ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h1
  },
  {
    match: "## ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h2
  },
  {
    match: "### ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h3
  },
  {
    match: "#### ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h4
  },
  {
    match: "##### ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h5
  },
  {
    match: "###### ",
    mode: "block",
    type: plateHeading.HEADING_KEYS.h6
  },
  {
    match: "> ",
    mode: "block",
    type: react$d.BlockquotePlugin.key
  },
  {
    match: "```",
    mode: "block",
    type: react$7.CodeBlockPlugin.key,
    format: (editor) => {
      plateCodeBlock.insertEmptyCodeBlock(editor, {
        defaultType: react$b.ParagraphPlugin.key,
        insertNodesOptions: { select: true }
      });
    }
  },
  {
    match: "+ ",
    mode: "block",
    preFormat: react$c.openNextToggles,
    type: react$c.TogglePlugin.key
  },
  {
    match: ["---", "\u2014-", "___ "],
    mode: "block",
    type: react$g.HorizontalRulePlugin.key,
    format: (editor) => {
      editor.tf.setNodes({ type: react$g.HorizontalRulePlugin.key });
      editor.tf.insertNodes({
        children: [{ text: "" }],
        type: react$b.ParagraphPlugin.key
      });
    }
  }
];
var autoformatIndentLists = [
  {
    match: ["* ", "- "],
    mode: "block",
    type: "list",
    format: (editor) => {
      plateIndentList.toggleIndentList(editor, {
        listStyleType: plateIndentList.ListStyleType.Disc
      });
    }
  },
  {
    match: [String.raw`^\d+\.$ `, String.raw`^\d+\)$ `],
    matchByRegex: true,
    mode: "block",
    type: "list",
    format: (editor, { matchString }) => {
      plateIndentList.toggleIndentList(editor, {
        listRestartPolite: Number(matchString) || 1,
        listStyleType: plateIndentList.ListStyleType.Decimal
      });
    }
  },
  {
    match: ["[] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      plateIndentList.toggleIndentList(editor, {
        listStyleType: plateIndentList.INDENT_LIST_KEYS.todo
      });
      editor.tf.setNodes({
        checked: false,
        listStyleType: plateIndentList.INDENT_LIST_KEYS.todo
      });
    }
  },
  {
    match: ["[x] "],
    mode: "block",
    type: "list",
    format: (editor) => {
      plateIndentList.toggleIndentList(editor, {
        listStyleType: plateIndentList.INDENT_LIST_KEYS.todo
      });
      editor.tf.setNodes({
        checked: true,
        listStyleType: plateIndentList.INDENT_LIST_KEYS.todo
      });
    }
  }
];
var autoformatPlugin = react$l.AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [
      ...autoformatBlocks,
      ...autoformatMarks,
      ...plateAutoformat.autoformatSmartQuotes,
      ...plateAutoformat.autoformatPunctuation,
      ...plateAutoformat.autoformatLegal,
      ...plateAutoformat.autoformatLegalHtml,
      ...plateAutoformat.autoformatArrow,
      ...plateAutoformat.autoformatMath,
      ...autoformatIndentLists
    ].map(
      (rule) => ({
        ...rule,
        query: (editor) => !editor.api.some({
          match: { type: editor.getType(react$7.CodeBlockPlugin) }
        })
      })
    )
  }
});
var lowlight3 = lowlight$1.createLowlight(lowlight$1.all);
var basicNodesPlugins = [
  react$5.HeadingPlugin.configure({ options: { levels: 3 } }),
  react$d.BlockquotePlugin,
  react$7.CodeBlockPlugin.configure({ options: { lowlight: lowlight3 } }),
  react$j.BasicMarksPlugin
];
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenuPrimitive__namespace.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ContextMenuPrimitive__namespace.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = React19__namespace.useState(false);
  React19__namespace.useEffect(() => {
    function onResize() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
      );
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isTouchDevice;
}
function BlockContextMenu({ children }) {
  const { api, editor } = react$b.useEditorPlugin(react$h.BlockMenuPlugin);
  const [value, setValue] = React19__namespace.useState(null);
  const isTouch = useIsTouchDevice();
  const [readOnly] = react$b.usePlateState("readOnly");
  const handleTurnInto = React19__namespace.useCallback(
    (type) => {
      editor.getApi(react$h.BlockSelectionPlugin).blockSelection.getNodes().forEach(([node, path]) => {
        if (node[react$f.IndentListPlugin.key]) {
          editor.tf.unsetNodes([react$f.IndentListPlugin.key, "indent"], {
            at: path
          });
        }
        editor.tf.toggleBlock(type, { at: path });
      });
    },
    [editor]
  );
  const handleAlign = React19__namespace.useCallback(
    (align) => {
      editor.getTransforms(react$h.BlockSelectionPlugin).blockSelection.setNodes({ align });
    },
    [editor]
  );
  if (isTouch) {
    return children;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ContextMenu,
    {
      onOpenChange: (open) => {
        if (!open) {
          setTimeout(() => {
            api.blockMenu.hide();
          }, 0);
        }
      },
      modal: false,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ContextMenuTrigger,
          {
            asChild: true,
            onContextMenu: (event) => {
              const dataset = event.target.dataset;
              const disabled = dataset?.slateEditor === "true" || readOnly;
              if (disabled) return event.preventDefault();
              api.blockMenu.show(react$h.BLOCK_CONTEXT_MENU_ID, {
                x: event.clientX,
                y: event.clientY
              });
            },
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full", children })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          ContextMenuContent,
          {
            className: "w-64",
            onCloseAutoFocus: (e) => {
              e.preventDefault();
              editor.getApi(react$h.BlockSelectionPlugin).blockSelection.focus();
              if (value === "askAI") {
                editor.getApi(react$1.AIChatPlugin).aiChat.show();
              }
              setValue(null);
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuGroup, { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      setValue("askAI");
                    },
                    children: "Ask AI"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(react$h.BlockSelectionPlugin).blockSelection.removeNodes();
                      editor.tf.focus();
                    },
                    children: "Delete"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ContextMenuItem,
                  {
                    onClick: () => {
                      editor.getTransforms(react$h.BlockSelectionPlugin).blockSelection.duplicate();
                    },
                    children: "Duplicate"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuSub, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ContextMenuSubTrigger, { children: "Turn into" }),
                  /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(react$b.ParagraphPlugin.key),
                        children: "Paragraph"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleTurnInto(plateHeading.HEADING_KEYS.h1), children: "Heading 1" }),
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleTurnInto(plateHeading.HEADING_KEYS.h2), children: "Heading 2" }),
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleTurnInto(plateHeading.HEADING_KEYS.h3), children: "Heading 3" }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      ContextMenuItem,
                      {
                        onClick: () => handleTurnInto(react$d.BlockquotePlugin.key),
                        children: "Blockquote"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuGroup, { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(react$h.BlockSelectionPlugin).blockSelection.setIndent(1),
                    children: "Indent"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ContextMenuItem,
                  {
                    onClick: () => editor.getTransforms(react$h.BlockSelectionPlugin).blockSelection.setIndent(-1),
                    children: "Outdent"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuSub, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ContextMenuSubTrigger, { children: "Align" }),
                  /* @__PURE__ */ jsxRuntime.jsxs(ContextMenuSubContent, { className: "w-48", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleAlign("left"), children: "Left" }),
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleAlign("center"), children: "Center" }),
                    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuItem, { onClick: () => handleAlign("right"), children: "Right" })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
var blockSelectionVariants = classVarianceAuthority.cva(
  "pointer-events-none absolute inset-0 z-1 bg-brand/[.13] transition-opacity",
  {
    defaultVariants: {
      active: true
    },
    variants: {
      active: {
        false: "opacity-0",
        true: "opacity-100"
      }
    }
  }
);
function BlockSelection({
  className,
  ...props
}) {
  const isBlockSelected = react$h.useBlockSelected();
  const isDragging = react$b.usePluginOption(plateDnd.DndPlugin, "isDragging");
  if (!isBlockSelected) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        blockSelectionVariants({
          active: isBlockSelected && !isDragging
        }),
        className
      ),
      "data-slot": "block-selection",
      ...props
    }
  );
}
var blockSelectionPlugins = [
  react$h.BlockSelectionPlugin.configure(({ editor }) => ({
    options: {
      enableContextMenu: true,
      isSelectable: (element, path) => {
        return !["code_line", "column", "td"].includes(element.type) && !editor.api.block({ above: true, at: path, match: { type: "tr" } });
      }
    },
    render: {
      belowRootNodes: (props) => {
        if (!props.attributes.className?.includes("slate-selectable"))
          return null;
        return /* @__PURE__ */ jsxRuntime.jsx(BlockSelection, {});
      }
    }
  }))
];
react$h.BlockSelectionPlugin.configure({
  api: {},
  extendEditor: null,
  handlers: {},
  options: {},
  render: {},
  useHooks: null
});

// src/components/editor/plugins/block-menu-plugins.ts
var blockMenuPlugins = [
  ...blockSelectionPlugins,
  react$h.BlockMenuPlugin.configure({
    render: { aboveEditable: BlockContextMenu }
  })
];
var deletePlugins = [
  plateSelect.SelectOnBackspacePlugin.configure({
    options: {
      query: {
        allow: [
          react$4.ImagePlugin.key,
          react$4.VideoPlugin.key,
          react$4.AudioPlugin.key,
          react$4.FilePlugin.key,
          react$4.MediaEmbedPlugin.key,
          react$g.HorizontalRulePlugin.key
        ]
      }
    }
  }),
  plateSelect.DeletePlugin
];
var UNDRAGGABLE_KEYS = [
  react$2.ColumnItemPlugin.key,
  react$3.TableRowPlugin.key,
  react$3.TableCellPlugin.key
];
var DraggableAboveNodes = (props) => {
  const { editor, element, path } = props;
  const readOnly = react$b.useReadOnly();
  const enabled = React19__namespace.useMemo(() => {
    if (readOnly) return false;
    if (path.length === 1 && !plate.isType(editor, element, UNDRAGGABLE_KEYS)) {
      return true;
    }
    if (path.length === 3 && !plate.isType(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(react$2.ColumnPlugin)
        }
      });
      if (block) {
        return true;
      }
    }
    if (path.length === 4 && !plate.isType(editor, element, UNDRAGGABLE_KEYS)) {
      const block = editor.api.some({
        at: path,
        match: {
          type: editor.getType(react$3.TablePlugin)
        }
      });
      if (block) {
        return true;
      }
    }
    return false;
  }, [editor, element, path, readOnly]);
  if (!enabled) return;
  return (props2) => /* @__PURE__ */ jsxRuntime.jsx(Draggable, { ...props2 });
};
function Draggable(props) {
  const { children, editor, element, path } = props;
  const blockSelectionApi = editor.getApi(react$h.BlockSelectionPlugin).blockSelection;
  const { isDragging, previewRef, handleRef } = plateDnd.useDraggable({
    element,
    onDropHandler: (_, { dragItem }) => {
      const id = dragItem.id;
      if (blockSelectionApi && id) {
        blockSelectionApi.set(id);
      }
    }
  });
  const isInColumn = path.length === 3;
  const isInTable = path.length === 4;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "relative",
        isDragging && "opacity-50",
        STRUCTURAL_TYPES.includes(element.type) ? "group/structural" : "group"
      ),
      children: [
        !isInTable && /* @__PURE__ */ jsxRuntime.jsx(Gutter, { children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "slate-blockToolbarWrapper",
              "flex h-[1.5em]",
              plate.isType(editor, element, [
                plateHeading.HEADING_KEYS.h1,
                plateHeading.HEADING_KEYS.h2,
                plateHeading.HEADING_KEYS.h3,
                plateHeading.HEADING_KEYS.h4,
                plateHeading.HEADING_KEYS.h5
              ]) && "h-[1.3em]",
              isInColumn && "h-4"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "slate-blockToolbar",
                  "pointer-events-auto mr-1 flex items-center",
                  isInColumn && "mr-1.5"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  Button2,
                  {
                    ref: handleRef,
                    variant: "ghost",
                    className: "h-6 w-4.5 p-0",
                    "data-plate-prevent-deselect": true,
                    children: /* @__PURE__ */ jsxRuntime.jsx(DragHandle, {})
                  }
                )
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: previewRef, className: "slate-blockWrapper", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react$b.MemoizedChildren, { children }),
          /* @__PURE__ */ jsxRuntime.jsx(DropLine, {})
        ] })
      ]
    }
  );
}
function Gutter({
  children,
  className,
  ...props
}) {
  const editor = react$b.useEditorRef();
  const element = react$b.useElement();
  const path = react$b.usePath();
  const isSelectionAreaVisible = react$b.usePluginOption(
    react$h.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const selected = react$b.useSelected();
  const isNodeType = (keys) => plate.isType(editor, element, keys);
  const isInColumn = path.length === 3;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      className: cn(
        "slate-gutterLeft",
        "absolute top-0 z-50 flex h-full -translate-x-full cursor-text hover:opacity-100 sm:opacity-0",
        STRUCTURAL_TYPES.includes(element.type) ? "group-hover/structural:opacity-100" : "group-hover:opacity-100",
        isSelectionAreaVisible && "hidden",
        !selected && "opacity-0",
        isNodeType(plateHeading.HEADING_KEYS.h1) && "pb-1 text-[1.875em]",
        isNodeType(plateHeading.HEADING_KEYS.h2) && "pb-1 text-[1.5em]",
        isNodeType(plateHeading.HEADING_KEYS.h3) && "pt-[2px] pb-1 text-[1.25em]",
        isNodeType([plateHeading.HEADING_KEYS.h4, plateHeading.HEADING_KEYS.h5]) && "pt-1 pb-0 text-[1.1em]",
        isNodeType(plateHeading.HEADING_KEYS.h6) && "pb-0",
        isNodeType(react$b.ParagraphPlugin.key) && "pt-1 pb-0",
        isNodeType(["ul", "ol"]) && "pb-0",
        isNodeType(react$d.BlockquotePlugin.key) && "pb-0",
        isNodeType(react$7.CodeBlockPlugin.key) && "pt-6 pb-0",
        isNodeType([
          react$4.ImagePlugin.key,
          react$4.MediaEmbedPlugin.key,
          react$y.ExcalidrawPlugin.key,
          react$c.TogglePlugin.key,
          react$2.ColumnPlugin.key
        ]) && "py-0",
        isNodeType([react$4.PlaceholderPlugin.key, react$3.TablePlugin.key]) && "pt-3 pb-0",
        isInColumn && "mt-2 h-4 pt-0",
        className
      ),
      contentEditable: false,
      children
    }
  );
}
var DragHandle = React19__namespace.memo(function DragHandle2() {
  const editor = react$b.useEditorRef();
  const element = react$b.useElement();
  return /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "flex size-full items-center justify-center",
        onClick: () => {
          editor.getApi(react$h.BlockSelectionPlugin).blockSelection.set(element.id);
        },
        role: "button",
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVertical, { className: "text-muted-foreground" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { children: "Drag to move" })
  ] });
});
var DropLine = React19__namespace.memo(function DropLine2({
  className,
  ...props
}) {
  const { dropLine } = plateDnd.useDropLine();
  if (!dropLine) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      className: cn(
        "slate-dropLine",
        "absolute inset-x-0 h-0.5 opacity-100 transition-opacity",
        "bg-brand/50",
        dropLine === "top" && "-top-px",
        dropLine === "bottom" && "-bottom-px",
        className
      )
    }
  );
});

// src/components/editor/plugins/dnd-plugins.tsx
var dndPlugins = [
  plateNodeId.NodeIdPlugin,
  plateDnd.DndPlugin.configure({
    options: {
      enableScroller: true,
      onDropFiles: ({ dragItem, editor, target }) => {
        editor.getTransforms(react$4.PlaceholderPlugin).insert.media(dragItem.files, { at: target, nextBlock: false });
      }
    },
    render: {
      aboveNodes: DraggableAboveNodes
    }
  })
];
var equationPlugins = [react$6.InlineEquationPlugin, react$6.EquationPlugin];
var exitBreakPlugin = react$m.ExitBreakPlugin.configure({
  options: {
    rules: [
      {
        hotkey: "mod+enter"
      },
      {
        before: true,
        hotkey: "mod+shift+enter"
      },
      {
        hotkey: "enter",
        level: 1,
        query: {
          allow: plateHeading.HEADING_LEVELS,
          end: true,
          start: true
        },
        relative: true
      }
    ]
  }
});
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
function TodoMarker(props) {
  const state = react$f.useIndentTodoListElementState({ element: props.element });
  const { checkboxProps } = react$f.useIndentTodoListElement(state);
  const readOnly = react$b.useReadOnly();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
    Checkbox,
    {
      className: cn(
        "absolute top-1 -left-6",
        readOnly && "pointer-events-none"
      ),
      ...checkboxProps
    }
  ) });
}
function TodoLi(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      className: cn(
        "list-none",
        props.element.checked && "text-muted-foreground line-through"
      ),
      children: props.children
    }
  );
}

// src/components/editor/plugins/indent-list-plugins.ts
var indentListPlugins = [
  react$n.IndentPlugin.extend({
    inject: {
      targetPlugins: [
        react$b.ParagraphPlugin.key,
        ...plateHeading.HEADING_LEVELS,
        react$d.BlockquotePlugin.key,
        react$7.CodeBlockPlugin.key,
        react$c.TogglePlugin.key
      ]
    }
  }),
  react$f.IndentListPlugin.extend({
    inject: {
      targetPlugins: [
        react$b.ParagraphPlugin.key,
        ...plateHeading.HEADING_LEVELS,
        react$d.BlockquotePlugin.key,
        react$7.CodeBlockPlugin.key,
        react$c.TogglePlugin.key
      ]
    },
    options: {
      listStyleTypes: {
        fire: {
          liComponent: FireLiComponent,
          markerComponent: FireMarker,
          type: "fire"
        },
        todo: {
          liComponent: TodoLi,
          markerComponent: TodoMarker,
          type: "todo"
        }
      }
    }
  })
];
var lineHeightPlugin = react$o.LineHeightPlugin.configure({
  inject: {
    nodeProps: {
      defaultNodeValue: 1.5,
      validNodeValues: [1, 1.2, 1.5, 2, 3]
    },
    targetPlugins: [react$b.ParagraphPlugin.key, ...plateHeading.HEADING_LEVELS]
  }
});
var popoverVariants = classVarianceAuthority.cva(
  "z-50 w-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-hidden"
);
var inputVariants = classVarianceAuthority.cva(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function LinkFloatingToolbar({
  state
}) {
  const activeCommentId = react$b.usePluginOption({ key: "comment" }, "activeId");
  const activeSuggestionId = react$b.usePluginOption({ key: "suggestion" }, "activeId");
  const floatingOptions = React19__namespace.useMemo(() => {
    return {
      middleware: [
        plateFloating.offset(8),
        plateFloating.flip({
          fallbackPlacements: ["bottom-end", "top-start", "top-end"],
          padding: 12
        })
      ],
      placement: activeSuggestionId || activeCommentId ? "top-start" : "bottom-start"
    };
  }, [activeCommentId, activeSuggestionId]);
  const insertState = react$9.useFloatingLinkInsertState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions
    }
  });
  const {
    hidden,
    props: insertProps,
    ref: insertRef,
    textInputProps
  } = react$9.useFloatingLinkInsert(insertState);
  const editState = react$9.useFloatingLinkEditState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions
    }
  });
  const {
    editButtonProps,
    props: editProps,
    ref: editRef,
    unlinkButtonProps
  } = react$9.useFloatingLinkEdit(editState);
  const inputProps = react$b.useFormInputProps({
    preventDefaultOnEnterKeydown: true
  });
  if (hidden) return null;
  const input = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-[330px] flex-col", ...inputProps, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Link, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        react$9.FloatingLinkUrlInput,
        {
          className: inputVariants(),
          placeholder: "Paste link",
          "data-plate-focus": true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Separator2, { className: "my-1" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Text, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          className: inputVariants(),
          placeholder: "Text to display",
          "data-plate-focus": true,
          ...textInputProps
        }
      )
    ] })
  ] });
  const editContent = editState.isEditing ? input : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "box-content flex items-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: buttonVariants({ size: "sm", variant: "ghost" }),
        type: "button",
        ...editButtonProps,
        children: "Edit link"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ jsxRuntime.jsx(LinkOpenButton, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: buttonVariants({
          size: "icon",
          variant: "ghost"
        }),
        type: "button",
        ...unlinkButtonProps,
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Unlink, { width: 18 })
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref: insertRef, className: popoverVariants(), ...insertProps, children: input }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref: editRef, className: popoverVariants(), ...editProps, children: editContent })
  ] });
}
function LinkOpenButton() {
  const editor = react$b.useEditorRef();
  const selection = react$b.useEditorSelection();
  const attributes = React19__namespace.useMemo(
    () => {
      const entry = editor.api.node({
        match: { type: editor.getType(react$9.LinkPlugin) }
      });
      if (!entry) {
        return {};
      }
      const [element] = entry;
      return plateLink.getLinkAttributes(editor, element);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editor, selection]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      ...attributes,
      className: buttonVariants({
        size: "icon",
        variant: "ghost"
      }),
      onMouseOver: (e) => {
        e.stopPropagation();
      },
      "aria-label": "Open link in a new tab",
      target: "_blank",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ExternalLink, { width: 18 })
    }
  );
}
var linkPlugin = react$9.LinkPlugin.extend({
  render: { afterEditable: () => /* @__PURE__ */ jsxRuntime.jsx(LinkFloatingToolbar, {}) }
});
var toolButtonVariants = classVarianceAuthority.cva("rounded bg-[rgba(0,0,0,0.5)] px-1", {
  defaultVariants: {
    variant: "default"
  },
  variants: {
    variant: {
      default: "text-white",
      disabled: "cursor-not-allowed text-gray-400"
    }
  }
});
var SCROLL_SPEED = 4;
var ImagePreview = () => {
  const editor = react$b.useEditorRef();
  const isOpen = react$4.useImagePreviewValue("isOpen", editor.id);
  const scale = react$4.useImagePreviewValue("scale");
  const isEditingScale = react$4.useImagePreviewValue("isEditingScale");
  const {
    closeProps,
    currentUrlIndex,
    maskLayerProps,
    nextDisabled,
    nextProps,
    prevDisabled,
    prevProps,
    scaleTextProps,
    zommOutProps,
    zoomInDisabled,
    zoomInProps,
    zoomOutDisabled
  } = react$4.useImagePreview({ scrollSpeed: SCROLL_SPEED });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "fixed top-0 left-0 z-50 h-screen w-screen select-none",
        !isOpen && "hidden"
      ),
      onContextMenu: (e) => e.stopPropagation(),
      ...maskLayerProps,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 size-full bg-black opacity-30" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex max-h-screen w-full items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            react$4.PreviewImage,
            {
              className: cn(
                "mx-auto block max-h-[calc(100vh-4rem)] w-auto object-contain transition-transform"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: "absolute bottom-0 left-1/2 z-40 flex w-fit -translate-x-1/2 justify-center gap-4 p-2 text-center text-white",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      ...prevProps,
                      className: cn(
                        toolButtonVariants({
                          variant: prevDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, {})
                    }
                  ),
                  (currentUrlIndex ?? 0) + 1,
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      ...nextProps,
                      className: cn(
                        toolButtonVariants({
                          variant: nextDisabled ? "disabled" : "default"
                        })
                      ),
                      type: "button",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomOutDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zommOutProps,
                      type: "button",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-px", children: isEditingScale ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntime.jsx(ScaleInput, { className: "w-10 rounded px-1 text-slate-500 outline" }),
                    " ",
                    /* @__PURE__ */ jsxRuntime.jsx("span", { children: "%" })
                  ] }) : /* @__PURE__ */ jsxRuntime.jsx("span", { ...scaleTextProps, children: scale * 100 + "%" }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      className: cn(
                        toolButtonVariants({
                          variant: zoomInDisabled ? "disabled" : "default"
                        })
                      ),
                      ...zoomInProps,
                      type: "button",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Plus, { className: "size-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("button", { className: cn(toolButtonVariants()), type: "button", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Download, { className: "size-4" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    ...closeProps,
                    className: cn(toolButtonVariants()),
                    type: "button",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-4" })
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
};
function ScaleInput(props) {
  const { props: scaleInputProps, ref } = react$4.useScaleInput();
  return /* @__PURE__ */ jsxRuntime.jsx("input", { ...scaleInputProps, ...props, ref });
}
var useUploadErrorToast = () => {
  const uploadError = react$b.usePluginOption(react$4.PlaceholderPlugin, "error");
  React19__namespace.useEffect(() => {
    if (!uploadError) return;
    const { code, data } = uploadError;
    switch (code) {
      case react$4.UploadErrorCode.INVALID_FILE_SIZE: {
        sonner.toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case react$4.UploadErrorCode.INVALID_FILE_TYPE: {
        sonner.toast.error(
          `The type of files ${data.files.map((f) => f.name).join(", ")} is invalid`
        );
        break;
      }
      case react$4.UploadErrorCode.TOO_LARGE: {
        sonner.toast.error(
          `The size of files ${data.files.map((f) => f.name).join(", ")} is too large than ${data.maxFileSize}`
        );
        break;
      }
      case react$4.UploadErrorCode.TOO_LESS_FILES: {
        sonner.toast.error(
          `The mini um number of files is ${data.minFileCount} for ${data.fileType}`
        );
        break;
      }
      case react$4.UploadErrorCode.TOO_MANY_FILES: {
        sonner.toast.error(
          `The maximum number of files is ${data.maxFileCount} ${data.fileType ? `for ${data.fileType}` : ""}`
        );
        break;
      }
    }
  }, [uploadError]);
};
var MediaUploadToast = () => {
  useUploadErrorToast();
  return null;
};

// src/components/editor/plugins/media-plugins.tsx
var mediaPlugins = [
  react$4.ImagePlugin.extend({
    options: { disableUploadInsert: true },
    render: { afterEditable: ImagePreview }
  }),
  react$4.MediaEmbedPlugin,
  react$4.VideoPlugin,
  react$4.AudioPlugin,
  react$4.FilePlugin,
  react$p.CaptionPlugin.configure({
    options: {
      plugins: [
        react$4.ImagePlugin,
        react$4.VideoPlugin,
        react$4.AudioPlugin,
        react$4.FilePlugin,
        react$4.MediaEmbedPlugin
      ]
    }
  }),
  react$4.PlaceholderPlugin.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast }
  })
];
var mentionPlugin = react$q.MentionPlugin.configure({
  options: { triggerPreviousCharPattern: /^$|^[\s"']$/ }
});
var resetBlockTypesCommonRule = {
  defaultType: react$b.ParagraphPlugin.key,
  types: [
    ...plateHeading.HEADING_LEVELS,
    react$d.BlockquotePlugin.key,
    plateIndentList.INDENT_LIST_KEYS.todo,
    plateIndentList.ListStyleType.Disc,
    plateIndentList.ListStyleType.Decimal,
    react$8.CalloutPlugin.key
  ]
};
var resetBlockTypesCodeBlockRule = {
  defaultType: react$b.ParagraphPlugin.key,
  types: [react$7.CodeBlockPlugin.key],
  onReset: plateCodeBlock.unwrapCodeBlock
};
var resetBlockTypePlugin = react$r.ResetNodePlugin.configure({
  options: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Enter",
        predicate: (editor) => editor.api.isEmpty(editor.selection, { block: true })
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Backspace",
        predicate: (editor) => editor.api.isAt({ start: true })
      },
      {
        ...resetBlockTypesCodeBlockRule,
        hotkey: "Enter",
        predicate: plateCodeBlock.isCodeBlockEmpty
      },
      {
        ...resetBlockTypesCodeBlockRule,
        hotkey: "Backspace",
        predicate: plateCodeBlock.isSelectionAtCodeBlockStart
      }
    ]
  }
});
var skipMarkPlugin = react$j.SkipMarkPlugin.configure({
  options: {
    query: {
      allow: [react.SuggestionPlugin.key, react$j.CodePlugin.key, react$s.CommentsPlugin.key]
    }
  }
});
var softBreakPlugin = react$m.SoftBreakPlugin.configure({
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [
            react$7.CodeBlockPlugin.key,
            react$d.BlockquotePlugin.key,
            react$3.TableCellPlugin.key,
            react$3.TableCellHeaderPlugin.key,
            react$8.CalloutPlugin.key
          ]
        }
      }
    ]
  }
});
var tablePlugin = react$3.TablePlugin.configure({
  options: {}
});
var tocPlugin = react$5.TocPlugin.configure({
  options: {
    // isScroll: true,
    topOffset: 80
  }
});

// src/components/editor/plugins/editor-plugins.tsx
var viewPlugins = [
  ...basicNodesPlugins,
  react$g.HorizontalRulePlugin,
  linkPlugin,
  react$a.DatePlugin,
  mentionPlugin,
  tablePlugin,
  react$c.TogglePlugin,
  tocPlugin,
  ...mediaPlugins,
  ...equationPlugins,
  react$8.CalloutPlugin,
  react$2.ColumnPlugin,
  // Marks
  react$t.FontColorPlugin,
  react$t.FontBackgroundColorPlugin,
  react$t.FontSizePlugin,
  react$k.HighlightPlugin,
  react$u.KbdPlugin,
  skipMarkPlugin,
  // Block Style
  alignPlugin,
  ...indentListPlugins,
  lineHeightPlugin,
  // Collaboration
  discussionPlugin,
  commentsPlugin,
  suggestionPlugin.configure({
    render: { belowNodes: SuggestionBelowNodes }
  })
];
var editorPlugins = [
  // AI
  ...aiPlugins,
  // Nodes
  ...viewPlugins,
  // Functionality
  react$v.SlashPlugin.extend({
    options: {
      triggerQuery(editor) {
        return !editor.api.some({
          match: { type: editor.getType(react$7.CodeBlockPlugin) }
        });
      }
    }
  }),
  autoformatPlugin,
  cursorOverlayPlugin,
  ...blockMenuPlugins,
  ...dndPlugins,
  react$w.EmojiPlugin.configure({ options: { data: emojiMartData__default.default } }),
  exitBreakPlugin,
  resetBlockTypePlugin,
  ...deletePlugins,
  softBreakPlugin,
  plateTrailingBlock.TrailingBlockPlugin,
  // Deserialization
  plateDocx.DocxPlugin,
  markdownPlugin,
  plateJuice.JuicePlugin,
  // UI
  FixedToolbarPlugin,
  FloatingToolbarPlugin
];
function BlockquoteElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      as: "blockquote",
      className: "my-1 border-l-2 pl-6 italic",
      ...props
    }
  );
}
function CalloutElement({
  attributes,
  children,
  className,
  ...props
}) {
  const { emojiPickerState, isOpen, setIsOpen } = react$w.useEmojiDropdownMenuState({
    closeOnSelect: true
  });
  const { emojiToolbarDropdownProps, props: calloutProps } = react$8.useCalloutEmojiPicker({
    isOpen,
    setIsOpen
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      className: cn$1.cn("my-1 flex rounded-sm bg-muted p-4 pl-3", className),
      style: {
        backgroundColor: props.element.backgroundColor
      },
      attributes: {
        ...attributes,
        "data-plate-open-context-menu": true
      },
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full gap-2 rounded-md", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          EmojiToolbarDropdown,
          {
            ...emojiToolbarDropdownProps,
            control: /* @__PURE__ */ jsxRuntime.jsx(
              Button2,
              {
                variant: "ghost",
                className: "size-6 p-1 text-[18px] select-none hover:bg-muted-foreground/15",
                style: {
                  fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols'
                },
                contentEditable: false,
                children: props.element.icon || "\u{1F4A1}"
              }
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              EmojiPicker,
              {
                ...emojiPickerState,
                ...calloutProps,
                icons: {
                  categories: emojiCategoryIcons,
                  search: emojiSearchIcons
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full", children })
      ] })
    }
  );
}
var languages = [
  { label: "Auto", value: "auto" },
  { label: "Plain Text", value: "plaintext" },
  { label: "ABAP", value: "abap" },
  { label: "Agda", value: "agda" },
  { label: "Arduino", value: "arduino" },
  { label: "ASCII Art", value: "ascii" },
  { label: "Assembly", value: "x86asm" },
  { label: "Bash", value: "bash" },
  { label: "BASIC", value: "basic" },
  { label: "BNF", value: "bnf" },
  { label: "C", value: "c" },
  { label: "C#", value: "csharp" },
  { label: "C++", value: "cpp" },
  { label: "Clojure", value: "clojure" },
  { label: "CoffeeScript", value: "coffeescript" },
  { label: "Coq", value: "coq" },
  { label: "CSS", value: "css" },
  { label: "Dart", value: "dart" },
  { label: "Dhall", value: "dhall" },
  { label: "Diff", value: "diff" },
  { label: "Docker", value: "dockerfile" },
  { label: "EBNF", value: "ebnf" },
  { label: "Elixir", value: "elixir" },
  { label: "Elm", value: "elm" },
  { label: "Erlang", value: "erlang" },
  { label: "F#", value: "fsharp" },
  { label: "Flow", value: "flow" },
  { label: "Fortran", value: "fortran" },
  { label: "Gherkin", value: "gherkin" },
  { label: "GLSL", value: "glsl" },
  { label: "Go", value: "go" },
  { label: "GraphQL", value: "graphql" },
  { label: "Groovy", value: "groovy" },
  { label: "Haskell", value: "haskell" },
  { label: "HCL", value: "hcl" },
  { label: "HTML", value: "html" },
  { label: "Idris", value: "idris" },
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "javascript" },
  { label: "JSON", value: "json" },
  { label: "Julia", value: "julia" },
  { label: "Kotlin", value: "kotlin" },
  { label: "LaTeX", value: "latex" },
  { label: "Less", value: "less" },
  { label: "Lisp", value: "lisp" },
  { label: "LiveScript", value: "livescript" },
  { label: "LLVM IR", value: "llvm" },
  { label: "Lua", value: "lua" },
  { label: "Makefile", value: "makefile" },
  { label: "Markdown", value: "markdown" },
  { label: "Markup", value: "markup" },
  { label: "MATLAB", value: "matlab" },
  { label: "Mathematica", value: "mathematica" },
  { label: "Mermaid", value: "mermaid" },
  { label: "Nix", value: "nix" },
  { label: "Notion Formula", value: "notion" },
  { label: "Objective-C", value: "objectivec" },
  { label: "OCaml", value: "ocaml" },
  { label: "Pascal", value: "pascal" },
  { label: "Perl", value: "perl" },
  { label: "PHP", value: "php" },
  { label: "PowerShell", value: "powershell" },
  { label: "Prolog", value: "prolog" },
  { label: "Protocol Buffers", value: "protobuf" },
  { label: "PureScript", value: "purescript" },
  { label: "Python", value: "python" },
  { label: "R", value: "r" },
  { label: "Racket", value: "racket" },
  { label: "Reason", value: "reasonml" },
  { label: "Ruby", value: "ruby" },
  { label: "Rust", value: "rust" },
  { label: "Sass", value: "scss" },
  { label: "Scala", value: "scala" },
  { label: "Scheme", value: "scheme" },
  { label: "SCSS", value: "scss" },
  { label: "Shell", value: "shell" },
  { label: "Smalltalk", value: "smalltalk" },
  { label: "Solidity", value: "solidity" },
  { label: "SQL", value: "sql" },
  { label: "Swift", value: "swift" },
  { label: "TOML", value: "toml" },
  { label: "TypeScript", value: "typescript" },
  { label: "VB.Net", value: "vbnet" },
  { label: "Verilog", value: "verilog" },
  { label: "VHDL", value: "vhdl" },
  { label: "Visual Basic", value: "vbnet" },
  { label: "WebAssembly", value: "wasm" },
  { label: "XML", value: "xml" },
  { label: "YAML", value: "yaml" }
];
function CodeBlockCombobox() {
  const [open, setOpen] = React19__namespace.useState(false);
  const readOnly = react$b.useReadOnly();
  const editor = react$b.useEditorRef();
  const element = react$b.useElement();
  const value = element.lang || "plaintext";
  const [searchValue, setSearchValue] = React19__namespace.useState("");
  const items2 = React19__namespace.useMemo(
    () => languages.filter(
      (language) => !searchValue || language.label.toLowerCase().includes(searchValue.toLowerCase())
    ),
    [searchValue]
  );
  if (readOnly) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        size: "sm",
        variant: "ghost",
        className: "h-6 justify-between gap-1 px-2 text-xs text-muted-foreground select-none",
        "aria-expanded": open,
        role: "combobox",
        children: languages.find((language) => language.value === value)?.label ?? "Plain Text"
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContent,
      {
        className: "w-[200px] p-0",
        onCloseAutoFocus: () => setSearchValue(""),
        children: /* @__PURE__ */ jsxRuntime.jsxs(Command, { shouldFilter: false, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            CommandInput,
            {
              className: "h-9",
              value: searchValue,
              onValueChange: (value2) => setSearchValue(value2),
              placeholder: "Search language..."
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(CommandEmpty, { children: "No language found." }),
          /* @__PURE__ */ jsxRuntime.jsx(CommandList, { className: "h-[344px] overflow-y-auto", children: /* @__PURE__ */ jsxRuntime.jsx(CommandGroup, { children: items2.map((language) => /* @__PURE__ */ jsxRuntime.jsxs(
            CommandItem,
            {
              className: "cursor-pointer",
              value: language.value,
              onSelect: (value2) => {
                editor.tf.setNodes(
                  { lang: value2 },
                  { at: element }
                );
                setSearchValue(value2);
                setOpen(false);
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.Check,
                  {
                    className: cn(
                      value === language.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                language.label
              ]
            },
            language.label
          )) }) })
        ] })
      }
    )
  ] });
}
function CodeBlockElement(props) {
  const { editor, element } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      className: "py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative rounded-md bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid", children: /* @__PURE__ */ jsxRuntime.jsx("code", { children: props.children }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "absolute top-1 right-1 z-10 flex gap-0.5 select-none",
            contentEditable: false,
            children: [
              plateCodeBlock.isLangSupported(element.lang) && /* @__PURE__ */ jsxRuntime.jsx(
                Button2,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 text-xs",
                  onClick: () => plateCodeBlock.formatCodeBlock(editor, { element }),
                  title: "Format code",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BracesIcon, { className: "!size-3.5 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(CodeBlockCombobox, {}),
              /* @__PURE__ */ jsxRuntime.jsx(
                CopyButton,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "size-6 gap-1 text-xs text-muted-foreground",
                  value: () => plate.NodeApi.string(element)
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function CopyButton({
  value,
  ...props
}) {
  const [hasCopied, setHasCopied] = React19__namespace.useState(false);
  React19__namespace.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2e3);
  }, [hasCopied]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button2,
    {
      onClick: () => {
        void navigator.clipboard.writeText(
          typeof value === "function" ? value() : value
        );
        setHasCopied(true);
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Copy" }),
        hasCopied ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "!size-3" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CopyIcon, { className: "!size-3" })
      ]
    }
  );
}
function CodeLeaf(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateLeaf,
    {
      ...props,
      as: "code",
      className: "rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap",
      children: props.children
    }
  );
}
function CodeLineElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(react$b.PlateElement, { ...props });
}
function CodeSyntaxLeaf(props) {
  const tokenClassName = props.leaf.className;
  return /* @__PURE__ */ jsxRuntime.jsx(react$b.PlateLeaf, { className: tokenClassName, ...props });
}
var ColumnElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function ColumnElement2(props) {
    const { width } = props.element;
    const readOnly = react$b.useReadOnly();
    const isSelectionAreaVisible = react$b.usePluginOption(
      react$h.BlockSelectionPlugin,
      "isSelectionAreaVisible"
    );
    const { isDragging, previewRef, handleRef } = plateDnd.useDraggable({
      element: props.element,
      orientation: "horizontal",
      type: "column",
      canDropNode: ({ dragEntry, dropEntry }) => plate.PathApi.equals(
        plate.PathApi.parent(dragEntry[1]),
        plate.PathApi.parent(dropEntry[1])
      )
    });
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "group/column relative", style: { width: width ?? "100%" }, children: [
      !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: handleRef,
          className: cn(
            "absolute top-2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "pointer-events-auto flex items-center",
            "opacity-0 transition-opacity group-hover/column:opacity-100"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(ColumnDragHandle, {})
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        react$b.PlateElement,
        {
          ...props,
          ref: cn$1.useComposedRef(props.ref, previewRef),
          className: "h-full px-2 pt-2 group-first/column:pl-0 group-last/column:pr-0",
          children: /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "relative h-full border border-transparent p-1.5",
                !readOnly && "rounded-lg border-dashed border-border",
                isDragging && "opacity-50"
              ),
              children: [
                props.children,
                !readOnly && !isSelectionAreaVisible && /* @__PURE__ */ jsxRuntime.jsx(DropLine3, {})
              ]
            }
          )
        }
      )
    ] });
  }
);
var ColumnDragHandle = React19__namespace.memo(function ColumnDragHandle2() {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(Button2, { variant: "ghost", className: "h-5 !px-1", children: /* @__PURE__ */ jsxRuntime.jsx(
      lucideReact.GripHorizontal,
      {
        className: "text-muted-foreground",
        onClick: (event) => {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { children: "Drag to move column" })
  ] }) });
});
function DropLine3() {
  const { dropLine } = plateDnd.useDropLine({ orientation: "horizontal" });
  if (!dropLine) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "slate-dropLine",
        "absolute bg-brand/50",
        dropLine === "left" && "inset-y-0 left-[-10.5px] w-1 group-first/column:-left-1",
        dropLine === "right" && "inset-y-0 right-[-11px] w-1 group-last/column:-right-1"
      )
    }
  );
}
function ColumnGroupElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(react$b.PlateElement, { className: "mb-2", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(ColumnFloatingToolbar, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-full rounded", children: props.children }) }) });
}
function ColumnFloatingToolbar({ children }) {
  const editor = react$b.useEditorRef();
  const readOnly = react$b.useReadOnly();
  const element = react$b.useElement();
  const { props: buttonProps } = react$b.useRemoveNodeButton({ element });
  const isOpen = react$2.useDebouncePopoverOpen();
  const onColumnChange = (widths) => {
    plateLayout.setColumns(editor, {
      at: element,
      widths
    });
  };
  if (readOnly) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverAnchor, { children }),
    /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        align: "center",
        side: "top",
        sideOffset: 10,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "box-content flex h-8 items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["50%", "50%"]),
              children: /* @__PURE__ */ jsxRuntime.jsx(DoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["33%", "33%", "33%"]),
              children: /* @__PURE__ */ jsxRuntime.jsx(ThreeColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["70%", "30%"]),
              children: /* @__PURE__ */ jsxRuntime.jsx(RightSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["30%", "70%"]),
              children: /* @__PURE__ */ jsxRuntime.jsx(LeftSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              variant: "ghost",
              className: "size-8",
              onClick: () => onColumnChange(["25%", "50%", "25%"]),
              children: /* @__PURE__ */ jsxRuntime.jsx(DoubleSideDoubleColumnOutlined, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { variant: "ghost", className: "size-8", ...buttonProps, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Trash2Icon, {}) })
        ] })
      }
    )
  ] });
}
var DoubleColumnOutlined = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        clipRule: "evenodd",
        d: "M8.5 3H13V13H8.5V3ZM7.5 2H8.5H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H8.5H7.5H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H7.5ZM7.5 13H3L3 3H7.5V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var ThreeColumnOutlined = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        clipRule: "evenodd",
        d: "M9.25 3H6.75V13H9.25V3ZM9.25 2H6.75H5.75H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H5.75H6.75H9.25H10.25H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H10.25H9.25ZM10.25 3V13H13V3H10.25ZM3 13H5.75V3H3L3 13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var RightSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        clipRule: "evenodd",
        d: "M11.25 3H13V13H11.25V3ZM10.25 2H11.25H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H11.25H10.25H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H10.25ZM10.25 13H3L3 3H10.25V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var LeftSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.75 3H13V13H5.75V3ZM4.75 2H5.75H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H5.75H4.75H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H4.75ZM4.75 13H3L3 3H4.75V13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var DoubleSideDoubleColumnOutlined = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    fill: "none",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        clipRule: "evenodd",
        d: "M10.25 3H5.75V13H10.25V3ZM10.25 2H5.75H4.75H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H4.75H5.75H10.25H11.25H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H11.25H10.25ZM11.25 3V13H13V3H11.25ZM3 13H4.75V3H3L3 13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
function CommentLeaf(props) {
  const { children, leaf } = props;
  const { api, setOption } = react$b.useEditorPlugin(commentsPlugin);
  const hoverId = react$b.usePluginOption(commentsPlugin, "hoverId");
  const activeId = react$b.usePluginOption(commentsPlugin, "activeId");
  const isOverlapping = plateComments.getCommentCount(leaf) > 1;
  const currentId = api.comment.nodeId(leaf);
  const isActive = activeId === currentId;
  const isHover = hoverId === currentId;
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateLeaf,
    {
      ...props,
      className: cn(
        "border-b-2 border-b-highlight/[.36] bg-highlight/[.13] transition-colors duration-200",
        (isHover || isActive) && "border-b-highlight bg-highlight/25",
        isOverlapping && "border-b-2 border-b-highlight/[.7] bg-highlight/25",
        (isHover || isActive) && isOverlapping && "border-b-highlight bg-highlight/45"
      ),
      attributes: {
        ...props.attributes,
        onClick: () => setOption("activeId", currentId ?? null),
        onMouseEnter: () => setOption("hoverId", currentId ?? null),
        onMouseLeave: () => setOption("hoverId", null)
      },
      children
    }
  );
}
function EquationElement(props) {
  const selected = react$b.useSelected();
  const [open, setOpen] = React19__namespace.useState(selected);
  const katexRef = React19__namespace.useRef(null);
  react$6.useEquationElement({
    element: props.element,
    katexRef,
    options: {
      displayMode: true,
      errorColor: "#cc0000",
      fleqn: false,
      leqno: false,
      macros: { "\\f": "#1f(#2)" },
      output: "htmlAndMathml",
      strict: "warn",
      throwOnError: false,
      trust: false
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { className: "my-1", ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open, onOpenChange: setOpen, modal: false, children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "group flex cursor-pointer items-center justify-center rounded-sm select-none hover:bg-primary/10 data-[selected=true]:bg-primary/10",
            props.element.texExpression.length === 0 ? "bg-muted p-3 pr-9" : "px-2 py-1"
          ),
          "data-selected": selected,
          contentEditable: false,
          role: "button",
          children: props.element.texExpression.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("span", { ref: katexRef }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-7 w-full items-center gap-2 text-sm whitespace-nowrap text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, { className: "size-6 text-muted-foreground/80" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Add a Tex equation" })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        EquationPopoverContent,
        {
          open,
          placeholder: `f(x) = \\begin{cases}
  x^2, &\\quad x > 0 \\\\
  0, &\\quad x = 0 \\\\
  -x^2, &\\quad x < 0
\\end{cases}`,
          isInline: false,
          setOpen
        }
      )
    ] }),
    props.children
  ] });
}
function ExcalidrawElement(props) {
  const { children, element } = props;
  const { Excalidraw, excalidrawProps } = react$y.useExcalidrawElement({
    element
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto aspect-video h-[600px] w-[min(100%,600px)] overflow-hidden rounded-sm border", children: Excalidraw && /* @__PURE__ */ jsxRuntime.jsx(Excalidraw, { ...excalidrawProps }) }) }),
    children
  ] });
}
var headingVariants2 = classVarianceAuthority.cva("relative mb-1", {
  variants: {
    variant: {
      h1: "mt-[1.6em] pb-1 font-heading text-4xl font-bold",
      h2: "mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight",
      h3: "mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight",
      h4: "mt-[0.75em] font-heading text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight"
    }
  }
});
function HeadingElement({
  variant = "h1",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateElement,
    {
      as: variant,
      className: headingVariants2({ variant }),
      ...props,
      children: props.children
    }
  );
}
function HighlightLeaf(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(react$b.PlateLeaf, { ...props, as: "mark", className: "bg-highlight/30 text-inherit", children: props.children });
}
function HrElement(props) {
  const readOnly = react$b.useReadOnly();
  const selected = react$b.useSelected();
  const focused = react$b.useFocused();
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-6", contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsx(
      "hr",
      {
        className: cn(
          "h-0.5 rounded-sm border-none bg-muted bg-clip-content",
          selected && focused && "ring-2 ring-ring ring-offset-2",
          !readOnly && "cursor-pointer"
        )
      }
    ) }),
    props.children
  ] });
}
var captionVariants = classVarianceAuthority.cva("max-w-full", {
  defaultVariants: {
    align: "center"
  },
  variants: {
    align: {
      center: "mx-auto",
      left: "mr-auto",
      right: "ml-auto"
    }
  }
});
function Caption({
  align,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$p.Caption,
    {
      ...props,
      className: cn(captionVariants({ align }), className)
    }
  );
}
function CaptionTextarea(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$p.CaptionTextarea,
    {
      ...props,
      className: cn(
        "mt-2 w-full resize-none border-none bg-inherit p-0 font-[inherit] text-inherit",
        "focus:outline-none focus:[&::placeholder]:opacity-0",
        "text-center print:placeholder:text-transparent",
        props.className
      )
    }
  );
}
var CaptionButton = cn$1.createPrimitiveComponent(Button2)({
  propsHook: react$p.useCaptionButton,
  stateHook: react$p.useCaptionButtonState
});
var inputVariants2 = classVarianceAuthority.cva(
  "flex h-[28px] w-full rounded-md border-none bg-transparent px-1.5 py-1 text-base placeholder:text-muted-foreground focus-visible:ring-transparent focus-visible:outline-none md:text-sm"
);
function MediaPopover({ children, plugin }) {
  const editor = react$b.useEditorRef();
  const readOnly = react$b.useReadOnly();
  const selected = react$b.useSelected();
  const selectionCollapsed = react$b.useEditorSelector(
    (editor2) => !editor2.api.isExpanded(),
    []
  );
  const isImagePreviewOpen = react$4.useImagePreviewValue("isOpen", editor.id);
  const isOpen = !readOnly && selected && selectionCollapsed && !isImagePreviewOpen;
  const isEditing = react$4.useFloatingMediaValue("isEditing");
  React19__namespace.useEffect(() => {
    if (!isOpen && isEditing) {
      react$4.FloatingMediaStore.set("isEditing", false);
    }
  }, [isOpen]);
  const element = react$b.useElement();
  const { props: buttonProps } = react$b.useRemoveNodeButton({ element });
  if (readOnly) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open: isOpen, modal: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverAnchor, { children }),
    /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContent,
      {
        className: "w-auto p-1",
        onOpenAutoFocus: (e) => e.preventDefault(),
        children: isEditing ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex w-[330px] flex-col", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center pr-1 pl-2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Link, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            react$4.FloatingMedia.UrlInput,
            {
              className: inputVariants2(),
              placeholder: "Paste the embed link...",
              options: { plugin }
            }
          )
        ] }) }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "box-content flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            react$4.FloatingMedia.EditButton,
            {
              className: buttonVariants({ size: "sm", variant: "ghost" }),
              children: "Edit link"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(CaptionButton, { variant: "ghost", children: "Caption" }),
          /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical", className: "mx-1 h-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { size: "icon", variant: "ghost", ...buttonProps, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Trash2Icon, {}) })
        ] })
      }
    )
  ] });
}
var mediaResizeHandleVariants = classVarianceAuthority.cva(
  cn(
    "top-0 flex w-6 flex-col justify-center select-none",
    "after:flex after:h-16 after:w-[3px] after:rounded-[6px] after:bg-ring after:opacity-0 after:content-['_'] group-hover:after:opacity-100"
  ),
  {
    variants: {
      direction: {
        left: "-left-3 -ml-3 pl-3",
        right: "-right-3 -mr-3 items-end pr-3"
      }
    }
  }
);
var resizeHandleVariants = classVarianceAuthority.cva(cn("absolute z-40"), {
  variants: {
    direction: {
      bottom: "w-full cursor-row-resize",
      left: "h-full cursor-col-resize",
      right: "h-full cursor-col-resize",
      top: "w-full cursor-row-resize"
    }
  }
});
function ResizeHandle({
  className,
  direction,
  options,
  ...props
}) {
  const state = plateResizable.useResizeHandleState(options ?? {});
  const resizeHandle = plateResizable.useResizeHandle(state);
  if (state.readOnly) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(resizeHandleVariants({ direction }), className),
      "data-resizing": state.isResizing,
      ...resizeHandle.props,
      ...props
    }
  );
}
var resizableVariants = classVarianceAuthority.cva("", {
  variants: {
    align: {
      center: "mx-auto",
      left: "mr-auto",
      right: "ml-auto"
    }
  }
});
function Resizable({
  align,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    plateResizable.Resizable,
    {
      ...props,
      className: cn(resizableVariants({ align }), className)
    }
  );
}
var ImageElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function ImageElement2(props) {
    const { align = "center", focused, readOnly, selected } = react$4.useMediaState();
    const width = plateResizable.useResizableValue("width");
    const { isDragging, handleRef } = plateDnd.useDraggable({
      element: props.element
    });
    return /* @__PURE__ */ jsxRuntime.jsx(MediaPopover, { plugin: react$4.ImagePlugin, children: /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, className: "py-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("figure", { className: "group relative m-0", contentEditable: false, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          Resizable,
          {
            align,
            options: {
              align,
              readOnly
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                react$4.Image,
                {
                  ref: handleRef,
                  className: cn(
                    "block w-full max-w-full cursor-pointer object-cover px-0",
                    "rounded-sm",
                    focused && selected && "ring-2 ring-ring ring-offset-2",
                    isDragging && "opacity-50"
                  ),
                  alt: props.attributes.alt
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({
                    direction: "right"
                  }),
                  options: { direction: "right" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Caption, { style: { width }, align, children: /* @__PURE__ */ jsxRuntime.jsx(
          CaptionTextarea,
          {
            readOnly,
            onFocus: (e) => {
              e.preventDefault();
            },
            placeholder: "Write a caption..."
          }
        ) })
      ] }),
      props.children
    ] }) });
  }
);
var MediaAudioElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function MediaAudioElement2(props) {
    const { align = "center", readOnly, unsafeUrl } = react$4.useMediaState();
    return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, className: "mb-1", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "figure",
        {
          className: "group relative cursor-default",
          contentEditable: false,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-16", children: /* @__PURE__ */ jsxRuntime.jsx("audio", { className: "size-full", src: unsafeUrl, controls: true }) }),
            /* @__PURE__ */ jsxRuntime.jsx(Caption, { style: { width: "100%" }, align, children: /* @__PURE__ */ jsxRuntime.jsx(
              CaptionTextarea,
              {
                className: "h-20",
                readOnly,
                placeholder: "Write a caption..."
              }
            ) })
          ]
        }
      ),
      props.children
    ] });
  }
);
var MediaEmbedElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function MediaEmbedElement2(props) {
    const {
      align = "center",
      embed,
      focused,
      isTweet,
      isVideo,
      isYoutube,
      readOnly,
      selected
    } = react$4.useMediaState({
      urlParsers: [plateMedia.parseTwitterUrl, plateMedia.parseVideoUrl]
    });
    const width = plateResizable.useResizableValue("width");
    const provider = embed?.provider;
    return /* @__PURE__ */ jsxRuntime.jsx(MediaPopover, { plugin: react$4.MediaEmbedPlugin, children: /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "figure",
        {
          className: "group relative m-0 w-full cursor-default",
          contentEditable: false,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              Resizable,
              {
                align,
                options: {
                  align,
                  maxWidth: isTweet ? 550 : "100%",
                  minWidth: isTweet ? 300 : 100
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "left" }),
                      options: { direction: "left" }
                    }
                  ),
                  isVideo ? isYoutube ? /* @__PURE__ */ jsxRuntime.jsx(
                    LiteYouTubeEmbed__default.default,
                    {
                      id: embed.id,
                      title: "youtube",
                      wrapperClass: cn(
                        "rounded-sm",
                        focused && selected && "ring-2 ring-ring ring-offset-2",
                        "relative block cursor-pointer bg-black bg-cover bg-center [contain:content]",
                        "[&.lyt-activated]:before:absolute [&.lyt-activated]:before:top-0 [&.lyt-activated]:before:h-[60px] [&.lyt-activated]:before:w-full [&.lyt-activated]:before:bg-top [&.lyt-activated]:before:bg-repeat-x [&.lyt-activated]:before:pb-[50px] [&.lyt-activated]:before:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                        "[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]",
                        'after:block after:pb-[var(--aspect-ratio)] after:content-[""]',
                        "[&_>_iframe]:absolute [&_>_iframe]:top-0 [&_>_iframe]:left-0 [&_>_iframe]:size-full",
                        "[&_>_.lty-playbtn]:z-1 [&_>_.lty-playbtn]:h-[46px] [&_>_.lty-playbtn]:w-[70px] [&_>_.lty-playbtn]:rounded-[14%] [&_>_.lty-playbtn]:bg-[#212121] [&_>_.lty-playbtn]:opacity-80 [&_>_.lty-playbtn]:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                        "[&:hover_>_.lty-playbtn]:bg-[red] [&:hover_>_.lty-playbtn]:opacity-100",
                        '[&_>_.lty-playbtn]:before:border-y-[11px] [&_>_.lty-playbtn]:before:border-r-0 [&_>_.lty-playbtn]:before:border-l-[19px] [&_>_.lty-playbtn]:before:border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:content-[""]',
                        "[&_>_.lty-playbtn]:absolute [&_>_.lty-playbtn]:top-1/2 [&_>_.lty-playbtn]:left-1/2 [&_>_.lty-playbtn]:[transform:translate3d(-50%,-50%,0)]",
                        "[&_>_.lty-playbtn]:before:absolute [&_>_.lty-playbtn]:before:top-1/2 [&_>_.lty-playbtn]:before:left-1/2 [&_>_.lty-playbtn]:before:[transform:translate3d(-50%,-50%,0)]",
                        "[&.lyt-activated]:cursor-[unset]",
                        "[&.lyt-activated]:before:pointer-events-none [&.lyt-activated]:before:opacity-0",
                        "[&.lyt-activated_>_.lty-playbtn]:pointer-events-none [&.lyt-activated_>_.lty-playbtn]:opacity-0!"
                      )
                    }
                  ) : /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        provider === "vimeo" && "pb-[75%]",
                        provider === "youku" && "pb-[56.25%]",
                        provider === "dailymotion" && "pb-[56.0417%]",
                        provider === "coub" && "pb-[51.25%]"
                      ),
                      children: /* @__PURE__ */ jsxRuntime.jsx(
                        "iframe",
                        {
                          className: cn(
                            "absolute top-0 left-0 size-full rounded-sm",
                            isVideo && "border-0",
                            focused && selected && "ring-2 ring-ring ring-offset-2"
                          ),
                          title: "embed",
                          src: embed.url,
                          allowFullScreen: true
                        }
                      )
                    }
                  ) : null,
                  isTweet && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        "[&_.react-tweet-theme]:my-0",
                        !readOnly && selected && "[&_.react-tweet-theme]:ring-2 [&_.react-tweet-theme]:ring-ring [&_.react-tweet-theme]:ring-offset-2"
                      ),
                      children: /* @__PURE__ */ jsxRuntime.jsx(reactTweet.Tweet, { id: embed.id })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    ResizeHandle,
                    {
                      className: mediaResizeHandleVariants({ direction: "right" }),
                      options: { direction: "right" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(Caption, { style: { width }, align, children: /* @__PURE__ */ jsxRuntime.jsx(CaptionTextarea, { placeholder: "Write a caption..." }) })
          ]
        }
      ),
      props.children
    ] }) });
  }
);
var MediaFileElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function MediaFileElement2(props) {
    const readOnly = react$b.useReadOnly();
    const { name, unsafeUrl } = react$4.useMediaState();
    return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { className: "my-px rounded-sm", ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "a",
        {
          className: "group relative m-0 flex cursor-pointer items-center rounded px-0.5 py-[3px] hover:bg-muted",
          contentEditable: false,
          download: name,
          href: unsafeUrl,
          rel: "noopener noreferrer",
          role: "button",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1 p-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileUp, { className: "size-5" }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { children: name })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(Caption, { align: "left", children: /* @__PURE__ */ jsxRuntime.jsx(
              CaptionTextarea,
              {
                className: "text-left",
                readOnly,
                placeholder: "Write a caption..."
              }
            ) })
          ]
        }
      ),
      props.children
    ] });
  }
);
function useUploadFile({
  onUploadComplete,
  onUploadError,
  ...props
} = {}) {
  const [uploadedFile, setUploadedFile] = React19__namespace.useState();
  const [uploadingFile, setUploadingFile] = React19__namespace.useState();
  const [progress, setProgress] = React19__namespace.useState(0);
  const [isUploading, setIsUploading] = React19__namespace.useState(false);
  async function uploadThing(file) {
    setIsUploading(true);
    setUploadingFile(file);
    try {
      const res = await uploadFiles("editorUploader", {
        ...props,
        files: [file],
        onUploadProgress: ({ progress: progress2 }) => {
          setProgress(Math.min(progress2, 100));
        }
      });
      setUploadedFile(res[0]);
      onUploadComplete?.(res[0]);
      return uploadedFile;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      const message = errorMessage.length > 0 ? errorMessage : "Something went wrong, please try again later.";
      sonner.toast.error(message);
      onUploadError?.(error);
      const mockUploadedFile = {
        key: "mock-key-0",
        appUrl: `https://mock-app-url.com/${file.name}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      };
      let progress2 = 0;
      const simulateProgress = async () => {
        while (progress2 < 100) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          progress2 += 2;
          setProgress(Math.min(progress2, 100));
        }
      };
      await simulateProgress();
      setUploadedFile(mockUploadedFile);
      return mockUploadedFile;
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(void 0);
    }
  }
  return {
    isUploading,
    progress,
    uploadedFile,
    uploadFile: uploadThing,
    uploadingFile
  };
}
var { uploadFiles, useUploadThing } = react$x.generateReactHelpers();
function getErrorMessage(err) {
  const unknownError = "Something went wrong, please try again later.";
  if (err instanceof zod.z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return errors.join("\n");
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return unknownError;
  }
}
var CONTENT = {
  [react$4.AudioPlugin.key]: {
    accept: ["audio/*"],
    content: "Add an audio file",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AudioLines, {})
  },
  [react$4.FilePlugin.key]: {
    accept: ["*"],
    content: "Add a file",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileUp, {})
  },
  [react$4.ImagePlugin.key]: {
    accept: ["image/*"],
    content: "Add an image",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ImageIcon, {})
  },
  [react$4.VideoPlugin.key]: {
    accept: ["video/*"],
    content: "Add a video",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Film, {})
  }
};
var MediaPlaceholderElement = react$b.withHOC(
  react$4.PlaceholderProvider,
  function MediaPlaceholderElement2(props) {
    const { editor, element } = props;
    const { api } = react$b.useEditorPlugin(react$4.PlaceholderPlugin);
    const { isUploading, progress, uploadedFile, uploadFile, uploadingFile } = useUploadFile();
    const loading = isUploading && uploadingFile;
    const currentContent = CONTENT[element.mediaType];
    const isImage = element.mediaType === react$4.ImagePlugin.key;
    const imageRef = React19__namespace.useRef(null);
    const { openFilePicker } = useFilePicker.useFilePicker({
      accept: currentContent.accept,
      multiple: true,
      onFilesSelected: ({ plainFiles: updatedFiles }) => {
        const firstFile = updatedFiles[0];
        const restFiles = updatedFiles.slice(1);
        replaceCurrentPlaceholder(firstFile);
        if (restFiles.length > 0) {
          editor.getTransforms(react$4.PlaceholderPlugin).insert.media(restFiles);
        }
      }
    });
    const replaceCurrentPlaceholder = React19__namespace.useCallback(
      (file) => {
        void uploadFile(file);
        api.placeholder.addUploadingFile(element.id, file);
      },
      [api.placeholder, element.id, uploadFile]
    );
    React19__namespace.useEffect(() => {
      if (!uploadedFile) return;
      const path = editor.api.findPath(element);
      editor.tf.withoutSaving(() => {
        editor.tf.removeNodes({ at: path });
        const node = {
          children: [{ text: "" }],
          initialHeight: imageRef.current?.height,
          initialWidth: imageRef.current?.width,
          isUpload: true,
          name: element.mediaType === react$4.FilePlugin.key ? uploadedFile.name : "",
          placeholderId: element.id,
          type: element.mediaType,
          url: uploadedFile.url
        };
        editor.tf.insertNodes(node, { at: path });
        react$4.updateUploadHistory(editor, node);
      });
      api.placeholder.removeUploadingFile(element.id);
    }, [uploadedFile, element.id]);
    const isReplaced = React19__namespace.useRef(false);
    React19__namespace.useEffect(() => {
      if (isReplaced.current) return;
      isReplaced.current = true;
      const currentFiles = api.placeholder.getUploadingFile(
        element.id
      );
      if (!currentFiles) return;
      replaceCurrentPlaceholder(currentFiles);
    }, [isReplaced]);
    return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { className: "my-1", ...props, children: [
      (!loading || !isImage) && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            "flex cursor-pointer items-center rounded-sm bg-muted p-3 pr-9 select-none hover:bg-primary/10"
          ),
          onClick: () => !loading && openFilePicker(),
          contentEditable: false,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative mr-3 flex text-muted-foreground/80 [&_svg]:size-6", children: currentContent.icon }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm whitespace-nowrap text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { children: loading ? uploadingFile?.name : currentContent.content }),
              loading && !isImage && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: formatBytes(uploadingFile?.size ?? 0) }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "\u2013" }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2Icon, { className: "mr-1 size-3.5 animate-spin text-muted-foreground" }),
                  progress ?? 0,
                  "%"
                ] })
              ] })
            ] })
          ]
        }
      ),
      isImage && loading && /* @__PURE__ */ jsxRuntime.jsx(
        ImageProgress,
        {
          file: uploadingFile,
          imageRef,
          progress
        }
      ),
      props.children
    ] });
  }
);
function ImageProgress({
  className,
  file,
  imageRef,
  progress = 0
}) {
  const [objectUrl, setObjectUrl] = React19__namespace.useState(null);
  React19__namespace.useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);
  if (!objectUrl) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), contentEditable: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        ref: imageRef,
        className: "h-auto w-full rounded-sm object-cover",
        alt: file.name,
        src: objectUrl
      }
    ),
    progress < 100 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute right-1 bottom-1 flex items-center space-x-2 rounded-full bg-black/50 px-1 py-0.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2Icon, { className: "size-3.5 animate-spin text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs font-medium text-white", children: [
        Math.round(progress),
        "%"
      ] })
    ] })
  ] });
}
function formatBytes(bytes, opts = {}) {
  const { decimals = 0, sizeType = "normal" } = opts;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"}`;
}
var MediaVideoElement = react$b.withHOC(
  plateResizable.ResizableProvider,
  function MediaVideoElement2(props) {
    const {
      align = "center",
      embed,
      isUpload,
      isYoutube,
      readOnly,
      unsafeUrl
    } = react$4.useMediaState({
      urlParsers: [plateMedia.parseTwitterUrl, plateMedia.parseVideoUrl]
    });
    const width = plateResizable.useResizableValue("width");
    const isEditorMounted = react$b.useEditorMounted();
    const { isDragging, handleRef } = plateDnd.useDraggable({
      element: props.element
    });
    return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { className: "py-2.5", ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("figure", { className: "relative m-0 cursor-default", contentEditable: false, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Resizable,
          {
            className: cn(isDragging && "opacity-50"),
            align,
            options: {
              align,
              maxWidth: 550 ,
              minWidth: 300 ,
              readOnly
            },
            children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "group/media", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "left" }),
                  options: { direction: "left" }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  className: mediaResizeHandleVariants({ direction: "right" }),
                  options: { direction: "right" }
                }
              ),
              !isUpload && isYoutube && /* @__PURE__ */ jsxRuntime.jsx("div", { ref: handleRef, children: /* @__PURE__ */ jsxRuntime.jsx(
                LiteYouTubeEmbed__default.default,
                {
                  id: embed.id,
                  title: "youtube",
                  wrapperClass: cn(
                    "aspect-video rounded-sm",
                    "relative block cursor-pointer bg-black bg-cover bg-center [contain:content]",
                    "[&.lyt-activated]:before:absolute [&.lyt-activated]:before:top-0 [&.lyt-activated]:before:h-[60px] [&.lyt-activated]:before:w-full [&.lyt-activated]:before:bg-top [&.lyt-activated]:before:bg-repeat-x [&.lyt-activated]:before:pb-[50px] [&.lyt-activated]:before:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                    "[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]",
                    'after:block after:pb-[var(--aspect-ratio)] after:content-[""]',
                    "[&_>_iframe]:absolute [&_>_iframe]:top-0 [&_>_iframe]:left-0 [&_>_iframe]:size-full",
                    "[&_>_.lty-playbtn]:z-1 [&_>_.lty-playbtn]:h-[46px] [&_>_.lty-playbtn]:w-[70px] [&_>_.lty-playbtn]:rounded-[14%] [&_>_.lty-playbtn]:bg-[#212121] [&_>_.lty-playbtn]:opacity-80 [&_>_.lty-playbtn]:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]",
                    "[&:hover_>_.lty-playbtn]:bg-[red] [&:hover_>_.lty-playbtn]:opacity-100",
                    '[&_>_.lty-playbtn]:before:border-y-[11px] [&_>_.lty-playbtn]:before:border-r-0 [&_>_.lty-playbtn]:before:border-l-[19px] [&_>_.lty-playbtn]:before:border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:content-[""]',
                    "[&_>_.lty-playbtn]:absolute [&_>_.lty-playbtn]:top-1/2 [&_>_.lty-playbtn]:left-1/2 [&_>_.lty-playbtn]:[transform:translate3d(-50%,-50%,0)]",
                    "[&_>_.lty-playbtn]:before:absolute [&_>_.lty-playbtn]:before:top-1/2 [&_>_.lty-playbtn]:before:left-1/2 [&_>_.lty-playbtn]:before:[transform:translate3d(-50%,-50%,0)]",
                    "[&.lyt-activated]:cursor-[unset]",
                    "[&.lyt-activated]:before:pointer-events-none [&.lyt-activated]:before:opacity-0",
                    "[&.lyt-activated_>_.lty-playbtn]:pointer-events-none [&.lyt-activated_>_.lty-playbtn]:opacity-0!"
                  )
                }
              ) }),
              isUpload && isEditorMounted && /* @__PURE__ */ jsxRuntime.jsx("div", { ref: handleRef, children: /* @__PURE__ */ jsxRuntime.jsx(
                ReactPlayer__default.default,
                {
                  height: "100%",
                  url: unsafeUrl,
                  width: "100%",
                  controls: true
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Caption, { style: { width }, align, children: /* @__PURE__ */ jsxRuntime.jsx(
          CaptionTextarea,
          {
            readOnly,
            placeholder: "Write a caption..."
          }
        ) })
      ] }),
      props.children
    ] });
  }
);
function ParagraphElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(react$b.PlateElement, { ...props, className: cn("m-0 px-0 py-1"), children: props.children });
}
var Placeholder = (props) => {
  const { attributes, children, placeholder } = props;
  const { enabled } = react$b.usePlaceholderState(props);
  return React19__namespace.Children.map(children, (child) => {
    return React19__namespace.cloneElement(child, {
      attributes: {
        ...attributes,
        className: cn(
          attributes.className,
          enabled && "before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]"
        ),
        placeholder
      }
    });
  });
};
react$b.createNodeHOC(Placeholder);
var withPlaceholdersPrimitive = react$b.createNodesHOC(Placeholder);
var withPlaceholders = (components2) => withPlaceholdersPrimitive(components2, [
  {
    key: react$b.ParagraphPlugin.key,
    hideOnBlur: true,
    placeholder: "Type a paragraph",
    query: {
      maxLevel: 1
    }
  },
  {
    key: plateHeading.HEADING_KEYS.h1,
    hideOnBlur: false,
    placeholder: "Untitled"
  }
]);
var groups = [
  {
    group: "AI",
    items: [
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SparklesIcon, {}),
        value: "AI",
        onSelect: (editor) => {
          editor.getApi(react$1.AIChatPlugin).aiChat.show();
        }
      }
    ]
  },
  {
    group: "Basic blocks",
    items: [
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PilcrowIcon, {}),
        keywords: ["paragraph"],
        label: "Text",
        value: react$b.ParagraphPlugin.key
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading1Icon, {}),
        keywords: ["title", "h1"],
        label: "Heading 1",
        value: plateHeading.HEADING_KEYS.h1
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading2Icon, {}),
        keywords: ["subtitle", "h2"],
        label: "Heading 2",
        value: plateHeading.HEADING_KEYS.h2
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Heading3Icon, {}),
        keywords: ["subtitle", "h3"],
        label: "Heading 3",
        value: plateHeading.HEADING_KEYS.h3
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListIcon, {}),
        keywords: ["unordered", "ul", "-"],
        label: "Bulleted list",
        value: plateIndentList.ListStyleType.Disc
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ListOrdered, {}),
        keywords: ["ordered", "ol", "1"],
        label: "Numbered list",
        value: plateIndentList.ListStyleType.Decimal
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Square, {}),
        keywords: ["checklist", "task", "checkbox", "[]"],
        label: "To-do list",
        value: plateIndentList.INDENT_LIST_KEYS.todo
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, {}),
        keywords: ["collapsible", "expandable"],
        label: "Toggle",
        value: react$c.TogglePlugin.key
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Code2, {}),
        keywords: ["```"],
        label: "Code Block",
        value: react$7.CodeBlockPlugin.key
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Table, {}),
        label: "Table",
        value: react$3.TablePlugin.key
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Quote, {}),
        keywords: ["citation", "blockquote", "quote", ">"],
        label: "Blockquote",
        value: react$d.BlockquotePlugin.key
      },
      {
        description: "Insert a highlighted block.",
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LightbulbIcon, {}),
        keywords: ["note"],
        label: "Callout",
        value: react$8.CalloutPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Advanced blocks",
    items: [
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TableOfContentsIcon, {}),
        keywords: ["toc"],
        label: "Table of contents",
        value: react$5.TocPlugin.key
      },
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Columns3Icon, {}),
        label: "3 columns",
        value: "action_three_columns"
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, {}),
        label: "Equation",
        value: react$6.EquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertBlock(editor, value);
      }
    }))
  },
  {
    group: "Inline",
    items: [
      {
        focusEditor: true,
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, {}),
        keywords: ["time"],
        label: "Date",
        value: react$a.DatePlugin.key
      },
      {
        focusEditor: false,
        icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RadicalIcon, {}),
        label: "Inline Equation",
        value: react$6.InlineEquationPlugin.key
      }
    ].map((item) => ({
      ...item,
      onSelect: (editor, value) => {
        insertInlineElement(editor, value);
      }
    }))
  }
];
function SlashInputElement(props) {
  const { editor, element } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, as: "span", "data-slate-value": element.value, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(InlineCombobox, { element, trigger: "/", children: [
      /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxInput, {}),
      /* @__PURE__ */ jsxRuntime.jsxs(InlineComboboxContent, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxEmpty, { children: "No results" }),
        groups.map(({ group, items: items2 }) => /* @__PURE__ */ jsxRuntime.jsxs(InlineComboboxGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(InlineComboboxGroupLabel, { children: group }),
          items2.map(
            ({ focusEditor, icon, keywords, label, value, onSelect }) => /* @__PURE__ */ jsxRuntime.jsxs(
              InlineComboboxItem,
              {
                value,
                onClick: () => onSelect(editor, value),
                label,
                focusEditor,
                group,
                keywords,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mr-2 text-muted-foreground", children: icon }),
                  label ?? value
                ]
              },
              value
            )
          )
        ] }, group))
      ] })
    ] }),
    props.children
  ] });
}
function SuggestionLeaf(props) {
  const { api, setOption } = react$b.useEditorPlugin(suggestionPlugin);
  const leaf = props.leaf;
  const leafId = api.suggestion.nodeId(leaf) ?? "";
  const activeSuggestionId = react$b.usePluginOption(suggestionPlugin, "activeId");
  const hoverSuggestionId = react$b.usePluginOption(suggestionPlugin, "hoverId");
  const dataList = api.suggestion.dataList(leaf);
  const hasRemove = dataList.some((data) => data.type === "remove");
  const hasActive = dataList.some((data) => data.id === activeSuggestionId);
  const hasHover = dataList.some((data) => data.id === hoverSuggestionId);
  const diffOperation = { type: hasRemove ? "delete" : "insert" };
  const Component = { delete: "del", insert: "ins", update: "span" }[diffOperation.type];
  return /* @__PURE__ */ jsxRuntime.jsx(
    react$b.PlateLeaf,
    {
      ...props,
      as: Component,
      className: cn(
        "bg-emerald-100 text-emerald-700 no-underline transition-colors duration-200",
        (hasActive || hasHover) && "bg-emerald-200/80",
        hasRemove && "bg-red-100 text-red-700",
        (hasActive || hasHover) && hasRemove && "bg-red-200/80 no-underline"
      ),
      attributes: {
        ...props.attributes,
        onMouseEnter: () => setOption("hoverId", leafId),
        onMouseLeave: () => setOption("hoverId", null)
      },
      children: props.children
    }
  );
}
function TableCellElement({
  isHeader,
  ...props
}) {
  const { api } = react$b.useEditorPlugin(react$3.TablePlugin);
  const readOnly = react$b.useReadOnly();
  const element = props.element;
  const rowId = react$b.useElementSelector(([node]) => node.id, [], {
    key: react$3.TableRowPlugin.key
  });
  const isSelectingRow = react$h.useBlockSelected(rowId);
  const isSelectionAreaVisible = react$b.usePluginOption(
    react$h.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const { borders, colIndex, colSpan, minHeight, rowIndex, selected, width } = react$3.useTableCellElement();
  const { bottomProps, hiddenLeft, leftProps, rightProps } = react$3.useTableCellElementResizable({
    colIndex,
    colSpan,
    rowIndex
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    react$b.PlateElement,
    {
      ...props,
      as: isHeader ? "th" : "td",
      className: cn(
        "h-full overflow-visible border-none bg-background p-0",
        element.background ? "bg-(--cellBackground)" : "bg-background",
        isHeader && "text-left *:m-0",
        "before:size-full",
        selected && "before:z-10 before:bg-brand/5",
        "before:absolute before:box-border before:content-[''] before:select-none",
        borders.bottom?.size && `before:border-b before:border-b-border`,
        borders.right?.size && `before:border-r before:border-r-border`,
        borders.left?.size && `before:border-l before:border-l-border`,
        borders.top?.size && `before:border-t before:border-t-border`
      ),
      style: {
        "--cellBackground": element.background,
        maxWidth: width || 240,
        minWidth: width || 120
      },
      attributes: {
        ...props.attributes,
        colSpan: api.table.getColSpan(element),
        rowSpan: api.table.getRowSpan(element)
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "relative z-20 box-border h-full px-3 py-2",
            style: { minHeight },
            children: props.children
          }
        ),
        !isSelectionAreaVisible && /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "group absolute top-0 size-full select-none",
            contentEditable: false,
            suppressContentEditableWarning: true,
            children: !readOnly && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  ...rightProps,
                  className: "-top-2 -right-1 h-[calc(100%_+_8px)] w-2",
                  "data-col": colIndex
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(ResizeHandle, { ...bottomProps, className: "-bottom-1 h-2" }),
              !hiddenLeft && /* @__PURE__ */ jsxRuntime.jsx(
                ResizeHandle,
                {
                  ...leftProps,
                  className: "top-0 -left-1 w-2",
                  "data-resizer-left": colIndex === 0 ? "true" : void 0
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "absolute top-0 z-30 hidden h-full w-1 bg-ring",
                    "right-[-1.5px]",
                    columnResizeVariants({ colIndex })
                  )
                }
              ),
              colIndex === 0 && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "absolute top-0 z-30 h-full w-1 bg-ring",
                    "left-[-1.5px]",
                    'hidden animate-in fade-in group-has-[[data-resizer-left]:hover]/table:block group-has-[[data-resizer-left][data-resizing="true"]]/table:block'
                  )
                }
              )
            ] })
          }
        ),
        isSelectingRow && /* @__PURE__ */ jsxRuntime.jsx("div", { className: blockSelectionVariants(), contentEditable: false })
      ]
    }
  );
}
function TableCellHeaderElement(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(TableCellElement, { ...props, isHeader: true });
}
var columnResizeVariants = classVarianceAuthority.cva("hidden animate-in fade-in", {
  variants: {
    colIndex: {
      0: 'group-has-[[data-col="0"]:hover]/table:block group-has-[[data-col="0"][data-resizing="true"]]/table:block',
      1: 'group-has-[[data-col="1"]:hover]/table:block group-has-[[data-col="1"][data-resizing="true"]]/table:block',
      2: 'group-has-[[data-col="2"]:hover]/table:block group-has-[[data-col="2"][data-resizing="true"]]/table:block',
      3: 'group-has-[[data-col="3"]:hover]/table:block group-has-[[data-col="3"][data-resizing="true"]]/table:block',
      4: 'group-has-[[data-col="4"]:hover]/table:block group-has-[[data-col="4"][data-resizing="true"]]/table:block',
      5: 'group-has-[[data-col="5"]:hover]/table:block group-has-[[data-col="5"][data-resizing="true"]]/table:block',
      6: 'group-has-[[data-col="6"]:hover]/table:block group-has-[[data-col="6"][data-resizing="true"]]/table:block',
      7: 'group-has-[[data-col="7"]:hover]/table:block group-has-[[data-col="7"][data-resizing="true"]]/table:block',
      8: 'group-has-[[data-col="8"]:hover]/table:block group-has-[[data-col="8"][data-resizing="true"]]/table:block',
      9: 'group-has-[[data-col="9"]:hover]/table:block group-has-[[data-col="9"][data-resizing="true"]]/table:block',
      10: 'group-has-[[data-col="10"]:hover]/table:block group-has-[[data-col="10"][data-resizing="true"]]/table:block'
    }
  }
});
var BorderAll = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" })
    ]
  }
);
var BorderBottom = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M1 13.25L14 13.25V14.75L1 14.75V13.25Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "5" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "5" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "5", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "3", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "9", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "11", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "9" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "9" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "7", y: "11" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "13", y: "11" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "5" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "7" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "1" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "9" }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { fill: "currentColor", height: "1", rx: ".5", width: "1", x: "1", y: "11" })
    ]
  }
);
var BorderLeft = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 7)",
          width: "1",
          x: "10",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 13)",
          width: "1",
          x: "10",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 7)",
          width: "1",
          x: "12",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 13)",
          width: "1",
          x: "12",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 7)",
          width: "1",
          x: "8",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 7)",
          width: "1",
          x: "14",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 13)",
          width: "1",
          x: "8",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 13)",
          width: "1",
          x: "14",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 5)",
          width: "1",
          x: "8",
          y: "5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 5)",
          width: "1",
          x: "14",
          y: "5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 3)",
          width: "1",
          x: "8",
          y: "3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 3)",
          width: "1",
          x: "14",
          y: "3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 9)",
          width: "1",
          x: "8",
          y: "9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 9)",
          width: "1",
          x: "14",
          y: "9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 11)",
          width: "1",
          x: "8",
          y: "11"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 11)",
          width: "1",
          x: "14",
          y: "11"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 7)",
          width: "1",
          x: "6",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 13)",
          width: "1",
          x: "6",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 7)",
          width: "1",
          x: "4",
          y: "7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 13)",
          width: "1",
          x: "4",
          y: "13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 10 1)",
          width: "1",
          x: "10",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 12 1)",
          width: "1",
          x: "12",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 8 1)",
          width: "1",
          x: "8",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 14 1)",
          width: "1",
          x: "14",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 6 1)",
          width: "1",
          x: "6",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(90 4 1)",
          width: "1",
          x: "4",
          y: "1"
        }
      )
    ]
  }
);
var BorderNone = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "5",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "3",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "9",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "11",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "7",
          y: "11.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "13",
          y: "11.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "5.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "3.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "7.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "13.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "1.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "9.025"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          width: "1",
          x: "1",
          y: "11.025"
        }
      )
    ]
  }
);
var BorderRight = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 5)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 3)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 9)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 11)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 7)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 13)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 5 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 3 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 7 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 1 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 9 1)",
          width: "1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "matrix(0 1 1 0 11 1)",
          width: "1"
        }
      )
    ]
  }
);
var BorderTop = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    fill: "none",
    height: "15",
    viewBox: "0 0 15 15",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 10)",
          width: "1",
          x: "8",
          y: "10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 10)",
          width: "1",
          x: "2",
          y: "10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 12)",
          width: "1",
          x: "8",
          y: "12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 12)",
          width: "1",
          x: "2",
          y: "12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 8)",
          width: "1",
          x: "8",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 14)",
          width: "1",
          x: "8",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 8)",
          width: "1",
          x: "2",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 14)",
          width: "1",
          x: "2",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 10 8)",
          width: "1",
          x: "10",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 10 14)",
          width: "1",
          x: "10",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 12 8)",
          width: "1",
          x: "12",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 12 14)",
          width: "1",
          x: "12",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 6 8)",
          width: "1",
          x: "6",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 6 14)",
          width: "1",
          x: "6",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 4 8)",
          width: "1",
          x: "4",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 4 14)",
          width: "1",
          x: "4",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 6)",
          width: "1",
          x: "8",
          y: "6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 6)",
          width: "1",
          x: "2",
          y: "6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 8 4)",
          width: "1",
          x: "8",
          y: "4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 2 4)",
          width: "1",
          x: "2",
          y: "4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 10)",
          width: "1",
          x: "14",
          y: "10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 12)",
          width: "1",
          x: "14",
          y: "12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 8)",
          width: "1",
          x: "14",
          y: "8"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 14)",
          width: "1",
          x: "14",
          y: "14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 6)",
          width: "1",
          x: "14",
          y: "6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          fill: "currentColor",
          height: "1",
          rx: ".5",
          transform: "rotate(-180 14 4)",
          width: "1",
          x: "14",
          y: "4"
        }
      )
    ]
  }
);
var TableElement = react$b.withHOC(
  react$3.TableProvider,
  function TableElement2({
    children,
    ...props
  }) {
    const readOnly = react$b.useReadOnly();
    const isSelectionAreaVisible = react$b.usePluginOption(
      react$h.BlockSelectionPlugin,
      "isSelectionAreaVisible"
    );
    const hasControls = !readOnly && !isSelectionAreaVisible;
    const selected = react$b.useSelected();
    const {
      isSelectingCell,
      marginLeft,
      props: tableProps
    } = react$3.useTableElement();
    const content = /* @__PURE__ */ jsxRuntime.jsx(
      react$b.PlateElement,
      {
        ...props,
        className: cn(
          "overflow-x-auto py-5",
          hasControls && "-ml-2 *:data-[slot=block-selection]:left-2"
        ),
        style: { paddingLeft: marginLeft },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "group/table relative w-fit", children: /* @__PURE__ */ jsxRuntime.jsx(
          "table",
          {
            className: cn(
              "mr-0 ml-px table h-px table-fixed border-collapse",
              isSelectingCell && "selection:bg-transparent"
            ),
            ...tableProps,
            children: /* @__PURE__ */ jsxRuntime.jsx("tbody", { className: "min-w-full", children })
          }
        ) })
      }
    );
    if (readOnly || !selected) {
      return content;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(TableFloatingToolbar, { children: content });
  }
);
function TableFloatingToolbar({
  children,
  ...props
}) {
  const { tf } = react$b.useEditorPlugin(react$3.TablePlugin);
  const element = react$b.useElement();
  const { props: buttonProps } = react$b.useRemoveNodeButton({ element });
  const collapsed = react$b.useEditorSelector((editor) => !editor.api.isExpanded(), []);
  const { canMerge, canSplit } = react$3.useTableMergeState();
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover2, { open: canMerge || canSplit || collapsed, modal: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive.PopoverAnchor, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContent,
      {
        asChild: true,
        onOpenAutoFocus: (e) => e.preventDefault(),
        contentEditable: false,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          Toolbar,
          {
            className: "scrollbar-hide flex w-auto max-w-[80vw] flex-row overflow-x-auto rounded-md border bg-popover p-1 shadow-md print:hidden",
            contentEditable: false,
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
                /* @__PURE__ */ jsxRuntime.jsx(ColorDropdownMenu2, { tooltip: "Background color", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PaintBucketIcon, {}) }),
                canMerge && /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.merge(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Merge cells",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CombineIcon, {})
                  }
                ),
                canSplit && /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => tf.table.split(),
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Split cell",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SquareSplitHorizontalIcon, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { modal: false, children: [
                  /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { tooltip: "Cell borders", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Grid2X2Icon, {}) }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPortal, { children: /* @__PURE__ */ jsxRuntime.jsx(TableBordersDropdownMenuContent, {}) })
                ] }),
                collapsed && /* @__PURE__ */ jsxRuntime.jsx(ToolbarGroup, { children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { tooltip: "Delete table", ...buttonProps, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Trash2Icon, {}) }) })
              ] }),
              collapsed && /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row before",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert row after",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableRow();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete row",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {})
                  }
                )
              ] }),
              collapsed && /* @__PURE__ */ jsxRuntime.jsxs(ToolbarGroup, { children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn({ before: true });
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column before",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.insert.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Insert column after",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  ToolbarButton,
                  {
                    onClick: () => {
                      tf.remove.tableColumn();
                    },
                    onMouseDown: (e) => e.preventDefault(),
                    tooltip: "Delete column",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, {})
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function TableBordersDropdownMenuContent(props) {
  const editor = react$b.useEditorRef();
  const {
    getOnSelectTableBorder,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasOuterBorders,
    hasRightBorder,
    hasTopBorder
  } = react$3.useTableBordersDropdownMenuContentState();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuContent,
    {
      className: "min-w-[220px]",
      onCloseAutoFocus: (e) => {
        e.preventDefault();
        editor.tf.focus();
      },
      align: "start",
      side: "right",
      sideOffset: 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasTopBorder,
              onCheckedChange: getOnSelectTableBorder("top"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderTop, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Top Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasRightBorder,
              onCheckedChange: getOnSelectTableBorder("right"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderRight, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Right Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasBottomBorder,
              onCheckedChange: getOnSelectTableBorder("bottom"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderBottom, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Bottom Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasLeftBorder,
              onCheckedChange: getOnSelectTableBorder("left"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderLeft, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Left Border" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasNoBorders,
              onCheckedChange: getOnSelectTableBorder("none"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderNone, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "No Border" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuCheckboxItem,
            {
              checked: hasOuterBorders,
              onCheckedChange: getOnSelectTableBorder("outer"),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(BorderAll, {}),
                /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Outside Borders" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ColorDropdownMenu2({ children, tooltip }) {
  const [open, setOpen] = React19__namespace.useState(false);
  const editor = react$b.useEditorRef();
  const selectedCells = react$b.usePluginOption(react$3.TablePlugin, "selectedCells");
  const onUpdateColor = React19__namespace.useCallback(
    (color) => {
      setOpen(false);
      plateTable.setCellBackground(editor, { color, selectedCells: selectedCells ?? [] });
    },
    [selectedCells, editor]
  );
  const onClearColor = React19__namespace.useCallback(() => {
    setOpen(false);
    plateTable.setCellBackground(editor, {
      color: null,
      selectedCells: selectedCells ?? []
    });
  }, [selectedCells, editor]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open, onOpenChange: setOpen, modal: false, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(ToolbarButton, { tooltip, children }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ jsxRuntime.jsx(ToolbarMenuGroup, { label: "Colors", children: /* @__PURE__ */ jsxRuntime.jsx(
        ColorDropdownMenuItems,
        {
          className: "px-2",
          colors: DEFAULT_COLORS,
          updateColor: onUpdateColor
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { className: "p-2", onClick: onClearColor, children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EraserIcon, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Clear" })
      ] }) })
    ] })
  ] });
}
function TableRowElement(props) {
  const { element } = props;
  const readOnly = react$b.useReadOnly();
  const selected = react$b.useSelected();
  const editor = react$b.useEditorRef();
  const isSelectionAreaVisible = react$b.usePluginOption(
    react$h.BlockSelectionPlugin,
    "isSelectionAreaVisible"
  );
  const hasControls = !readOnly && !isSelectionAreaVisible;
  const { isDragging, previewRef, handleRef } = plateDnd.useDraggable({
    element,
    type: element.type,
    canDropNode: ({ dragEntry, dropEntry }) => plate.PathApi.equals(
      plate.PathApi.parent(dragEntry[1]),
      plate.PathApi.parent(dropEntry[1])
    ),
    onDropHandler: (_, { dragItem }) => {
      const dragElement = dragItem.element;
      if (dragElement) {
        editor.tf.select(dragElement);
      }
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    react$b.PlateElement,
    {
      ...props,
      ref: cn$1.useComposedRef(props.ref, previewRef),
      as: "tr",
      className: cn("group/row", isDragging && "opacity-50"),
      attributes: {
        ...props.attributes,
        "data-selected": selected ? "true" : void 0
      },
      children: [
        hasControls && /* @__PURE__ */ jsxRuntime.jsxs("td", { className: "w-2 select-none", contentEditable: false, children: [
          /* @__PURE__ */ jsxRuntime.jsx(RowDragHandle, { dragRef: handleRef }),
          /* @__PURE__ */ jsxRuntime.jsx(DropLine4, {})
        ] }),
        props.children
      ]
    }
  );
}
function RowDragHandle({ dragRef }) {
  const editor = react$b.useEditorRef();
  const element = react$b.useElement();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button2,
    {
      ref: dragRef,
      variant: "outline",
      className: cn(
        "absolute top-1/2 left-0 z-51 h-6 w-4 -translate-y-1/2 p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
        "cursor-grab active:cursor-grabbing",
        'opacity-0 transition-opacity duration-100 group-hover/row:opacity-100 group-has-data-[resizing="true"]/row:opacity-0'
      ),
      onClick: () => {
        editor.tf.select(element);
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVertical, { className: "text-muted-foreground" })
    }
  );
}
function DropLine4() {
  const { dropLine } = plateDnd.useDropLine();
  if (!dropLine) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "absolute inset-x-0 left-2 z-50 h-0.5 bg-brand/50",
        dropLine === "top" ? "-top-px" : "-bottom-px"
      )
    }
  );
}
var headingItemVariants2 = classVarianceAuthority.cva(
  "block h-auto w-full cursor-pointer truncate rounded-none px-0.5 py-1.5 text-left font-medium text-muted-foreground underline decoration-[0.5px] underline-offset-4 hover:bg-accent hover:text-muted-foreground",
  {
    variants: {
      depth: {
        1: "pl-0.5",
        2: "pl-[26px]",
        3: "pl-[50px]"
      }
    }
  }
);
function TocElement(props) {
  const state = react$5.useTocElementState();
  const { props: btnProps } = react$5.useTocElement(state);
  const { headingList } = state;
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, className: "mb-1 p-0", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { contentEditable: false, children: headingList.length > 0 ? headingList.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        variant: "ghost",
        className: headingItemVariants2({
          depth: item.depth
        }),
        onClick: (e) => btnProps.onClick(e, item, "smooth"),
        "aria-current": true,
        children: item.title
      },
      item.id
    )) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-500", children: "Create a heading to display the table of contents." }) }),
    props.children
  ] });
}
function ToggleElement(props) {
  const element = props.element;
  const state = react$c.useToggleButtonState(element.id);
  const { buttonProps, open } = react$c.useToggleButton(state);
  return /* @__PURE__ */ jsxRuntime.jsxs(react$b.PlateElement, { ...props, className: "pl-6", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        size: "icon",
        variant: "ghost",
        className: "absolute top-0 -left-0.5 size-6 cursor-pointer items-center justify-center rounded-md p-px text-muted-foreground transition-colors select-none hover:bg-accent [&_svg]:size-4",
        contentEditable: false,
        ...buttonProps,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronRight,
          {
            className: open ? "rotate-90 transition-transform duration-75" : "rotate-0 transition-transform duration-75"
          }
        )
      }
    ),
    props.children
  ] });
}

// src/components/editor/use-create-editor.ts
var viewComponents = {
  [react$4.AudioPlugin.key]: MediaAudioElement,
  [react$d.BlockquotePlugin.key]: BlockquoteElement,
  [react$j.BoldPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "strong" }),
  [react$8.CalloutPlugin.key]: CalloutElement,
  [react$7.CodeBlockPlugin.key]: CodeBlockElement,
  [react$7.CodeLinePlugin.key]: CodeLineElement,
  [react$j.CodePlugin.key]: CodeLeaf,
  [react$7.CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [react$2.ColumnItemPlugin.key]: ColumnElement,
  [react$2.ColumnPlugin.key]: ColumnGroupElement,
  [react$s.CommentsPlugin.key]: CommentLeaf,
  [react$a.DatePlugin.key]: DateElement,
  [react$6.EquationPlugin.key]: EquationElement,
  [react$y.ExcalidrawPlugin.key]: ExcalidrawElement,
  [react$4.FilePlugin.key]: MediaFileElement,
  [plateHeading.HEADING_KEYS.h1]: cn$1.withProps(HeadingElement, { variant: "h1" }),
  [plateHeading.HEADING_KEYS.h2]: cn$1.withProps(HeadingElement, { variant: "h2" }),
  [plateHeading.HEADING_KEYS.h3]: cn$1.withProps(HeadingElement, { variant: "h3" }),
  [plateHeading.HEADING_KEYS.h4]: cn$1.withProps(HeadingElement, { variant: "h4" }),
  [plateHeading.HEADING_KEYS.h5]: cn$1.withProps(HeadingElement, { variant: "h5" }),
  [plateHeading.HEADING_KEYS.h6]: cn$1.withProps(HeadingElement, { variant: "h6" }),
  [react$k.HighlightPlugin.key]: HighlightLeaf,
  [react$g.HorizontalRulePlugin.key]: HrElement,
  [react$4.ImagePlugin.key]: ImageElement,
  [react$6.InlineEquationPlugin.key]: InlineEquationElement,
  [react$j.ItalicPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "em" }),
  [react$u.KbdPlugin.key]: KbdLeaf,
  [react$9.LinkPlugin.key]: LinkElement,
  [react$4.MediaEmbedPlugin.key]: MediaEmbedElement,
  [react$q.MentionPlugin.key]: MentionElement,
  [react$b.ParagraphPlugin.key]: ParagraphElement,
  [react$4.PlaceholderPlugin.key]: MediaPlaceholderElement,
  [react$j.StrikethroughPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "s" }),
  [react$j.SubscriptPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "sub" }),
  [react.SuggestionPlugin.key]: SuggestionLeaf,
  [react$j.SuperscriptPlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "sup" }),
  [react$3.TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [react$3.TableCellPlugin.key]: TableCellElement,
  [react$3.TablePlugin.key]: TableElement,
  [react$3.TableRowPlugin.key]: TableRowElement,
  [react$5.TocPlugin.key]: TocElement,
  [react$c.TogglePlugin.key]: ToggleElement,
  [react$j.UnderlinePlugin.key]: cn$1.withProps(react$b.PlateLeaf, { as: "u" }),
  [react$4.VideoPlugin.key]: MediaVideoElement
};
var editorComponents = {
  ...viewComponents,
  [react$1.AIPlugin.key]: AILeaf,
  [react$w.EmojiInputPlugin.key]: EmojiInputElement,
  [react$q.MentionInputPlugin.key]: MentionInputElement,
  [react$v.SlashInputPlugin.key]: SlashInputElement
};
var useCreateEditor = ({
  components: components2,
  override,
  placeholders,
  readOnly,
  value,
  ...options
} = {}, deps = []) => {
  const defaultValue = React19__namespace.useMemo(() => {
    return [
      {
        children: [{ text: "New Document" }],
        type: "h1"
      },
      {
        children: [{ text: "" }],
        type: "p"
      }
    ];
  }, []);
  const initialValue = value || defaultValue;
  const createPlateUI = (components3 = {}) => {
    return {
      ...readOnly ? viewComponents : placeholders ? withPlaceholders(editorComponents) : editorComponents,
      ...components3
    };
  };
  const editor = react$b.usePlateEditor(
    {
      override: { components: createPlateUI(components2), ...override },
      plugins: [
        ...copilotPlugins,
        ...editorPlugins,
        FixedToolbarPlugin,
        FloatingToolbarPlugin
      ],
      value: initialValue,
      ...options
    },
    [value, ...deps]
  );
  return editor;
};
function useVersionHistory() {
  const editor = react$b.useEditorRef();
  const isLoadingRef = React19.useRef(false);
  React19.useRef(null);
  const [versions, setVersions] = React19.useState([]);
  const [isInitialized, setIsInitialized] = React19.useState(false);
  React19.useEffect(() => {
    if (editor && !isInitialized) {
      const currentContent = editor.children?.length > 0 ? editor.children : getDefaultContent();
      const hasTemplateContent = currentContent.length > 2 || currentContent[0]?.children?.[0]?.text !== "New Document" && currentContent[0]?.children?.[0]?.text !== "";
      const defaultVersion = {
        id: "default",
        content: currentContent,
        date: /* @__PURE__ */ new Date(),
        isCurrent: true,
        name: hasTemplateContent ? "Template version" : "Default version"
      };
      setVersions([defaultVersion]);
      setIsInitialized(true);
    }
  }, [editor, isInitialized]);
  const currentVersion = versions.find((v) => v.isCurrent) || null;
  const validateContent = React19.useCallback((content) => {
    if (!content || !Array.isArray(content) || content.length === 0) {
      return [{ children: [{ text: "" }], type: "p" }];
    }
    const validateNode = (node) => {
      if (!node || typeof node !== "object") {
        return { children: [{ text: "" }], type: "p" };
      }
      const cleanNode = { ...node };
      delete cleanNode.isSelected;
      delete cleanNode.isPartiallySelected;
      if (!cleanNode.children || !Array.isArray(cleanNode.children)) {
        cleanNode.children = [{ text: "" }];
      } else {
        cleanNode.children = cleanNode.children.map((child) => {
          if (typeof child === "object" && child !== null) {
            if (child.type) {
              return validateNode(child);
            } else {
              const cleanChild = { ...child };
              if (typeof cleanChild.text !== "string") {
                cleanChild.text = "";
              }
              const validMarkProperties = [
                "text",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "code",
                "subscript",
                "superscript",
                "highlight",
                "color",
                "backgroundColor",
                "fontSize",
                "fontFamily",
                "fontWeight"
              ];
              Object.keys(cleanChild).forEach((key) => {
                if (!validMarkProperties.includes(key) && !key.startsWith("comment")) {
                  delete cleanChild[key];
                }
              });
              return cleanChild;
            }
          }
          return { text: "" };
        });
      }
      if (!cleanNode.type) {
        cleanNode.type = "p";
      }
      return cleanNode;
    };
    return content.map(validateNode);
  }, []);
  const getCurrentEditorContent = React19.useCallback(() => {
    if (!editor?.children) {
      return [{ children: [{ text: "" }], type: "p" }];
    }
    try {
      const content = JSON.parse(JSON.stringify(editor.children));
      return validateContent(content);
    } catch (error) {
      console.error("Error serializing editor content:", error);
      return [{ children: [{ text: "" }], type: "p" }];
    }
  }, [editor, validateContent]);
  const setEditorContent = React19.useCallback((content) => {
    if (!editor) {
      console.error("Editor not available for content update");
      return;
    }
    const validatedContent = validateContent(content);
    try {
      const wasNormalizing = editor.isNormalizing;
      editor.isNormalizing = false;
      if (editor.selection) {
        editor.selection = null;
      }
      editor.marks = null;
      editor.children = [];
      editor.children = validatedContent;
      const startPoint = { offset: 0, path: [0, 0] };
      if (validatedContent.length > 0) {
        try {
          editor.selection = {
            anchor: startPoint,
            focus: startPoint
          };
        } catch (selectionError) {
          editor.selection = null;
        }
      }
      editor.isNormalizing = wasNormalizing;
      if (typeof editor.normalize === "function") {
        editor.normalize({ force: true });
      }
      if (typeof editor.onChange === "function") {
        editor.onChange();
      }
    } catch (error) {
      console.error("Error setting editor content:", error);
      const fallbackContent = [{ children: [{ text: "" }], type: "p" }];
      try {
        editor.selection = null;
        editor.marks = null;
        editor.children = fallbackContent;
        try {
          editor.selection = {
            anchor: { offset: 0, path: [0, 0] },
            focus: { offset: 0, path: [0, 0] }
          };
        } catch {
          editor.selection = null;
        }
        if (typeof editor.onChange === "function") {
          editor.onChange();
        }
      } catch (fallbackError) {
        console.error("Error with fallback content:", fallbackError);
      }
    }
  }, [editor, validateContent]);
  React19.useEffect(() => {
    if (editor && currentVersion && !isLoadingRef.current) {
      const contentToLoad = currentVersion.name === "Default version" && (!currentVersion.content || currentVersion.content.length === 0) ? getDefaultContent() : currentVersion.content;
      setEditorContent(contentToLoad);
    }
  }, [editor, currentVersion?.id]);
  const handleSaveNewVersion = React19.useCallback(() => {
    if (!editor || isLoadingRef.current) {
      console.error("Editor not available or content loading");
      return;
    }
    try {
      const currentContent = getCurrentEditorContent();
      const userVersions = versions.filter(
        (v) => v.name.startsWith("Version ")
      );
      const nextVersionNumber = userVersions.length + 1;
      const newVersion = {
        id: `v_${Date.now()}`,
        content: currentContent,
        date: /* @__PURE__ */ new Date(),
        isCurrent: true,
        name: `Version ${nextVersionNumber}`
        // sequential name
      };
      setVersions((prev) => {
        const updatedVersions = prev.map(
          (v) => v.isCurrent ? { ...v, content: currentContent, isCurrent: false } : { ...v, isCurrent: false }
        );
        return [...updatedVersions, newVersion];
      });
      console.log("New version saved successfully");
    } catch (error) {
      console.error("Error saving new version:", error);
    }
  }, [editor, getCurrentEditorContent, versions]);
  const handleVersionSelect = React19.useCallback((version) => {
    if (!editor || isLoadingRef.current) {
      console.error("Editor not available or content loading");
      return;
    }
    if (version.isCurrent) {
      return;
    }
    try {
      const currentContent = getCurrentEditorContent();
      setVersions((prev) => {
        return prev.map((v) => {
          if (v.isCurrent) {
            return {
              ...v,
              content: currentContent,
              isCurrent: false
            };
          }
          return { ...v, isCurrent: v.id === version.id };
        });
      });
      let contentToLoad = version.content;
      if (version.name === "Default version" && (!version.content || version.content.length === 0)) {
        contentToLoad = getDefaultContent();
      }
      setEditorContent(contentToLoad);
      console.log("Version selected successfully:", version.name);
    } catch (error) {
      console.error("Error selecting version:", error);
    }
  }, [editor, getCurrentEditorContent, setEditorContent]);
  const handleDeleteVersion = React19.useCallback((versionId) => {
    setVersions((prev) => {
      const versionToDelete = prev.find((v) => v.id === versionId);
      const filtered = prev.filter((v) => v.id !== versionId);
      if (filtered.length === 0) {
        const newDefault = {
          id: `v_${Date.now()}`,
          content: getDefaultContent(),
          date: /* @__PURE__ */ new Date(),
          isCurrent: true,
          name: "New version"
        };
        if (editor) {
          setEditorContent(newDefault.content);
        }
        return [newDefault];
      }
      if (versionToDelete?.isCurrent) {
        filtered[0].isCurrent = true;
        if (editor) {
          let contentToLoad = filtered[0].content;
          if (filtered[0].name === "Default version" && (!filtered[0].content || filtered[0].content.length === 0)) {
            contentToLoad = getDefaultContent();
          }
          setEditorContent(contentToLoad);
        }
      }
      return filtered;
    });
  }, [editor, setEditorContent]);
  const handleRenameVersion = React19.useCallback((versionId, newName) => {
    if (!newName.trim()) return;
    setVersions((prev) => prev.map(
      (v) => v.id === versionId ? { ...v, name: newName.trim() } : v
    ));
  }, []);
  return {
    currentVersion,
    versions,
    handleDeleteVersion,
    handleRenameVersion,
    handleSaveNewVersion,
    handleVersionSelect
  };
}
function getDefaultContent() {
  return [
    {
      children: [{ text: "Co-Founders' Agreement" }],
      type: "h1"
    },
    {
      children: [{ text: "1. Roles and Responsibilities" }],
      type: "h1"
    },
    {
      children: [{ text: "1.1 Flexible Roles" }],
      type: "h2"
    },
    {
      children: [
        {
          text: "The Co-Founders acknowledge and agree that the roles and responsibilities within the Company will be dynamic and subject to change as the business evolves. Each Co-Founder commits to adapting their role as necessary for the benefit of the Company."
        }
      ],
      type: "p"
    },
    {
      children: [{ text: "1.2 Initial Role Allocation" }],
      type: "h2"
    },
    {
      children: [
        {
          text: "Notwithstanding the flexible nature of the roles, the initial primary responsibilities of each Co-Founder shall be as follows:"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 1: [DESCRIPTION OF INITIAL RESPONSIBILITIES]"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 2: [DESCRIPTION OF INITIAL RESPONSIBILITIES]"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 3: [DESCRIPTION OF INITIAL RESPONSIBILITIES]"
        }
      ],
      type: "p"
    },
    {
      children: [{ text: "1.3 Duty to Company Success" }],
      type: "h2"
    },
    {
      children: [
        {
          text: "Each Co-Founder hereby affirms and agrees that their primary and overriding obligation shall be to promote and ensure the success of the Company. This obligation shall take precedence over individual interests or preferences in all business-related decisions and actions."
        }
      ],
      type: "p"
    },
    {
      children: [{ text: "2. Equity Distribution" }],
      type: "h1"
    },
    {
      children: [{ text: "2.1 Initial Equity" }],
      type: "h2"
    },
    {
      children: [
        {
          text: "The total equity of the Company shall be divided among the Co-Founders as follows:"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 1: [PERCENTAGE]%"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 2: [PERCENTAGE]%"
        }
      ],
      type: "p"
    },
    {
      children: [
        {
          text: "Co-Founder 3: [PERCENTAGE]%"
        }
      ],
      type: "p"
    },
    {
      children: [{ text: "2.2 Equity Type" }],
      type: "h2"
    }
  ];
}
var VersionHistoryContext = React19.createContext(null);
function VersionHistoryProvider({ children }) {
  const versionHistory = useVersionHistory();
  return /* @__PURE__ */ jsxRuntime.jsx(VersionHistoryContext.Provider, { value: versionHistory, children });
}
function useVersionHistoryContext() {
  const context = React19.useContext(VersionHistoryContext);
  if (!context) {
    throw new Error("useVersionHistoryContext must be used within a VersionHistoryProvider");
  }
  return context;
}
function FieldInputSidebar() {
  const editor = react$b.useEditorRef();
  const [placeholders, setPlaceholders] = React19.useState([]);
  const [headings, setHeadings] = React19.useState([]);
  const [subHeadings, setSubHeadings] = React19.useState([]);
  const [selectedSubHeading, setSelectedSubHeading] = React19.useState(null);
  const [fieldValues, setFieldValues] = React19.useState({});
  const [tempFieldValues, setTempFieldValues] = React19.useState({});
  const scanDocument = React19__namespace.default.useCallback(() => {
    if (!editor?.children) return;
    const newHeadings = [];
    const newSubHeadings = [];
    const newPlaceholders = [];
    const placeholderRegex = /\[([^\]]+)\]/g;
    let currentH1 = null;
    let currentH2 = null;
    const traverseNode = (node, path) => {
      if (node.type === "h1" || node.type === "h2" || node.type === "h3") {
        const text = node.children?.map((child) => child.text || "").join("") || "";
        const headingId = `heading-${path.join("-")}`;
        if (node.type === "h1") {
          currentH1 = {
            id: headingId,
            level: 1,
            placeholders: [],
            position: path,
            text
          };
          newHeadings.push(currentH1);
          currentH2 = null;
        } else if (node.type === "h2" || node.type === "h3") {
          const subHeadingId = `subheading-${path.join("-")}`;
          currentH2 = {
            id: subHeadingId,
            parentId: currentH1?.id || "root",
            placeholders: [],
            text
          };
          newSubHeadings.push(currentH2);
        }
      }
      if (node.text) {
        const text = node.text;
        let match;
        while ((match = placeholderRegex.exec(text)) !== null) {
          const key = match[1];
          const beforeText = text.substring(0, match.index);
          const label = extractLabel(beforeText);
          const placeholder = {
            key,
            id: `placeholder-${path.join("-")}-${match.index}`,
            headingId: currentH1?.id || "root",
            label,
            position: { offset: match.index, path },
            subHeadingId: currentH2?.id || "root"
          };
          newPlaceholders.push(placeholder);
          if (currentH2) {
            currentH2.placeholders.push(placeholder);
          } else if (currentH1) {
            currentH1.placeholders.push(placeholder);
          }
        }
      }
      if (node.children) {
        node.children.forEach((child, index) => {
          traverseNode(child, [...path, index]);
        });
      }
    };
    editor.children.forEach((node, index) => {
      traverseNode(node, [index]);
    });
    setHeadings(newHeadings);
    setSubHeadings(newSubHeadings);
    setPlaceholders(newPlaceholders);
    const initialValues = {};
    newPlaceholders.forEach((p) => {
      initialValues[p.id] = p.key;
    });
    setFieldValues(initialValues);
    setTempFieldValues(initialValues);
  }, [editor]);
  const extractLabel = (beforeText) => {
    const lines = beforeText.split("\n");
    const lastLine = lines[lines.length - 1];
    const labelMatch = lastLine.match(/([^.]*[:\-•]\s*)$/);
    if (labelMatch) {
      return labelMatch[1].trim();
    }
    const words = lastLine.trim().split(/\s+/);
    return words.slice(-3).join(" ");
  };
  const updatePlaceholder = React19.useCallback((placeholderId, newValue) => {
    const placeholder = placeholders.find((p) => p.id === placeholderId);
    if (!placeholder || !editor) return;
    try {
      const bracketedText = `[${placeholder.key}]`;
      const { children } = editor;
      const plateEditor = editor;
      const findAndReplace = (nodes, path = []) => {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const currentPath = [...path, i];
          if (node.text && typeof node.text === "string" && node.text.includes(bracketedText)) {
            const beforeText = node.text.substring(0, node.text.indexOf(bracketedText));
            const afterText = node.text.substring(node.text.indexOf(bracketedText) + bracketedText.length);
            plateEditor.tf.withoutNormalizing(() => {
              if (beforeText || afterText) {
                const startOffset = beforeText.length;
                const endOffset = startOffset + bracketedText.length;
                plateEditor.tf.select({
                  anchor: { offset: startOffset, path: currentPath },
                  focus: { offset: endOffset, path: currentPath }
                });
                plateEditor.tf.insertText(newValue);
              } else {
                plateEditor.tf.setNodes({ text: newValue }, { at: currentPath });
              }
            });
            setPlaceholders((prev) => prev.map(
              (p) => p.id === placeholderId ? { ...p, key: newValue } : p
            ));
            return true;
          }
          if (node.children && Array.isArray(node.children)) {
            if (findAndReplace(node.children, currentPath)) {
              return true;
            }
          }
        }
        return false;
      };
      findAndReplace(children);
      setFieldValues((prev) => ({ ...prev, [placeholderId]: newValue }));
    } catch (error) {
      console.error("Error updating placeholder:", error);
    }
  }, [editor, placeholders]);
  const sectionsWithPlaceholders = React19.useMemo(() => {
    const sections = {};
    headings.forEach((heading) => {
      const headingSubHeadings = subHeadings.filter(
        (sub) => sub.parentId === heading.id && sub.placeholders.length > 0
      );
      if (headingSubHeadings.length > 0 || heading.placeholders.length > 0) {
        sections[heading.id] = {
          heading,
          subHeadings: headingSubHeadings
        };
      }
    });
    return sections;
  }, [headings, subHeadings]);
  const availableSubHeadings = React19.useMemo(() => {
    return subHeadings.filter((sub) => sub.placeholders.length > 0);
  }, [subHeadings]);
  const navigateSubHeading = (direction) => {
    if (!selectedSubHeading) return;
    const currentIndex = availableSubHeadings.findIndex((sub) => sub.id === selectedSubHeading);
    if (currentIndex === -1) return;
    const newIndex = direction === "prev" ? Math.max(0, currentIndex - 1) : Math.min(availableSubHeadings.length - 1, currentIndex + 1);
    setSelectedSubHeading(availableSubHeadings[newIndex].id);
  };
  const scrollToHeading = (headingId) => {
    console.log("Scroll to heading:", headingId);
  };
  React19.useEffect(() => {
    scanDocument();
  }, [scanDocument]);
  React19.useEffect(() => {
    if (!editor) return;
    const timeoutId = setTimeout(() => {
      scanDocument();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [editor?.children, scanDocument]);
  const selectedSubHeadingData = selectedSubHeading ? subHeadings.find((sub) => sub.id === selectedSubHeading) : null;
  const parentHeading = selectedSubHeadingData ? headings.find((h) => h.id === selectedSubHeadingData.parentId) : null;
  if (Object.keys(sectionsWithPlaceholders).length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 text-center text-gray-500", children: "No fields to fill." });
  }
  if (selectedSubHeading && selectedSubHeadingData) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Button2,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => setSelectedSubHeading(null),
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 mx-4 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-gray-900", children: parentHeading?.text || "Section" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: selectedSubHeadingData.text })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              size: "sm",
              variant: "ghost",
              disabled: availableSubHeadings.findIndex((sub) => sub.id === selectedSubHeading) === 0,
              onClick: () => navigateSubHeading("prev"),
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button2,
            {
              size: "sm",
              variant: "ghost",
              disabled: availableSubHeadings.findIndex((sub) => sub.id === selectedSubHeading) === availableSubHeadings.length - 1,
              onClick: () => navigateSubHeading("next"),
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: selectedSubHeadingData.placeholders.map((placeholder) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium text-gray-700", children: placeholder.label || "Field" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Input,
          {
            className: "w-full",
            value: tempFieldValues[placeholder.id] || "",
            onChange: (e) => {
              const newValue = e.target.value;
              setTempFieldValues((prev) => ({ ...prev, [placeholder.id]: newValue }));
            },
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                const newValue = tempFieldValues[placeholder.id] || "";
                updatePlaceholder(placeholder.id, newValue);
                setFieldValues((prev) => ({ ...prev, [placeholder.id]: newValue }));
              }
            },
            placeholder: "Enter value... (Press Enter to confirm)"
          }
        )
      ] }, placeholder.id)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 space-y-2", children: Object.values(sectionsWithPlaceholders).map(({ heading, subHeadings: sectionSubHeadings }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-gray-900", children: heading.text }),
    sectionSubHeadings.map((subHeading) => /* @__PURE__ */ jsxRuntime.jsx(
      Button2,
      {
        variant: "ghost",
        className: "w-full justify-start text-left h-auto p-2",
        onClick: () => {
          setSelectedSubHeading(subHeading.id);
          scrollToHeading(subHeading.id);
        },
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-gray-600", children: [
            "\u2514\u2500 ",
            subHeading.text
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded", children: subHeading.placeholders.length })
        ] })
      },
      subHeading.id
    ))
  ] }, heading.id)) });
}
function AISidebar({ editorContent = "", isOpen, onClose, onUpdateEditorContent }) {
  const [activeTab, setActiveTab] = React19.useState("ask-ai");
  const [input, setInput] = React19.useState("");
  const [messages, setMessages] = React19.useState([]);
  const [isLoading, setIsLoading] = React19.useState(false);
  const [currentPrompt, setCurrentPrompt] = React19.useState("");
  const [aiMode, setAiMode] = React19.useState("ask");
  const [pendingEditContent, setPendingEditContent] = React19.useState(null);
  useChat();
  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;
    const prompt = input.trim();
    setCurrentPrompt(prompt);
    setInput("");
    setIsLoading(true);
    const isEditMode = aiMode === "edit";
    const originalContent = editorContent;
    try {
      const messageContent = isEditMode ? `${prompt}

Document content to edit:
${editorContent}` : `${prompt}

Document context:
${editorContent}`;
      const systemPrompt = isEditMode ? "You are a document editor AI. When given editing instructions, return ONLY the edited document content without any explanations, markdown formatting, or additional text. Make the requested changes to the document and return the complete modified document." : "You are a helpful AI assistant. Answer questions about the provided document context. Be concise and helpful.";
      const result = await fetch("/api/ai/command", {
        body: JSON.stringify({
          apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
          messages: [
            {
              content: systemPrompt,
              role: "system"
            },
            {
              content: messageContent,
              role: "user"
            }
          ],
          model: "gpt-3.5-turbo"
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      if (!result.ok) {
        const placeholderResponse = isEditMode ? "I understand you want to edit this document. However, I'm currently unable to process editing requests. Please check your AI configuration and try again." : "I understand you're asking about this document. Here's a thoughtful response based on the content: This appears to be a comprehensive document that covers various aspects of the topic at hand. The structure demonstrates careful organization and attention to detail. For more specific insights, please feel free to ask more targeted questions about particular sections or concepts you'd like me to elaborate on.";
        setMessages((prev) => [...prev, {
          mode: aiMode,
          originalContent: isEditMode ? originalContent : void 0,
          prompt,
          response: placeholderResponse
        }]);
        setIsLoading(false);
        setCurrentPrompt("");
        return;
      }
      const reader = result.body?.getReader();
      if (!reader) {
        const placeholderResponse = isEditMode ? "I'm unable to process your editing request at the moment. Please try again later." : "Thank you for your question. I'm here to help you understand and work with this document. While I process your request, please know that I can assist with editing, explaining concepts, formatting suggestions, and much more. Feel free to ask me anything specific about the content you're working on.";
        setMessages((prev) => [...prev, {
          mode: aiMode,
          originalContent: isEditMode ? originalContent : void 0,
          prompt,
          response: placeholderResponse
        }]);
        setIsLoading(false);
        setCurrentPrompt("");
        return;
      }
      let responseText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const content = JSON.parse(line.slice(2));
              responseText += content;
            } catch (e) {
            }
          }
        }
      }
      const finalResponse = responseText || (isEditMode ? "I've processed your editing request. Please review the changes." : "I've received your request and am ready to help. Please let me know if you'd like me to elaborate on any specific aspect of the document or if you have particular editing tasks you'd like assistance with.");
      if (isEditMode && responseText) {
        setPendingEditContent(responseText);
        if (onUpdateEditorContent) {
          onUpdateEditorContent(responseText);
        }
      }
      setMessages((prev) => [...prev, {
        mode: aiMode,
        originalContent: isEditMode ? originalContent : void 0,
        prompt,
        response: finalResponse
      }]);
    } catch (error) {
      console.error("AI request failed:", error);
      setMessages((prev) => [...prev, {
        mode: aiMode,
        originalContent: isEditMode ? originalContent : void 0,
        prompt,
        response: "Sorry, I encountered an error. Please try again."
      }]);
    } finally {
      setIsLoading(false);
      setCurrentPrompt("");
    }
  };
  const handleAccept = (index) => {
    const message = messages[index];
    if (message?.mode === "edit") {
      setPendingEditContent(null);
    }
    setMessages((prev) => prev.map(
      (msg, i) => i === index ? { ...msg, isAccepted: true } : msg
    ));
  };
  const handleReject = (index) => {
    const message = messages[index];
    if (message?.mode === "edit" && message.originalContent && onUpdateEditorContent) {
      onUpdateEditorContent(message.originalContent);
      setPendingEditContent(null);
    }
    setMessages((prev) => prev.filter((_, i) => i !== index));
  };
  const handleRedo = async (index) => {
    const message = messages[index];
    if (!message) return;
    setIsLoading(true);
    setCurrentPrompt(message.prompt);
    const isEditMode = message.mode === "edit";
    const contentToUse = message.originalContent || editorContent;
    try {
      const messageContent = isEditMode ? `${message.prompt}

Document content to edit:
${contentToUse}` : `${message.prompt}

Document context:
${editorContent}`;
      const systemPrompt = isEditMode ? "You are a document editor AI. When given editing instructions, return ONLY the edited document content without any explanations, markdown formatting, or additional text. Make the requested changes to the document and return the complete modified document." : "You are a helpful AI assistant. Answer questions about the provided document context. Be concise and helpful.";
      const result = await fetch("/api/ai/command", {
        body: JSON.stringify({
          apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
          messages: [
            {
              content: systemPrompt,
              role: "system"
            },
            {
              content: messageContent,
              role: "user"
            }
          ],
          model: "gpt-3.5-turbo"
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      if (!result.ok) {
        const placeholderResponse = isEditMode ? "I'm unable to regenerate the editing request at the moment. Please try again later." : "Here's an alternative perspective on your question: The document contains valuable information that can be approached from multiple angles. Consider exploring different sections to gain a comprehensive understanding. I'm here to help you navigate through the content and provide insights tailored to your specific needs.";
        setMessages((prev) => prev.map(
          (msg, i) => i === index ? { ...msg, isAccepted: false, response: placeholderResponse } : msg
        ));
        setIsLoading(false);
        setCurrentPrompt("");
        return;
      }
      const reader = result.body?.getReader();
      if (!reader) {
        const placeholderResponse = isEditMode ? "I'm unable to regenerate the editing request at the moment. Please try again later." : "I'm regenerating a response for you. This document offers rich content that can be analyzed from various perspectives. Let me provide you with helpful insights and suggestions to enhance your understanding and editing experience.";
        setMessages((prev) => prev.map(
          (msg, i) => i === index ? { ...msg, isAccepted: false, response: placeholderResponse } : msg
        ));
        setIsLoading(false);
        setCurrentPrompt("");
        return;
      }
      let responseText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const content = JSON.parse(line.slice(2));
              responseText += content;
            } catch (e) {
            }
          }
        }
      }
      const finalResponse = responseText || (isEditMode ? "I've regenerated the editing changes. Please review." : "Here's a regenerated response with fresh insights about your document. I'm continuously learning to provide better assistance with your editing and content needs.");
      if (isEditMode && responseText && onUpdateEditorContent) {
        onUpdateEditorContent(responseText);
        setPendingEditContent(responseText);
      }
      setMessages((prev) => prev.map(
        (msg, i) => i === index ? { ...msg, isAccepted: false, response: finalResponse } : msg
      ));
    } catch (error) {
      console.error("AI request failed:", error);
      setMessages((prev) => prev.map(
        (msg, i) => i === index ? { ...msg, response: "Sorry, I encountered an error. Please try again." } : msg
      ));
    } finally {
      setIsLoading(false);
      setCurrentPrompt("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "fixed right-0 top-14 w-80 bg-white border-l border-gray-200 shadow-lg flex flex-col flex-shrink-0 h-full z-50", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-b border-gray-200 p-4 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: "text-gray-400 hover:text-gray-600 transition-colors mr-3",
            onClick: onClose,
            "aria-label": "Close sidebar",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-base font-semibold text-gray-900 flex-1 text-center", children: "Barum AI" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-0", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              "flex-1 px-4 py-2 text-sm font-medium border border-gray-300 transition-colors",
              activeTab === "field-input" ? "bg-[#274F2D] text-white border-[#274F2D]" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            ),
            onClick: () => setActiveTab("field-input"),
            children: "Field input"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              "flex-1 px-4 py-2 text-sm font-medium border border-l-0 border-gray-300 transition-colors",
              activeTab === "ask-ai" ? "bg-[#274F2D] text-white border-[#274F2D]" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            ),
            onClick: () => setActiveTab("ask-ai"),
            children: "Ask AI"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 min-h-0", children: [
      activeTab === "ask-ai" && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        isLoading && currentPrompt && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-[#f1f3f4] rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm", children: currentPrompt }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border border-[#e0e0e0] rounded-lg p-4 bg-white", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 text-gray-500", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-[#274F2D]" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: "Thinking..." })
          ] }) })
        ] }),
        messages.map((message, index) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-[#f1f3f4] rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              message.mode === "edit" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Edit3, { className: "h-3 w-3 text-orange-600" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessageCircleQuestion, { className: "h-3 w-3 text-blue-600" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium text-gray-500", children: message.mode === "edit" ? "Editor Mode" : "Ask Mode" })
            ] }),
            message.prompt
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
            "rounded-lg p-4 bg-white transition-all",
            message.isAccepted ? "border-0 shadow-none" : message.mode === "edit" ? "border border-orange-200 shadow-sm bg-orange-50" : "border border-[#e0e0e0] shadow-sm"
          ), children: [
            message.mode === "edit" && !message.isAccepted && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-orange-600 mb-2 font-medium", children: "\u{1F4DD} Document has been updated live. Review changes below." }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "prose max-w-none text-sm text-gray-700 leading-relaxed", children: message.response }),
            !message.isAccepted && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center space-x-3 mt-4 pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-colors",
                  onClick: () => handleAccept(index),
                  title: "Accept",
                  "aria-label": "Accept",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors",
                  onClick: () => handleReject(index),
                  title: "Reject",
                  "aria-label": "Reject",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors",
                  onClick: () => handleRedo(index),
                  title: "Regenerate",
                  "aria-label": "Regenerate",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RotateCcw, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] }, index))
      ] }),
      activeTab === "field-input" && /* @__PURE__ */ jsxRuntime.jsx(FieldInputSidebar, {})
    ] }),
    activeTab === "ask-ai" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-t border-gray-200 p-4 space-y-3 flex-shrink-0 bg-white", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            className: cn(
              "flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-md border transition-colors",
              aiMode === "ask" ? "bg-[#274F2D] text-white border-[#274F2D]" : "bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100"
            ),
            onClick: () => setAiMode("ask"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MessageCircleQuestion, { className: "h-3 w-3" }),
              "Ask Mode"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            className: cn(
              "flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-md border transition-colors",
              aiMode === "edit" ? "bg-[#274F2D] text-white border-[#274F2D]" : "bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100"
            ),
            onClick: () => setAiMode("edit"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Edit3, { className: "h-3 w-3" }),
              "Editor Mode"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500 mb-2", children: aiMode === "ask" ? "Ask questions about your document. Responses appear in the sidebar." : "Edit your document with AI. Changes apply directly to the editor with accept/reject options." }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "textarea",
          {
            className: "w-full resize-none rounded-lg border border-gray-300 p-3 pr-12 text-sm focus:border-[#274F2D] focus:outline-none focus:ring-1 focus:ring-[#274F2D] placeholder-gray-400 transition-colors",
            disabled: isLoading,
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: handleKeyDown,
            placeholder: aiMode === "ask" ? "Ask a question about your document..." : "Describe how to edit your document...",
            rows: 1
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            className: cn(
              "absolute bottom-3 right-2 flex h-8 w-8 items-center justify-center rounded-full transition-colors",
              input.trim() && !isLoading ? "bg-[#274F2D] text-white hover:bg-[#1e3d23]" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            ),
            disabled: !input.trim() || isLoading,
            onClick: handleSubmit,
            "aria-label": "Submit",
            children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-gray-500 text-center", children: "Barum can make mistakes. Please check responses." })
    ] })
  ] });
}
function getHeadingList2(editor) {
  const headings = [];
  const nodes = editor.children || [];
  nodes.forEach((node, index) => {
    if (plateHeading.isHeading(node)) {
      const headingKeys = Object.values(plateHeading.HEADING_KEYS);
      const nodeType = node.type;
      const level = headingKeys.indexOf(nodeType) + 1;
      const extractText = (children) => {
        return children.map((child) => {
          if (typeof child === "string") return child;
          if (child.text) return child.text;
          if (child.children) return extractText(child.children);
          return "";
        }).join("").trim();
      };
      const title = node.children ? extractText(node.children) : "";
      if (title) {
        headings.push({
          id: `heading-${index}`,
          level,
          path: [index],
          title: title.replace(/\s+/g, " ").trim()
          // Normalize whitespace
        });
      }
    }
  });
  return headings;
}
function DocumentOutline({ editor }) {
  const [activeHeadingId, setActiveHeadingId] = React19__namespace.useState(null);
  const headingList = react$b.useEditorSelector(
    (editor2) => getHeadingList2(editor2),
    [editor]
  );
  const scrollToHeading = (path, headingId) => {
    const targetHeading = headingList.find((h) => h.path.join(",") === path.join(","));
    if (!targetHeading) return;
    setActiveHeadingId(headingId);
    let element = null;
    const selectors = [
      `[data-slate-node="element"][data-slate-path="${path.join(",")}"]`,
      `[data-slate-path="${path.join(",")}"]`,
      `[data-path="${path.join(",")}"]`
    ];
    for (const selector of selectors) {
      element = document.querySelector(selector);
      if (element) break;
    }
    if (!element) {
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [data-slate-node="element"]');
      for (const heading of allHeadings) {
        const headingText = heading.textContent?.trim();
        if (headingText === targetHeading.title) {
          element = heading;
          break;
        }
      }
    }
    if (!element) {
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [data-slate-node="element"]');
      for (const heading of allHeadings) {
        const headingText = heading.textContent?.trim().replace(/\s+/g, " ");
        const targetText = targetHeading.title.trim().replace(/\s+/g, " ");
        if (headingText && targetText && (headingText.includes(targetText) || targetText.includes(headingText))) {
          element = heading;
          break;
        }
      }
    }
    if (!element) {
      const editorContent = document.querySelector('[data-slate-editor="true"]');
      if (editorContent) {
        const walker = document.createTreeWalker(
          editorContent,
          NodeFilter.SHOW_ELEMENT,
          {
            acceptNode: (node2) => {
              const element2 = node2;
              const text = element2.textContent?.trim();
              return text === targetHeading.title ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
          }
        );
        let node;
        while (node = walker.nextNode()) {
          element = node;
          break;
        }
      }
    }
    if (element) {
      const headerHeight = 60;
      const toolbarHeight = 49;
      const offset3 = headerHeight + toolbarHeight + 20;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementTop - offset3;
      window.scrollTo({
        behavior: "smooth",
        top: targetPosition
      });
    } else {
      console.warn("Could not find heading element for:", targetHeading.title);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed top-20 left-0 h-screen w-64 border-r border-border bg-background p-4 overflow-y-auto", children: headingList.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: headingList.map((heading) => /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: cn(
        "w-full text-left text-sm rounded-sm px-2 py-1.5 transition-colors",
        activeHeadingId === heading.id ? "bg-black text-white" : "hover:bg-accent hover:text-accent-foreground",
        heading.level === 1 && "font-medium",
        heading.level === 2 && !activeHeadingId && "pl-4 text-muted-foreground",
        heading.level === 3 && !activeHeadingId && "pl-6 text-muted-foreground",
        heading.level >= 4 && !activeHeadingId && "pl-8 text-muted-foreground",
        heading.level === 2 && activeHeadingId === heading.id && "pl-4",
        heading.level === 3 && activeHeadingId === heading.id && "pl-6",
        heading.level >= 4 && activeHeadingId === heading.id && "pl-8"
      ),
      onClick: () => scrollToHeading(heading.path, heading.id),
      children: heading.level === 1 ? `${heading.title}` : `\u2022 ${heading.title}`
    },
    heading.id
  )) }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "No headings found. Add headings to see the document outline." }) });
}
function MagicWandButton({ className, onClick }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: cn(
        "absolute top-16 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#274F2D] text-white shadow-lg transition-all hover:bg-[#1e3d23] hover:shadow-xl",
        className
      ),
      onClick,
      "aria-label": "Open AI Assistant",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Wand2, { className: "h-5 w-5" })
    }
  );
}
function VersionHistoryButton() {
  const {
    currentVersion,
    versions,
    handleDeleteVersion,
    handleRenameVersion,
    handleSaveNewVersion,
    handleVersionSelect
  } = useVersionHistoryContext();
  const [isOpen, setIsOpen] = React19.useState(false);
  const [deleteVersionId, setDeleteVersionId] = React19.useState(null);
  const [editingVersionId, setEditingVersionId] = React19.useState(null);
  const [editingName, setEditingName] = React19.useState("");
  const displayVersion = currentVersion || versions[0];
  const displayText = displayVersion ? `${displayVersion.name} \u2022 ${dateFns.format(displayVersion.date, "MM/dd/yyyy h:mm a")}` : "No versions";
  const handleEdit = (version, e) => {
    e.stopPropagation();
    setEditingVersionId(version.id);
    setEditingName(version.name);
  };
  const handleSaveEdit = () => {
    if (editingVersionId && editingName.trim()) {
      handleRenameVersion(editingVersionId, editingName.trim());
    }
    setEditingVersionId(null);
    setEditingName("");
  };
  const handleDelete = (versionId, e) => {
    e.stopPropagation();
    setDeleteVersionId(versionId);
  };
  const confirmDelete = () => {
    if (deleteVersionId) {
      handleDeleteVersion(deleteVersionId);
      setDeleteVersionId(null);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
        Button2,
        {
          size: "sm",
          variant: "ghost",
          className: "h-8 px-3 text-sm font-normal text-muted-foreground hover:text-foreground border border-input",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ClockIcon, { className: "mr-2 h-4 w-4" }),
            displayText,
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { className: "w-96", align: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium", children: "Version History" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: handleSaveNewVersion, children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ClockIcon, { className: "mr-2 h-4 w-4" }),
          "Save new version"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "max-h-60 overflow-y-auto", children: versions.map((version) => /* @__PURE__ */ jsxRuntime.jsxs(
          DropdownMenuItem,
          {
            className: "flex items-center justify-between px-3 py-2 cursor-pointer",
            onClick: () => !editingVersionId && handleVersionSelect(version),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-start flex-1", children: [
                editingVersionId === version.id ? /* @__PURE__ */ jsxRuntime.jsx(
                  Input,
                  {
                    className: "h-6 text-sm font-medium",
                    value: editingName,
                    onBlur: handleSaveEdit,
                    onChange: (e) => setEditingName(e.target.value),
                    onClick: (e) => e.stopPropagation(),
                    onKeyDown: (e) => {
                      if (e.key === "Enter") handleSaveEdit();
                      if (e.key === "Escape") {
                        setEditingVersionId(null);
                        setEditingName("");
                      }
                    },
                    autoFocus: true
                  }
                ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between w-full", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: version.name }),
                  version.isCurrent && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded ml-2", children: "Current" })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: dateFns.format(version.date, "MMMM d, yyyy \u2022 h:mm a") })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1 ml-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  Button2,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 w-6 p-0",
                    onClick: (e) => handleEdit(version, e),
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EditIcon, { className: "h-3 w-3" })
                  }
                ),
                versions.length > 1 && /* @__PURE__ */ jsxRuntime.jsx(
                  Button2,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 w-6 p-0 text-red-600 hover:text-red-700",
                    onClick: (e) => handleDelete(version.id, e),
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrashIcon, { className: "h-3 w-3" })
                  }
                )
              ] })
            ]
          },
          version.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialog, { open: !!deleteVersionId, onOpenChange: () => setDeleteVersionId(null), children: /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogTitle, { children: "Delete Version" }),
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogDescription, { children: "Are you sure you want to delete this version? This action cannot be undone." })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogCancel, { children: "Cancel" }),
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogAction, { className: "bg-red-600 hover:bg-red-700", onClick: confirmDelete, children: "Delete" })
      ] })
    ] }) })
  ] });
}
function AISidebarComponent() {
  const { closeSidebar, isOpen } = useAISidebar();
  const editor = react$b.useEditorRef();
  const editorString = react$b.useEditorString();
  const getEditorContent = () => {
    if (!editor) return "";
    try {
      return editorString || "";
    } catch (error) {
      console.error("Failed to get editor content:", error);
      return "";
    }
  };
  const handleUpdateEditorContent = (newContent) => {
    if (!editor) return;
    try {
      const lines = newContent.split("\n");
      const nodes = lines.map((line) => ({
        children: [{ text: line }],
        type: "p"
      }));
      editor.tf.setValue(nodes.length > 0 ? nodes : [{ children: [{ text: "" }], type: "p" }]);
    } catch (error) {
      console.error("Failed to update editor content:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    AISidebar,
    {
      onClose: closeSidebar,
      onUpdateEditorContent: handleUpdateEditorContent,
      editorContent: getEditorContent(),
      isOpen
    }
  );
}
function MagicWandButtonComponent() {
  const { openSidebar } = useAISidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(MagicWandButton, { onClick: openSidebar });
}
function PlateEditor({ initialTemplate } = {}) {
  const templateValue = React19__namespace.useMemo(() => {
    if (initialTemplate?.content) {
      return [
        {
          children: [{ text: initialTemplate.name || "Document" }],
          type: "h1"
        },
        {
          children: [{ text: "" }],
          type: "p"
        },
        ...initialTemplate.content.split("\n\n").map((paragraph) => ({
          children: [{ text: paragraph }],
          type: "p"
        }))
      ];
    }
    return [
      {
        children: [{ text: "New Document" }],
        type: "h1"
      },
      {
        children: [{ text: "" }],
        type: "p"
      }
    ];
  }, [initialTemplate]);
  const editor = useCreateEditor({ value: templateValue });
  return /* @__PURE__ */ jsxRuntime.jsx(reactDnd.DndProvider, { backend: reactDndHtml5Backend.HTML5Backend, children: /* @__PURE__ */ jsxRuntime.jsx(react$b.Plate, { editor, children: /* @__PURE__ */ jsxRuntime.jsx(AISidebarProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(VersionHistoryProvider, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-screen w-screen bg-white font-sans", children: [
    /* @__PURE__ */ jsxRuntime.jsx("aside", { className: "w-56 border-r border-border bg-white p-6 pt-8 flex-shrink-0 overflow-y-auto", children: /* @__PURE__ */ jsxRuntime.jsx(DocumentOutline, { editor }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("main", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Toolbar, { className: "sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-border bg-white gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { size: "sm", variant: "ghost", className: "h-8 px-3", children: "Save" }),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { size: "sm", variant: "ghost", className: "h-8 px-3", children: "Share" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(VersionHistoryButton, {}) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(ModeDropdownMenu, {}),
          /* @__PURE__ */ jsxRuntime.jsx(Button2, { size: "sm", variant: "ghost", className: "h-8 w-8 rounded-full bg-gray-100 text-gray-700", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.User, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 flex flex-col relative min-w-0 px-24 py-12", children: /* @__PURE__ */ jsxRuntime.jsxs(EditorContainer, { id: "scroll_container", variant: "demo", className: "max-w-5xl mx-auto w-full flex-1 relative bg-white", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Editor,
          {
            variant: "demo",
            className: "text-left min-h-[800px] w-full text-base",
            autoFocus: true
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(FloatingToolbar, { children: /* @__PURE__ */ jsxRuntime.jsx(FloatingToolbarButtons, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed right-12 top-1/2 z-50", children: /* @__PURE__ */ jsxRuntime.jsx(MagicWandButtonComponent, {}) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(AISidebarComponent, {})
    ] })
  ] }) }) }) }) });
}
function ClientOnly({ children }) {
  const [mounted, setMounted] = React19.useState(false);
  React19.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
}
function EditorContent({ initialTemplate }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "h-screen w-full", children: [
    /* @__PURE__ */ jsxRuntime.jsx(SettingsProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(PlateEditor, { initialTemplate }) }),
    /* @__PURE__ */ jsxRuntime.jsx(sonner.Toaster, {})
  ] });
}
function PlateEditorWrapper({ initialTemplate }) {
  return /* @__PURE__ */ jsxRuntime.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntime.jsx(React19.Suspense, { fallback: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-screen w-full flex items-center justify-center", children: "Loading editor..." }), children: /* @__PURE__ */ jsxRuntime.jsx(EditorContent, { initialTemplate }) }) });
}

exports.PlateEditor = PlateEditor;
exports.PlateEditorWrapper = PlateEditorWrapper;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map