import React from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const candy = require('./images/candy.png');
const male = require('./images/professor.png');
const female = require('./images/witch.png');
const wordMap = require('./images/words1.png');
const wordMap2 = require('./images/words2.png');

const initialState = {
  authors: [
    {"author": "Green TA", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "Informatics Institute, 241 Naka Hall, University of Missouri, Columbia, MO 65211-2060, United States.", "coords": [], "mesh": ["Clinical decision support system", "Clinical information systems", "Health information technology", "Workflow"], "gender": "M"},
    {"author": "Whitt S", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States.", "coords": [], "mesh": ["Clinical decision support system", "Clinical information systems", "Health information technology", "Workflow"], "gender": "M"},
    {"author": "Belden JL", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States.", "coords": [], "mesh": ["Clinical decision support system", "Clinical information systems", "Health information technology", "Workflow"], "gender": "M"},
    {"author": "Erdelez S", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Library & Information Science, Simmons University, M109, Boston, MA, United States.", "coords": [], "mesh": ["Clinical decision support system", "Clinical information systems", "Health information technology", "Workflow"], "gender": "F"},
    {"author": "Shyu CR", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "Informatics Institute, 241 Naka Hall, University of Missouri, Columbia, MO 65211-2060, United States; Electrical Engineering and Computer Science Department, United States; School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States.", "coords": [], "mesh": ["Clinical decision support system", "Clinical information systems", "Health information technology", "Workflow"], "gender": "M"},
    {"author": "Day MA", "title": "EMR Happy Hour: New Approach to Electronic Medical Record Continuous Learning.", "location": "University of Missouri, Columbia, Missouri", "coords": [], "mesh": ["burnout", "electronic medical record", "health information technology"], "gender": "F"},
    {"author": "Belden JL", "title": "EMR Happy Hour: New Approach to Electronic Medical Record Continuous Learning.", "location": "University of Missouri, Columbia, Missouri.", "coords": [], "mesh": ["burnout", "electronic medical record", "health information technology"], "gender": "M"},
    {"author": "Shaffer VA", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Psychological Sciences, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Wegier P", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": ["Sinai Health System, Temmy Latner Center for Palliative Care, Toronto, ON, Canada.", "Sinai Health System, Lunenfeld-Tanenbaum Research Institute, Toronto, ON, Canada."], "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "M"},
    {"author": "Valentine KD", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Psychological Sciences, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Belden JL", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "M"},
    {"author": "Canfield SM", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Patil SJ", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Popescu M", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Health Management & Informatics, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "M"},
    {"author": "Steege LM", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Wisconsin, School of Nursing, Madison, WI, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Jain A", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Electrical and Computer Engineering, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "M"},
    {"author": "Koopman RJ", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States.", "coords": [], "mesh": ["data visualization", "hypertension", "hypertension control", "patients’ judgment", "primary care"], "gender": "F"},
    {"author": "Belden JL", "title": "Designing a medication timeline for patients and physicians.", "location": ["Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA.", "MU Informatics Institute, University of Missouri, Columbia, Missouri, USA."], "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "M"},
    {"author": "Wegier P", "title": "Designing a medication timeline for patients and physicians.", "location": ["Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA.", "Temmy Latner Centre for Palliative Care, Sinai Health System, Toronto, Ontario, Canada.", "Lunenfeld-Tanenbaum Research Institute, Sinai Health System, Toronto, Ontario, Canada.", "Department of Family & Community Medicine, University of Toronto, Toronto, Ontario, Canada."], "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "M"},
    {"author": "Patel J", "title": "Designing a medication timeline for patients and physicians.", "location": "GoInvo, Boston, Massachusetts, USA.", "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Hutson A", "title": "Designing a medication timeline for patients and physicians.", "location": "Department of Health Sciences, School of Health Professions, University of Missouri, Columbia, Missouri, USA.", "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "M"},
    {"author": "Plaisant C", "title": "Designing a medication timeline for patients and physicians.", "location": "Human Computer Interaction Laboratory, Institute for Advanced Computer Studies, University of Maryland, College Park, Maryland, USA.", "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Moore JL", "title": "Designing a medication timeline for patients and physicians.", "location": ["MU Informatics Institute, University of Missouri, Columbia, Missouri, USA.", "The School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri, USA."], "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Lowrance NJ", "title": "Designing a medication timeline for patients and physicians.", "location": "The School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri, USA.", "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Boren SA", "title": "Designing a medication timeline for patients and physicians.", "location": ["MU Informatics Institute, University of Missouri, Columbia, Missouri, USA.", "Department of Health Management and Informatics, School of Medicine, University of Missouri, Columbia, Missouri, USA."], "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Designing a medication timeline for patients and physicians.", "location": "Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA.", "coords": [], "mesh": ["ambulatory care", "chronic disease", "cognition", "computer graphics", "electronic health record", "human–computer interaction"], "gender": "F"},
    {"author": "Belden JL", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "M"},
    {"author": "Koopman RJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO.", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "F"},
    {"author": "Patil SJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO.", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "F"},
    {"author": "Lowrance NJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO.", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "M"},
    {"author": "Petroski GF", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO.", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "M"},
    {"author": "Smith JB", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO.", "coords": [], "mesh": ["Ambulatory Care/organization & administration*","Chronic Disease","Electronic Health Records*","Female","Humans","Male","Models, Organizational","Physical Examination","Physicians, Primary Care/organization & administration*","Primary Health Care/methods","Primary Health Care/organization & administration*","Time Factors"], "gender": "M"},
    {"author": "Clarke MA", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "a Department of Internal Medicine , University of Nebraska Medical Center , Omaha , NE , USA.", "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "F"},
    {"author": "Moore JL", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["b School of Information Science and Learning Technologies, University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."], "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "F"},
    {"author": "Steege LM", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "c School of Nursing, University of Wisconsin , Madison , WI , USA.", "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA.", "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "F"},
    {"author": "Belden JL", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."], "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "M"},
    {"author": "Canfield SM", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA.", "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "F"},
    {"author": "Kim MS", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["e Department of Health Management and Informatics , University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."], "coords": [], "mesh": ["Data display", "electronic health records", "information seeking behavior", "patients", "primary health care"], "gender": "M"},
    {"author": "Clarke MA", "title": "How Does Learnability of Primary Care Resident Physicians Increase After Seven Months of Using an Electronic Health Record? A Longitudinal Study.", "location": "Department of Internal Medicine, Division of Cardiology, University of Nebraska Medical Center, Omaha, NE, United States.", "coords": [], "mesh": ["primary care", "physicians", "usability", "electronic health records", "computerized physician order entry", "user-computer interface"], "gender": "F"},
    {"author": "Clarke MA", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Nebraska Medical Center, USA.", "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Moore JL", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA.", "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Steege LM", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Wisconsin-Madison, USA.", "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."], "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Belden JL", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."], "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "M"},
    {"author": "Canfield SM", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."], "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Meadows SE", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."], "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Elliott SG", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA.", "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "F"},
    {"author": "Kim MS", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA", "coords": [], "mesh": ["information need", "information-seeking behavior", "patient-centered care", "patients", "primary healthcare"], "gender": "M"},
    {"author": "Koopman RJ", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "F"},
    {"author": "Steege LM", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "F"},
    {"author": "Moore JL", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "F"},
    {"author": "Clarke MA", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "F"},
    {"author": "Canfield SM", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "F"},
    {"author": "Kim MS", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "M"},
    {"author": "Belden JL", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia.", "coords": [], "mesh": ["Decision Theory", "Electronic Health Records", "Information Systems", "Medical Informatics", "Qualitative Research"], "gender": "M"},
    {"author": "Clarke MA", "title": "Determining differences in user performance between expert and novice primary care doctors when using an electronic health record (EHR).", "location": "Informatics Institute, University of Missouri, Columbia, MO, USA.", "coords": [], "mesh": ["evaluation", "medical informatics"], "gender": "F"},
    {"author": "Clarke MA", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Missouri Informatics Institute, University of Missouri.", "coords": [], "mesh": ["Acute Disease", "Adult", "Ambulatory Care*", "Ambulatory Care Information Systems*", "Chronic Disease", "Demography", "Female", "Follow-Up Studies", "Humans", "Male", "Middle Aged", "Physicians", "Primary Care*"], "gender": "F"},
    {"author": "Steege LM", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "School of Information Science and Learning Technology, University of Missouri.", "coords": [], "mesh": ["Acute Disease", "Adult", "Ambulatory Care*", "Ambulatory Care Information Systems*", "Chronic Disease", "Demography", "Female", "Follow-Up Studies", "Humans", "Male", "Middle Aged", "Physicians", "Primary Care*"], "gender": "F"},
    {"author": "Moore JL", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": ["University of Missouri Informatics Institute, University of Missouri", "Department of Family and Community Medicine, University of Missouri"], "coords": [], "mesh": ["Acute Disease", "Adult", "Ambulatory Care*", "Ambulatory Care Information Systems*", "Chronic Disease", "Demography", "Female", "Follow-Up Studies", "Humans", "Male", "Middle Aged", "Physicians", "Primary Care*"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Wisconsin-Madison School of Nursing.", "coords": [], "mesh": ["Acute Disease", "Adult", "Ambulatory Care*", "Ambulatory Care Information Systems*", "Chronic Disease", "Demography", "Female", "Follow-Up Studies", "Humans", "Male", "Middle Aged", "Physicians", "Primary Care*"], "gender": "F"},
    {"author": "Belden JL", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Wisconsin-Madison School of Nursing.", "coords": [], "mesh": ["Acute Disease", "Adult", "Ambulatory Care*", "Ambulatory Care Information Systems*", "Chronic Disease", "Demography", "Female", "Follow-Up Studies", "Humans", "Male", "Middle Aged", "Physicians", "Primary Care*"], "gender": "M"},
    {"author": "Clarke MA", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": "Informatics Institute, University of Missouri, Columbia, MO 65212, USA", "coords": [], "mesh": ["electronic health records", "general practitioners (GPs)", "information-seeking behaviour", "literature", "nurses", "primary health care", "review", "Decision Support Systems, Clinical", "Electronic Health Records", "Humans", "Information Seeking Behavior*", "Physicians, Primary Care*", "Primary Care Nursing*"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": "Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, MO, USA", "coords": [], "mesh": ["electronic health records", "general practitioners (GPs)", "information-seeking behaviour", "literature", "nurses", "primary health care", "review", "Decision Support Systems, Clinical", "Electronic Health Records", "Humans", "Information Seeking Behavior*", "Physicians, Primary Care*", "Primary Care Nursing*"], "gender": "F"},
    {"author": "Steege LM", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": "School of Nursing, University of Wisconsin‐Madison, Madison, WI, USA", "coords": [], "mesh": ["electronic health records", "general practitioners (GPs)", "information-seeking behaviour", "literature", "nurses", "primary health care", "review", "Decision Support Systems, Clinical", "Electronic Health Records", "Humans", "Information Seeking Behavior*", "Physicians, Primary Care*", "Primary Care Nursing*"], "gender": "F"},
    {"author": "Moore JL", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": ["Informatics Institute, University of Missouri, Columbia, MO, USA", "School of Information Science and Learning Technology, College of Education, Columbia, MO, USA"], "coords": [], "mesh": ["electronic health records", "general practitioners (GPs)", "information-seeking behaviour", "literature", "nurses", "primary health care", "review", "Decision Support Systems, Clinical", "Electronic Health Records", "Humans", "Information Seeking Behavior*", "Physicians, Primary Care*", "Primary Care Nursing*"], "gender": "F"},
    {"author": "Canfield SM", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": "Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, MO, USA", "coords": [], "mesh": ["electronic health records", "general practitioners (GPs)", "information-seeking behaviour", "literature", "nurses", "primary health care", "review", "Decision Support Systems, Clinical", "Electronic Health Records", "Humans", "Information Seeking Behavior*", "Physicians, Primary Care*", "Primary Care Nursing*"], "gender": "F"},
    {"author": "Belden JL", "title": "Making EHR notes more readable.", "location": "Curtis W. and Ann H. Long Department of Family & Community Medicine, University of Missouri, Columbia, MO, USA.", "coords": [], "mesh": ["Comprehension*", "Electronic Health Records*","Family Practice","User-Computer Interface*"], "gender": "M"},
    {"author": "Koopman RJ", "title": "Making EHR notes more readable.", "location": "Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, MO, USA", "coords": [], "mesh": ["Comprehension*", "Electronic Health Records*", "Family Practice", "User-Computer Interface*"], "gender": "F"},
    {"author": "Kim MS", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": ["Department of Health Management and Informatics, University of Missouri School of Medicine, Columbia, MO, USA","Center for Biomedical Informatics, Mount Sinai School of Medicine, New York, NY"], "coords": [] ,"mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "F"},
    {"author": "Shapiro JS", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": ["Center for Biomedical Informatics, Mount Sinai School of Medicine, New York, NY","Emergency Department, Mount Sinai School of Medicine, New York, NY"], "coords": [], "mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "M"},
    {"author": "Genes N", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": "Emergency Department, Mount Sinai School of Medicine, New York, NY", "coords": [], "mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "M"},
    {"author": "Aguilar MV", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": "lnformation Technology, Mount Sinai Medical Center, New York, NY", "coords": [], "mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "M"},
    {"author": "Mohrer D", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": "Center for Biomedical Informatics, Mount Sinai School of Medicine, New York, NY", "coords": [], "mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "M"},
    {"author": "Baumlin K", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": "Emergency Department, Mount Sinai School of Medicine, New York, NY", "coords": [], "mesh": ["EDIS", "Electronic health records", "emergency department information system", "usability engineering"], "gender": "M"},
    {"author": "Koopman RJ", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri 65212, USA", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "F"},
    {"author": "Kochendorfer KM", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": ["Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri", "The MU Informatics Institute, University of Missouri, Columbia, Missouri"], "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "M"},
    {"author": "Moore JL", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "F"},
    {"author": "Mehr DR", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "M"},
    {"author": "Wakefield DS", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": ["The MU Informatics Institute, University of Missouri, Columbia, Missouri", "The MU Center for Health Care Quality, University of Missouri, School of Medicine, Columbia, Missouri"], "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "M"},
    {"author": "Yadamsuren B", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "M"},
    {"author": "Coberly JS", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "M"},
    {"author": "Kruse RL", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "F"},
    {"author": "Wakefield BJ", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Sinclair School of Nursing, University of Missouri, Columbia, Missouri", "coords": [], "mesh": ["Adult", "Attitude of Health Personnel", "Data Display*", "Diabetes Mellitus/therapy*", "Efficiency", "Electronic Health Records*", "Female", "Health Status Indicators", "Humans", "Information Seeking Behavior", "Male", "Middle Aged", "Physicians", "Primary Care/psychology*", "Time Factors", "Time and Motion Studies", "User-Computer Interface*"], "gender": "F"},
    {"author": "Wakefield DS", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "Center for Health Care Quality and Department of Health Management and Informatics, University of Missouri, MO 65212, USA", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "M"},
    {"author": "Mehr D", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Family and Community Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "M"},
    {"author": "Keplinger L", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "F"},
    {"author": "Canfield S", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Family and Community Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "F"},
    {"author": "Gopidi R", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Center for Health Care Quality and Department of Health Management and Informatics, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "M"},
    {"author": "Wakefield BJ", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": ["Center for Research in the Implementation of Innovative Strategies in Practice (CRIISP)", "Department of Veterans Affairs Medical Center Iowa City, IA and the University of Missouri Sinclair School of Nursing, United States"], "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "F"},
    {"author": "Koopman RJ", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Family and Community Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "F"},
    {"author": "Kruse R", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Family and Community Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "F"},
    {"author": "Kochendorfer KM", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "University of Missouri, Department of Family and Community Medicine, United States", "coords": [], "mesh": ["Ambulatory Care/organization & administration*", "Computer Security*", "Delivery of Health Care/organization & administration*", "Hospital Communication Systems/organization & administration*", "Internet*", "Medical Records Systems, Computerized/organization & administration*", "Physician-Patient Relations*", "United States"], "gender": "M"},
    {"author": "Ebell MH", "title": "Clinical inquiries. What is a reasonable initial approach to the patient with fatigue?", "location": "Department of Family Medicine, Michigan State University, USA", "coords": [], "mesh": ["Depression/complications", "Evidence-Based Medicine", "Family Practice", "Fatigue/diagnosis", "Fatigue/etiology", "Fatigue/psychology", "Fatigue/therapy*", "Humans"], "gender": "M"}, 
  ],
  selectedAuthor: {},
  selectedCoords: {},
  coords: [
    {lat: 43.6574476, lng: -79.3907895},
    {lat: 42.4161133, lng: -71.1540886},
    {lat: 38.946767, lng: -92.3314606},
    {lat: 43.6574634, lng: -79.3903693},
    {lat: 43.6574476, lng: -79.3907895},
    {lat: 35.2073962, lng: -97.447909},
    {lat: 43.0772705, lng: -89.42855329999999},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9433975, lng: -92.3328518},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 43.6575099, lng: -79.3902938},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 38.2593468, lng: -94.33453829999999},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9460474, lng: -92.3301307},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9475867, lng: -92.33021289999999},
    {lat: 37.659659, lng: -95.4502404},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9475867, lng: -92.33021289999999},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.946767, lng: -92.3314606},
    {lat: 38.9397761, lng: -92.3277421},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9382111, lng: -92.32857369999999},
    {lat: 40.78986949999999, lng: -73.9533616},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 42.7178463, lng: -84.46887129999999},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 40.78986949999999, lng: -73.9533616},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 41.6611277, lng: -91.5301683},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381997, lng: -92.3284649},
    {lat: 38.9393889, lng: -92.3243246},
    {lat: 40.789814, lng: -73.9528821},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 40.78986949999999, lng: -73.9533616},
    {lat: 38.9386955, lng: -92.32755139999999},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9869183, lng: -76.9425543},
    {lat: 38.9393889, lng: -92.3243246},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9386955, lng: -92.32755139999999},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9393889, lng: -92.3243246},
    {lat: 41.2548532, lng: -95.9757336},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 40.7902278, lng: -73.952218},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.94482929999999, lng: -92.3300854},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9381593, lng: -92.3285858},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 40.7902278, lng: -73.952218},
    {lat: 43.0772705, lng: -89.42855329999999},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 40.7902278, lng: -73.952218},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 43.076592, lng: -89.4124875},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9393251, lng: -92.3288367},
    {lat: 38.9517053, lng: -92.3340724},
    {lat: 38.9403808, lng: -92.32773750000001},
    {lat: 38.9393251, lng: -92.3288367}
  ],
  viewport: {
    latitude: 26.850033,
    longitude: -85.6500523,
    height: "100vw",
    width: "200vh",
    zoom: 3.75
  },
  showPopup: false
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    this.getAllCoords();
    document.addEventListener("keydown", this.escFunction, false);
    const map = this.reactMap.getMap();
    map.on('load', () => {
    //add the GeoJSON layer here
      map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
          "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [-79.3907895, 43.6574476],
                    [-71.1540886, 42.4161133],
                    [-92.3314606, 38.946767],
                    [-79.3903693, 43.6574634],
                    [-79.3907895, 43.6574476],
                    [-97.447909, 35.2073962],
                    [-89.42855329999999, 43.0772705],
                    [-92.3288367, 38.9393251],
                    [-92.32773750000001, 38.9403808],
                    [-92.3328518, 38.9433975],
                    [-92.32773750000001, 38.9403808],
                    [-79.3902938, 43.6575099],
                    [-92.3288367, 38.9393251],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-92.3285858, 38.9381593],
                    [-94.33453829999999, 38.2593468],
                    [-95.9757336, 41.2548532],
                    [-92.32773750000001, 38.9403808],
                    [-92.3285858, 38.9381593],
                    [-92.32773750000001, 38.9403808],
                    [-92.3288367, 38.9393251],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-92.3300854, 38.94482929999999],
                    [-92.3301307, 38.9460474],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-92.33021289999999, 38.9475867],
                    [-95.4502404, 37.659659],
                    [-92.32773750000001, 38.9403808],
                    [-95.9757336, 41.2548532],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-95.9757336, 41.2548532],
                    [-92.3285858, 38.9381593],
                    [-92.3300854, 38.94482929999999],
                    [-92.3300854, 38.94482929999999],
                    [-89.4124875, 43.076592],
                    [-92.33021289999999, 38.9475867],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-95.9757336, 41.2548532],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-92.3300854, 38.94482929999999],
                    [-92.3300854, 38.94482929999999],
                    [-92.3284649, 38.9381997],
                    [-92.3300854, 38.94482929999999],
                    [-92.32773750000001, 38.9403808],
                    [-95.9757336, 41.2548532],
                    [-92.3285858, 38.9381593],
                    [-92.32773750000001, 38.9403808],
                    [-92.3314606, 38.946767],
                    [-92.3277421, 38.9397761],
                    [-92.3300854, 38.94482929999999],
                    [-92.3284649, 38.9381997],
                    [-92.3300854, 38.94482929999999],
                    [-92.3284649, 38.9381997],
                    [-95.9757336, 41.2548532],
                    [-92.32773750000001, 38.9403808],
                    [-92.32773750000001, 38.9403808],
                    [-92.32857369999999, 38.9382111],
                    [-73.9533616, 40.78986949999999],
                    [-92.32773750000001, 38.9403808],
                    [-92.3284649, 38.9381997],
                    [-92.32773750000001, 38.9403808],
                    [-92.3284649, 38.9381997],
                    [-84.46887129999999, 42.7178463],
                    [-92.3300854, 38.94482929999999],
                    [-92.32773750000001, 38.9403808],
                    [-92.3285858, 38.9381593],
                    [-73.9533616, 40.78986949999999],
                    [-92.3300854, 38.94482929999999],
                    [-91.5301683, 41.6611277],
                    [-89.4124875, 43.076592],
                    [-92.32773750000001, 38.9403808],
                    [-92.3284649, 38.9381997],
                    [-92.3243246, 38.9393889],
                    [-73.9528821, 40.789814],
                    [-92.32773750000001, 38.9403808],
                    [-92.3300854, 38.94482929999999],
                    [-92.3285858, 38.9381593],
                    [-73.9533616, 40.78986949999999],
                    [-92.32755139999999, 38.9386955],
                    [-89.4124875, 43.076592],
                    [-76.9425543, 38.9869183],
                    [-92.3243246, 38.9393889],
                    [-92.3288367, 38.9393251],
                    [-92.32773750000001, 38.9403808],
                    [-92.32755139999999, 38.9386955],
                    [-92.3340724, 38.9517053],
                    [-89.4124875, 43.076592],
                    [-92.3243246, 38.9393889],
                    [-95.9757336, 41.2548532],
                    [-92.3288367, 38.9393251],
                    [-92.3300854, 38.94482929999999],
                    [-92.32773750000001, 38.9403808],
                    [-92.3288367, 38.9393251],
                    [-92.3340724, 38.9517053],
                    [-92.3340724, 38.9517053],
                    [-89.4124875, 43.076592],
                    [-73.952218, 40.7902278],
                    [-92.3288367, 38.9393251],
                    [-92.3300854, 38.94482929999999],
                    [-92.32773750000001, 38.9403808],
                    [-92.3285858, 38.9381593],
                    [-92.3340724, 38.9517053],
                    [-92.3288367, 38.9393251],
                    [-89.4124875, 43.076592],
                    [-73.952218, 40.7902278],
                    [-89.42855329999999, 43.0772705],
                    [-92.32773750000001, 38.9403808],
                    [-92.3340724, 38.9517053],
                    [-89.4124875, 43.076592],
                    [-92.3288367, 38.9393251],
                    [-73.952218, 40.7902278],
                    [-92.32773750000001, 38.9403808],
                    [-89.4124875, 43.076592],
                    [-92.3340724, 38.9517053],
                    [-92.3288367, 38.9393251],
                    [-92.32773750000001, 38.9403808],
                    [-92.3288367, 38.9393251],
                    [-92.3340724, 38.9517053],
                    [-92.32773750000001, 38.9403808],
                    [-92.328836, 38.9393251]
                  ]
                }
              }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#ff880d",
          "line-width": 1
        }
      })
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  getAllCoords = () => {
    let newAuthArr = [...this.state.authors];
    let coords = this.state.coords;

    for(var i = 0; i < newAuthArr.length; i++) {
      if(typeof(newAuthArr[i].location) == "object") {
        for(var j = 0; j < newAuthArr[i].location.length; j++) {
          newAuthArr[i].coords.push(coords[j]);
        }
      }
      else {
        newAuthArr[i].coords.push(coords[i]);
      }
    }
    this.setState({ authors: newAuthArr });
  }

  escFunction(event) {
    if(event.keyCode === 27) {
      if(this.state.selectedAuthor !== null) {
        this.setState({ selectedAuthor: null, selectedCoords: null, showPopup: !this.state.showPopup })
      }
      else {
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <img height="100%" width="100%" src={wordMap2} alt="word map" />

      <ReactMapGL
        className="overlays"
        ref={(reactMap) => this.reactMap = reactMap}
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_KEY}
        mapStyle="mapbox://styles/jrfoley/ck1fzrg5a2jcs1ckzgz3h7ftj"
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        {
          this.state.authors.map((author) =>
          author.coords.map((location,i) => {
            return <Marker key={i} longitude={location.lng} latitude={location.lat} >
              <button
                className="markerBtn"
                onClick={(e) => {
                  e.preventDefault();
                  let selectedCoords = { lat: location.lat, lng: location.lng };
                  this.setState({ selectedAuthor: author, selectedCoords, showPopup: !this.state.showPopup });
                }}
                >
                  {/* {author.author.includes("Belden") ? 
                    <img
                    className="markerImg-sm"
                    src={male}
                    alt="Candy Icon"
                    />
                    :
                    <img
                    className="markerImg-sm"
                    src={candy}
                    alt="Candy Icon"
                    />
                  } */}
                  {(() => {
                    let name = author.author;
                    if(
                      name.includes("Belden") || name.includes("Canfield") || name.includes("Steege")
                      || name.includes("Koopman") || name.includes("Moore") || name.includes("Clarke")
                      || name.includes("Kim")
                    ) {
                      return  <img
                                className="markerImg-sm"
                                src={male}
                                alt="Candy Icon"
                              />
                    }
                    else {
                      return  <img
                                className="markerImg-sm"
                                src={candy}
                                alt="Candy Icon"
                              />
                    }
                    })()
                  }
                {/* <img
                  className="markerImg-sm"
                  src={candy}
                  alt="Candy Icon"
                  /> */}
              </button>
            </Marker>
            })
          )
        }
        {this.state.showPopup ? (
          <Popup
          longitude={this.state.selectedCoords.lng}
          latitude={this.state.selectedCoords.lat}
          onClose={() => {
            this.setState({ selectedAuthor: null, selectedCoords: null, showPopup: !this.state.showPopup })
          }}
          >
            <h2>{this.state.selectedAuthor.author}</h2>
            {
              this.state.selectedAuthor.gender === "M" ?
                <img height="200px" width="120px" src={male} alt="Male Pic" />
                :
                <img height="200px" width="120px" src={female} alt="Female Pic" />
            }
            <p style={{color: 'red'}}><b>Article:</b> {this.state.selectedAuthor.title}</p>
            <p style={{color: 'green'}}><b>Location:</b> {this.state.selectedAuthor.location}</p>
            <p style={{color: 'black'}}>
              <b>Mesh terms: </b>
              {this.state.selectedAuthor.mesh.map((term, i) => 
                <span key={i}>{term}, </span>
              )}
            </p>
          </Popup>
          )
          : null
        }
      </ReactMapGL>
      </div>
    );
  }
}

export default App;
