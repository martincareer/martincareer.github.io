---
title: "CI/CD Pipeline 구축"
layout: single
permalink: /projects/student-intern/cicd-pipeline/
author_profile: true
toc: true
toc_sticky: true
---

<a href="/projects/student-intern/" class="back-to-list">← Student & Intern</a>
## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2022.11.07 ~ 2022.12.07 |
| 인력 구성도(기여도) | 조석영(100%) |
| 프로젝트 목적 | 클라우드 기반으로 Docker 및 K8s를 활용해서 CI/CD Pipeline 구축 |
| 프로젝트 내용 | CI/CD |
| 사용 언어 및 개발 환경 | Kakao I Cloud, Docker, GitLab, Jenkins, K8s, ArgoCD |
| 결과 | 1위 (Kakao Enterprise SW Academy 1기) |

---

## 주요 업무 및 상세 역할

### CI
- Jenkins, 사설 GitLab 빌드 후 연동

### CD
- K8s 설치 및 ArgoCD release
- ArgoCD의 서비스 타입 LoadBalancer로 변경
- ArgoCD에 접속하여 사설 GitLab Repo와 연결
- 임시 프로젝트를 생성하여 CI/CD 결과 Test

---

## CI/CD Pipeline

![CI/CD Pipeline](/assets/images/slides/Build CI:CD PipeLine.jpg)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">Kakao I Cloud</span>
  <span class="skill-tag">Docker</span>
  <span class="skill-tag">GitLab</span>
  <span class="skill-tag">Jenkins</span>
  <span class="skill-tag">K8s</span>
  <span class="skill-tag">ArgoCD</span>
</div>
