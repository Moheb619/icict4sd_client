/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*", // automatically handles all locales
  //       headers: [
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/Admin",
  //       destination: "https://icict4sd.vercel.app/Admin",
  //     },
  //     {
  //       source: "/UserMessages",
  //       destination: "https://icict4sd.vercel.app/UserMessages",
  //     },
  //     {
  //       source: "/ConferenceSteeringCommittee",
  //       destination: "https://icict4sd.vercel.app/ConferenceSteeringCommittee",
  //     },
  //     {
  //       source: "/OrganizingCommittee",
  //       destination: "https://icict4sd.vercel.app/OrganizingCommittee",
  //     },
  //     {
  //       source: "/InternationalAdvisoryCommittee",
  //       destination: "https://icict4sd.vercel.app/InternationalAdvisoryCommittee",
  //     },
  //     {
  //       source: "/TechnicalCommittee",
  //       destination: "https://icict4sd.vercel.app/TechnicalCommittee",
  //     },
  //     {
  //       source: "/FinanceCommittee",
  //       destination: "https://icict4sd.vercel.app/FinanceCommittee",
  //     },
  //     {
  //       source: "/ProgramCommittee",
  //       destination: "https://icict4sd.vercel.app/ProgramCommittee",
  //     },
  //     {
  //       source: "/Webmaster",
  //       destination: "https://icict4sd.vercel.app/Webmaster",
  //     },
  //     {
  //       source: "/CallForPapers",
  //       destination: "https://icict4sd.vercel.app/CallForPapers",
  //     },
  //     {
  //       source: "/Scopes",
  //       destination: "https://icict4sd.vercel.app/Scopes",
  //     },
  //     {
  //       source: "/CameraReadySubmissionGuidelines",
  //       destination: "https://icict4sd.vercel.app/CameraReadySubmissionGuidelines",
  //     },
  //     {
  //       source: "/RegistrationAndPayment",
  //       destination: "https://icict4sd.vercel.app/RegistrationAndPayment",
  //     },
  //     {
  //       source: "/ImportantDate",
  //       destination: "https://icict4sd.vercel.app/ImportantDate",
  //     },
  //     {
  //       source: "/TechnicalSessionSchedule",
  //       destination: "https://icict4sd.vercel.app/TechnicalSessionSchedule",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
