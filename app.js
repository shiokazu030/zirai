const typeNames = [
  "既読監視の亡霊",
  "試し行動プリンセス",
  "元恋人比較ゾンビ",
  "好き避け暴走機関車",
  "都合よく尽くす天使",
  "追われると冷める逃亡者",
  "LINE長文裁判官",
  "嫉妬センサー過敏型",
  "沼らせ無自覚小悪魔",
  "愛情確認の取り立て屋",
  "妄想先走り花嫁",
  "音信不通クラッシャー",
  "強がりサバサバ地雷",
  "恋愛脳フル稼働型",
  "理想高すぎ審査員",
  "復縁未練ラスボス"
];

const results = [
  {
    catch: "返信速度で愛を測る、通知欄の番人。",
    danger: 92,
    stars: [5, 3, 4, 3],
    landmine: "既読、オンライン、返信間隔。小さな情報を拾いすぎて、頭の中で勝手に事件化しがち。",
    charm: "好きな人の変化にすぐ気づける。ちゃんと見てくれる安心感はかなり強い。",
    weak: "疑う前に確認したくなって、相手の自由時間まで恋の証拠にしてしまう。",
    quote: "「今、見たよね？」が胸の中で鳴り止まない。",
    avoid: "返信前提の追撃LINEと、匂わせ投稿で反応を見ること。",
    good: [4, 5, 10],
    bad: [6, 12, 13]
  },
  {
    catch: "愛されてるか、わざと揺らして確かめる。",
    danger: 88,
    stars: [4, 4, 5, 4],
    landmine: "本音を言う前に、冷たくしたり離れるフリをしたり。追いかけてくれるかで愛を判定しがち。",
    charm: "甘え方がドラマチックで、相手の保護欲を強烈に刺激する。",
    weak: "試しすぎると、好きな人ほど疲れて静かに撤退する。",
    quote: "「別にいいけど」は、全然よくない合図。",
    avoid: "別れ話をカードにして相手の本気度を測ること。",
    good: [5, 9, 14],
    bad: [6, 12, 15]
  },
  {
    catch: "今の恋に、過去の亡霊を同席させる。",
    danger: 84,
    stars: [4, 2, 4, 3],
    landmine: "元恋人、昔の恋、相手の過去。比較材料を集めて、目の前の恋を不安に染めがち。",
    charm: "記憶力がよく、嬉しかったことも深く大事にできる。",
    weak: "今の相手を見ているつもりで、過去の影と戦ってしまう。",
    quote: "「前の人にもそう言った？」が喉まで来る。",
    avoid: "相手の昔話を掘り返して自分から傷つきにいくこと。",
    good: [10, 14, 4],
    bad: [9, 15, 16]
  },
  {
    catch: "好きなのに逃げる、逃げるほど燃える。",
    danger: 79,
    stars: [3, 4, 4, 4],
    landmine: "好意がバレそうになると急に雑対応。なのに相手が引くと内心フルスロットル。",
    charm: "照れと不器用さの破壊力が高く、わかる人にはかなり刺さる。",
    weak: "素直になるタイミングを逃して、脈なしに見られやすい。",
    quote: "「好きじゃないし」が、ほぼ好き。",
    avoid: "嬉しい時ほど冷たくする反射行動。",
    good: [1, 10, 14],
    bad: [6, 13, 15]
  },
  {
    catch: "愛されたいのに、便利枠で頑張りすぎる。",
    danger: 76,
    stars: [4, 3, 3, 5],
    landmine: "嫌われたくなくて何でも引き受ける。優しさのつもりが、都合のいい人ポジに寄りがち。",
    charm: "包容力と献身力が高い。安心して帰ってこられる場所になれる。",
    weak: "我慢の請求書を後からまとめて出してしまう。",
    quote: "「大丈夫」は、たまに大丈夫じゃない。",
    avoid: "断れないまま尽くして、あとで静かに爆発すること。",
    good: [8, 13, 15],
    bad: [2, 9, 12]
  },
  {
    catch: "追う恋は熱い、追われた瞬間に冷える。",
    danger: 82,
    stars: [2, 5, 3, 2],
    landmine: "手に入りそうになると急に距離を置く。安心よりも未確定のドキドキに弱いタイプ。",
    charm: "余白とミステリアスさがあり、相手の狩猟本能を刺激する。",
    weak: "本命候補ほど逃がして、あとから自分で寂しくなる。",
    quote: "「好きって言われたら、なんか違う。」",
    avoid: "好意を向けられた瞬間に欠点探しを始めること。",
    good: [7, 11, 15],
    bad: [1, 2, 10]
  },
  {
    catch: "感情を全部、議事録つきで提出する。",
    danger: 86,
    stars: [4, 2, 4, 4],
    landmine: "モヤモヤすると長文で整理したくなる。正しさはあるのに、温度が裁判になる。",
    charm: "言語化がうまく、曖昧な関係をちゃんと前に進める力がある。",
    weak: "相手が読む前に気圧されて、内容より圧が残りやすい。",
    quote: "「要するに」で終わらない夜がある。",
    avoid: "深夜に三画面分の正論を送ること。",
    good: [6, 13, 15],
    bad: [9, 12, 14]
  },
  {
    catch: "好きな人の周辺人物、全員ちょっと敵。",
    danger: 90,
    stars: [5, 3, 5, 4],
    landmine: "異性の名前、いいね、飲み会。些細な気配にセンサーが鳴り、心が勝手に警戒態勢。",
    charm: "独占欲の裏に熱量がある。愛されている実感を強く渡せる。",
    weak: "確認が増えるほど、相手の世界を狭めてしまう。",
    quote: "「誰？」の二文字に全部詰まってる。",
    avoid: "SNSのいいね欄を巡回して自分を削ること。",
    good: [5, 10, 14],
    bad: [6, 9, 12]
  },
  {
    catch: "無意識の距離感で、相手を深みに落とす。",
    danger: 73,
    stars: [2, 5, 2, 3],
    landmine: "本人は普通のつもりでも、優しさと余白の出し方が絶妙。相手だけが勝手に沼る。",
    charm: "軽やかで褒め上手。好きかも、と思わせる空気づくりが天才的。",
    weak: "責任を取る前に相手の感情だけ育ててしまうことがある。",
    quote: "「そんなつもりなかった」が一番強い。",
    avoid: "寂しい時だけ距離を詰めて、満たされたら引くこと。",
    good: [2, 6, 15],
    bad: [1, 8, 10]
  },
  {
    catch: "好きの証明を、毎日きっちり回収したい。",
    danger: 91,
    stars: [5, 3, 4, 4],
    landmine: "言葉、態度、予定、優先順位。愛情確認の項目が多く、足りないとすぐ不安になる。",
    charm: "関係を大事にする力が強い。ちゃんと向き合う恋にはかなり本気。",
    weak: "確認が義務化すると、相手の愛情がテストの回答みたいになる。",
    quote: "「好き？」は質問じゃなくて充電。",
    avoid: "毎日の好き確認を、答え合わせの儀式にすること。",
    good: [1, 4, 8],
    bad: [6, 9, 12]
  },
  {
    catch: "三回目のデートで、心は式場見学済み。",
    danger: 78,
    stars: [4, 4, 3, 5],
    landmine: "少し優しくされると未来予想図が爆速で進む。現実の温度より妄想の温度が先に上がる。",
    charm: "恋に夢を見せる力があり、日常を一気に特別にできる。",
    weak: "相手の歩幅を置いていき、勝手に失望しやすい。",
    quote: "「これ、運命では？」の判定が早い。",
    avoid: "まだ始まっていない関係を、脳内で本命確定にすること。",
    good: [6, 14, 16],
    bad: [7, 13, 15]
  },
  {
    catch: "黙ることで、全部を壊しにいく。",
    danger: 87,
    stars: [3, 3, 5, 2],
    landmine: "傷つくと説明せずに消える。察してほしい気持ちが、音信不通という強攻策になる。",
    charm: "ミステリアスで、追わせる力はかなり強い。",
    weak: "相手に不安と怒りを残し、戻る頃には関係が燃え跡になっている。",
    quote: "「もういい」は、連絡しない宣言。",
    avoid: "話し合う前に通知を全部切ること。",
    good: [6, 9, 13],
    bad: [1, 7, 10]
  },
  {
    catch: "平気な顔で、内側だけ大炎上。",
    danger: 81,
    stars: [2, 3, 4, 4],
    landmine: "重いと思われたくなくてサバサバを演じる。本当は傷ついているのに、強がりで伝わらない。",
    charm: "自立して見えてかっこいい。甘えた時のギャップはかなり強い。",
    weak: "我慢しすぎて、急に切る・急に泣く・急に終わらせる。",
    quote: "「別に気にしてない」は、だいたい気にしてる。",
    avoid: "本音を隠したまま相手を減点し続けること。",
    good: [5, 7, 12],
    bad: [4, 11, 14]
  },
  {
    catch: "恋が始まると、生活の全CPUを持っていかれる。",
    danger: 85,
    stars: [5, 4, 4, 5],
    landmine: "仕事中も寝る前も相手のことを考える。恋の優先順位が上がりすぎて自分が薄くなる。",
    charm: "愛情表現が豊かで、一緒にいる時間を最高に盛り上げられる。",
    weak: "恋以外の予定が全部サブクエストになりやすい。",
    quote: "通知ひとつで一日の天気が変わる。",
    avoid: "生活、友達、睡眠を恋のために全振りすること。",
    good: [2, 8, 11],
    bad: [7, 13, 15]
  },
  {
    catch: "恋人候補を、見えない採点表で審査する。",
    danger: 74,
    stars: [2, 2, 3, 3],
    landmine: "条件、言葉遣い、将来性、センス。理想を大事にしすぎて、始まる前から落選が増える。",
    charm: "見る目があり、簡単には流されない。長期的に大切な判断ができる。",
    weak: "人間味のあるズレまで不合格にして、恋の余白を削りがち。",
    quote: "「いい人なんだけど」が口癖になりやすい。",
    avoid: "初期段階で完璧さを求め、育つ前の恋を切ること。",
    good: [5, 6, 9],
    bad: [2, 11, 14]
  },
  {
    catch: "終わった恋の最終ボスとして君臨する。",
    danger: 89,
    stars: [5, 3, 4, 3],
    landmine: "忘れたつもりでも、ふとした瞬間に過去の恋が復活。新しい恋にも未練の影が差しがち。",
    charm: "一途さと記憶の深さがある。本気で愛した相手を簡単に雑にしない。",
    weak: "過去を美化して、今差し出されている幸せを見落とす。",
    quote: "「もう平気」は、エンディング後の第二形態。",
    avoid: "新しい相手に、昔の恋の穴埋めをさせること。",
    good: [11, 13, 5],
    bad: [3, 6, 9]
  }
];

const questions = [
  {
    text: "好きな人から返信が遅い夜、あなたは？",
    options: [
      ["既読やログイン状況を見てしまう", 0],
      ["わざと少し冷たい返しを考える", 1],
      ["忙しいだけ、と自分の予定に戻る", 12],
      ["前の恋でもこうだったなと思い出す", 2]
    ]
  },
  {
    text: "相手の愛情を確かめたくなった時は？",
    options: [
      ["ストレートに好きか聞く", 9],
      ["不機嫌になって様子を見る", 1],
      ["尽くして反応を待つ", 4],
      ["何も言わず距離を置く", 11]
    ]
  },
  {
    text: "恋がうまくいきそうになると？",
    options: [
      ["急に欠点が見えてくる", 5],
      ["未来を想像して舞い上がる", 10],
      ["照れて雑な態度になる", 3],
      ["ちゃんと関係を確認したくなる", 6]
    ]
  },
  {
    text: "相手が異性と楽しそうにしていたら？",
    options: [
      ["誰なのか気になって調べる", 7],
      ["平気な顔をして内心沈む", 12],
      ["自分も別の人の話を出す", 1],
      ["まあ人気者だなと思う", 8]
    ]
  },
  {
    text: "ケンカになりそうな時の癖は？",
    options: [
      ["長文で気持ちを整理して送る", 6],
      ["黙って連絡を止める", 11],
      ["大丈夫と言って飲み込む", 4],
      ["もういい、と終わらせたくなる", 12]
    ]
  },
  {
    text: "恋人に一番求めがちなものは？",
    options: [
      ["安心できる連絡頻度", 0],
      ["言葉での愛情表現", 9],
      ["追いかけたくなる余白", 5],
      ["将来まで考えられる条件", 14]
    ]
  },
  {
    text: "いい感じの人ができたら、頭の中は？",
    options: [
      ["相手中心で予定が回り始める", 13],
      ["結婚後の生活まで想像する", 10],
      ["好きバレしないよう通常運転を装う", 3],
      ["過去の相手と違うか比べる", 2]
    ]
  },
  {
    text: "相手に尽くす時の本音は？",
    options: [
      ["喜んでほしいけど見返りも少し欲しい", 4],
      ["これで本命になれるかもと思う", 13],
      ["尽くすより追わせたい", 8],
      ["相手の基準を満たすか見ている", 14]
    ]
  },
  {
    text: "SNSで相手の気配を見つけたら？",
    options: [
      ["投稿時間やいいねまで見てしまう", 0],
      ["知らない異性の影に反応する", 7],
      ["気にしてないフリで閉じる", 12],
      ["元恋人の影がないか見てしまう", 2]
    ]
  },
  {
    text: "好きと言われた瞬間、近い気持ちは？",
    options: [
      ["嬉しいけど急に冷静になる", 5],
      ["本当に？いつまで？と不安になる", 9],
      ["照れて逃げたくなる", 3],
      ["もっと言ってほしい", 13]
    ]
  },
  {
    text: "別れた相手については？",
    options: [
      ["意外と長く思い出す", 15],
      ["今の人と比べてしまう", 2],
      ["終わったら切り替えたい", 6],
      ["連絡が来たら揺れる", 10]
    ]
  },
  {
    text: "相手が弱っている時、あなたは？",
    options: [
      ["できること全部してあげたい", 4],
      ["そばにいて価値を出したい", 13],
      ["優しくしつつ距離感は残す", 8],
      ["支えられる相手か見極める", 14]
    ]
  },
  {
    text: "気持ちが爆発しそうな時は？",
    options: [
      ["言葉にして全部伝える", 6],
      ["連絡を絶って落ち着こうとする", 11],
      ["好きかどうか確認したくなる", 9],
      ["冷めたフリで自分を守る", 12]
    ]
  },
  {
    text: "理想の恋の距離感は？",
    options: [
      ["毎日ちゃんとつながっていたい", 0],
      ["追う余地がある方が燃える", 5],
      ["お互い本音を言語化したい", 6],
      ["未来を見据えて進みたい", 10]
    ]
  },
  {
    text: "相手から急に優しくされたら？",
    options: [
      ["何かあった？と裏を読む", 7],
      ["これは運命かもと思う", 10],
      ["好き避けで変な返事をする", 3],
      ["素直に嬉しいけど条件も見る", 14]
    ]
  },
  {
    text: "一番刺さる言葉は？",
    options: [
      ["ちゃんと見てるよ", 0],
      ["君がいないとだめ", 13],
      ["無理しなくていいよ", 4],
      ["やっぱり忘れられない", 15]
    ]
  }
];

const state = {
  index: 0,
  answers: []
};

const $ = (selector) => document.querySelector(selector);
const typeSprite = new Image();
typeSprite.src = "./assets/type-sprite.jpg";
const screens = {
  home: $("#homeScreen"),
  catalog: $("#catalogScreen"),
  quiz: $("#quizScreen"),
  result: $("#resultScreen")
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function spritePosition(index) {
  const col = index % 4;
  const row = Math.floor(index / 4);
  return `${(col / 3) * 100}% ${(row / 3) * 100}%`;
}

function renderTypeCatalog() {
  $("#catalogGrid").innerHTML = typeNames.map((name, index) => {
    const data = results[index];
    return `
      <article class="catalog-card">
        <div class="catalog-art" style="background-position: ${spritePosition(index)}" aria-hidden="true"></div>
        <div class="catalog-body">
          <div class="catalog-meta">
            <span class="catalog-number">TYPE ${String(index + 1).padStart(2, "0")}</span>
            <span class="catalog-danger">地雷度 ${data.danger}%</span>
          </div>
          <h3>${name}</h3>
          <p>${data.catch}</p>
        </div>
      </article>
    `;
  }).join("");
}

function startQuiz() {
  state.index = 0;
  state.answers = [];
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.index];
  $("#counterText").textContent = `Q${state.index + 1} / ${questions.length}`;
  $("#questionTitle").textContent = question.text;
  $("#progressFill").style.width = `${(state.index / questions.length) * 100}%`;
  $("#backButton").style.visibility = state.index === 0 ? "hidden" : "visible";

  const letters = ["A", "B", "C", "D"];
  $("#answers").innerHTML = question.options.map(([label], index) => {
    return `<button class="answer-button" type="button" data-answer="${index}"><span>${letters[index]}</span>${label}</button>`;
  }).join("");
}

function chooseAnswer(optionIndex) {
  const [, typeIndex] = questions[state.index].options[optionIndex];
  state.answers[state.index] = typeIndex;
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }
  $("#progressFill").style.width = "100%";
  setTimeout(showResult, 220);
}

function getWinnerIndex() {
  const scores = Array(typeNames.length).fill(0);
  state.answers.forEach((typeIndex, questionIndex) => {
    scores[typeIndex] += 4;
    scores[(typeIndex + questionIndex + 3) % typeNames.length] += 1;
  });
  let winner = 0;
  scores.forEach((score, index) => {
    if (score > scores[winner]) winner = index;
  });
  return winner;
}

function stars(count) {
  return "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, 5 - count);
}

function namesFromIndexes(indexes) {
  return indexes.map((number) => typeNames[number - 1]);
}

function showResult() {
  const winner = getWinnerIndex();
  const data = results[winner];
  $("#resultArt").style.backgroundPosition = spritePosition(winner);
  $("#resultNumber").textContent = `TYPE ${String(winner + 1).padStart(2, "0")}`;
  $("#resultType").textContent = typeNames[winner];
  $("#resultCatch").textContent = data.catch;
  $("#dangerScore").textContent = `${data.danger}%`;
  $("#dangerFill").style.width = `${data.danger}%`;
  $("#statDepend").textContent = stars(data.stars[0]);
  $("#statCharm").textContent = stars(data.stars[1]);
  $("#statCrash").textContent = stars(data.stars[2]);
  $("#statMain").textContent = stars(data.stars[3]);
  $("#landmineText").textContent = data.landmine;
  $("#charmText").textContent = data.charm;
  $("#weakText").textContent = data.weak;
  $("#quoteText").textContent = data.quote;
  $("#avoidText").textContent = data.avoid;
  $("#goodList").innerHTML = namesFromIndexes(data.good).map((name) => `<li>${name}</li>`).join("");
  $("#badList").innerHTML = namesFromIndexes(data.bad).map((name) => `<li>${name}</li>`).join("");
  showScreen("result");
}

function showPreviewResultFromHash() {
  const match = location.hash.match(/^#result=(\d{1,2})$/);
  if (!match) return false;
  const resultNumber = Math.min(Math.max(Number(match[1]), 1), typeNames.length);
  state.answers = Array(questions.length).fill(resultNumber - 1);
  showResult();
  return true;
}

function shareOnX() {
  const type = $("#resultType").textContent;
  const danger = $("#dangerScore").textContent;
  const catchCopy = $("#resultCatch").textContent;
  const text = `私の恋愛地雷タイプは【${type}】でした。\n地雷度：${danger}\n${catchCopy}\n#恋愛地雷タイプ診断`;
  const url = new URL("https://twitter.com/intent/tweet");
  url.searchParams.set("text", text);
  url.searchParams.set("url", location.href.split("#")[0]);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = [...text];
  let line = "";
  let lines = [];
  chars.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines = lines.slice(0, maxLines);
  lines.forEach((row, index) => ctx.fillText(row, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawPill(ctx, x, y, width, height, fill, text, color = "#fff8fc") {
  roundRect(ctx, x, y, width, height, height / 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.fillStyle = color;
  ctx.font = "900 32px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + width / 2, y + height / 2 + 1);
}

function drawBox(ctx, x, y, width, height, title, body) {
  ctx.fillStyle = "#fff8fc";
  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 5;
  roundRect(ctx, x, y, width, height, 18);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#ff237e";
  ctx.font = "900 28px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(title, x + 24, y + 42);
  ctx.fillStyle = "#161016";
  ctx.font = "700 26px sans-serif";
  wrapText(ctx, body, x + 24, y + 82, width - 48, 38, 4);
}

async function ensureTypeSpriteLoaded() {
  if (typeSprite.complete && typeSprite.naturalWidth) return;
  await typeSprite.decode();
}

function drawTypeArt(ctx, typeIndex, x, y, size) {
  const tileWidth = typeSprite.naturalWidth / 4;
  const tileHeight = typeSprite.naturalHeight / 4;
  const col = typeIndex % 4;
  const row = Math.floor(typeIndex / 4);
  ctx.save();
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(typeSprite, col * tileWidth, row * tileHeight, tileWidth, tileHeight, x, y, size, size);
  ctx.restore();
  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2 - 4, 0, Math.PI * 2);
  ctx.stroke();
}

async function downloadResultImage() {
  await ensureTypeSpriteLoaded();
  const winner = getWinnerIndex();
  const data = results[winner];
  const canvas = $("#saveCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#fff8fc");
  gradient.addColorStop(.38, "#ffd7ea");
  gradient.addColorStop(1, "#ff5aa9");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,35,126,.15)";
  for (let i = 0; i < 80; i += 1) {
    const x = (i * 127) % canvas.width;
    const y = (i * 211) % canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, i % 3 === 0 ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 12;
  roundRect(ctx, 36, 36, 1008, 1528, 36);
  ctx.stroke();
  ctx.setLineDash([18, 14]);
  ctx.lineWidth = 3;
  roundRect(ctx, 70, 70, 940, 1460, 22);
  ctx.stroke();
  ctx.setLineDash([]);

  drawPill(ctx, 86, 98, 420, 58, "#161016", "LOVE LANDMINE REPORT");
  drawPill(ctx, 802, 98, 160, 58, "#ff237e", `TYPE ${String(winner + 1).padStart(2, "0")}`);

  ctx.fillStyle = "#fff066";
  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 5;
  roundRect(ctx, 390, 200, 300, 64, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#161016";
  ctx.font = "900 34px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("診断結果", 540, 243);

  drawTypeArt(ctx, winner, 390, 286, 300);

  ctx.fillStyle = "#161016";
  ctx.font = "900 72px sans-serif";
  wrapText(ctx, typeNames[winner], 540, 660, 870, 82, 2);

  ctx.textAlign = "center";
  drawPill(ctx, 128, 810, 824, 66, "#161016", data.catch);

  ctx.textAlign = "left";
  ctx.fillStyle = "#fff8fc";
  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 6;
  roundRect(ctx, 86, 916, 908, 132, 18);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#161016";
  ctx.font = "900 40px sans-serif";
  ctx.fillText("地雷度", 126, 972);
  ctx.fillStyle = "#ff237e";
  ctx.font = "900 88px sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${data.danger}%`, 936, 996);
  ctx.fillStyle = "#ffe8f3";
  ctx.fillRect(126, 1014, 808, 22);
  ctx.fillStyle = "#ff237e";
  ctx.fillRect(126, 1014, 808 * data.danger / 100, 22);
  ctx.strokeStyle = "#161016";
  ctx.lineWidth = 4;
  ctx.strokeRect(126, 1014, 808, 22);

  const statLabels = ["恋愛依存度", "沼らせ力", "自爆しやすさ", "本命力"];
  data.stars.forEach((value, index) => {
    const x = index % 2 === 0 ? 86 : 550;
    const y = index < 2 ? 1078 : 1182;
    ctx.fillStyle = "#fff8fc";
    ctx.strokeStyle = "#161016";
    ctx.lineWidth = 5;
    roundRect(ctx, x, y, 444, 86, 14);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#161016";
    ctx.font = "900 26px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(statLabels[index], x + 22, y + 34);
    ctx.fillStyle = "#ff237e";
    ctx.font = "900 34px sans-serif";
    ctx.fillText(stars(value), x + 22, y + 70);
  });

  drawBox(ctx, 86, 1300, 908, 144, "あなたの恋愛地雷", data.landmine);

  ctx.fillStyle = "#161016";
  ctx.strokeStyle = "#161016";
  roundRect(ctx, 86, 1470, 908, 72, 16);
  ctx.fill();
  ctx.fillStyle = "#fff8fc";
  ctx.font = "900 28px sans-serif";
  ctx.textAlign = "center";
  wrapText(ctx, data.quote, 540, 1516, 820, 34, 2);

  ctx.fillStyle = "#161016";
  ctx.font = "900 24px sans-serif";
  ctx.fillText("#恋愛地雷タイプ診断", 540, 1572);

  canvas.toBlob((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `恋愛地雷タイプ診断_${typeNames[winner]}.png`;
    link.click();
    URL.revokeObjectURL(link.href);
  }, "image/png");
}

$("#startButton").addEventListener("click", startQuiz);
$("#catalogButton").addEventListener("click", () => showScreen("catalog"));
$("#catalogBackButton").addEventListener("click", () => showScreen("home"));
$("#catalogStartButton").addEventListener("click", startQuiz);
$("#backButton").addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});
$("#answers").addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;
  chooseAnswer(Number(button.dataset.answer));
});
$("#shareButton").addEventListener("click", shareOnX);
$("#saveButton").addEventListener("click", downloadResultImage);
$("#saveTopButton").addEventListener("click", downloadResultImage);
$("#retryButton").addEventListener("click", startQuiz);
$("#retryTopButton").addEventListener("click", startQuiz);

renderTypeCatalog();
if (!showPreviewResultFromHash() && location.hash === "#typeCatalog") {
  showScreen("catalog");
}
