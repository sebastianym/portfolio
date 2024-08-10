import { title } from "@/components/primitives";
import { EducationIcon } from "@/components/icons";

export default function Education() {
  return (
    <section className="flex flex-col justify-start gap-4 py-8 lg:mx-32 md:py-10">
      <div className="flex items-center gap-3">
        <EducationIcon />
        <h2 className={title({ size: "md" })}>Education</h2>
      </div>
      <ul className="mt-6 ps-4 pt-4">
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              Systems engineering
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl">
              Francisco Jose de Caldas District University
            </h4>
            <p className="text-sm lg:text-base">2021 - Present</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi atque quia hic ducimus velit accusantium non
              at, laborum asperiores fugiat optio numquam placeat consectetur
              natus totam quod! Libero, reiciendis.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              AWS Cloud Foundations
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl">AWS Academy</h4>
            <p className="text-sm lg:text-base">2024</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi atque quia hic ducimus velit accusantium non
              at, laborum asperiores fugiat optio numquam placeat consectetur
              natus totam quod! Libero, reiciendis.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              Complete Web Development with HTML5, CSS3, JS AJAX PHP and MySQL
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl">Udemy</h4>
            <p className="text-sm lg:text-base">2023 - 2024</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi atque quia hic ducimus velit accusantium non
              at, laborum asperiores fugiat optio numquam placeat consectetur
              natus totam quod! Libero, reiciendis.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              JavaScript programming language
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl">
              MinTIC and the Francisco José de Caldas District University
            </h4>
            <p className="text-sm lg:text-base">2024</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem commodi atque quia hic ducimus velit accusantium non
              at, laborum asperiores fugiat optio numquam placeat consectetur
              natus totam quod! Libero, reiciendis.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
