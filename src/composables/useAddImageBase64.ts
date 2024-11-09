import { ref } from 'vue';

export function useAddImageBase64(editor: any) {
  const addImageBase64 = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target?.result;
        editor.value.chain().focus().setImage({ src: dataURL }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  return { addImageBase64 };
}