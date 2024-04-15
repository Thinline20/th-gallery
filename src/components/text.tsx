import { createResource, For } from "solid-js";
import { type Images } from "~/server/db/schema";

async function getData() {
  return await (await fetch("/api/images")).json();
}

export function Test() {
  const [images] = createResource<Images[]>(getData);

  return (
    <div class="flex flex-wrap gap-4">
      <For each={images()}>
        {(image) => (
          <div class="flex flex-col">
            <img class="w-48" src={image.url} />
            <div>{image.name}</div>
          </div>
        )}
      </For>
    </div>
  );
}
