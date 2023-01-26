# twitter-random-name

## 動作

毎日 22 時にタイムラインから 13 文字以内のツイートがランダムに選び、それを自身のユーザー名として設定し、結果をツイートする。  
12 月 31 日の 23 時には 1 年分の名前の中から反応が大きかったものをランキングしてツイートする。

## 使い方

`.env` ファイルに Twitter API Key 等を入力してください(v1.1 を使用します):

```
TWITTER_API_KEY =
TWITTER_API_SECRET =
TWITTER_ACCESS_TOKEN =
TWITTER_ACCESS_SECRET =
```

ライブラリのインストール

```sh
npm ci
```

ビルド

```sh
npm run build
```

実行

```sh
npm start
```
