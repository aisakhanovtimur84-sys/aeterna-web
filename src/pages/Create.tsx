import FileUploader from "../components/FileUploader";
import CapsuleItemList from "../components/CapsuleItemList";

export default function Create() {

  return (
    <div style={{ padding: 40 }}>

      <h1>Create Capsule</h1>

      <p>Add files to your capsule.</p>

      <FileUploader />

      <CapsuleItemList />

    </div>
  );
}
