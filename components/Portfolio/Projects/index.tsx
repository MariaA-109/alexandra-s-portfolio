import { Container, Flex, Group, SimpleGrid, Text } from "@mantine/core";
import heIAds from "../../../public/projects/heIAds.png";
import heyDaisy from "../../../public/projects/heyDaisy.png";
import Agency from "../../../public/projects/wandace-agency.png";
import Wandace from "../../../public/projects/wandace.png";
import Weather from "../../../public/projects/weather.png";
import ServiceCard from "../../@essentials/ServiceCard";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <Container
      id="projects"
      mt="4rem"
      mb="4rem"
      fluid
      className={classes.wrapper}
    >
      <Flex h="100%" align="center" justify="center">
        <Group className={classes.title}>
          <Text inherit>Work Showcase</Text>
        </Group>
      </Flex>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p="xl"
      >
        <div>
          <ServiceCard
            image={Wandace.src}
            title="Wandace"
            text="SAAS solution that helps retailers sell wherever and whenever by making it very easy to expand from the smallest to the largest size. Wandace connects to important e-commerce outlets like Amazon, to services like Woocomerce, and even to your own physical and online shops."
            badges={["React.js", "Next.js", "TypeScript", "GraphQL"]}
            liveLink=""
            codeLink=""
            comingSoon={true}
          />
        </div>
        <div>
          <ServiceCard
            image={Agency.src}
            title="Wandace Agency"
            text="Wandace Agency specializes in scalable e-commerce solutions for retail environments, crafting custom platforms or utilizing WordPress to meet unique business needs and ensure seamless online experiences for customers."
            badges={["React.js", "Next.js", "Mantine"]}
            liveLink=""
            codeLink=""
            comingSoon={true}
          />
        </div>
        {/* <div>
          <ServiceCard
            image={heIAds.src}
            title="heIAds"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can then connect with others through chat or join planned events."
            badges={["Hostinger"]}
            liveLink="https://heydaisy-frontend.onrender.com/"
            codeLink="https://github.com/MariaA-109/heyDaisy-frontend"
            comingSoon={true}
          />
        </div> */}
        <div>
          <ServiceCard
            image={heyDaisy.src}
            title="heyDaisy"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can connect with others through chat or join planned events."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://heydaisy-frontend.onrender.com/"
            codeLink="https://github.com/MariaA-109/heyDaisy-frontend"
            comingSoon={false}
          />
        </div>
        <div>
          <ServiceCard
            image={Weather.src}
            title="Weather App"
            text="Weather application providing real-time weather data and forecasts. Users could search for locations and receive updates on weather conditions, temperature and forecasts, including actual wind chill, humidity and wind conditions."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://weather-app-colors.netlify.app"
            codeLink="https://github.com/MariaA-109/weatherapp-react"
            comingSoon={false}
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
