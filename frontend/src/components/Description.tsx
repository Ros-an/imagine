import { assets } from "../assets/assets";

function Description() {
  return (
    <section className="flex flex-col justify-center items-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold">Create AI Images</h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
      <article className="flex flex-col items-center md:gap-14 md:flex-row">
        <img
          src={assets.sample_img_1}
          alt="sample_img_1"
          className="w-80 xl:w-96 rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-medium max-w-lg text-gray-600">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-500">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-500">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don’t yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </article>
    </section>
  );
}

export default Description;
