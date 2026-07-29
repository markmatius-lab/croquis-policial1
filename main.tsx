import type { ComponentType, SVGProps } from 'react';

export interface SvgIconDef {
  key: string;
  label: string;
  category: 'vehicle' | 'sign' | 'element';
  defaultWidth: number;
  defaultHeight: number;
  viewBox: string;
  render: ComponentType<SVGProps<SVGSVGElement>>;
}

const S = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props} />
);

export const ICONS: SvgIconDef[] = [
  // ===== VEHICLES (top-down drone view) =====
  {
    key: 'car',
    label: 'Cotxe',
    category: 'vehicle',
    defaultWidth: 70,
    defaultHeight: 120,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Body */}
        <rect x="28" y="8" width="44" height="84" rx="14" fill="#3b82f6" stroke="#1e3a5f" strokeWidth="2" />
        {/* Windshield */}
        <path d="M32 22 Q50 14 68 22 L66 32 Q50 28 34 32 Z" fill="#bfdbf7" opacity="0.85" />
        {/* Rear window */}
        <path d="M34 72 Q50 76 66 72 L64 64 Q50 66 36 64 Z" fill="#bfdbf7" opacity="0.7" />
        {/* Roof */}
        <rect x="34" y="34" width="32" height="28" rx="4" fill="#2563eb" />
        {/* Side mirrors */}
        <rect x="24" y="28" width="6" height="4" rx="2" fill="#1e3a5f" />
        <rect x="70" y="28" width="6" height="4" rx="2" fill="#1e3a5f" />
        {/* Headlights */}
        <rect x="32" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        <rect x="62" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        {/* Taillights */}
        <rect x="32" y="87" width="6" height="3" rx="1" fill="#ef4444" />
        <rect x="62" y="87" width="6" height="3" rx="1" fill="#ef4444" />
      </svg>
    ),
  },
  {
    key: 'motorcycle',
    label: 'Moto',
    category: 'vehicle',
    defaultWidth: 40,
    defaultHeight: 100,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Wheels */}
        <ellipse cx="50" cy="14" rx="12" ry="6" fill="#1e293b" />
        <ellipse cx="50" cy="86" rx="12" ry="6" fill="#1e293b" />
        {/* Body */}
        <path d="M44 20 L56 20 L58 50 L56 80 L44 80 L42 50 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="1.5" />
        {/* Seat */}
        <rect x="44" y="55" width="12" height="20" rx="3" fill="#1e293b" />
        {/* Handlebar */}
        <rect x="40" y="18" width="20" height="4" rx="2" fill="#334155" />
        {/* Headlight */}
        <circle cx="50" cy="14" r="4" fill="#fef3c7" stroke="#1e293b" strokeWidth="1" />
      </svg>
    ),
  },
  {
    key: 'truck',
    label: 'Camió',
    category: 'vehicle',
    defaultWidth: 80,
    defaultHeight: 160,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Trailer */}
        <rect x="20" y="50" width="60" height="42" rx="4" fill="#475569" stroke="#1e293b" strokeWidth="2" />
        {/* Cab */}
        <rect x="28" y="8" width="44" height="40" rx="8" fill="#2563eb" stroke="#1e3a5f" strokeWidth="2" />
        {/* Windshield */}
        <path d="M32 16 Q50 12 68 16 L66 26 Q50 22 34 26 Z" fill="#bfdbf7" opacity="0.85" />
        {/* Roof */}
        <rect x="34" y="28" width="32" height="16" rx="3" fill="#1d4ed8" />
        {/* Headlights */}
        <rect x="32" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        <rect x="62" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        {/* Trailer lines */}
        <line x1="20" y1="60" x2="80" y2="60" stroke="#334155" strokeWidth="1" />
        <line x1="20" y1="80" x2="80" y2="80" stroke="#334155" strokeWidth="1" />
      </svg>
    ),
  },
  {
    key: 'bus',
    label: 'Autobús',
    category: 'vehicle',
    defaultWidth: 80,
    defaultHeight: 170,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="22" y="6" width="56" height="88" rx="10" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
        {/* Windshield */}
        <path d="M26 14 Q50 10 74 14 L72 22 Q50 18 28 22 Z" fill="#bfdbf7" opacity="0.85" />
        {/* Windows */}
        <rect x="28" y="30" width="44" height="8" rx="2" fill="#bfdbf7" opacity="0.7" />
        <rect x="28" y="44" width="44" height="8" rx="2" fill="#bfdbf7" opacity="0.7" />
        <rect x="28" y="58" width="44" height="8" rx="2" fill="#bfdbf7" opacity="0.7" />
        <rect x="28" y="72" width="44" height="8" rx="2" fill="#bfdbf7" opacity="0.7" />
        {/* Headlights */}
        <rect x="26" y="8" width="6" height="3" rx="1" fill="#fef3c7" />
        <rect x="68" y="8" width="6" height="3" rx="1" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    key: 'van',
    label: 'Furgoneta',
    category: 'vehicle',
    defaultWidth: 75,
    defaultHeight: 140,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="26" y="8" width="48" height="84" rx="10" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
        {/* Windshield */}
        <path d="M30 18 Q50 14 70 18 L68 28 Q50 24 32 28 Z" fill="#bfdbf7" opacity="0.85" />
        {/* Roof */}
        <rect x="32" y="30" width="36" height="30" rx="3" fill="#475569" />
        {/* Side windows */}
        <rect x="32" y="64" width="14" height="10" rx="2" fill="#bfdbf7" opacity="0.6" />
        <rect x="54" y="64" width="14" height="10" rx="2" fill="#bfdbf7" opacity="0.6" />
        {/* Headlights */}
        <rect x="30" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        <rect x="64" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    key: 'bicycle',
    label: 'Bicicleta',
    category: 'vehicle',
    defaultWidth: 35,
    defaultHeight: 80,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Wheels */}
        <ellipse cx="50" cy="18" rx="10" ry="5" fill="none" stroke="#1e293b" strokeWidth="2.5" />
        <ellipse cx="50" cy="82" rx="10" ry="5" fill="none" stroke="#1e293b" strokeWidth="2.5" />
        {/* Frame */}
        <line x1="50" y1="18" x2="50" y2="82" stroke="#16a34a" strokeWidth="2.5" />
        {/* Seat */}
        <rect x="46" y="74" width="8" height="4" rx="2" fill="#1e293b" />
        {/* Handlebar */}
        <rect x="42" y="14" width="16" height="3" rx="1.5" fill="#334155" />
      </svg>
    ),
  },
  {
    key: 'vmp',
    label: 'VMP',
    category: 'vehicle',
    defaultWidth: 70,
    defaultHeight: 120,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="28" y="8" width="44" height="84" rx="14" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
        <path d="M32 22 Q50 14 68 22 L66 32 Q50 28 34 32 Z" fill="#bfdbf7" opacity="0.85" />
        <path d="M34 72 Q50 76 66 72 L64 64 Q50 66 36 64 Z" fill="#bfdbf7" opacity="0.7" />
        <rect x="34" y="34" width="32" height="28" rx="4" fill="#b91c1c" />
        {/* VMP label */}
        <text x="50" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">VMP</text>
        <rect x="24" y="28" width="6" height="4" rx="2" fill="#7f1d1d" />
        <rect x="70" y="28" width="6" height="4" rx="2" fill="#7f1d1d" />
        <rect x="32" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
        <rect x="62" y="10" width="6" height="3" rx="1" fill="#fef3c7" />
      </svg>
    ),
  },

  // ===== SIGNS (flat, colored, RGC) =====
  {
    key: 'sign_stop',
    label: 'Stop',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="#dc2626" stroke="#fff" strokeWidth="4" />
        <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="58" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white" fontFamily="Arial">STOP</text>
      </svg>
    ),
  },
  {
    key: 'sign_yield',
    label: 'Cedeix el pas',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,12 88,82 12,82" fill="white" stroke="#dc2626" strokeWidth="8" strokeLinejoin="round" />
        <polygon points="50,12 88,82 12,82" fill="none" stroke="#1e293b" strokeWidth="1" />
      </svg>
    ),
  },
  {
    key: 'sign_priority',
    label: 'Prioritat',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,10 90,50 50,90 10,50" fill="white" stroke="#1e293b" strokeWidth="1.5" />
        <polygon points="50,22 78,50 50,78 22,50" fill="#fbbf24" stroke="#1e293b" strokeWidth="1" />
      </svg>
    ),
  },
  {
    key: 'sign_no_entry',
    label: 'Entrada prohibida',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#dc2626" stroke="#fff" strokeWidth="4" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <rect x="20" y="44" width="60" height="12" rx="2" fill="white" />
      </svg>
    ),
  },
  {
    key: 'sign_no_parking',
    label: 'Prohibit aparcar',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="Arial">E</text>
        <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="6" />
      </svg>
    ),
  },
  {
    key: 'sign_no_stopping',
    label: 'Prohibit aturar-se',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#dc2626" strokeWidth="4" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="Arial">E</text>
        <line x1="20" y1="28" x2="80" y2="72" stroke="#dc2626" strokeWidth="5" />
        <line x1="80" y1="28" x2="20" y2="72" stroke="#dc2626" strokeWidth="5" />
      </svg>
    ),
  },
  {
    key: 'sign_max50',
    label: 'Màx. 50',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="white" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1e293b" fontFamily="Arial">50</text>
      </svg>
    ),
  },
  {
    key: 'sign_max60',
    label: 'Màx. 60',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="white" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1e293b" fontFamily="Arial">60</text>
      </svg>
    ),
  },
  {
    key: 'sign_max80',
    label: 'Màx. 80',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="white" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1e293b" fontFamily="Arial">80</text>
      </svg>
    ),
  },
  {
    key: 'sign_max100',
    label: 'Màx. 100',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="white" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="60" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e293b" fontFamily="Arial">100</text>
      </svg>
    ),
  },
  {
    key: 'sign_max120',
    label: 'Màx. 120',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="white" stroke="#dc2626" strokeWidth="6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="60" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e293b" fontFamily="Arial">120</text>
      </svg>
    ),
  },
  {
    key: 'sign_warning_curve_left',
    label: 'Corba perillosa',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <path d="M62 64 Q62 48 42 48 L42 36 Q62 36 72 56" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_crossroad',
    label: 'Encreuament',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <line x1="50" y1="35" x2="50" y2="70" stroke="#1e293b" strokeWidth="4" />
        <line x1="35" y1="52" x2="65" y2="52" stroke="#1e293b" strokeWidth="4" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_pedestrian',
    label: 'Pas de vianants',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="50" cy="38" r="5" fill="#1e293b" />
        <path d="M50 44 L50 58 M42 52 L58 52 M50 58 L44 70 M50 58 L56 70" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_children',
    label: 'Pas d\'escolars',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="42" cy="40" r="4" fill="#1e293b" />
        <circle cx="58" cy="40" r="4" fill="#1e293b" />
        <path d="M42 46 L42 62 M38 54 L46 54 M42 62 L38 72 M42 62 L46 72" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M58 46 L58 62 M54 54 L62 54 M58 62 L54 72 M58 62 L62 72" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_slippery',
    label: 'Paviment relliscós',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <path d="M35 50 Q45 40 55 50 Q65 60 72 52" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        <rect x="30" y="62" width="40" height="6" rx="2" fill="#1e293b" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_roadwork',
    label: 'Obres',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <path d="M38 70 L38 40 L48 40 L48 70" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M55 70 L55 35 L65 35 L65 70" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        <line x1="34" y1="44" x2="68" y2="44" stroke="#1e293b" strokeWidth="2" strokeDasharray="3,2" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_traffic_light',
    label: 'Semàfor',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <rect x="42" y="30" width="16" height="36" rx="3" fill="#1e293b" />
        <circle cx="50" cy="38" r="4" fill="#ef4444" />
        <circle cx="50" cy="48" r="4" fill="#fbbf24" />
        <circle cx="50" cy="58" r="4" fill="#22c55e" />
      </svg>
    ),
  },
  {
    key: 'sign_warning_roundabout',
    label: 'Rotonda',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,8 88,80 12,80" fill="#fbbf24" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="#1e293b" strokeWidth="3" />
        <path d="M50 36 L50 28 M50 64 L50 72 M36 50 L28 50 M64 50 L72 50" stroke="#1e293b" strokeWidth="3" />
        <path d="M44 44 L56 56 M56 44 L44 56" stroke="#1e293b" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: 'sign_mandatory_straight',
    label: 'Recte obligatori',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M50 28 L50 68 M42 38 L50 28 L58 38" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'sign_mandatory_right',
    label: 'Gir dret obligatori',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M28 50 L68 50 M58 42 L68 50 L58 58" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'sign_mandatory_left',
    label: 'Gir esquerre obligatori',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M72 50 L32 50 M42 42 L32 50 L42 58" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'sign_mandatory_roundabout',
    label: 'Rotonda obligatòria',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M50 30 Q70 30 70 50 Q70 70 50 70 Q30 70 30 50 Q30 30 50 30" fill="none" stroke="white" strokeWidth="4" />
        <path d="M56 26 L50 30 L56 34" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'sign_parking',
    label: 'Aparcament permès',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <text x="50" y="62" textAnchor="middle" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial">P</text>
      </svg>
    ),
  },
  {
    key: 'sign_pedestrian_crossing',
    label: 'Pas de vianants (blau)',
    category: 'sign',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,10 85,75 15,75" fill="#1d4ed8" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="50,10 85,75 15,75" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <circle cx="50" cy="35" r="4" fill="white" />
        <path d="M50 41 L50 55 M44 48 L56 48 M50 55 L45 68 M50 55 L55 68" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    key: 'sign_cone',
    label: 'Con de trànsit',
    category: 'sign',
    defaultWidth: 40,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,10 70,80 30,80" fill="#f97316" stroke="#1e293b" strokeWidth="1.5" />
        <rect x="22" y="80" width="56" height="8" rx="2" fill="#f97316" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M38 38 L62 38 M34 52 L66 52" stroke="white" strokeWidth="4" />
      </svg>
    ),
  },

  // ===== ELEMENTS (top-down drone view) =====
  {
    key: 'fire',
    label: 'Foc',
    category: 'element',
    defaultWidth: 60,
    defaultHeight: 60,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M50 12 C58 30 72 38 68 58 C66 72 58 82 50 82 C42 82 34 72 32 58 C28 38 42 30 50 12 Z" fill="#f97316" stroke="#dc2626" strokeWidth="2" />
        <path d="M50 30 C55 42 62 48 60 60 C58 70 54 76 50 76 C46 76 42 70 40 60 C38 48 45 42 50 30 Z" fill="#fbbf24" />
        <path d="M50 48 C53 54 56 58 55 65 C54 72 52 75 50 75 C48 75 46 72 45 65 C44 58 47 54 50 48 Z" fill="#fef3c7" />
      </svg>
    ),
  },
  {
    key: 'tree_pine',
    label: 'Pi',
    category: 'element',
    defaultWidth: 60,
    defaultHeight: 60,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#15803d" stroke="#14532d" strokeWidth="2" />
        <circle cx="50" cy="50" r="28" fill="#16a34a" />
        <circle cx="50" cy="50" r="16" fill="#22c55e" />
        <circle cx="42" cy="42" r="5" fill="#4ade80" opacity="0.6" />
      </svg>
    ),
  },
  {
    key: 'tree_leaf',
    label: 'Arbre',
    category: 'element',
    defaultWidth: 60,
    defaultHeight: 60,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" fill="#22c55e" />
        <circle cx="40" cy="40" r="8" fill="#4ade80" opacity="0.5" />
        <circle cx="62" cy="55" r="6" fill="#4ade80" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'collision_x',
    label: 'Col·lisió (X)',
    category: 'element',
    defaultWidth: 56,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="38" fill="#fef2f2" stroke="#dc2626" strokeWidth="3" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
        <line x1="75" y1="25" x2="25" y2="75" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'textbox',
    label: 'Quadre de text',
    category: 'element',
    defaultWidth: 140,
    defaultHeight: 56,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="5" y="20" width="90" height="60" rx="4" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
        <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#1e293b" fontFamily="Arial">Text</text>
      </svg>
    ),
  },
  {
    key: 'person',
    label: 'Vianant',
    category: 'element',
    defaultWidth: 30,
    defaultHeight: 30,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="42" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
        <circle cx="50" cy="38" r="8" fill="#475569" />
        <path d="M50 48 L50 68 M42 56 L58 56 M50 68 L44 80 M50 68 L56 80" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    key: 'arrow',
    label: 'Fletxa de direcció',
    category: 'element',
    defaultWidth: 80,
    defaultHeight: 30,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 50 L70 50 M55 35 L70 50 L55 65" stroke="#dc2626" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'traffic_light',
    label: 'Semàfor',
    category: 'element',
    defaultWidth: 30,
    defaultHeight: 60,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="30" y="10" width="40" height="80" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <circle cx="50" cy="28" r="10" fill="#ef4444" />
        <circle cx="50" cy="50" r="10" fill="#fbbf24" />
        <circle cx="50" cy="72" r="10" fill="#22c55e" />
      </svg>
    ),
  },
  {
    key: 'barrier',
    label: 'Barrera',
    category: 'element',
    defaultWidth: 100,
    defaultHeight: 24,
    viewBox: '0 0 100 100',
    render: (props) => (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="5" y="35" width="90" height="30" rx="3" fill="#f97316" stroke="#1e293b" strokeWidth="2" />
        <line x1="15" y1="35" x2="15" y2="65" stroke="#1e293b" strokeWidth="2" />
        <line x1="30" y1="35" x2="30" y2="65" stroke="white" strokeWidth="3" />
        <line x1="50" y1="35" x2="50" y2="65" stroke="#1e293b" strokeWidth="2" />
        <line x1="70" y1="35" x2="70" y2="65" stroke="white" strokeWidth="3" />
        <line x1="85" y1="35" x2="85" y2="65" stroke="#1e293b" strokeWidth="2" />
      </svg>
    ),
  },
];

export function iconByKey(key: string): SvgIconDef | undefined {
  return ICONS.find((i) => i.key === key);
}

void S;
