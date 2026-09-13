TikTak MCQ – Full Question Bank

Contents
- index.html: TikTak MCQ interface with a fixed 20-second timer.
- questions.js: question bank extracted from MCQs all.docx.
- background.wav, tick.wav, final_beep.wav, correct.wav, wrong.wav: audio.

Question format in questions.js
{
  "id": 1,
  "sourceNumber": 1,
  "category": "Surgical Infections",
  "question": "...",
  "options": ["...", "...", "..."],
  "answer": 0,
  "explanation": "..."
}

The answer field is zero-based:
0=A, 1=B, 2=C, 3=D, 4=E.

The source document contains 100 Surgical Infections MCQs and a Hemostasis/Surgical Bleeding & Transfusion set numbered 1–20 and 31–200; Questions 21–30 were not present in the supplied document, so they were not invented.

To add more MCQs, add objects to questions.js and keep the same fields.
