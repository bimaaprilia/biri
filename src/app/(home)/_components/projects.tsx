import Image from 'next/image';
import Project from 'public/project.jpg';
import {
  PiCalendarCheckThin,
  PiTargetThin,
  PiWrenchThin,
} from 'react-icons/pi';

export function Projects() {
  return (
    <section id='projects' className='pb-24 pt-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-6 max-w-[570px] bg-[#800101] py-4 text-center text-5xl uppercase tracking-widest text-white'>
          PROJECTS
        </h2>
        <div className='mb-14'>
          <p className='text-center font-volkhov font-light italic'>
            Yadin ririh, enu liu pelajahin!
          </p>
          <p className='text-center font-volkhov font-light italic'>
            (Bali’s proverb: So many things to learn!)
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr,2fr,1fr]'>
          <div>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <PiCalendarCheckThin className='size-8 shrink-0' />{' '}
                <div className=''>
                  <h3 className='mb-2 text-lg font-medium uppercase tracking-wider text-[#be039f]'>
                    Completed Projects (2H2023)
                  </h3>
                  <ul className='list-outside list-[lower-roman] pl-4 font-light'>
                    <li>Land acquisition in Bali</li>
                    <li>
                      Obtained a formal registration number from the Indonesia
                      authority
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex gap-4'>
                <PiWrenchThin className='size-8 shrink-0' />{' '}
                <div className=''>
                  <h3 className='mb-2 text-lg font-medium uppercase tracking-wider text-[#be039f]'>
                    ON GOING PROJECTS (4Q2023 – 4Q2024)
                  </h3>
                  <ul className='list-outside list-[lower-roman] pl-4 font-light'>
                    <li>
                      Indonesia Law concerning Environment Translation Projects
                    </li>
                    <li>
                      Creating and Developing Master Programs in Electrical
                      Engineering Faculty of Engineering University of Indonesia
                      focus on Electric Vehicles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Project}
            alt=''
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='hidden h-auto w-full object-cover lg:block'
            quality={100}
          />
          <div>
            <div className='space-y-8'>
              <div className='flex gap-4'>
                <PiTargetThin className='size-8 shrink-0' />{' '}
                <div className=''>
                  <h3 className='mb-2 text-lg font-medium uppercase tracking-wider text-[#be039f]'>
                    2024
                  </h3>
                  <ul className='list-outside list-[lower-roman] pl-4 font-light'>
                    <li>
                      Building the Short Term, Mid Term, and Long Term Programs
                      for BiriWorld
                    </li>
                    <li>Partnership Development</li>
                    <li>
                      Comparative Analysis of UK Environment Act vs Indonesia
                      Environment Act (Research Paper)
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex gap-4'>
                <PiWrenchThin className='size-8 shrink-0' />{' '}
                <div className=''>
                  <h3 className='mb-2 text-lg font-medium uppercase tracking-wider text-[#be039f]'>
                    2025
                  </h3>
                  <ul className='list-outside list-[lower-roman] pl-4 font-light'>
                    <li>Building Infrastructure @ Bali Site</li>
                    <li>Acquisiton of Land in Semarang City (Old Town)</li>
                    <li>Indonesia Net Zero Emission 2060 Roadmap (Update)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
