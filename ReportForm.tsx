import { jsPDF } from 'jspdf';
import type { SceneElement, ReportData } from '@/types';
import { iconByKey } from '@/icons';

const CANVAS_W = 900;
const CANVAS_H = 600;

function SceneRenderer({ elements, bgImage }: { elements: SceneElement[]; bgImage: string | null }) {
  return (
    <div
      style={{
        position: 'relative',
        width: `${CANVAS_W}px`,
        height: `${CANVAS_H}px`,
        overflow: 'hidden',
        background: '#f1f5f9',
      }}
    >
      {bgImage && (
        <img
          src={bgImage}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          crossOrigin="anonymous"
        />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          backgroundImage:
            'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {elements.map((el) => {
        const transform = `rotate(${el.rotation}deg)`;
        const baseStyle: React.CSSProperties = {
          position: 'absolute',
          left: el.x,
          top: el.y,
          width: el.width,
          height: el.height,
          transform,
          transformOrigin: 'center center',
        };
        if (el.svgKey === 'textbox') {
          return (
            <div
              key={el.id}
              style={{
                ...baseStyle,
                background: '#fefce8',
                border: '2px solid #eab308',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'Arial,sans-serif',
                fontSize: 11,
                color: '#1e293b',
                padding: 4,
                boxSizing: 'border-box',
              }}
            >
              {el.label || ''}
            </div>
          );
        }
        const iconDef = iconByKey(el.svgKey || '');
        if (!iconDef) return null;
        const Icon = iconDef.render;
        return (
          <div key={el.id} style={{ ...baseStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon style={{ width: '100%', height: '100%' }} />
          </div>
        );
      })}
    </div>
  );
}

async function renderSceneToDataUrl(elements: SceneElement[], bgImage: string | null): Promise<string> {
  const { createRoot } = await import('react-dom/client');
  const container = document.createElement('div');
  container.style.cssText = `position:fixed;left:-9999px;top:0;width:${CANVAS_W}px;height:${CANVAS_H}px;`;
  document.body.appendChild(container);

  const root = createRoot(container);
  await new Promise<void>((resolve) => {
    root.render(<SceneRenderer elements={elements} bgImage={bgImage} />);
    setTimeout(resolve, 80);
  });

  if (bgImage) {
    await new Promise((r) => setTimeout(r, 150));
  }

  const html2canvas = (await import('html2canvas')).default;
  const canvas = await html2canvas(container, {
    width: CANVAS_W,
    height: CANVAS_H,
    scale: 2,
    backgroundColor: '#f1f5f9',
    useCORS: true,
    allowTaint: true,
  });

  root.unmount();
  document.body.removeChild(container);
  return canvas.toDataURL('image/png');
}

export async function generatePdf(
  elements: SceneElement[],
  bgImage: string | null,
  report: ReportData
): Promise<void> {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = 210;
  const margin = 15;

  pdf.setFontSize(11);
  pdf.setTextColor(30, 41, 59);
  pdf.setFont('helvetica', 'bold');
  const dateStr = report.date || '___/___/____';
  const timeStr = report.time || '--:--';
  pdf.text(`Dia i hora: ${dateStr}  ${timeStr}`, margin, 22);
  pdf.text(`Ubicació: ${report.location || '__________'}`, pageW - margin, 22, { align: 'right' });

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Policia: ${report.police || '____________________'}`, margin, 30);

  pdf.setDrawColor(148, 163, 184);
  pdf.setLineWidth(0.3);
  pdf.line(margin, 34, pageW - margin, 34);

  const imgW = pageW - margin * 2;
  const imgH = (imgW * CANVAS_H) / CANVAS_W;
  const imgY = 40;
  const dataUrl = await renderSceneToDataUrl(elements, bgImage);
  pdf.addImage(dataUrl, 'PNG', margin, imgY, imgW, imgH);

  let y = imgY + imgH + 10;
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.text("Explicació de l'accident", margin, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  const expLines = pdf.splitTextToSize(report.explanation || '', pageW - margin * 2);
  pdf.text(expLines, margin, y);
  y += expLines.length * 5 + 8;

  pdf.setFont('helvetica', 'bold');
  pdf.text('TIP dels agents actuants', margin, y);
  y += 5;
  pdf.setFont('helvetica', 'normal');
  const tipLines = pdf.splitTextToSize(report.tip || '', pageW - margin * 2);
  pdf.text(tipLines, margin, y);
  pdf.setDrawColor(148, 163, 184);
  pdf.setLineWidth(0.2);
  const tipBoxH = Math.max(20, tipLines.length * 5 + 6);
  pdf.rect(margin, y - 4, pageW - margin * 2, tipBoxH);

  pdf.save(`informe-accident-${Date.now()}.pdf`);
}
