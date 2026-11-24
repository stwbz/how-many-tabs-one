# How Many Tabs Do You Have Open? — 1

[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/stwbz/how-many-tabs-one/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/stwbz/how-many-tabs-one/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

Entry for the make.fun bounty [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d).

## The entry

One digit: `1` — one browser tab open. The minimalist's answer.

## How it works

`main.ts` (Node 22, no dependencies) validates the count — 1–5 UTF-8
characters, digits only — and writes it byte-for-byte to
`/output/entry.txt` with no trailing newline, so every run produces
identical output.

```sh
node main.ts
cat /output/entry.txt   # 1
```

## License

MIT — see [LICENSE](LICENSE).
