import Link from 'next/link';
import Image from 'next/image';

const Banner6 = () => {
  return (
    <div className="banner-img wow fadeIn mb-45mb-lg-0 animated d-lg-block d-none">
      <div style={{ width: '100%' }}>
        <Image
          src="/assets/images/banner/banner-11.jpg"
          alt=""
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          width={600}
          height={687}
        />
      </div>
      <div className="banner-text">
        <span>Women Zone</span>
        <h4>
          Save 17% on <br />
          Office Dress
        </h4>
        <Link href="/index">
          Shop Now<i className="fi-rs-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Banner6;
