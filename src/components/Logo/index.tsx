"use client";
import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

function Logo(props: IconProps) {
  return (
    <Icon
      width="526"
      height="53"
      fill="none"
      viewBox="0 0 526 53"
      {...props}
      color="primary.main"
    >
      <path
        // fill="#6347EB"
        d="M38.101 37.25c0 4.748-1.295 8.394-3.886 10.936C31.673 50.73 28.1 52 23.495 52h-6.909c-5.66 0-9.69-.983-12.088-2.95C2.148 47.083.972 43.677.972 38.832V.768h21.659c4.893 0 8.562 1.223 11.009 3.67 2.494 2.446 3.741 5.9 3.741 10.361 0 2.59-.671 4.797-2.014 6.62-1.295 1.823-2.735 3.118-4.318 3.886 4.701 2.206 7.052 6.188 7.052 11.944zM21.839 20.771c3.694 0 5.54-1.847 5.54-5.54 0-3.695-1.846-5.541-5.54-5.541H10.974v11.08h10.865zm6.26 15.974c0-2.303-.407-4.03-1.223-5.181-.816-1.2-2.279-1.799-4.39-1.799H10.975v8.059c0 1.967.48 3.334 1.44 4.101 1.006.768 2.637 1.152 4.892 1.152h5.18c3.742 0 5.613-2.111 5.613-6.332zM121.943.768v33.675c0 5.565-1.895 9.954-5.684 13.168-3.742 3.214-8.371 4.82-13.888 4.82-5.516 0-10.17-1.606-13.959-4.82-3.742-3.214-5.613-7.603-5.613-13.168V.768h10.002v33.315c0 3.166.864 5.54 2.59 7.124 1.775 1.535 4.102 2.302 6.98 2.302s5.205-.767 6.98-2.302c1.775-1.583 2.662-3.958 2.662-7.124V.768h9.93zm85.048 25.4l.072 5.54c-.192 3.503-.623 6.453-1.295 8.851-.671 2.399-1.991 4.581-3.957 6.548C198.549 50.37 193.8 52 187.564 52c-7.34 0-12.377-.96-15.111-2.878-2.734-1.967-4.101-5.493-4.101-10.578V.768h19.931c5.756 0 10.266 1.631 13.528 4.893 2.638 2.638 4.197 5.852 4.677 9.642.335 2.686.503 6.308.503 10.865zm-12.16 13.744c.911-1.104 1.487-2.615 1.727-4.534.288-1.966.432-5.012.432-9.138 0-4.125-.144-7.1-.432-8.922-.24-1.871-.816-3.358-1.727-4.461-1.727-2.111-4.221-3.166-7.483-3.166h-8.995v28.35c0 1.919.648 3.238 1.943 3.957 1.295.72 3.598 1.08 6.908 1.08 3.358 0 5.9-1.056 7.627-3.166zm53.763-12.017v-6.332c0-6.668 1.751-11.872 5.253-15.614 3.502-3.742 8.347-5.613 14.535-5.613 6.188 0 11.153 1.871 14.894 5.613 2.639 2.638 3.958 6.596 3.958 11.872h-9.354c0-5.708-3.046-8.562-9.138-8.562-1.823 0-3.382.36-4.678 1.08-1.247.67-2.182 1.462-2.806 2.374-.623.911-1.103 2.254-1.439 4.03-.336 1.774-.528 3.261-.575 4.46-.048 1.2-.072 2.807-.072 4.821v4.102c.048.671.119 1.799.215 3.382.144 1.535.336 2.638.576 3.31.288.671.672 1.535 1.151 2.59.528 1.055 1.176 1.799 1.943 2.23 1.967 1.248 4.197 1.871 6.692 1.871 4.173 0 7.123-1.775 8.85-5.324V34.73h-6.188v-8.347h14.751v15.47c-1.487 3.502-3.838 6.14-7.052 7.915-3.214 1.775-6.859 2.663-10.937 2.663-7.243 0-12.496-2.015-15.758-6.044-3.214-4.078-4.821-10.242-4.821-18.493zM367.299 52h-18.132c-5.757 0-9.81-.983-12.161-2.95-2.302-2.015-3.453-5.54-3.453-10.578V.768h33.746v8.923h-23.745v12.016h16.622l-.72 8.922h-15.902v7.124c0 2.015.456 3.406 1.368 4.173.911.768 2.566 1.152 4.964 1.152h17.413V52zm79.113-42.31h-13.744V52h-10.002V9.69h-13.671V.769h37.417v8.923zM525.151.769L509.753 30.99V52h-9.93V30.99L484.425.767h10.865l9.57 20.651L514.286.77h10.865z"
      ></path>
    </Icon>
  );
}

export default React.memo(Logo);
