import type { NextPage } from "next";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/hero/HeroSection";
import CheckListSection from "../components/checklist/CheckListSection";
import EmployeeSection from "../components/employee/EmployeeSection";
import ContactForm from "../components/ContactForm";
import SiteHeader from "../components/SiteHeader";

interface Props {
  siteInfo: {
    businessName: string;
    copyRight: string;
    contactEmail: string;
    logo: {};
  };
  siteHeader: any;
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
  navLinks: any[];
}

const Home: NextPage<Props> = ({
  siteInfo,
  siteHeader,
  shares,
  heroes,
  checkLists,
  employees,
  navLinks,

}) => {
  const { businessName, copyRight } = siteInfo;
  return (
    <div className="flex flex-col h-full">
      <NavBar businessName={businessName} navLinks={navLinks} />
      {siteHeader.image ? <SiteHeader siteHeader={siteHeader} /> : <></>}
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

  var navLinks = await getDataItem("/api/nav-link?populate=*&sort=id");
  navLinks = navLinks.attributes.links

  var siteHeader = await getDataItem("/api/site-header?populate=*&sort=id");
  siteHeader = siteHeader.attributes;
  console.log(siteHeader);

  return {
    props: {
      siteInfo,
      siteHeader,
      shares,
      heroes,
      checkLists,
      employees,
      navLinks,
    },
  };
};

export default Home;
