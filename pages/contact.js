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
          src={BootImg}
          layout="responsive"
          width={300}
          height={300}
          title={attribution}
        />
      </div>
    </main>
  );
};

export default Contact;
