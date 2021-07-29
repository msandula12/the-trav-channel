import Image from 'next/image';

import MountainImg from '../assets/images/mountain.png';

const About = () => {
  const attribution =
    'Mountain illustration courtesy of Réka (@reka.sch on Instagram) on Skribbl';

  return (
    <main className="centered">
      <div className="image-wrapper zoom-in">
        <Image
          alt={attribution}
          src={MountainImg}
          layout="responsive"
          width={300}
          height={300}
          title={attribution}
        />
      </div>
    </main>
  );
};

export default About;
