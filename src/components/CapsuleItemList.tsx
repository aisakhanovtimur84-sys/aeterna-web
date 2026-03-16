import { useCapsule } from "../context/CapsuleContext";

export default function CapsuleItemList() {

  const { items, removeItem } = useCapsule();

  if (items.length === 0) {
    return (
      <p style={{ marginTop: 20 }}>
        Capsule is empty
      </p>
    );
  }

  return (
    <div style={{ marginTop: 30 }}>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >

          <div>
            <strong>{item.filename || "Letter"}</strong>
            <div style={{ fontSize: 12 }}>
              {item.size ? `${(item.size / (1024 * 1024)).toFixed(1)} MB` : ""}
            </div>
          </div>

          <button onClick={() => removeItem(item.id)}>
            remove
          </button>

        </div>
      ))}

    </div>
  );
}
