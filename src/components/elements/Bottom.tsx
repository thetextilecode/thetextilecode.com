import Link from 'next/link';
import Image from 'next/image';

const Bottom = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <div className="banner-img wow fadeIn animated mb-md-4 mb-lg-0">
              <div style={{ width: '100%' }}>
                <Image
                  src="/assets/images/banner/banner-10.jpg"
                  alt=""
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  width={306}
                  height={372}
                />
              </div>
              <div className="banner-text">
                <span>Shoes Zone</span>
                <h4>
                  Save 17% on <br />
                  All Items
                </h4>
                <Link href="/products/shop-grid-right">
                  Shop Now<i className="fi-rs-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Deals & Outlet</h4>
            <div className="product-list-small wow fadeIn animated">
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-3.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Fish Print Patched T-shirt</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-4.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Vintage Floral Print Dress</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-5.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">
                      Multi-color Stripe Circle Print T-Shirt
                    </Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Top Selling</h4>
            <div className="product-list-small wow fadeIn animated">
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-6.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">
                      Geometric Printed Long Sleeve Blosue
                    </Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-7.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Print Patchwork Maxi Dress</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-8.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Daisy Floral Print Straps Jumpsuit</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">Hot Releases</h4>
            <div className="product-list-small wow fadeIn animated">
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-9.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Floral Print Casual Cotton Dress</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-1.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Ruffled Solid Long Sleeve Blouse</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
              <article className="row align-items-center">
                <figure className="col-md-4 mb-0">
                  <Link href="/products/shop-grid-right">
                    <Image
                      src="/assets/images/shop/thumbnail-2.jpg"
                      alt=""
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={600}
                      height={600}
                    />
                  </Link>
                </figure>
                <div className="col-md-8 mb-0">
                  <h4 className="title-small">
                    <Link href="/products/shop-grid-right">Multi-color Print V-neck T-Shirt</Link>
                  </h4>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
