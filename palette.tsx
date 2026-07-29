export type ElementKind =
  | 'vehicle'
  | 'sign'
  | 'element';

export interface SceneElement {
  id: string;
  kind: ElementKind;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  label?: string;
  subType?: string;
  svgKey?: string;
}

export interface ReportData {
  location: string;
  date: string;
  time: string;
  police: string;
  explanation: string;
  tip: string;
}
