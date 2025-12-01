import { title } from "@/components/primitives";
import { EducationIcon } from "@/components/icons";

export default function Education() {
  return (
    <section id="education" className="flex flex-col justify-start gap-4 py-8 lg:mx-32 md:py-10">
      <div className="flex items-center gap-3">
        <EducationIcon />
        <h2 className={title({ size: "md" })}>Education</h2>
      </div>
      <ul className="mt-6 pt-4">
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              Systems engineering
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl italic">
              Francisco Jose de Caldas District University
            </h4>
            <p className="text-sm lg:text-base italic">2021 - 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4 text-justify">
              In my training in Systems Engineering at the Francisco José de
              Caldas District University, I have acquired a solid foundation in
              fundamental principles of programming, data structures, algorithms
              and computer systems. Additionally, I have participated in
              collaborative projects and research that have enriched my
              practical and theoretical understanding of the field.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              AWS Cloud Foundations
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl italic">AWS Academy</h4>
            <p className="text-sm lg:text-base italic">2024</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4 text-justify">
              This AWS Academy course has given me a comprehensive understanding
              of the fundamental concepts and services of Amazon Web Services. I
              learned about cloud infrastructure, resource management, and cloud
              security principles. The course included hands-on practice with
              services such as EC2, S3 and RDS, preparing me to design and
              deploy efficient and scalable cloud solutions.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              Complete Web Development with HTML5, CSS3, JS, NodeJS and
              MySQL
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl italic">Udemy</h4>
            <p className="text-sm lg:text-base italic">2023</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4 text-justify">
              In this Udemy crash course, I delved into full-stack web
              development. I learned how to build dynamic web applications using
              HTML5, CSS3 and JavaScript, as well as how to integrate AJAX for a
              smooth user experience. Additionally, I gained skills in PHP and
              MySQL for backend development, allowing me to create complete
              systems from frontend to database management.
            </p>
          </div>
        </li>
        <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
          <div>
            <h3 className="text-lg font-bold lg:w-4/5 lg:text-2xl">
              JavaScript programming language
            </h3>
            <h4 className="font-semibold text-gray9 lg:text-xl italic">
              MinTIC and the Francisco José de Caldas District University
            </h4>
            <p className="text-sm lg:text-base italic">2024</p>
          </div>
          <div>
            <p className="text-sm text-gray7 lg:text-base dark:text-gray4 text-justify">
              This course offered covered everything from the fundamentals of
              the language to more advanced techniques such as asynchronous
              programming with Promises and Async/Await, as well as DOM
              manipulation and interactive application development. The course
              included hands-on projects that consolidated my skills in
              JavaScript and its use in modern web development.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
