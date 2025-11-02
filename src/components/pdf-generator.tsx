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

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ book, onComplete }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatePdf = async () => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const content = contentRef.current;
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // A4 size in pixels at 96 DPI
      const a4WidthInPx = 794;

      if (content) {
        const parts = content.querySelectorAll<HTMLDivElement>('[data-pdf-part]');
        
        for (let i = 0; i < parts.length; i++) {
          const partElement = parts[i];
          const canvas = await html2canvas(partElement, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            allowTaint: true,
            width: a4WidthInPx, // Use fixed width for consistency
            windowWidth: a4WidthInPx,
          });

          const imgData = canvas.toDataURL('image/png');
          const imgProps = pdf.getImageProperties(imgData);
          
          let pageHeight = pdf.internal.pageSize.getHeight();
          let imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
          let heightLeft = imgHeight;
          let position = 0;

          if (i > 0) {
            pdf.addPage();
          }
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = -heightLeft;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pageHeight;
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
    <div className="fixed -z-10 -left-[9999px] -top-[9999px] opacity-0" aria-hidden="true">
      <div ref={contentRef}>
        {/* Cover Page */}
        <div data-pdf-part="cover" className="bg-white text-black" style={{ width: '210mm', minHeight: '297mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px', fontFamily: 'Literata, serif' }}>
          {coverImage && (
            <div style={{ width: '100%', maxWidth: '150mm', overflow: 'hidden', marginBottom: '32px' }}>
               <img
                src={coverImage.imageUrl}
                alt={coverImage.description}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                crossOrigin="anonymous"
              />
            </div>
          )}
          <h1 style={{ fontFamily: 'Literata, serif', fontSize: '32px', fontWeight: 'bold' }}>
            {book.title}
          </h1>
          <p style={{ fontSize: '18px', marginTop: '8px' }}>por {book.author}</p>
           <blockquote style={{ marginTop: '32px', maxWidth: '180mm', fontSize: '16px', fontStyle: 'italic', borderLeft: '2px solid #ccc', paddingLeft: '16px' }}>
            {book.openingQuote}
          </blockquote>
        </div>

        {/* Book Parts */}
        {book.parts.map((part) => (
           <div key={part.id} data-pdf-part={part.id} className="bg-white text-black" style={{ width: '210mm', padding: '32px', pageBreakAfter: 'always', fontFamily: 'Literata, serif'}}>
            <header style={{ marginBottom: '32px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Literata, serif', fontSize: '24px', fontWeight: 'bold' }}>
                {part.title}
              </h2>
            </header>
              {part.imageId && PlaceHolderImages.find((img) => img.id === part.imageId) && (
              <div style={{ position: 'relative', height: 'auto', width: '100%', maxWidth: '100%', margin: '32px auto' }}>
                <img
                  src={PlaceHolderImages.find((img) => img.id === part.imageId)?.imageUrl}
                  alt={PlaceHolderImages.find((img) => img.id === part.imageId)?.description}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  crossOrigin="anonymous"
                />
              </div>
            )}
            <article style={{ fontSize: '14px', lineHeight: 1.6, textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
              <p>{part.content}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfGenerator;
