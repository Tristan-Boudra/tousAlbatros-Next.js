import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

export const EmailLayout = ({
  message,
}: React.PropsWithChildren<{ message: string }>) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Dropbox reset your password</Preview>
        <Body
          className="bg-gray-50 py-2"
          style={{
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Container className="border border-gray-200 bg-white p-11">
            <div className="flex items-center gap-2">
              <Img
                src="/icon.png"
                width="50"
                height="auto"
                alt="TousAlbatros"
              />
              <h2>TousAlbatros</h2>
            </div>
            {/* Utilisez la propriété message ici */}
            <Section>{message}</Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailLayout;
