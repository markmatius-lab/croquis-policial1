import { useCallback, useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import type { SceneElement } from '@/types';
import { FOLDERS } from '@/palette';
import { iconByKey } from '@/icons';

interface Props {
  elements: SceneElement[];
  setElements: (els: SceneElement[]) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  bgImage: string | null;
  setBgImage: (img: string | null) => void;
}

type DragMode = 'move' | 'rotate' | 'resize' | null;

interface DragState {
  id: string;
  mode: DragMode;
  startX: number;
  startY: number;
  origEl: SceneElement;
  centerX: number;
  centerY: number;
}

const CANVAS_W = 900;
const CANVAS_H = 600;

export default function CanvasEditor({
  elements,
  setElements,
  selectedId,
  setSelectedId,
  bgImage,
  setBgImage,
}: Props) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    Vehicles: true,
    Senyalització: false,
    Elements: false,
  });

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBgImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const addElement = useCallback(
    (svgKey: string) => {
      const iconDef = iconByKey(svgKey);
      if (!iconDef) return;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const el: SceneElement = {
        id,
        kind: iconDef.category,
        subType: iconDef.category,
        svgKey,
        x: CANVAS_W / 2 - iconDef.defaultWidth / 2,
        y: CANVAS_H / 2 - iconDef.defaultHeight / 2,
        width: iconDef.defaultWidth,
        height: iconDef.defaultHeight,
        rotation: 0,
        label: svgKey === 'textbox' ? 'Escriu aquí...' : undefined,
      };
      setElements([...elements, el]);
      setSelectedId(id);
    },
    [elements, setElements, setSelectedId]
  );

  const updateElement = (id: string, patch: Partial<SceneElement>) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...patch } : el)));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const startMove = (e: React.PointerEvent, el: SceneElement) => {
    e.stopPropagation();
    setSelectedId(el.id);
    setDrag({ id: el.id, mode: 'move', startX: e.clientX, startY: e.clientY, origEl: { ...el }, centerX: 0, centerY: 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const startRotate = (e: React.PointerEvent, el: SceneElement) => {
    e.stopPropagation();
    const rect = canvasRef.current!.getBoundingClientRect();
    const scale = rect.width / CANVAS_W;
    const cx = rect.left + (el.x + el.width / 2) * scale;
    const cy = rect.top + (el.y + el.height / 2) * scale;
    setDrag({ id: el.id, mode: 'rotate', startX: e.clientX, startY: e.clientY, origEl: { ...el }, centerX: cx, centerY: cy });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const startResize = (e: React.PointerEvent, el: SceneElement) => {
    e.stopPropagation();
    setSelectedId(el.id);
    setDrag({ id: el.id, mode: 'resize', startX: e.clientX, startY: e.clientY, origEl: { ...el }, centerX: 0, centerY: 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  useEffect(() => {
    if (!drag) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const scale = rect.width / CANVAS_W;
    const onMove = (e: PointerEvent) => {
      const el = elements.find((x) => x.id === drag.id);
      if (!el) return;
      if (drag.mode === 'move') {
        const dx = (e.clientX - drag.startX) / scale;
        const dy = (e.clientY - drag.startY) / scale;
        updateElement(drag.id, { x: drag.origEl.x + dx, y: drag.origEl.y + dy });
      } else if (drag.mode === 'rotate') {
        const ang = Math.atan2(e.clientY - drag.centerY, e.clientX - drag.centerX);
        const deg = (ang * 180) / Math.PI + 90;
        updateElement(drag.id, { rotation: Math.round(deg) });
      } else if (drag.mode === 'resize') {
        const dx = (e.clientX - drag.startX) / scale;
        const dy = (e.clientY - drag.startY) / scale;
        const w = Math.max(20, drag.origEl.width + dx * 2);
        const h = Math.max(20, drag.origEl.height + dy * 2);
        updateElement(drag.id, {
          width: w,
          height: h,
          x: drag.origEl.x + drag.origEl.width / 2 - w / 2,
          y: drag.origEl.y + drag.origEl.height / 2 - h / 2,
        });
      }
    };
    const onUp = () => setDrag(null);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [drag, elements]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId && !editingTextId) {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
        e.preventDefault();
        deleteElement(selectedId);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, editingTextId, elements]);

  const renderElement = (el: SceneElement) => {
    if (el.kind === 'element' && el.svgKey === 'textbox') {
      if (editingTextId === el.id) {
        return (
          <textarea
            autoFocus
            defaultValue={el.label}
            onBlur={(e) => {
              updateElement(el.id, { label: e.target.value });
              setEditingTextId(null);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="h-full w-full resize-none bg-transparent p-1 text-center text-[11px] text-slate-800 outline-none"
          />
        );
      }
      return (
        <span className="pointer-events-none px-1 text-center text-[11px] leading-tight text-slate-800">
          {el.label || 'Escriu aquí...'}
        </span>
      );
    }
    const iconDef = iconByKey(el.svgKey || '');
    if (!iconDef) return null;
    const Icon = iconDef.render;
    return <Icon className="h-full w-full" />;
  };

  const elementBg = (el: SceneElement) => {
    if (el.svgKey === 'textbox') return 'bg-yellow-50 ring-2 ring-yellow-400';
    return '';
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200">
        <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
        <button
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
        >
          <LucideIcons.ImagePlus size={16} /> Imatge de fons
        </button>
        {bgImage && (
          <button
            onClick={() => setBgImage(null)}
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            <LucideIcons.X size={16} /> Treure fons
          </button>
        )}
      </div>

      {/* Folder palette */}
      <div className="flex flex-col gap-1 rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200">
        {FOLDERS.map((folder) => (
          <div key={folder.name}>
            <button
              onClick={() => setOpenFolders((prev) => ({ ...prev, [folder.name]: !prev[folder.name] }))}
              className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {openFolders[folder.name] ? (
                <LucideIcons.ChevronDown size={16} className="text-slate-400" />
              ) : (
                <LucideIcons.ChevronRight size={16} className="text-slate-400" />
              )}
              {folder.name}
              <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                {folder.items.length}
              </span>
            </button>
            {openFolders[folder.name] && (
              <div className="grid grid-cols-3 gap-1.5 p-2 sm:grid-cols-4 md:grid-cols-6">
                {folder.items.map((item) => {
                  const Icon = item.render;
                  return (
                    <button
                      key={item.key}
                      onClick={() => addElement(item.key)}
                      title={item.label}
                      className="flex flex-col items-center gap-1 rounded-md border border-slate-200 bg-slate-50 p-2 hover:border-blue-400 hover:bg-white"
                    >
                      <div className="flex h-10 w-10 items-center justify-center">
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-[10px] leading-tight text-slate-600 text-center">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        onPointerDown={() => setSelectedId(null)}
        className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-xl bg-slate-100 shadow-inner ring-1 ring-slate-300"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
      >
        {bgImage ? (
          <img src={bgImage} alt="fons" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <div className="text-center">
              <LucideIcons.ImagePlus size={48} className="mx-auto mb-2" />
              <p className="text-sm">Puja una captura de Google Maps o altra imatge de fons</p>
            </div>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {elements.map((el) => {
          const selected = el.id === selectedId;
          return (
            <div
              key={el.id}
              onPointerDown={(e) => startMove(e, el)}
              className="absolute cursor-move select-none"
              style={{
                left: `${(el.x / CANVAS_W) * 100}%`,
                top: `${(el.y / CANVAS_H) * 100}%`,
                width: `${(el.width / CANVAS_W) * 100}%`,
                height: `${(el.height / CANVAS_H) * 100}%`,
                transform: `rotate(${el.rotation}deg)`,
                transformOrigin: 'center center',
              }}
            >
              <div
                className={`relative flex h-full w-full items-center justify-center rounded ${elementBg(el)} ${
                  selected ? 'ring-2 ring-blue-500' : 'ring-1 ring-transparent hover:ring-blue-300'
                }`}
              >
                {renderElement(el)}

                {selected && !editingTextId && (
                  <>
                    <div
                      onPointerDown={(e) => startRotate(e, el)}
                      className="absolute -top-7 left-1/2 -translate-x-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white p-1 shadow"
                    >
                      <LucideIcons.RotateCw size={12} className="text-blue-500" />
                    </div>
                    <div
                      onPointerDown={(e) => startResize(e, el)}
                      className="absolute -bottom-2 -right-2 h-4 w-4 cursor-nwse-resize rounded-full border-2 border-blue-500 bg-white shadow"
                    />
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => deleteElement(el.id)}
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow hover:bg-red-600"
                    >
                      <LucideIcons.X size={12} />
                    </button>
                    {el.svgKey === 'textbox' && (
                      <button
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={() => setEditingTextId(el.id)}
                        className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white shadow hover:bg-blue-600"
                      >
                        <LucideIcons.Pencil size={11} />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-slate-500">
        Consell: arrossega per moure · nansa superior per girar · cantonada inferior dreta per canviar mida · Supr per esborrar
      </p>
    </div>
  );
}
