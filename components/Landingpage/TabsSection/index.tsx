import { Tabs, Image, Flex, Text } from "@mantine/core";
import Trace from "../../../public/landingpage/tabs/trace.png";
import Fulfill from "../../../public/landingpage/tabs/fulfill.png";
import { useState } from "react";
import { createStyles } from "@mantine/styles";

const useStyles = createStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    marginBottom: "2rem",
    justifyContent: "center",
    alignContent: "center",
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(24deg, #ffffff, #D0BFFF, #D0EBFF,#F8F0FC, #ffffff)"
        : "linear-gradient(24deg,#ffffff,  #D0BFFF,#D0EBFF, #F8F0FC, #ffffff)",
    [theme.fn.smallerThan("md")]: {
      flexWrap: "wrap",
    },
    [theme.fn.smallerThan("sm")]: {
      flexWrap: "wrap",
    },
  },

  tabs: {
    padding: "3rem",
    maxWidth: 800,
  },
  slides: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    marginTop: "10rem",
  },
  title: {
    color: "#002466",
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    [theme.fn.smallerThan("md")]: {
      fontSize: 70,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
    },
  },
}));

const TabsSection = () => {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>("trace");

  return (
    <Flex className={classes.container} p="2.5rem">
      <Text className={classes.title} fz="80" fw={700} c="navy.8">
        Do it with wandace
      </Text>
      <Tabs
        defaultValue="first"
        className={classes.tabs}
        value={activeTab}
        onChange={setActiveTab}
      >
        <Tabs.List grow>
          <Tabs.Tab value="trace" fw={600}>
            TRACE
          </Tabs.Tab>
          <Tabs.Tab value="fulfill" fw={600}>
            MANAGE
          </Tabs.Tab>
          <Tabs.Tab value="register" fw={600}>
            CREATE
          </Tabs.Tab>
          <Tabs.Tab value="analyze" fw={600}>
            OPTIMIZE
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="trace" pt="xs">
          <Text size="xs" m="sm">
            Monitor inventory levels, sales performance, and stock movements
            across stores and warehouses in real-time.
          </Text>
          <Image src={Trace.src} alt="Wandace 1" />
        </Tabs.Panel>
        <Tabs.Panel value="fulfill" pt="xs">
          <Text size="xs" m="sm">
            Control product replenishments, supplier relationships, and internal
            transfers efficiently within the system.
          </Text>
          <Image src={Fulfill.src} alt="Wandace 1" />
        </Tabs.Panel>
        <Tabs.Panel value="register" pt="xs">
          <Text size="xs" m="sm">
            Generate discount events and promotions to attract customers and
            boost sales.
          </Text>
          <Image src={Fulfill.src} alt="Wandace 1" />
        </Tabs.Panel>
        <Tabs.Panel value="analyze" pt="xs">
          <Text size="xs" m="sm">
            Analyze data insights and trends to make informed decisions,
            streamline operations, and maximize business efficiency.
          </Text>
          <Image src={Fulfill.src} alt="Wandace 1" />
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
};

export default TabsSection;
