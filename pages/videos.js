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
          src={BackpackImg}
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
