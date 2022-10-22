import type { NextPage } from "next";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/hero/HeroSection";
import CheckListSection from "../components/checklist/CheckListSection";
import EmployeeSection from "../components/employee/EmployeeSection";
import ContactForm from "../components/ContactForm";

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
      {heroes ? (<HeroSection heroes={heroes} />) : (<></>)}
      {checkLists ? (<CheckListSection checkLists={checkLists} />) : (<></>)}
      {employees ? <EmployeeSection employees={employees} /> : <></>}
      {siteInfo.contactEmail ? (<ContactForm contactEmail={siteInfo.contactEmail} />) : (<></>)}
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
