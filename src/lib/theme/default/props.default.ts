import { withDefaultProps } from "@chakra-ui/react";

export const defaultProps = () =>
  withDefaultProps({
    defaultProps: {
      colorScheme: "primary",
    },
    components: ["Input"],
  });
