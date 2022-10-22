import type { NextPage } from "next";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Hero, { Variant } from "../components/elements/Hero";
import CheckList from "../components/elements/CheckList";
import EmployeeHighlight from "../components/elements/EmployeeHighlight";
import ContactForm from "../components/elements/ContactForm";

interface Props {
  siteInfo: {
    businessName: string;
    copyRight: string;
    contactEmail: string;
    logo: {};
  };
  shares: any[];
  heroes: any[];
  checkLists: {
    id: number;
    attributes: {
      heading: string;
      icon: any;
      list: any[];
    };
  }[];
  employees: any[];
}

const Home: NextPage<Props> = ({
  siteInfo,
  shares,
  heroes,
  checkLists,
  employees,
}) => {
  const { businessName, copyRight } = siteInfo;
  return (
    <div className="flex flex-col h-full">
      <NavBar businessName={businessName} />
      {heroes ? (
        heroes.map((item, index) => (
          <Hero
            key={item.id}
            variant={
              index === 0
                ? Variant.primary
                : index % 2 === 1
                ? Variant.secondary
                : Variant.tertiary
            }
            heading={item.attributes.heading}
            subHeading={item.attributes.subHeading}
            text={item.attributes.text}
            photo={item.attributes.photo}
            button={item.attributes.button}
          />
        ))
      ) : (
        <></>
      )}
      {checkLists ? (
        checkLists.map(item => (
          <CheckList
            key={item.id}
            heading={item.attributes.heading}
            list={item.attributes.list}
            icon={item.attributes.icon}
          />
        ))
      ) : (
        <></>
      )}
      {employees ? <EmployeeHighlight employees={employees} /> : <></>}
      {siteInfo.contactEmail ? (
        <ContactForm contactEmail={siteInfo.contactEmail} />
      ) : (
        <></>
      )}
      <Footer shares={shares} copyRight={copyRight} />
    </div>
  );
};

const getDataItem = async (uri: string) => {
  const res = await fetch(process.env.STRAPI_BACKEND_URL + uri);
  var item = await res.json();
  return item.data;
};

export const getStaticProps = async () => {
  var siteInfo = await getDataItem("/api/site-info?populate=*");
  siteInfo = siteInfo.attributes;

  var shares = await getDataItem("/api/share?populate=*&sort=id");
  shares = shares.attributes.share;

  const heroes = await getDataItem("/api/heroes?populate=*&sort=id");

  const checkLists = await getDataItem("/api/check-lists?populate=*&sort=id");

  const employees = await getDataItem("/api/employees?populate=*&sort=id");

  return {
    props: {
      siteInfo,
      shares,
      heroes,
      checkLists,
      employees,
    },
  };
};

export default Home;
