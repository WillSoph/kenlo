import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('shop/catalog'), { ssr: false});
 
export default Page;