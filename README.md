# twitter-random-name

## 動作

毎日22時にタイムラインから13文字以内のツイートがランダムに選び、それを自身のユーザー名として設定し、結果をツイートする。  
12月31日の23時には1年分の名前の中から反応が大きかったものをランキングしてツイートする。

## 使い方

`.env`ファイルにTwitter API Key等を入力してください（v1.1を使用します）:

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
