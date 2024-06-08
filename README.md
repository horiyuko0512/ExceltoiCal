# ExceltoiCal

## overview
毎月、バイト先からシフト表がExcelファイルで送られてくるため、その度にカレンダーに予定を追加するのが面倒くさいので、ExcelファイルをicalにしてGoogleカレンダーにicsファイルをインポートするだけで予定を追加できるようにした。

## Function
- Excelファイルからical形式のファイルを生成する。
-  `generateCalendar.mjs` ファイルの `myName` 変数を変更することで自分のシフトだけをインポート出来る。

## Prerequisites
- Node.js
- npm

## Getting Started
1. このリポジトリをクローンします。
    ```sh
    git clone https://github.com/horiyuko0512/ExceltoiCal.git
    cd ExceltoiCal
    ```
2. 必要なパッケージをインストールします。
    ```sh
    npm install
    ```
## How to use
1. `sample-schedule.xlsx` ファイルにシフト情報を入力します。
2. `generateCalendar.mjs` ファイルの `myName` 変数を自分の名前に変更します。
   
    ```javascript
    // generateCalendar.mjs
    const myName = 'あなたの名前'; // ここを自分の名前に変更
    ```
4. スクリプトを実行して、iCalendarファイルを生成します。
    ```sh
    node generateCalendar.mjs
    ```
5. `shift_schedule.ics` ファイルが生成されます。このファイルをカレンダーアプリにインポートしてください。

## Notes

- このツールは、Excelファイルのフォーマットが`sample-schedule.xlsx` ファイルと同じであることを前提としています。Excelファイルのフォーマットが異なる場合、スクリプトが正しく動作しない可能性があります。
- シフトイン時間は24時間表記で記入してください。
- 現在、`sample-schedule.xlsx` ファイルや`myName` 変数に書かれている内容は現実とは関係ないデータです。
