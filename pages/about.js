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
          height={300}
          layout="responsive"
          priority={true}
          src={MountainImg}
          title={attribution}
          width={300}
        />
      </div>
    </main>
  );
};

export default About;
