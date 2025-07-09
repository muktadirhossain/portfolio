import { Html } from '@react-email/html';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Hr } from '@react-email/hr';
import { Heading } from '@react-email/heading';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmail = ({ name, email, subject, message }: ContactEmailProps) => {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading as="h2" style={heading}>📩 New Message from Portfolio</Heading>
          </Section>

          <Section style={content}>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Subject:</strong> {subject}</Text>

            <Hr style={divider} />

            <Text style={{ whiteSpace: 'pre-line' }}>
              <strong>Message:</strong><br />
              {message}
            </Text>
          </Section>

          <Section style={footer}>
            <Text>This message was sent from your portfolio contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
  padding: '20px',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  overflow: 'hidden',
};

const header = {
  backgroundColor: '#111827',
  color: 'white',
  padding: '20px',
};

const heading = {
  margin: 0,
  fontSize: '20px',
};

const content = {
  padding: '20px',
  color: '#333',
};

const divider = {
  margin: '20px 0',
  borderTop: '1px solid #eee',
};

const footer = {
  backgroundColor: '#f3f4f6',
  textAlign: 'center' as const,
  padding: '12px',
  fontSize: '12px',
  color: '#666',
};

