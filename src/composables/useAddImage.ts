import { ref } from 'vue';

export function useAddImage(editor: any) {
  const addImage = () => {
    const url = window.prompt("Ingresar URL de la imagen");
    if (url) {
      editor.value.chain().focus().setImage({ src: url }).run();
    }
  };

  return { addImage };
}