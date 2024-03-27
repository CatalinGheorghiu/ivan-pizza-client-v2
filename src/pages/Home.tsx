import { Link } from "react-router-dom";

import Search from "@/components/icons/Search.tsx";
import Layout from "@/components/layout/Layout.tsx";

const Home = () => {
  return (
    <Layout>
      <section className="flex h-full flex-col justify-center font-bold">
        <div className="max-w-72 md:max-w-96">
          <h2
            className="pb-2 tracking-[0.25rem] text-red-600 md:pb-4 md:text-xl md:tracking-[0.6rem]"
            style={{
              textShadow: "1px 1px 1px #000"
            }}
          >
            ARTISAN SINCE 1991
          </h2>
          <h1
            className="pb-12 text-5xl leading-[60px] md:text-7xl md:leading-[90px]"
            style={{ wordSpacing: "350px" }}
          >
            Traditional Italian Pizza
          </h1>
        </div>

        <Link to="/menu">
          <button className="flex w-full max-w-48 items-center gap-x-2 rounded-md bg-red-600 px-4 py-3">
            <Search />
            <span>Show Menu</span>
          </button>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
