import React from "react";

function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    () => setMounted(false);
  }, []);
  return mounted;
}

export default useMounted;
