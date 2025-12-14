import type { Feature } from "@core/types";
import { ContactEmails } from "./collections/ContactEmails";
import { Contact } from "./globals/Contact";
import { seedContact } from "./seed/contact";

const contactConfig: Feature = {
  globals: [Contact],
  collections: [ContactEmails],
  seeds: [seedContact],
};

export default contactConfig;
