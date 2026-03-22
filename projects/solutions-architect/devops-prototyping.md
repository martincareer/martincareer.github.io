---
title: "Azure 기반 DevOps 아키텍처 설계 및 구축 (Prototyping)"
layout: single
permalink: /projects/solutions-architect/devops-prototyping/
author_profile: true
toc: true
toc_sticky: true
---

<a href="/projects/solutions-architect/" class="back-to-list">← 목록으로 돌아가기</a>
## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2025.05 ~ 2025.08 |
| 인력 구성도(기여도) | 조석영(100%) |
| 프로젝트 목적 | Azure 기반 확장형 DevOps 아키텍처 설계 및 구현 |
| 프로젝트 내용 | 3Tier → AKS 기반 컨테이너 + CI/CD 자동화 아키텍처 |
| 사용 환경 | Azure, Azure DevOps |
| 결과 | 내부 평가 1위 달성 |

---

## 주요 업무 및 상세 역할

### 고객 Pain Point 분석 및 솔루션 제안
- 개발자 간 상이한 배포 방식, 운영/개발 환경 불일치
- 트래픽 대비 오버 스펙 VM, 이벤트 트래픽 대응 불가
- 보안 체계 미흡, 모니터링 부재 등의 이슈 도출
- 각 Pain Point에 대한 솔루션 매핑 및 해결 방안 제안

### 아키텍처 및 보안 설계 (AS-IS → TO-BE)
- TO-BE AKS(Azure Kubernetes) 기반 컨테이너 경량화 구조로 전환
- Hub&Spoke 유지 및 AKS-DB 계층형 구조 설계
- VPN Gateway 리소스 접근, Ingress Controller 부하 분산, Grafana/Prometheus 모니터링 구성
- Azure DevOps + ArgoCD 기반 Blue/Green 배포 전략 수립
- Azure RBAC 기반 권한 최소화
- NSG, WAF, Route Table 등으로 IN/OUT 트래픽 제어

### 비용 분석 및 기대효과 도출
- AS-IS(약 ₩2,003,860) vs TO-BE(약 ₩2,544,650) 리소스 비용 비교 수행
- 운영 비용 절감, 비즈니스 확장성, 보안 강화, IaC 기반 유지보수 비용 감소 등 종합적 기대 효과 도출

---

## 아키텍처

### 전체 아키텍처
![전체 아키텍처](/assets/images/slides/Azure 기반 DevOps 아키텍처 설계 및 구축-아키텍처.png)

### CI/CD 파이프라인
![CI/CD 파이프라인](/assets/images/slides/Azure 기반 DevOps 아키텍처 설계 및 구축-CICD파이프라인.png)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">AKS</span>
  <span class="skill-tag">Azure DevOps</span>
  <span class="skill-tag">ArgoCD</span>
  <span class="skill-tag">Grafana</span>
  <span class="skill-tag">Prometheus</span>
  <span class="skill-tag">Hub&Spoke</span>
  <span class="skill-tag">VPN Gateway</span>
  <span class="skill-tag">NSG</span>
  <span class="skill-tag">WAF</span>
  <span class="skill-tag">RBAC</span>
</div>

