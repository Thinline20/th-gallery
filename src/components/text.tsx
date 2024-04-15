import { For } from "solid-js";

export function Test() {
  const images = [
    "https://utfs.io/f/1dfe82d7-41af-4b84-b629-7920fff5f157-b7yawq.jpg",
    "https://utfs.io/f/17b10e89-5a52-4de3-b796-e147c33b6268-o3dk4t.jpg",
    "https://utfs.io/f/36e80713-aae4-45d4-9d0d-122469ca3fe1-nxso42.jpg",
    "https://utfs.io/f/3fec2c43-a91f-43aa-8672-5feb13a9758f-1f.jpg",
  ];

  return (
    <div class="flex flex-wrap gap-4">
      <For each={[...images, ...images, ...images]}>{(image) => <img class="w-48" src={image} />}</For>
    </div>
  );
}
