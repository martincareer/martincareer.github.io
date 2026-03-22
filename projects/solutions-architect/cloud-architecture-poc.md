---
title: "J,K사 클라우드 아키텍처 설계 및 모듈화 (PoC)"
layout: single
permalink: /projects/solutions-architect/cloud-architecture-poc/
author_profile: true
toc: true
toc_sticky: true
---

<a href="/projects/solutions-architect/" class="back-to-list">← 목록으로 돌아가기</a>
## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2025.08 ~ 2025.11 |
| 인력 구성도(기여도) | 조석영(80%), 1명의 팀원 (20%) |
| 프로젝트 목적 | 본 사업화를 위한 Azure 아키텍처 설계 및 구축 |
| 프로젝트 내용 | 다중 LLM 모델, 네트워크 및 아키텍처 적합성 테스트 |
| 서비스 환경 | Azure, Azure DevOps, AI Foundry, GCP Storage |
| 결과 | 유사 프로젝트 계약 협의 中 |

---

## 주요 업무 및 상세 역할

### 아키텍처 전환 전략 수립 및 확정
- 본 사업화를 위한 Azure 기반 통합 아키텍처 설계
- Azure Data Factory, AI Search 등 주요 데이터 처리 컴포넌트 선정
- 전체 논리/구성도를 포함한 TO-BE 아키텍처 설계

### 리소스 프로비저닝 및 통합 아키텍처 구축 [구축]
- Azure VM, AGW, WAF 등 핵심 인프라 리소스 설계 및 구축
- HUB&SPOKE 구조 및 NAT Gateway, VNet Integration 등 네트워크 구성

### WAF 보안 정책 적용 및 검토
- AGW에 WAF를 구성하여 보안 아키텍처 구현 [적용]
- 탐지 모드로 이상 트래픽 및 오탐 여부 모니터링 후 WAF 규칙을 방지모드로 전환 및 적용 [모니터링]

### 문서 및 정보 공유 [문서]
- 통합 아키텍처 초안, 논리/물리 구성도, PoC 상세 아키텍처 정의서 등 산출물 제공

---

## 아키텍처

### 통합 아키텍처
![통합 아키텍처](/assets/images/slides/J,K사 서비스별 클라우드 아키텍처 설계 및 모듈화(PoC)-통합아키텍처.png)

### 서비스 A 흐름도
![서비스 A 흐름도](/assets/images/slides/J,K사 서비스별 클라우드 아키텍처 설계 및 모듈화(PoC)-서비스A흐름도.png)

### 서비스 B 흐름도
![서비스 B 흐름도](/assets/images/slides/J,K사 서비스별 클라우드 아키텍처 설계 및 모듈화(PoC)-서비스B흐름도.png)

### 서비스 C 흐름도
![서비스 C 흐름도](/assets/images/slides/J,K사 서비스별 클라우드 아키텍처 설계 및 모듈화(PoC)-서비스C흐름도.png)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">Azure</span>
  <span class="skill-tag">Azure DevOps</span>
  <span class="skill-tag">AI Foundry</span>
  <span class="skill-tag">Data Factory</span>
  <span class="skill-tag">AI Search</span>
  <span class="skill-tag">GCP Storage</span>
  <span class="skill-tag">Hub&Spoke</span>
  <span class="skill-tag">NAT Gateway</span>
  <span class="skill-tag">WAF</span>
</div>

