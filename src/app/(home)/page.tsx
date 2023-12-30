import { TeachersDeck, About, Events, Hero } from "./_components";
import { teachers } from "@/utils/constant";

export default function Home() {
  return (
    <main className="max-w-full space-y-[100px]">
      <div className="flex flex-col">
        <Hero />
        sfuijhihio

        <About />
      </div>
      <Events />
      {teachers.map((value, index) => (
        <TeachersDeck value={value} key={index} />
      ))}
      {/* <SponsorPage /> */}
    </main>
  );
}
