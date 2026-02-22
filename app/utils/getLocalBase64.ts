import { getPlaiceholder } from "plaiceholder";

async function getBase64(ImgUrl: string): Promise<base64> {
  try {
    const res = await fetch(ImgUrl , {
      // cache:"no-cache"
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const buffer = await res.arrayBuffer();

    const { base64, metadata } = await getPlaiceholder(Buffer.from(buffer));
    
    // const width = metadata.width;
    // const height = metadata.height;
    const width = 540;
    const height = 540;

    // console.log("width", width);
    // console.log("height", height);

    const metaSized: base64 = { base64, metadata: { width, height } };

    return metaSized;
  } catch (err) {
    console.log(err);

    return { base64: "", metadata: { width: 0, height: 0 } };
  }
}

export default async function addBlurredDataUrls(
  images: Array<string>
): Promise<base64[]> {
  const promises = images.map((image) => getBase64(image));
  const data = await Promise.all(promises);

  return data;
}
