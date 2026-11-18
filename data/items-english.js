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
  },
  {
    id: "eng-23",
    subject: "영어",
    topic: "어휘 · 포함과 구성",
    title: "involve · incorporate · entail · encompass / compose · constitute",
    date: "2026-10-13",
    tags: ["involve", "entail", "encompass", "compose", "constitute"],
    analogy: `**포함** 계열은 '안에 넣는다'는 그림이야. involve는 관련되다, incorporate는 하나로 합치다, entail은 **딸려서 수반하다**, encompass는 넓게 포괄하다.`,
    principle: `involve 관련시키다·포함하다, incorporate 통합하다·포함시키다, entail (결과로서) 수반하다, encompass 포괄하다, compose 구성하다, constitute 구성하다·~에 해당하다. entail은 '반드시 따라온다'는 함의가 강해 논리 지문에 자주 나온다.`,
    trap: `- incorporate와 entail을 바꿔 '수반하다'로 읽는다.
- constitute를 '헌법을 만들다'로만 외운다 → '~에 해당하다' 뜻이 시험 포인트.
- involve를 '발명하다'로 혼동한다.`,
    example: `- The job **involves** frequent travel. (수반한다)
- The plan **entails** higher costs. (비용 증가를 수반)
- Ten members **constitute** the committee. (~로 구성된다)`,
    ox: {
      q: "entail은 '결과적으로 수반하다'라는 뜻으로 쓰인다.",
      a: true,
      why: "맞아. entail은 딸려 오는 결과를 말해."
    }
  },
  {
    id: "eng-24",
    subject: "영어",
    topic: "어휘 · 제거와 약화",
    title: "eliminate · erase · obliterate / decay · degrade / abuse · misuse",
    date: "2026-10-13",
    tags: ["eliminate", "obliterate", "decay", "degrade", "abuse"],
    analogy: `**eliminate**는 없애다, **obliterate**는 흔적도 없이 지우다(강도 최상). **decay**는 스스로 썩는 것, **degrade**는 누가/무언가가 떨어뜨리는 것.`,
    principle: `eliminate 제거하다, erase 지우다, obliterate 완전히 말살하다, decay 부패·쇠퇴하다(자연 발생), degrade 악화시키다·품위를 떨어뜨리다(외부 요인), abuse 남용·학대하다, misuse 오용하다.`,
    trap: `- decay와 degrade를 같은 뜻으로 처리한다 → decay는 **자연적** 쇠퇴, degrade는 **작용에 의한** 하락.
- abuse(권한·약자 대상)와 misuse(도구·물건)를 뒤바꾼다.`,
    example: `- Plastics **decay** very slowly. (자연 분해)
- Stress can **degrade** performance. (떨어뜨린다)
- **abuse** of power (권력 남용) / **misuse** of equipment`,
    ox: {
      q: "degrade는 외부 요인에 의해 수준이나 품위가 떨어지는 것을 말한다.",
      a: true,
      why: "맞아. decay는 자연적 쇠퇴, degrade는 떨어뜨리는 작용이야."
    }
  },
  {
    id: "eng-25",
    subject: "영어",
    topic: "어휘 · 구별과 정확성",
    title: "distinct · explicit · apparent · discrete · disparate / accurate · precise",
    date: "2026-10-13",
    tags: ["distinct", "discrete", "disparate", "explicit", "precise"],
    analogy: `**discrete**는 낱개로 **따로따로**, **discrete**와 철자가 비슷한 **discreet**은 '조심성 있는'이야. **disparate**는 애초에 **비교가 안 되는** 것.`,
    principle: `distinct 뚜렷이 다른, explicit 명시적인, apparent 명백한(때로 '외견상의'), discrete 별개의·분리된, disparate 이질적인·전혀 다른, accurate 정확한, precise 정밀한. discrete/discreet/disparate 세 철자를 구분하는 것이 포인트다.`,
    trap: `- discrete와 discreet를 혼동한다 → discreet은 '신중한'.
- distinct와 disparate를 같은 뜻으로 본다 → disparate는 **이질적**.
- apparent를 항상 '명백한'으로만 읽는다 → 문맥상 '보기에 그럴 듯한'.`,
    example: `- two **discrete** categories (별개의 범주)
- **disparate** views (이질적인 견해)
- **explicit** instructions (명시적 지시)`,
    ox: {
      q: "discrete와 discreet는 철자와 뜻이 모두 다르다.",
      a: true,
      why: "맞아. discrete는 '별개의', discreet는 '신중한'이야."
    }
  },
  {
    id: "eng-26",
    subject: "영어",
    topic: "어휘 · 양과 관계",
    title: "scarce · sparse · meager · ample / respective · respectful · respected",
    date: "2026-10-13",
    tags: ["scarce", "sparse", "meager", "ample", "respective"],
    analogy: `**ample**은 넘칠 만큼 충분, **scarce**는 귀함, **sparse**는 듬성듬성, **meager**는 있는데 **빈약함**. respective는 '각각의', respectful은 '존중하는'.`,
    principle: `scarce 희소한·부족한, sparse (분포가) 드문드문한, meager 빈약한, ample 충분한·풍부한, respective 각각의, respectful 존중하는, respected 존경받는, respectable 존경할 만한·점잖은.`,
    trap: `- scarce와 sparse를 같은 것으로 본다 → scarce는 **양이 부족**, sparse는 **간격이 넓음**.
- respective(각각의)와 respectful(존중하는)을 뒤바꾼다. 시험 단골.`,
    example: `- **scarce** resources (자원 부족)
- **sparse** vegetation (드문드문한 식생)
- their **respective** roles (각자의 역할)`,
    ox: {
      q: "respective는 '존경하는'이라는 뜻이다.",
      a: false,
      why: "틀렸어. respective는 '각각의'야. 존중하는 건 respectful."
    }
  },
  {
    id: "eng-27",
    subject: "영어",
    topic: "어휘 · 평가와 추측",
    title: "appreciate · acknowledge · cherish · esteem / attribute · ascribe / speculate · surmise",
    date: "2026-10-13",
    tags: ["appreciate", "acknowledge", "cherish", "attribute", "speculate"],
    analogy: `**attribute A to B**는 'A를 B 탓으로 돌린다'. **speculate**은 근거가 약한 **추측**, **surmise**도 추측이지만 '짐작하다'에 가까워.`,
    principle: `appreciate 가치를 알아보다·감상하다, acknowledge 인정하다, cherish 소중히 여기다, esteem 존중하다, attribute A to B A를 B의 탓·덕으로 돌리다, ascribe (원인·성질을) 돌리다, trait 특성, speculate 추측하다·투기하다, surmise 짐작하다.`,
    trap: `- attribute의 방향을 뒤집어 'B를 A에 돌린다'로 읽는다.
- appreciate를 '감사하다'로만 외워 '가치를 인정하다' 문맥을 놓친다.
- speculate을 '확신하다'로 바꾼다.`,
    example: `- She **attributes** her success **to** luck. (성공을 운 탓으로)
- We can only **speculate** about the cause. (추측할 뿐)
- **cherish** the memories (소중히 여기다)`,
    ox: {
      q: "attribute A to B는 'A를 B의 탓으로 돌리다'라는 뜻이다.",
      a: true,
      why: "맞아. A가 결과, B가 원인이야."
    }
  },
  {
    id: "eng-28",
    subject: "영어",
    topic: "어휘 · 취약과 이해",
    title: "vulnerable · susceptible / apprehend · fathom / profound · abstruse",
    date: "2026-10-13",
    tags: ["vulnerable", "susceptible", "apprehend", "fathom", "abstruse"],
    analogy: `**vulnerable**은 맞으면 아픈 상태, **susceptible**은 영향을 **받기 쉬운** 상태야. **fathom**은 깊이를 재듯 '헤아리다', **abstruse**는 헤아리기 어려운 난해함.`,
    principle: `vulnerable 취약한, susceptible 영향받기 쉬운·~에 걸리기 쉬운, apprehend 이해하다(또는 체포하다), fathom 깊이 이해하다, comprehend 이해하다, profound 심오한, abstruse 난해한, superficial 피상적인.`,
    trap: `- vulnerable과 susceptible를 완전 동의어로 단정한다 → susceptible는 **to**와 결합해 '취약한 대상'을 강조.
- apprehend를 '체포하다'로만 읽어 문맥을 놓친다.
- profound와 abstruse를 같은 말로 본다 → abstruse는 **난해함**에 초점.`,
    example: `- Children are **susceptible to** infection.
- Few can **fathom** his reasoning.
- an **abstruse** theory (난해한 이론)`,
    ox: {
      q: "abstruse는 '심오해서 가치 있는'이라는 뜻이다.",
      a: false,
      why: "아니야. abstruse는 '난해한'이야. 심오한 건 profound."
    }
  },
  {
    id: "eng-29",
    subject: "영어",
    topic: "어휘 · 대면과 은폐",
    title: "face · encounter · evade / conceal · disguise / exert · strive / commitment",
    date: "2026-10-13",
    tags: ["evade", "conceal", "disguise", "exert", "commitment"],
    analogy: `**face**는 정면으로 마주함, **evade**는 살짝 빠져나감. **conceal**은 숨기기, **disguise**는 **다른 것처럼 위장**하기야.`,
    principle: `face 직면하다, encounter 마주치다·조우하다, evade 회피하다, conceal 숨기다, disguise 변장시키다·위장하다, exert (힘·영향력을) 발휘하다, strive 애쓰다, commitment 헌신·약속, pledge 서약·맹세, devotion 헌신.`,
    trap: `- conceal과 disguise를 같은 것으로 처리한다 → disguise는 **가장(假裝)**.
- exert를 '소모하다'로 읽는다 → exert influence는 '영향력을 발휘하다'.
- commitment를 '위원회'로 혼동한다(committee).`,
    example: `- **exert** pressure on the market (압력을 가하다)
- **conceal** the truth (진실을 숨기다) / **disguise** himself as a guard (경비로 변장)
- a firm **commitment** to quality`,
    ox: {
      q: "disguise는 '다른 모습으로 위장하다'라는 뜻이다.",
      a: true,
      why: "맞아. 숨기는 conceal, 위장하는 disguise야."
    }
  },
  {
    id: "eng-30",
    subject: "영어",
    topic: "어휘 · 인용과 전달",
    title: "cite · quote · invoke / transmit · forward / reside · context / estimate",
    date: "2026-10-13",
    tags: ["cite", "invoke", "transmit", "reside", "estimate"],
    analogy: `**cite**는 근거로 **가져다 댐**, **quote**는 그대로 **따옴**, **invoke**는 법·원칙을 **불러내 적용**함. 셋 다 '가져온다'지만 무엇을 가져오느냐가 달라.`,
    principle: `cite (근거로) 인용하다·인용해 언급하다, quote 그대로 인용하다, invoke (법·원칙·권리를) 원용하다, transmit 전달·전송하다, forward 전달하다, reside 거주하다, dwell 살다·(생각에) 골몰하다, context 맥락, setting 배경·환경, estimate 추정하다, gauge 가늠하다, assess 평가하다, appraise 감정·평가하다.`,
    trap: `- cite와 quote를 같은 것으로 본다 → cite는 요지 인용, quote는 **그대로**.
- invoke를 'invite'로 혼동한다.
- assess·appraise·estimate의 대상을 섞는다(가치 평가 vs 수치 추정).`,
    example: `- **cite** a study (연구를 근거로 들다)
- **invoke** the right to remain silent (권리를 원용)
- **assess** the risk / **estimate** the cost`,
    ox: {
      q: "invoke는 법이나 원칙을 근거로 원용한다는 뜻으로 쓰인다.",
      a: true,
      why: "맞아. 권리·조항을 불러내 적용하는 게 invoke야."
    }
  },
  {
    id: "eng-31",
    subject: "영어",
    topic: "어휘 · 권한과 제도",
    title: "independent · autonomous · sovereign / entitle · qualify / endorse · federation",
    date: "2026-10-13",
    tags: ["autonomous", "sovereign", "entitle", "qualify", "endorse", "coalition"],
    analogy: `**independent**는 남에게 안 기댐, **autonomous**는 **스스로 규칙을 정함**, **sovereign**은 **최고 권력**을 가짐. 세 단계로 기억해.`,
    principle: `independent 독립적인, autonomous 자율적인·자치의, sovereign 주권의·최고의, entitle 자격을 주다·제목을 붙이다, qualify 자격을 갖추다·자격을 주다, undertake 착수하다·떠맡다, embark on 착수하다, endorse 지지·보증하다, oppose 반대하다, federation 연방·연맹, alliance 동맹, coalition 연합, shelter·refuge·haven 피난처·안식처, rule out 배제하다, omit 빠뜨리다, exclusively 오로지.`,
    trap: `- entitle(자격을 **주다**)와 qualify(자격을 **갖추다**)의 방향을 뒤집는다.
- federation과 alliance·coalition을 같은 것으로 처리한다 → federation은 **연방**.
- rule out을 '규칙을 정하다'로 오역한다.`,
    example: `- The law **entitles** workers **to** severance pay. (자격을 준다)
- She **qualifies for** the scholarship. (자격을 갖춘다)
- The study was **ruled out** as unreliable. (배제되었다)`,
    ox: {
      q: "entitle은 '자격을 갖추다'라는 뜻이다.",
      a: false,
      why: "틀렸어. entitle은 '자격을 주다'야. 갖추는 건 qualify."
    }
  },
  {
    id: "eng-32",
    subject: "영어",
    topic: "어휘 · 고난도 단어",
    title: "ubiquitous · drastic · distress · crude · scheme · assurance · superior",
    date: "2026-10-13",
    tags: ["ubiquitous", "drastic", "distress", "crude", "scheme", "assurance"],
    analogy: `**ubiquitous**는 '어디에나 있음'(스마트폰), **drastic**은 '과감해서 충격적인', **crude**는 '다듬어지지 않은'이야. crude oil이 원유인 이유도 같아.`,
    principle: `ubiquitous 어디에나 있는·편재하는, drastic 과감한·극단적인, distress 고통·곤경, crude 조잡한·가공하지 않은, scheme 계획·음모·제도, assurance 보증·확신, superior 우월한·상관, inferior 열등한·부하, executive 임원·행정부의, bargain 흥정하다·거래, mediate 중재하다.`,
    trap: `- scheme을 늘 '음모'로만 읽는다 → 중립적으로 '제도·계획' 뜻도 있음.
- superior/inferior의 방향을 뒤집는다.
- assurance를 '보험(insurance)'으로 혼동한다.`,
    example: `- Smartphones are **ubiquitous**. (어디에나 있다)
- a **drastic** cut in spending (과감한 삭감)
- **crude** oil (원유)`,
    ox: {
      q: "ubiquitous는 '어디에나 존재하는'이라는 뜻이다.",
      a: true,
      why: "맞아. 편재한다는 뜻이야."
    }
  },
  {
    id: "eng-33",
    subject: "영어",
    topic: "문법 · with 분사구문",
    title: "with + 명사 + 분사 — 능동은 -ing, 수동은 p.p.",
    date: "2026-10-13",
    tags: ["with", "분사구문", "부대상황", "opened"],
    analogy: `**with the door opened**는 문이 **열려 있는 상태로**(문이 열리는 건 내가 한 게 아니라 상태), **with prices rising**은 가격이 **오르는 상태로**. 목적어와 분사의 관계만 보면 돼.`,
    principle: `with + 목적어 + 분사는 '~한 상태로'라는 부대상황을 나타낸다. 목적어가 분사의 동작을 하는 능동 관계면 현재분사(-ing), 목적어가 동작을 당하는 수동 관계면 과거분사(p.p.)를 쓴다.`,
    trap: `- 능동/수동을 뒤집어 'with the door opening'으로 만든다.
- with 뒤에 완전한 절을 넣어 'with the door was opened'로 쓴다.
- 콤마 뒤 -ing와 같은 기능으로 착각한다.`,
    example: `- with the window **open**(형용사) / with the window **opened**(수동 분사)
- with prices **rising** rapidly (가격이 오르는 상태로)
- He sat with his arms **crossed**.`,
    ox: {
      q: "with + 목적어 + 과거분사는 목적어가 동작을 당하는 수동 관계를 나타낸다.",
      a: true,
      why: "맞아. 목적어가 당하면 p.p., 하면 -ing야."
    }
  },
  {
    id: "eng-34",
    subject: "영어",
    topic: "문법 · 콤마 + -ing",
    title: "콤마 뒤 -ing는 문맥 따라 동시·결과·부연 세 가지",
    date: "2026-10-13",
    tags: ["분사구문", "결과", "동시", "부연"],
    analogy: `**-ing 한 덩어리**를 무조건 '~하면서'로 번역하면 틀려. 앞 절이 원인이고 뒤가 **결과**면 '그래서 ~하게 되었다', 덧붙이는 말이면 '그런데 ~이다'로 읽어.`,
    principle: `콤마 + -ing 분사구문은 문맥에 따라 ① 동시 상황(하면서) ② 결과(그리하여 ~하게 되었다) ③ 부연 설명(즉, ~인데)로 해석한다. 주절 주어와 분사의 논리적 주어가 같은지, 능동인지 수동인지를 먼저 확인한다.`,
    trap: `- 하나의 뜻으로 고정해 해석한다.
- 주절 주어와 분사 주어가 다르면 dangling modifier 오류인데 이를 놓친다.
- 결과 의미를 '이유'로 바꿔 읽는다.`,
    example: `- She left the room, **slamming** the door. (동시)
- He raised prices, **losing** customers. (결과 → 고객을 잃게 되었다)
- The plan, **announced** yesterday, was withdrawn. (부연·수동)`,
    ox: {
      q: "콤마 뒤 -ing 분사구문은 문맥에 따라 동시 상황·결과·부연으로 해석한다.",
      a: true,
      why: "맞아. 한 가지 뜻으로 고정하면 안 돼."
    }
  },
  {
    id: "eng-35",
    subject: "영어",
    topic: "문법 · 사역과 지각",
    title: "have/make A V · allow A to V · find A B · appear + 형용사",
    date: "2026-10-13",
    tags: ["사역동사", "allow", "find", "appear", "5형식"],
    analogy: `**have/make**는 목적어 뒤에 **동사원형**을 바로 붙여. **allow**는 to를 끼워야 해. **find**는 목적어 뒤에 **형용사**가 와서 'A가 B임을 알다'.`,
    principle: `사역동사 have·make·let은 목적격보어로 동사원형을 취하고(수동 의미면 p.p.), allow·ask·tell은 to부정사를 취한다. find는 목적어 뒤에 형용사·명사를 취하며, appear는 주격보어로 형용사를 취한다.`,
    trap: `- 'allow A V'로 to를 빼먹는다 → **allow A to V**.
- have + 목적어 + p.p.의 수동 의미를 능동으로 읽는다.
- appear 뒤에 부사를 넣는다 → **형용사**.`,
    example: `- They **made** him **apologize**. (원형)
- They **allowed** him **to leave**. (to부정사)
- We **found** the room **empty**. (형용사)
- She **appeared** **calm**.`,
    ox: {
      q: "allow는 목적격보어로 동사원형을 취한다.",
      a: false,
      why: "아니야. allow는 to부정사를 취해. 원형은 make·have·let이야."
    }
  },
  {
    id: "eng-36",
    subject: "영어",
    topic: "문법 · 연결 표현",
    title: "lead to · stem from · account for · cater to · rather than · bear resemblance to",
    date: "2026-10-13",
    tags: ["lead to", "stem from", "cater to", "rather than", "resemblance"],
    analogy: `**lead to**는 앞이 원인, **stem from**은 앞이 결과야. 화살표 방향이 정반대라 지문에서 인과를 뒤집으면 답이 틀려.`,
    principle: `lead to ~을 초래하다(원인→결과), stem from ~에서 비롯되다(결과←원인), account for 차지하다·설명하다, cater to ~의 요구를 충족시키다, rather than ~보다는, bear resemblance to ~와 닮다. 인과 방향을 확인하는 것이 독해의 핵심이다.`,
    trap: `- lead to와 stem from의 인과 방향을 바꿔 읽는다.
- cater to를 '음식을 제공하다'로만 해석한다 → '요구에 맞추다'.
- rather than을 '~뿐만 아니라'로 오역한다.`,
    example: `- Poor sleep **leads to** poor focus.
- His fear **stems from** childhood.
- The firm **caters to** young buyers. (젊은 구매자층을 겨냥한다)`,
    ox: {
      q: "stem from은 '~에서 비롯되다'로, 결과가 앞에 오고 원인이 뒤에 온다.",
      a: true,
      why: "맞아. lead to와 방향이 반대야."
    }
  },
  {
    id: "eng-37",
    subject: "영어",
    topic: "독해 · 1분 풀이 구조 표기",
    title: "[ ] 주요 덩어리, ( ) 수식, / 의미 단위 — 짧게 끊어 읽기",
    date: "2026-10-13",
    tags: ["직독직해", "구조표기", "끊어읽기", "1분"],
    analogy: `문장을 **한 덩어리로 길게 묶으면** 머리에 안 들어와. [주요 덩어리]는 대괄호, (수식·부연)은 소괄호, /는 숨 쉬는 자리. **짧게 끊는 게** 핵심이야.`,
    principle: `독해는 의미 단위로 끊어 읽는 훈련이 기본이다. 주요 성분은 [ ]로, 수식·부연은 ( )로 표시하고 / 로 의미 단위를 나눈다. 예: until it can be retrieved / after the AUV is recovered / at the end of a dive. 전치사구·관계절·분사구는 앞 요소를 수식하므로 붙여 읽는다.`,
    trap: `- 긴 구문을 통째로 묶어 해석이 밀린다.
- 수식 대상을 잘못 잡아 전치사구를 엉뚱한 명사에 붙인다.
- 모르는 단어에서 멈춰 문장 전체를 놓친다 → 구조 먼저, 단어는 뒤에.`,
    example: `- [The data] (from the dive) / [will remain] (in the capsule) / until it can be retrieved.
- 1분 풀이: 구조 표시 10초 → 의미 단위 해석 40초 → 선택지 대조 10초`,
    ox: {
      q: "독해에서 전치사구와 관계절은 수식 대상과 붙여 하나의 의미 단위로 읽는다.",
      a: true,
      why: "맞아. 수식어를 떼어 놓으면 문장이 안 잡혀."
    }
  },
  {
    id: "eng-38",
    subject: "영어",
    topic: "회화 · OPIc 답변 구조",
    title: "7줄 답변 공식 — 도입·이유·경험·묘사·느낌·마무리 + 필러",
    date: "2026-10-13",
    tags: ["OPIc", "회화", "필러", "답변구조"],
    analogy: `말하다 막히면 **필러**로 시간을 벌어. "Well, let me think for a second..." 이 한 문장이 침묵 3초를 메워 줘.`,
    principle: `OPIc 답변은 ① 질문 되받기·도입 ② 이유 ③ 구체적 경험·사례 ④ 세부 묘사(장소·사람·감정) ⑤ 느낀 점 ⑥ 마무리 문장으로 약 7줄을 채우는 구조가 안정적이다. 필러(Well, Actually, You know)와 연결어(First, Also, Finally)를 넣어 끊김을 줄인다.`,
    trap: `- 이유만 말하고 **구체적 경험**을 빼면 등급이 안 올라간다.
- 한 문장을 길게 늘어뜨리다 문법이 무너진다 → 짧은 문장 여러 개.
- 필러를 남발해 의미 없는 말로 채운다.`,
    example: `- Well, that's an interesting question. / I'd like to talk about my last trip. / For example, last summer I went to Busan with my friends. / The beach was crowded but the food was amazing. / It made me feel refreshed. / That's why I keep going back there.`,
    ox: {
      q: "OPIc 답변에서는 이유뿐 아니라 구체적인 경험과 세부 묘사를 포함하는 것이 좋다.",
      a: true,
      why: "맞아. 구체성이 점수를 만든다."
    }
  }
);
