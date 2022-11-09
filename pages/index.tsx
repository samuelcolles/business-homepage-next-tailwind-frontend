import type { NextPage } from "next";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/hero/HeroSection";
import CheckListSection from "../components/checklist/CheckListSection";
import EmployeeSection from "../components/employee/EmployeeSection";
import ContactForm from "../components/ContactForm";
import SiteHeader from "../components/SiteHeader";
import SharesSection from "../components/SharesSection";
import MapLocation from "../components/MapLocation";
import VideoHeader from "../components/VideoHeader";
import ImageCardSection from "../components/imageCard/ImageCardSection";

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
  mapLocation: any;
  imageCardGrids: any[];
}

const Home: NextPage<Props> = ({
  siteInfo,
  siteHeader,
  shares,
  heroes,
  checkLists,
  imageCardGrids,
  employees,
  navLinks,
  mapLocation,

}) => {
  const { businessName, copyRight } = siteInfo;
  return (
    <div className="flex flex-col h-full">
      <NavBar businessName={businessName} navLinks={navLinks} />
      {siteHeader && siteHeader.image ? <SiteHeader siteHeader={siteHeader} /> : <></>}
      {siteHeader && siteHeader.videoHeaderSRC ? <VideoHeader videoHeaderSRC={siteHeader.videoHeaderSRC} /> : <></>}
      {heroes ? <HeroSection heroes={heroes} /> : <></>}
      {checkLists ? <CheckListSection checkLists={checkLists} /> : <></>}
      {imageCardGrids ? <ImageCardSection imageCardGrids={imageCardGrids} /> : <></>}
      {employees && employees.length > 0 ? <EmployeeSection employees={employees} /> : <></>}
      {mapLocation ? <MapLocation mapLocation={mapLocation} /> : <></>}
      {siteInfo.contactEmail ? <ContactForm contactEmail={siteInfo.contactEmail} /> : <></>}
      {shares && shares.length != 0 ? <SharesSection shares={shares} /> : <></>}
      <Footer navLinks={navLinks} copyRight={copyRight} />
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
  if (siteInfo) {
    siteInfo = siteInfo.attributes;
  } else {
    siteInfo = { copyRight: "", businessName: "Place Holder" }
  }

  var shares = await getDataItem("/api/share?populate[0]=share&populate[1]=share.icon&sort=id");
  if (shares) shares = shares.attributes.share;

  const heroes = await getDataItem("/api/heroes?populate=*&sort=id");

  const mapLocation = await getDataItem("/api/map-location");

  const checkLists = await getDataItem("/api/check-lists?populate=*&sort=id");

  const imageCardGrids = await getDataItem("/api/image-card-grids?populate[0]=cards&populate[1]=cards.image&sort=id")

  const employees = await getDataItem("/api/employees?populate=*&sort=id");

  var navLinks = await getDataItem("/api/nav-link?populate=*&sort=id");
  if (navLinks) navLinks = navLinks.attributes.links

  var siteHeader = await getDataItem("/api/site-header?populate=*&sort=id");
  if (siteHeader) siteHeader = siteHeader.attributes;
  console.log(mapLocation)


  return {
    props: {
      siteInfo,
      siteHeader,
      shares,
      heroes,
      checkLists,
      employees,
      navLinks,
      mapLocation,
      imageCardGrids,
    },
  };
};

export default Home;
