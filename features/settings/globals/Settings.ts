import { GlobalConfig } from "payload";
import i18n from "../i18n/settings.json";

export const Settings: GlobalConfig = {
  slug: "settings",
  access: {
    read: ({ req: { user } }) => !!user,
  },
  label: i18n.label,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: i18n.tabs.contactInfo,
          fields: [
            {
              name: "email",
              type: "email",
              label: i18n.fields.email,
            },
            {
              name: "phone",
              type: "text",
              label: i18n.fields.phone,
            },
            {
              name: "address",
              type: "textarea",
              label: i18n.fields.address,
            },
          ],
        },
        {
          label: i18n.tabs.socialLinks,
          fields: [
            {
              name: "facebook",
              type: "text",
              label: i18n.fields.facebook,
            },
            {
              name: "instagram",
              type: "text",
              label: i18n.fields.instagram,
            },
            {
              name: "linkedin",
              type: "text",
              label: i18n.fields.linkedin,
            },
            {
              name: "twitter",
              type: "text",
              label: i18n.fields.twitter,
            },
          ],
        },
        {
          label: i18n.tabs.integrations,
          fields: [
            {
              name: "googleAnalyticsId",
              type: "text",
              label: i18n.fields.googleAnalyticsId,
            },
          ],
        },
      ],
    },
  ],
};
