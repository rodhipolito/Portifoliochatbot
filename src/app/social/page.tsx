import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
        I don't use many social networks, I have LinkedIn, Github because that's where I develop my skills and abilities
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/rodhipolito"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rodrigo-hipolito1/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
 

      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project please contact me via email at{" "}
          <a
            href="mailto:rodrigohsilvaa@gmail.com"
            className="text-primary hover:underline"
          >
            rodrigohsilvaa@gmail.com
          </a>
        </p>
        
        <p>
          I&apos;ve worked with many different companies in the past, including{" "}
          <a
            href="https://www.knower.pt/"
            className="text-primary hover:underline"
          >
            Knower Projects
          </a>,{" "}
          <a
            href="https://www.cedis.pt/"
            className="text-primary hover:underline"
          >
            Cedis
          </a>
          ,{" "}
          <a href="https://www.as2group.com.br/" className="text-primary hover:underline">
            A2S GROUP
          </a>
          ,{" "}
          <a
            href="https://algartech.com/"
            className="text-primary hover:underline"
          >
            AlgarTech
          </a>
          {" "}
          
          and others.
        </p>
      </section>
    </section>
  );
}
