import Link from 'next/link';
import { ReactNode } from 'react';

export interface IBreadcrumb {
  noBreadcrumb?: any,
  parent?: ReactNode;
  sub?: string;
  subChild?: string;
}

const Breadcrumb = ({ parent, sub, subChild, noBreadcrumb }: IBreadcrumb) => {
  return (
    <div className={`page-header breadcrumb-wrap ${noBreadcrumb}`}>
      <div className='container'>
        <div className='breadcrumb'>
          <Link href='/'>

            {parent}

          </Link>
          {sub && (<><span></span> {sub}</>)}
          {subChild && (<><span></span> {subChild}</>)}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
