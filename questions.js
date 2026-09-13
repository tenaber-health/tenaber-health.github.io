const QUESTIONS = [
  {
    "sourceNumber": 1,
    "question": "Which historical figure is most closely associated with reduction of puerperal fever through handwashing with chlorine solution?",
    "options": [
      "Louis Pasteur",
      "Joseph Lister",
      "Ignaz Semmelweis",
      "Robert Koch",
      "Alexander Fleming"
    ],
    "answer": 2,
    "explanation": "Semmelweis recognized transmission of puerperal infection by contaminated hands and introduced chlorine-water handwashing, dramatically reducing mortality.",
    "category": "Surgical Infections",
    "id": 1
  },
  {
    "sourceNumber": 2,
    "question": "Joseph Lister's contribution to surgical infection control was primarily based on the use of:",
    "options": [
      "Penicillin",
      "Carbolic acid",
      "Chloramphenicol",
      "Formaldehyde",
      "Iodinated contrast"
    ],
    "answer": 1,
    "explanation": "Lister applied Pasteur's germ theory to surgery and used carbolic acid dressings and antisepsis to reduce postoperative infection.",
    "category": "Surgical Infections",
    "id": 2
  },
  {
    "sourceNumber": 3,
    "question": "Which of the following is NOT one of Koch's postulates?",
    "options": [
      "The organism should be present in diseased hosts",
      "The organism should be isolated in pure culture",
      "The organism should cause disease in a healthy animal",
      "The organism should be susceptible to penicillin",
      "The same organism should be reisolated from the experimentally infected animal"
    ],
    "answer": 3,
    "explanation": "Antibiotic susceptibility is not one of Koch's four original postulates.",
    "category": "Surgical Infections",
    "id": 3
  },
  {
    "sourceNumber": 4,
    "question": "Which microorganism predominates in the distal colorectum?",
    "options": [
      "Aerobic Gram-positive cocci",
      "Aerobic Gram-negative bacilli",
      "Anaerobic organisms",
      "Mycobacteria",
      "Fungi"
    ],
    "answer": 2,
    "explanation": "Anaerobes outnumber aerobes approximately 100:1 in the distal colorectum.",
    "category": "Surgical Infections",
    "id": 4
  },
  {
    "sourceNumber": 5,
    "question": "Approximately how many microorganisms are present per gram of feces according to the chapter?",
    "options": [
      "10³–10⁴",
      "10⁵–10⁶",
      "10⁷–10⁸",
      "10⁹–10¹⁰",
      "10¹¹–10¹²"
    ],
    "answer": 4,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 5
  },
  {
    "sourceNumber": 6,
    "question": "Which host protein limits bacterial growth primarily by binding iron?",
    "options": [
      "Fibrin",
      "Lactoferrin",
      "Albumin",
      "Histamine",
      "Bradykinin"
    ],
    "answer": 1,
    "explanation": "Lactoferrin and transferrin sequester iron, an essential microbial growth factor.",
    "category": "Surgical Infections",
    "id": 6
  },
  {
    "sourceNumber": 7,
    "question": "Which complement component is particularly important as a potent neutrophil chemoattractant?",
    "options": [
      "C1q",
      "C3b",
      "C4a",
      "C5a",
      "C9"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 7
  },
  {
    "sourceNumber": 8,
    "question": "Which complement component has an important opsonizing function?",
    "options": [
      "C3b",
      "C5a",
      "C5b",
      "C6",
      "C9"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 8
  },
  {
    "sourceNumber": 9,
    "question": "Which of the following is a noninfectious cause of SIRS?",
    "options": [
      "Perforated appendicitis",
      "Bacteremia",
      "Pancreatitis",
      "Wound infection",
      "Peritonitis"
    ],
    "answer": 2,
    "explanation": "SIRS may occur with infection, but also with noninfectious conditions such as pancreatitis, polytrauma, malignancy, and transfusion reactions.",
    "category": "Surgical Infections",
    "id": 9
  },
  {
    "sourceNumber": 10,
    "question": "According to the chapter, sepsis is best described as:",
    "options": [
      "Infection without systemic response",
      "SIRS without infection",
      "Infection associated with SIRS",
      "Organ failure without infection",
      "Hypotension alone"
    ],
    "answer": 2,
    "explanation": "In the chapter's terminology, sepsis = infection + SIRS. Questions 11–20: Sepsis, Microbiology, and Antimicrobials",
    "category": "Surgical Infections",
    "id": 10
  },
  {
    "sourceNumber": 11,
    "question": "Severe sepsis is defined as sepsis accompanied by:",
    "options": [
      "Fever",
      "Leukocytosis",
      "Tachycardia",
      "New-onset organ dysfunction",
      "Positive blood culture"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 11
  },
  {
    "sourceNumber": 12,
    "question": "Septic shock is characterized by:",
    "options": [
      "Fever and leukocytosis only",
      "Positive blood culture",
      "Persistent hypotension despite adequate fluid resuscitation",
      "Tachycardia above 90/min",
      "Elevated CRP alone"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 12
  },
  {
    "sourceNumber": 13,
    "question": "In the PIRO system, the letter P represents:",
    "options": [
      "Perfusion",
      "Predisposition",
      "Pathogen",
      "Pressure",
      "Prognosis"
    ],
    "answer": 1,
    "explanation": "PIRO = Predisposition, Insult/Infection, Response, Organ dysfunction.",
    "category": "Surgical Infections",
    "id": 13
  },
  {
    "sourceNumber": 14,
    "question": "In the PIRO classification system, \"I\" refers to:",
    "options": [
      "Immunity",
      "Inflammation",
      "Insult/infection",
      "Intervention",
      "Infection resistance"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 14
  },
  {
    "sourceNumber": 15,
    "question": "Which organism is a Gram-positive aerobic coccus commonly responsible for surgical-site infection?",
    "options": [
      "E. coli",
      "Bacteroides fragilis",
      "Staphylococcus aureus",
      "Pseudomonas aeruginosa",
      "Fusobacterium"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 15
  },
  {
    "sourceNumber": 16,
    "question": "Which organism is a major anaerobic pathogen in colorectal infection?",
    "options": [
      "S. aureus",
      "E. coli",
      "Bacteroides fragilis",
      "Klebsiella pneumoniae",
      "Enterococcus faecalis"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 16
  },
  {
    "sourceNumber": 17,
    "question": "Which organism is a Gram-negative bacillus?",
    "options": [
      "Streptococcus pyogenes",
      "Staphylococcus epidermidis",
      "E. coli",
      "Enterococcus faecium",
      "Peptostreptococcus"
    ],
    "answer": 2,
    "explanation": "E. coli, Klebsiella, Enterobacter, Serratia, Citrobacter, and Acinetobacter are among the Gram-negative bacilli important in surgical infection.",
    "category": "Surgical Infections",
    "id": 17
  },
  {
    "sourceNumber": 18,
    "question": "Which organism is classified as an acid-fast bacillus?",
    "options": [
      "Streptococcus pneumoniae",
      "Mycobacterium tuberculosis",
      "Enterococcus faecalis",
      "Bacteroides fragilis",
      "Candida albicans"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 18
  },
  {
    "sourceNumber": 19,
    "question": "Which fungal organism is particularly important as a nosocomial pathogen in surgical patients?",
    "options": [
      "Candida albicans",
      "Streptococcus pyogenes",
      "E. coli",
      "Mycobacterium tuberculosis",
      "Klebsiella pneumoniae"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 19
  },
  {
    "sourceNumber": 20,
    "question": "Which class of antimicrobial inhibits bacterial DNA synthesis by inhibiting topoisomerase II and IV? Questions 21–30: Antibiotic Prophylaxis and Source Control",
    "options": [
      "Aminoglycosides",
      "Fluoroquinolones",
      "Glycopeptides",
      "Macrolides",
      "Tetracyclines"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 20
  },
  {
    "sourceNumber": 21,
    "question": "The initial prophylactic dose of an antibiotic should generally be administered:",
    "options": [
      "2 hours after incision",
      "Within 30 minutes before incision",
      "At skin closure only",
      "The night before surgery",
      "24 hours after surgery"
    ],
    "answer": 1,
    "explanation": "The chapter specifically recommends administration within 30 minutes of incision to ensure adequate tissue concentrations.",
    "category": "Surgical Infections",
    "id": 21
  },
  {
    "sourceNumber": 22,
    "question": "During a prolonged operation, prophylactic antibiotics should be redosed primarily according to the drug's:",
    "options": [
      "Volume of distribution",
      "Protein binding",
      "Half-life",
      "Route of administration",
      "Renal clearance only"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 22
  },
  {
    "sourceNumber": 23,
    "question": "Routine prophylactic antibiotics should generally NOT be continued for more than:",
    "options": [
      "6 hours",
      "12 hours",
      "24 hours",
      "48 hours",
      "7 days"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 23
  },
  {
    "sourceNumber": 24,
    "question": "Which of the following best describes surgical source control?",
    "options": [
      "Administration of broad-spectrum antibiotics alone",
      "Measurement of inflammatory markers",
      "Drainage/removal of infected material and elimination of the underlying source",
      "Obtaining blood cultures",
      "Observation until the patient develops shock"
    ],
    "answer": 2,
    "explanation": "Source control includes drainage of pus, debridement of devitalized tissue, removal of foreign bodies, and correction of the underlying source such as bowel perforation.",
    "category": "Surgical Infections",
    "id": 24
  },
  {
    "sourceNumber": 25,
    "question": "A patient has a large intra-abdominal abscess. Which treatment is most consistent with the chapter's principles?",
    "options": [
      "Antibiotics alone in all cases",
      "Immediate total colectomy",
      "Percutaneous drainage when feasible",
      "Observation",
      "Steroids"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 25
  },
  {
    "sourceNumber": 26,
    "question": "Which situation most clearly requires urgent operative source control?",
    "options": [
      "Mild cellulitis",
      "Small uncomplicated furuncle",
      "Ongoing bowel perforation",
      "Asymptomatic bacteriuria",
      "Simple viral infection"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 26
  },
  {
    "sourceNumber": 27,
    "question": "A patient with gangrenous perforated appendicitis has achieved adequate source control. Antibiotics should primarily cover:",
    "options": [
      "Gram-positive aerobes only",
      "Gram-negative aerobes only",
      "Anaerobes only",
      "Aerobes and anaerobes",
      "Viruses"
    ],
    "answer": 3,
    "explanation": "The chapter recommends antimicrobial therapy directed against both aerobic and anaerobic organisms for perforated appendicitis and other polymicrobial intra-abdominal infections.",
    "category": "Surgical Infections",
    "id": 27
  },
  {
    "sourceNumber": 28,
    "question": "Which statement regarding empiric antimicrobial therapy is most appropriate?",
    "options": [
      "It should always be narrow from the beginning",
      "It should never be given before cultures",
      "Broad initial coverage may be appropriate in serious infection",
      "It should routinely continue for several weeks",
      "Culture results are never useful"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 28
  },
  {
    "sourceNumber": 29,
    "question": "When cultures become available, antimicrobial therapy for a monomicrobial infection should generally be:",
    "options": [
      "Escalated regardless of results",
      "Tailored to the microbiologic findings",
      "Stopped immediately",
      "Changed to antifungal therapy",
      "Continued without consideration of clinical response"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 29
  },
  {
    "sourceNumber": 30,
    "question": "The major danger of unnecessarily prolonged antibiotic therapy includes all EXCEPT:",
    "options": [
      "Drug toxicity",
      "C. difficile infection",
      "Antimicrobial resistance",
      "Increased cost",
      "Guaranteed reduction in mortality"
    ],
    "answer": 4,
    "explanation": "The chapter emphasizes antibiotic misuse as a cause of toxicity, C. difficile infection, resistance, and increased cost. Questions 31–40: Surgical Site Infections",
    "category": "Surgical Infections",
    "id": 30
  },
  {
    "sourceNumber": 31,
    "question": "A superficial incisional SSI involves:",
    "options": [
      "Peritoneal cavity only",
      "Fascia and muscle only",
      "Skin and subcutaneous tissue",
      "An internal organ only",
      "Bone"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 31
  },
  {
    "sourceNumber": 32,
    "question": "Which is a patient-related risk factor for SSI?",
    "options": [
      "Short operation",
      "Normothermia",
      "Diabetes mellitus",
      "Appropriate skin preparation",
      "Adequate prophylaxis"
    ],
    "answer": 2,
    "explanation": "Diabetes, obesity, malnutrition, immunosuppression, anemia, peripheral vascular disease, and older age are among the listed patient risk factors.",
    "category": "Surgical Infections",
    "id": 32
  },
  {
    "sourceNumber": 33,
    "question": "Which local factor increases SSI risk?",
    "options": [
      "Normoglycemia",
      "Prolonged procedure",
      "Adequate skin preparation",
      "Appropriate antibiotic prophylaxis",
      "Normothermia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 33
  },
  {
    "sourceNumber": 34,
    "question": "A hernia repair without entry into a hollow viscus is classified as which wound class?",
    "options": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV",
      "Organ/space SSI"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 34
  },
  {
    "sourceNumber": 35,
    "question": "Controlled entry into a hollow viscus without significant spillage is characteristic of:",
    "options": [
      "Clean wound",
      "Clean-contaminated wound",
      "Contaminated wound",
      "Dirty wound",
      "Necrotic wound"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 35
  },
  {
    "sourceNumber": 36,
    "question": "Gross spillage of intestinal contents during surgery most appropriately places a wound into:",
    "options": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV",
      "Class ID"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 36
  },
  {
    "sourceNumber": 37,
    "question": "A wound created in the presence of overt pus is classified as:",
    "options": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV",
      "Class ID"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 37
  },
  {
    "sourceNumber": 38,
    "question": "Which wound class includes a perforated viscus with extensive contamination?",
    "options": [
      "I",
      "II",
      "III",
      "IV",
      "ID"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 38
  },
  {
    "sourceNumber": 39,
    "question": "Which factor is part of the NNIS risk index?",
    "options": [
      "Serum sodium",
      "ASA physical status >2",
      "Hemoglobin concentration",
      "Blood group",
      "Age alone"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 39
  },
  {
    "sourceNumber": 40,
    "question": "Which statement about incisional SSI treatment is most consistent with the chapter?",
    "options": [
      "All cases require prolonged antibiotics",
      "Incision and drainage is usually the primary treatment",
      "Antibiotics must always precede drainage",
      "Culture results must be obtained before opening the wound",
      "Steroids are first-line treatment"
    ],
    "answer": 1,
    "explanation": "The chapter states that effective therapy for an incisional SSI consists primarily of incision and drainage; antibiotics are reserved for significant cellulitis or concurrent SIRS. Questions 41–50: Intra-Abdominal Infection and Necrotizing Soft Tissue Infection",
    "category": "Surgical Infections",
    "id": 40
  },
  {
    "sourceNumber": 41,
    "question": "Primary peritonitis is most strongly associated with:",
    "options": [
      "Perforated appendix",
      "Perforated diverticulum",
      "Ascites or peritoneal dialysis",
      "Traumatic bowel injury",
      "Anastomotic leak"
    ],
    "answer": 2,
    "explanation": "Primary peritonitis occurs particularly in patients with ascites and those undergoing peritoneal dialysis and is generally monomicrobial.",
    "category": "Surgical Infections",
    "id": 41
  },
  {
    "sourceNumber": 42,
    "question": "Which feature favors primary rather than secondary peritonitis?",
    "options": [
      "Perforated colon",
      "Pneumoperitoneum",
      "Monomicrobial infection",
      "Anastomotic leak",
      "Gross fecal contamination"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 42
  },
  {
    "sourceNumber": 43,
    "question": "The most important treatment component of secondary peritonitis is:",
    "options": [
      "Antipyretic therapy",
      "Source control",
      "Steroid therapy",
      "Observation",
      "Antifungal therapy alone"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 43
  },
  {
    "sourceNumber": 44,
    "question": "Failure to achieve adequate source control in secondary intra-abdominal infection is associated with:",
    "options": [
      "Better outcome",
      "No effect on mortality",
      "Markedly increased mortality",
      "Immediate spontaneous recovery",
      "Reduced need for antibiotics"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 44
  },
  {
    "sourceNumber": 45,
    "question": "Tertiary peritonitis is best described as:",
    "options": [
      "First episode of uncomplicated appendicitis",
      "Persistent/recurrent infection after treatment of secondary peritonitis",
      "Viral peritonitis",
      "Sterile chemical peritonitis only",
      "Acute pancreatitis without infection"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 45
  },
  {
    "sourceNumber": 46,
    "question": "Which imaging modality is particularly useful for diagnosing most intra-abdominal abscesses?",
    "options": [
      "Plain abdominal radiography",
      "Ultrasound only",
      "CT scan",
      "MRI brain",
      "Bone scan"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 46
  },
  {
    "sourceNumber": 47,
    "question": "Which clinical finding is particularly suggestive of necrotizing soft tissue infection?",
    "options": [
      "Mild itching",
      "Pain out of proportion to physical findings",
      "Isolated low-grade fever",
      "Chronic painless swelling",
      "Simple erythema without systemic illness"
    ],
    "answer": 1,
    "explanation": "Severe pain disproportionate to the visible findings is an important warning sign. Other findings include bullae, crepitus, skin discoloration, brawny induration, and \"dishwater\" fluid.",
    "category": "Surgical Infections",
    "id": 47
  },
  {
    "sourceNumber": 48,
    "question": "In a patient with strong clinical suspicion of necrotizing soft tissue infection, the next most appropriate step is:",
    "options": [
      "Wait for MRI confirmation",
      "Observe for 24 hours",
      "Immediate surgical exploration and debridement",
      "Oral antibiotics only",
      "Repeat CBC tomorrow"
    ],
    "answer": 2,
    "explanation": "Imaging should not delay surgery when the diagnosis is seriously suspected. Radical removal of affected tissue is essential.",
    "category": "Surgical Infections",
    "id": 48
  },
  {
    "sourceNumber": 49,
    "question": "Which statement about necrotizing soft tissue infection is correct?",
    "options": [
      "A single operation is always sufficient",
      "Antibiotics alone are usually curative",
      "Repeated debridement may be necessary",
      "Imaging is mandatory before surgery",
      "The disease is always monomicrobial"
    ],
    "answer": 2,
    "explanation": "Patients should often return to the operating room to assess disease progression and undergo further debridement when necessary.",
    "category": "Surgical Infections",
    "id": 49
  },
  {
    "sourceNumber": 50,
    "question": "Which combination provides broad antimicrobial coverage recommended in the chapter for severe necrotizing soft tissue infection?",
    "options": [
      "Penicillin alone",
      "Vancomycin plus a carbapenem",
      "Fluconazole alone",
      "Metronidazole alone",
      "Cefazolin alone"
    ],
    "answer": 1,
    "explanation": "The chapter describes coverage against Gram-positive and Gram-negative aerobes and anaerobes, such as vancomycin plus a carbapenem, with high-dose penicillin G used when clostridial pathogens are a concern. High-yield facts to memorize Antibiotic prophylaxis: within 30 minutes before incision, redose during prolonged surgery according to drug half-life, and routine prophylaxis should not continue beyond 24 hours. Source control: drain pus, debride necrotic tissue, remove foreign material, and correct the ongoing source of contamination. Secondary peritonitis: polymicrobial → source control + aerobic/anaerobic coverage. Necrotizing soft tissue infection: early recognition + immediate radical debridement + repeated reassessment/debridement. Part 4 can continue with Questions 51–100, emphasizing clinical scenarios, antibiotic selection, wound classification, sepsis, intra-abdominal infection, and difficult board-style questions. part 4 Thought for a few seconds Chapter 6 – Surgical Infections PART 4: SBA MCQs 51–100 Clinical and Board-Style Questions Questions 51–60: Skin, Soft Tissue, and Necrotizing Infection",
    "category": "Surgical Infections",
    "id": 50
  },
  {
    "sourceNumber": 51,
    "question": "A 62-year-old diabetic man develops rapidly progressive swelling of the thigh, severe pain, fever, and hypotension. The skin has a bronze discoloration and marked tenderness. The most important next step is:",
    "options": [
      "CT scan before treatment",
      "MRI before treatment",
      "Immediate surgical exploration and debridement",
      "Oral antibiotics",
      "Observation for 12 hours"
    ],
    "answer": 2,
    "explanation": "Necrotizing soft tissue infection is primarily a clinical diagnosis. When strongly suspected, imaging should not delay operative exposure, direct inspection, and radical debridement.",
    "category": "Surgical Infections",
    "id": 51
  },
  {
    "sourceNumber": 52,
    "question": "Which finding is particularly characteristic of necrotizing soft tissue infection?",
    "options": [
      "Mild pain proportional to erythema",
      "Pain out of proportion to physical findings",
      "Isolated pruritus",
      "Chronic painless ulcer",
      "Non-tender edema"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 52
  },
  {
    "sourceNumber": 53,
    "question": "\"Dishwater pus\" in a patient with rapidly progressive soft-tissue infection suggests:",
    "options": [
      "Simple cellulitis",
      "Necrotizing soft tissue infection",
      "Viral infection",
      "Fungal dermatitis",
      "Simple furunculosis"
    ],
    "answer": 1,
    "explanation": "Grayish, turbid, semipurulent \"dishwater\" material is a classic finding described in severe necrotizing infection.",
    "category": "Surgical Infections",
    "id": 53
  },
  {
    "sourceNumber": 54,
    "question": "Which group is at increased risk for aggressive necrotizing soft tissue infection?",
    "options": [
      "Young healthy patients only",
      "Elderly, diabetic, immunosuppressed patients",
      "Patients with isolated migraine",
      "Patients with uncomplicated viral infections",
      "Patients with normal vascular supply only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 54
  },
  {
    "sourceNumber": 55,
    "question": "Approximately what proportion of aggressive necrotizing soft tissue infections are polymicrobial according to the chapter?",
    "options": [
      "10%",
      "25%",
      "50%",
      "75%",
      "95%"
    ],
    "answer": 2,
    "explanation": "The chapter states that approximately half are polymicrobial, while the remainder may be caused by a single organism such as S. pyogenes, P. aeruginosa, or C. perfringens.",
    "category": "Surgical Infections",
    "id": 55
  },
  {
    "sourceNumber": 56,
    "question": "Which organism is specifically listed as a possible single-organism cause of necrotizing soft tissue infection?",
    "options": [
      "S. pyogenes",
      "E. coli only",
      "Candida only",
      "M. tuberculosis only",
      "H. pylori"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 56
  },
  {
    "sourceNumber": 57,
    "question": "During operative treatment of necrotizing soft tissue infection, which microbiologic test should be performed on tissue fluid?",
    "options": [
      "Viral culture only",
      "Gram stain",
      "Stool microscopy",
      "Urinalysis",
      "Skin-prick testing"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 57
  },
  {
    "sourceNumber": 58,
    "question": "Which antimicrobial regimen provides broad coverage described in the chapter for necrotizing soft tissue infection?",
    "options": [
      "Vancomycin plus a carbapenem",
      "Fluconazole alone",
      "Cefazolin alone",
      "Metronidazole alone",
      "Penicillin V alone"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 58
  },
  {
    "sourceNumber": 59,
    "question": "High-dose aqueous penicillin G is particularly useful in necrotizing infection when there is concern for:",
    "options": [
      "Candida",
      "Clostridial infection",
      "Pseudomonas alone",
      "Tuberculosis",
      "MRSA only"
    ],
    "answer": 1,
    "explanation": "The chapter specifically mentions high-dose aqueous penicillin G for treatment of clostridial pathogens.",
    "category": "Surgical Infections",
    "id": 59
  },
  {
    "sourceNumber": 60,
    "question": "What is an important principle in postoperative management of necrotizing soft tissue infection?",
    "options": [
      "One operation is always sufficient",
      "Routine discharge after debridement",
      "Scheduled return to the operating room for reassessment",
      "Avoid further tissue inspection",
      "Stop antibiotics immediately"
    ],
    "answer": 2,
    "explanation": "Repeat exploration and additional debridement may be required until progression has stopped and no further infected tissue remains. Questions 61–70: Skin Infections and Postoperative Nosocomial Infection",
    "category": "Surgical Infections",
    "id": 60
  },
  {
    "sourceNumber": 61,
    "question": "Simple cellulitis is generally treated with:",
    "options": [
      "Immediate laparotomy",
      "Antibiotics directed at skin flora",
      "Chemotherapy",
      "Antifungal therapy",
      "Surgical amputation"
    ],
    "answer": 1,
    "explanation": "Superficial infections such as cellulitis, erysipelas, and lymphangitis generally respond to antimicrobial therapy directed against Gram-positive skin flora.",
    "category": "Surgical Infections",
    "id": 61
  },
  {
    "sourceNumber": 62,
    "question": "A furuncle is best managed initially by:",
    "options": [
      "Immediate chemotherapy",
      "Incision and drainage when necessary",
      "Total body irradiation",
      "Antituberculous therapy",
      "Antiviral therapy"
    ],
    "answer": 1,
    "explanation": "Furuncles may drain spontaneously or require incision and drainage. Antibiotics are added when significant cellulitis is present or fails to resolve.",
    "category": "Surgical Infections",
    "id": 62
  },
  {
    "sourceNumber": 63,
    "question": "Persistent skin infection despite adequate drainage and antibiotics should raise suspicion for:",
    "options": [
      "MRSA",
      "M. tuberculosis",
      "Candida only",
      "Pneumococcus",
      "H. pylori"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 63
  },
  {
    "sourceNumber": 64,
    "question": "Which is an important postoperative nosocomial infection in surgical patients?",
    "options": [
      "UTI",
      "SSIs",
      "Pneumonia",
      "Bacteremia",
      "All of the above"
    ],
    "answer": 4,
    "explanation": "The chapter specifically identifies SSIs, UTIs, pneumonia, and bacteremic episodes as common postoperative nosocomial infections.",
    "category": "Surgical Infections",
    "id": 64
  },
  {
    "sourceNumber": 65,
    "question": "The risk of postoperative UTI is increased by prolonged use of:",
    "options": [
      "Nasogastric tube only",
      "Indwelling urinary catheter",
      "Oxygen mask",
      "Chest X-ray",
      "Surgical drain alone"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 65
  },
  {
    "sourceNumber": 66,
    "question": "In a mobile postoperative patient, an indwelling urinary catheter should generally be removed:",
    "options": [
      "After 1–2 days when feasible",
      "After 2 weeks",
      "After 1 month",
      "Only at discharge",
      "Never"
    ],
    "answer": 0,
    "explanation": "The chapter emphasizes removing postoperative urinary catheters as quickly as possible, typically within 1–2 days if the patient is mobile.",
    "category": "Surgical Infections",
    "id": 66
  },
  {
    "sourceNumber": 67,
    "question": "According to the chapter, postoperative UTI may be suspected when urinalysis demonstrates:",
    "options": [
      "WBCs or bacteria",
      "Leukocyte esterase",
      "Both A and B",
      "Hyperbilirubinemia",
      "Ketones only"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 67
  },
  {
    "sourceNumber": 68,
    "question": "Prolonged mechanical ventilation is associated with increased risk of:",
    "options": [
      "Pneumonia",
      "Appendicitis",
      "Cholelithiasis",
      "Osteomyelitis",
      "Cellulitis only"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 68
  },
  {
    "sourceNumber": 69,
    "question": "Which combination increases suspicion for hospital-acquired pneumonia?",
    "options": [
      "Fever + purulent sputum + elevated WBC + new chest radiographic abnormality",
      "Headache alone",
      "Hematuria alone",
      "Constipation alone",
      "Jaundice alone"
    ],
    "answer": 0,
    "explanation": "The chapter describes purulent sputum, leukocytosis, fever, and a new chest X-ray abnormality as important diagnostic findings.",
    "category": "Surgical Infections",
    "id": 69
  },
  {
    "sourceNumber": 70,
    "question": "An important management principle in mechanically ventilated surgical patients is to: Questions 71–80: Catheter Infection, Hepatic Abscess, Pancreatic Infection",
    "options": [
      "Continue ventilation as long as possible",
      "Wean from mechanical ventilation as soon as feasible",
      "Avoid assessing oxygenation",
      "Routinely administer antibiotics indefinitely",
      "Avoid spontaneous breathing trials"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 70
  },
  {
    "sourceNumber": 71,
    "question": "Which factor increases the risk of intravascular catheter infection?",
    "options": [
      "Short duration of catheterization",
      "Emergency insertion under nonsterile conditions",
      "Proper sterile insertion",
      "Early catheter removal",
      "Absence of catheter manipulation"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 71
  },
  {
    "sourceNumber": 72,
    "question": "Approximately what percentage of intravascular catheters were described as becoming colonized in the chapter?",
    "options": [
      "1%",
      "5%",
      "10%",
      "25%",
      "75%"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 72
  },
  {
    "sourceNumber": 73,
    "question": "Approximately what percentage were described as being associated with bacteremia?",
    "options": [
      "1%",
      "5%",
      "15%",
      "25%",
      "50%"
    ],
    "answer": 1,
    "explanation": "The chapter states that approximately 25% become colonized and approximately 5% become associated with bacteremia.",
    "category": "Surgical Infections",
    "id": 73
  },
  {
    "sourceNumber": 74,
    "question": "Which finding increases suspicion for catheter-related bloodstream infection?",
    "options": [
      "Negative peripheral culture and negative catheter culture",
      "Same organism recovered from peripheral and catheter-drawn blood cultures",
      "Normal WBC count only",
      "Isolated hypertension",
      "Normal temperature in every case"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 74
  },
  {
    "sourceNumber": 75,
    "question": "Most pyogenic hepatic abscesses are caused by:",
    "options": [
      "Viruses",
      "Bacteria",
      "Parasites only",
      "Fungi only",
      "Mycobacteria only"
    ],
    "answer": 1,
    "explanation": "The chapter states that approximately 80% of hepatic abscesses are pyogenic.",
    "category": "Surgical Infections",
    "id": 75
  },
  {
    "sourceNumber": 76,
    "question": "Which organism is among the common aerobic organisms causing pyogenic hepatic abscess?",
    "options": [
      "E. coli",
      "M. tuberculosis",
      "Candida only",
      "HSV",
      "VZV"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 76
  },
  {
    "sourceNumber": 77,
    "question": "A patient has a large pyogenic liver abscess accessible percutaneously. The preferred treatment described is:",
    "options": [
      "Antibiotics alone in all cases",
      "Percutaneous drainage plus antibiotics",
      "Observation",
      "Steroids",
      "Chemotherapy"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 77
  },
  {
    "sourceNumber": 78,
    "question": "Small multiple hepatic abscesses measuring less than 1 cm may be managed with:",
    "options": [
      "Sampling and prolonged antimicrobial therapy",
      "Mandatory hepatectomy",
      "Liver transplantation",
      "No treatment",
      "Steroids alone"
    ],
    "answer": 0,
    "explanation": "The chapter recommends sampling and 4–6 weeks of antibiotics for small, multiple abscesses.",
    "category": "Surgical Infections",
    "id": 78
  },
  {
    "sourceNumber": 79,
    "question": "Routine prophylactic antibiotics to prevent infected pancreatic necrosis are:",
    "options": [
      "Mandatory",
      "Recommended in every severe pancreatitis case",
      "Not supported by the trials discussed in the chapter",
      "Required for 6 weeks",
      "Required until CT normalization"
    ],
    "answer": 2,
    "explanation": "Randomized multicenter trials and meta-analyses cited in the chapter failed to show benefit from routine prophylactic antibiotics for prevention of infected pancreatic necrosis.",
    "category": "Surgical Infections",
    "id": 79
  },
  {
    "sourceNumber": 80,
    "question": "Gas within the pancreas on CT in the appropriate clinical setting suggests:",
    "options": [
      "Sterile pancreatitis",
      "Infected pancreatic necrosis",
      "Chronic gastritis",
      "Acute cholecystitis",
      "Viral hepatitis"
    ],
    "answer": 1,
    "explanation": "The chapter states that gas within the pancreas on CT, or positive aspiration Gram stain/culture, mandates operative intervention in this setting. Questions 81–90: Sepsis and Critical Care",
    "category": "Surgical Infections",
    "id": 80
  },
  {
    "sourceNumber": 81,
    "question": "Which is a cornerstone of successful treatment of severe surgical sepsis?",
    "options": [
      "Delaying antibiotics until complete culture results are available",
      "Rapid resuscitation, appropriate antibiotics, and source control",
      "Steroids alone",
      "Observation only",
      "Surgery only without resuscitation"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 81
  },
  {
    "sourceNumber": 82,
    "question": "Delayed administration of effective antimicrobial therapy in septic shock is associated with:",
    "options": [
      "Improved survival",
      "Increased mortality",
      "No change in outcome",
      "Reduced source-control requirement",
      "Reduced organ dysfunction"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 82
  },
  {
    "sourceNumber": 83,
    "question": "Which parameter can be used to assess tissue perfusion in severe sepsis?",
    "options": [
      "Plasma lactate",
      "Hair color",
      "Serum cholesterol alone",
      "Skin pigmentation",
      "Eye color"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 83
  },
  {
    "sourceNumber": 84,
    "question": "Which vasopressor is listed in the chapter among agents used for septic shock?",
    "options": [
      "Norepinephrine",
      "Insulin",
      "Furosemide",
      "Digoxin",
      "Warfarin"
    ],
    "answer": 0,
    "explanation": "The chapter discusses norepinephrine, dopamine, and vasopressin as vasopressor options in septic shock.",
    "category": "Surgical Infections",
    "id": 84
  },
  {
    "sourceNumber": 85,
    "question": "In a patient with septic shock who remains unresponsive to fluids and vasopressors, the chapter discusses possible use of:",
    "options": [
      "Low-dose hydrocortisone",
      "Oral iron",
      "Vitamin C alone",
      "Calcium carbonate",
      "Warfarin"
    ],
    "answer": 0,
    "explanation": "The chapter discusses low-dose hydrocortisone in patients with septic shock who do not respond adequately to fluids and vasopressors.",
    "category": "Surgical Infections",
    "id": 85
  },
  {
    "sourceNumber": 86,
    "question": "For sepsis-associated acute lung injury, the chapter recommends a tidal volume approximately:",
    "options": [
      "2 mL/kg",
      "4 mL/kg",
      "6 mL/kg",
      "10 mL/kg",
      "15 mL/kg"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 86
  },
  {
    "sourceNumber": 87,
    "question": "The recommended maximum plateau pressure described for these ventilated patients is approximately:",
    "options": [
      "10 cm H₂O",
      "20 cm H₂O",
      "30 cm H₂O",
      "40 cm H₂O",
      "50 cm H₂O"
    ],
    "answer": 2,
    "explanation": "The chapter describes tidal volumes of 6 mL/kg and plateau pressures of 30 cm H₂O or less.",
    "category": "Surgical Infections",
    "id": 87
  },
  {
    "sourceNumber": 88,
    "question": "According to the chapter, red blood cell transfusion in critically ill surgical patients should generally be reserved for hemoglobin below:",
    "options": [
      "12 g/dL",
      "10 g/dL",
      "9 g/dL",
      "8 g/dL",
      "7 g/dL"
    ],
    "answer": 4,
    "explanation": "The chapter describes a restrictive transfusion strategy with transfusion generally reserved for hemoglobin <7 g/dL, with more liberal strategies in selected patients.",
    "category": "Surgical Infections",
    "id": 88
  },
  {
    "sourceNumber": 89,
    "question": "Which condition may justify a more liberal transfusion strategy according to the chapter?",
    "options": [
      "Severe coronary artery disease",
      "Simple uncomplicated cellulitis",
      "Mild headache",
      "Controlled hypertension",
      "Stable obesity"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 89
  },
  {
    "sourceNumber": 90,
    "question": "Which component of the PIRO classification represents the degree of organ failure? Questions 91–100: Blood-Borne Pathogens and Integrated Clinical Problems",
    "options": [
      "P",
      "I",
      "R",
      "O",
      "S"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 90
  },
  {
    "sourceNumber": 91,
    "question": "The estimated risk of HIV transmission following a needlestick from an HIV-infected source cited in the chapter is approximately:",
    "options": [
      "0.003%",
      "0.03%",
      "0.3%",
      "3%",
      "30%"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 91
  },
  {
    "sourceNumber": 92,
    "question": "Which is NOT a component of universal precautions described in the chapter?",
    "options": [
      "Use of barriers when blood exposure is anticipated",
      "Handwashing after blood/body-fluid contact",
      "Careful handling of sharps",
      "Deliberate recapping of contaminated needles",
      "Proper disposal of sharp instruments"
    ],
    "answer": 3,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 92
  },
  {
    "sourceNumber": 93,
    "question": "After significant occupational exposure to a known HIV-positive patient, postexposure prophylaxis should ideally be started:",
    "options": [
      "Within hours",
      "After 1 week",
      "After 1 month",
      "Only after symptoms develop",
      "Only after seroconversion"
    ],
    "answer": 0,
    "explanation": "The chapter emphasizes initiating HIV postexposure prophylaxis within hours rather than days.",
    "category": "Surgical Infections",
    "id": 93
  },
  {
    "sourceNumber": 94,
    "question": "Which healthcare worker exposure most clearly warrants consideration of HIV postexposure prophylaxis?",
    "options": [
      "Significant occupational exposure to an HIV-positive patient",
      "Casual conversation",
      "Sitting beside the patient",
      "Touching intact skin",
      "Reading the patient's chart"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 94
  },
  {
    "sourceNumber": 95,
    "question": "A surgeon develops fever, hypotension, leukocytosis, and severe thigh pain. Examination reveals rapidly progressive tissue destruction and crepitus. Which combination is most appropriate?",
    "options": [
      "Observe and obtain MRI next week",
      "Immediate debridement plus broad-spectrum antimicrobial therapy",
      "Oral antifungal treatment only",
      "Antibiotics only without surgery",
      "Steroids only"
    ],
    "answer": 1,
    "explanation": "Necrotizing infection requires urgent operative source control and antimicrobial treatment; delaying surgery worsens outcome.",
    "category": "Surgical Infections",
    "id": 95
  },
  {
    "sourceNumber": 96,
    "question": "A postoperative patient has persistent fever and leukocytosis despite apparently adequate treatment for perforated appendicitis. CT shows a localized abdominal collection. The most appropriate next step is:",
    "options": [
      "Continue the same antibiotics indefinitely",
      "Percutaneous drainage when feasible",
      "Immediate chemotherapy",
      "Steroids",
      "Ignore the collection"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Surgical Infections",
    "id": 96
  },
  {
    "sourceNumber": 97,
    "question": "A patient develops an incisional SSI with purulent drainage but no significant cellulitis or systemic inflammatory response. The most appropriate treatment is:",
    "options": [
      "Incision and drainage",
      "6 weeks of IV antibiotics",
      "Chemotherapy",
      "Antifungal therapy",
      "Observation without opening the wound"
    ],
    "answer": 0,
    "explanation": "The chapter states that uncomplicated incisional SSI is primarily managed by opening and draining the wound; systemic antibiotics are reserved for significant cellulitis or SIRS.",
    "category": "Surgical Infections",
    "id": 97
  },
  {
    "sourceNumber": 98,
    "question": "A patient undergoing prolonged colorectal surgery received an appropriate initial prophylactic antibiotic dose. What is the most appropriate reason to administer an additional intraoperative dose?",
    "options": [
      "The wound became infected",
      "The operation exceeded the antibiotic's effective half-life",
      "The patient developed fever before surgery",
      "The surgeon wants to continue antibiotics indefinitely",
      "The patient has mild nausea"
    ],
    "answer": 1,
    "explanation": "Prophylactic antibiotics should be redosed during prolonged procedures to maintain adequate tissue concentrations.",
    "category": "Surgical Infections",
    "id": 98
  },
  {
    "sourceNumber": 99,
    "question": "Which statement best summarizes the most important determinant of outcome in severe surgical infection?",
    "options": [
      "Duration of antibiotic therapy alone",
      "The number of antibiotics administered",
      "Effective and timely source control",
      "Positive blood culture alone",
      "Use of antifungal therapy in every patient"
    ],
    "answer": 2,
    "explanation": "Throughout the chapter, drainage, debridement, removal of infected material, and correction of the underlying source are emphasized as central determinants of outcome.",
    "category": "Surgical Infections",
    "id": 99
  },
  {
    "sourceNumber": 100,
    "question": "A patient with severe intra-abdominal infection continues to deteriorate despite antibiotics. Which principle should prompt urgent reassessment?",
    "options": [
      "Antibiotics always compensate for inadequate source control",
      "Persistent sepsis should prompt a search for residual or ongoing infection",
      "More prolonged antibiotics always solve the problem",
      "Cultures are always more important than clinical status",
      "Surgery should be avoided after the initial procedure"
    ],
    "answer": 1,
    "explanation": "When clinical evidence of infection persists, the chapter emphasizes searching for residual intra-abdominal infection, abscess, leaking anastomosis, or another source rather than simply continuing or escalating antibiotics.",
    "category": "Surgical Infections",
    "id": 100
  },
  {
    "sourceNumber": 1,
    "question": "The first event in normal hemostasis is:",
    "options": [
      "Platelet aggregation",
      "Fibrinolysis",
      "Vasoconstriction",
      "Fibrin formation"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 101
  },
  {
    "sourceNumber": 2,
    "question": "Platelet adhesion requires:",
    "options": [
      "GP IIb/IIIa",
      "Fibrinogen",
      "von Willebrand factor",
      "Factor VIII"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 102
  },
  {
    "sourceNumber": 3,
    "question": "Platelet aggregation depends on:",
    "options": [
      "GP Ib",
      "GP IIb/IIIa",
      "Factor IX",
      "Factor XII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 103
  },
  {
    "sourceNumber": 4,
    "question": "Aspirin inhibits:",
    "options": [
      "ADP receptors",
      "COX",
      "Thrombin",
      "Factor Xa"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 104
  },
  {
    "sourceNumber": 5,
    "question": "Clopidogrel inhibits:",
    "options": [
      "COX",
      "ADP receptor",
      "Factor Xa",
      "Thrombin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 105
  },
  {
    "sourceNumber": 6,
    "question": "PT measures:",
    "options": [
      "Intrinsic pathway",
      "Extrinsic pathway",
      "Platelet function",
      "Fibrinolysis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 106
  },
  {
    "sourceNumber": 7,
    "question": "aPTT measures:",
    "options": [
      "Extrinsic pathway",
      "Intrinsic pathway",
      "Platelet count",
      "D-dimer"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 107
  },
  {
    "sourceNumber": 8,
    "question": "Hemophilia A results from deficiency of:",
    "options": [
      "VII",
      "VIII",
      "IX",
      "XI"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 108
  },
  {
    "sourceNumber": 9,
    "question": "Christmas disease is deficiency of:",
    "options": [
      "VIII",
      "IX",
      "XI",
      "XIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 109
  },
  {
    "sourceNumber": 10,
    "question": "Most common inherited bleeding disorder:",
    "options": [
      "Hemophilia A",
      "vWD",
      "DIC",
      "ITP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 110
  },
  {
    "sourceNumber": 11,
    "question": "D-dimer reflects:",
    "options": [
      "Platelet activation",
      "Fibrinolysis",
      "PT",
      "Vitamin K deficiency"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 111
  },
  {
    "sourceNumber": 12,
    "question": "Heparin is reversed by:",
    "options": [
      "Vitamin K",
      "Protamine",
      "PCC",
      "FFP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 112
  },
  {
    "sourceNumber": 13,
    "question": "Warfarin is monitored using:",
    "options": [
      "BT",
      "PT/INR",
      "aPTT",
      "TT"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 113
  },
  {
    "sourceNumber": 14,
    "question": "HIT is associated with:",
    "options": [
      "Bleeding only",
      "Thrombosis",
      "Leukopenia",
      "Pancytopenia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 114
  },
  {
    "sourceNumber": 15,
    "question": "FFP contains:",
    "options": [
      "Platelets only",
      "RBCs",
      "All clotting factors",
      "Albumin only"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 115
  },
  {
    "sourceNumber": 16,
    "question": "Cryoprecipitate is rich in:",
    "options": [
      "Albumin",
      "Fibrinogen",
      "Platelets",
      "Leukocytes"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 116
  },
  {
    "sourceNumber": 17,
    "question": "GP Ib defect causes:",
    "options": [
      "Glanzmann thrombasthenia",
      "Bernard-Soulier syndrome",
      "Hemophilia",
      "HIT"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 117
  },
  {
    "sourceNumber": 18,
    "question": "GP IIb/IIIa defect causes:",
    "options": [
      "Bernard-Soulier syndrome",
      "Glanzmann thrombasthenia",
      "ITP",
      "DIC"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 118
  },
  {
    "sourceNumber": 19,
    "question": "Main fibrinolytic enzyme:",
    "options": [
      "Thrombin",
      "Plasmin",
      "Xa",
      "VIIIa"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 119
  },
  {
    "sourceNumber": 20,
    "question": "Platelet lifespan is approximately: 21–30: (Continue with similar SBA format covering DIC, liver disease, trauma coagulopathy, transfusion, platelet disorders, and topical hemostatic agents.) I can also prepare: Part 2: SBA MCQs 31–80 Part 3: SBA MCQs 81–150 Clinical case-based MCQs with explanations in the style of surgery board examinations. continue to part 2 and 3 Below is the continuation of the SBA MCQs based on your uploaded chapter (Schwartz's Principles of Surgery, Chapter 4: Hemostasis, Surgical Bleeding, and Transfusion). PART 2: SBA MCQs (Questions 31–80)",
    "options": [
      "1–2 days",
      "3–4 days",
      "7–10 days",
      "30 days"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 120
  },
  {
    "sourceNumber": 31,
    "question": "Which coagulation factor stabilizes the fibrin clot by cross-linking fibrin?",
    "options": [
      "Factor VIII",
      "Factor X",
      "Factor XIII",
      "Factor XI"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 121
  },
  {
    "sourceNumber": 32,
    "question": "Which natural anticoagulant directly inhibits thrombin (IIa)?",
    "options": [
      "Protein C",
      "Protein S",
      "Antithrombin III",
      "TFPI"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 122
  },
  {
    "sourceNumber": 33,
    "question": "Protein C primarily inactivates:",
    "options": [
      "VII and IX",
      "V and VIII",
      "II and X",
      "XI and XII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 123
  },
  {
    "sourceNumber": 34,
    "question": "Tissue factor pathway inhibitor inhibits:",
    "options": [
      "Factor XII",
      "Factor XI",
      "Tissue factor–VIIa complex",
      "Factor XIII"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 124
  },
  {
    "sourceNumber": 35,
    "question": "The principal activator of plasminogen in vivo is:",
    "options": [
      "Urokinase",
      "Tissue plasminogen activator",
      "Factor XII",
      "Thrombin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 125
  },
  {
    "sourceNumber": 36,
    "question": "Factor V Leiden predisposes to:",
    "options": [
      "Bleeding",
      "Venous thrombosis",
      "Hemophilia",
      "DIC"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 126
  },
  {
    "sourceNumber": 37,
    "question": "The inheritance pattern of Hemophilia A is:",
    "options": [
      "Autosomal dominant",
      "Autosomal recessive",
      "X-linked recessive",
      "Mitochondrial"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 127
  },
  {
    "sourceNumber": 38,
    "question": "Patients with severe hemophilia commonly develop:",
    "options": [
      "Liver failure",
      "Hemarthrosis",
      "Pulmonary fibrosis",
      "Endocarditis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 128
  },
  {
    "sourceNumber": 39,
    "question": "The treatment of choice for Hemophilia A is:",
    "options": [
      "Platelet transfusion",
      "Factor VIII concentrate",
      "Vitamin K",
      "Cryoprecipitate only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 129
  },
  {
    "sourceNumber": 40,
    "question": "The most common presentation of von Willebrand disease is:",
    "options": [
      "Deep muscle hematoma",
      "Hemarthrosis",
      "Mucosal bleeding",
      "Intracranial hemorrhage"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 130
  },
  {
    "sourceNumber": 41,
    "question": "Desmopressin (DDAVP) acts by increasing release of:",
    "options": [
      "Factor X",
      "Platelets",
      "von Willebrand factor",
      "Factor XIII"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 131
  },
  {
    "sourceNumber": 42,
    "question": "Factor XI deficiency is also known as:",
    "options": [
      "Hemophilia A",
      "Christmas disease",
      "Hemophilia C",
      "Glanzmann disease"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 132
  },
  {
    "sourceNumber": 43,
    "question": "Glanzmann thrombasthenia is due to deficiency of:",
    "options": [
      "GP Ib",
      "GP IIb/IIIa",
      "vWF",
      "Factor VIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 133
  },
  {
    "sourceNumber": 44,
    "question": "Bernard–Soulier syndrome is caused by:",
    "options": [
      "GP IIb/IIIa deficiency",
      "GP Ib deficiency",
      "Platelet deficiency",
      "Factor IX deficiency"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 134
  },
  {
    "sourceNumber": 45,
    "question": "Storage pool disease primarily affects:",
    "options": [
      "Platelet granules",
      "Factor VIII",
      "Fibrinogen",
      "Factor XIII"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 135
  },
  {
    "sourceNumber": 46,
    "question": "Immune thrombocytopenia (ITP) is initially treated with:",
    "options": [
      "Platelets",
      "Corticosteroids",
      "Aspirin",
      "Vitamin K"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 136
  },
  {
    "sourceNumber": 47,
    "question": "Which drug is commonly used in steroid-resistant ITP?",
    "options": [
      "Rituximab",
      "Aspirin",
      "Clopidogrel",
      "Protamine"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 137
  },
  {
    "sourceNumber": 48,
    "question": "The platelet count in HIT usually falls:",
    "options": [
      "Within 1 hour",
      "5–7 days after heparin exposure",
      "1 month later",
      "After surgery only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 138
  },
  {
    "sourceNumber": 49,
    "question": "The first step in treating suspected HIT is:",
    "options": [
      "Give platelets",
      "Stop heparin",
      "Start warfarin",
      "Give vitamin K"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 139
  },
  {
    "sourceNumber": 50,
    "question": "Argatroban is:",
    "options": [
      "Vitamin K antagonist",
      "Direct thrombin inhibitor",
      "Platelet inhibitor",
      "Factor VIII concentrate"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 140
  },
  {
    "sourceNumber": 51,
    "question": "Thrombotic thrombocytopenic purpura is associated with deficiency of:",
    "options": [
      "Protein C",
      "ADAMTS13",
      "Protein S",
      "Antithrombin III"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 141
  },
  {
    "sourceNumber": 52,
    "question": "Treatment of TTP includes:",
    "options": [
      "Platelet transfusion",
      "Plasmapheresis",
      "Aspirin",
      "Vitamin K"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 142
  },
  {
    "sourceNumber": 53,
    "question": "Hemolytic uremic syndrome is commonly associated with:",
    "options": [
      "Streptococcus pneumoniae",
      "Escherichia coli O157:H7",
      "Salmonella",
      "Shigella flexneri"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 143
  },
  {
    "sourceNumber": 54,
    "question": "Hypersplenism causes thrombocytopenia primarily by:",
    "options": [
      "Bone marrow failure",
      "Platelet sequestration",
      "Platelet antibodies",
      "Platelet destruction by drugs"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 144
  },
  {
    "sourceNumber": 55,
    "question": "A platelet count above ______ is generally safe for surgery.",
    "options": [
      "10,000/µL",
      "20,000/µL",
      "50,000/µL",
      "100,000/µL"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 145
  },
  {
    "sourceNumber": 56,
    "question": "Massive transfusion commonly causes:",
    "options": [
      "Platelet dysfunction",
      "Polycythemia",
      "Hypercalcemia",
      "Leukocytosis"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 146
  },
  {
    "sourceNumber": 57,
    "question": "Uremic platelet dysfunction improves after:",
    "options": [
      "Vitamin K",
      "Dialysis",
      "Platelet transfusion alone",
      "Aspirin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 147
  },
  {
    "sourceNumber": 58,
    "question": "Aspirin irreversibly inhibits:",
    "options": [
      "GP IIb/IIIa",
      "COX",
      "ADP receptor",
      "Factor Xa"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 148
  },
  {
    "sourceNumber": 59,
    "question": "Elective surgery should generally be delayed for approximately ______ after stopping aspirin.",
    "options": [
      "24 hours",
      "3 days",
      "7 days",
      "14 days"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 149
  },
  {
    "sourceNumber": 60,
    "question": "DIC is characterized by: PART 3: SBA MCQs (Questions 81–150) Clinical Case-Based Questions",
    "options": [
      "Isolated thrombosis",
      "Consumption of clotting factors",
      "Factor VIII deficiency",
      "Elevated platelet count"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 150
  },
  {
    "sourceNumber": 81,
    "question": "A 10-year-old boy presents with recurrent painful swollen knees. Laboratory testing shows prolonged aPTT with normal PT. The most likely diagnosis is:",
    "options": [
      "von Willebrand disease",
      "Hemophilia A",
      "DIC",
      "ITP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 151
  },
  {
    "sourceNumber": 82,
    "question": "A patient develops thrombocytopenia 6 days after beginning heparin therapy and has a new deep venous thrombosis. What is the best management?",
    "options": [
      "Continue heparin",
      "Platelet transfusion only",
      "Stop heparin and start argatroban",
      "Give vitamin K"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 152
  },
  {
    "sourceNumber": 83,
    "question": "A woman has lifelong epistaxis and menorrhagia. Bleeding time is prolonged and vWF is decreased. Initial treatment is:",
    "options": [
      "FFP",
      "DDAVP",
      "Platelets",
      "Protamine"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 153
  },
  {
    "sourceNumber": 84,
    "question": "Which blood product provides fibrinogen replacement?",
    "options": [
      "PRBC",
      "Cryoprecipitate",
      "Platelets",
      "Albumin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 154
  },
  {
    "sourceNumber": 85,
    "question": "A patient with liver cirrhosis and INR 2.5 requires emergency surgery. Appropriate therapy includes:",
    "options": [
      "Aspirin",
      "FFP",
      "Protamine",
      "DDAVP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 155
  },
  {
    "sourceNumber": 86,
    "question": "Which blood product contains all coagulation factors?",
    "options": [
      "PRBC",
      "Platelets",
      "Fresh Frozen Plasma",
      "Albumin"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 156
  },
  {
    "sourceNumber": 87,
    "question": "The antidote for unfractionated heparin is:",
    "options": [
      "PCC",
      "Vitamin K",
      "Protamine sulfate",
      "Tranexamic acid"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 157
  },
  {
    "sourceNumber": 88,
    "question": "Which laboratory test monitors warfarin therapy?",
    "options": [
      "Bleeding time",
      "PT/INR",
      "aPTT",
      "D-dimer"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 158
  },
  {
    "sourceNumber": 89,
    "question": "The hallmark laboratory finding in DIC is:",
    "options": [
      "Elevated platelet count",
      "Elevated D-dimer",
      "Normal fibrinogen",
      "Short PT"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 159
  },
  {
    "sourceNumber": 90,
    "question": "The most effective treatment of TTP is: These 150 MCQs comprehensively cover the major concepts presented in the uploaded chapter and are suitable for undergraduate medical examinations and surgical board review. continue Qs 91-150 Part 3: SBA MCQs (Questions 91–150) Based on the uploaded chapter: Schwartz's Principles of Surgery, Chapter 4: Hemostasis, Surgical Bleeding, and Transfusion",
    "options": [
      "Platelet transfusion",
      "Splenectomy",
      "Plasma exchange",
      "Aspirin"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 160
  },
  {
    "sourceNumber": 91,
    "question": "The preferred blood product for increasing oxygen-carrying capacity in most patients is:",
    "options": [
      "Whole blood",
      "Packed red blood cells",
      "Fresh frozen plasma",
      "Platelets"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 161
  },
  {
    "sourceNumber": 92,
    "question": "One unit of platelet concentrate increases the platelet count by approximately:",
    "options": [
      "2,000/µL",
      "5,000/µL",
      "10,000/µL",
      "50,000/µL"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 162
  },
  {
    "sourceNumber": 93,
    "question": "The shelf life of platelet concentrates is approximately:",
    "options": [
      "24 hours",
      "72 hours",
      "120 hours",
      "14 days"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 163
  },
  {
    "sourceNumber": 94,
    "question": "Fresh frozen plasma is the only blood product containing:",
    "options": [
      "Platelets",
      "Red blood cells",
      "All coagulation factors including factor V",
      "Albumin only"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 164
  },
  {
    "sourceNumber": 95,
    "question": "Cryoprecipitate is particularly useful in treating:",
    "options": [
      "Leukopenia",
      "Hypofibrinogenemia",
      "Iron deficiency",
      "Polycythemia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 165
  },
  {
    "sourceNumber": 96,
    "question": "Universal donor blood in emergencies is:",
    "options": [
      "AB positive",
      "O positive",
      "O negative",
      "AB negative"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 166
  },
  {
    "sourceNumber": 97,
    "question": "Rh-negative women of childbearing age should ideally receive:",
    "options": [
      "Rh-positive blood",
      "Rh-negative blood",
      "Type AB blood",
      "Whole blood only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 167
  },
  {
    "sourceNumber": 98,
    "question": "Autologous blood donation generally requires a hemoglobin of at least:",
    "options": [
      "9 g/dL",
      "10 g/dL",
      "11 g/dL",
      "13 g/dL"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 168
  },
  {
    "sourceNumber": 99,
    "question": "Leukocyte-reduced blood products decrease:",
    "options": [
      "Hyperkalemia",
      "Febrile nonhemolytic transfusion reactions",
      "Hypocalcemia",
      "Hemolysis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 169
  },
  {
    "sourceNumber": 100,
    "question": "Massive transfusion commonly produces:",
    "options": [
      "Hypercoagulability",
      "Platelet dysfunction",
      "Polycythemia",
      "Leukocytosis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 170
  },
  {
    "sourceNumber": 101,
    "question": "The principal indication for platelet transfusion is:",
    "options": [
      "Iron deficiency anemia",
      "Thrombocytopenia with bleeding or before invasive procedures",
      "Vitamin B12 deficiency",
      "Elevated INR alone"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 171
  },
  {
    "sourceNumber": 102,
    "question": "The primary indication for FFP is:",
    "options": [
      "Chronic anemia",
      "Coagulation factor deficiency",
      "Leukopenia",
      "Hypoalbuminemia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 172
  },
  {
    "sourceNumber": 103,
    "question": "Which coagulation factor is unstable during blood storage?",
    "options": [
      "Factor IX",
      "Factor V",
      "Factor II",
      "Factor XIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 173
  },
  {
    "sourceNumber": 104,
    "question": "The major complication of thrombin entering the circulation is:",
    "options": [
      "Hemolysis",
      "Disseminated intravascular coagulation",
      "Pulmonary edema",
      "Hyperkalemia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 174
  },
  {
    "sourceNumber": 105,
    "question": "Gelfoam acts mainly by:",
    "options": [
      "Platelet destruction",
      "Mechanical matrix for clot formation",
      "Factor VIII replacement",
      "Vitamin K production"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 175
  },
  {
    "sourceNumber": 106,
    "question": "Fibrin sealants are particularly useful in:",
    "options": [
      "Hypercalcemia",
      "Patients with coagulation disorders",
      "Leukopenia",
      "Polycythemia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 176
  },
  {
    "sourceNumber": 107,
    "question": "The Harmonic Scalpel achieves hemostasis using:",
    "options": [
      "Laser energy",
      "Ultrasonic vibration",
      "Cryotherapy",
      "Chemical coagulation"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 177
  },
  {
    "sourceNumber": 108,
    "question": "Electrocautery stops bleeding primarily by:",
    "options": [
      "Platelet activation",
      "Protein coagulation",
      "Vitamin K synthesis",
      "Fibrinolysis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 178
  },
  {
    "sourceNumber": 109,
    "question": "Bone wax is mainly used to control bleeding from:",
    "options": [
      "Liver",
      "Bone",
      "Skin",
      "Veins"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 179
  },
  {
    "sourceNumber": 110,
    "question": "The simplest mechanical method of hemostasis is:",
    "options": [
      "Electrocautery",
      "Digital pressure",
      "Thrombin spray",
      "Fibrin glue"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 180
  },
  {
    "sourceNumber": 111,
    "question": "The Pringle maneuver controls bleeding from the:",
    "options": [
      "Kidney",
      "Liver",
      "Spleen",
      "Pancreas"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 181
  },
  {
    "sourceNumber": 112,
    "question": "Warfarin anticoagulation is rapidly reversed with:",
    "options": [
      "Protamine",
      "Fresh frozen plasma",
      "Aspirin",
      "Clopidogrel"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 182
  },
  {
    "sourceNumber": 113,
    "question": "Protamine sulfate reverses:",
    "options": [
      "Warfarin",
      "Unfractionated heparin",
      "Aspirin",
      "Clopidogrel"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 183
  },
  {
    "sourceNumber": 114,
    "question": "A serious adverse effect of protamine is:",
    "options": [
      "Bradycardia only",
      "Hypotension and anaphylactoid reactions",
      "Hypertension",
      "Renal failure"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 184
  },
  {
    "sourceNumber": 115,
    "question": "Low-molecular-weight heparin is monitored (when necessary) using:",
    "options": [
      "PT",
      "Anti-Xa assay",
      "Bleeding time",
      "D-dimer"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 185
  },
  {
    "sourceNumber": 116,
    "question": "Trauma-induced coagulopathy is associated with:",
    "options": [
      "Activation of protein C",
      "Factor VIII deficiency only",
      "Increased platelet count",
      "Vitamin K deficiency"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 186
  },
  {
    "sourceNumber": 117,
    "question": "The acute coagulopathy of trauma is characterized by:",
    "options": [
      "Hyperfibrinolysis",
      "Isolated thrombocytosis",
      "Polycythemia",
      "Factor XIII deficiency"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 187
  },
  {
    "sourceNumber": 118,
    "question": "The laboratory abnormality typical of antiphospholipid syndrome is:",
    "options": [
      "Short PT",
      "Prolonged aPTT",
      "Low INR",
      "Thrombocytopenia only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 188
  },
  {
    "sourceNumber": 119,
    "question": "Despite prolonged aPTT, antiphospholipid syndrome predisposes to:",
    "options": [
      "Bleeding",
      "Thrombosis",
      "Pancytopenia",
      "Hemophilia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 189
  },
  {
    "sourceNumber": 120,
    "question": "Patients with liver disease commonly have:",
    "options": [
      "Increased coagulation factor synthesis",
      "Prolonged PT/INR",
      "Polycythemia",
      "Leukocytosis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 190
  },
  {
    "sourceNumber": 121,
    "question": "The liver synthesizes:",
    "options": [
      "Factor VIII only",
      "Most coagulation factors",
      "Platelets",
      "von Willebrand factor only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 191
  },
  {
    "sourceNumber": 122,
    "question": "The first priority in managing DIC is:",
    "options": [
      "Platelet transfusion",
      "Treat the underlying cause",
      "Vitamin K",
      "Splenectomy"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 192
  },
  {
    "sourceNumber": 123,
    "question": "The laboratory marker most useful for fibrinolysis is:",
    "options": [
      "Bleeding time",
      "D-dimer",
      "PT only",
      "Platelet count"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 193
  },
  {
    "sourceNumber": 124,
    "question": "One characteristic of primary fibrinolysis is:",
    "options": [
      "Increased plasmin activity",
      "Factor VIII deficiency",
      "Increased platelet count",
      "Hyperviscosity"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 194
  },
  {
    "sourceNumber": 125,
    "question": "The preferred treatment for factor XI deficiency before surgery is:",
    "options": [
      "Platelets",
      "Fresh frozen plasma",
      "Cryoprecipitate",
      "Aspirin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 195
  },
  {
    "sourceNumber": 126,
    "question": "Patients with von Willebrand disease typically present with:",
    "options": [
      "Deep muscle hematomas only",
      "Mucosal bleeding",
      "Hemarthrosis only",
      "Retroperitoneal bleeding"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 196
  },
  {
    "sourceNumber": 127,
    "question": "The main function of thrombin is to convert:",
    "options": [
      "Prothrombin to factor X",
      "Fibrinogen to fibrin",
      "Plasminogen to plasmin",
      "Factor VIII to IX"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 197
  },
  {
    "sourceNumber": 128,
    "question": "The principal enzyme responsible for clot lysis is:",
    "options": [
      "Thrombin",
      "Plasmin",
      "Factor Xa",
      "Protein C"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 198
  },
  {
    "sourceNumber": 129,
    "question": "Which coagulation factor is known as the Christmas factor?",
    "options": [
      "VII",
      "IX",
      "XI",
      "XIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 199
  },
  {
    "sourceNumber": 130,
    "question": "Patients with Glanzmann thrombasthenia have defective:",
    "options": [
      "Platelet adhesion",
      "Platelet aggregation",
      "Fibrinolysis",
      "Coagulation factor synthesis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 200
  },
  {
    "sourceNumber": 131,
    "question": "The platelet receptor responsible for adhesion is:",
    "options": [
      "GP IIb/IIIa",
      "GP Ib",
      "GP VI",
      "GP Ia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 201
  },
  {
    "sourceNumber": 132,
    "question": "Factor XIII deficiency classically presents with:",
    "options": [
      "Delayed bleeding",
      "Immediate platelet dysfunction",
      "Polycythemia",
      "Leukocytosis"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 202
  },
  {
    "sourceNumber": 133,
    "question": "Umbilical stump bleeding is characteristic of:",
    "options": [
      "Factor XIII deficiency",
      "Hemophilia A",
      "ITP",
      "HIT"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 203
  },
  {
    "sourceNumber": 134,
    "question": "The most common congenital bleeding disorder is:",
    "options": [
      "Hemophilia A",
      "von Willebrand disease",
      "Hemophilia B",
      "Factor XI deficiency"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 204
  },
  {
    "sourceNumber": 135,
    "question": "The coagulation test most affected by heparin therapy is:",
    "options": [
      "PT",
      "aPTT",
      "INR",
      "Bleeding time"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 205
  },
  {
    "sourceNumber": 136,
    "question": "Warfarin primarily affects:",
    "options": [
      "Platelets",
      "Vitamin K-dependent clotting factors",
      "Factor XIII",
      "vWF"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 206
  },
  {
    "sourceNumber": 137,
    "question": "The vitamin K-dependent coagulation factors are:",
    "options": [
      "I, II, III, IV",
      "II, VII, IX, X",
      "V, VIII, XI, XII",
      "VIII, IX, XI, XIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 207
  },
  {
    "sourceNumber": 138,
    "question": "The recommended platelet count for most elective surgical procedures is at least:",
    "options": [
      "20,000/µL",
      "50,000/µL",
      "100,000/µL",
      "150,000/µL"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 208
  },
  {
    "sourceNumber": 139,
    "question": "The preferred treatment for severe hypofibrinogenemia is:",
    "options": [
      "Platelets",
      "Cryoprecipitate",
      "PRBC",
      "Albumin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 209
  },
  {
    "sourceNumber": 140,
    "question": "Platelet factor 4 (PF4) is clinically important because it:",
    "options": [
      "Activates plasmin",
      "Binds heparin and is involved in HIT",
      "Produces fibrinogen",
      "Activates protein C"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 210
  },
  {
    "sourceNumber": 141,
    "question": "Which blood product has the greatest oxygen-carrying capacity?",
    "options": [
      "Platelets",
      "Packed red blood cells",
      "Fresh frozen plasma",
      "Cryoprecipitate"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 211
  },
  {
    "sourceNumber": 142,
    "question": "Patients with severe hemophilia often experience spontaneous:",
    "options": [
      "Epistaxis only",
      "Hemarthrosis",
      "Petechiae",
      "Purpura"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 212
  },
  {
    "sourceNumber": 143,
    "question": "Which condition is most strongly associated with ADAMTS13 deficiency?",
    "options": [
      "ITP",
      "TTP",
      "HIT",
      "DIC"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 213
  },
  {
    "sourceNumber": 144,
    "question": "The principal treatment for thrombotic thrombocytopenic purpura is:",
    "options": [
      "Platelet transfusion",
      "Plasma exchange",
      "Vitamin K",
      "Aspirin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 214
  },
  {
    "sourceNumber": 145,
    "question": "A prolonged PT with a normal aPTT suggests a defect in the:",
    "options": [
      "Intrinsic pathway",
      "Extrinsic pathway",
      "Common pathway only",
      "Platelet pathway"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 215
  },
  {
    "sourceNumber": 146,
    "question": "Which blood product is particularly rich in fibrinogen, factor VIII, factor XIII, and von Willebrand factor?",
    "options": [
      "PRBC",
      "Cryoprecipitate",
      "Platelets",
      "Albumin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 216
  },
  {
    "sourceNumber": 147,
    "question": "The major goal of local hemostasis is:",
    "options": [
      "Increase platelet count",
      "Stop bleeding from the injured vessel",
      "Raise fibrinogen levels",
      "Reverse anticoagulation"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 217
  },
  {
    "sourceNumber": 148,
    "question": "The most common cause of bleeding in surgery is:",
    "options": [
      "DIC",
      "Inadequate local hemostasis",
      "Hemophilia",
      "ITP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 218
  },
  {
    "sourceNumber": 149,
    "question": "The first-line method to control diffuse capillary bleeding intraoperatively is:",
    "options": [
      "Cryoprecipitate",
      "Direct pressure with packs",
      "Splenectomy",
      "Vitamin K"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 219
  },
  {
    "sourceNumber": 150,
    "question": "The cornerstone of successful surgical hemostasis is: Part 4: Advanced SBA MCQs (Questions 151–200)",
    "options": [
      "Routine transfusion",
      "Meticulous surgical technique",
      "Platelet transfusion",
      "Routine anticoagulant reversal"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 220
  },
  {
    "sourceNumber": 151,
    "question": "A patient scheduled for surgery has prolonged PT with normal aPTT. Which factor deficiency is most likely?",
    "options": [
      "Factor VIII",
      "Factor IX",
      "Factor VII",
      "Factor XI"
    ],
    "answer": 2,
    "explanation": "PT evaluates the extrinsic pathway; factor VII is the major isolated factor in this pathway.",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 221
  },
  {
    "sourceNumber": 152,
    "question": "A patient has prolonged aPTT that corrects after mixing with normal plasma. This suggests:",
    "options": [
      "Lupus anticoagulant",
      "Factor deficiency",
      "Heparin contamination",
      "Platelet disorder"
    ],
    "answer": 1,
    "explanation": "Correction indicates replacement of a missing clotting factor.",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 222
  },
  {
    "sourceNumber": 153,
    "question": "A prolonged aPTT that fails to correct on mixing study suggests:",
    "options": [
      "Hemophilia A",
      "Factor IX deficiency",
      "Circulating inhibitor",
      "Vitamin K deficiency"
    ],
    "answer": 2,
    "explanation": "Inhibitors such as lupus anticoagulant prevent correction.",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 223
  },
  {
    "sourceNumber": 154,
    "question": "The best initial laboratory evaluation of unexplained surgical bleeding includes:",
    "options": [
      "D-dimer only",
      "PT, aPTT, platelet count, fibrinogen",
      "Bleeding time only",
      "Factor VIII assay only"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 224
  },
  {
    "sourceNumber": 155,
    "question": "A patient on unfractionated heparin requires emergency surgery. The reversal agent is:",
    "options": [
      "Vitamin K",
      "Protamine sulfate",
      "PCC",
      "Cryoprecipitate"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 225
  },
  {
    "sourceNumber": 156,
    "question": "A patient receiving warfarin develops life-threatening bleeding. The fastest reversal strategy includes:",
    "options": [
      "Aspirin",
      "FFP or PCC with vitamin K",
      "Platelets only",
      "Protamine"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 226
  },
  {
    "sourceNumber": 157,
    "question": "Which finding suggests platelet-type bleeding rather than coagulation factor deficiency?",
    "options": [
      "Hemarthrosis",
      "Deep muscle hematoma",
      "Petechiae and mucosal bleeding",
      "Retroperitoneal bleeding"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 227
  },
  {
    "sourceNumber": 158,
    "question": "A patient with hemophilia A develops bleeding. Which laboratory pattern is expected?",
    "options": [
      "Normal PT, prolonged aPTT",
      "Prolonged PT only",
      "Low platelet count",
      "Elevated D-dimer only"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 228
  },
  {
    "sourceNumber": 159,
    "question": "The primary defect in von Willebrand disease affects:",
    "options": [
      "Platelet adhesion",
      "Platelet production",
      "Fibrin breakdown",
      "Factor X activation"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 229
  },
  {
    "sourceNumber": 160,
    "question": "Which medication increases platelet activity by increasing vWF release?",
    "options": [
      "DDAVP",
      "Protamine",
      "Warfarin",
      "Aspirin"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 230
  },
  {
    "sourceNumber": 161,
    "question": "A trauma patient presents with hypothermia, acidosis, and bleeding. This represents:",
    "options": [
      "Virchow triad",
      "Trauma lethal triad",
      "Platelet syndrome",
      "Antiphospholipid syndrome"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 231
  },
  {
    "sourceNumber": 162,
    "question": "The main mechanism of trauma-induced coagulopathy includes:",
    "options": [
      "Protein C activation and hyperfibrinolysis",
      "Increased vitamin K",
      "Excess platelet production",
      "Increased fibrin formation"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 232
  },
  {
    "sourceNumber": 163,
    "question": "A trauma patient requires massive transfusion. The major complication to monitor is:",
    "options": [
      "Hypernatremia",
      "Hypocalcemia",
      "Hyperthyroidism",
      "Polycythemia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 233
  },
  {
    "sourceNumber": 164,
    "question": "Citrate toxicity during massive transfusion causes:",
    "options": [
      "Hypercalcemia",
      "Hypocalcemia",
      "Hyperkalemia only",
      "Increased clotting"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 234
  },
  {
    "sourceNumber": 165,
    "question": "The main purpose of damage-control resuscitation is:",
    "options": [
      "Normalize blood pressure immediately",
      "Prevent worsening coagulopathy",
      "Avoid transfusion",
      "Increase platelet destruction"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 235
  },
  {
    "sourceNumber": 166,
    "question": "A patient with DIC will typically have:",
    "options": [
      "High platelets and high fibrinogen",
      "Low platelets and high D-dimer",
      "Normal coagulation tests",
      "Shortened PT"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 236
  },
  {
    "sourceNumber": 167,
    "question": "The first treatment priority in DIC is:",
    "options": [
      "Platelet transfusion",
      "Treat underlying disease",
      "Vitamin K administration",
      "Splenectomy"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 237
  },
  {
    "sourceNumber": 168,
    "question": "Cryoprecipitate is most appropriate when a patient has:",
    "options": [
      "Low fibrinogen",
      "Low hemoglobin",
      "Low WBC count",
      "Iron deficiency"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 238
  },
  {
    "sourceNumber": 169,
    "question": "Packed RBC transfusion primarily improves:",
    "options": [
      "Platelet function",
      "Oxygen delivery",
      "Coagulation factor levels",
      "Fibrinolysis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 239
  },
  {
    "sourceNumber": 170,
    "question": "Fresh frozen plasma should NOT routinely be used for:",
    "options": [
      "Active bleeding with factor deficiency",
      "Warfarin reversal",
      "Mild INR elevation without bleeding",
      "DIC"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 240
  },
  {
    "sourceNumber": 171,
    "question": "A platelet transfusion is indicated in:",
    "options": [
      "Severe thrombocytopenia with active bleeding",
      "Elevated INR only",
      "Iron deficiency anemia",
      "Hemophilia A"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 241
  },
  {
    "sourceNumber": 172,
    "question": "The lifespan of circulating platelets is approximately:",
    "options": [
      "1 day",
      "3 days",
      "7–10 days",
      "30 days"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 242
  },
  {
    "sourceNumber": 173,
    "question": "Aspirin causes prolonged platelet dysfunction because it:",
    "options": [
      "Blocks ADP receptors",
      "Irreversibly inhibits COX",
      "Removes vWF",
      "Blocks thrombin"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 243
  },
  {
    "sourceNumber": 174,
    "question": "Clopidogrel inhibits platelet function by blocking:",
    "options": [
      "COX",
      "ADP receptor",
      "GP Ib",
      "Fibrinogen"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 244
  },
  {
    "sourceNumber": 175,
    "question": "The platelet receptor that binds fibrinogen is:",
    "options": [
      "GP Ib",
      "GP IIb/IIIa",
      "Factor VIII",
      "vWF"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 245
  },
  {
    "sourceNumber": 176,
    "question": "The platelet receptor involved in binding vWF is:",
    "options": [
      "GP Ib",
      "GP IIb/IIIa",
      "Factor XIII",
      "ADP receptor"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 246
  },
  {
    "sourceNumber": 177,
    "question": "A patient with Bernard-Soulier syndrome has defective:",
    "options": [
      "Platelet aggregation",
      "Platelet adhesion",
      "Fibrin formation",
      "Vitamin K metabolism"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 247
  },
  {
    "sourceNumber": 178,
    "question": "Glanzmann thrombasthenia causes defective:",
    "options": [
      "Adhesion",
      "Aggregation",
      "Coagulation factor production",
      "Fibrinolysis"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 248
  },
  {
    "sourceNumber": 179,
    "question": "The enzyme converting fibrinogen into fibrin is:",
    "options": [
      "Plasmin",
      "Thrombin",
      "Factor XIII",
      "Protein C"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 249
  },
  {
    "sourceNumber": 180,
    "question": "The enzyme responsible for clot breakdown is: Q181–200 will continue in the next section with more advanced surgical board-style clinical scenarios. continue with detail study note and MCQs Excellent. We will continue Chapter 4: Hemostasis, Surgical Bleeding, and Transfusion (Schwartz's Principles of Surgery) with high-yield detailed study notes followed by board-style SBA MCQs (181–200). DETAILED STUDY NOTES (Continued)",
    "options": [
      "Thrombin",
      "Plasmin",
      "Factor VII",
      "Fibrinogen"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 250
  },
  {
    "sourceNumber": 181,
    "question": "A patient has spontaneous hemarthrosis. Which disorder is most likely?",
    "options": [
      "von Willebrand disease",
      "Hemophilia A",
      "ITP",
      "Bernard–Soulier syndrome"
    ],
    "answer": 1,
    "explanation": "Hemarthrosis is classic for factor VIII deficiency.",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 251
  },
  {
    "sourceNumber": 182,
    "question": "Which laboratory test is best for monitoring unfractionated heparin?",
    "options": [
      "PT",
      "INR",
      "aPTT",
      "Bleeding time"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 252
  },
  {
    "sourceNumber": 183,
    "question": "Which laboratory test is best for monitoring warfarin therapy?",
    "options": [
      "aPTT",
      "Bleeding time",
      "PT/INR",
      "D-dimer"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 253
  },
  {
    "sourceNumber": 184,
    "question": "Which blood product contains the highest concentration of fibrinogen?",
    "options": [
      "Packed RBCs",
      "Platelets",
      "Cryoprecipitate",
      "Albumin"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 254
  },
  {
    "sourceNumber": 185,
    "question": "The principal mechanism of aspirin-induced bleeding is:",
    "options": [
      "Factor VIII inhibition",
      "Irreversible COX inhibition with reduced TXA₂ synthesis",
      "Decreased fibrinogen production",
      "Protein C activation"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 255
  },
  {
    "sourceNumber": 186,
    "question": "A patient with thrombocytopenia develops thrombosis 6 days after heparin therapy. The diagnosis is:",
    "options": [
      "DIC",
      "ITP",
      "HIT",
      "TTP"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 256
  },
  {
    "sourceNumber": 187,
    "question": "The most common inherited bleeding disorder is:",
    "options": [
      "Hemophilia A",
      "Hemophilia B",
      "von Willebrand disease",
      "Factor XIII deficiency"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 257
  },
  {
    "sourceNumber": 188,
    "question": "Which coagulation factor is known as the Christmas factor?",
    "options": [
      "Factor VIII",
      "Factor IX",
      "Factor XI",
      "Factor XIII"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 258
  },
  {
    "sourceNumber": 189,
    "question": "Which coagulation factor stabilizes fibrin by cross-linking?",
    "options": [
      "Factor V",
      "Factor VIII",
      "Factor XIII",
      "Factor X"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 259
  },
  {
    "sourceNumber": 190,
    "question": "The principal physiological anticoagulant that inhibits thrombin is:",
    "options": [
      "Protein C",
      "Protein S",
      "Antithrombin III",
      "TFPI"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 260
  },
  {
    "sourceNumber": 191,
    "question": "Which laboratory finding is most characteristic of DIC?",
    "options": [
      "Elevated fibrinogen",
      "Elevated D-dimer with low fibrinogen",
      "Normal PT and aPTT",
      "Increased platelet count"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 261
  },
  {
    "sourceNumber": 192,
    "question": "A low maximum amplitude (MA) on TEG indicates:",
    "options": [
      "Factor deficiency",
      "Platelet dysfunction",
      "Hyperfibrinolysis",
      "Vitamin K deficiency"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 262
  },
  {
    "sourceNumber": 193,
    "question": "Hyperfibrinolysis on TEG is treated with:",
    "options": [
      "Protamine",
      "Vitamin K",
      "Tranexamic acid",
      "Aspirin"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 263
  },
  {
    "sourceNumber": 194,
    "question": "The recommended transfusion ratio during massive transfusion is:",
    "options": [
      "2:1:1",
      "3:1:1",
      "1:1:1",
      "5:1:1"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 264
  },
  {
    "sourceNumber": 195,
    "question": "Which electrolyte disturbance commonly results from citrate toxicity during massive transfusion?",
    "options": [
      "Hypercalcemia",
      "Hypocalcemia",
      "Hypermagnesemia",
      "Hypernatremia"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 265
  },
  {
    "sourceNumber": 196,
    "question": "Stored blood is most associated with which metabolic abnormality?",
    "options": [
      "Hyperkalemia",
      "Hypokalemia",
      "Hypernatremia",
      "Hyperchloremia"
    ],
    "answer": 0,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 266
  },
  {
    "sourceNumber": 197,
    "question": "Which blood product is indicated for isolated anemia without coagulopathy?",
    "options": [
      "Fresh frozen plasma",
      "Cryoprecipitate",
      "Packed red blood cells",
      "Platelets"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 267
  },
  {
    "sourceNumber": 198,
    "question": "Which inherited platelet disorder results from GP Ib deficiency?",
    "options": [
      "Glanzmann thrombasthenia",
      "Bernard–Soulier syndrome",
      "von Willebrand disease",
      "Hemophilia A"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 268
  },
  {
    "sourceNumber": 199,
    "question": "Which inherited platelet disorder is caused by GP IIb/IIIa deficiency?",
    "options": [
      "Bernard–Soulier syndrome",
      "Glanzmann thrombasthenia",
      "Storage pool disease",
      "ITP"
    ],
    "answer": 1,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 269
  },
  {
    "sourceNumber": 200,
    "question": "The single most important principle in preventing surgical bleeding is:",
    "options": [
      "Routine transfusion before surgery",
      "Prophylactic platelet transfusion for all patients",
      "Meticulous surgical technique and careful hemostasis",
      "Routine administration of vitamin K"
    ],
    "answer": 2,
    "explanation": "",
    "category": "Hemostasis, Surgical Bleeding & Transfusion",
    "id": 270
  }
];
