import { alertAnatomy } from "@chakra-ui/anatomy";
import {
  AlertProps,
  AlertStatus,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";

const alertColors: Record<AlertStatus, string> = {
  info: "blue",
  warning: "yellow",
  success: "green",
  error: "danger",
  loading: "blue",
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle((props: AlertProps) => {
  const { status } = props;

  const currentStatusColor = alertColors[status || "info"];

  return {
    container: {
      colorScheme: currentStatusColor,
    },
    description: {
      colorScheme: currentStatusColor,
    },
    icon: {
      colorScheme: currentStatusColor,
    },
    title: {
      colorScheme: currentStatusColor,
    },
  };
});

export const AlertTheme = defineMultiStyleConfig({ baseStyle });
