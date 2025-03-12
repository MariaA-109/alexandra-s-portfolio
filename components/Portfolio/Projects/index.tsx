import { Container, Flex, Group, SimpleGrid, Text } from "@mantine/core";
import heIAds from "../../../public/projects/heIAds.png";
import heyDaisy from "../../../public/projects/heyDaisy.png";
import Agency from "../../../public/projects/wandace-agency.png";
import Wandace from "../../../public/projects/wandace.png";
import Weather from "../../../public/projects/weather.png";
import ServiceCard from "../../@essentials/ServiceCard";
import classes from "./Projects.module.scss";
import { Carousel } from '@mantine/carousel';

const Projects = () => {
  return (
    <Container
      id="projects" 
      fluid
      className={classes.wrapper}
    >
     
      <Flex h="100%" align="center" justify="center">
        <Group className={classes.title}>
          <Text inherit>Work Showcase</Text>
        </Group>
      </Flex>
      <Carousel className={classes.carousel}
      
      height={600}  loop dragFree slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 'sm', sm: 'md' }}>
      <Carousel.Slide>
          <ServiceCard
            image={Wandace.src}
            title="Wandace App"
            text="Wandace is an AI-powered e-commerce tool that simplifies product feed management, helping retailers scale effortlessly across online and physical stores. It integrates with Meta, WooCommerce, and more to maximize sales."
            badges={["React.js", "Next.js", "TypeScript", "GraphQL"]}
            liveLink="https://app.wandace.com/auth/login"
            codeLink=""
            comingSoon={false}
          />
    </Carousel.Slide>
    <Carousel.Slide>
          <ServiceCard
            image={Agency.src}
            title="Wandace Agency"
            text="Wandace Agency specializes in scalable e-commerce solutions for retail environments, crafting custom platforms or utilizing WordPress to meet unique business needs and ensure seamless online experiences for customers."
            badges={["React.js", "Next.js", "Mantine"]}
            liveLink="https://wandace.com/en/agency"
            codeLink=""
            comingSoon={false}
          />
      </Carousel.Slide>
      <Carousel.Slide>
          <ServiceCard
            image={heIAds.src}
            title="heIAds"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can then connect with others through chat or join planned events."
            badges={["Hostinger"]}
            liveLink="https://heiads.ai/"
            codeLink=""
            comingSoon={false}
          />
       </Carousel.Slide>
       <Carousel.Slide>
          <ServiceCard
            image={heyDaisy.src}
            title="heyDaisy"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can connect with others through chat or join planned events."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://heydaisy-frontend.onrender.com/"
            codeLink="https://github.com/MariaA-109/heyDaisy-frontend"
            comingSoon={false}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <ServiceCard
            image={Weather.src}
            title="Weather App"
            text="Weather application providing real-time weather data and forecasts. Users could search for locations and receive updates on weather conditions, temperature and forecasts, including actual wind chill, humidity and wind conditions."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://weather-app-colors.netlify.app"
            codeLink="https://github.com/MariaA-109/weatherapp-react"
            comingSoon={false}
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};

export default Projects;
