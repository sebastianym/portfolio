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
            Software developer with a strong background in systems engineering,
            currently in the final stages of my degree at Francisco José de
            Caldas District University. I specialize in front-end development,
            designing dynamic, user-friendly, and responsive web applications.
          </p>
          <p>
            My expertise lies in building intuitive interfaces using JavaScript,
            React, HTML, CSS, and modern front-end frameworks, with a solid
            understanding of SPA principles, REST APIs, and web performance
            optimization. Additionally, I have experience in fullstack
            development, including server-side technologies such as NodeJS, as
            well as database management.
          </p>
          <p>
            I am passionate about creating seamless user experiences, writing
            clean and maintainable code, and continuously improving my skills to
            stay at the forefront of web technologies.
          </p>
        </div>
        <div className="order-1 sm:order-2 flex items-center justify-center">
          <Image
            isBlurred
            width={240}
            src="https://media.licdn.com/dms/image/v2/D5603AQEvnNvrGNJWiQ/profile-displayphoto-crop_800_800/B56ZmeCDozH8BI-/0/1759292964394?e=1766016000&v=beta&t=1oJwDuq_bUCa0FwqP_DVW7G0MyU3rtK6ITxz2NSehbM"
            className="sm:m-5 flex items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}
