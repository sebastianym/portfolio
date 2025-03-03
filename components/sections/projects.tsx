import { title } from "@/components/primitives";
import { DevIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon, LinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start gap-4 py-8 lg:mx-32 md:py-10"
    >
      <div className="flex items-center gap-3 my-2">
        <DevIcon />
        <h2 className={title({ size: "md" })}>Projects</h2>
      </div>
      <ul className="mt-8 flex w-full flex-col">
        <li className="mb-16 grid grid-cols-1 last:mb-0 lg:grid-cols-2 lg:gap-6">
          <Image
            className="scale-105"
            isZoomed
            alt="Project 1"
            src="/images/ProjectTaskManager.png"
          />
          <div>
            <h3 className="text-2xl font-bold sm:text-4xl lg:mt-0 mt-5">
              Task Manager
            </h3>
            <p className="mt-2 text-sm text-gray7 text-justify">
              This web application is designed to help you manage your daily
              tasks efficiently. It allows you to easily create, edit, and
              delete tasks, as well as mark each one as complete when you finish
              it. It uses a PostgreSQL database and a simple REST API, ensuring
              that your data is always persistent and up-to-date. This way, you
              can access your to-do list at any time and keep track of your
              progress.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                isExternal
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "bordered",
                })}
                href={siteConfig.links.githubTaskManager}
              >
                <GithubIcon />
                <span className="font-medium">Code</span>
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "bordered",
                })}
                href={siteConfig.links.netlifyTaskManager}
              >
                <LinkIcon />
                <span className="font-medium">Demo</span>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
