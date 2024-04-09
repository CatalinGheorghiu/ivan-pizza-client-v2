export function getCurrentDate() {
  return new Date().getFullYear();
}

export function splitForUrl(name: string) {
  return name.toLowerCase().split(" ").join("-");
}

export function joinByComma(array: string[]) {
  return array.join(", ");
}

export function getElementInArray(array: string[], item: string) {
  return array.find((element) => element === item);
}

export function isInArray(array: string[], item: string) {
  return array.includes(item);
}

export async function generateImageUrl(file: File): Promise<string> {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // No additional check or empty string return needed
  return await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result as string); // Type assertion not needed
    reader.onerror = reject;
  });
}

export async function uploadImageToCloudinary(file: File) {
  const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`;
  const formData = new FormData();

  formData.append(
    "upload_preset",
    `${import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET}`
  );
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  return await response.json();
}
