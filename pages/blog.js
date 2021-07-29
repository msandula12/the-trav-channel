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
          height={300}
          layout="responsive"
          priority={true}
          src={TentImg}
          title={attribution}
          width={300}
        />
      </div>
    </main>
  );
};

export default Blog;
