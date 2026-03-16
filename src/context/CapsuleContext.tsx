import { createContext, useContext, useState } from "react";
import { CapsuleItem } from "../types/capsule";

type CapsuleContextType = {
  items: CapsuleItem[];
  addMediaItem: (item: CapsuleItem, file: File) => void;
  removeItem: (id: string) => void;
  getMediaFile: (id: string) => File | undefined;
};

const CapsuleContext = createContext<CapsuleContextType | null>(null);

export const CapsuleProvider = ({ children }: { children: React.ReactNode }) => {

  const [items, setItems] = useState<CapsuleItem[]>([]);
  const [files, setFiles] = useState<Map<string, File>>(new Map());

  const addMediaItem = (item: CapsuleItem, file: File) => {

    setItems((prev) => [...prev, item]);

    setFiles((prev) => {
      const next = new Map(prev);
      next.set(item.id, file);
      return next;
    });
  };

  const removeItem = (id: string) => {

    setItems((prev) => prev.filter((i) => i.id !== id));

    setFiles((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  };

  const getMediaFile = (id: string) => {
    return files.get(id);
  };

  return (
    <CapsuleContext.Provider
      value={{
        items,
        addMediaItem,
        removeItem,
        getMediaFile,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
};

export const useCapsule = () => {
  const ctx = useContext(CapsuleContext);

  if (!ctx) {
    throw new Error("useCapsule must be used inside CapsuleProvider");
  }

  return ctx;
};
