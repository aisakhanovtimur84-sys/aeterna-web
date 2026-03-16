export type CapsuleItemType =
  | "text"
  | "image"
  | "video"
  | "audio"
  | "file";

export interface CapsuleItem {
  id: string;
  type: CapsuleItemType;
  filename?: string;
  size?: number;
  mimeType?: string;
  createdAt: string;
}
