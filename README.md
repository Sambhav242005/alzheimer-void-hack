# 🧠 MedGemma-AD: Multimodal Alzheimer’s Detection & Monitoring

**AI-Powered Early Screening using MedGemma, Speech Analysis & Facial Biomarkers**

---

## 🚀 Overview

**MedGemma-AD** is a lightweight multimodal Alzheimer’s early-detection system designed for accessibility in both urban and rural healthcare environments.

The system integrates:

* **MedGemma** for medical multimodal reasoning (MRI, PET, cognitive reports)
* **Speech-based impairment analysis** using wav2vec2 / MFCC features
* **Facial micro-expression tracking** using YOLO + emotion embeddings
* **Fusion-based Alzheimer’s risk prediction**
* **Explainable AI** (SHAP, Grad-CAM)
* **Offline/Edge execution** via ONNX-quantized models & local SQLite storage
* **Caregiver/Doctor dashboard** (built with v0.app)

This repository automatically syncs with the deployed app.

---

## 🧩 Problem Statement

Early Alzheimer’s detection is limited due to:

* High MRI/PET costs
* Shortage of neurologists
* Limited screening infrastructure in rural regions
* Delayed recognition of Mild Cognitive Impairment (MCI)

A **low-cost, AI-assisted screening tool** is needed that supports **offline use**, **multimodal inputs**, and **longitudinal progression tracking**.

---

## 💡 Solution

Our approach combines **MedGemma** with cognitive, speech, and facial biomarkers to provide a holistic AD-risk assessment.

### 🔬 Multimodal Inputs

* **Medical Imaging:** MRI/PET interpreted using MedGemma
* **Speech:** fluency, pauses, acoustic biomarkers
* **Facial Expressions:** expressivity & micro-movement metrics
* **Cognitive Text:** MMSE/MoCA answers encoded via MedGemma

### 🧠 AI Pipeline

1. Preprocessing of speech, facial frames, imaging, and text
2. MedGemma multimodal embedding extraction
3. Speech & facial feature extraction
4. Multimodal fusion
5. Stage prediction:

   * Normal
   * Mild Cognitive Impairment (MCI)
   * Early Alzheimer’s
6. Explainability via SHAP + Grad-CAM

### 📊 Dashboard

* Alzheimer’s risk score visualization
* Longitudinal trend tracking
* MedGemma-generated insights
* Local patient history (SQLite)
* Simple UI for low-resource clinics

### 🖥️ Edge/Offline Mode

* Works fully offline (laptop / Jetson Nano)
* Encrypted local storage
* Fully consent-based data handling

---

## 🏗️ Architecture Summary

```
User Input → MRI/PET | Speech | Facial Video | Cognitive Text
       ↓
Preprocessing
       ↓
MedGemma (image/text) + Speech Model + Facial Model
       ↓
Multimodal Fusion Network
       ↓
AD Risk Prediction + Progress Tracking
       ↓
Explainability (SHAP / Grad-CAM)
       ↓
Dashboard Interface
```

---

## 🛠️ Tech Stack

### AI / ML

* MedGemma
* PyTorch 
* YOLOv12
* torchaudio

### Backend

* Python
* FastAPI / Flask
* SQLite (offline local DB)

### Frontend

* Next.js/React.js

---

## 🔒 Privacy & Ethics

* Local, encrypted storage
* No cloud inference required
* Assistive, not diagnostic
* Explainable AI for clinician trust
* Consent-based use of voice/face data

---

## 🔗 Deployment Link

Your app is available at:
👉 **[https://v0-void-hack-6jel76zsn-schools-projects.vercel.app/](https://v0-void-hack-6jel76zsn-schools-projects.vercel.app/)**
