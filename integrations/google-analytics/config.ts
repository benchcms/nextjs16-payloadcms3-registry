import type { Integration } from "@integrations/types";
import i18n from "./i18n.json";

const googleAnalytics: Integration = {
  slug: "googleAnalytics",
  label: i18n.label,
  fields: [
    {
      name: "id",
      type: "text",
      label: i18n.fields.id.label,
    },
  ],
};

export default googleAnalytics;
