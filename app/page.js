import { personalData } from '@/utils/data/personal-data';
import AboutSection from './components/homepage/about';
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
