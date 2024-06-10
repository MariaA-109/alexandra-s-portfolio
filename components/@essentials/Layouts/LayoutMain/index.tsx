import Header from "./Header";
import { Flex } from "@mantine/core";

type LayoutMainProps = {
  children: React.ReactNode;
};

const LayoutMain = ({ children }: LayoutMainProps) => {
  return (
    <>
      <Header />
      <Flex direction="column" h="100%" pos="relative">
        {children}
      </Flex>
    </>
  );
};

export default LayoutMain;
