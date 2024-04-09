import { ChangeEvent } from "react";

import Loading from "@/components/Loading.tsx";
import Input from "@/components/ui/Input.tsx";

type InputFileWithPreviewProps = {
  previewSource: string;
  loadingPreviewImg: boolean;
  error?: string;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

const InputFileWithPreview = ({
  previewSource,
  error,
  loadingPreviewImg,
  handleFileChange
}: InputFileWithPreviewProps) => {
  return (
    <div className="flex w-full flex-col">
      <Input
        type="file"
        name="image"
        error={error}
        onChange={handleFileChange}
        placeholder="Image"
        label="Image"
        accept="image/*"
      />

      {loadingPreviewImg && <Loading />}

      {previewSource && (
        <img
          className="w-full"
          src={previewSource}
          alt="Pizza image"
          width={200}
          height={200}
        />
      )}
    </div>
  );
};

export default InputFileWithPreview;
