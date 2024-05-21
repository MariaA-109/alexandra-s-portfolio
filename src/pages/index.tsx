import { Flex } from "@mantine/core";
import { NextPage } from "next";
import HeroSection from "../../components/Landingpage/HeroSection";
import WorkFieldsSection from "../../components/Landingpage/WorkFieldsSection";
import TabsSection from "../../components/Landingpage/TabsSection";
import PluginsSection from "../../components/Landingpage/PluginsSection";
import TechnologiesSection from "../../components/Landingpage/TechnologiesSection";
import SubscriptionsSection from "../../components/Landingpage/SubscriptionsSection";
import FooterSection from "../../components/Landingpage/FooterSection";
import ReviewsSection from "../../components/Landingpage/ReviewsSection";
import LayoutMain from "../../components/@essentials/Layouts/LayoutMain";

const Home: NextPage = () => {
  return (
    <LayoutMain>
      <Flex h="100%" pos="relative">
        <HeroSection />
      </Flex>
      <WorkFieldsSection />
      <TabsSection />
      <PluginsSection />
      <TechnologiesSection />
      <SubscriptionsSection />
      {/*<ReviewsSection />*/}
      <FooterSection />
    </LayoutMain>
  );
};

export default Home;
