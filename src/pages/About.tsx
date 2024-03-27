import Layout from "@/components/layout/Layout.tsx";

const About = () => {
  return (
    <Layout>
      <section className="relative mx-auto my-12 h-full max-w-screen-md rounded-xl bg-white/60 p-6 text-slate-900 md:p-8">
        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2">
          <img
            className="rounded-full"
            src="https://res.cloudinary.com/catalin/image/upload/v1613121691/dev_setup/l8kapry9bolr5h5myztc.jpg"
            alt="Ivan Profile Image"
            width={100}
            height={100}
          />
        </div>

        <div className="pt-16">
          <h1 className="text-center text-2xl font-semibold">
            About the <span className="text-red-600">MASTER</span> behind the
            scenes
          </h1>
          <h2 className="py-4 text-center font-bold italic">
            Ivan Maximiliano Saldano
          </h2>

          <article className="space-y-6 leading-7">
            <p>
              Ivan is a highly motivated and committed professional with a
              proven record of generating and building relationships and hard
              work. A team player but he also has the ability to work
              independently. He is skilled and adaptable, able to overcome
              pressure and deliver quality work. He was born in Argentina,
              raised in Chile and currently living in South Korea.
            </p>

            <p>
              He is a business magnate, industrial designer, adn engineer.He is
              the founder, CEO, CTO, and chief designer of SpaceX; early
              investor, CEO, and product architect of Tesla, Inc., founder of
              The Boring Company, co-founder of Neuralink and co-founder and
              initial co-chairman of OpenAI. A centibillionaire, Ivan is one of
              the richest people in the world.
            </p>

            <p>
              Ivan was born to a Canadian mother and South African father and
              raised in Pretoria, South Africa. He briefly attended the
              University of Pretoria before moving to Canada aged 17 to attend
              Queen&apos;s University. He transferred to the University of
              Pennsylvania two years later, where he received dual
              bachelor&apos;s degrees in economics and physics. He moved to
              California in 1995 to attend Stanford University but decided
              instead to pursue a business career, co-founding web software
              company Zip2 with his brother Kimbal. The start-up was acquired by
              Compaq for $307 million in 1999. Ivan co-founded online bank X.com
              that same year, which merged with Confinity in 2000 to form the
              company PayPal and was subsequently bought by eBay in 2002 for
              $1.5 billion.
            </p>

            <p>
              In 2002, Ivan founded SpaceX, an aerospace manufacturer and space
              transport services company, of which he is CEO, CTO, and lead
              designer. In 2004, he joined electric vehicle manufacturer Tesla
              Motors, Inc. (now Tesla, Inc.) as chairman and product architect,
              becoming its CEO in 2008. In 2006, he helped create SolarCity, a
              solar energy services company and current Tesla subsidiary. In
              2015, he co-founded OpenAI, a nonprofit research company that
              promotes friendly artificial intelligence. In 2016, he co-founded
              Neuralink, a neurotechnology company focused on developing
              brain–computer interfaces, and founded The Boring Company, a
              tunnel construction company. Ivan has also proposed the Hyperloop,
              a high-speed vactrain transportation system.
            </p>

            <p>
              Ivan has been the subject of criticism due to unorthodox or
              unscientific stances and highly publicized controversies. In 2018,
              he was sued for defamation by a diver who advised in the Tham
              Luang cave rescue; a California jury ruled in favor of Ivan. Also
              in 2018, the U.S. Securities and Exchange Commission (SEC) sued
              him for falsely tweeting that he had secured funding for a private
              takeover of Tesla. He settled with the SEC, temporarily stepping
              down from his chairmanship and accepting limitations on his
              Twitter usage. Ivan has received criticism for his views on such
              matters as artificial intelligence and the COVID-19 pandemic.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
