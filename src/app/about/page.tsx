import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Rodrigo Silva and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
        My name is Rodrigo Silva and I am software developer. I started programming in 2021, at age 30, and
        Since then I created some websites and landing pages, login pages I have this on my github.{" "}
          <a
            href="https://github.com/rodhipolito?tab=repositories"
            className="text-primary hover:underline"
          >
            Github Link
          </a>
          .
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          share the things I learn with my linkedin.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a  web developer with knowledge in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
             I also have
              experience with Operational Support, SQL Server currently working with data ETL.
             I look for positions in development because that's where I identify myself.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://foodpagelanding.netlify.app/#home"
              className="text-primary hover:underline"
            >
              Food Landing Page
            </a>{" "}
            - Design visual
          </li>
          <li>
            <Link
              href="https://loginmodern.netlify.app/#"
              className="text-primary hover:underline"
            >
              Login Modern interactive
            </Link>{" "}
            - Login Page
          </li>
          <li>
            <Link
              href="https://catalogoflix.netlify.app/"
              className="text-primary hover:underline"
            >
              Clone Netflix React
            </Link>{" "}
            - Clone Netflix react
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
        In addition to programming, I love being with my family.
        We travel, we have great times together, we make up games.
        I also like to read and go out sometimes.
        I think having hobbies other than coding is important for mental health.
        </p>

        <Image
          src={bjj}
          alt="Family Foto"
          className="rounded-md"
        />
      </section>
    </section>
  );
}
