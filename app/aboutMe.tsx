import { title } from "@/components/primitives";
import { UserIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col justify-start gap-4 py-8 lg:mx-32 md:py-10">
      <div className="flex items-center gap-3">
        <UserIcon />
        <h2 className={title({ size: "md" })}>About Me</h2>
      </div>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2 mt-6 flex flex-col gap-3 text-xs lg:text-base order-2 sm:order-1">
          <p>
            I am a systems engineering student at the Francisco José de Caldas
            District University, I am passionate about web development and I am
            always looking to learn new things.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            corporis quisquam minus cupiditate error veniam quas cumque
            accusamus nesciunt magnam, fugiat possimus cum quidem impedit
            inventore quaerat sed vitae laborum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            corporis quisquam minus cupiditate error veniam quas cumque
            accusamus nesciunt magnam, fugiat possimus cum quidem impedit
            inventore quaerat sed vitae laborum!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            corporis quisquam minus cupiditate error veniam quas cumque
            accusamus nesciunt magnam, fugiat possimus cum quidem impedit
            inventore quaerat sed vitae laborum!
          </p>
        </div>
        <div className="order-1 sm:order-2">
          <Image
            isBlurred
            width={240}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            className="m-5 flex items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}
