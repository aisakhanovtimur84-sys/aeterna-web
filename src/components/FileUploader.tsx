import { useRef } from "react";
import { useCapsule } from "../context/CapsuleContext";
import { CapsuleItem } from "../types/capsule";

const MAX_FILES = 200;
const MAX_FILE_SIZE = 2 * 1024 * 1024 * 1024; // 2GB

export default function FileUploader() {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { items, addMediaItem } = useCapsule();

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const onFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return;

    if (items.length >= MAX_FILES) return;

    Array.from(e.target.files).forEach((file) => {

      if (file.size > MAX_FILE_SIZE) return;

      const type: CapsuleItem["type"] =
        file.type.startsWith("image/")
          ? "image"
          : file.type.startsWith("video/")
          ? "video"
          : file.type.startsWith("audio/")
          ? "audio"
          : "file";

      const item: CapsuleItem = {
        id: crypto.randomUUID(),
        type,
        filename: file.name,
        size: file.size,
        mimeType: file.type || "application/octet-stream",
        createdAt: new Date().toISOString(),
      };

      addMediaItem(item, file);

    });

    e.target.value = "";
  };

  return (
    <div style={{ marginTop: 30 }}>

      <button onClick={openFileDialog}>
        Add file to capsule
      </button>

      <input
        ref={fileInputRef}
        type="file"
        hidden
        multiple
        onChange={onFilesSelected}
      />

    </div>
  );
}
