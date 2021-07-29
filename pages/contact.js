import Image from 'next/image';

import BootImg from '../assets/images/boot.png';

const Contact = () => {
  const attribution =
    'Boot illustration courtesy of Réka (@reka.sch on Instagram) on Skribbl';

  return (
    <main className="centered">
      <div className="image-wrapper zoom-in">
        <Image
          alt={attribution}
          height={300}
          layout="responsive"
          priority={true}
          src={BootImg}
          title={attribution}
          width={300}
        />
      </div>
    </main>
  );
};

export default Contact;
