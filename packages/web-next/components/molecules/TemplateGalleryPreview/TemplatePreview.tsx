import { Box, Paper, Group } from '@mantine/core';
import Text from '@/components/atoms/Text/Text';
import Button from '@/components/atoms/Button/Button';
import { Template } from '@/components/molecules/TemplateGalleryList/TemplateGalleryList';
import { useRouter } from 'next/navigation';

interface TemplatePreviewProps {
  selectedTemplate: Template | null;
  onTemplateSelect?: (template: Template) => void;
}

const TemplatePreview = ({ selectedTemplate, onTemplateSelect }: TemplatePreviewProps) => {
  const router = useRouter();

  const handleStartFromTemplate = () => {
    if (selectedTemplate) {
      if (onTemplateSelect) {
        // Use the new callback to show editor in the same page
        onTemplateSelect(selectedTemplate);
      } else {
        // Fallback to the old behavior
        router.push('/editor');
      }
    }
  };

  if (!selectedTemplate) {
    return (
      <Box
        style={{
          flex: 1,
          backgroundColor: 'var(--mantine-color-gray-0)',
          padding: '2rem',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text size="lg" c="dimmed">
          Select a template to view its preview
        </Text>
      </Box>
    );
  }

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: 'var(--mantine-color-gray-0)',
        padding: '2rem',
        overflow: 'auto',
      }}
    >
      <Paper
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid var(--mantine-color-gray-3)',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          borderRadius: 0,
        }}
      >
        <Text size="xl" fw={600} mb="xl" ta="center" c="dark.6">
          {selectedTemplate.name}
        </Text>

        <Text size="md" mb="xl" style={{ lineHeight: 1.6 }} c="dark.6">
          {selectedTemplate.content}
        </Text>

        <Group justify="flex-end" mt="xl">
          <Button
            radius={50}
            customStyles={{
              backgroundColor: 'var(--mantine-color-dark-9)',
              color: 'var(--mantine-color-white)',
              transition: 'all 0.2s ease',
            }}
            customHoverStyles={{
              backgroundColor: 'var(--mantine-color-dark-7)',
              transform: 'scale(1.03)',
            }}
            onClick={handleStartFromTemplate}
          >
            Start from this template
          </Button>
        </Group>
      </Paper>
    </Box>
  );
};

export default TemplatePreview;
