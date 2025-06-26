// src/components/CalComWidget.tsx
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalComWidgetProps {
  calLink: string; // e.g., "victorseda/15min"
  namespace?: string; // e.g., "15min"
  style?: React.CSSProperties;
  config?: Record<string, any>;
}

export default function CalComWidget({ calLink, namespace, style, config }: CalComWidgetProps ) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: namespace || "default" }); // Use provided namespace or a default
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, [namespace]); // Re-run effect if namespace changes

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={style}
      config={config}
    />
  );
}
