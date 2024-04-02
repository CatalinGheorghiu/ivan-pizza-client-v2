import ContactForm from "@/components/contact/ContactForm.tsx";
import Layout from "@/components/layout/Layout.tsx";

const Contact = () => {
  return (
    <Layout>
      <section className="relative m-auto h-full w-full max-w-md">
        <div className="round h-full rounded-2xl bg-transparent text-slate-900">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
