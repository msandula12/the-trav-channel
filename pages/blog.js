import Image from 'next/image';

import TentImg from '../assets/images/tent.png';

const Blog = () => {
  const attribution =
    'Tent illustration courtesy of Réka (@reka.sch on Instagram) on Skribbl';

  return (
    <main className="centered">
      <div className="image-wrapper zoom-in">
        <Image
          alt={attribution}
          src={TentImg}
          layout="responsive"
          width={300}
          height={300}
          title={attribution}
        />
      </div>
    </main>
  );
};

export default Blog;
