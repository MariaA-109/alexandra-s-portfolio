// import type { ButtonProps } from "@mantine/core";
// import { Box, Button, Center, Text } from "@mantine/core";
// import { createStyles } from "@mantine/styles";
// import type MantineUtils from "@mantine/utils";
// import { useRef } from "react";

// export interface DefaultButtonProps
//   extends MantineUtils.PolymorphicComponentProps<"button", ButtonProps> {
//   label?: string;
//   icon?: React.ReactNode;
//   isIconRight?: boolean;
// }

// const useStyles = createStyles((theme) => ({
//   button: {
//     border: 0,
//     "&:hover": {
//       boxShadow: theme.shadows.lg,
//     },
//   },
// }));

// export const DefaultButton = ({
//   label = "BUTTON",
//   variant,
//   icon,
//   isIconRight = false,
//   ...props
// }: DefaultButtonProps) => {
//   const ref = useRef<HTMLButtonElement>(null);
//   const { classes } = useStyles();

//   return (
//     <Button
//       {...props}
//       ref={ref}
//       radius="md"
//       variant={variant}
//       className={classes.button}
//     >
//       <Center p="xs">
//         {icon && !isIconRight && (
//           <Box w="xs" mr="xs">
//             {icon}
//           </Box>
//         )}
//         <Text size="xs" fw={700}>
//           {label}
//         </Text>
//         {icon && isIconRight && (
//           <Box w="xs" ml="xs">
//             {icon}
//           </Box>
//         )}
//       </Center>
//     </Button>
//   );
// };

// export const WorkfieldButton = (props: DefaultButtonProps) => (
//   <DefaultButton
//     label="ABOUT"
//     variant="subtle"
//     style={{ boxShadow: "none" }}
//     {...props}
//   />
// );

// export const PluginsButton = (props: DefaultButtonProps) => (
//   <DefaultButton
//     label="PLUGINS"
//     variant="subtle"
//     style={{ boxShadow: "none" }}
//     {...props}
//   />
// );

// export const SubscriptionsButton = (props: DefaultButtonProps) => (
//   <DefaultButton
//     label="SUBSCRIPTIONS"
//     variant="subtle"
//     style={{ boxShadow: "none" }}
//     {...props}
//   />
// );

// export const ReviewsButton = (props: DefaultButtonProps) => (
//   <DefaultButton
//     label="REVIEWS"
//     variant="subtle"
//     style={{ boxShadow: "none" }}
//     {...props}
//   />
// );

// export const ContactButton = (props: DefaultButtonProps) => (
//   <DefaultButton
//     label="CONTACT"
//     variant="subtle"
//     style={{ boxShadow: "none" }}
//     {...props}
//   />
// );
