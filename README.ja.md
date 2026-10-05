# takaoumehara/skills

<p>
  <a href="README.md">English</a> · <b>日本語</b> ·
  <a href="https://takaoumehara.github.io/skills/">ドキュメントサイト</a>
</p>

Takao Umehara が公開しているスキルをすべて集めた Claude Code プラグインマーケットプレイスです。
このリポジトリにあるのはカタログファイル `.claude-plugin/marketplace.json` だけです。各プラグインはそれぞれのリポジトリから直接インストールされるので、ここには何もコピーされず、どのプラグインも常に最新の状態です。

## インストール

Claude Code 内で:

```text
/plugin marketplace add takaoumehara/skills
/plugin install snap-pair@takaoumehara
```

`snap-pair` の部分は、下の表にある好きなプラグイン名に置き換えてください。`/plugin` を実行すると、カタログ全体を対話的に見られます。

シェルから:

```bash
claude plugin marketplace add takaoumehara/skills
claude plugin install superforge-skills@takaoumehara
```

あとから新しいリリースを取り込むには `/plugin marketplace update takaoumehara` を実行します。

## プラグイン

| プラグイン | インストール | できること | スキル数 | リポジトリ |
|---|---|---|---|---|
| **snap-pair** | `/plugin install snap-pair@takaoumehara` | QRコード・PIN・ブロードキャストでスマホと画面をペアリングし、Firebase・PartyKit・WebRTC・BroadcastChannel でリアルタイムに入力を送ります。npm パッケージ `snap-pair-core` が土台です。[ドキュメント](https://takaoumehara.github.io/snap-pair-skill/) | 1 | [snap-pair-skill](https://github.com/takaoumehara/snap-pair-skill) |
| **superforge-skills** | `/plugin install superforge-skills@takaoumehara` | 薄いルーターが、各タスクを14のプロダクト専門スキル（brain、biz、brand、ui、scroll、dev、test、debug、a11y、secure、roast、verify、ship、handoff）のどれかに振り分けます。リリースの前には検証ゲートがあります。 | 15 | [superforge-skill](https://github.com/takaoumehara/superforge-skill) |
| **interactive-experience-skills** | `/plugin install interactive-experience-skills@takaoumehara` | 人の動き・カメラ・センサーを使う制作向けです。まずディレクターが「体験」をつくるのか「トレーニングツール」をつくるのかを決め、インスタレーションの専門スキルか、動作学習の専門スキルに引き継ぎます。 | 3 | [interactive-experience-skills](https://github.com/takaoumehara/interactive-experience-skills) |
| **intuitive-game-design** | `/plugin install intuitive-game-design@takaoumehara` | 初めてのプレイヤーが説明書なしで分かるゲームを設計・実装します。直感の設計と診断、ワンタップのゲームフィール、Web Audio、カメラや体を使った入力、落ち着いたパズル、マルチプレイヤー同期を扱います。 | 1 | [intuitive-game-design-skill](https://github.com/takaoumehara/intuitive-game-design-skill) |
| **cross-model-handoff** | `/plugin install cross-model-handoff@takaoumehara` | `/clear` やツールの切り替えの前に `/handoff` を実行すると、合言葉つきのノートを1つ保存します。Claude Code、Codex、Gemini CLI、Antigravity、Cursor、または AGENTS.md を読むツールなら、名前を指定して再開できます。 | 3 + 2 フック | [cross-model-handoff](https://github.com/takaoumehara/cross-model-handoff) |
| **repo-cleanup** | `/plugin install repo-cleanup@takaoumehara` | 散らかった git の作業ツリーをきれいな状態に戻します。ビルド成果物の追跡を外し、`.gitignore` を補い、変更をコミット・stash・破棄に仕分けます。シークレットを漏らすことも、未コミットの作業を失うこともありません。 | 1 | [repo-cleanup](https://github.com/takaoumehara/repo-cleanup) |

スキル数は、Claude Code 2.1.283 でこのマーケットプレイスからクリーンインストールしたあとに `claude plugin details <name>` が表示した値です（2026-10-05）。

### 3つのデザイン系プラグインの使い分け

| 扱う内容 | 使うもの |
|---|---|
| スマホをコントローラーにする、みんなで見る大画面、QRやPINで入るルーム | `snap-pair` |
| 初めての人が数秒で分かるべきゲーム（ルール、手ざわり、音） | `intuitive-game-design` |
| インスタレーションやコーチング／トレーニング製品での、体・カメラ・センサー | `interactive-experience-skills` |
| どんなプロダクトでも、アイデアから実装・検証・リリースまで進める | `superforge-skills` |

これらは組み合わせて使えるように設計されています。たとえばマルチプレイヤーのパーティーゲームなら、ペアリングと通信に `snap-pair`、ルールと手ざわりに `intuitive-game-design` を使えます。

### そのほか（手動インストール）

| スキル | まだマーケットプレイスにない理由 |
|---|---|
| [failforward-skill](https://github.com/takaoumehara/failforward-skill) | このスキルは、`install.sh` が PATH に置くローカルの `failforward` CLI を呼び出します。プラグインとしてインストールするとスキルは入りますが CLI は入らないため、今のところはリポジトリのスクリプトでインストールしてください。 |

## このインデックスを使わずに1つだけインストールする

各リポジトリは、それ自体が1プラグインのマーケットプレイスでもあります。たとえば次のとおりです。

```text
/plugin marketplace add takaoumehara/superforge-skill
/plugin install superforge-skills@superforge
```

## トラブルシューティング

- **`ssh: … Could not read from remote repository`**: Claude Code は、SSH キーが設定されているように見えると GitHub のソースを SSH でクローンします。`CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` を設定すると HTTPS を使うようになります。どのリポジトリも公開されているので、認証情報は不要です。
- **Plugin not found**: `/plugin marketplace update takaoumehara` を実行してから、もう一度試してください。

## メンテナンス

- `claude plugin validate --strict .` は、push とプルリクエストのたびに CI で実行されます（`.github/workflows/validate-marketplace.yml`）。
- プラグインを追加するには、`.claude-plugin/marketplace.json` に `"source": {"source": "github", "repo": "takaoumehara/<repo>"}` を持つエントリを1つ足します。そのリポジトリに `plugin.json` がある場合、エントリの `name` はその `name` と一致させる必要があります。
- ドキュメントサイトは `site/` にあり、`.github/workflows/pages.yml` で GitHub Pages にデプロイされます。

## ライセンス

このインデックスは MIT です。各プラグインはそれぞれ独自のライセンスを持っています。各リポジトリを参照してください。
