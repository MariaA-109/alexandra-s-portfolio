import {
  Accordion,
  Avatar,
  Container,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { motion } from "framer-motion";
import Inventory from "../../../public/landingpage/workfields/building-warehouse.png";
import Order from "../../../public/landingpage/workfields/package-import.png";
import Sales from "../../../public/landingpage/workfields/report-money.png";
import InventoryImage from "../../../public/landingpage/workfields/inventory.jpg";
import SalesImage from "../../../public/landingpage/workfields/sales-woman.jpg";
import SalesWoman from "../../../public/landingpage/workfields/sales-manager.jpg";

const fieldsList = [
  {
    id: " Stock Management",
    image: InventoryImage.src,
    label: "Stock Management",
    description:
      "Centralize your inventory control across all outlets with real-time updates and seamless synchronization. ",
    content:
      "Wandace ensures you always have the right stock at the right place, reducing waste and avoiding stockouts.",
  },

  {
    id: "Order Management",
    image: SalesWoman.src,
    label: "Sales Management",
    description: "Transform your checkout process with our intuitive POS app.",
    content:
      " Efficiently process transactions, manage customer data, and streamline your in-store operations, all from a single, user-friendly interface.",
  },

  {
    id: "Sales Management",
    image: SalesImage.src,
    label: "Order Management",
    description:
      "Easily oversee your entire sales process from one central hub. ",
    content:
      "With Wandace, track performance, analyze trends, and optimize your sales strategy for maximum growth and profitability.",
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  accordion: {
    display: "flex",
    padding: "2rem",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    "@media (min-width: 600px)": {
      flexDirection: "row",
    },
  },
}));

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Group align="center" id="workfields">
        <Avatar src={image} radius="md" size="20rem" />
        <div>
          <Text fz="25">{label}</Text>
          <Text fz="13" fw={400}>
            {description}
          </Text>
        </div>
      </Group>
    </motion.div>
  );
}

const WorkFieldsSection = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const items = fieldsList.map((item) => (
    <Accordion.Item value={item.id} key={item.label} mt={theme.spacing.md}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fz="11">{item.content}</Text>
        </motion.div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container bg="transparent" fluid mb="5rem">
      <Accordion defaultValue="customization" className={classes.accordion}>
        {items}
      </Accordion>
    </Container>
  );
};

export default WorkFieldsSection;
