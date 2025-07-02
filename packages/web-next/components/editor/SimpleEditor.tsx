'use client';

import React from 'react';
import { Box, Paper, Text, Button, Group } from '@mantine/core';
import { ArrowLeft } from 'lucide-react';

interface SimpleEditorProps {
  initialTemplate?: {
    name: string | null;
    content: string | null;
  } | null;
  onBack?: () => void;
}

const SimpleEditor: React.FC<SimpleEditorProps> = ({ initialTemplate, onBack }) => {
  const [content, setContent] = React.useState(
    initialTemplate?.content || 'Start typing your document...'
  );

  return (
    <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        style={{
          padding: '1rem',
          borderBottom: '1px solid var(--mantine-color-gray-3)',
          backgroundColor: 'white',
        }}
      >
        <Group justify="space-between">
          <Group>
            {onBack && (
              <Button variant="subtle" onClick={onBack} leftSection={<ArrowLeft size={16} />}>
                Back
              </Button>
            )}
            <Text size="lg" fw={600}>
              {initialTemplate?.name || 'New Document'}
            </Text>
          </Group>
          <Group>
            <Button variant="filled">Save</Button>
          </Group>
        </Group>
      </Box>

      {/* Editor Content */}
      <Box style={{ flex: 1, padding: '2rem', backgroundColor: '#f8f9fa' }}>
        <Paper
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '600px',
            padding: '2rem',
          }}
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: '100%',
              minHeight: '500px',
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
            }}
            placeholder="Start typing your document..."
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default SimpleEditor;