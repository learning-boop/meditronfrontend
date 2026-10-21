import { send } from "@emailjs/browser";

// ── EmailJS Configuration ────────────────────────────────────────────────────
// Sign up at https://www.emailjs.com and fill in these values:
//
// 1. Create an EmailJS account
// 2. Go to "Email Services" → Add Gmail → Connect meditroncdc@gmail.com
//    (use Google App Password if 2FA is enabled)
// 3. Copy the Service ID below
// 4. Go to "Email Templates" → Create New → use template below → Copy Template ID
// 5. Go to "Account" → Copy Public Key
//
// Template variables to include in your EmailJS template:
//   {{parent_name}}, {{phone}}, {{email}}, {{child_name}},
//   {{child_age}}, {{concern}}, {{message}}
//
// Suggested template subject: "New Assessment Request from {{parent_name}}"
// Suggested template body:
//   New assessment booking from the website:
//
//   Parent Name: {{parent_name}}
//   Phone: {{phone}}
//   Email: {{email}}
//   Child's Name: {{child_name}}
//   Child's Age: {{child_age}}
//   Primary Concern: {{concern}}
//   Message: {{message}}

export const EMAILJS_SERVICE_ID = "service_ya7r41f";
export const EMAILJS_TEMPLATE_ID = "template_8n1pvlf";
export const EMAILJS_PUBLIC_KEY = "zFBI_LwkOTH99mReG";

export type ContactFormData = {
  parentName: string;
  phone: string;
  email?: string;
  childName?: string;
  childAge?: string;
  concern?: string;
  message?: string;
};

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ ok: boolean; error?: string }> {
  try {
    const childInfo = [
      data.childName && `Child: ${data.childName}`,
      data.childAge && `Age: ${data.childAge}`,
    ]
      .filter(Boolean)
      .join(", ");

    const fullMessage = [childInfo, data.message || ""]
      .filter(Boolean)
      .join("\n\n");

    await send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: data.parentName,
        from_name: data.parentName,
        from_email: data.email || "Not provided",
        phone: data.phone,
        needs: data.concern || "Not specified",
        message: fullMessage || "No additional message",
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );
    return { ok: true };
  } catch (err) {
    console.error("EmailJS error:", err);
    return {
      ok: false,
      error: "Failed to send your request. Please try WhatsApp or call us directly.",
    };
  }
}
