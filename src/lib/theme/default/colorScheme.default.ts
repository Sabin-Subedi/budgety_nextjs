import { withDefaultColorScheme } from "@chakra-ui/react";

export const defaultColorScheme = () =>
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button", "Input", "Checkbox", "Radio", "Switch", "Select"],
  });
