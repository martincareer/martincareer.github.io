---
title: "CDC Pipeline v2.0"
layout: single
permalink: /projects/student-intern/cdc-pipeline-v2/
author_profile: true
toc: true
toc_sticky: true
---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 작업 기간 | 2022.11.07 ~ 2022.12.07 |
| 인력 구성도(기여도) | 조석영(100%) |
| 프로젝트 목적 | Upgrade CDC(Change Data Capture) && Druid && Superset |
| 프로젝트 내용 | KiC instance와 Docker를 활용하여 2개 이상의 DB를 타겟으로 하는 CDC 구축. Druid, Superset과 dataset을 연결하여 결과 분석 및 시각화 |
| 사용 언어 및 개발 환경 | Kakao I Cloud, Docker, MySQL, MariaDB, Kafka, Druid, Superset |
| 결과 | 1위 (Kakao Enterprise SW Academy 1기) |

---

## 주요 업무 및 상세 역할

- 공공 데이터: 서울시 집값 데이터(2019 ~ 2022) 데이터를 Source DB에 적재
- Kafka Topic, DB Connector를 활용하여 Source DB와 Sink DB 동기화
- Kafka Topic을 활용하여 Druid에 데이터 업로드
- Druid에서 쿼리문을 통해 Insight (2021년 서울 월별 평균 집값 추이) 도출
- Druid와 Superset을 연동하여 Insight를 대시보드로 시각화

### Druid Insight 쿼리

```sql
SELECT
    EXTRACT(YEAR FROM __time) as "Year",
    EXTRACT(MONTH FROM __time) as "Month",
    AVG("payload.amount") as "금액"
FROM "dbserver1.sourcedb.contract"
WHERE EXTRACT(YEAR FROM __time) = 2021
GROUP BY EXTRACT(YEAR FROM __time), EXTRACT(MONTH FROM __time)
```

---

## 스크린샷

### CDC Pipeline & Druid & Superset
![CDC Pipeline v2.0](/assets/images/slides/Build CDC Pipeline(CDC Pilot Project ver 2.0).jpg)

---

## 기술 스택

<div class="skill-tags">
  <span class="skill-tag">Kakao I Cloud</span>
  <span class="skill-tag">Docker</span>
  <span class="skill-tag">MySQL</span>
  <span class="skill-tag">MariaDB</span>
  <span class="skill-tag">Kafka</span>
  <span class="skill-tag">Druid</span>
  <span class="skill-tag">Superset</span>
</div>
