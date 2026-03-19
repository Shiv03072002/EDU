import Image from "next/image";
import Hero from '@/components/home/Hero'
import InsideStudyhubSection from '@/components/home/InsideStudyhubSection'
import StudyMaterialSection from '@/components/home/StudyMaterialSection'
import PromoteSection from '@/components/home/Promotesection'
import StartPreparing from '@/components/home/StartPreparing'
import ArticlesSection from '@/components/home/ArticlesSection'
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <InsideStudyhubSection/>
      <StudyMaterialSection/>
      <StartPreparing/>
      <ArticlesSection/>
      <PromoteSection/>
    </div>
  );
}
