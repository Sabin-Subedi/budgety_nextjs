import { Alert } from "@chakra-ui/react";
import React from "react";

function ErrorBox({ err }: { err?: string }) {
  return err ? (
    <Alert status="error" variant="solid" borderRadius="sm">
      {err}
    </Alert>
  ) : null;
}

export default ErrorBox;
