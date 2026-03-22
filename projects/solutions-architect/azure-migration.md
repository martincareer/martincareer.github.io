---
title: "J사 Azure 구독 간 마이그레이션"
layout: single
permalink: /projects/solutions-architect/azure-migration/
author_profile: true
toc: true
toc_sticky: true
---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2025.12 ~ 2026.03 |
| 인력 구성도(기여도) | 조석영(50%), 1명의 팀원 (50%) |
| 프로젝트 목적 | Azure 구독 간 서비스 리소스 마이그레이션을 통한 시스템 전환 및 보안 강화 |
| 프로젝트 내용 | 신규 구독으로 Azure 리소스 이관 및 데이터 복제, WAF를 활용한 관리자 접근 제어 및 보안 정책 적용 |
| 서비스 환경 | Microsoft Azure Service |
| 결과 | Azure to AWS Migration 프로젝트 수주 |

---

## 주요 업무 및 상세 역할

### 마이그레이션 전략 수립 [가이드]
- DNS 변경 후 데이터 증분 Sync 전략 수립

### 리소스 프로비저닝 [구축]
- TO-BE 테넌트에 Azure VM, AGW, WAF 등 핵심 인프라 리소스 설계 및 구축 완료

### WAF 로깅 및 검증 [검증]
- OWASP 위반 트래픽 로그 수집 목적 Log Analytics 구성
- OWASP ZAP 툴을 활용하여 WAF 작동 검증 및 테스트

### 정책 모니터링 및 최종 적용 [모니터링]
- 탐지모드(Detection)로 1개월간 WAF를 운영하며 3,289건의 이상 트래픽 정밀 모니터링
- 모바일 앱 및 API 오탐으로 판단된 Rule ID는 예외 처리
- 최종적으로 OWASP 3.2 규칙을 '방지모드(Prevention)'로 전환 및 적용 완료

### 문서 및 정보 공유 [문서]
- Managed 근거 자료, TO-BE 리소스 견적, Azure 리소스 생성 스크립트, 프로젝트 plan 등 제공

---

## 아키텍처

### 서비스 아키텍처
![서비스 아키텍처](/assets/images/slides/J사 Azure 구독 간 마이그레이션-서비스아키텍처.png)

### 상세 아키텍처
![상세 아키텍처](/assets/images/slides/J사 Azure 구독 간 마이그레이션-상세아키텍처.png)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">Azure VM</span>
  <span class="skill-tag">AGW</span>
  <span class="skill-tag">WAF</span>
  <span class="skill-tag">Log Analytics</span>
  <span class="skill-tag">OWASP ZAP</span>
  <span class="skill-tag">DNS</span>
</div>
