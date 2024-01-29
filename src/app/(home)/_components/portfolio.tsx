import Image from 'next/image';
import Soaking from 'public/soaking.jpg';
import {
  PiAtomThin,
  PiBicycleThin,
  PiCirclesFourThin,
  PiDevicesThin,
  PiGearThin,
  PiLightbulbThin,
  PiPencilLineThin,
  PiWrenchThin,
} from 'react-icons/pi';

const portfolios = [
  {
    Icon: PiBicycleThin,
    title: 'ENVIRONMENTAL POLICY AND GOVERNANCE',
    desc: 'This project would examine the effectiveness and enforcement of environmental regulations and policies in Bali. It would assess the role of government agencies, NGOs, and communities in environmental governance and propose strategies for improving policy implementation and compliance.',
  },
  {
    Icon: PiLightbulbThin,
    title: 'WATER RESOURCE MANAGEMENT AND POLLUTION CONTROL',
    desc: "This research would investigate the current status of Bali's water resources, including rivers, lakes, and groundwater. It would assess the impacts of water pollution and develop strategies for sustainable water management, including water conservation practices and pollution control measures.",
  },
  {
    Icon: PiPencilLineThin,
    title: 'ENVIRONMENTAL EDUCATION AND AWARENESS',
    desc: 'This project would focus on raising awareness about environmental issues among local communities and tourists in Bali. It would assess the effectiveness of current environmental education initiatives and develop strategies to enhance environmental literacy and behavioral change.',
  },
  {
    Icon: PiGearThin,
    title: 'LAND USE PLANNING AND SUSTAINABLE DEVELOPMENT',
    desc: 'This research would analyze land use patterns in Bali and their impact on the environment. It would propose sustainable development strategies, including urban planning, agricultural practices, and infrastructure development, to minimize environmental degradation while supporting economic growth.',
  },
  {
    Icon: PiWrenchThin,
    title: 'RENEWABLE ENERGY ADOPTION AND ITS SOCIO-ENVIRONMENTAL IMPLICATIONS',
    desc: 'This project would evaluate the potential of renewable energy sources, such as solar and wind power, in Bali. It would assess the feasibility of transitioning to renewable energy and explore the social and environmental impacts of such a transition.',
  },
  {
    Icon: PiAtomThin,
    title: 'WASTE MANAGEMENT AND PLASTIC POLLUTION',
    desc: "This research project would focus on Bali's waste management practices and the pressing issue of plastic pollution. It would analyze the effectiveness of existing waste management systems, identify barriers to recycling, and propose solutions for reducing plastic waste.",
  },
  {
    Icon: PiDevicesThin,
    title:
      'SUPPORT THE WORLD HERITAGE CONVENTION PROGRAM: (PHASE 2 @ OLD CITY SEMARANG CENTRAL JAVA)',
    desc: "BiriWorld aims to support UNESCO program to protect and preserve the world's natural and cultural heritage. Under this convention, UNESCO designates and protects sites of outstanding universal value, both natural and cultural, around the world. These sites are considered important for the collective inheritance of humanity and should be protected for future generations.",
  },
  {
    Icon: PiCirclesFourThin,
    title:
      'WILDLIFE CONSERVATION AND PROTECTED AREA MANAGEMENT: (PHASE 3 @ CIBODAS WEST JAVA)',
    desc: 'This portfolio would assess the effectiveness of existing protected areas and wildlife conservation efforts in one of the mountains in West Java. It would identify threats to biodiversity, propose strategies for habitat restoration and wildlife conservation, and evaluate the socio-economic benefits of protected areas especially to the big cities around those mountains.',
  },
];

export default function Portfolio() {
  return (
    <section id='portfolio' className='py-16'>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-6 max-w-[570px] bg-[#800101] py-4 text-center text-5xl uppercase tracking-widest text-white'>
          Portfolio
        </h2>
        <div className='mb-14'>
          <p className='text-center font-volkhov font-light italic'>
            Sepuntul-puntul Besine, yen Sangih dadi Mangan!
          </p>
          <p className='text-center font-volkhov font-light italic'>
            (Bali proverb: Perseverance to achieve the Dream!).
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.title}
              className='flex flex-col items-center space-y-4'
            >
              <portfolio.Icon className='size-14' />
              <h3 className='text-center text-[1.125rem] font-semibold uppercase text-[#be039f]'>
                {portfolio.title}
              </h3>
              <p className='text-center text-foreground/60'>{portfolio.desc}</p>
            </div>
          ))}
        </div>

        <Image
          src={Soaking}
          alt='People soaking and praying'
          width='0'
          height='0'
          sizes='100vw'
          placeholder='blur'
          className='mx-auto my-24 w-full max-w-[710px] object-cover'
          quality={100}
        />

        <hr className='' />
      </div>
    </section>
  );
}
