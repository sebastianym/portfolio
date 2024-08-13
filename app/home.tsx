import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ size: "lg" })}>Hello, I&apos;m Sebastián</h1>
        <br />
        <p className="my-4"></p>
        <p className={title({ size: "cm" })}>Systems engineer student.&nbsp;</p>
        <p className={title({ color: "violet", size: "cm" })}>
          Web developer.&nbsp;
        </p>
        <p className={title({ color: "pink", size: "cm" })}>
          From Bogotá, Colombia.&nbsp;
        </p>
        <p className={title({ size: "cm" })}>
          Passionate about learning new things
        </p>
      </div>

      <div className="flex gap-3 my-2">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.linkedin}
        >
          Available to work
        </Link>
      </div>
    </section>
  );
}
