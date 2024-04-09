import { ChangeEvent, useState } from "react";

import { generateImageUrl, uploadImageToCloudinary } from "@/utils";

export type ImagePreviewUploadProps = {
  initialValue?: string; // Initial image URL (optional)
  onUploadSuccess?: (imageUrl: string) => void; // Callback after successful upload
};

export const useImagePreviewUpload = ({
  initialValue = "",
  onUploadSuccess
}: ImagePreviewUploadProps) => {
  const [previewSource, setPreviewSource] = useState(initialValue);
  const [uploadUrl, setUploadUrl] = useState("");
  const [loadingPreviewImg, setLoadingPreviewImg] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length === 1) {
      setLoadingPreviewImg(true);

      try {
        const file = files[0];
        const imgUrl = await generateImageUrl(file);
        const uploadData = await uploadImageToCloudinary(file);

        setPreviewSource(imgUrl);
        setUploadUrl(uploadData.secure_url);

        if (onUploadSuccess) {
          onUploadSuccess(uploadData.secure_url);
        }
      } catch (error) {
        console.error(error);
        // Display user-friendly error message
      } finally {
        setLoadingPreviewImg(false);
      }
    }
  };

  return {
    previewSource,
    uploadUrl,
    loadingPreviewImg,
    handleFileChange
  };
};
