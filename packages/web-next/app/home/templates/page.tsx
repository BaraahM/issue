'use client';

import { useState } from 'react';
import TemplateGallery from '@/components/organisms/TemplateGallery/TemplateGallery';
import { useRouter } from 'next/navigation';
import { PlateEditor } from '@/components/editor/plate-editor';
import '../../(editor)/editor-globals.css';

interface Template {
  id: number;
  name: string;
  category: string;
  content: string;
}

const TemplatesPage = () => {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleBack = () => {
    if (showEditor) {
      setShowEditor(false);
      setSelectedTemplate(null);
    } else {
      router.push('/home');
    }
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setShowEditor(true);
  };

  if (showEditor && selectedTemplate) {
    return (
      <div className="h-screen w-full">
        <PlateEditor 
          initialTemplate={{
            name: selectedTemplate.name,
            content: selectedTemplate.content
          }}
        />
      </div>
    );
  }

  return <TemplateGallery onBack={handleBack} onTemplateSelect={handleTemplateSelect} />;
};

export default TemplatesPage;
