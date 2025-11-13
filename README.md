# 🧠 MedGemma-AD: Multimodal Alzheimer’s Detection & Monitoring

**AI-Powered Early Screening using MedGemma, Speech Analysis & Facial Biomarkers**

[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ldw89y3h9oT)

---

## 🚀 Overview

**MedGemma-AD** is a lightweight, multimodal Alzheimer’s early-detection MVP designed for accessibility in both urban and rural healthcare environments.

The system integrates:

* **MedGemma** for medical multimodal reasoning (MRI, PET, cognitive reports)
* **Speech-based impairment analysis** (wav2vec2 / MFCC-based features)
* **Facial micro-expression tracking** (YOLO + emotion embeddings)
* **Fusion-based Alzheimer’s risk prediction**
* **Explainable AI** using SHAP & Grad-CAM
* **Offline/Edge Mode** with ONNX-quantized models + local SQLite storage
* **Caregiver/Doctor dashboard** built using *v0.app*

This repository mirrors your **live deployed app**, automatically synced.

---

## 🧩 Problem Statement

Early detection of Alzheimer’s disease is limited by:

* High diagnostic cost of MRI/PET
* Shortage of neurologists
* Lack of screening infrastructure in rural areas
* Delayed identification of mild cognitive impairment

A **low-cost, AI-assisted screening tool** is needed that supports **offline use**, **multimodal inputs**, and **progress monitoring**.

---

## 💡 Solution

Our approach combines **MedGemma** with cognitive biomarkers to build an affordable Alzheimer's detection system.

### 🔬 Multimodal Inputs

* **Medical Imaging:** MRI/PET processed via MedGemma
* **Speech:** pause rate, fluency, acoustic biomarkers
* **Facial Expressions:** expressivity & micro-movement via YOLO
* **Cognitive Text:** MMSE/MoCA answers encoded via MedGemma

### 🧠 AI Pipeline

1. Preprocess speech, facial frames, imaging, cognitive text
2. Generate MedGemma multimodal embeddings
3. Extract speech & facial features
4. Fuse all modalities
5. Predict Alzheimer’s stage:

   * Normal
   * Mild Cognitive Impairment (MCI)
   * Early Alzheimer’s
6. Provide explainability via SHAP + Grad-CAM

### 📊 Dashboard

* Risk score visualization
* Longitudinal decline tracking
* AI-generated medical insights
* Local patient database (SQLite)
* Simple UI for low-resource healthcare settings

### 🖥️ Edge/Offline Mode

* Models exported as **ONNX/TFLite**
* Runs locally on laptops / Jetson Nano
* No internet required
* Local encryption & consent-based data handling

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

* MedGemma (Google)
* PyTorch / ONNX Runtime
* YOLOv8
* wav2vec2 / torchaudio

### Backend

* Python
* FastAPI / Flask
* SQLite (local)

### Frontend

* v0.app
* Optional: Gradio/Streamlit version

---

## 🔒 Privacy & Ethics

* Local, encrypted storage for offline clinics
* No cloud inference required
* Assistive, not diagnostic
* Explainability included for clinician review
* User consent required for face/voice data

---

## 🔗 Deployment Link

Your app is live here:
👉 **[https://vercel.com/schools-projects/v0-void-hack](https://vercel.com/schools-projects/v0-void-hack)**
*(displayed only as a deployment URL, with no platform mention)*

---

## 📂 Continue Building

Edit your interface or workflows at:
👉 **[https://v0.app/chat/ldw89y3h9oT](https://v0.app/chat/ldw89y3h9oT)**



Just say the word.
