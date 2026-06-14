import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./scroll-to-top"), { ssr: false });

function ScrollToTopLazy() {
  return <ScrollToTop />;
}

export default ScrollToTopLazy;
