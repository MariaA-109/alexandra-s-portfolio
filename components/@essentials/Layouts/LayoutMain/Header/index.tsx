import { AppShell, Button, Flex, Group, Image } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import Logo from "../../../../../public/logo/logo-black.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{
        height: 90,
      }}
      navbar={{ width: 300, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" style={{ width: "100%" }}>
          <Flex
            align="center"
            justify="space-between"
            style={{ width: "100%" }}
          >
            <Group>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <Image
                  src={Logo.src}
                  alt="Wandace"
                  style={{
                    maxWidth: "80px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                />
              </motion.div>
            </Group>
            <Flex justify="center" align="center" gap="md">
              <Button
                size="xs"
                variant="transparent"
                c="black"
                component="a"
                href="/#about"
              >
                ABOUT
              </Button>
              <Button
                size="xs"
                variant="transparent"
                c="black"
                component="a"
                href="/#projects"
              >
                PROJECTS
              </Button>
              <Button
                size="xs"
                variant="transparent"
                c="black"
                component="a"
                href="/#contact"
              >
                CONTACT ME
              </Button>
            </Flex>
          </Flex>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
};

export default Navbar;
