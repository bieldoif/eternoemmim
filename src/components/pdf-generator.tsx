'use client';

import React, { useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { book, type BookPart } from '@/lib/book';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PdfGeneratorProps {
  book: typeof book;
  onComplete: () => void;
}

const PdfPage = React.forwardRef<HTMLDivElement, { part: BookPart }>(({ part }, ref) => {
  const image = PlaceHolderImages.find((img) => img.id === part.imageId);
  const paragraphs = part.content
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim().replace(/\r?\n/g, ' '))
    .filter((p) => p.length > 0);

  return (
    <div ref={ref} className="p-8 bg-white text-black font-body" style={{ width: '210mm', minHeight: '297mm' }}>
      <header className="mb-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          {part.title}
        </h2>
      </header>
       {image && part.imageId && (
        <div className="relative h-auto w-full max-w-full mx-auto my-8">
          <img
            src={image.imageUrl}
            alt={image.description}
            className="w-full h-auto object-contain"
            crossOrigin="anonymous"
          />
        </div>
      )}
      <article className="text-lg leading-relaxed space-y-6 text-justify">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </div>
  );
});
PdfPage.displayName = 'PdfPage';


const PdfGenerator: React.FC<PdfGeneratorProps> = ({ book, onComplete }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatePdf = async () => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const content = contentRef.current;

      if (content) {
        const parts = content.querySelectorAll<HTMLDivElement>('[data-pdf-part]');
        for (let i = 0; i < parts.length; i++) {
          const partElement = parts[i];
          const canvas = await html2canvas(partElement, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            allowTaint: true,
          });

          const imgData = canvas.toDataURL('image/png');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          let heightLeft = pdfHeight;
          let position = 0;

          if (i > 0) {
            pdf.addPage();
          }
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pdf.internal.pageSize.getHeight();

          while (heightLeft >= 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
          }
        }
        
        pdf.save(`${book.title}.pdf`);
      }
      onComplete();
    };

    generatePdf();
  }, [book, onComplete]);
  
  const coverImage = PlaceHolderImages.find((img) => img.id === 'cover-img');

  return (
    <div className="fixed -z-10 -left-full -top-full opacity-0" aria-hidden="true">
      <div ref={contentRef}>
        {/* Cover Page */}
        <div data-pdf-part="cover" className="p-8 bg-white text-black font-body" style={{ width: '210mm', minHeight: '297mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          {coverImage && (
            <div className="w-full max-w-md overflow-hidden mb-8 shadow-lg">
               <img
                src={coverImage.imageUrl}
                alt={coverImage.description}
                className="w-full h-auto object-cover"
                crossOrigin="anonymous"
              />
            </div>
          )}
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            {book.title}
          </h1>
          <p className="text-xl mt-2">por {book.author}</p>
           <blockquote className="mt-8 max-w-xl text-lg italic border-l-2 border-gray-400 pl-4">
            {book.openingQuote}
          </blockquote>
        </div>

        {/* Book Parts */}
        {book.parts.map((part) => (
           <div key={part.id} data-pdf-part={part.id} className="p-8 bg-white text-black font-body" style={{ width: '210mm', pageBreakAfter: 'always'}}>
            <header className="mb-8 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight">
                {part.title}
              </h2>
            </header>
              {part.imageId && PlaceHolderImages.find((img) => img.id === part.imageId) && (
              <div className="relative h-auto w-full max-w-full mx-auto my-8">
                <img
                  src={PlaceHolderImages.find((img) => img.id === part.imageId)?.imageUrl}
                  alt={PlaceHolderImages.find((img) => img.id === part.imageId)?.description}
                  className="w-full h-auto object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            )}
            <article className="text-lg leading-relaxed space-y-6 text-justify">
              {part.content
                .split(/\r?\n\s*\r?\n/)
                .map((p) => p.trim().replace(/\r?\n/g, ' '))
                .filter((p) => p.length > 0)
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfGenerator;
