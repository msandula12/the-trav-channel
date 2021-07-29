import Image from 'next/image';

import BackpackImg from '../assets/images/backpack.png';

const Blog = () => {
  const attribution =
    'Backpack illustration courtesy of Réka (@reka.sch on Instagram) on Skribbl';

  return (
    <main className="centered">
      <div className="image-wrapper zoom-in">
        <Image
          alt={attribution}
          height={300}
          layout="responsive"
          priority={true}
          src={BackpackImg}
          title={attribution}
          width={300}
        />
      </div>
    </main>
  );
};

export default Blog;
