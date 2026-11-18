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
  },
  {
    id: "eng-11",
    subject: "영어",
    topic: "문법 · 부정어 도치",
    title: "Hardly had S p.p. ~ when — 문두 부정어는 의문문 어순으로 뒤집는다",
    date: "2026-10-31",
    tags: ["도치", "Hardly", "대과거", "when"],
    analogy: `부정어가 문 앞에 나서면 **주어와 조동사가 자리를 바꿔** 요. 평서문 'The workers had activated'가 'Hardly **had** the workers activated'로 뒤집히는 거지.`,
    principle: `Hardly·Scarcely·No sooner 등 부정어가 문두에 오면 주어-조동사 도치가 일어나고, 'had + 주어 + p.p. ~ when/before + 과거동사' 구문으로 두 사건의 선후(대과거-과거)를 나타낸다.`,
    trap: `- 도치를 놓치고 'has/had + 주어' 순서를 그대로 둔 선지를 고른다.
- 복수 주어에 단수 has를 붙인 수 일치 오류를 섞는다 → workers + has → X.
- 선후를 살리지 못하는 단순과거(did)를 고른다.`,
    example: `- Hardly **had** the factory workers activated the line **when** engineers detected a flaw.
- ① has workers → 수 일치·시제 불일치 / ④ did → 대과거 표현 불가`,
    ox: {
      q: "문두에 Hardly가 오면 주어와 조동사의 도치가 일어나 had + 주어 + p.p. 어순이 된다.",
      a: true,
      why: "맞아. 부정어 도치 + 대과거, 두 개를 동시에 봐야 해."
    }
  },
  {
    id: "eng-12",
    subject: "영어",
    topic: "문법 · 분사구문",
    title: "thereby allowing — 앞 절의 '결과'를 붙이는 분사구문",
    date: "2026-10-27",
    tags: ["분사구문", "thereby", "결과", "allowing"],
    analogy: `앞 문장이 **원인**, 뒤에 붙은 -ing가 **그래서 생긴 결과**야. '그리하여 ~하게 되었다'로 붙이면 자연스러워.`,
    principle: `thereby + -ing는 앞 절의 행위가 초래한 결과를 나타내는 분사구문이다. 주절의 주어와 분사의 논리적 주어가 같고, 능동 관계면 현재분사를 쓴다.`,
    trap: `- thereby를 '그럼에도'로 오역해 역접으로 읽는다 → **결과**.
- 수동 관계인데 현재분사를, 능동인데 과거분사를 넣은 선지를 섞는다.`,
    example: `- The city opened new bike lanes, **thereby allowing** commuters to avoid traffic.
- 해석: 그리하여 통근자들이 정체를 피할 수 있게 되었다`,
    ox: {
      q: "thereby + -ing는 앞 절의 결과를 나타내며, 능동 관계이므로 현재분사를 쓴다.",
      a: true,
      why: "맞아. '그리하여 ~하게 되었다'로 붙이는 결과 분사구문이야."
    }
  },
  {
    id: "eng-13",
    subject: "영어",
    topic: "문법 · 시제",
    title: "시간·조건 부사절에서는 미래를 현재시제로 쓴다",
    date: "2026-10-27",
    tags: ["부사절", "현재시제", "미래대용", "when", "if"],
    analogy: `'내일 비가 **오면**'을 영어로 할 때 will을 넣지 않아. 부사절은 **조건·시간을 정하는 틀**이라 미래를 현재로 눌러 놓는 거지.`,
    principle: `when·if·before·after·until·as soon as 등 시간·조건의 부사절에서는 미래의 일도 현재시제로 표현한다. 미래 시제(will)는 주절에만 쓴다.`,
    trap: `- 부사절 안에 will을 넣은 선지를 고른다.
- 주절까지 현재로 만들어 시제를 무너뜨린다 → 미래는 **주절**에.`,
    example: `- When the report **is** ready, we **will send** it to the board.
- If it **rains** tomorrow, the event **will be** moved indoors.`,
    ox: {
      q: "시간·조건의 부사절에서는 미래의 일을 현재시제로 표현한다.",
      a: true,
      why: "맞아. 부사절은 현재, 주절은 미래. 이 공식 하나로 절반이 풀려."
    }
  },
  {
    id: "eng-14",
    subject: "영어",
    topic: "문법 · 조건 접속사",
    title: "provided that = if — 조건의 절을 이어 주는 접속사",
    date: "2026-10-27",
    tags: ["provided that", "조건", "접속사", "if"],
    analogy: `provided가 '제공했다'로 보여서 동사처럼 느껴지지만, 여기선 **if와 같은 접속사**야. '~한다면'으로 읽어.`,
    principle: `provided (that) / providing (that)은 조건을 나타내는 접속사로 if와 같은 기능을 한다. 뒤에 완전한 절이 온다.`,
    trap: `- provided를 과거분사로 보고 문장 구조를 잘못 잡는다 → 절을 이끄는 접속사.
- 뒤에 명사구를 붙여 'provided the funds'처럼 만들어 놓고 옳다고 한다 → **절**이 와야 한다.`,
    example: `- You may use the facility **provided that** you clean it afterward.
- = if you clean it afterward`,
    ox: {
      q: "provided that은 조건을 나타내는 접속사로 if와 바꿔 쓸 수 있다.",
      a: true,
      why: "맞아. 조건 접속사야. 뒤에는 완전한 절이 와."
    }
  },
  {
    id: "eng-15",
    subject: "영어",
    topic: "문법 · 전치사 to",
    title: "be committed to -ing — 여기서 to는 전치사다",
    date: "2026-10-27",
    tags: ["전치사to", "committed to", "동명사", "빈출"],
    analogy: `to 뒤에 **동사원형**이 오는 건 to부정사일 때뿐이야. committed to의 to는 **전치사**라서 뒤에 명사나 -ing가 와. 짝꿍을 바꿔치기하는 선지가 단골이야.`,
    principle: `be committed/dedicated/opposed/accustomed to에서 to는 전치사이므로 뒤에 동명사(-ing)나 명사가 온다. to부정사로 착각해 동사원형을 넣으면 오답이다.`,
    trap: `- 'to + 동사원형'으로 낚는다 → committed to **reducing**.
- look forward to, be used to, object to도 같은 함정. 전치사 to家族으로 묶어라.`,
    example: `- The firm is committed to **reducing** emissions. (reducing O / reduce X)
- I look forward to **hearing** from you.`,
    ox: {
      q: "be committed to 뒤에는 동명사가 온다.",
      a: true,
      why: "맞아. 전치사 to라서 -ing. to부정사로 착각하면 바로 오답이야."
    }
  },
  {
    id: "eng-16",
    subject: "영어",
    topic: "문법 · being",
    title: "전치사 뒤 being은 '징검다리' — open to being flexible",
    date: "2026-10-30",
    tags: ["being", "전치사", "동명사", "open to"],
    analogy: `전치사 to 다음에 **형용사(flexible)** 를 바로 못 놓으니, being이라는 **디딤돌**을 하나 놓는 거야. 단어를 쪼개 해석하지 말고 '유연하게 하는 것'으로 뭉쳐 읽어.`,
    principle: `전치사 뒤에는 명사 상당어가 온다. 형용사를 쓰려면 being + 형용사 형태의 동명사구로 만들어야 한다. being은 진행이 아니라 '~한 상태에 있음'을 나타내는 징검다리다.`,
    trap: `- being을 진행형으로 오역해 '유연해지고 있는 중'으로 읽는다.
- being을 빼고 전치사 + 형용사를 그대로 둔 선지를 옳다고 한다.`,
    example: `- I am open to **being flexible** regarding the schedule. (= 유연하게 조율하는 것)
- before **being** transferred → 이전되기 전에`,
    ox: {
      q: "전치사 뒤에서 형용사를 쓰려면 being + 형용사 형태가 필요하다.",
      a: true,
      why: "맞아. being은 문법적 징검다리야. 진행의 뜻으로 읽지 마."
    }
  },
  {
    id: "eng-17",
    subject: "영어",
    topic: "어휘 · 숙어",
    title: "take to + 장소 = '나서다', take to + 취미 = '맛 들이다'",
    date: "2026-11-14",
    tags: ["take to", "숙어", "the streets", "go to bed hungry"],
    analogy: `take to the streets는 '길을 **가지러**'가 아니라 **거리로 나서다**(시위·행진)야. 뒤에 오는 말이 장소냐 취미냐로 뜻이 갈려.`,
    principle: `take to는 뒤 목적어의 성질에 따라 뜻이 달라진다. 장소가 오면 '나서다·향하다'(take to the streets, take to the road), 취미·습관이 오면 '~에 맛 들이다·하기 시작하다'(take to painting)다.`,
    trap: `- take to를 'take A to B'의 이동 구문으로 착각해 '가지고 가다'로 읽는다.
- go to bed hungry를 '배고픈 침대에 가다'로 직역한다 → '배고픈 채로 잠자리에 들다'.`,
    example: `- Millions took to the streets to protest. → 거리로 나섰다
- She took to yoga after retirement. → 요가에 맛 들였다
- Many children go to bed hungry. → 배고픈 채로 잠든다`,
    ox: {
      q: "take to the streets는 '거리로 나서다'라는 뜻이다.",
      a: true,
      why: "맞아. 장소가 오면 '나서다'야. 문맥상 시위·행진으로 읽어."
    }
  },
  {
    id: "eng-18",
    subject: "영어",
    topic: "문법 · 구문",
    title: "Just because A doesn't mean B — 통념 반박 시그널",
    date: "2026-11-06",
    tags: ["Just because", "명사절", "3인칭단수", "통념반박"],
    analogy: `'A라고 해서 B인 건 아니다'라는 **딱지**야. 지문에 이게 나오면 필자의 주장이 통념을 뒤집는다는 신호니까, 뒤 문장이 핵심이 돼.`,
    principle: `Just because A doesn't mean (that) B에서 Just because절은 명사절로 주어 역할을 하므로 본동사는 3인칭 단수 doesn't가 된다. 목적어절의 that은 생략 가능하다.`,
    trap: `- Just because절을 부사절로 보고 주어를 찾지 못한다 → **명사절 주어**.
- doesn't를 don't로 바꿔 수 일치를 흔든다.`,
    example: `- Just because I am not feeling well **doesn't mean** (that) I can skip studying.
- 독해: 통념 반박 → 뒤에 필자 주장이 온다`,
    ox: {
      q: "Just because A doesn't mean B 구문에서 Just because절은 명사절로 주어 기능을 한다.",
      a: true,
      why: "맞아. 절 전체가 주어라 본동사는 단수 doesn't야."
    }
  },
  {
    id: "eng-19",
    subject: "영어",
    topic: "어휘 · 빈출 10선",
    title: "9급 빈출 10단어 — significantly · account for · deploy · cutting-edge",
    date: "2026-11-01",
    tags: ["어휘", "significantly", "account for", "deploy", "cutting-edge"],
    analogy: `지문에서 **숫자·비중**이 나오면 account for, **변화의 크기**가 나오면 significantly, **새 기술**이 나오면 cutting-edge. 단어를 문맥표로 묶어 두면 독해가 빨라져.`,
    principle: `빈출 어휘는 지문 유형과 붙어 다닌다. significantly 상당히, account for (비중을) 차지하다·설명하다, astonishing 놀라운, a set of 일련의, deploy 배치하다·투입하다, floating 떠 있는, debris 잔해, play a role in ~에 역할을 하다, cutting-edge 최첨단의, integrate 통합하다.`,
    trap: `- account for를 '계산하다'로만 외워 비중 문맥에서 놓친다 → '차지하다'.
- deploy를 '고용하다'로 착각한다 → (자원·인력을) 투입·배치.
- integrate와 '진짜' 어원을 헷갈려 '조사하다'로 읽는다.`,
    example: `- Manufacturing **accounts for** 30% of output. (비중)
- Crews **deployed** to the site. (투입)
- **cutting-edge** technology = 최첨단 기술`,
    ox: {
      q: "account for는 문맥에 따라 '차지하다'와 '설명하다' 두 뜻으로 쓰인다.",
      a: true,
      why: "맞아. 비중·비율 문맥에서는 '차지하다'로 읽어야 해."
    }
  },
  {
    id: "eng-20",
    subject: "영어",
    topic: "어휘 · 독해 6선",
    title: "prey vs pray · impartial · social loafing · hold accountable",
    date: "2026-10-30",
    tags: ["prey", "pray", "impartial", "social loafing", "accountable"],
    analogy: `**pray**는 a-men 하고 기도, **prey**는 포식자의 먹이. 철자 하나 차이로 뜻이 완전히 달라. 조별과제 무임승차(social loafing)는 **개인에게 책임을 물어야** 해결돼.`,
    principle: `독해 어휘는 철자 혼동어와 사회·심리 개념어가 반복된다. prey 먹이·사냥감 / pray 기도하다, impartial 공정한·편견 없는, social loafing 사회적 태만, hold A accountable for B A에게 B의 책임을 지우다, liability waiver 책임 면제 각서, implicit 암묵적(↔ explicit 명시적), argue (근거를 대며) 주장하다.`,
    trap: `- prey/pray를 바꿔 읽어 문장 의미를 뒤집는다.
- argue를 '권고하다'로 약하게 읽는다 → 근거를 댄 **강한 주장**.
- implicit과 explicit의 방향을 반대로 잡는다.`,
    example: `- The committee remained **impartial**. → 편견 없이 공정
- Hold each member **accountable** for their part. → 각자에게 책임을 지워라
- **implicit** rules ↔ **explicit** rules`,
    ox: {
      q: "implicit은 '명시적인'이라는 뜻이다.",
      a: false,
      why: "틀렸어. implicit은 암묵적이야. 명시적은 explicit."
    }
  },
  {
    id: "eng-21",
    subject: "영어",
    topic: "독해 · 주체와 객체",
    title: "초청받는 쪽과 주최하는 쪽을 바꿔 놓는 함정",
    date: "2026-10-30",
    tags: ["주체", "객체", "host", "invite", "함정"],
    analogy: `**집주인**과 **손님**을 바꿔 놓는 함정이야. is hosting은 집주인, is invited는 손님이야. 관계절의 주어가 누구인지가 전부지.`,
    principle: `관계절·분사구문에서 동사의 주체를 확인해야 한다. which is hosting은 선행사가 주최 주체이고, is invited의 주어는 초청받는 대상이다. 두 역할을 뒤집으면 정답 선지가 오답처럼 보인다.`,
    trap: `- '연합이 초청될 예정'이라는 선지에 끌린다 → 연합은 **주최**하고 초청되는 건 일반 대중.
- 능동/수동을 바꿔 읽는다 → hosting(능동) / is invited(수동).`,
    example: `- The Silk Road Association, **which is hosting** an information session, invites the public.
- 주최: 연합 / 초청 대상: 일반 대중`,
    ox: {
      q: "관계절의 능동·수동을 확인하지 않으면 주체와 객체가 뒤바뀐 선지를 고르게 된다.",
      a: true,
      why: "맞아. hosting인지 invited인지가 결정적이야. 누가 주체인지 먼저 표시해."
    }
  },
  {
    id: "eng-22",
    subject: "영어",
    topic: "문법 · 수식과 수 일치",
    title: "-thing 뒤 형용사는 뒤에서 수식, that은 복수 선행사에 help",
    date: "2026-10-28",
    tags: ["후치수식", "something simple", "seeking", "수일치"],
    analogy: `**something simple** — 'simple something'이 아니야. -thing으로 끝나는 대명사는 형용사를 **뒤에** 달아. 그리고 복수 명사를 받는 that절 동사는 **복수**로 맞춰.`,
    principle: `some/any/no/every + thing·body·one으로 만든 대명사는 형용사가 뒤에서 수식하므로 부사(simply)가 올 수 없다. 주격 관계대명사 that의 동사는 선행사의 수에 일치시킨다. 능동 주체면 현재분사(seeking)를 쓴다.`,
    trap: `- 'simply something'으로 어순을 바꾼 선지를 옳다고 한다 → -thing은 **후치수식**.
- 복수 선행사 뒤 that절에 단수 동사를 넣는다 → **help**.
- 능동인데 과거분사(sought)를 넣는다.`,
    example: `- We need **something simple**. (simply X)
- organizations **seeking** funding → 능동 현재분사
- programs **that help** students → 복수 선행사 + 복수 동사`,
    ox: {
      q: "-thing으로 끝나는 대명사는 형용사가 뒤에서 수식한다.",
      a: true,
      why: "맞아. something simple이 맞고, simply는 부사라 올 수 없어."
    }
  }
);
