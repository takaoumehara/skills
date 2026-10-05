# takaoumehara/skills

<p>
  <b>English</b> · <a href="README.ja.md">日本語</a> ·
  <a href="https://takaoumehara.github.io/skills/">Docs site</a>
</p>

A Claude Code plugin marketplace that indexes every public skill by Takao Umehara.
It holds only a catalog file, `.claude-plugin/marketplace.json`. Each plugin is installed straight from its own repository, so nothing is copied here and every plugin stays current.

## Install

Inside Claude Code:

```text
/plugin marketplace add takaoumehara/skills
/plugin install snap-pair@takaoumehara
```

Swap `snap-pair` for any plugin name from the table below. Run `/plugin` to browse the whole catalog interactively.

From your shell:

```bash
claude plugin marketplace add takaoumehara/skills
claude plugin install superforge-skills@takaoumehara
```

Pick up new releases later with `/plugin marketplace update takaoumehara`.

## Plugins

| Plugin | Install | What it does | Skills | Repo |
|---|---|---|---|---|
| **snap-pair** | `/plugin install snap-pair@takaoumehara` | Pairs phones and screens by QR code, PIN, or broadcast, then streams realtime input over Firebase, PartyKit, WebRTC, or BroadcastChannel. Backed by the `snap-pair-core` npm package. [Docs](https://takaoumehara.github.io/snap-pair-skill/) | 1 | [snap-pair-skill](https://github.com/takaoumehara/snap-pair-skill) |
| **superforge-skills** | `/plugin install superforge-skills@takaoumehara` | A thin router that sends each task to one of 14 product specialists (brain, biz, brand, ui, scroll, dev, test, debug, a11y, secure, roast, verify, ship, handoff), with a verification gate before release. | 15 | [superforge-skill](https://github.com/takaoumehara/superforge-skill) |
| **interactive-experience-skills** | `/plugin install interactive-experience-skills@takaoumehara` | For work built on human movement, cameras, and sensors. A director first decides whether you are making an experience or a training tool, then hands off to the installation specialist or the movement-learning specialist. | 3 | [interactive-experience-skills](https://github.com/takaoumehara/interactive-experience-skills) |
| **intuitive-game-design** | `/plugin install intuitive-game-design@takaoumehara` | Designs and builds games a first-time player understands without a manual: intuition design and diagnosis, one-tap game feel, Web Audio, camera and body input, calm puzzles, and multiplayer sync. | 1 | [intuitive-game-design-skill](https://github.com/takaoumehara/intuitive-game-design-skill) |
| **cross-model-handoff** | `/plugin install cross-model-handoff@takaoumehara` | Run `/handoff` before `/clear` or a tool switch to save one note under a passphrase. Resume it by name in Claude Code, Codex, Gemini CLI, Antigravity, Cursor, or any tool that reads AGENTS.md. | 3 + 2 hooks | [cross-model-handoff](https://github.com/takaoumehara/cross-model-handoff) |
| **repo-cleanup** | `/plugin install repo-cleanup@takaoumehara` | Brings a messy git working tree back to clean: untracks build output, completes `.gitignore`, and sorts changes into commit, stash, or discard. It never leaks a secret or drops uncommitted work. | 1 | [repo-cleanup](https://github.com/takaoumehara/repo-cleanup) |

The skill counts are what `claude plugin details <name>` reported after a clean install from this marketplace on Claude Code 2.1.283 (2026-10-05).

### Where the three design plugins split

| If the work is about… | Use |
|---|---|
| Phones as controllers, a shared big screen, rooms joined by QR or PIN | `snap-pair` |
| A game a stranger should understand in seconds (rules, feel, sound) | `intuitive-game-design` |
| Bodies, cameras, or sensors in an installation or a coaching/training product | `interactive-experience-skills` |
| Taking any product from idea through build, verification, and release | `superforge-skills` |

They are designed to work together. For example, a multiplayer party game can use `snap-pair` for pairing and transport and `intuitive-game-design` for the rules and feel.

### Also available (manual install)

| Skill | Why it is not in the marketplace yet |
|---|---|
| [failforward-skill](https://github.com/takaoumehara/failforward-skill) | The skill calls a local `failforward` CLI that its `install.sh` puts on your PATH. A plugin install would bring the skill but not the CLI, so install it with the repo's script for now. |

## Install a single plugin without this index

Each repo is also a one-plugin marketplace of its own, for example:

```text
/plugin marketplace add takaoumehara/superforge-skill
/plugin install superforge-skills@superforge
```

## Troubleshooting

- **`ssh: … Could not read from remote repository`**: Claude Code clones GitHub sources over SSH when an SSH key looks configured. Set `CLAUDE_CODE_PLUGIN_PREFER_HTTPS=1` to make it use HTTPS instead. All of these repos are public, so no credentials are needed.
- **Plugin not found**: run `/plugin marketplace update takaoumehara` and try again.

## Maintaining

- `claude plugin validate --strict .` runs in CI on every push and pull request (`.github/workflows/validate-marketplace.yml`).
- To add a plugin, add one entry to `.claude-plugin/marketplace.json` with `"source": {"source": "github", "repo": "takaoumehara/<repo>"}`. The entry `name` must match the `name` in that repo's `plugin.json` if it has one.
- The docs site lives in `site/` and deploys to GitHub Pages through `.github/workflows/pages.yml`.

## License

MIT for this index. Each plugin carries its own license; see its repository.
