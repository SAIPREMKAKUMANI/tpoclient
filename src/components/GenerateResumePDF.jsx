import React from "react";
import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";

const styles = {
  page: {
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    padding: 30,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderBottom: "1px solid #e0e0e0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: "#1a0dab",
    textDecoration: "none",
  },
};

const GenerateResumePDF = ({ resumeData }) => (
  <PDFViewer width="100%" height="600px">
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{resumeData?.name || "Name"}</Text>
          <Text style={styles.text}>{resumeData?.email || "Email"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Education</Text>
          {resumeData?.education ? (
            Object.entries(resumeData.education).map(([level, data]) => (
              <View key={level}>
                <Text style={styles.text}>
                  {level}: {data?.school || data?.college || "Institution"}
                </Text>
                <Text style={styles.text}>
                  {data?.board || data?.university || "Board/University"},{" "}
                  {data?.year || "Year"}
                </Text>
                <Text style={styles.text}>
                  {data?.percentage || data?.cgpa || "Grade"}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>No education details provided.</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Achievements</Text>
          {resumeData?.achievements?.length ? (
            resumeData.achievements.map((achievement, index) => (
              <Text key={index} style={styles.text}>
                {achievement?.description || "Achievement"}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No achievements provided.</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Work Experience</Text>
          {resumeData?.workExperiences?.length ? (
            resumeData.workExperiences.map((experience, index) => (
              <Text key={index} style={styles.text}>
                {experience?.description || "Experience"}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No work experience provided.</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Projects</Text>
          {resumeData?.projects?.length ? (
            resumeData.projects.map((project, index) => (
              <View key={index}>
                <Text style={styles.text}>
                  {project?.name || "Project Name"}
                </Text>
                <Text style={styles.text}>
                  {project?.description || "Project Description"}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>No projects provided.</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Links</Text>
          {resumeData?.links ? (
            Object.entries(resumeData.links).map(([platform, url]) => (
              <Text key={platform} style={styles.link}>
                {platform}: {url || "URL"}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No links provided.</Text>
          )}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default GenerateResumePDF;
