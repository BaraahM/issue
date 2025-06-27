'use client';

import * as React from 'react';

import { CopilotPlugin } from '@udecode/plate-ai/react';
import { useEditorPlugin } from '@udecode/plate/react';
import {
  Check,
  ChevronsUpDown,
  ExternalLinkIcon,
  Eye,
  EyeOff,
  Settings,
  Wand2Icon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface Model {
  label: string;
  value: string;
}

interface SettingsContextType {
  keys: Record<string, string>;
  model: Model;
  setKey: (service: string, key: string) => void;
  setModel: (model: Model) => void;
}

export const models: Model[] = [
  { label: 'claude-3-haiku-20240307', value: 'claude-3-haiku-20240307' },
  { label: 'claude-3-sonnet-20240229', value: 'claude-3-sonnet-20240229' },
  { label: 'claude-3-opus-20240229', value: 'claude-3-opus-20240229' },
  { label: 'claude-3-5-sonnet-20241022', value: 'claude-3-5-sonnet-20241022' },
  { label: 'claude-3-5-haiku-20241022', value: 'claude-3-5-haiku-20241022' },
];

const SettingsContext = React.createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [keys, setKeys] = React.useState({
    anthropic: '',
    uploadthing: '',
  });
  const [model, setModel] = React.useState<Model>(models[0]);

  const setKey = (service: string, key: string) => {
    setKeys((prev) => ({ ...prev, [service]: key }));
  };

  return (
    <SettingsContext.Provider value={{ keys, model, setKey, setModel }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = React.useContext(SettingsContext);

  return (
    context ?? {
      keys: {
        anthropic: '',
        uploadthing: '',
      },
      model: models[0],
      setKey: () => {},
      setModel: () => {},
    }
  );
}

export function SettingsDialog() {
  const { keys, model, setKey, setModel } = useSettings();
  const [tempKeys, setTempKeys] = React.useState(keys);
  const [showKey, setShowKey] = React.useState<Record<string, boolean>>({});
  const [open, setOpen] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);

  const { getOptions, setOption } = useEditorPlugin(CopilotPlugin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries(tempKeys).forEach(([service, key]) => {
      setKey(service, key);
    });
    setOpen(false);

    // Update AI options if needed
    const completeOptions = getOptions().completeOptions ?? {};
    setOption('completeOptions', {
      ...completeOptions,
      body: {
        ...completeOptions.body,
        apiKey: tempKeys.anthropic,
        model: model.value,
      },
    });
  };

  const toggleKeyVisibility = (key: string) => {
    setShowKey((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderApiKeyInput = (service: string, label: string) => (
    <div className="group relative">
      <div className="flex items-center justify-between">
        <label
          className="absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
          htmlFor={label}
        >
          <span className="inline-flex bg-background px-2">{label}</span>
        </label>
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="absolute top-0 right-[28px] h-full"
        >
          <a
            className="flex items-center"
            href={
              service === 'anthropic'
                ? 'https://console.anthropic.com/dashboard'
                : 'https://uploadthing.com/dashboard'
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLinkIcon className="size-4" />
            <span className="sr-only">Get {label}</span>
          </a>
        </Button>
      </div>

      <Input
        id={label}
        className="pr-10"
        value={tempKeys[service]}
        onChange={(e) =>
          setTempKeys((prev) => ({ ...prev, [service]: e.target.value }))
        }
        placeholder=""
        data-1p-ignore
        type={showKey[service] ? 'text' : 'password'}
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-0 right-0 h-full"
        onClick={() => toggleKeyVisibility(service)}
        type="button"
      >
        {showKey[service] ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
        <span className="sr-only">
          {showKey[service] ? 'Hide' : 'Show'} {label}
        </span>
      </Button>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="default"
          className={cn(
            'group fixed right-4 bottom-4 z-50 size-10 overflow-hidden',
            'bg-gradient-to-br from-blue-500 to-purple-600 text-white',
            'hover:from-blue-600 hover:to-purple-700',
            'shadow-lg hover:shadow-xl transition-all duration-200',
            'rounded-full'
          )}
        >
          <Settings className="size-5 transition-transform group-hover:rotate-90" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Configure your API keys and model preferences.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Model</label>
            <Popover open={openModel} onOpenChange={setOpenModel}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openModel}
                  className="w-full justify-between"
                >
                  {model.label}
                  <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search model..." />
                  <CommandList>
                    <CommandEmpty>No model found.</CommandEmpty>
                    <CommandGroup>
                      {models.map((modelOption) => (
                        <CommandItem
                          key={modelOption.value}
                          value={modelOption.value}
                          onSelect={() => {
                            setModel(modelOption);
                            setOpenModel(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 size-4',
                              model.value === modelOption.value
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {modelOption.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">API Keys</label>
            <div className="space-y-3">
              {renderApiKeyInput('anthropic', 'Anthropic API Key')}
              {renderApiKeyInput('uploadthing', 'UploadThing API Key')}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
