import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@barum/plate-editor/styles';
import './editor-globals.css';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  description: 'Barum Editor - Legal AI Platform',
  title: 'Barum Editor',
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{
        margin: 0,
        padding: 0,
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
