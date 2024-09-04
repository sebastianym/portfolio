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
        <div className="sm:col-span-2 mt-6 flex flex-col gap-3 text-sm lg:text-base order-2 sm:order-1 text-justify">
          <p>
            I am a Systems Engineering student at the Francisco José de Caldas
            District University. Since the beginning of my academic career, I
            have discovered a great passion for web development and the world of
            technology.
          </p>
          <p>
            Throughout my studies, I have acquired skills in both frontend and
            backend development, which allows me to approach projects
            comprehensively. I am comfortable working with technologies such as
            HTML, CSS, JavaScript, and modern frameworks such as React for the
            frontend, as well as Node.js for the backend. Additionally, I have
            experience in managing relational databases, which allows me to
            efficiently design and manage data storage.
          </p>
          <p>
            I strive to stay up to date with the latest trends and technologies,
            and am always looking to learn and adapt to new tools and
            methodologies. I am excited about the opportunities ahead and am
            committed to continuing to learn and develop in this dynamic field.
            If you have a project in mind or just want to connect, don&apos;t
            hesitate to contact me.
          </p>
        </div>
        <div className="order-1 sm:order-2 flex items-center justify-center">
          <Image
            isBlurred
            width={240}
            src="https://avatars.githubusercontent.com/u/125759356?v=4"
            className="sm:m-5 flex items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}
