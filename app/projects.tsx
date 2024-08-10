import { title } from "@/components/primitives";
import { DevIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon, LinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section className="flex flex-col justify-start gap-4 py-8 lg:mx-32 md:py-10">
      <div className="flex items-center gap-3 my-2">
        <DevIcon />
        <h2 className={title({ size: "md" })}>Projects</h2>
      </div>
      <ul className="mt-8 flex w-full flex-col">
        <li className="mb-16 grid grid-cols-1 last:mb-0 lg:grid-cols-2 lg:gap-6">
          <Image
            isZoomed
            height={248}
            width={441}
            alt="Project 1"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <div>
            <h3 className="text-2xl font-bold sm:text-4xl lg:mt-0 mt-5">Proyecto 1</h3>
            <p className="mt-2 text-sm text-gray7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae accusamus deleniti illum sapiente dolor aliquid neque
              magnam dignissimos aperiam nobis ab odit magni, molestias dolorum
              saepe quisquam harum sed debitis?
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                isExternal
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "bordered",
                })}
                href={siteConfig.links.github}
              >
                <GithubIcon/>
                <span className="font-medium">Code</span>
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "bordered",
                })}
                href={siteConfig.links.github}
              >
                <LinkIcon/>
                <span className="font-medium">Demo</span>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
