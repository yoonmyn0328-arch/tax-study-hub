/* 영어 (문법·어휘) 누적 학습 카드 */
window.STUDY_ITEMS = window.STUDY_ITEMS || [];

window.STUDY_ITEMS.push(
  {
    id: "eng-01",
    subject: "영어",
    topic: "문법 · 접속사/전치사",
    title: "notify는 4형식 — 'notify students that ~' (전치사 of 뒤 that절은 원칙적으로 X)",
    date: "2026-11-14",
    tags: ["notify", "that절", "4형식"],
    analogy: `notify는 "~에게 알려주다"라는 **타동사**야. 그래서 목적어를 바로 받지, "to students"처럼 전치사를 끼워 넣으면 어색해. 그리고 of 뒤에는 명사(구)가 와.`,
    principle: `notify + 목적어 + that절 구조를 취한다. 전치사 of 뒤에는 원칙적으로 that절이 올 수 없고, 예외는 in that / except that 정도다. result는 자동사라 뒤에 완전한 절이 필요하다.`,
    trap: `- "notify to students" (to부정사로 착각) → X
- "notified of that ~" → X
- students 뒤에 **완전한 절**이 필요한지, 목적어가 빠진 불완전한 절인지 보고 what/that을 가른다.`,
    example: `- The principal notified **students that** tardiness would result in after-school sessions.
- 결과: that절 안이 완전(s tardiness would result) → what 불가`,
    ox: {
      q: "notify는 목적어 뒤에 that절을 취할 수 있으며, 'notify of that절'은 원칙적으로 쓰지 않는다.",
      a: true,
      why: "맞아. notify는 4형식이고 of 뒤에 that절은 원칙적으로 안 와."
    }
  },
  {
    id: "eng-02",
    subject: "영어",
    topic: "문법 · 가정법 도치",
    title: "Had it not been for ~ = If it had not been for ~ → would have p.p.",
    date: "2026-11-14",
    tags: ["가정법", "도치", "과거완료"],
    analogy: `if를 지우면 조동사가 주어 앞으로 나와. had가 앞으로 나온 순간 **과거완료 가정법**이야. 그러면 뒤에는 반드시 **would have p.p.**가 짝으로 와.`,
    principle: `가정법 과거완료에서 if가 생략되면 had/weren't/should가 도치된다. 주절은 would/could/might + have + p.p.로 과거 사실의 반대를 나타낸다.`,
    trap: `- 앞에 had(대과거)가 있는데 뒤에 단순 과거(would reach)를 고르게 낚는다.
- 목적어가 있어 수동(be reached)을 고르게 만든다 — 도치 구문과 태를 섞는다.`,
    example: `- Had it not been for the medieval trade routes, they **would never have reached** their destinations.`,
    ox: {
      q: "'Had it not been for ~'는 가정법 과거완료의 도치이며 주절에 would have p.p.가 온다.",
      a: true,
      why: "맞아. if 생략 → had 도치 → 주절은 would have p.p.야."
    }
  },
  {
    id: "eng-03",
    subject: "영어",
    topic: "문법 · 분사구문",
    title: "분사구문의 능동/수동 — 날씨는 스스로 변한다(changing)",
    date: "2026-11-14",
    tags: ["분사구문", "능동", "수동"],
    analogy: `날씨가 바뀌는 건 **누가 시켜서**가 아니라 스스로 그래. 그래서 -ing(능동)야. 무언가에 **의해** 바뀌는 것이면 -ed(수동)이고.`,
    principle: `분사구문의 의미상 주어와 동사의 관계가 능동이면 현재분사, 수동이면 과거분사를 쓴다. 콤마 뒤 접속사가 없으면 분사구문으로 보고 주어를 찾아 관계를 판정한다.`,
    trap: `- "weather conditions changed"를 보고 무조건 -ed로 고르게 낚는다.
- 분사구문의 주어가 주절 주어와 다르면 독립분사구문(주어를 남긴다).`,
    example: `- **As** weather conditions change unpredictably → **Changing** unpredictably, weather conditions ...
- The bridge **built** in 1990 → 수동`,
    ox: {
      q: "날씨가 변하는 것을 나타내는 분사구문은 능동 관계이므로 현재분사 changing을 쓴다.",
      a: true,
      why: "맞아. 스스로 변하는 자동사라 능동이야."
    }
  },
  {
    id: "eng-04",
    subject: "영어",
    topic: "문법 · 조동사 관용",
    title: "would rather + (that) 주어 + 과거동사 / would rather + 동사원형",
    date: "2026-11-14",
    tags: ["would rather", "가정", "조동사"],
    analogy: `"네가 핵심만 짚어줬으면 좋겠어"처럼 **다른 사람의 행동**을 바라는 would rather 뒤에는 가정법이 와서 시제가 한 칸 뒤로 물러나.`,
    principle: `would rather 뒤에 주어가 오면 that절 가정법(현재·미래는 과거형, 과거는 과거완료)을 쓰고, 주어가 없으면 동사원형이 온다.`,
    trap: `- "would rather you focus"(현재형)로 낚는다 → **focused**.
- would rather + 동사원형과 would rather + that절을 섞는다.`,
    example: `- I'd rather you **focused** on the highlights. (네가 핵심에 집중해줬으면)
- I'd rather **stay** home. (내가 집에 있겠다)`,
    ox: {
      q: "would rather 뒤에 다른 주어가 오면 that절 동사를 과거형으로 쓰는 것이 원칙이다.",
      a: true,
      why: "맞아. 가정법이라 시제가 한 칸 물러나."
    }
  },
  {
    id: "eng-05",
    subject: "영어",
    topic: "문법 · 병렬구조",
    title: "병렬구조 함정 — and 앞뒤 형태를 맞춘다",
    date: "2026-11-14",
    tags: ["병렬", "and", "to부정사"],
    analogy: `"개선하고 **유지한다**"처럼 and로 묶인 두 동작은 **같은 옷**을 입어야 해. 앞이 동사원형이면 뒤도 동사원형이지.`,
    principle: `등위접속사 and/or/but으로 연결되는 요소는 문법적 형태가 대칭이어야 한다. 준동사·품사·시제를 모두 맞춘다.`,
    trap: `- 앞의 to부정사와 뒤의 동명사를 섞거나(make ... and improving), 명사와 절을 섞는다.
- 병렬 안에 끼어든 수식어 때문에 눈이 흐려진다.`,
    example: `- to **make** the process simpler and **improve** efficiency
- (X) to make ... and improving ...`,
    ox: {
      q: "and로 연결된 두 요소는 문법적 형태를 같게 맞춰야 한다.",
      a: true,
      why: "맞아. 병렬구조야. 앞 형태를 기준으로 뒤를 맞춰."
    }
  },
  {
    id: "eng-06",
    subject: "영어",
    topic: "어휘 · 동의어",
    title: "cover의 동의어로 나오는 fund — '비용을 대다'",
    date: "2026-11-14",
    tags: ["fund", "cover", "동의어"],
    analogy: `"보험금이 그 비용을 **덮는다**"는 말은 "돈을 **대준다**"는 뜻이야. fund를 "자금을 모으다"로만 외우면 선지에서 못 알아봐.`,
    principle: `fund는 동사로 "~의 자금을 대다, 비용을 지불하다"라는 뜻이며 cover(비용을 충당하다)와 동의 관계를 이룬다. fundraise(자금 모집)와 구분해야 한다.`,
    trap: `- fund를 자금 **모집**(raise funds)으로 오해하게 만든다.
- cover를 덮다/다루다로만 외워 문맥 의미를 놓친다.`,
    example: `- The program is **funded** by the city. = 비용은 시가 댄다
- cover the cost = 비용을 충당하다`,
    ox: {
      q: "동사 fund는 '비용을 대주다, 자금을 지원하다'라는 뜻으로 cover와 유사하게 쓰인다.",
      a: true,
      why: "맞아. '자금을 모집하다'가 아니라 '대주다'야."
    }
  },
  {
    id: "eng-07",
    subject: "영어",
    topic: "문법 · 사역수동",
    title: "have + 목적어 + p.p. — '~하게 시키다(수동)'",
    date: "2026-11-14",
    tags: ["사역", "have p.p.", "수동"],
    analogy: `내가 직접 주사 놓는 게 아니라 **의사에게 맞기는** 거야. 목적어가 당하는 쪽이면 p.p.를 써.`,
    principle: `have/get + 목적어 + 과거분사는 "목적어가 (다른 사람에 의해) ~되게 하다"라는 사역수동 표현이다. 목적어가 스스로 하는 동작이면 동사원형을 쓴다.`,
    trap: `- have them **vaccinate**(동사원형)로 낚는다 → **vaccinated**.
- have + 목적어 + p.p.를 현재완료로 착각.`,
    example: `- have them **vaccinated** against the disease = 그들이 예방접종을 받게 하다`,
    ox: {
      q: "have + 목적어 + 과거분사는 목적어가 다른 주체에 의해 동작을 당하게 함을 나타낸다.",
      a: true,
      why: "맞아. 사역수동이야. 목적어가 당하는 쪽이면 p.p."
    }
  },
  {
    id: "eng-08",
    subject: "영어",
    topic: "문법 · 품사",
    title: "select가 형용사로 쓰이는 자리 ('a select group')",
    date: "2026-11-14",
    tags: ["select", "형용사", "품사"],
    analogy: `동사 select(고르다)가 명사 앞에 오면 "**엄선된**"이라는 형용사가 돼. 자리만 보면 품사가 보여.`,
    principle: `select는 명사 앞에서 "엄선된, 정선된"의 형용사로 쓰인다. 명사 앞 자리에 동사가 오면 대개 형용사 역할이므로 품사를 의심해야 한다.`,
    trap: `- 명사 앞 select를 동사로 보고 문장 구조를 잘못 잡는다.
- 동사 자리인지 형용사 자리인지 확인 없이 수 일치를 판단.`,
    example: `- a **select** group of students = 엄선된 학생들
- They **select** a group. = 그들은 고른다`,
    ox: {
      q: "명사 앞에 쓰인 select는 '엄선된'이라는 뜻의 형용사로 볼 수 있다.",
      a: true,
      why: "맞아. 명사 앞이면 형용사 역할이야."
    }
  },
  {
    id: "eng-09",
    subject: "영어",
    topic: "어휘 · 9급 혼동어 5선",
    title: "disinterested / complacent / prohibitive / tenuous / sanction",
    date: "2026-11-15",
    tags: ["혼동어", "보카", "어휘"],
    analogy: `disinterested는 "**이해관계가 없는**"이라 공정한 거고, uninterested는 "흥미 없는"이야. complacent는 "현실에 **안주한**"이지 "만족스러운"이 아니야.`,
    principle: `9급 기출은 철자가 비슷하거나 뜻이 갈리는 어휘를 선지로 깔아 문맥 적합성을 묻는다. 특히 부정 접두사·어근이 다른 쌍(dis-/un-, complacent/complaisant)을 구분해야 한다.`,
    trap: `- disinterested(공정한) ↔ uninterested(무관심한)
- complacent(자기만족·안주) ↔ complaisant(친절한)
- prohibitive(엄청 비싼·금지적인) ↔ prohibited(금지된)
- tenuous(미약한·빈약한) ↔ tenable(옹호 가능한)
- sanction(승인/제재 — **양쪽 뜻**)`,
    example: `- a **disinterested** judge = 이해관계 없는 공정한 판사
- **prohibitive** prices = 감당 못 할 만큼 비싼 가격
- a **tenuous** connection = 빈약한 연관
- impose **sanctions** = 제재를 부과하다`,
    ox: {
      q: "complacent는 '현실에 안주하는, 자기만족적인'이라는 뜻이다.",
      a: true,
      why: "맞아. '만족스러운'이라는 satisfying과 헷갈리지 말자."
    }
  },
  {
    id: "eng-10",
    subject: "영어",
    topic: "어휘 · 보건 지문",
    title: "immunization / certified / administer / pediatrician / preventive / outbreak",
    date: "2026-11-14",
    tags: ["보건어휘", "독해", "어휘"],
    analogy: `면역(immunization)은 "예방접종으로 방어막을 만드는 일", administer는 "약을 **투여하다**"야. 행정하다(administer)와 같은 철자라 문맥으로 갈라.`,
    principle: `9급 독해는 보건·교육·환경 지문이 자주 나오고, 그 분야 기본 어휘를 모르면 문장 구조를 다 풀어도 내용이 안 잡힌다.`,
    trap: `- administer(투여하다) ↔ administration(행정)
- preventive(예방의) ↔ preventative(같은 뜻, 덜 표준)
- outbreak(발생·창궐) ↔ breakout(탈출)`,
    example: `- **immunization** programs = 예방접종 프로그램
- **certified** nurse = 인증된 간호사
- a **pediatrician** = 소아과 의사
- a measles **outbreak** = 홍역 창궐`,
    ox: {
      q: "outbreak는 질병 등의 '발생·창궐'을 뜻한다.",
      a: true,
      why: "맞아. '탈출'은 breakout이고, 질병 문맥에서는 outbreak야."
    }
  }
);
