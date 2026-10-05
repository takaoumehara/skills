/* UI strings. English page text lives in the HTML (data-i18n elements keep it as the default);
   `en` here only holds strings that are generated from JavaScript. Values may contain trusted HTML. */
window.TU_SKILLS_I18N = {
  en: {
    'ui.copy': 'Copy',
    'ui.copied': 'Copied',
    'ui.copiedToast': 'Copied to clipboard',
    'ui.copyFailed': 'Copy failed',
    'ui.lightMode': 'Switch to light mode',
    'ui.darkMode': 'Switch to dark mode'
  },

  ja: {
    'meta.title': 'takaoumehara/skills — Claude Code プラグインマーケットプレイス',
    'meta.description': 'Takao Umehara が公開しているスキルをすべて集めた Claude Code プラグインマーケットプレイスです。6つのプラグインは、それぞれ自分の GitHub リポジトリから直接インストールされます。',

    'ui.skip': '本文へスキップ',
    'ui.copy': 'コピー',
    'ui.copied': 'コピー済み',
    'ui.copiedToast': 'クリップボードにコピーしました',
    'ui.copyFailed': 'コピーできませんでした',
    'ui.lightMode': 'ライトモードに切り替え',
    'ui.darkMode': 'ダークモードに切り替え',

    'nav.install': 'インストール',
    'nav.plugins': 'プラグイン',
    'nav.which': '選び方',
    'nav.also': 'そのほか',

    'hero.eyebrow': 'Claude Code プラグインマーケットプレイス · MIT',
    'hero.meta': '6 プラグイン · 24 スキル',
    'hero.tagline': '6つの Claude Code プラグインを、<span class="nowrap">1行で。</span>',
    'hero.lead': 'Takao Umehara が公開しているスキルをすべて集めた Claude Code プラグインマーケットプレイスです。ここにあるのはカタログファイルだけ。各プラグインはそれぞれのリポジトリから直接インストールされるので、何もコピーされず、どのプラグインも常に最新です。',
    'hero.ctaInstall': 'インストール',
    'hero.ctaPlugins': 'プラグイン一覧',
    'hero.codeLabel': 'Claude Code 内で',
    'hero.alt': '1つのマーケットプレイスカタログ takaoumehara/skills が、GitHub 上の6つのプラグインリポジトリを指している図。',

    'install.eyebrow': 'インストール',
    'install.title': 'マーケットプレイスを一度追加して、プラグインを選ぶ',
    'install.lead': '<code>snap-pair</code> の部分は、下の一覧にある好きなプラグイン名に置き換えてください。<code>/plugin</code> を実行すると、カタログ全体を対話的に見られます。',
    'install.session': 'Claude Code 内で',
    'install.shell': 'シェルから',
    'install.update': 'あとから新しいリリースを取り込む',

    'plugins.eyebrow': 'プラグイン',
    'plugins.title': '6つのプラグイン、6つのリポジトリ',
    'plugins.lead': '各エントリはプラグイン自身の GitHub リポジトリを指しています。どれも1行でインストールできます。',
    'plugins.n1': '1 スキル',
    'plugins.n3': '3 スキル',
    'plugins.n15': '15 スキル',
    'plugins.n3h': '3 スキル + 2 フック',
    'plugins.docs': 'ドキュメントサイト',
    'plugins.snap': 'QRコード・PIN・ブロードキャストでスマホと画面をペアリングし、Firebase・PartyKit・WebRTC・BroadcastChannel でリアルタイムに入力を送ります。npm パッケージ <code>snap-pair-core</code> が土台です。',
    'plugins.superforge': '薄いルーターが、各タスクを14のプロダクト専門スキル（brain、biz、brand、ui、scroll、dev、test、debug、a11y、secure、roast、verify、ship、handoff）のどれかに振り分けます。リリースの前には検証ゲートがあります。',
    'plugins.interactive': '人の動き・カメラ・センサーを使う制作のためのプラグインです。まずディレクターが「体験」をつくるのか「トレーニングツール」をつくるのかを決め、インスタレーションの専門スキルか、動作学習の専門スキルに引き継ぎます。',
    'plugins.game': '初めてのプレイヤーが説明書なしで分かるゲームを設計・実装します。直感の設計と診断、ワンタップのゲームフィール、Web Audio、カメラや体を使った入力、落ち着いたパズル、マルチプレイヤー同期を扱います。',
    'plugins.handoff': '<code>/clear</code> やツールの切り替えの前に <code>/handoff</code> を実行すると、合言葉つきのノートを1つ保存します。Claude Code、Codex、Gemini CLI、Antigravity、Cursor、または AGENTS.md を読むツールなら、名前を指定して再開できます。',
    'plugins.cleanup': '散らかった git の作業ツリーをきれいな状態に戻します。ビルド成果物の追跡を外し、<code>.gitignore</code> を補い、変更をコミット・stash・破棄に仕分けます。シークレットを漏らすことも、未コミットの作業を失うこともありません。',
    'plugins.countsNote': 'スキル数は、Claude Code 2.1.283 でこのマーケットプレイスからクリーンインストールしたあとに <code>claude plugin details &lt;name&gt;</code> が表示した値です（2026-10-05）。',

    'which.eyebrow': '選び方',
    'which.title': '3つのデザイン系プラグインの使い分け',
    'which.lead': 'これらは組み合わせて使えるように設計されています。たとえばマルチプレイヤーのパーティーゲームなら、ペアリングと通信に <code>snap-pair</code>、ルールと手ざわりに <code>intuitive-game-design</code> を使えます。',
    'which.thWork': '扱う内容',
    'which.thUse': '使うもの',
    'which.r1': 'スマホをコントローラーにする、みんなで見る大画面、QRやPINで入るルーム',
    'which.r2': '初めての人が数秒で分かるべきゲーム（ルール、手ざわり、音）',
    'which.r3': 'インスタレーションやコーチング／トレーニング製品での、体・カメラ・センサー',
    'which.r4': 'どんなプロダクトでも、アイデアから実装・検証・リリースまで進める',

    'also.eyebrow': 'そのほか',
    'also.title': '手動でインストールするスキルがもう1つ',
    'also.thSkill': 'スキル',
    'also.thWhy': 'まだマーケットプレイスにない理由',
    'also.why': 'このスキルは、<code>install.sh</code> が PATH に置くローカルの <code>failforward</code> CLI を呼び出します。プラグインとしてインストールするとスキルは入りますが CLI は入らないため、今のところはリポジトリのスクリプトでインストールしてください。',

    'faq.title': 'よくある質問',
    'faq.q1': 'このリポジトリに何かコピーされていますか？',
    'faq.a1': 'いいえ。このリポジトリにあるのはカタログファイル <code>.claude-plugin/marketplace.json</code> だけです。各エントリはプラグイン自身の GitHub リポジトリを指しているので、どのプラグインも元のリポジトリから直接インストールされ、常に最新です。',
    'faq.q2': '<code>ssh: … Could not read from remote repository</code> と表示される',
    'faq.a2': 'Claude Code は、SSH キーが設定されているように見えると GitHub のソースを SSH でクローンします。<code>CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1</code> を設定すると HTTPS を使うようになります。どのリポジトリも公開されているので、認証情報は不要です。',
    'faq.q3': 'このインデックスを使わずに、1つのプラグインだけ入れられますか？',
    'faq.a3': 'はい。各リポジトリはそれ自体が1プラグインのマーケットプレイスでもあります。たとえば次のとおりです。',
    'faq.q4': '更新するには？「Plugin not found」と出たときは？',
    'faq.a4': '<code>/plugin marketplace update takaoumehara</code> を実行してから、もう一度試してください。',

    'footer.license': 'MIT ライセンス',
    'footer.by': 'by Takao Umehara',

    'nf.title': 'ページが見つかりません',
    'nf.body': 'このページは存在しないか、移動しました。',
    'nf.home': 'トップへ戻る'
  }
};
