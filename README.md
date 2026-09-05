# Zonian Dictionary

## 概要
Zonian Dictionary は、GitHub Pages で公開する前提の静的サイトです。
辞書風の検索ページをシンプルに構成しており、ブログや辞書サービスなどの小規模公開にも使いやすい設計です。

## できること
- キーワード検索
- GitHub Pages への簡単な公開
- 静的サイトとしての高速表示

## ローカルで見る方法
```bash
git clone <このリポジトリのURL>
cd zonian-dictionary
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開いてください。

## GitHub Pages で公開する方法
1. このリポジトリを GitHub に push する
2. GitHub のリポジトリ画面で Settings を開く
3. 左メニューの Pages を選ぶ
4. Source を「GitHub Actions」に変更する
5. 反映後、main ブランチへの push で自動デプロイされる

このリポジトリには `.github/workflows/deploy-pages.yml` が入っているため、公開設定はすぐに使えます。

## リポジトリ構成
- `index.html` : メインページ
- `styles.css` : スタイル定義
- `app.js` : 検索ロジック
- `.github/workflows/deploy-pages.yml` : GitHub Pages 配信用の自動デプロイ設定
- `.nojekyll` : Jekyll の処理を無効化して静的配信を安定化

## カスタマイズの例
- タイトルや説明文を `index.html` で変更
- 色やレイアウトを `styles.css` で調整

## ライセンス
MIT ライセンスを想定した構成です。必要に応じてライセンスファイルを追加してください。
