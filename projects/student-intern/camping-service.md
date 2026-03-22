---
title: "Kakao I Cloud 캠핑 용품 거래 중개 서비스"
layout: single
permalink: /projects/student-intern/camping-service/
author_profile: true
toc: true
toc_sticky: true
---

<a href="/projects/student-intern/" class="back-to-list">← 목록으로 돌아가기</a>
## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2022.12.26 ~ 2023.02.23 |
| 인력 구성도(기여도) | 조석영(30%), 3명의 팀원 (70%) |
| 프로젝트 목적 | 캠핑 용품 대여 중개 웹 서비스 제공 |
| 프로젝트 내용 | 3 Tier 아키텍처 기반 웹 서비스 기획 및 구축 |
| 사용 언어 및 개발 환경 | Kakao I Cloud, Docker, React(JS), Springboot(Java), MySQL |
| 결과 | 1위 (Kakao Enterprise SW Academy 1기) |

---

## 주요 업무 및 상세 역할

### PM(Team Leader) Back-end 장
- 요구사항 분석 및 모델링

### Architecture Build
- Architecture 설계
- Routing Table 설계
- Private Subnet 내의 모든 Instance 구축
- Redis Cluster 구축
- DB Master, Slave 양방향 Replication 구축

### Back-end
- API 설계 및 적용
- API Request에 따른 Response Front-end에 전달
- DB Master(Select), DB Slave(CUD)로 트래픽 분산
- Redis의 휘발성(1분)을 활용하여, data의 존재 여부를 확인하는 알고리즘 제작
- 다양한 Boundary, Stress 등 다양한 테스트 진행(Ngrinder)
- 최종 발표

---

## 아키텍처

### System Architecture
![System Architecture](/assets/images/slides/Kakao I Cloud를 이용한 캠핑 용품 거래 중개 서비스 구축하기-system architecture.jpg)

### Landing Page & API Information
![Landing Page & API](/assets/images/slides/Kakao I Cloud를 이용한 캠핑 용품 거래 중개 서비스 구축하기-API info & landing page.png)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">Kakao I Cloud</span>
  <span class="skill-tag">Docker</span>
  <span class="skill-tag">React</span>
  <span class="skill-tag">Spring Boot</span>
  <span class="skill-tag">MySQL</span>
  <span class="skill-tag">Redis</span>
  <span class="skill-tag">Ngrinder</span>
</div>
