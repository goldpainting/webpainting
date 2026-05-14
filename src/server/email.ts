import nodemailer from 'nodemailer';

import { env } from '~/env';

const contactEmailTo = 'goldlionpainting@gmail.com';
const mailFromName = 'service';

type EmailError = {
  code: string;
  command: string;
  response: string;
};

type EstimateEmailData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
  source?: string;
};

type ServiceAppointmentEmailData = {
  fullName: string;
  phone: string;
  email?: string;
  serviceAddress: string;
  serviceNeeded: string;
  requestedDate: string;
  preferredTimeWindow: string;
  notes?: string;
};

function getErrorField(error: unknown, field: 'command' | 'response') {
  if (typeof error !== 'object' || error === null || !(field in error)) {
    return '';
  }

  const record = error as Record<string, unknown>;
  const value = record[field];

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  return '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getTransporter() {
  if (!env.SMTP_USER || !env.PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export function getEstimateRequestEmail(data: EstimateEmailData) {
  const safeName = escapeHtml(data.name);
  const safePhone = escapeHtml(data.phone);
  const safeEmail = escapeHtml(data.email);
  const safeDate = escapeHtml(
    data.date.length > 0 ? data.date : 'Not provided'
  );
  const safeSource = escapeHtml(
    data.source && data.source.length > 0
      ? data.source
      : 'Website estimate form'
  );
  const safeMessage = escapeHtml(data.message).replaceAll('\n', '<br />');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1f2124;">
      <div style="background: #0c0d0e; padding: 24px; border-bottom: 5px solid #e4ad42;">
        <h1 style="margin: 0; color: #e4ad42; font-size: 26px;">New Painting Estimate Request</h1>
        <p style="margin: 8px 0 0; color: #dddddd;">Gold Lion Painting Inc website form</p>
      </div>

      <div style="padding: 24px; background: #ffffff; border: 1px solid #e6e0d5;">
        <h2 style="margin: 0 0 16px; color: #d90000; font-size: 22px;">Customer Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Name</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Phone</td>
            <td style="padding: 10px; background: #fbfaf7;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Email</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Preferred Date</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Source</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeSource}</td>
          </tr>
        </table>

        <h2 style="margin: 24px 0 12px; color: #d90000; font-size: 22px;">Message</h2>
        <div style="padding: 16px; background: #f7f2e8; border-left: 4px solid #e4ad42; line-height: 1.6;">
          ${safeMessage}
        </div>
      </div>

      <div style="padding: 16px 24px; background: #f7f2e8; color: #6b5b43; font-size: 13px;">
        This message was sent from the Gold Lion Painting Inc website.
      </div>
    </div>
  `;
}

export function getServiceAppointmentEmail(data: ServiceAppointmentEmailData) {
  const safeFullName = escapeHtml(data.fullName);
  const safePhone = escapeHtml(data.phone);
  const safeEmail = escapeHtml(
    data.email && data.email.length > 0 ? data.email : 'Not provided'
  );
  const safeServiceAddress = escapeHtml(data.serviceAddress);
  const safeServiceNeeded = escapeHtml(data.serviceNeeded);
  const safeRequestedDate = escapeHtml(data.requestedDate);
  const safePreferredTimeWindow = escapeHtml(data.preferredTimeWindow);
  const safeNotes = escapeHtml(
    data.notes && data.notes.length > 0 ? data.notes : 'No extra notes'
  ).replaceAll('\n', '<br />');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1f2124;">
      <div style="background: #0c0d0e; padding: 24px; border-bottom: 5px solid #e4ad42;">
        <h1 style="margin: 0; color: #e4ad42; font-size: 26px;">New Service Appointment Request</h1>
        <p style="margin: 8px 0 0; color: #dddddd;">Gold Lion Painting Inc chatbot service request</p>
      </div>

      <div style="padding: 24px; background: #ffffff; border: 1px solid #e6e0d5;">
        <h2 style="margin: 0 0 16px; color: #d90000; font-size: 22px;">Customer Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Full Name</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeFullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Phone</td>
            <td style="padding: 10px; background: #fbfaf7;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Email</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Service Address</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeServiceAddress}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Service Needed</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeServiceNeeded}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Requested Date</td>
            <td style="padding: 10px; background: #fbfaf7;">${safeRequestedDate}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; background: #f7f2e8;">Preferred Time Window</td>
            <td style="padding: 10px; background: #fbfaf7;">${safePreferredTimeWindow}</td>
          </tr>
        </table>

        <h2 style="margin: 24px 0 12px; color: #d90000; font-size: 22px;">Notes</h2>
        <div style="padding: 16px; background: #f7f2e8; border-left: 4px solid #e4ad42; line-height: 1.6;">
          ${safeNotes}
        </div>
      </div>

      <div style="padding: 16px 24px; background: #f7f2e8; color: #6b5b43; font-size: 13px;">
        This appointment request was sent from the Gold Lion Painting Inc chatbot.
      </div>
    </div>
  `;
}

export async function sendEstimateEmail(
  data: EstimateEmailData
): Promise<{ success: boolean; error?: EmailError }> {
  try {
    const transporter = getTransporter();

    if (!transporter) {
      return {
        success: false,
        error: {
          code: 'MISSING_SMTP_CONFIG',
          command: '',
          response: 'SMTP_USER and PASS are required to send email.',
        },
      };
    }

    const subject = `New estimate request from ${data.name || 'website visitor'}`;

    await transporter.sendMail({
      from: `"${mailFromName}" <${env.SMTP_USER}>`,
      to: contactEmailTo,
      replyTo: data.email,
      subject,
      html: getEstimateRequestEmail(data),
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: {
        code: error instanceof Error ? error.message : 'UNKNOWN_EMAIL_ERROR',
        command: getErrorField(error, 'command'),
        response: getErrorField(error, 'response'),
      },
    };
  }
}

export async function sendServiceAppointmentEmail(
  data: ServiceAppointmentEmailData
): Promise<{ success: boolean; error?: EmailError }> {
  try {
    const transporter = getTransporter();

    if (!transporter) {
      return {
        success: false,
        error: {
          code: 'MISSING_SMTP_CONFIG',
          command: '',
          response: 'SMTP_USER and PASS are required to send email.',
        },
      };
    }

    const subject = `New service appointment request from ${
      data.fullName || 'website visitor'
    }`;

    await transporter.sendMail({
      from: `"${mailFromName}" <${env.SMTP_USER}>`,
      to: contactEmailTo,
      ...(data.email ? { replyTo: data.email } : {}),
      subject,
      html: getServiceAppointmentEmail(data),
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: {
        code: error instanceof Error ? error.message : 'UNKNOWN_EMAIL_ERROR',
        command: getErrorField(error, 'command'),
        response: getErrorField(error, 'response'),
      },
    };
  }
}
