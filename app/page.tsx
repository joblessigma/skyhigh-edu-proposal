import { BackgroundScene } from '@/components/ui/BackgroundScene';
import { Hero } from '@/components/sections/Hero';
import { Challenge } from '@/components/sections/Challenge';
import { DualJourney } from '@/components/sections/DualJourney';
import { PlatformDemo } from '@/components/sections/PlatformDemo';
import { Methodology } from '@/components/sections/Methodology';
import { OceanProfile } from '@/components/sections/OceanProfile';
import { RiasecModel } from '@/components/sections/RiasecModel';
import { GardnerModel } from '@/components/sections/GardnerModel';
import { EqAssessment } from '@/components/sections/EqAssessment';
import { Reports } from '@/components/sections/Reports';
import { Pricing } from '@/components/sections/Pricing';
import { NextSteps } from '@/components/sections/NextSteps';

export default function Page() {
  return (
    <>
      <BackgroundScene />
      <main className="relative z-10 selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden">
        <Hero />
        <Challenge />
        <DualJourney />
        <PlatformDemo />
        <Methodology />
        <OceanProfile />
        <RiasecModel />
        <GardnerModel />
        <EqAssessment />
        <Reports />
        <Pricing />
        <NextSteps />
      </main>
    </>
  );
}
