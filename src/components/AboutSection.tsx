import Image from "next/image";
import Button from "./Button";
import LandingSection from "./LandingSection";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <LandingSection id="about" variant="plain">
      <div className="flex flex-col items-center">
        <SectionHeading underlineHoverClass="group-hover:w-36">
          About
        </SectionHeading>
        <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-md text-gray-700">
          <p className="text-xl md:text-2xl font-medium text-blue-950 mb-6">
            Welcome to my portfolio website.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <Image
              src="/images/Ian-2D.webp"
              alt="Ian Lee"
              width={100}
              height={100}
              className="rounded-full shrink-0 self-center sm:self-start"
            />
            <div className="text-lg leading-relaxed">
              <p className="mb-4">
                Web developer focused on building production-ready web applications,
                with strong experience in front-end development and hands-on experience
                across backend features such as authentication, APIs, and databases.
              </p>

              <p className="mb-4">
                I&apos;ve worked on real client and personal projects across the full development
                lifecycle — from designing responsive UIs and interactive experiences
                to implementing authentication, admin dashboards, and deployment.
              </p>

              <p>
                My background in game programming shapes how I approach UI development,
                with particular attention to interaction, performance, and usability.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row sm:flex-row gap-4 mt-8">
          <Button href="/projects" variant="outline">
            Projects
          </Button>
          <Button href="/blog" variant="outline">
            Blog
          </Button>
        </div>
      </div>
    </LandingSection>
  );
}
