import { withDefaultVariant } from "@chakra-ui/react";

export const defaultVariant = () =>
  withDefaultVariant({
    variant: "outline",
    components: ["Input"],
  });
